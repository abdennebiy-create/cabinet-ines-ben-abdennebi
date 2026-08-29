import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Add a max-width: 480px rule for .hero-actions
old_hero_mobile = r'''      .hero-actions {
        flex-direction: column;
        align-items: stretch;
        gap: 0.7rem;
      }
      .hero-actions .btn-pill {
        width: 100%;
        justify-content: center;
        padding: 0.85rem 1rem;
        font-size: 0.82rem;
        white-space: normal;
        text-align: center;
        line-height: 1.3;
      }'''

new_hero_mobile = r'''      .hero-actions {
        flex-direction: column;
        align-items: stretch;
        gap: 0.85rem;
      }
      .hero-actions .btn-pill {
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

content = content.replace(old_hero_mobile, new_hero_mobile)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
