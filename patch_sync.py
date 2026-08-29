import re

with open('assets/food-database.js', 'r', encoding='utf-8') as f:
    content = f.read()

old_code = r'''    if (typeof window.updateMetabolicChart === 'function') {
        const goals = {
            kcal: goal,
            prot: Math.round((goal * 0.25) / 4),
            carb: Math.round((goal * 0.45) / 4),
            fat: Math.round((goal * 0.30) / 9)
        };
        window.updateMetabolicChart(totals, goals);
    }'''

new_code = r'''    if (typeof window.updateMetabolicChart === 'function') {
        const goals = {
            kcal: goal,
            prot: Math.round((goal * 0.25) / 4),
            carb: Math.round((goal * 0.45) / 4),
            fat: Math.round((goal * 0.30) / 9)
        };
        window.updateMetabolicChart(totals, goals);
    }
    
    // Auto-sync the metabolic targets text values and card visibility
    if (typeof window.updateMetabolicGoalsCard === 'function') {
        window.updateMetabolicGoalsCard(goal);
    }'''

content = content.replace(old_code, new_code)

with open('assets/food-database.js', 'w', encoding='utf-8') as f:
    f.write(content)
