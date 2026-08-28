import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Patch openWhatsAppModal
content = content.replace(
    'function openWhatsAppModal() {',
    'function openWhatsAppModal() {\n      localStorage.setItem(\'wa_contacted\', \'true\');'
)

# Patch openWhatsAppWithSlot
content = content.replace(
    'function openWhatsAppWithSlot() {',
    'function openWhatsAppWithSlot() {\n      localStorage.setItem(\'wa_contacted\', \'true\');'
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
