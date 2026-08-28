import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all occurrences of checkUnlockStatus
pattern = re.compile(r'    function checkUnlockStatus\(\) \{.*?\n    \}\n\n    document\.addEventListener\(\'DOMContentLoaded\', \(\) => \{\n      // Check immediately on load\n      if \(localStorage\.getItem\(\'nutritheque_unlocked\'\) === \'true\'\) \{\n        const overlay = document\.getElementById\(\'nutritheque-lock-overlay\'\);\n        if \(overlay\) overlay\.style\.display = \'none\';\n      \}\n    \}\);\n', re.DOTALL)

# Keep only one
matches = pattern.findall(content)
if len(matches) > 1:
    print(f"Found {len(matches)} occurrences. Removing duplicates.")
    # actually sub all, then add one back? No, let's just do replace.
    
    first_idx = content.find('function checkUnlockStatus() {')
    second_idx = content.find('function checkUnlockStatus() {', first_idx + 1)
    
    # Let's just find exactly what to remove
    content_to_remove = content[second_idx - 4: content.find('let isFormSubmitting = false;', second_idx)]
    
    content = content.replace(content_to_remove, '')
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)
else:
    print("No duplicates found.")
