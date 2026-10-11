import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.PreparedStatement;
import java.sql.ResultSetMetaData;
import java.sql.Statement;
import java.util.Scanner;
import java.security.MessageDigest;
import java.util.UUID;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.TimeUnit;

public class Server {
    private static final String CLOUD_DB_URL = "jdbc:postgresql://dpg-db54c7ajnfac7396rhag-a.singapore-postgres.render.com:5432/cine_archive?sslmode=require";
    private static final String CLOUD_USER = "cine_man";
    private static final String CLOUD_PASS = "U1QfHtPVsMk2AbHUEi3NqpxZL7V6gWsc";

    private static volatile boolean usingCloud = false;
    private static final int POOL_SIZE = 4;
    private static final BlockingQueue<Connection> connectionPool = new LinkedBlockingQueue<>(POOL_SIZE);

    private static String getSqlitePath() {
        if (new File("cine_archive.db").exists()) return "cine_archive.db";
        if (new File("backend/cine_archive.db").exists()) return "backend/cine_archive.db";
        return new File("backend").isDirectory() ? "backend/cine_archive.db" : "cine_archive.db";
    }

    private static void ensureLocalDatabase() {
        try {
            String path = getSqlitePath();
            File f = new File(path);
            if (!f.exists() || f.length() < 2048) {
                System.out.println("[LOCAL DB] Initializing SQLite database at " + path + "...");
                try (Connection conn = DriverManager.getConnection("jdbc:sqlite:" + path);
                     Statement stmt = conn.createStatement()) {
                    
                    String schemaPath = new File("db/sqlite_schema.sql").exists() ? "db/sqlite_schema.sql" :
                                       (new File("../db/sqlite_schema.sql").exists() ? "../db/sqlite_schema.sql" : null);
                    String seedPath = new File("db/full_seed.sql").exists() ? "db/full_seed.sql" :
                                     (new File("../db/full_seed.sql").exists() ? "../db/full_seed.sql" : null);

                    if (schemaPath != null) {
                        String schema = new String(Files.readAllBytes(Paths.get(schemaPath)));
                        for (String sql : schema.split(";")) {
                            if (!sql.trim().isEmpty()) {
                                try { stmt.execute(sql.trim()); } catch (Throwable ignored) {}
                            }
                        }
                    }

                    if (seedPath != null) {
                        String seed = new String(Files.readAllBytes(Paths.get(seedPath)));
                        for (String sql : seed.split(";")) {
                            if (!sql.trim().isEmpty()) {
                                try { stmt.execute(sql.trim()); } catch (Throwable ignored) {}
                            }
                        }
                    }

                    // Default password hash for 'password'
                    String defaultHash = hashPassword("password");
                    try (PreparedStatement upd = conn.prepareStatement("UPDATE users SET password_hash = ? WHERE password_hash IS NULL")) {
                        upd.setString(1, defaultHash);
                        upd.executeUpdate();
                    }
                    try { stmt.execute("ALTER TABLE users ADD COLUMN last_login TEXT"); } catch (Throwable ignored) {}
                    try {
                        int updated = stmt.executeUpdate("UPDATE users SET role = 'Admin', password_hash = '" + defaultHash + "' WHERE LOWER(username) = 'admin'");
                        if (updated == 0) {
                            stmt.execute("INSERT INTO users (id, username, email, role, joined_date, bio, password_hash, last_login) VALUES ('u_admin', 'admin', 'admin@cinearchive.org', 'Admin', '2025-01-01', 'System Administrator & Operations', '" + defaultHash + "', datetime('now'))");
                        }
                    } catch (Throwable ignored) {}
                    System.out.println("[LOCAL DB] Initialization complete.");
                }
            }
        } catch (Throwable t) {
            System.err.println("[LOCAL DB] Note: " + t.getMessage());
        }
    }

