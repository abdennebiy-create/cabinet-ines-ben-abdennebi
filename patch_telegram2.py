import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

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
        if (data.success || data.warning) {
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
      });
'''

# The original has: window.open(`${buildWhatsAppUrl(phone, baseMsg)}`, '_blank');
content = content.replace("      window.open(`${buildWhatsAppUrl(phone, baseMsg)}`, '_blank');", fetch_code)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
