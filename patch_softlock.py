import re

# --- INDEX.HTML ---
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remove the lock overlay and wrapper
pattern = re.compile(r'<div id="food-tracker-wrapper" style="position: relative;">\s*<div id="nutritheque-lock-overlay".*?</button>\s*</div>\s*<div class="food-tracker-grid">', re.DOTALL)
content = pattern.sub('<div class="food-tracker-grid">', content)

# 2. Fix the extra closing div added previously
content = content.replace('      </div>\n      </div>\n    </div>\n  </section>', '      </div>\n    </div>\n  </section>')

# 3. Add the Soft Lock Modal
soft_lock_modal = """
  <!-- Soft Lock Modal (Freemium) -->
  <div class="modal-overlay" id="softLockModal" role="dialog" aria-modal="true" style="display: none;">
    <div class="glass-card modal-container" style="max-width: 420px; padding: 2rem; border-radius: 24px; position: relative; text-align: center;">
      <button class="modal-close" onclick="closeModal('softLockModal')" style="position: absolute; top: 1.25rem; right: 1.25rem; background: none; border: none; font-size: 1.25rem; color: var(--text-dark-rose); cursor: pointer;">
        <i class="fa-solid fa-xmark"></i>
      </button>
      
      <div style="background: rgba(201, 138, 144, 0.1); width: 70px; height: 70px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem auto;">
        <i class="fa-solid fa-unlock-keyhole" style="font-size: 2.2rem; color: var(--accent-mauve);"></i>
      </div>
      
      <h3 style="font-family: var(--font-heading); font-size: 1.4rem; color: var(--text-dark-rose); margin-bottom: 0.75rem;">Débloquez l'accès illimité</h3>
      
      <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem;">
        Vous testez la version découverte (limite de 3 aliments). 
        Pour pouvoir enregistrer tous vos repas et obtenir un <strong>objectif calorique personnalisé</strong>, veuillez réaliser votre bilan clinique gratuit.
      </p>
      
      <button onclick="closeModal('softLockModal'); revealQuiz();" class="btn-pill btn-rose" style="width: 100%; justify-content: center; padding: 0.85rem; font-size: 1rem; font-weight: 700;">
        <i class="fa-solid fa-stethoscope" style="margin-right: 0.5rem;"></i> Lancer mon Bilan 60s
      </button>
    </div>
  </div>
"""

content = content.replace('<!-- Add Food Quantity Modal -->', soft_lock_modal + '\n  <!-- Add Food Quantity Modal -->')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

# --- FOOD-DATABASE.JS ---
with open('assets/food-database.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# Inject lock logic in openAddModal
inject_openAddModal = """
  openAddModal(foodId) {
    // Soft Lock Freemium Check
    const isQuizComplete = window.AIEngine && window.AIEngine.state && window.AIEngine.state.isComplete;
    if (!isQuizComplete && this.state.entries.length >= 3) {
      if (typeof openModal === 'function') openModal('softLockModal');
      return;
    }
"""
js_content = js_content.replace('  openAddModal(foodId) {', inject_openAddModal)

# Inject lock logic in changeCalorieGoal
inject_changeCalorieGoal = """
  changeCalorieGoal() {
    // Soft Lock Freemium Check
    const isQuizComplete = window.AIEngine && window.AIEngine.state && window.AIEngine.state.isComplete;
    if (!isQuizComplete) {
      if (typeof openModal === 'function') openModal('softLockModal');
      return;
    }
"""
js_content = js_content.replace('  changeCalorieGoal() {', inject_changeCalorieGoal)

with open('assets/food-database.js', 'w', encoding='utf-8') as f:
    f.write(js_content)
