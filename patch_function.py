import re

with open('assets/food-database.js', 'r', encoding='utf-8') as f:
    content = f.read()

old_code = r'''  renderDailyLogHUD() {
    
    
    

    
    // Update water tracker'''

new_code = r'''  syncMetabolicGoalsCard() {
    // 1. Retrieve the metabolic goal from localStorage or state
    let goal = this.state.dailyCalorieGoal || 2000;
    const savedGoal = localStorage.getItem(this.GOAL_STORAGE_KEY);
    if (savedGoal) {
      goal = parseInt(savedGoal, 10) || 2000;
    }
    
    // 2. Calculate the macronutrient targets
    const goals = {
        kcal: goal,
        prot: Math.round((goal * 0.25) / 4),
        carb: Math.round((goal * 0.45) / 4),
        fat: Math.round((goal * 0.30) / 9)
    };
    
    const totals = this.getDailyTotals();
    
    // 3. Automatically update the metabolicGoalsCard and progress bars
    if (typeof window.updateMetabolicGoalsCard === 'function') {
        window.updateMetabolicGoalsCard(goal);
    }
    if (typeof window.updateMetabolicChart === 'function') {
        window.updateMetabolicChart(totals, goals);
    }
  },

  renderDailyLogHUD() {
    
    this.syncMetabolicGoalsCard();
    

    
    // Update water tracker'''

content = content.replace(old_code, new_code)

with open('assets/food-database.js', 'w', encoding='utf-8') as f:
    f.write(content)
