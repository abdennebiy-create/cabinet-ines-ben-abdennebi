const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Update button rendering
html = html.replace(/<button id="aiValidateConditions" onclick="AIEngine.validateConditions\(\)" disabled style="opacity: 0.5; (.*?)"/, '<button id="aiValidateConditions" onclick="AIEngine.validateConditions()" disabled style="opacity: 0.5; pointer-events: none; $1"');

// Update button state toggle
html = html.replace(/validateBtn\.style\.opacity = this\.state\.selectedConditions\.length === 0 \? '0\.5' : '1';/, `validateBtn.style.opacity = this.state.selectedConditions.length === 0 ? '0.5' : '1';
          validateBtn.style.pointerEvents = this.state.selectedConditions.length === 0 ? 'none' : 'auto';`);

fs.writeFileSync('index.html', html);
