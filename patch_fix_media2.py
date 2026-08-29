import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('.floating-hero-card {\n      .floating-hero-card {', '.floating-hero-card {')

# Find the end of the style block to append our 480px media query
style_end = '</style>'
media_480 = '''    @media (max-width: 480px) {
      .hero-actions {
        gap: 0 !important;
        flex-direction: column !important;
      }
      .hero-actions .btn-pill {
        margin-bottom: 0.85rem !important;
      }
      .hero-actions .btn-pill:last-child {
        margin-bottom: 0 !important;
      }
    }
'''

content = content.replace(style_end, media_480 + style_end)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
