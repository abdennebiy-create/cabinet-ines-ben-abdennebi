import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update meta tags
old_og_title = r'<meta property="og:title" content="Cabinet de Nutrition Inès Ben Abdennebi — Radès | Nutrition & Bien-Être" />'
new_og_title = r'<meta property="og:title" content="Cabinet Inès Ben Abdennebi - Nutrition & Diététique">'
content = content.replace(old_og_title, new_og_title)

old_og_desc = r'<meta property="og:description" content="Cabinet de nutrition Inès Ben Abdennebi à Radès (Tunis). Nutrition, bien-être et accompagnement sur-mesure pour enfants, adultes et seniors sans privation." />'
new_og_desc = r'<meta property="og:description" content="Réalisez votre pré-diagnostic clinique en ligne gratuitement.">'
content = content.replace(old_og_desc, new_og_desc)

# 2. Update consent box
old_consent = r'''        <div class="form-group" style="margin-top: 0.85rem; margin-bottom: 0.25rem;">
          <label style="display: flex; align-items: flex-start; gap: 0.65rem; font-size: 0.82rem; color: var(--text-muted); cursor: pointer; line-height: 1.45;">
            <input type="checkbox" name="medical_consent" required style="margin-top: 0.15rem; accent-color: var(--accent-mauve); cursor: pointer;" />
            <span data-i18n="lbl_consent">J'accepte que mes données soient traitées pour organiser mon rendez-vous (Secret médical & RGPD).</span>
          </label>
        </div>'''

new_consent = r'''        <div class="form-group" style="margin-top: 0.85rem; margin-bottom: 0.25rem;">
          <label class="consent-box" style="display: flex; align-items: flex-start; gap: 0.65rem; font-size: 0.82rem; color: var(--text-muted); cursor: pointer; line-height: 1.45;">
            <input type="checkbox" id="consentement-medical" required style="margin-top: 0.15rem; accent-color: var(--accent-mauve); cursor: pointer;">
            <span>Je consens à transmettre ces informations au cabinet d'Inès Ben Abdennebi pour mon pré-diagnostic.</span>
          </label>
        </div>'''
if old_consent in content:
    content = content.replace(old_consent, new_consent)
else:
    print("Old consent not found")

# 3. Add success box to modal
old_modal_start = r'''  <!-- Modal: Formulaire de Réservation -->
  <div class="modal-overlay" id="bookingModal" onclick="handleModalBackdropClick(event, 'bookingModal')">
    <div class="modal-box" onclick="event.stopPropagation()">
      <button class="modal-close" onclick="closeModal('bookingModal')" aria-label="Fermer la fenêtre"><i class="fa-solid fa-xmark"></i></button>
      <h3 style="font-size: 1.75rem; margin-bottom: 0.5rem;" data-i18n="m_title">Réserver une Consultation</h3>
      <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 1.75rem;" data-i18n="m_sub">L'équipe vous recontacte sous 24h pour valider votre créneau.</p>

      <form name="rendez-vous" method="POST" data-netlify="true" netlify-honeypot="bot-field" onsubmit="handleFormSubmit(event)">'''

new_modal_start = r'''  <!-- Modal: Formulaire de Réservation -->
  <div class="modal-overlay" id="bookingModal" onclick="handleModalBackdropClick(event, 'bookingModal')">
    <div class="modal-box" onclick="event.stopPropagation()">
      <button class="modal-close" onclick="closeModal('bookingModal')" aria-label="Fermer la fenêtre"><i class="fa-solid fa-xmark"></i></button>
      
      <div id="bookingSuccessBox" style="display: none; text-align: center; padding: 2rem 0.5rem;">
        <div style="font-size: 3.5rem; color: #10b981; margin-bottom: 1.25rem;"><i class="fa-solid fa-circle-check"></i></div>
        <h3 style="font-size: 1.5rem; color: var(--text-dark-rose); margin-bottom: 1rem;">Dossier transmis avec succès !</h3>
        <p style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 2rem;">
          ✨ Inès a bien reçu votre pré-diagnostic. Elle l'analysera personnellement et vous recontactera sous 24h sur votre numéro WhatsApp pour fixer votre première consultation.
        </p>
        <button type="button" class="btn-pill" style="width: 100%; background-color: var(--primary); color: white;" onclick="closeModal('bookingModal')">FERMER</button>
      </div>

      <div id="bookingFormWrapper">
        <h3 style="font-size: 1.75rem; margin-bottom: 0.5rem;" data-i18n="m_title">Réserver une Consultation</h3>
        <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 1.75rem;" data-i18n="m_sub">L'équipe vous recontacte sous 24h pour valider votre créneau.</p>

        <form name="rendez-vous" method="POST" data-netlify="true" netlify-honeypot="bot-field" onsubmit="handleFormSubmit(event)">'''

if old_modal_start in content:
    content = content.replace(old_modal_start, new_modal_start)
else:
    print("Old modal start not found")

# Need to close the bookingFormWrapper div at the end of the form
old_form_end = r'''      </form>
    </div>
  </div>'''
new_form_end = r'''      </form>
      </div> <!-- End bookingFormWrapper -->
    </div>
  </div>'''
if old_form_end in content:
    content = content.replace(old_form_end, new_form_end)
else:
    print("Old form end not found")

# 4. Modify handleFormSubmit to show the success box instead of alert
old_success = r'''        if (!response.ok || (!data.success && !data.warning)) {
          throw new Error(data.error || "Erreur Telegram");
        }

        alert(alertMsg);
        form.reset();
        closeModal('bookingModal');
        if (typeof checkUnlockStatus === 'function') checkUnlockStatus();'''

new_success = r'''        if (!response.ok || (!data.success && !data.warning)) {
          throw new Error(data.error || "Erreur Telegram");
        }

        // Show success box instead of alert
        const formWrapper = document.getElementById('bookingFormWrapper');
        const successBox = document.getElementById('bookingSuccessBox');
        if (formWrapper && successBox) {
            formWrapper.style.display = 'none';
            successBox.style.display = 'block';
        }
        form.reset();
        if (typeof checkUnlockStatus === 'function') checkUnlockStatus();'''
if old_success in content:
    content = content.replace(old_success, new_success)
else:
    print("Old success not found")

# 5. Modify openModal to reset form display when opened
old_open_modal = r'''    function openModal(id) {
      const modal = document.getElementById(id);
      if (modal) {
        modal.style.display = 'flex';'''

new_open_modal = r'''    function openModal(id) {
      const modal = document.getElementById(id);
      if (modal) {
        if (id === 'bookingModal') {
          const formWrapper = document.getElementById('bookingFormWrapper');
          const successBox = document.getElementById('bookingSuccessBox');
          if (formWrapper) formWrapper.style.display = 'block';
          if (successBox) successBox.style.display = 'none';
        }
        modal.style.display = 'flex';'''
if old_open_modal in content:
    content = content.replace(old_open_modal, new_open_modal)
else:
    print("Old openModal not found")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
