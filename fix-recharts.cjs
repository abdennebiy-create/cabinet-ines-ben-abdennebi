const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Use Recharts 2.x which definitely exports window.Recharts in the way we expect
html = html.replace('https://unpkg.com/recharts/umd/Recharts.js', 'https://unpkg.com/recharts@2.12.7/umd/Recharts.js');

fs.writeFileSync('index.html', html);
console.log('Fixed recharts UMD link.');
