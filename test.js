const fs = require('fs');
const js = fs.readFileSync('index.html', 'utf8');
console.log(js.includes('Recharts.PieChart'));
