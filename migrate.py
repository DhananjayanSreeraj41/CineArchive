import re
import os

with open('/home/tharak/anti-grav/CineArchive/app.js', 'r') as f:
    app_js = f.read()

# 1. Remove all SEED_ variables
app_js = re.sub(r'const SEED_[A-Z_]+\s*=\s*\[.*?\];\n', '', app_js, flags=re.DOTALL)

# 2. Define the new Postgres Proxy Class
postgres_class = """class CineArchiveDB {
    constructor() {
        this.tables = {
            users: [], directors: [], actors: [], genres: [],
            movies: [], movie_genres: [], movie_actors: [],
            reviews: [], ratings: [], watchlists: [],
            lists: [], collections: [], comments: [],
            followers: [], notifications: [], awards: []
        };
        this.logs = [];
        this.activeRole = "admin";
        this.activeUserId = "u1";
    }

    log(type, msg) {
        const timestamp = new Date().toLocaleTimeString();
        const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${msg}`;
        this.logs.unshift(logEntry);
        console.log(logEntry);
        if (this.logs.length > 50) this.logs.pop();
        
        const terminalOutput = document.getElementById("terminal-output");
        if (terminalOutput) {
            const entryDiv = document.createElement("div");
            entryDiv.className = `log-entry log-${type}`;
            entryDiv.textContent = logEntry;
            terminalOutput.prepend(entryDiv);
        }
    }

    async init() {
        this.log("system", "Connecting to PostgreSQL Database via Java Server...");
        const tableNames = Object.keys(this.tables);
        
        for (let table of tableNames) {
            try {
                const data = await this.executeSQL(`SELECT * FROM ${table}`);
                this.tables[table] = Array.isArray(data) ? data : [];
            } catch (err) {
                console.error(`Error loading table ${table}:`, err);
            }
        }
        this.log("system", "Database hydration complete. UI linked successfully.");
        updateGlobalStats();
    }

    async executeSQL(sql) {
        this.log("query", `Executing via Network: ${sql}`);
        try {
            const res = await fetch('http://localhost:8080/api/sql', {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain' },
                body: sql
            });
            if (!res.ok) {
                const errData = await res.json();
                this.log("error", `PostgreSQL Error: ${errData.error || 'Unknown Error'}`);
                throw new Error(errData.error);
            }
            const data = await res.json();
            this.log("transaction", `Query returned/affected ${data.length || data.rows_affected || 0} rows.`);
            return data;
        } catch (err) {
            this.log("error", `Network/DB Error: ${err.message}`);
            return [];
        }
    }

    async insertRow(tableName, rowData, checkConstraints = true) {
        const columns = Object.keys(rowData).join(', ');
        const values = Object.values(rowData).map(v => typeof v === 'string' ? `'${v.replace(/'/g, "''")}'` : v).join(', ');
        const sql = `INSERT INTO ${tableName} (${columns}) VALUES (${values})`;
        
        await this.executeSQL(sql);
        // Refresh local table cache for UI
        this.tables[tableName] = await this.executeSQL(`SELECT * FROM ${tableName}`);
        return rowData;
    }

    async updateRow(tableName, id, updatedData) {
        const sets = Object.entries(updatedData).map(([k, v]) => {
            const val = typeof v === 'string' ? `'${v.replace(/'/g, "''")}'` : v;
            return `${k} = ${val}`;
        }).join(', ');
        const sql = `UPDATE ${tableName} SET ${sets} WHERE id = '${id}'`;
        
        await this.executeSQL(sql);
        this.tables[tableName] = await this.executeSQL(`SELECT * FROM ${tableName}`);
    }

    async deleteRow(tableName, id) {
        const sql = `DELETE FROM ${tableName} WHERE id = '${id}'`;
        await this.executeSQL(sql);
        this.tables[tableName] = await this.executeSQL(`SELECT * FROM ${tableName}`);
    }

    getSchemas() {
        return Object.keys(this.tables).map(t => ({ name: t, count: this.tables[t].length }));
    }
}
"""

# Replace class CineArchiveDB and everything inside it with the new class
app_js = re.sub(r'class CineArchiveDB \{.*?\n\}\n', postgres_class, app_js, flags=re.DOTALL)

# Because app initialization was synchronous, let's fix the DOMContentLoaded event to wait for db.init()
init_replacement = """document.addEventListener("DOMContentLoaded", async () => {
    await db.init();
    initApp();
});"""

app_js = re.sub(r'document\.addEventListener\("DOMContentLoaded", \(\) => \{\s*initApp\(\);\s*\}\);', init_replacement, app_js, flags=re.DOTALL)

with open('/home/tharak/anti-grav/CineArchive/app.js', 'w') as f:
    f.write(app_js)

print("Successfully patched app.js to use PostgreSQL via Java proxy!")
