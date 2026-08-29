import re

with open('assets/food-database.js', 'r', encoding='utf-8') as f:
    content = f.read()

old_load = r'''  loadState() {
    try {
      const savedGoal = localStorage.getItem(this.GOAL_STORAGE_KEY);
      if (savedGoal) {
        this.state.dailyCalorieGoal = parseInt(savedGoal, 10) || 2000;
      }
      const savedEntries = localStorage.getItem(this.STORAGE_KEY);
      if (savedEntries) {
        this.state.entries = JSON.parse(savedEntries);
      } else {
        // Pre-populate with a balanced example day to illustrate the tracker immediately
        this.state.entries = [
          { id: 'ex_1', foodId: 'flocons_avoine', meal: 'breakfast', grams: 50, timestamp: Date.now() - 3600000 * 5 },
          { id: 'ex_2', foodId: 'lait_amande', meal: 'breakfast', grams: 200, timestamp: Date.now() - 3600000 * 5 },
          { id: 'ex_3', foodId: 'poulet_blanc', meal: 'lunch', grams: 150, timestamp: Date.now() - 3600000 * 2 },
          { id: 'ex_4', foodId: 'riz_complet', meal: 'lunch', grams: 150, timestamp: Date.now() - 3600000 * 2 },
          { id: 'ex_5', foodId: 'salade_mechouia', meal: 'lunch', grams: 100, timestamp: Date.now() - 3600000 * 2 },
          { id: 'ex_6', foodId: 'pomme', meal: 'snack', grams: 150, timestamp: Date.now() - 3600000 },
          { id: 'ex_7', foodId: 'amandes_brutes', meal: 'snack', grams: 20, timestamp: Date.now() - 3600000 }
        ];
        this.saveState();
      }
    } catch (e) {
      console.warn('Error loading food log state:', e);
    }
  },

  saveState() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state.entries));
      localStorage.setItem(this.GOAL_STORAGE_KEY, this.state.dailyCalorieGoal.toString());
    } catch (e) {
      console.warn('Error saving food log state:', e);
    }
  },'''

new_load = r'''  loadState() {
    try {
      const savedGoal = localStorage.getItem(this.GOAL_STORAGE_KEY);
      if (savedGoal) {
        this.state.dailyCalorieGoal = parseInt(savedGoal, 10) || 2000;
      }
      
      const today = new Date().toISOString().split('T')[0];
      const savedDate = localStorage.getItem(this.STORAGE_KEY + '_date');
      const savedEntries = localStorage.getItem(this.STORAGE_KEY);
      const savedWater = localStorage.getItem(this.STORAGE_KEY + '_water');

      if (savedDate === today) {
        if (savedEntries) {
          this.state.entries = JSON.parse(savedEntries);
        }
        if (savedWater) {
          this.state.waterGlasses = parseInt(savedWater, 10) || 0;
        }
      } else {
        if (!savedDate && !savedEntries) {
          // Premier lancement : afficher un exemple pour montrer la valeur
          this.state.entries = [
            { id: 'ex_1', foodId: 'flocons_avoine', meal: 'breakfast', grams: 50, timestamp: Date.now() - 3600000 * 5 },
            { id: 'ex_2', foodId: 'lait_amande', meal: 'breakfast', grams: 200, timestamp: Date.now() - 3600000 * 5 },
            { id: 'ex_3', foodId: 'poulet_blanc', meal: 'lunch', grams: 150, timestamp: Date.now() - 3600000 * 2 },
            { id: 'ex_4', foodId: 'riz_complet', meal: 'lunch', grams: 150, timestamp: Date.now() - 3600000 * 2 },
            { id: 'ex_5', foodId: 'salade_mechouia', meal: 'lunch', grams: 100, timestamp: Date.now() - 3600000 * 2 },
            { id: 'ex_6', foodId: 'pomme', meal: 'snack', grams: 150, timestamp: Date.now() - 3600000 },
            { id: 'ex_7', foodId: 'amandes_brutes', meal: 'snack', grams: 20, timestamp: Date.now() - 3600000 }
          ];
          this.state.waterGlasses = 4;
        } else {
          // Nouveau jour : réinitialiser
          this.state.entries = [];
          this.state.waterGlasses = 0;
        }
        this.saveState();
      }
    } catch (e) {
      console.warn('Error loading food log state:', e);
    }
  },

  saveState() {
    try {
      const today = new Date().toISOString().split('T')[0];
      localStorage.setItem(this.STORAGE_KEY + '_date', today);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state.entries));
      localStorage.setItem(this.STORAGE_KEY + '_water', this.state.waterGlasses.toString());
      localStorage.setItem(this.GOAL_STORAGE_KEY, this.state.dailyCalorieGoal.toString());
    } catch (e) {
      console.warn('Error saving food log state:', e);
    }
  },'''

content = content.replace(old_load, new_load)

with open('assets/food-database.js', 'w', encoding='utf-8') as f:
    f.write(content)
