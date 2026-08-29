import re

with open('assets/food-database.js', 'r', encoding='utf-8') as f:
    content = f.read()

# I want to change the "Modifier" button or add a small "Via Bilan" text in the Food Tracker HUD
old_html = r'''              <span>${labels.goal} <strong id="dailyLogGoalKcal">${this.state.dailyCalorieGoal || 2000}</strong> ${labels.kcalUnit}</span>
              <button onclick="DailyFoodLog.changeCalorieGoal()" style="background: none; border: none; color: var(--accent-mauve); font-weight: 700; font-size: 0.8rem; cursor: pointer; text-decoration: underline; margin-left: 0.4rem;">
                (${labels.changeGoal})
              </button>'''

new_html = r'''              <span>${labels.goal} <strong id="dailyLogGoalKcal">${this.state.dailyCalorieGoal || 2000}</strong> ${labels.kcalUnit}</span>
              <span style="font-size: 0.7rem; background: rgba(16, 185, 129, 0.15); color: #10b981; padding: 0.15rem 0.4rem; border-radius: 4px; margin-left: 0.4rem; font-weight: 600;"><i class="fa-solid fa-bolt"></i> IA</span>
              <button onclick="DailyFoodLog.changeCalorieGoal()" style="background: none; border: none; color: var(--accent-mauve); font-weight: 700; font-size: 0.8rem; cursor: pointer; text-decoration: underline; margin-left: 0.4rem;">
                (${labels.changeGoal})
              </button>'''

content = content.replace(old_html, new_html)

with open('assets/food-database.js', 'w', encoding='utf-8') as f:
    f.write(content)
