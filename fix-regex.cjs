const fs = require('fs');
let file = fs.readFileSync('api/ai-diagnostic-engine.js', 'utf8');

file = file.replace(
  /const cleaned = responseText\.replace\(\/```json\/g, ''\)\.replace\(\/```\/g, ''\)\.trim\(\);/,
  "const cleaned = responseText.replace(/```(?:json)?/gi, '').replace(/```/g, '').trim();"
);

fs.writeFileSync('api/ai-diagnostic-engine.js', file);
