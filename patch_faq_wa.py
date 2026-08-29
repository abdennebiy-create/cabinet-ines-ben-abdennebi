import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remove FAQ from nav
content = re.sub(r'\s*<li><a href="javascript:void\(0\)" onclick="toggleAIDrawer\(\); closeMobileMenu\(\);" data-i18n="nav_faq">[^<]*</a></li>', '', content)

# 2. Remove FAQ from chat suggestions
content = re.sub(r'\s*<button onclick="envoyerMessageChat\(\'💡 J\\\'ai une question sur les consultations \(FAQ\)\'\)"><i class="fa-solid fa-circle-question" style="color:var\(--accent-mauve\); margin-right:4px;"></i> Questions \(FAQ\)</button>', '', content)

# 3. Fix the updateWhatsAppLinks function
old_wa_links = r'''    function updateWhatsAppLinks() {
      // Intentionally empty. No longer using WhatsApp links for these elements.
      const waFloat = document.getElementById('waFloatBtn');
      const contactWa = document.getElementById('contactWhatsAppBtn');
      if (waFloat) waFloat.onclick = (e) => { e.preventDefault(); openModal('bookingModal'); };
      if (contactWa) contactWa.onclick = (e) => { e.preventDefault(); openModal('bookingModal'); };
    }'''

new_wa_links = r'''    function updateWhatsAppLinks() {
      // Let the WhatsApp buttons act as normal links now!
    }'''
content = content.replace(old_wa_links, new_wa_links)

# 4. Change WhatsApp float button CSS from right to left
old_wa_css = r'''    .whatsapp-float-btn {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      width: 65px;
      height: 65px;'''
new_wa_css = r'''    .whatsapp-float-btn {
      position: fixed;
      bottom: 2rem;
      left: 2rem;
      width: 65px;
      height: 65px;'''
content = content.replace(old_wa_css, new_wa_css)

# 5. Change the WhatsApp float button HTML to an actual WhatsApp link
old_wa_html = r'''  <!-- Bouton de Contact Flottant -->
  <button onclick="openModal('bookingModal')" class="whatsapp-float-btn" style="background-color: var(--primary); border: none; cursor: pointer; color: white; display: flex; align-items: center; justify-content: center;" id="waFloatBtn" aria-label="Prendre rendez-vous" data-i18n-aria="wa_float_aria">
    <i class="fa-solid fa-calendar-check"></i>
  </button>'''

new_wa_html = r'''  <!-- Bouton de Contact Flottant -->
  <a href="https://api.whatsapp.com/send/?phone=21655211116&text=Bonjour%20Cabinet%20de%20Nutrition%20In%C3%A8s%20Ben%20Abdennebi%2C%20je%20souhaite%20prendre%20rendez-vous." target="_blank" rel="noopener noreferrer" class="whatsapp-float-btn" style="background-color: #25D366; color: white; display: flex; align-items: center; justify-content: center; text-decoration: none;" id="waFloatBtn" aria-label="Contactez le cabinet sur WhatsApp" data-i18n-aria="wa_float_aria" onclick="if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){this.href='whatsapp://send?phone=21655211116&text=Bonjour%20Cabinet%20de%20Nutrition%20In%C3%A8s%20Ben%20Abdennebi%2C%20je%20souhaite%20prendre%20rendez-vous.';}">
    <i class="fa-brands fa-whatsapp" style="font-size: 2rem;"></i>
  </a>'''
content = content.replace(old_wa_html, new_wa_html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
