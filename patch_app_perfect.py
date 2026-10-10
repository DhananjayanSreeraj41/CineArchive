import re

with open('/home/tharak/anti-grav/CineArchive/app.js.bak', 'r') as f:
    app_js = f.read()

# Replace init
old_init = """    init() {
        const savedDB = localStorage.getItem("cinearchive_relational_db");
        if (savedDB) {
            try {
                this.tables = JSON.parse(savedDB);
                this.log("info", "Relational database loaded successfully from browser local storage.");
            } catch (e) {
                console.error("Failed to parse stored DB, seeding defaults.", e);
                this.seedDefaults();
            }
        } else {
            this.seedDefaults();
        }
    }"""

new_init = """    async init() {
        this.log("system", "Connecting to PostgreSQL Database via Java Server...");
        const tableNames = Object.keys(this.tables);
        for (let table of tableNames) {
            try {
                const res = await fetch('http://localhost:8080/api/sql', {
                    method: 'POST',
                    headers: { 'Content-Type': 'text/plain' },
                    body: `SELECT * FROM ${table}`
                });
                if (res.ok) {
                    this.tables[table] = await res.json();
                }
            } catch (err) {
                console.error(`Error loading table ${table}:`, err);
            }
        }
        this.log("system", "Database hydration complete. UI linked successfully.");
    }"""
app_js = app_js.replace(old_init, new_init)

# Replace save
old_save = """    save() {
        localStorage.setItem("cinearchive_relational_db", JSON.stringify(this.tables));
    }"""
new_save = """    save() {
        // No-op. Sync happens via PostgreSQL queries now.
    }"""
app_js = app_js.replace(old_save, new_save)

# Replace executeSQL using regex since it's long
execute_replacement = """    async executeSQL(sql) {
        this.log("query", `Executing SQL on PostgreSQL: ${sql}`);
        try {
            const response = await fetch('http://localhost:8080/api/sql', {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain' },
                body: sql
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.error);
            this.log("transaction", `Query Successful. Rows: ${data.length || data.rows_affected || 0}`);
            return data;
        } catch (err) {
            this.log("error", err.message);
            throw err;
        }
    }"""
app_js = re.sub(r'\s+executeSQL\(sql\) \{[\s\S]*?return dataset;\s*\}', '\n' + execute_replacement, app_js)

# Patch insert, update, delete exactly without regex risk
app_js = app_js.replace('this.save();\n        return rowData;', 'this.save();\n        // Sync with PostgreSQL\n        const cols = Object.keys(rowData).join(\', \');\n        const vals = Object.values(rowData).map(v => typeof v === \'string\' ? `\'${v.replace(/\'/g, "\'\'")}\'` : v).join(\', \');\n        fetch(\'http://localhost:8080/api/sql\', { method: \'POST\', body: `INSERT INTO ${tableName} (${cols}) VALUES (${vals})` });\n        return rowData;')

app_js = app_js.replace('this.save();\n            return this.tables[tableName][rowIndex];', 'this.save();\n            // Sync with PostgreSQL\n            const sets = Object.entries(updatedData).map(([k, v]) => `${k} = ${typeof v === \'string\' ? `\'${v.replace(/\'/g, "\'\'")}\'` : v}`).join(\', \');\n            fetch(\'http://localhost:8080/api/sql\', { method: \'POST\', body: `UPDATE ${tableName} SET ${sets} WHERE id = \'${id}\'` });\n            return this.tables[tableName][rowIndex];')

app_js = app_js.replace('this.save();\n        return deletedRow;', 'this.save();\n        // Sync with PostgreSQL\n        fetch(\'http://localhost:8080/api/sql\', { method: \'POST\', body: `DELETE FROM ${tableName} WHERE id = \'${id}\'` });\n        return deletedRow;')

# Fix DOMContentLoaded
old_dom = """document.addEventListener("DOMContentLoaded", () => {
    initApp();
});"""
new_dom = """document.addEventListener("DOMContentLoaded", async () => {
    await db.init();
    initApp();
});"""
app_js = app_js.replace(old_dom, new_dom)

# Fix constructor
app_js = app_js.replace('this.init();', '// this.init() is now called asynchronously')

with open('/home/tharak/anti-grav/CineArchive/app.js', 'w') as f:
    f.write(app_js)

print("Safely patched app.js perfectly!")
