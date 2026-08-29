import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_calc = r'''      localStorage.setItem('cabinet_nutrition_daily_goal_v1', tdee.toString());
      if (window.DailyFoodLog && window.DailyFoodLog.state) {
          window.DailyFoodLog.state.dailyCalorieGoal = tdee;
          if (typeof window.DailyFoodLog.renderDailyLogHUD === 'function') {
              window.DailyFoodLog.renderDailyLogHUD();
          }
      }
    };'''

new_calc = r'''      localStorage.setItem('cabinet_nutrition_daily_goal_v1', tdee.toString());
      if (window.DailyFoodLog && window.DailyFoodLog.state) {
          window.DailyFoodLog.state.dailyCalorieGoal = tdee;
          if (typeof window.DailyFoodLog.renderDailyLogHUD === 'function') {
              window.DailyFoodLog.renderDailyLogHUD();
          }
      }
      
      // Auto-scroll to Nutrithèque to show the synced connection
      setTimeout(() => {
          const tracker = document.getElementById('food-tracker');
          if (tracker) {
              tracker.scrollIntoView({ behavior: 'smooth', block: 'start' });
              
              // Highlight the goal box to show connection
              setTimeout(() => {
                  const goalBox = document.getElementById('dailyLogGoalKcal');
                  if (goalBox) {
                      goalBox.style.transition = 'all 0.5s ease';
                      goalBox.style.color = '#10b981';
                      goalBox.style.transform = 'scale(1.3)';
                      setTimeout(() => {
                          goalBox.style.color = '';
                          goalBox.style.transform = 'scale(1)';
                      }, 1500);
                  }
              }, 800);
          }
      }, 1500);
    };'''

content = content.replace(old_calc, new_calc)
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
