import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

scripts = re.findall(r'<script>(.*?)</script>', content, re.DOTALL)
for i, script in enumerate(scripts):
    if 'AIEngine' in script:
        with open(f'extracted_engine_{i}.js', 'w', encoding='utf-8') as f:
            f.write(script)
        print(f"Extracted script {i} containing AIEngine.")
