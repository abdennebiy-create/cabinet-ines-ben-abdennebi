const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Update button state toggle in handleConditionToggle
html = html.replace(/validateBtn\.style\.opacity = this\.state\.selectedConditions\.length === 0 \? '0\.5' : '1';/, `validateBtn.style.opacity = this.state.selectedConditions.length === 0 ? '0.5' : '1';
          validateBtn.style.pointerEvents = this.state.selectedConditions.length === 0 ? 'none' : 'auto';`);

fs.writeFileSync('index.html', html);
