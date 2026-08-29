import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update the AI CTA in dossier
old_cta = r'''            <!-- The Patient File CTA -->
            <div class="ai-booking-box" style="background: var(--text-dark-rose); color: white; border-radius: 1.2rem; padding: 1rem; text-align: center; box-shadow: 0 -5px 20px rgba(92, 60, 67, 0.15); position: sticky; bottom: 0.5rem; z-index: 99; border: 1px solid rgba(255,255,255,0.2);">
              <h3 class="ai-booking-headline" style="color: white; font-size: 1.1rem; margin-bottom: 0.3rem;">${bookingTitle}</h3>
              <p class="ai-booking-sub" style="color: rgba(255,255,255,0.85); font-size: 0.8rem; margin-bottom: 0.8rem; line-height: 1.2;">${bookingSub}</p>
              <button onclick="AIEngine.transferDossierToForm()" class="btn-pill" style="width: 100%; font-size: 0.95rem; padding: 0.8rem; cursor: pointer; background: white; color: var(--text-dark-rose); font-weight: 700;">
                <i class="fa-solid fa-clipboard-check"></i> ${bookingBtn}
              </button>
            </div>'''

new_cta = r'''            <!-- The Patient File CTA -->
            <div class="ai-booking-box" style="background: var(--text-dark-rose); color: white; border-radius: 1.2rem; padding: 1rem; text-align: center; box-shadow: 0 -5px 20px rgba(92, 60, 67, 0.15); position: sticky; bottom: 0.5rem; z-index: 99; border: 1px solid rgba(255,255,255,0.2);">
              <h3 class="ai-booking-headline" style="color: white; font-size: 1.1rem; margin-bottom: 0.3rem;">${bookingTitle}</h3>
              <p class="ai-booking-sub" style="color: rgba(255,255,255,0.85); font-size: 0.8rem; margin-bottom: 0.8rem; line-height: 1.2;">${bookingSub}</p>
              
              <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                <a href="https://api.whatsapp.com/send/?phone=21655211116&text=${waMsg}" target="_blank" rel="noopener noreferrer" class="btn-pill" style="width: 100%; font-size: 0.95rem; padding: 0.8rem; cursor: pointer; background: #25D366; color: white; font-weight: 700; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 0.5rem;" onclick="if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){this.href='whatsapp://send?phone=21655211116&text=${waMsg}';}">
                  <i class="fa-brands fa-whatsapp" style="font-size: 1.1rem;"></i> ENVOYER VIA WHATSAPP
                </a>

                <button onclick="AIEngine.transferDossierToForm()" class="btn-pill" style="width: 100%; font-size: 0.95rem; padding: 0.8rem; cursor: pointer; background: white; color: var(--text-dark-rose); font-weight: 700;">
                  <i class="fa-solid fa-calendar-check"></i> VALIDER MON RDV AU CABINET
                </button>
              </div>
            </div>'''

if old_cta in content:
    content = content.replace(old_cta, new_cta)
else:
    print("AI CTA not found")

# 2. Add Calendly button to success box
old_success = r'''        <p style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 2rem;">
          ✨ Inès a bien reçu votre pré-diagnostic. Elle l'analysera personnellement et vous recontactera sous 24h sur votre numéro WhatsApp pour fixer votre première consultation.
        </p>
        <button type="button" class="btn-pill" style="width: 100%; background-color: var(--primary); color: white;" onclick="closeModal('bookingModal')">FERMER</button>'''

new_success = r'''        <p style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.5rem;">
          ✨ Inès a bien reçu votre pré-diagnostic. Elle l'analysera personnellement et vous recontactera sous 24h sur votre numéro WhatsApp pour fixer votre première consultation.
        </p>
        
        <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" class="btn-pill" style="width: 100%; margin-bottom: 0.8rem; font-size: 1rem; padding: 1.1rem; background-color: var(--accent-mauve); color: white; border: none; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 0.6rem;">
          <i class="fa-regular fa-calendar"></i> Prendre mon 1er rendez-vous
        </a>

        <button type="button" class="btn-pill" style="width: 100%; background-color: transparent; color: var(--text-muted); border: 1px solid var(--text-muted); padding: 0.8rem;" onclick="closeModal('bookingModal')">Fermer</button>'''

if old_success in content:
    content = content.replace(old_success, new_success)
else:
    print("Success box not found")

# 3. RTL Support
old_html_tag = r'''<html lang="fr" class="scroll-smooth">'''
new_html_tag = r'''<html lang="fr" class="scroll-smooth" dir="ltr">'''
content = content.replace(old_html_tag, new_html_tag)

old_lang_change = r'''    function changeLanguage(lang) {
      if (!translations[lang]) return;
      currentLang = lang;
      
      document.documentElement.lang = lang;'''
new_lang_change = r'''    function changeLanguage(lang) {
      if (!translations[lang]) return;
      currentLang = lang;
      
      document.documentElement.lang = lang;
      document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');'''
if old_lang_change in content:
    content = content.replace(old_lang_change, new_lang_change)
else:
    print("Lang change not found")


with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