    private static boolean testCloudConnection() {
        try {
            DriverManager.setLoginTimeout(5);
            try (Connection conn = DriverManager.getConnection(CLOUD_DB_URL, CLOUD_USER, CLOUD_PASS)) {
                return conn != null && !conn.isClosed() && conn.isValid(4);
            }
        } catch (Throwable t) {
            return false;
        }
    }

    private static void ensureCloudSchema(Connection conn) {
        if (conn == null) return;
        try (Statement stmt = conn.createStatement()) {
            try { stmt.execute("ALTER TABLE users ADD COLUMN IF NOT EXISTS last_login TIMESTAMP"); } catch (Throwable ignored) {}
            try {
                String defaultHash = hashPassword("password");
                int updated = stmt.executeUpdate("UPDATE users SET role = 'Admin', password_hash = '" + defaultHash + "' WHERE LOWER(username) = 'admin'");
                if (updated == 0) {
                    stmt.execute("INSERT INTO users (id, username, email, role, joined_date, bio, password_hash, last_login) VALUES ('u_admin', 'admin', 'admin@cinearchive.org', 'Admin', '2025-01-01', 'System Administrator & Operations', '" + defaultHash + "', CURRENT_TIMESTAMP) ON CONFLICT (id) DO UPDATE SET role = 'Admin', password_hash = '" + defaultHash + "'");
                }
            } catch (Throwable ignored) {}
        } catch (Throwable ignored) {}
    }

    private static Connection getDBConnection() throws Exception {
        if (usingCloud) {
            try {
                Connection conn = connectionPool.poll(1, TimeUnit.SECONDS);
                if (conn != null) {
                    if (!conn.isClosed() && conn.isValid(1)) {
                        return conn;
                    }
                    try { conn.close(); } catch (Throwable ignored) {}
                }
                DriverManager.setLoginTimeout(2);
                Connection newConn = DriverManager.getConnection(CLOUD_DB_URL, CLOUD_USER, CLOUD_PASS);
                if (newConn != null) return newConn;
            } catch (Throwable t) {
                System.out.println("[DB FAILOVER] Cloud connection lost: " + t.getMessage() + ". Switching to local database.");
                usingCloud = false;
            }
        }
        return DriverManager.getConnection("jdbc:sqlite:" + getSqlitePath());
    }

    private static void releaseConnection(Connection conn) {
        if (conn == null) return;
        try {
            if (usingCloud) {
                String url = conn.getMetaData().getURL();
                if (url != null && url.contains("postgresql")) {
                    if (!conn.isClosed() && conn.isValid(1)) {
                        if (!connectionPool.offer(conn)) {
                            conn.close();
                        }
                        return;
                    }
                }
            }
            conn.close();
        } catch (Throwable ignored) {
            try { conn.close(); } catch (Throwable ignored2) {}
        }
    }

