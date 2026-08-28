import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace button HTML
old_btn = r'''<button type="button" class="btn-pill" style="width: 100%; background-color: #25D366; color: #ffffff; border: none; box-shadow: 0 4px 15px rgba(37, 211, 102, 0.35); cursor: pointer;" onclick="openWhatsAppWithSlot()">
            <i class="fa-brands fa-whatsapp"></i> <span data-i18n="btn_wa_slot">ENVOYER CE CHOIX SUR WHATSAPP</span>
          </button>'''

new_btn = r'''<button type="button" id="telegramBtn" class="btn-pill" style="width: 100%; background-color: #0088cc; color: #ffffff; border: none; box-shadow: 0 4px 15px rgba(0, 136, 204, 0.35); cursor: pointer;" onclick="sendToTelegram()">
            <i class="fa-brands fa-telegram"></i> <span>ENVOYER LA DEMANDE (TELEGRAM)</span>
          </button>'''

content = content.replace(old_btn, new_btn)

old_func_match = re.search(r'    function openWhatsAppWithSlot\(\) \{.*?(?=\n    \}\n\n    //)', content, re.DOTALL)
if old_func_match:
    func_code = old_func_match.group(0)
    
    new_func = func_code.replace('openWhatsAppWithSlot', 'sendToTelegram')
    
    fetch_code = r'''
      const telegramBtn = document.getElementById('telegramBtn');
      const originalHtml = telegramBtn ? telegramBtn.innerHTML : '';
      if (telegramBtn) telegramBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Envoi en cours...';

      fetch('/api/send-telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: baseMsg })
      }).then(res => res.json()).then(data => {
        if (telegramBtn) telegramBtn.innerHTML = originalHtml;
        if (data.success) {
          alert('Votre demande a bien été envoyée sur Telegram !');
          closeModal('bookingModal');
          checkUnlockStatus();
        } else {
          alert('Erreur lors de l\'envoi : ' + (data.error || 'Erreur inconnue'));
        }
      }).catch(err => {
        if (telegramBtn) telegramBtn.innerHTML = originalHtml;
        console.error(err);
        alert('Erreur réseau lors de l\'envoi Telegram.');
      });'''
    
    new_func = re.sub(r'      const encodedMsg = encodeURIComponent\(baseMsg\);\n      const waUrl = `https://wa\.me/\$\{phone\}\?text=\$\{encodedMsg\}`;\n      window\.open\(waUrl, \'_blank\'\);\n      closeModal\(\'bookingModal\'\);\n      checkUnlockStatus\(\);', fetch_code, new_func)

    content = content.replace(func_code, new_func)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
