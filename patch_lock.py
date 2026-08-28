import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace <div class="food-tracker-grid">
new_html = """
      <div id="food-tracker-wrapper" style="position: relative;">
        <div id="nutritheque-lock-overlay" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(12px); z-index: 50; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; border-radius: 24px; padding: 2rem;">
          <i class="fa-solid fa-lock" style="font-size: 3rem; color: var(--accent-mauve); margin-bottom: 1rem;"></i>
          <h3 style="font-size: 1.5rem; color: var(--text-dark-rose); margin-bottom: 1rem; font-family: var(--font-heading);">Outil réservé aux patients</h3>
          <p style="color: var(--text-muted); max-width: 400px; margin-bottom: 2rem;">La Nutrithèque Clinique est un outil exclusif. Pour débloquer votre accès complet, veuillez compléter votre dossier :</p>
          
          <div style="display: flex; flex-direction: column; gap: 1rem; width: 100%; max-width: 320px; text-align: left; background: white; padding: 1.5rem; border-radius: 16px; border: 1px solid rgba(232, 198, 200, 0.4); box-shadow: 0 4px 15px rgba(92, 60, 67, 0.05);">
            <div id="req-quiz" style="display: flex; align-items: center; gap: 0.75rem; color: #7a5c64; font-weight: 500;">
              <i class="fa-regular fa-circle" style="width: 20px; text-align: center;"></i> <span>1. Terminer le Bilan 60s</span>
            </div>
            <div id="req-rdv" style="display: flex; align-items: center; gap: 0.75rem; color: #7a5c64; font-weight: 500;">
              <i class="fa-regular fa-circle" style="width: 20px; text-align: center;"></i> <span>2. Demander un RDV</span>
            </div>
            <div id="req-wa" style="display: flex; align-items: center; gap: 0.75rem; color: #7a5c64; font-weight: 500;">
              <i class="fa-regular fa-circle" style="width: 20px; text-align: center;"></i> <span>3. Confirmer via WhatsApp</span>
            </div>
          </div>

          <button onclick="checkUnlockStatus()" class="btn-pill btn-rose" style="margin-top: 2rem; padding: 0.8rem 2rem; font-size: 1rem;">
            <i class="fa-solid fa-arrows-rotate" style="margin-right: 0.5rem;"></i> Vérifier mon statut
          </button>
        </div>
      <div class="food-tracker-grid">
"""

content = content.replace('<div class="food-tracker-grid">', new_html, 1)

# Add closing div for food-tracker-wrapper after dailyFoodLogContainer
closing_div_find = """
      </div>
    </div>
  </section>

  <!-- Add Food Quantity Modal -->
"""
closing_div_replace = """
      </div>
      </div>
    </div>
  </section>

  <!-- Add Food Quantity Modal -->
"""
content = content.replace(closing_div_find, closing_div_replace, 1)

# Ensure WhatsApp buttons register the click
content = content.replace('onclick="if(/Android', 'onclick="localStorage.setItem(\'wa_contacted\', \'true\'); if(/Android')
content = content.replace('onclick="window.open(', 'onclick="localStorage.setItem(\'wa_contacted\', \'true\'); window.open(')
content = content.replace('onclick="shareOnWhatsApp(', 'onclick="localStorage.setItem(\'wa_contacted\', \'true\'); shareOnWhatsApp(')
content = content.replace('onclick="DailyFoodLog.shareOnWhatsApp(', 'onclick="localStorage.setItem(\'wa_contacted\', \'true\'); DailyFoodLog.shareOnWhatsApp(')

# Booking modal form handling
script_inject = """
    function checkUnlockStatus() {
      const quizDone = window.AIEngine && window.AIEngine.state && window.AIEngine.state.isComplete;
      const rdvDone = localStorage.getItem('rdv_requested') === 'true';
      const waDone = localStorage.getItem('wa_contacted') === 'true';

      if (quizDone) {
        const el = document.getElementById('req-quiz');
        if (el) { el.style.color = '#10b981'; el.innerHTML = '<i class="fa-solid fa-check-circle" style="width: 20px; text-align: center;"></i> <span>1. Bilan 60s terminé</span>'; }
      }
      if (rdvDone) {
        const el = document.getElementById('req-rdv');
        if (el) { el.style.color = '#10b981'; el.innerHTML = '<i class="fa-solid fa-check-circle" style="width: 20px; text-align: center;"></i> <span>2. RDV demandé</span>'; }
      }
      if (waDone) {
        const el = document.getElementById('req-wa');
        if (el) { el.style.color = '#10b981'; el.innerHTML = '<i class="fa-solid fa-check-circle" style="width: 20px; text-align: center;"></i> <span>3. Contact WhatsApp validé</span>'; }
      }

      if (quizDone && rdvDone && waDone) {
        localStorage.setItem('nutritheque_unlocked', 'true');
        const overlay = document.getElementById('nutritheque-lock-overlay');
        if (overlay) overlay.style.display = 'none';
        if (typeof showToast === 'function') showToast("🎉 Accès à la Nutrithèque débloqué !");
      } else {
        if (typeof showToast === 'function') showToast("Veuillez compléter toutes les étapes pour débloquer cet outil.");
      }
    }

    document.addEventListener('DOMContentLoaded', () => {
      // Check immediately on load
      if (localStorage.getItem('nutritheque_unlocked') === 'true') {
        const overlay = document.getElementById('nutritheque-lock-overlay');
        if (overlay) overlay.style.display = 'none';
      }
    });
"""

content = content.replace('let isFormSubmitting = false;', script_inject + '\n    let isFormSubmitting = false;')
content = content.replace('if (isFormSubmitting) return;\n      isFormSubmitting = true;', 'if (isFormSubmitting) return;\n      isFormSubmitting = true;\n      localStorage.setItem(\'rdv_requested\', \'true\');')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
