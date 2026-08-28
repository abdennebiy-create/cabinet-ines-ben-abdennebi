import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

def fix_section(section_id, content):
    # Find the section end
    pattern = re.compile(r'(<section[^>]*?id="' + section_id + r'"[^>]*>.*?)(  </section>)', re.DOTALL)
    
    def repl(m):
        return m.group(1) + '    </div>\n' + m.group(2)
        
    return pattern.sub(repl, content)

content = fix_section('hero', content)
content = fix_section('diagnostic', content)
content = fix_section('services', content)
content = fix_section('team', content)
content = fix_section('contact', content)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
