import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Fix the broken buildWhatsAppUrl leftover
content = re.sub(r'      return `https://api\.whatsapp\.com/send/\?phone=\$\{phone\}&text=\$\{encodeURIComponent\(text\)\}`;\n    \}\n', '', content)

# 2. Fix contactWhatsAppBtn hardcoded link in HTML
old_contact = r'''<a id="contactWhatsAppBtn" class="btn-pill" style="width: 100%; font-size: 1rem; padding: 1.1rem; background-color: #25D366; color: white; border: none; box-shadow: 0 8px 20px rgba(37, 211, 102, 0.3); text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 0.6rem;" target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send/?phone=21655211116&text=Bonjour%20Cabinet%20de%20Nutrition%20In%C3%A8s%20Ben%20Abdennebi%2C%20je%20souhaite%20prendre%20rendez-vous." onclick="localStorage.setItem('wa_contacted', 'true'); if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){this.href='whatsapp://send?phone=21655211116&text=Bonjour%20Cabinet%20de%20Nutrition%20In%C3%A8s%20Ben%20Abdennebi%2C%20je%20souhaite%20prendre%20rendez-vous.';}">
            <i class="fa-brands fa-whatsapp" style="font-size: 1.2rem;"></i> <span data-i18n="btn_wa">MESSAGE DIRECT SUR WHATSAPP</span>
          </a>'''

new_contact = r'''<button id="contactWhatsAppBtn" class="btn-pill" style="width: 100%; font-size: 1rem; padding: 1.1rem; background-color: #0088cc; color: white; border: none; box-shadow: 0 8px 20px rgba(0, 136, 204, 0.3); text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 0.6rem; cursor: pointer;" onclick="openModal('bookingModal')">
            <i class="fa-brands fa-telegram" style="font-size: 1.2rem;"></i> <span data-i18n="btn_wa">MESSAGE DIRECT SUR TELEGRAM</span>
          </button>'''

if old_contact in content:
    content = content.replace(old_contact, new_contact)

# 3. Fix line 5876 where there is a clickAction for whatsapp
old_click = r'''  function handleQuickContact(type) {
    if (type === 'tel') {
      window.location.href = "tel:+21655211116";
      return;
    }
    if (type === 'whatsapp') {
      const infoMessages = {
        fr: "Bonjour, je souhaite avoir plus d'informations concernant les consultations au cabinet de nutrition.",
        ar: "مرحباً، أود الحصول على مزيد من المعلومات حول الاستشارات في عيادة التغذية.",
        en: "Hello, I would like more information regarding consultations at the nutrition clinic.",
        es: "Hola, deseo más información sobre las consultas en la clínica de nutrición."
      };
      const msg = encodeURIComponent(infoMessages[currentLang] || infoMessages.fr);
      const phone = typeof WHATSAPP_NUMBER !== 'undefined' ? WHATSAPP_NUMBER : "21655211116";
      window.open(`${buildWhatsAppUrl(phone, decodeURIComponent(msg))}`, '_blank');
    }
  }'''

new_click = r'''  function handleQuickContact(type) {
    if (type === 'tel') {
      window.location.href = "tel:+21655211116";
      return;
    }
    if (type === 'whatsapp') {
      openModal('bookingModal');
    }
  }'''

if old_click in content:
    content = content.replace(old_click, new_click)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
