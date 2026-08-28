const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/this\.renderFinalDossier\(\);\s*\}\s*\}\s*\}\s*\},/g, `this.renderFinalDossier();
              }
            }
        }
        this.state.isLoading = false;
        window.isAiThinking = false;
      },`);

fs.writeFileSync('index.html', html);
