import re

with open('assets/food-database.js', 'r', encoding='utf-8') as f:
    content = f.read()

# On initialization, if goal is retrieved from localStorage, we can call window.updateMetabolicGoalsCard
old_init = r'''    try {
      const savedGoal = localStorage.getItem(this.GOAL_STORAGE_KEY);
      if (savedGoal) {
        this.state.dailyCalorieGoal = parseInt(savedGoal, 10);
      }
    } catch (e) {
      console.warn('Error loading food log goal:', e);
    }'''

new_init = r'''    try {
      const savedGoal = localStorage.getItem(this.GOAL_STORAGE_KEY);
      if (savedGoal) {
        const parsedGoal = parseInt(savedGoal, 10);
        this.state.dailyCalorieGoal = parsedGoal;
        if (window.updateMetabolicGoalsCard) {
            window.updateMetabolicGoalsCard(parsedGoal);
        }
      }
    } catch (e) {
      console.warn('Error loading food log goal:', e);
    }'''

content = content.replace(old_init, new_init)

with open('assets/food-database.js', 'w', encoding='utf-8') as f:
    f.write(content)