    public static void main(String[] args) throws Exception {
        try { Class.forName("org.sqlite.JDBC"); } catch (Throwable ignored) {}
        try { Class.forName("org.postgresql.Driver"); } catch (Throwable ignored) {}

        ensureLocalDatabase();

        System.out.println("Checking Render PostgreSQL connection...");
        if (testCloudConnection()) {
            usingCloud = true;
            System.out.println("[DATABASE] Connected to shared Render PostgreSQL cloud database.");
            // Populate pool
            for (int i = 0; i < POOL_SIZE; i++) {
                try {
                    Connection c = DriverManager.getConnection(CLOUD_DB_URL, CLOUD_USER, CLOUD_PASS);
                    if (c != null) {
                        if (i == 0) ensureCloudSchema(c);
                        connectionPool.offer(c);
                    }
                } catch (Throwable ignored) {}
            }
        } else {
            usingCloud = false;
            System.out.println("[DATABASE] Port 5432 unreachable (campus/network firewall). Local SQLite database engine activated for zero-downtime operation.");
        }

        // Background monitor thread: checks every 30s
        Thread monitorThread = new Thread(() -> {
            while (true) {
                try {
                    Thread.sleep(30 * 1000);
                    if (!usingCloud) {
                        if (testCloudConnection()) {
                            usingCloud = true;
                            System.out.println("[DATABASE] Render PostgreSQL connection restored! Switched to shared cloud DB.");
                            try {
                                Connection testC = DriverManager.getConnection(CLOUD_DB_URL, CLOUD_USER, CLOUD_PASS);
                                if (testC != null) {
                                    ensureCloudSchema(testC);
                                    connectionPool.offer(testC);
                                }
                            } catch (Throwable ignored) {}
                        }
                    } else {
                        // Keep-alive ping
                        Connection c = connectionPool.poll();
                        if (c != null) {
                            try (Statement s = c.createStatement()) {
                                s.executeQuery("SELECT 1");
                                connectionPool.offer(c);
                            } catch (Throwable t) {
                                try { c.close(); } catch (Throwable ignored) {}
                                usingCloud = false;
                                System.out.println("[DATABASE] Cloud ping failed. Switched to local database.");
                            }
                        }
                    }
                } catch (Throwable ignored) {}
            }
        });
        monitorThread.setDaemon(true);
        monitorThread.start();

        HttpServer server = null;
        int port = 8080;
        try {
            server = HttpServer.create(new InetSocketAddress(port), 0);
        } catch (java.net.BindException be) {
            System.out.println("[PORT 8080 BUSY] Existing process detected on port " + port + ". Auto-releasing port...");
            try {
                Process p = Runtime.getRuntime().exec(new String[]{"sh", "-c", "fuser -k " + port + "/tcp 2>/dev/null || (lsof -ti:" + port + " | xargs kill -9 2>/dev/null)"});
                p.waitFor();
                Thread.sleep(800);
                server = HttpServer.create(new InetSocketAddress(port), 0);
                System.out.println("[PORT 8080 BUSY] Successfully reclaimed port " + port + "!");
            } catch (Throwable t) {
                System.err.println("\n[ERROR] Port " + port + " is currently in use by another program.");
                System.err.println("To free the port manually, run: fuser -k 8080/tcp   OR   lsof -ti:8080 | xargs kill -9");
                throw be;
            }
        }
        File webDir = new File("index.html").exists() ? new File(".") : new File("..");
        server.createContext("/", new StaticHandler(webDir));
        server.createContext("/api/sql", new SqlHandler());
        server.createContext("/api/signup", new SignupHandler());
        server.createContext("/api/login", new LoginHandler());
        server.setExecutor(null);
        System.out.println("Java Database & Web Server running on http://localhost:8080 (Dual-Engine: " + (usingCloud ? "Shared Cloud PostgreSQL" : "Local SQLite") + ")...");
        server.start();
    }

