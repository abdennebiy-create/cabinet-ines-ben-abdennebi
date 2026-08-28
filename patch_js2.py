import re

with open('assets/food-database.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Replace the HTML span
new_span = """<span>${labels.goal} <strong id="dailyLogGoalKcal">${this.state.dailyCalorieGoal || 2000}</strong> ${labels.kcalUnit}</span>
              ${!(window.AIEngine && window.AIEngine.state && window.AIEngine.state.isComplete) ? `<span style="display: inline-block; background: #fef08a; color: #854d0e; font-size: 0.65rem; padding: 0.15rem 0.4rem; border-radius: 4px; margin-left: 0.5rem; font-weight: 600; vertical-align: middle;">GÉNÉRIQUE</span>` : ''}"""

js = js.replace('<span>${labels.goal} <strong id="dailyLogGoalKcal">2000</strong> ${labels.kcalUnit}</span>', new_span)

with open('assets/food-database.js', 'w', encoding='utf-8') as f:
    f.write(js)
