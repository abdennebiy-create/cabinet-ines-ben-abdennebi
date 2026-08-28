import re

with open('assets/food-database.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Update HUD styling
content = content.replace(
    'border: 1.5px solid rgba(232, 198, 200, 0.85); background: rgba(255, 255, 255, 0.75); box-shadow: 0 16px 40px rgba(92, 60, 67, 0.08);',
    'border: 1px solid rgba(232, 198, 200, 0.4); background: rgba(255, 255, 255, 0.85); box-shadow: 0 10px 30px rgba(92, 60, 67, 0.05);'
)

# Update Food Card styling
content = content.replace(
    'border: 1.5px solid rgba(232, 198, 200, 0.7); background: rgba(255, 255, 255, 0.75); box-shadow: 0 10px 25px rgba(92, 60, 67, 0.04);',
    'border: 1px solid rgba(232, 198, 200, 0.3); background: rgba(255, 255, 255, 0.95); box-shadow: 0 8px 24px rgba(92, 60, 67, 0.04);'
)

# Improve water section styling
content = content.replace(
    'border: 1px solid rgba(186, 230, 253, 0.8);',
    'border: 1px solid rgba(14, 165, 233, 0.15); box-shadow: inset 0 2px 8px rgba(14, 165, 233, 0.05);'
)

with open('assets/food-database.js', 'w', encoding='utf-8') as f:
    f.write(content)
