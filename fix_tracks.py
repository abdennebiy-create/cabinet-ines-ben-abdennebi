import re

with open('quiz-data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace track: "pediatric" with track: "<id>"
def repl_pediatric(match):
    id_val = match.group(1)
    if id_val == 'none':
        return match.group(0) # leave none as pediatric
    return f'{{ id: "{id_val}", label: "{match.group(2)}", track: "{id_val}" }}'

content = re.sub(r'\{\s*id:\s*"([^"]+)",\s*label:\s*"([^"]+)",\s*track:\s*"pediatric"\s*\}', repl_pediatric, content)

def repl_senior(match):
    id_val = match.group(1)
    if id_val == 'none':
        return match.group(0) # leave none as senior
    return f'{{ id: "{id_val}", label: "{match.group(2)}", track: "{id_val}" }}'

content = re.sub(r'\{\s*id:\s*"([^"]+)",\s*label:\s*"([^"]+)",\s*track:\s*"senior"\s*\}', repl_senior, content)

with open('quiz-data.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated tracks!")
