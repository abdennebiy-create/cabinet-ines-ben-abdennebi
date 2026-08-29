import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_fetch = r'''        const websiteUrl = form.elements['website_url'] ? form.elements['website_url'].value : '';
        const response = await fetch('/api/send-telegram', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: fallbackMsg, website_url: websiteUrl })
        });'''

new_fetch = r'''        const websiteUrl = form.elements['website_url'] ? form.elements['website_url'].value : '';
        
        const patientData = {
            nom: nomVal || "Non renseigné",
            age: ageVal || "Adulte",
            resume: fallbackMsg
        };

        const response = await fetch('/api/send-telegram', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(patientData)
        });'''

content = content.replace(old_fetch, new_fetch)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
