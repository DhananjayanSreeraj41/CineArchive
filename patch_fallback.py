import re

with open('/home/tharak/anti-grav/CineArchive/app.js', 'r') as f:
    app_js = f.read()

# Replace init() with a much safer version that falls back to defaults
old_init = """    async init() {
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

new_init = """    async init() {
        this.log("system", "Connecting to PostgreSQL Database via Java Server...");
        let success = true;
        const tableNames = Object.keys(this.tables);
        for (let table of tableNames) {
            try {
                const res = await fetch('http://localhost:8080/api/sql', {
                    method: 'POST',
                    headers: { 'Content-Type': 'text/plain' },
                    body: `SELECT * FROM ${table}`
                });
                if (res.ok) {
                    const data = await res.json();
                    if (data && !data.error) {
                        this.tables[table] = data;
                    } else {
                        success = false;
                    }
                } else {
                    success = false;
                }
            } catch (err) {
                console.error(`Error loading table ${table}:`, err);
                success = false;
            }
        }
        
        // Critical Fallback: If DB is empty, failed to load, or user didn't run push_to_render.sh
        if (!success || this.tables.users.length === 0) {
            this.log("error", "Database connection failed or tables missing. Falling back to local offline mode.");
            this.seedDefaults();
        } else {
            this.log("system", "Database hydration complete. UI linked successfully.");
        }
    }"""

if old_init in app_js:
    app_js = app_js.replace(old_init, new_init)
else:
    print("WARNING: Could not find old_init in app.js")

# Also safeguard updateGlobalStats just in case
old_update = """    const totalFilms = db.tables.movies.length;
    const user = state.getActiveUser();
    
    const watchedCount = db.tables.ratings.filter(r => r.user_id === user.id).length;"""
new_update = """    const totalFilms = db.tables.movies.length;
    const user = state.getActiveUser();
    if (!user) return; // Safeguard if DB is empty
    
    const watchedCount = db.tables.ratings.filter(r => r.user_id === user.id).length;"""
    
app_js = app_js.replace(old_update, new_update)

with open('/home/tharak/anti-grav/CineArchive/app.js', 'w') as f:
    f.write(app_js)

print("Patched init() fallback!")
