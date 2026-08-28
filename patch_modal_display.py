import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
    '''    function openModal(id) {
      const modal = document.getElementById(id);
      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    }''',
    '''    function openModal(id) {
      const modal = document.getElementById(id);
      if (modal) {
        modal.style.display = 'flex';
        // force reflow
        void modal.offsetWidth;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    }'''
)

content = content.replace(
    '''    function closeModal(id) {
      const modal = document.getElementById(id);
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    }''',
    '''    function closeModal(id) {
      const modal = document.getElementById(id);
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => {
          modal.style.display = 'none';
        }, 300); // match CSS transition duration
      }
    }'''
)

# Remove the inline `display: none;` from bookingModal and other modals just to be safe, actually let's leave them.
# The setTimeout allows the opacity transition to finish.
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
