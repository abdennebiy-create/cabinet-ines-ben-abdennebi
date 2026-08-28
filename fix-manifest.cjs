const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('</title>', '</title>\n  <link rel="manifest" href="manifest.json" />');
fs.writeFileSync('index.html', html);
