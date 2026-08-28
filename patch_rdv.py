with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
    'async function handleFormSubmit(e) {\n      e.preventDefault();\n      if (isFormSubmitting) return;',
    'async function handleFormSubmit(e) {\n      e.preventDefault();\n      if (isFormSubmitting) return;\n      localStorage.setItem(\'rdv_requested\', \'true\');'
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
