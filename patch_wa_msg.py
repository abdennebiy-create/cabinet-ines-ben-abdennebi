import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_wa_block = r'''        let waResponses = '';
        const scoreItem = this.state.history.find(h => h.turn === 1);
        const pathItem = this.state.history.find(h => h.turn === 3);
        
        let vitaliteLabel = lang === 'ar' ? 'الحيوية' : lang === 'en' ? 'Vitality' : lang === 'es' ? 'Vitalidad' : 'Vitalité';
        let pathoLabel = lang === 'ar' ? 'الحالات' : lang === 'en' ? 'Conditions' : lang === 'es' ? 'Condiciones' : 'Pathologies';

        // TENTATIVE IA DE RÉSUMÉ AVEC TIMEOUT STRICT (1s) POUR NE JAMAIS BLOQUER SUR MOBILE
        try {
            const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
            const timeoutId = controller ? setTimeout(() => controller.abort(), 1200) : null;
            const summaryRes = await fetch('/api/ai-summarize', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                signal: controller ? controller.signal : undefined,
                body: JSON.stringify({
                    target: this.state.target,
                    history: this.state.history,
                    lang: lang
                })
            });
            if (timeoutId) clearTimeout(timeoutId);
            if (summaryRes && summaryRes.ok) {
                const summaryData = await summaryRes.json();
                if (summaryData && summaryData.summary) {
                    waResponses = '\n\n' + summaryData.summary;
                }
            }
        } catch (e) {
            // Instant fallback without blocking
        }

        // FALLBACK STRUCTURE SI L'IA ECHOUE OU RETOURNE VIDE
        if (!waResponses) {
            if (scoreItem) {
              waResponses += `\n• ${vitaliteLabel}: ${scoreItem.selection}`;
            }
            if (pathItem) {
              waResponses += `\n• ${pathoLabel}: ${pathItem.selection}`;
            }
        }

        let waFooter = lang === 'ar' ? 'أود حجز استشارة في عيادة رادس.' : lang === 'en' ? 'I would like to book a consultation at the Radès clinic.' : lang === 'es' ? 'Deseo reservar una consulta en la clínica de Radès.' : 'Je souhaite prendre rendez-vous au cabinet de Radès.';
        const waMsg = `${waHeader},\n\n${waIntro}\n\n📋 DOSSIER PATIENT:\n• Diagnostic: ${finalDossier.headline}${waResponses}\n\n🏥 ${waFooter}`;'''

new_wa_block = r'''        let waResponses = '\n\n📋 DOSSIER PATIENT (Réponses du bilan) :\n';
        this.state.history.forEach((h, idx) => {
            waResponses += `• Q${idx+1}: ${h.selection}\n`;
        });

        let waFooter = lang === 'ar' ? 'أود حجز استشارة في عيادة رادس.' : lang === 'en' ? 'I would like to book a consultation at the Radès clinic.' : lang === 'es' ? 'Deseo reservar una consulta en la clínica de Radès.' : 'Je souhaite prendre rendez-vous au cabinet de Radès.';
        const waMsg = `${waHeader},\n\n${waIntro}${waResponses}\n🏥 ${waFooter}`;'''

content = content.replace(old_wa_block, new_wa_block)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
