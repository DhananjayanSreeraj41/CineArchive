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

public class Server {
    public static void main(String[] args) throws Exception {
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

    private static Connection getDBConnection() throws Exception {
        String url = "jdbc:postgresql://dpg-db54c7ajnfac7396rhag-a.singapore-postgres.render.com:5432/cine_archive?sslmode=require&loginTimeout=5";
        String user = "cine_man";
        String pass = "U1QfHtPVsMk2AbHUEi3NqpxZL7V6gWsc";
        
        int maxRetries = 12;
        int delayMs = 5000;
        
        for (int i = 0; i < maxRetries; i++) {
            try {
                return DriverManager.getConnection(url, user, pass);
            } catch (Exception e) {
                if (i == maxRetries - 1) {
                    throw e; // throw on last attempt
                }
                System.out.println("Error: " + e.getMessage() + " | Connection failed, retrying in " + (delayMs/1000) + "s... (Attempt " + (i+1) + " of " + maxRetries + ")");
                Thread.sleep(delayMs);
            }
        }
        return null;
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
                
                String username = body.contains("\"username\":\"") ? body.split("\"username\":\"")[1].split("\"")[0] : "";
                String password = body.contains("\"password\":\"") ? body.split("\"password\":\"")[1].split("\"")[0] : "";
                
                // Provide a dummy email if not provided since DB schema requires it
                String email = username.toLowerCase() + "@cinearchive.org";

                String hash = hashPassword(password);
                String id = "u" + UUID.randomUUID().toString().substring(0, 8);

                Connection conn = getDBConnection();
                PreparedStatement stmt = conn.prepareStatement("INSERT INTO users (id, username, email, password_hash, role, joined_date, bio) VALUES (?, ?, ?, ?, 'User', CURRENT_DATE, 'New user.')");
                stmt.setString(1, id);
                stmt.setString(2, username);
                stmt.setString(3, email);
                stmt.setString(4, hash);
                stmt.executeUpdate();
                stmt.close();
                conn.close();

                String response = "{\"status\":\"success\", \"id\":\"" + id + "\"}";
                t.getResponseHeaders().add("Content-Type", "application/json");
                t.sendResponseHeaders(200, response.getBytes().length);
                OutputStream os = t.getResponseBody();
                os.write(response.getBytes());
                os.close();
            } catch (Exception e) {
                String err = "{\"error\": \"" + String.valueOf(e.getMessage()).replace("\"", "\\\"").replace("\n", " ") + "\"}";
                t.getResponseHeaders().add("Content-Type", "application/json");
                t.sendResponseHeaders(400, err.getBytes().length);
                OutputStream os = t.getResponseBody();
                os.write(err.getBytes());
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
                
                String username = body.contains("\"username\":\"") ? body.split("\"username\":\"")[1].split("\"")[0] : "";
                String password = body.contains("\"password\":\"") ? body.split("\"password\":\"")[1].split("\"")[0] : "";

                String hash = hashPassword(password);

                Connection conn = getDBConnection();
                PreparedStatement stmt = conn.prepareStatement("SELECT id, username, email, role, bio FROM users WHERE username = ? AND password_hash = ?");
                stmt.setString(1, username);
                stmt.setString(2, hash);
                ResultSet rs = stmt.executeQuery();
                
                String response;
                if (rs.next()) {
                    response = "{\"status\":\"success\", \"id\":\"" + rs.getString("id") + "\", \"username\":\"" + rs.getString("username") + "\"}";
                } else {
                    response = "{\"error\":\"Invalid username or password\"}";
                }
                rs.close();
                stmt.close();
                conn.close();

                t.getResponseHeaders().add("Content-Type", "application/json");
                t.sendResponseHeaders(200, response.getBytes().length);
                OutputStream os = t.getResponseBody();
                os.write(response.getBytes());
                os.close();
            } catch (Exception e) {
                String err = "{\"error\": \"" + String.valueOf(e.getMessage()).replace("\"", "\\\"").replace("\n", " ") + "\"}";
                t.getResponseHeaders().add("Content-Type", "application/json");
                t.sendResponseHeaders(400, err.getBytes().length);
                OutputStream os = t.getResponseBody();
                os.write(err.getBytes());
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
                Statement stmt = conn.createStatement();
                
                String responseStr;
                
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
                            } else {
                                jsonResponse.append("\"").append(val.toString().replace("\"", "\\\"").replace("\n", "\\n")).append("\"");
                            }
                            if (i < columns) jsonResponse.append(",");
                        }
                        jsonResponse.append("}");
                        firstRow = false;
                    }
                    jsonResponse.append("]");
                    responseStr = jsonResponse.toString();
                } else {
                    int updated = stmt.executeUpdate(sql);
                    responseStr = "{\"status\": \"success\", \"rows_affected\": " + updated + "}";
                }
                
                stmt.close();
                conn.close();
                
                t.getResponseHeaders().add("Content-Type", "application/json");
                byte[] responseBytes = responseStr.getBytes();
                t.sendResponseHeaders(200, responseBytes.length);
                OutputStream os = t.getResponseBody();
                os.write(responseBytes);
                os.close();
                
            } catch (Exception e) {
                String err = "{\"error\": \"" + String.valueOf(e.getMessage()).replace("\"", "\\\"").replace("\n", " ") + "\"}";
                t.getResponseHeaders().add("Content-Type", "application/json");
                t.sendResponseHeaders(400, err.getBytes().length);
                OutputStream os = t.getResponseBody();
                os.write(err.getBytes());
                os.close();
            }
        }
    }
}
