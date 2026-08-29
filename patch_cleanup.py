import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove the window.calculateMetabolism function
calc_pattern = re.compile(r'    window\.calculateMetabolism = \(\) => \{.*?(?=    window\.|</script>)', re.DOTALL)
content = re.sub(calc_pattern, '', content)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

with open('firebase-init.js', 'r', encoding='utf-8') as f:
    fb_content = f.read()

# Remove the testConnection block
test_pattern = re.compile(r'// Test Connection.*testConnection\(\);', re.DOTALL)
fb_content = re.sub(test_pattern, '', fb_content)

with open('firebase-init.js', 'w', encoding='utf-8') as f:
    f.write(fb_content)

