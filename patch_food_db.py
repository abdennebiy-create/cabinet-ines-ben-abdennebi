import re

with open('assets/food-database.js', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to find the end of renderDailyLogHUD where it updates the DOM and add the chart update.
# Let's search for "const totals = this.getDailyTotals();"
old_code = r'''    const totals = this.getDailyTotals();
    const goal = this.state.dailyCalorieGoal || 2000;
    const progressPercent = Math.min(100, Math.round((totals.calories / goal) * 100));

    const hudKcalEl = document.getElementById('dailyLogTotalKcal');
    const hudGoalEl = document.getElementById('dailyLogGoalKcal');
    const hudProgressBar = document.getElementById('dailyLogProgressBar');'''

new_code = r'''    const totals = this.getDailyTotals();
    const goal = this.state.dailyCalorieGoal || 2000;
    const progressPercent = Math.min(100, Math.round((totals.calories / goal) * 100));
    
    if (typeof window.updateMetabolicChart === 'function') {
        const goals = {
            kcal: goal,
            prot: Math.round((goal * 0.25) / 4),
            carb: Math.round((goal * 0.45) / 4),
            fat: Math.round((goal * 0.30) / 9)
        };
        window.updateMetabolicChart(totals, goals);
    }

    const hudKcalEl = document.getElementById('dailyLogTotalKcal');
    const hudGoalEl = document.getElementById('dailyLogGoalKcal');
    const hudProgressBar = document.getElementById('dailyLogProgressBar');'''

content = content.replace(old_code, new_code)

with open('assets/food-database.js', 'w', encoding='utf-8') as f:
    f.write(content)
