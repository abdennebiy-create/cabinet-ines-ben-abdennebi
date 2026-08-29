import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_chart = r'''            <!-- Résumé Clinique Patient -->
            <div style="background: #ffffff; border: 1.5px solid rgba(232, 198, 200, 0.85); border-radius: 1rem; padding: 0.8rem; margin-bottom: 1rem; box-shadow: 0 2px 10px rgba(92, 60, 67, 0.05); text-align: start;">
              <h3 style="font-family: 'Playfair Display', serif; font-size: 1rem; color: var(--text-dark-rose); margin-bottom: 0.6rem; display: flex; align-items: center; gap: 0.5rem;">
                <i class="fa-solid fa-file-medical" style="color: var(--accent-mauve);"></i>
                Vos Données Cliniques
              </h3>
              <div style="font-size: 0.85rem; color: var(--text-main); line-height: 1.4;">
                <ul style="padding-left: 1.2rem; margin-bottom: 0;">
                  ${this.state.history.map(h => `<li style="margin-bottom: 0.2rem;"><strong>Q:</strong> ${h.selection}</li>`).join('')}
                </ul>
              </div>
            </div>'''

new_chart = r'''            <!-- Résumé Clinique Patient -->
            <div style="background: #ffffff; border: 1.5px solid rgba(232, 198, 200, 0.85); border-radius: 1rem; padding: 0.8rem; margin-bottom: 1rem; box-shadow: 0 2px 10px rgba(92, 60, 67, 0.05); text-align: start;">
              <h3 style="font-family: 'Playfair Display', serif; font-size: 1rem; color: var(--text-dark-rose); margin-bottom: 0.6rem; display: flex; align-items: center; gap: 0.5rem;">
                <i class="fa-solid fa-file-medical" style="color: var(--accent-mauve);"></i>
                ${lang === 'ar' ? 'البيانات السريرية' : lang === 'en' ? 'Clinical Data' : lang === 'es' ? 'Datos Clínicos' : 'Vos Données Cliniques'}
              </h3>
              <div style="font-size: 0.85rem; color: var(--text-main); line-height: 1.4;">
                <ul style="list-style-type: none; padding-left: 0; margin-bottom: 0;">
                  ${this.state.history.map((h, i) => `<li style="margin-bottom: 0.4rem; border-bottom: 1px solid #f4e3e5; padding-bottom: 0.4rem;"><strong style="color: var(--text-dark-rose);">Q${i+1}:</strong> ${h.selection}</li>`).join('')}
                </ul>
              </div>
            </div>'''

content = content.replace(old_chart, new_chart)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
