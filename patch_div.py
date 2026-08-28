import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the extra closing div in food-tracker section
pattern = re.compile(r'      </div>\n      </div>\n    </div>\n  </section>')
content = pattern.sub('      </div>\n    </div>\n  </section>', content)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
