import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the softLockModal with the new one
pattern = re.compile(r'<!-- Soft Lock Modal \(Freemium\) -->\s*<div class="modal-overlay" id="softLockModal".*?</button>\s*</div>\s*</div>', re.DOTALL)

new_modal = """<!-- Soft Lock Modal (Freemium) -->
  <div class="modal-overlay" id="softLockModal" role="dialog" aria-modal="true" style="display: none; z-index: 9999;">
    <div class="glass-card modal-container" style="max-width: 420px; padding: 2rem; border-radius: 24px; position: relative; text-align: center;">
      <button class="modal-close" onclick="closeModal('softLockModal')" style="position: absolute; top: 1.25rem; right: 1.25rem; background: none; border: none; font-size: 1.25rem; color: var(--text-dark-rose); cursor: pointer;">
        <i class="fa-solid fa-xmark"></i>
      </button>
      
      <div style="background: rgba(201, 138, 144, 0.1); width: 70px; height: 70px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem auto;">
        <i class="fa-solid fa-stethoscope" style="font-size: 2.2rem; color: var(--accent-mauve);"></i>
      </div>
      
      <h3 id="softLockTitle" style="font-family: var(--font-heading); font-size: 1.4rem; color: var(--text-dark-rose); margin-bottom: 0.75rem;">Analyse Médicale Requise</h3>
      
      <p id="softLockMessage" style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem;">
        Pour que la nutritionniste puisse analyser votre journal alimentaire, elle a besoin de votre contexte métabolique. Veuillez remplir le Bilan Express (60s) pour joindre votre dossier clinique à cet envoi.
      </p>
      
      <button onclick="closeModal('softLockModal'); revealQuiz();" class="btn-pill btn-rose" style="width: 100%; justify-content: center; padding: 0.85rem; font-size: 1rem; font-weight: 700;">
        <i class="fa-solid fa-stethoscope" style="margin-right: 0.5rem;"></i> Lancer mon Bilan 60s
      </button>
    </div>
  </div>"""

if pattern.search(content):
    content = pattern.sub(new_modal, content)
else:
    print("WARNING: Could not find softLockModal in index.html")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
