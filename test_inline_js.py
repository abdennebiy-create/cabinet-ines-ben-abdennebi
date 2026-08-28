import re
import subprocess

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

scripts = re.findall(r'<script>(.*?)</script>', html, re.DOTALL)
scripts += re.findall(r'<script type="text/javascript">(.*?)</script>', html, re.DOTALL)

with open('temp_test.js', 'w', encoding='utf-8') as f:
    for s in scripts:
        f.write(s + "\n\n")
