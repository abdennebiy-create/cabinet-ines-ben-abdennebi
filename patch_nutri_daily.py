import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update Success Box
old_success = r'''        <p style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.5rem;">
          ✨ Dossier transmis avec succès ! Inès va analyser vos réponses et concevoir votre plan nutritionnel 100% sur-mesure (besoins, menus, etc.). Vous n'avez plus rien à calculer, elle s'occupe de tout !
        </p>'''

new_success = r'''        <p style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.5rem;">
          ✨ Dossier transmis ! Ta Nutrithèque est débloquée et prête à l'emploi dès maintenant.
        </p>
        <div style="background: #fbf5f6; border-left: 4px solid var(--accent-mauve); padding: 0.8rem; text-align: left; margin-bottom: 1.5rem; border-radius: 0 8px 8px 0; font-size: 0.95rem; color: var(--text-main); line-height: 1.5;">
          <strong>Fini les casse-têtes :</strong> Inès t'enverra chaque jour tes menus parfaitement personnalisés selon tes besoins. Tu n'as plus rien à calculer ou à planifier, elle s'occupe de tout !
        </div>'''

content = content.replace(old_success, new_success)

# 2. Update Metabolic Card Badge and Text
old_card = r'''              <span style="background: rgba(245, 158, 11, 0.15); color: #f59e0b; padding: 0.3rem 0.6rem; border-radius: 8px; font-size: 0.75rem; font-weight: 700; display: flex; align-items: center; gap: 0.3rem;">
                <i class="fa-solid fa-clock"></i> En cours d'analyse
              </span>
            </div>
            
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.2rem; line-height: 1.4;">
              En attente du plan d'Inès. Vos macros exactes seront personnalisées lors de votre consultation.
            </p>'''

new_card = r'''              <span style="background: rgba(16, 185, 129, 0.15); color: #10b981; padding: 0.3rem 0.6rem; border-radius: 8px; font-size: 0.75rem; font-weight: 700; display: flex; align-items: center; gap: 0.3rem;">
                <i class="fa-solid fa-wand-magic-sparkles"></i> Pris en charge par Inès
              </span>
            </div>
            
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.2rem; line-height: 1.4;">
              Commencez à utiliser votre journal dès aujourd'hui ! Inès se charge de mettre à jour vos menus et vos objectifs cibles <strong>quotidiennement</strong>.
            </p>'''

content = content.replace(old_card, new_card)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

