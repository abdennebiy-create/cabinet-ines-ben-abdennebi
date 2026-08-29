import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_dossier_text = r'''        let dossierText = dossierHeader;
        dossierText += `${langLabel} : ${lang.toUpperCase()}\n`;
        dossierText += `${profileLabel} : ${track.toUpperCase()}\n`;
        dossierText += `${scoreLabel} : ${metabolicScore}/100\n`;

        if (this.state.finalDossier && this.state.finalDossier.headline) {
          dossierText += `Diagnostic / Titre : ${this.state.finalDossier.headline}\n`;
        }
        if (this.state.finalDossier && this.state.finalDossier.priority_focus) {
          dossierText += `Priorité clinique : ${this.state.finalDossier.priority_focus}\n`;
        }
        if (this.state.selectedConditions.length > 0) {
          dossierText += `${conditionsLabel} : ${this.state.selectedConditions.join(', ')}\n`;
        }
        dossierText += '\n';

        dossierText += responsesHeader;
        this.state.history.forEach((h, idx) => {
          if(h.turn === 3) {
             dossierText += `- Q${idx+1}: ${conditionsLabel} -> ${h.selection}\n`;
          } else {
             dossierText += `- Q${idx+1}: ${h.selection}\n`;
          }
        });

        if (this.state.finalDossier && this.state.finalDossier.the_3_realities && this.state.finalDossier.the_3_realities.length > 0) {
          dossierText += '\n--- ANALYSE BIOLOGIQUE ---\n';
          this.state.finalDossier.the_3_realities.forEach((r, i) => {
            dossierText += `• Clé ${i + 1}: ${r}\n`;
          });
        }'''

new_dossier_text = r'''        let dossierText = dossierHeader;
        dossierText += `${langLabel} : ${lang.toUpperCase()}\n`;
        dossierText += `${profileLabel} : ${track.toUpperCase()}\n`;
        
        if (this.state.selectedConditions.length > 0) {
          dossierText += `${conditionsLabel} : ${this.state.selectedConditions.join(', ')}\n`;
        }
        dossierText += '\n';

        dossierText += responsesHeader;
        this.state.history.forEach((h, idx) => {
          if(h.turn === 3) {
             dossierText += `- Q${idx+1}: ${conditionsLabel} -> ${h.selection}\n`;
          } else {
             dossierText += `- Q${idx+1}: ${h.selection}\n`;
          }
        });'''

content = content.replace(old_dossier_text, new_dossier_text)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
