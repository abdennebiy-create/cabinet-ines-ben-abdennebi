import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove Ftour, Ghada, Acha
old_meals = r'''          <option value="breakfast">🌅 Petit-déjeuner (Ftour)</option>
          <option value="lunch" selected>☀️ Déjeuner (Ghada)</option>
          <option value="snack">🍎 Collation / Goûter</option>
          <option value="dinner">🌙 Dîner (Acha)</option>'''

new_meals = r'''          <option value="breakfast">🌅 Petit-déjeuner</option>
          <option value="lunch" selected>☀️ Déjeuner</option>
          <option value="snack">🍎 Collation / Goûter</option>
          <option value="dinner">🌙 Dîner</option>'''

content = content.replace(old_meals, new_meals)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
