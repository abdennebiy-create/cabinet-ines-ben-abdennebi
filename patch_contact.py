import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_contact = r'''<button id="contactWhatsAppBtn" class="btn-pill" style="width: 100%; font-size: 1rem; padding: 1.1rem; background-color: #0088cc; color: white; border: none; box-shadow: 0 8px 20px rgba(0, 136, 204, 0.3); text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 0.6rem; cursor: pointer;" onclick="openModal('bookingModal')">
            <i class="fa-brands fa-telegram" style="font-size: 1.2rem;"></i> <span data-i18n="btn_wa">MESSAGE DIRECT SUR TELEGRAM</span>
          </button>'''

new_contact = r'''<a id="contactWhatsAppBtn" class="btn-pill" style="width: 100%; font-size: 1rem; padding: 1.1rem; background-color: #25D366; color: white; border: none; box-shadow: 0 8px 20px rgba(37, 211, 102, 0.3); text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 0.6rem;" target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send/?phone=21655211116&text=Bonjour%20Cabinet%20de%20Nutrition%20In%C3%A8s%20Ben%20Abdennebi%2C%20je%20souhaite%20prendre%20rendez-vous." onclick="localStorage.setItem('wa_contacted', 'true'); if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){this.href='whatsapp://send?phone=21655211116&text=Bonjour%20Cabinet%20de%20Nutrition%20In%C3%A8s%20Ben%20Abdennebi%2C%20je%20souhaite%20prendre%20rendez-vous.';}">
            <i class="fa-brands fa-whatsapp" style="font-size: 1.2rem;"></i> <span data-i18n="btn_wa">MESSAGE DIRECT SUR WHATSAPP</span>
          </a>'''

if old_contact in content:
    content = content.replace(old_contact, new_contact)
else:
    print("contact btn not found")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
