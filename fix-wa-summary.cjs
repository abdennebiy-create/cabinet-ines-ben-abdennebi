const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const replacement = `
        let waResponses = '';
        const scoreItem = this.state.history.find(h => h.turn === 1);
        const pathItem = this.state.history.find(h => h.turn === 3);
        
        let vitaliteLabel = lang === 'ar' ? 'الحيوية' : lang === 'en' ? 'Vitality' : lang === 'es' ? 'Vitalidad' : 'Vitalité';
        let pathoLabel = lang === 'ar' ? 'الحالات' : lang === 'en' ? 'Conditions' : lang === 'es' ? 'Condiciones' : 'Pathologies';

        // TENTATIVE IA DE RÉSUMÉ
        try {
            const summaryRes = await fetch('/api/ai-summarize', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    target: this.state.target,
                    history: this.state.history,
                    lang: lang
                })
            });
            if (summaryRes.ok) {
                const summaryData = await summaryRes.json();
                if (summaryData.summary) {
                    waResponses = '\\n\\n' + summaryData.summary;
                }
            }
        } catch (e) {
            console.error('Erreur IA résumé WA:', e);
        }

        // FALLBACK SI L'IA ECHOUE OU RETOURNE VIDE
        if (!waResponses) {
            if (scoreItem) {
              waResponses += \`\\n• \${vitaliteLabel}: \${scoreItem.selection}\`;
            }
            if (pathItem) {
              waResponses += \`\\n• \${pathoLabel}: \${pathItem.selection}\`;
            }
        }
`;

html = html.replace(/let waResponses = '';[\s\S]*?if \(pathItem\) \{\s*waResponses \+= `\\n• \$\{pathoLabel\}: \$\{pathItem\.selection\}`;\s*\}/, replacement);

fs.writeFileSync('index.html', html);
