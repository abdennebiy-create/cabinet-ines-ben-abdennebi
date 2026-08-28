const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/async validateConditions\(\) \{\s*if \(this\.state\.selectedConditions\.length === 0 \|\| this\.state\.isLoading\) return;/, `async validateConditions() {
        if (this.state.selectedConditions.length === 0 || this.state.isLoading) return;`);

fs.writeFileSync('index.html', html);
