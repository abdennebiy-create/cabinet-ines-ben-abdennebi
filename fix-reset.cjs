const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/goBack\(\) \{/, 'goBack() { window.isAiThinking = false; this.state.isLoading = false;');
html = html.replace(/reset\(\) \{/, 'reset() { window.isAiThinking = false; this.state.isLoading = false;');

fs.writeFileSync('index.html', html);
