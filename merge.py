import json

with open('output_ped_senior.json', 'r') as f:
    data = json.load(f)

deepDive = data['deepDive']
dossier = data['dossier']

# Format deep dive strings
deepDive_str = ""
for key, val in deepDive.items():
    deepDive_str += f'    "{key}": {json.dumps(val, ensure_ascii=False)},\n'

dossier_str = ""
for key, val in dossier.items():
    dossier_str += f'    "{key}": {json.dumps(val, ensure_ascii=False)},\n'

with open('quiz-data.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# Insert into deepDive
js_content = js_content.replace('deepDive: {\n', f'deepDive: {{\n{deepDive_str}')
js_content = js_content.replace('dossier: {\n', f'dossier: {{\n{dossier_str}')

with open('quiz-data.js', 'w', encoding='utf-8') as f:
    f.write(js_content)
    
print("Merged successfully.")
