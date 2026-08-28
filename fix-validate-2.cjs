const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/<button id="aiValidateConditions" onclick="AIEngine.validateConditions\(\)" disabled style="opacity: 0.5; background:/, '<button id="aiValidateConditions" onclick="AIEngine.validateConditions()" disabled style="opacity: 0.5; pointer-events: none; background:');

fs.writeFileSync('index.html', html);
