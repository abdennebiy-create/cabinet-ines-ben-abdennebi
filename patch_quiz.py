import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remove Résumé Clinique Patient
old_resume = r'''            <!-- Résumé Clinique Patient -->
            <div style="background: #ffffff; border: 1.5px solid rgba(232, 198, 200, 0.85); border-radius: 1rem; padding: 0.8rem; margin-bottom: 1rem; box-shadow: 0 2px 10px rgba(92, 60, 67, 0.05); text-align: start;">
              <h3 style="font-family: 'Playfair Display', serif; font-size: 1rem; color: var(--text-dark-rose); margin-bottom: 0.6rem; display: flex; align-items: center; gap: 0.5rem;">
                <i class="fa-solid fa-file-medical" style="color: var(--accent-mauve);"></i>
                ${lang === 'ar' ? 'البيانات السريرية' : lang === 'en' ? 'Clinical Data' : lang === 'es' ? 'Datos Clínicos' : 'Vos Données Cliniques'}
              </h3>
              <div style="font-size: 0.85rem; color: var(--text-main); line-height: 1.4;">
                <ul style="list-style-type: none; padding-left: 0; margin-bottom: 0;">
                  ${this.state.history.map((h, i) => `<li style="margin-bottom: 0.4rem; border-bottom: 1px solid #f4e3e5; padding-bottom: 0.4rem;"><strong style="color: var(--text-dark-rose);">Q${i+1}:</strong> ${h.selection}</li>`).join('')}
                </ul>
              </div>
            </div>'''

content = content.replace(old_resume, "")

# 2. Add ID to Calculateur Métabolique and hide it by default
old_calc_start = r'''            <!-- Calculateur Métabolique -->
            <div style="background: linear-gradient(135deg, #ffffff 0%, #fbf5f6 100%); border: 1.5px solid rgba(196, 157, 165, 0.4); border-radius: 1rem; padding: 1rem; margin-bottom: 1rem; box-shadow: 0 4px 15px rgba(92, 60, 67, 0.08); text-align: start;">'''

new_calc_start = r'''            <!-- Calculateur Métabolique -->
            <div id="metabolicCalculatorSection" style="display: none; background: linear-gradient(135deg, #ffffff 0%, #fbf5f6 100%); border: 1.5px solid rgba(196, 157, 165, 0.4); border-radius: 1rem; padding: 1rem; margin-bottom: 1rem; box-shadow: 0 4px 15px rgba(92, 60, 67, 0.08); text-align: start;">'''

content = content.replace(old_calc_start, new_calc_start)

# 3. Update the Success Box Content
old_success = r'''      <div id="bookingSuccessBox" style="display: none; text-align: center; padding: 2rem 0.5rem;">
        <div style="font-size: 3.5rem; color: #10b981; margin-bottom: 1.25rem;"><i class="fa-solid fa-circle-check"></i></div>
        <h3 style="font-size: 1.5rem; color: var(--text-dark-rose); margin-bottom: 1rem;">Dossier transmis avec succès !</h3>
        <p style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.5rem;">
          ✨ Inès a bien reçu votre pré-diagnostic. Elle l'analysera personnellement et vous recontactera sous 24h sur votre numéro WhatsApp pour fixer votre première consultation.
        </p>
        
        <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" class="btn-pill" style="width: 100%; margin-bottom: 0.8rem; font-size: 1rem; padding: 1.1rem; background-color: var(--accent-mauve); color: white; border: none; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 0.6rem;">
          <i class="fa-regular fa-calendar"></i> Prendre mon 1er rendez-vous
        </a>

        <button type="button" class="btn-pill" style="width: 100%; background-color: transparent; color: var(--text-muted); border: 1px solid var(--text-muted); padding: 0.8rem;" onclick="closeModal('bookingModal')">Fermer</button>
      </div>'''

new_success = r'''      <div id="bookingSuccessBox" style="display: none; text-align: center; padding: 2rem 0.5rem;">
        <div style="font-size: 3.5rem; color: #10b981; margin-bottom: 1.25rem;"><i class="fa-solid fa-circle-check"></i></div>
        <h3 style="font-size: 1.5rem; color: var(--text-dark-rose); margin-bottom: 1rem;">Félicitations !</h3>
        <p style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.5rem;">
          ✨ Dossier transmis. Tu as débloqué la pleine capacité de la Nutrithèque ! On commence par le calculateur métabolique.
        </p>
        
        <button type="button" class="btn-pill" style="width: 100%; margin-bottom: 0.8rem; font-size: 1rem; padding: 1.1rem; background-color: var(--accent-mauve); color: white; border: none; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 0.6rem;" onclick="revealMetabolicCalculator()">
          <i class="fa-solid fa-calculator"></i> Accéder au Calculateur
        </button>

        <button type="button" class="btn-pill" style="width: 100%; background-color: transparent; color: var(--text-muted); border: 1px solid var(--text-muted); padding: 0.8rem;" onclick="closeModal('bookingModal')">Fermer</button>
      </div>'''

content = content.replace(old_success, new_success)

# 4. Inject revealMetabolicCalculator function
reveal_func = r'''    <script>
    window.revealMetabolicCalculator = () => {
        closeModal('bookingModal');
        const calcSection = document.getElementById('metabolicCalculatorSection');
        if (calcSection) {
            calcSection.style.display = 'block';
            calcSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            // Fallback: just scroll to the food tracker directly if the calculator isn't present
            const tracker = document.getElementById('food-tracker');
            if (tracker) {
                tracker.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };
    </script>'''

content = content.replace('</body>', reveal_func + '\n</body>')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
