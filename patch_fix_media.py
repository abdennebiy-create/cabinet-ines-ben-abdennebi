import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

bad_css = r'''      .hero-actions .btn-pill {
        width: 100%;
        justify-content: center;
        padding: 0.85rem 1rem;
        font-size: 0.82rem;
        white-space: normal;
        text-align: center;
        line-height: 1.3;
      }
    }
    
    @media (max-width: 480px) {
      .hero-actions {
        gap: 0;
      }
      .hero-actions .btn-pill {
        margin-bottom: 0.85rem;
      }
      .hero-actions .btn-pill:last-child {
        margin-bottom: 0;
      }'''

good_css = r'''      .hero-actions .btn-pill {
        width: 100%;
        justify-content: center;
        padding: 0.85rem 1rem;
        font-size: 0.82rem;
        white-space: normal;
        text-align: center;
        line-height: 1.3;
      }
      .floating-hero-card {'''

# Wait, `bad_css` has some elements that were original. Let's just restore the 768px block and add the 480px block at the end of the file or at the end of the 768px block.

content = content.replace(bad_css, good_css)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