    private static String hashPassword(String password) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hash = digest.digest(password.getBytes("UTF-8"));
            StringBuilder hexString = new StringBuilder();
            for (byte b : hash) {
                String hex = Integer.toHexString(0xff & b);
                if (hex.length() == 1) hexString.append('0');
                hexString.append(hex);
            }
            return hexString.toString();
        } catch (Exception ex) {
            throw new RuntimeException(ex);
        }
    }

    private static void setCorsHeaders(HttpExchange t) {
        t.getResponseHeaders().set("Access-Control-Allow-Origin", "*");
        t.getResponseHeaders().set("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
        t.getResponseHeaders().set("Access-Control-Allow-Headers", "Content-Type");
    }

    static class StaticHandler implements HttpHandler {
        private final File rootDir;
        public StaticHandler(File rootDir) {
            this.rootDir = rootDir;
        }

        @Override
        public void handle(HttpExchange t) throws IOException {
            setCorsHeaders(t);
            if (t.getRequestMethod().equalsIgnoreCase("OPTIONS")) {
                t.sendResponseHeaders(204, -1);
                return;
            }

            String path = t.getRequestURI().getPath();
            if (path == null || path.equals("/") || path.isEmpty()) {
                path = "/index.html";
            }

            File file = new File(rootDir, path.startsWith("/") ? path.substring(1) : path);
            if (!file.exists() || file.isDirectory()) {
                file = new File(rootDir, "index.html");
            }

            if (file.exists() && !file.isDirectory()) {
                String fileName = file.getName().toLowerCase();
                String contentType = "application/octet-stream";
                if (fileName.endsWith(".html")) contentType = "text/html; charset=UTF-8";
                else if (fileName.endsWith(".js")) contentType = "application/javascript; charset=UTF-8";
                else if (fileName.endsWith(".css")) contentType = "text/css; charset=UTF-8";
                else if (fileName.endsWith(".json")) contentType = "application/json";
                else if (fileName.endsWith(".jpg") || fileName.endsWith(".jpeg")) contentType = "image/jpeg";
                else if (fileName.endsWith(".png")) contentType = "image/png";
                else if (fileName.endsWith(".svg")) contentType = "image/svg+xml";

                byte[] data = Files.readAllBytes(file.toPath());
                t.getResponseHeaders().set("Content-Type", contentType);
                t.sendResponseHeaders(200, data.length);
                OutputStream os = t.getResponseBody();
                os.write(data);
                os.close();
            } else {
                String notFound = "File not found";
                t.sendResponseHeaders(404, notFound.length());
                OutputStream os = t.getResponseBody();
                os.write(notFound.getBytes());
                os.close();
            }
        }
    }

    static class SignupHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange t) throws IOException {
            setCorsHeaders(t);
            if (t.getRequestMethod().equalsIgnoreCase("OPTIONS")) {
                t.sendResponseHeaders(204, -1);
                return;
            }
            try {
                InputStream is = t.getRequestBody();
                Scanner scanner = new Scanner(is).useDelimiter("\\A");
                String body = scanner.hasNext() ? scanner.next() : "";
                
                String username = body.contains("\"username\":\"") ? body.split("\"username\":\"")[1].split("\"")[0].trim() : "";
                String password = body.contains("\"password\":\"") ? body.split("\"password\":\"")[1].split("\"")[0] : "";
                
                if (username.isEmpty() || password.isEmpty()) {
                    throw new Exception("Username and password are required.");
                }

                String email = username.toLowerCase() + "@cinearchive.org";
                String hash = hashPassword(password);
                String id = "u" + UUID.randomUUID().toString().substring(0, 8);

                Connection conn = getDBConnection();
                try {
                    PreparedStatement checkStmt = conn.prepareStatement("SELECT id FROM users WHERE LOWER(username) = LOWER(?) OR LOWER(email) = LOWER(?)");
                    checkStmt.setString(1, username);
                    checkStmt.setString(2, email);
                    ResultSet checkRs = checkStmt.executeQuery();
                    if (checkRs.next()) {
                        checkRs.close();
                        checkStmt.close();
                        throw new Exception("Username already exists. Please choose a different username.");
                    }
                    checkRs.close();
                    checkStmt.close();

                    String role = username.equalsIgnoreCase("admin") ? "Admin" : "User";
                    PreparedStatement stmt = conn.prepareStatement("INSERT INTO users (id, username, email, password_hash, role, joined_date, bio) VALUES (?, ?, ?, ?, ?, CURRENT_DATE, 'New user ready to explore cinema.')");
                    stmt.setString(1, id);
                    stmt.setString(2, username);
                    stmt.setString(3, email);
                    stmt.setString(4, hash);
                    stmt.setString(5, role);
                    stmt.executeUpdate();
                    stmt.close();
                } finally {
                    releaseConnection(conn);
                }

                String response = "{\"status\":\"success\", \"id\":\"" + id + "\", \"username\":\"" + username + "\", \"role\":\"" + (username.equalsIgnoreCase("admin") ? "Admin" : "User") + "\"}";
                t.getResponseHeaders().set("Content-Type", "application/json");
                byte[] bytes = response.getBytes("UTF-8");
                t.sendResponseHeaders(200, bytes.length);
                OutputStream os = t.getResponseBody();
                os.write(bytes);
                os.close();
            } catch (Exception e) {
                String errMsg = e.getMessage();
                if (errMsg != null && (errMsg.toLowerCase().contains("unique constraint") || errMsg.toLowerCase().contains("duplicate key"))) {
                    errMsg = "Username already exists. Please choose a different username.";
                }
                String err = "{\"error\": \"" + String.valueOf(errMsg).replace("\"", "\\\"").replace("\n", " ") + "\"}";
                t.getResponseHeaders().set("Content-Type", "application/json");
                byte[] bytes = err.getBytes("UTF-8");
                t.sendResponseHeaders(400, bytes.length);
                OutputStream os = t.getResponseBody();
                os.write(bytes);
                os.close();
            }
        }
    }

    static class LoginHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange t) throws IOException {
            setCorsHeaders(t);
            if (t.getRequestMethod().equalsIgnoreCase("OPTIONS")) {
                t.sendResponseHeaders(204, -1);
                return;
            }
            try {
                InputStream is = t.getRequestBody();
                Scanner scanner = new Scanner(is).useDelimiter("\\A");
                String body = scanner.hasNext() ? scanner.next() : "";
                
                String username = body.contains("\"username\":\"") ? body.split("\"username\":\"")[1].split("\"")[0].trim() : "";
                String password = body.contains("\"password\":\"") ? body.split("\"password\":\"")[1].split("\"")[0] : "";

                if (username.isEmpty() || password.isEmpty()) {
                    throw new Exception("Username and password are required.");
                }

                String hash = hashPassword(password);
                Connection conn = getDBConnection();
                String response;
                boolean isSuccess = false;
                try {
                    PreparedStatement stmt = conn.prepareStatement("SELECT id, username, email, role, bio, password_hash FROM users WHERE LOWER(username) = LOWER(?)");
                    stmt.setString(1, username);
                    ResultSet rs = stmt.executeQuery();
                    
                    if (rs.next()) {
                        String storedHash = rs.getString("password_hash");
                        boolean matched = false;

                        if (storedHash != null && storedHash.equalsIgnoreCase(hash)) {
                            matched = true;
                        } else if ((storedHash == null || storedHash.isEmpty()) && ("password".equalsIgnoreCase(password) || "admin".equalsIgnoreCase(password))) {
                            // Seed user default password match
                            matched = true;
                            try (PreparedStatement upd = conn.prepareStatement("UPDATE users SET password_hash = ? WHERE id = ?")) {
                                upd.setString(1, hash);
                                upd.setString(2, rs.getString("id"));
                                upd.executeUpdate();
                            } catch (Throwable ignored) {}
                        }

                        if (matched) {
                            String userId = rs.getString("id");
                            String userRole = rs.getString("role");
                            if (username.equalsIgnoreCase("admin") || (userRole != null && userRole.equalsIgnoreCase("admin"))) {
                                userRole = "Admin";
                                try (PreparedStatement updRole = conn.prepareStatement("UPDATE users SET role = 'Admin' WHERE id = ?")) {
                                    updRole.setString(1, userId);
                                    updRole.executeUpdate();
                                } catch (Throwable ignored) {}
                            }
                            try (PreparedStatement updLogin = conn.prepareStatement("UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE id = ?")) {
                                updLogin.setString(1, userId);
                                updLogin.executeUpdate();
                            } catch (Throwable ignored) {}

                            response = "{\"status\":\"success\", \"id\":\"" + userId + "\", \"username\":\"" + rs.getString("username") + "\", \"role\":\"" + (userRole != null ? userRole : "User") + "\"}";
                            isSuccess = true;
                        } else {
                            response = "{\"error\":\"Invalid username or password\"}";
                        }
                    } else {
                        response = "{\"error\":\"User not found. Please check your username or sign up.\"}";
                    }
                    rs.close();
                    stmt.close();
                } finally {
                    releaseConnection(conn);
                }

                t.getResponseHeaders().set("Content-Type", "application/json");
                byte[] bytes = response.getBytes("UTF-8");
                int statusCode = isSuccess ? 200 : 401;
                t.sendResponseHeaders(statusCode, bytes.length);
                OutputStream os = t.getResponseBody();
                os.write(bytes);
                os.close();
            } catch (Exception e) {
                String err = "{\"error\": \"" + String.valueOf(e.getMessage()).replace("\"", "\\\"").replace("\n", " ") + "\"}";
                t.getResponseHeaders().set("Content-Type", "application/json");
                byte[] bytes = err.getBytes("UTF-8");
                t.sendResponseHeaders(400, bytes.length);
                OutputStream os = t.getResponseBody();
                os.write(bytes);
                os.close();
            }
        }
    }

    static class SqlHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange t) throws IOException {
            setCorsHeaders(t);
            
            if (t.getRequestMethod().equalsIgnoreCase("OPTIONS")) {
                t.sendResponseHeaders(204, -1);
                return;
            }

            try {
                InputStream is = t.getRequestBody();
                Scanner scanner = new Scanner(is).useDelimiter("\\A");
                String sql = scanner.hasNext() ? scanner.next() : "";
                
                Connection conn = getDBConnection();
                String responseStr;
                try {
                    Statement stmt = conn.createStatement();
                    if (sql.trim().toUpperCase().startsWith("SELECT")) {
                        ResultSet rs = stmt.executeQuery(sql);
                        ResultSetMetaData md = rs.getMetaData();
                        int columns = md.getColumnCount();
                        
                        StringBuilder jsonResponse = new StringBuilder();
                        jsonResponse.append("[");
                        boolean firstRow = true;
                        
                        while (rs.next()) {
                            if (!firstRow) jsonResponse.append(",");
                            jsonResponse.append("{");
                            for (int i = 1; i <= columns; ++i) {
                                jsonResponse.append("\"").append(md.getColumnLabel(i)).append("\":");
                                Object val = rs.getObject(i);
                                if (val == null) {
                                    jsonResponse.append("null");
                                } else if (val instanceof Number) {
                                    jsonResponse.append(val);
                                } else if (val instanceof Boolean) {
                                    jsonResponse.append(val);
                                } else {
                                    jsonResponse.append("\"").append(val.toString().replace("\\", "\\\\").replace("\"", "\\\"").replace("\n", "\\n").replace("\r", "")).append("\"");
                                }
                                if (i < columns) jsonResponse.append(",");
                            }
                            jsonResponse.append("}");
                            firstRow = false;
                        }
                        jsonResponse.append("]");
                        responseStr = jsonResponse.toString();
                        rs.close();
                    } else {
                        int updated = stmt.executeUpdate(sql);
                        responseStr = "{\"status\": \"success\", \"rows_affected\": " + updated + "}";
                    }
                    stmt.close();
                } finally {
                    releaseConnection(conn);
                }
                
                t.getResponseHeaders().set("Content-Type", "application/json");
                byte[] responseBytes = responseStr.getBytes("UTF-8");
                t.sendResponseHeaders(200, responseBytes.length);
                OutputStream os = t.getResponseBody();
                os.write(responseBytes);
                os.close();
                
            } catch (Exception e) {
                String err = "{\"error\": \"" + String.valueOf(e.getMessage()).replace("\"", "\\\"").replace("\n", " ") + "\"}";
                t.getResponseHeaders().set("Content-Type", "application/json");
                byte[] bytes = err.getBytes("UTF-8");
                t.sendResponseHeaders(400, bytes.length);
                OutputStream os = t.getResponseBody();
                os.write(bytes);
                os.close();
            }
        }
    }
}
