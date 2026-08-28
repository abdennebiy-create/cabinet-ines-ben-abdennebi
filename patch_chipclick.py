import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_click = r'''function handleChipClick(type) {
    if (type === 'whatsapp') {
    const infoMessages = {
        fr: "Bonjour, je souhaite des informations sur les consultations au cabinet de nutrition.",
        ar: "مرحباً، أود الحصول على معلومات حول الاستشارات في عيادة التغذية.",
        en: "Hello, I would like more information regarding consultations at the nutrition clinic.",
        es: "Hola, deseo más información sobre las consultas en la clínica de nutrición."
    };
    const msg = encodeURIComponent(infoMessages[currentLang] || infoMessages.fr);
    const phone = typeof WHATSAPP_NUMBER !== 'undefined' ? WHATSAPP_NUMBER : "21655211116";
    window.open(`${buildWhatsAppUrl(phone, decodeURIComponent(msg))}`, '_blank');
    }
}'''

new_click = r'''function handleChipClick(type) {
    if (type === 'whatsapp') {
      openModal('bookingModal');
    }
}'''

if old_click in content:
    content = content.replace(old_click, new_click)
else:
    print("Could not find handleChipClick")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
