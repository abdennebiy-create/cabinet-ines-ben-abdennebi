import re

with open('assets/food-database.js', 'r', encoding='utf-8') as f:
    js = f.read()

# 1. Add showSoftLock function to the DailyFoodLog object
inject_softLock = """  showSoftLock(type) {
    let title = "Débloquez l'accès illimité";
    let message = "";

    if (type === 'limit') {
      title = "Dossier Incomplet";
      message = "Vous avez atteint la limite de la version découverte (6 aliments). Pour enregistrer la suite de vos repas et obtenir une analyse complète, veuillez réaliser votre bilan clinique gratuit.";
    } else if (type === 'share') {
      title = "Analyse Médicale Requise";
      message = "Pour que la nutritionniste puisse analyser votre journal alimentaire, elle a besoin de votre contexte métabolique. Veuillez remplir le Bilan Express (60s) pour joindre votre dossier clinique à cet envoi.";
    } else if (type === 'goal') {
      title = "Objectif Personnalisé";
      message = "L'objectif actuel est une moyenne générique. Pour calculer votre besoin métabolique exact, laissez notre IA analyser votre profil en 60 secondes.";
    }

    const titleEl = document.getElementById('softLockTitle');
    const msgEl = document.getElementById('softLockMessage');
    if (titleEl) titleEl.innerHTML = title;
    if (msgEl) msgEl.innerHTML = message;

    if (typeof openModal === 'function') openModal('softLockModal');
  },

  init() {"""
js = js.replace('  init() {', inject_softLock)


# 2. Update openAddModal
pattern_add = re.compile(r'const isQuizComplete = window\.AIEngine.*?return;\n\s*\}', re.DOTALL)
new_add = """const isQuizComplete = window.AIEngine && window.AIEngine.state && window.AIEngine.state.isComplete;
    if (!isQuizComplete && this.state.entries.length >= 6) {
      this.showSoftLock('limit');
      return;
    }"""
js = pattern_add.sub(new_add, js, count=1)


# 3. Update changeCalorieGoal
pattern_goal = re.compile(r'const isQuizComplete = window\.AIEngine.*?return;\n\s*\}', re.DOTALL)
new_goal = """const isQuizComplete = window.AIEngine && window.AIEngine.state && window.AIEngine.state.isComplete;
    if (!isQuizComplete) {
      this.showSoftLock('goal');
      return;
    }"""
js = pattern_goal.sub(new_goal, js, count=1)


# 4. Update shareOnWhatsApp
new_share = """  shareOnWhatsApp() {
    const isQuizComplete = window.AIEngine && window.AIEngine.state && window.AIEngine.state.isComplete;
    if (!isQuizComplete) {
      this.showSoftLock('share');
      return;
    }
"""
js = js.replace('  shareOnWhatsApp() {', new_share)

with open('assets/food-database.js', 'w', encoding='utf-8') as f:
    f.write(js)
