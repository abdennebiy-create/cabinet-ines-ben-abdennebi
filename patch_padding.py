import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_css = r'''    @media (min-width: 320px) and (max-width: 480px) {
      .hero-section .hero-actions {
        gap: 1.25rem !important;
        flex-direction: column !important;
      }
      .hero-section .hero-actions .btn-pill {
        margin-bottom: 0 !important;
        width: 100%;
      }
    }'''

new_css = r'''    @media (max-width: 480px) {
      .hero-section .hero-actions {
        gap: 0 !important;
        flex-direction: column !important;
        align-items: center !important;
        padding: 0 1rem !important;
      }
      .hero-section .hero-actions .btn-pill {
        margin-bottom: 1.25rem !important;
        width: 100% !important;
        justify-content: center !important;
      }
      .hero-section .hero-actions .btn-pill:last-child {
        margin-bottom: 0 !important;
      }
    }'''

content = content.replace(old_css, new_css)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
