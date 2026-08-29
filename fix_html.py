import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the orphaned code with just the end of updateMetabolicGoalsCard
bad_code = r'''    window.DailyFoodLog.state.dailyCalorieGoal = tdee;
          if (typeof window.DailyFoodLog.renderDailyLogHUD === 'function') {
              window.DailyFoodLog.renderDailyLogHUD();
          }
      }
      
      // Update Metabolic Goals Card
      window.updateMetabolicGoalsCard(tdee);
      
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

content = content.replace(bad_code, "")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

