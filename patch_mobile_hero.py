import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_hero_actions = r'''      .hero-section {
        padding-top: 7.5rem;
      }
      .hero-actions {
        flex-direction: column;
        align-items: stretch;
      }
      .hero-actions .btn-pill {
        width: 100%;
        justify-content: center;
      }'''

new_hero_actions = r'''      .hero-section {
        padding-top: 7.5rem;
        padding-bottom: 3.5rem;
      }
      .hero-actions {
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

content = content.replace(old_hero_actions, new_hero_actions)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
