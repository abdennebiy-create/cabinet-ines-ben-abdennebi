import re

with open('assets/food-database.js', 'r', encoding='utf-8') as f:
    js = f.read()

fallback = """    if (typeof openModal === 'function') {
      openModal('softLockModal');
    } else {
      const modal = document.getElementById('softLockModal');
      if (modal) {
        modal.style.display = 'flex';
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    }"""

js = js.replace("    if (typeof openModal === 'function') openModal('softLockModal');", fallback)

with open('assets/food-database.js', 'w', encoding='utf-8') as f:
    f.write(js)
