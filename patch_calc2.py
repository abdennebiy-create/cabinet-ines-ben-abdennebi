import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

script_function = r'''    window.calculateMetabolism = () => {
      const p = parseFloat(document.getElementById('calcPoids').value);
      const t = parseFloat(document.getElementById('calcTaille').value);
      const a = parseFloat(document.getElementById('calcAge').value);
      const s = document.getElementById('calcSexe').value;
      
      if (!p || !t || !a) {
          alert("Veuillez remplir le poids, la taille et l'âge.");
          return;
      }
      
      let bmr = (10 * p) + (6.25 * t) - (5 * a);
      if (s === 'M') {
          bmr += 5;
      } else {
          bmr -= 161;
      }
      
      const tdee = Math.round(bmr * 1.3);
      
      const resBox = document.getElementById('metabolismResult');
      const resVal = document.getElementById('metabolismVal');
      resVal.textContent = tdee + " kcal";
      resBox.style.display = 'block';
      
      localStorage.setItem('cabinet_nutrition_daily_goal_v1', tdee.toString());
      if (window.DailyFoodLog && window.DailyFoodLog.state) {
          window.DailyFoodLog.state.dailyCalorieGoal = tdee;
          if (typeof window.DailyFoodLog.renderDailyLogHUD === 'function') {
              window.DailyFoodLog.renderDailyLogHUD();
          }
      }
    };

    const AIEngine = {'''

content = content.replace('    const AIEngine = {', script_function)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
