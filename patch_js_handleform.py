import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_handle_form = re.search(r'    async function handleFormSubmit\(e\) \{.*?(?=    function openProgramDetails)', content, re.DOTALL)

if old_handle_form:
    old_code = old_handle_form.group(0)
    
    new_code = r'''    async function handleFormSubmit(e) {
      e.preventDefault();
      if (isFormSubmitting) return;
      localStorage.setItem('rdv_requested', 'true');
      
      const form = e.target;
      const submitBtn = document.getElementById('bookingSubmitBtn');
      isFormSubmitting = true;
      const originalHtml = submitBtn ? submitBtn.innerHTML : '';
      
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Envoi en cours...';
      }

      const nomVal = form.elements['nom'] ? form.elements['nom'].value : '';
      const telVal = form.elements['telephone'] ? form.elements['telephone'].value : '';
      const dateVal = form.elements['date_souhaitee'] ? form.elements['date_souhaitee'].value : '';
      const creneauVal = form.elements['creneau'] ? form.elements['creneau'].value : '';
      const serviceVal = form.elements['service'] ? form.elements['service'].value : (document.getElementById('serviceSelect') ? document.getElementById('serviceSelect').value : '');
      const dossierVal = form.elements['dossier_patient_ia'] ? form.elements['dossier_patient_ia'].value : (document.getElementById('bookingDossier') ? document.getElementById('bookingDossier').value : '');
      
      let baseMsg = `Nouvelle demande de rendez-vous :\n\n- Nom : ${nomVal}\n- Tél : ${telVal}\n- Date : ${dateVal}\n- Créneau : ${creneauVal}\n- Motif : ${serviceVal}`;
      
      if (dossierVal) {
        baseMsg += `\n\n📋 *Dossier Patient :*\n${dossierVal}`;
      } else if (window.AIEngine && window.AIEngine.state && window.AIEngine.state.isComplete) {
        let trackName = window.AIEngine.state.track || 'general';
        let score = (window.AIEngine.state.biometrics && window.AIEngine.state.biometrics.metabolic_score) ? window.AIEngine.state.biometrics.metabolic_score : 85;
        baseMsg += `\n\n📊 *Bilan en ligne :*\n• Profil : ${trackName.toUpperCase()}\n• Score de vitalité : ${score}/100`;
        
        let answersSummary = '';
        if (window.AIEngine.state.history && window.AIEngine.state.history.length > 0) {
          answersSummary = window.AIEngine.state.history.map((h, i) => `   • Étape ${i + 1} : ${h.selection}`).join('\n');
          baseMsg += `\n• Détail des réponses :\n${answersSummary}`;
        }
      }

      try {
        const response = await fetch('/api/send-telegram', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: baseMsg })
        });
        
        const data = await response.json();
        if (!response.ok || (!data.success && !data.warning)) {
          throw new Error(data.error || 'Erreur Telegram');
        }
        
        const successMessages = {
          fr: "Merci ! Votre demande de rendez-vous a bien été transmise à notre cabinet.",
          ar: "شكراً لك! تم إرسال طلب الموعد بنجاح إلى عيادتنا.",
          en: "Thank you! Your appointment request has been successfully sent.",
          es: "¡Gracias! Su solicitud de cita ha sido enviada con éxito."
        };
        alert(successMessages[currentLang] || successMessages.fr);
        form.reset();
        closeModal('bookingModal');
        checkUnlockStatus();
      } catch (err) {
        console.error("Form submission error:", err);
        alert('Erreur lors de l\'envoi. Veuillez réessayer plus tard.');
      } finally {
        isFormSubmitting = false;
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalHtml;
        }
      }
    }
'''
    content = content.replace(old_code, new_code)
else:
    print("Could not find handleFormSubmit block.")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
