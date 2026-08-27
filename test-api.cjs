const http = require('http');
const payload = JSON.stringify({
  lang: 'fr',
  history: [
    {turn: 1, selection: '🧒 Pour mon enfant / adolescent'},
    {turn: 2, selection: '👦 Garçon, 0-6 ans'},
    {turn: 3, selection: '🥦 Sélectivité & Néophobie alimentaire', deepDiveKey: null},
    {turn: 4, selection: '🌱 Poids et croissance harmonieux'}
  ],
  track: 'picky'
});

const req = http.request({
  hostname: '127.0.0.1',
  port: 3000,
  path: '/api/ai-diagnostic-engine',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': payload.length
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log('Response:', data));
});
req.write(payload);
req.end();
