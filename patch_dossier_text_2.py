import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

bad_block = r'''        if (this.state.finalDossier && this.state.finalDossier.the_3_realities && this.state.finalDossier.the_3_realities.length > 0) {
          dossierText += '\n--- ANALYSE BIOLOGIQUE ---\n';
          this.state.finalDossier.the_3_realities.forEach((r, i) => {
            dossierText += `• Clé ${i + 1}: ${r}\n`;
          });
        }'''

content = content.replace(bad_block, "")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
