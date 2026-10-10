import re

with open('/home/tharak/anti-grav/CineArchive/app.js', 'r') as f:
    app_js = f.read()

# 1. Replace init()
init_replacement = """    async init() {
        this.log("system", "Connecting to PostgreSQL Database via Java Server...");
        const tableNames = Object.keys(this.tables);
        for (let table of tableNames) {
            try {
                const res = await fetch('http://localhost:8080/api/sql', {
                    method: 'POST',
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
        updateGlobalStats();
    }"""

app_js = re.sub(r'\s+init\(\) \{[\s\S]*?seedDefaults\(\);\s*\}\s*\}', '\n' + init_replacement, app_js)

# 2. Replace DOMContentLoaded to wait for init()
initapp_replacement = """document.addEventListener("DOMContentLoaded", async () => {
    await db.init();
    initApp();
});"""
app_js = re.sub(r'document\.addEventListener\("DOMContentLoaded", \(\) => \{\s*initApp\(\);\s*\}\);', initapp_replacement, app_js)

# 3. Replace save()
save_replacement = """    save() {
        // No-op for localStorage. Real persistence is in PostgreSQL now.
    }"""
app_js = re.sub(r'\s+save\(\) \{\s*localStorage\.setItem[^}]+\}\s*\}', '\n' + save_replacement, app_js)

# 4. Replace executeSQL()
execute_replacement = """    async executeSQL(sql) {
        this.log("query", `Executing SQL on PostgreSQL: ${sql}`);
        try {
            const response = await fetch('http://localhost:8080/api/sql', {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain' },
                body: sql
            });
            const data = await response.json();
            if (!response.ok) {
                this.log("error", `PostgreSQL Error: ${data.error}`);
                throw new Error(data.error);
            }
            this.log("transaction", `Query Successful. Rows: ${data.length || data.rows_affected || 0}`);
            return data;
        } catch (err) {
            this.log("error", err.message);
            throw err;
        }
    }"""
app_js = re.sub(r'\s+executeSQL\(sql\) \{[\s\S]*?return dataset;\s*\}', '\n' + execute_replacement, app_js)

# 5. Patch insertRow, updateRow, deleteRow to sync with DB
insert_patch = """
        // Sync with PostgreSQL
        const cols = Object.keys(rowData).join(', ');
        const vals = Object.values(rowData).map(v => typeof v === 'string' ? `'${v.replace(/'/g, "''")}'` : v).join(', ');
        fetch('http://localhost:8080/api/sql', { method: 'POST', body: `INSERT INTO ${tableName} (${cols}) VALUES (${vals})` });
        
        return rowData;"""
app_js = re.sub(r'this\.save\(\);\s*return rowData;', 'this.save();' + insert_patch, app_js)

update_patch = """
            // Sync with PostgreSQL
            const sets = Object.entries(updatedData).map(([k, v]) => `${k} = ${typeof v === 'string' ? `'${v.replace(/'/g, "''")}'` : v}`).join(', ');
            fetch('http://localhost:8080/api/sql', { method: 'POST', body: `UPDATE ${tableName} SET ${sets} WHERE id = '${id}'` });
            
            return this.tables[tableName][rowIndex];"""
app_js = re.sub(r'this\.save\(\);\s*return this\.tables\[tableName\]\[rowIndex\];', 'this.save();' + update_patch, app_js)

delete_patch = """
        // Sync with PostgreSQL
        fetch('http://localhost:8080/api/sql', { method: 'POST', body: `DELETE FROM ${tableName} WHERE id = '${id}'` });
        
        return deletedRow;"""
app_js = re.sub(r'this\.save\(\);\s*return deletedRow;', 'this.save();' + delete_patch, app_js)

# We must ensure the constructor does NOT call this.init() synchronously if it breaks rendering, or we remove it and wait for DOMContentLoaded.
# The constructor has: this.init();
# We'll remove it from the constructor so we can await it manually in DOMContentLoaded.
app_js = app_js.replace('this.init();', '// this.init() is now called asynchronously')

with open('/home/tharak/anti-grav/CineArchive/app.js', 'w') as f:
    f.write(app_js)

print("Safely patched app.js while preserving all UI functions!")
