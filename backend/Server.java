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
import java.sql.ResultSetMetaData;
import java.sql.Statement;
import java.util.Scanner;

public class Server {
    public static void main(String[] args) throws Exception {
        HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);
        server.createContext("/api/sql", new SqlHandler());
        server.setExecutor(null);
        System.out.println("Java Database Server started on port 8080...");
        server.start();
    }

    static class SqlHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange t) throws IOException {
            t.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
            t.getResponseHeaders().add("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
            t.getResponseHeaders().add("Access-Control-Allow-Headers", "Content-Type");
            
            if (t.getRequestMethod().equalsIgnoreCase("OPTIONS")) {
                t.sendResponseHeaders(204, -1);
                return;
            }

            try {
                InputStream is = t.getRequestBody();
                Scanner scanner = new Scanner(is).useDelimiter("\\A");
                String sql = scanner.hasNext() ? scanner.next() : "";
                
                Connection conn = DriverManager.getConnection("jdbc:postgresql://dpg-db54c7ajnfac7396rhag-a.singapore-postgres.render.com:5432/cine_archive?sslmode=require", "cine_man", "U1QfHtPVsMk2AbHUEi3NqpxZL7V6gWsc");
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
                String err = "{\"error\": \"" + e.getMessage().replace("\"", "\\\"").replace("\n", " ") + "\"}";
                t.getResponseHeaders().add("Content-Type", "application/json");
                t.sendResponseHeaders(400, err.getBytes().length);
                OutputStream os = t.getResponseBody();
                os.write(err.getBytes());
                os.close();
            }
        }
    }
}
