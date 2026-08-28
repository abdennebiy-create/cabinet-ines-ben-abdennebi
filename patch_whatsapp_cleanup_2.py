import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 3. Remove buildWhatsAppUrl
content = re.sub(r'    function buildWhatsAppUrl\(phone, text\) \{.*?    \}\n', '', content, flags=re.DOTALL)

# 4. Refactor getWhatsAppUrl and remove openWhatsAppModal
old_wa_funcs = re.search(r'    function getWhatsAppUrl\(\) \{.*?(?=    async function handleFormSubmit)', content, re.DOTALL)
if old_wa_funcs:
    content = content.replace(old_wa_funcs.group(0), r'''
    function updateWhatsAppLinks() {
      // Intentionally empty. No longer using WhatsApp links for these elements.
      const waFloat = document.getElementById('waFloatBtn');
      const contactWa = document.getElementById('contactWhatsAppBtn');
      if (waFloat) waFloat.onclick = (e) => { e.preventDefault(); openModal('bookingModal'); };
      if (contactWa) contactWa.onclick = (e) => { e.preventDefault(); openModal('bookingModal'); };
    }
''')

# 5. Fix floating WhatsApp HTML button
old_float_btn = r'''  <!-- Bouton WhatsApp Flottant (Bas Gauche) -->
  <a href="https://api.whatsapp.com/send/?phone=21655211116&text=Bonjour%20Cabinet%20de%20Nutrition%20In%C3%A8s%20Ben%20Abdennebi%2C%20je%20souhaite%20prendre%20rendez-vous." onclick="localStorage.setItem('wa_contacted', 'true'); if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){this.href='whatsapp://send?phone=21655211116&text=Bonjour%20Cabinet%20de%20Nutrition%20In%C3%A8s%20Ben%20Abdennebi%2C%20je%20souhaite%20prendre%20rendez-vous.';}" target="_blank" rel="noopener noreferrer" class="whatsapp-float-btn" id="waFloatBtn" aria-label="Contactez le cabinet sur WhatsApp" data-i18n-aria="wa_float_aria">
    <i class="fa-brands fa-whatsapp"></i>
  </a>'''

new_float_btn = r'''  <!-- Bouton de Contact Flottant -->
  <button onclick="openModal('bookingModal')" class="whatsapp-float-btn" style="background-color: var(--primary); border: none; cursor: pointer; color: white; display: flex; align-items: center; justify-content: center;" id="waFloatBtn" aria-label="Prendre rendez-vous" data-i18n-aria="wa_float_aria">
    <i class="fa-solid fa-calendar-check"></i>
  </button>'''

content = content.replace(old_float_btn, new_float_btn)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
