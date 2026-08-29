import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_text = "Ces besoins ont été calculés et répartis automatiquement d'après votre Bilan Métabolique."
new_text = "En attente du plan d'Inès. Vos macros exactes seront personnalisées lors de votre consultation."

content = content.replace(old_text, new_text)

old_badge = r'''              <span style="background: rgba(16, 185, 129, 0.15); color: #10b981; padding: 0.3rem 0.6rem; border-radius: 8px; font-size: 0.75rem; font-weight: 700; display: flex; align-items: center; gap: 0.3rem;">
                <i class="fa-solid fa-link"></i> Synchronisé IA
              </span>'''

new_badge = r'''              <span style="background: rgba(245, 158, 11, 0.15); color: #f59e0b; padding: 0.3rem 0.6rem; border-radius: 8px; font-size: 0.75rem; font-weight: 700; display: flex; align-items: center; gap: 0.3rem;">
                <i class="fa-solid fa-clock"></i> En cours d'analyse
              </span>'''

content = content.replace(old_badge, new_badge)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

