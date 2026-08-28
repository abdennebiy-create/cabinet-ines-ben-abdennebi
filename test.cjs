const fs = require('fs');
const js = fs.readFileSync('index.html', 'utf8');
const match = js.match(/const\s*{\s*([^}]+?)\s*}\s*=\s*Recharts/);
console.log(match ? match[1] : 'Not found');
