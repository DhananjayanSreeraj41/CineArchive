const fs = require('fs');

const code = fs.readFileSync('/home/tharak/anti-grav/CineArchive/app.js.bak', 'utf-8');

// Extract all arrays using eval. We'll wrap them in a function.
const lines = code.split('\n');
let jsContext = '';
let inSeed = false;

for (let line of lines) {
    if (line.startsWith('const SEED_')) {
        inSeed = true;
    }
    if (inSeed) {
        // change const to var so it's accessible
        if (line.startsWith('const SEED_')) {
            jsContext += line.replace('const SEED_', 'var SEED_') + '\n';
        } else {
            jsContext += line + '\n';
        }
    }
    if (inSeed && line.trim() === '];') {
        inSeed = false;
    }
}

// Evaluate the arrays
eval(jsContext);

let sql = '';
const tables = [
    {name: 'users', data: SEED_USERS},
    {name: 'directors', data: SEED_DIRECTORS},
    {name: 'actors', data: SEED_ACTORS},
    {name: 'genres', data: SEED_GENRES},
    {name: 'movies', data: SEED_MOVIES},
    {name: 'movie_genres', data: SEED_MOVIE_GENRES},
    {name: 'movie_actors', data: SEED_MOVIE_ACTORS},
    {name: 'reviews', data: SEED_REVIEWS},
    {name: 'ratings', data: SEED_RATINGS},
    {name: 'watchlists', data: SEED_WATCHLISTS},
    {name: 'lists', data: SEED_LISTS},
    {name: 'collections', data: SEED_COLLECTIONS},
    {name: 'comments', data: SEED_COMMENTS},
    {name: 'followers', data: SEED_FOLLOWERS},
    {name: 'notifications', data: SEED_NOTIFICATIONS},
    {name: 'awards', data: SEED_AWARDS}
];

for (let table of tables) {
    for (let row of table.data) {
        const columns = Object.keys(row).join(', ');
        const values = Object.values(row).map(v => {
            if (typeof v === 'string') {
                return `'${v.replace(/'/g, "''")}'`;
            }
            if (typeof v === 'boolean') {
                return v ? 'TRUE' : 'FALSE';
            }
            if (v === undefined || v === null) return 'NULL';
            return v;
        }).join(', ');
        sql += `INSERT INTO ${table.name} (${columns}) VALUES (${values});\n`;
    }
    sql += '\n';
}

fs.writeFileSync('/home/tharak/anti-grav/CineArchive/db/full_seed.sql', sql);
console.log("Successfully generated full_seed.sql using Node.js!");
