import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_fetch = r'''        const response = await fetch('/api/send-telegram', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(patientData)
        });
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.error || "Erreur Telegram");
        }'''

new_fetch = r'''        const response = await fetch('/api/send-telegram', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(patientData)
        });
        
        const rawText = await response.text();
        let data = {};
        try {
            data = JSON.parse(rawText);
        } catch (e) {
            console.error("Réponse non-JSON de Netlify:", rawText);
        }
        
        if (!response.ok) {
          console.error("Détails de l'erreur API:", data);
          throw new Error(data.error || data.errorMessage || data.msg || `Erreur serveur: ${response.status}`);
        }'''

content = content.replace(old_fetch, new_fetch)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

