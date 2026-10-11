import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.InetSocketAddress;
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
    private static final String DB_URL = "jdbc:postgresql://dpg-db54c7ajnfac7396rhag-a.singapore-postgres.render.com:5432/cine_archive?sslmode=require";
    private static final String DB_USER = "cine_man";
    private static final String DB_PASS = "U1QfHtPVsMk2AbHUEi3NqpxZL7V6gWsc";

    private static final int POOL_SIZE = 4;
    private static final BlockingQueue<Connection> connectionPool = new LinkedBlockingQueue<>(POOL_SIZE);

    public static void main(String[] args) throws Exception {
        Class.forName("org.postgresql.Driver");

        // Warm up and populate connection pool in background
        Thread warmUpThread = new Thread(() -> {
            System.out.println("Connecting to shared Render PostgreSQL database in background...");
            for (int i = 0; i < POOL_SIZE; i++) {
                try {
                    Connection conn = createConnectionWithRetry();
                    if (conn != null) {
                        connectionPool.offer(conn);
                    }
                } catch (Exception e) {
                    System.err.println("Failed to initialize connection " + (i + 1) + ": " + e.getMessage());
                }
            }
            System.out.println("Database pool ready with " + connectionPool.size() + " active connections.");
        });
        warmUpThread.setDaemon(true);
        warmUpThread.start();

        // Keep-alive background thread to ping DB every 4 minutes and keep Render awake
        Thread keepAliveThread = new Thread(() -> {
            while (true) {
                try {
                    Thread.sleep(4 * 60 * 1000);
                    Connection c = borrowConnection();
                    try (Statement s = c.createStatement()) {
                        s.executeQuery("SELECT 1");
                    } finally {
                        returnConnection(c);
                    }
                } catch (Throwable ignored) {}
            }
        });
        keepAliveThread.setDaemon(true);
        keepAliveThread.start();

        HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);
        server.createContext("/api/sql", new SqlHandler());
        server.createContext("/api/signup", new SignupHandler());
        server.createContext("/api/login", new LoginHandler());
        server.setExecutor(null);
        System.out.println("Java Database Server started on port 8080...");
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
        t.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
        t.getResponseHeaders().add("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
        t.getResponseHeaders().add("Access-Control-Allow-Headers", "Content-Type");
    }

    private static Connection createConnectionWithRetry() {
        int maxRetries = 12;
        int delayMs = 3000;
        for (int i = 0; i < maxRetries; i++) {
            try {
                return DriverManager.getConnection(DB_URL, DB_USER, DB_PASS);
            } catch (Exception e) {
                System.out.println("Connection attempt " + (i + 1) + " failed: " + e.getMessage() + ". Retrying in 3s...");
                try { Thread.sleep(delayMs); } catch (InterruptedException ignored) {}
            }
        }
        return null;
    }

    private static Connection borrowConnection() throws Exception {
        Connection conn = connectionPool.poll(5, TimeUnit.SECONDS);
        if (conn != null) {
            try {
                if (!conn.isClosed() && conn.isValid(2)) {
                    return conn;
                }
                conn.close();
            } catch (Exception ignored) {}
        }
        Connection newConn = createConnectionWithRetry();
        if (newConn == null) {
            throw new Exception("Unable to connect to shared PostgreSQL database.");
        }
        return newConn;
    }

    private static void returnConnection(Connection conn) {
        if (conn != null) {
            try {
                if (!conn.isClosed() && conn.isValid(2)) {
                    if (!connectionPool.offer(conn)) {
                        conn.close();
                    }
                    return;
                }
                conn.close();
            } catch (Exception ignored) {}
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

                Connection conn = borrowConnection();
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

                    PreparedStatement stmt = conn.prepareStatement("INSERT INTO users (id, username, email, password_hash, role, joined_date, bio) VALUES (?, ?, ?, ?, 'User', CURRENT_DATE, 'New user ready to explore cinema.')");
                    stmt.setString(1, id);
                    stmt.setString(2, username);
                    stmt.setString(3, email);
                    stmt.setString(4, hash);
                    stmt.executeUpdate();
                    stmt.close();
                } finally {
                    returnConnection(conn);
                }

                String response = "{\"status\":\"success\", \"id\":\"" + id + "\", \"username\":\"" + username + "\"}";
                t.getResponseHeaders().add("Content-Type", "application/json");
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
                t.getResponseHeaders().add("Content-Type", "application/json");
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

                Connection conn = borrowConnection();
                String response;
                boolean isSuccess = false;
                try {
                    PreparedStatement stmt = conn.prepareStatement("SELECT id, username, email, role, bio FROM users WHERE LOWER(username) = LOWER(?) AND password_hash = ?");
                    stmt.setString(1, username);
                    stmt.setString(2, hash);
                    ResultSet rs = stmt.executeQuery();
                    
                    if (rs.next()) {
                        response = "{\"status\":\"success\", \"id\":\"" + rs.getString("id") + "\", \"username\":\"" + rs.getString("username") + "\"}";
                        isSuccess = true;
                    } else {
                        response = "{\"error\":\"Invalid username or password\"}";
                    }
                    rs.close();
                    stmt.close();
                } finally {
                    returnConnection(conn);
                }

                t.getResponseHeaders().add("Content-Type", "application/json");
                byte[] bytes = response.getBytes("UTF-8");
                int statusCode = isSuccess ? 200 : 401;
                t.sendResponseHeaders(statusCode, bytes.length);
                OutputStream os = t.getResponseBody();
                os.write(bytes);
                os.close();
            } catch (Exception e) {
                String err = "{\"error\": \"" + String.valueOf(e.getMessage()).replace("\"", "\\\"").replace("\n", " ") + "\"}";
                t.getResponseHeaders().add("Content-Type", "application/json");
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
                
                Connection conn = borrowConnection();
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
                                jsonResponse.append("\"").append(md.getColumnName(i)).append("\":");
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
                    returnConnection(conn);
                }
                
                t.getResponseHeaders().add("Content-Type", "application/json");
                byte[] responseBytes = responseStr.getBytes("UTF-8");
                t.sendResponseHeaders(200, responseBytes.length);
                OutputStream os = t.getResponseBody();
                os.write(responseBytes);
                os.close();
                
            } catch (Exception e) {
                String err = "{\"error\": \"" + String.valueOf(e.getMessage()).replace("\"", "\\\"").replace("\n", " ") + "\"}";
                t.getResponseHeaders().add("Content-Type", "application/json");
                byte[] bytes = err.getBytes("UTF-8");
                t.sendResponseHeaders(400, bytes.length);
                OutputStream os = t.getResponseBody();
                os.write(bytes);
                os.close();
            }
        }
    }
}
