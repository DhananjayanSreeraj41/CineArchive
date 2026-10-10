import re

with open('/home/tharak/anti-grav/CineArchive/app.js', 'r') as f:
    app_js = f.read()

# Add a fetch timeout wrapper
timeout_wrapper = """    async fetchWithTimeout(url, options = {}, timeout = 2000) {
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), timeout);
        const response = await fetch(url, {
            ...options,
            signal: controller.signal
        });
        clearTimeout(id);
        return response;
    }"""

if "fetchWithTimeout" not in app_js:
    app_js = app_js.replace('async init() {', timeout_wrapper + '\n\n    async init() {')

# Replace fetch calls in init()
app_js = app_js.replace("await fetch('http://localhost:8080/api/sql'", "await this.fetchWithTimeout('http://localhost:8080/api/sql'")

# Replace fetch calls in executeSQL()
# ExecuteSQL has await fetch(...)
app_js = app_js.replace("const response = await fetch('http://localhost:8080/api/sql'", "const response = await this.fetchWithTimeout('http://localhost:8080/api/sql'")

with open('/home/tharak/anti-grav/CineArchive/app.js', 'w') as f:
    f.write(app_js)

print("Added AbortController timeout to fetch calls!")
