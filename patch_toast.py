with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
    'if (typeof showToast === \'function\') showToast("🎉 Accès à la Nutrithèque débloqué !");',
    'if (window.DailyFoodLog) window.DailyFoodLog.showToast("🎉 Accès complet débloqué !");\n        else alert("🎉 Accès complet débloqué !");'
)
content = content.replace(
    'if (typeof showToast === \'function\') showToast("Veuillez compléter toutes les étapes pour débloquer cet outil.");',
    'if (window.DailyFoodLog) window.DailyFoodLog.showToast("Veuillez compléter toutes les étapes pour débloquer cet outil.");\n        else alert("Veuillez compléter toutes les étapes pour débloquer cet outil.");'
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
