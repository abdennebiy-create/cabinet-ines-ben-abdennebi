import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_res = r'''        const data = await response.json();
        
        if (!response.ok || (!data.success && !data.warning)) {
          throw new Error(data.error || "Erreur Telegram");
        }'''

new_res = r'''        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.error || "Erreur Telegram");
        }'''

content = content.replace(old_res, new_res)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
