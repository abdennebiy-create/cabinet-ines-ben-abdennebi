import re

with open('quiz-data.js', 'r', encoding='utf-8') as f:
    content = f.read()
    
with open('output_deepdive.txt', 'r', encoding='utf-8') as f:
    deep_dive_content = f.read()

# Find the position of '  deepDive: {'
pos = content.find('  deepDive: {')
if pos == -1:
    print("Could not find deepDive")
    exit(1)

# Keep the content before deepDive
new_content = content[:pos] + "  " + deep_dive_content

# Add the final multiSelectLabels
new_content += ",\n\n  // Multi-select helper labels\n  multiSelectLabels: {\n"
new_content += "    fr: { validate: \"Valider ma sélection\", hint: \"Sélectionnez tout ce qui s'applique\", selected: \"sélectionné(s)\" },\n"
new_content += "    ar: { validate: \"تأكيد اختياري\", hint: \"حدد كل ما ينطبق\", selected: \"محدد\" },\n"
new_content += "    en: { validate: \"Confirm my selection\", hint: \"Select all that apply\", selected: \"selected\" },\n"
new_content += "    es: { validate: \"Confirmar mi selección\", hint: \"Seleccione todo lo que corresponda\", selected: \"seleccionado(s)\" }\n"
new_content += "  }\n};\n"

with open('quiz-data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)
print("Done writing quiz-data.js")
