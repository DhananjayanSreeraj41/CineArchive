import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.nio.file.Files;
import java.nio.file.Paths;

public class InitDB {
    public static void main(String[] args) throws Exception {
        Class.forName("org.sqlite.JDBC");
        Connection conn = DriverManager.getConnection("jdbc:sqlite:cine_archive.db");
        Statement stmt = conn.createStatement();
        
        String schema = new String(Files.readAllBytes(Paths.get("../db/sqlite_schema.sql")));
        stmt.executeUpdate(schema);
        
        String seed = new String(Files.readAllBytes(Paths.get("../db/full_seed.sql")));
        stmt.executeUpdate(seed);
        
        System.out.println("Database initialized successfully.");
        stmt.close();
        conn.close();
    }
}
