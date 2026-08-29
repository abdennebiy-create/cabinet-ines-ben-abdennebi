import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update Success Box
old_success = r'''        <p style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.5rem;">
          ✨ Dossier transmis. Tu as débloqué la pleine capacité de la Nutrithèque ! On commence par le calculateur métabolique.
        </p>
        
        <button type="button" class="btn-pill" style="width: 100%; margin-bottom: 0.8rem; font-size: 1rem; padding: 1.1rem; background-color: var(--accent-mauve); color: white; border: none; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 0.6rem;" onclick="revealMetabolicCalculator()">
          <i class="fa-solid fa-calculator"></i> Accéder au Calculateur
        </button>'''

new_success = r'''        <p style="font-size: 1.05rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.5rem;">
          ✨ Dossier transmis avec succès ! Inès va analyser vos réponses et concevoir votre plan nutritionnel 100% sur-mesure (besoins, menus, etc.). Vous n'avez plus rien à calculer, elle s'occupe de tout !
        </p>
        
        <button type="button" class="btn-pill" style="width: 100%; margin-bottom: 0.8rem; font-size: 1rem; padding: 1.1rem; background-color: var(--accent-mauve); color: white; border: none; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 0.6rem;" onclick="revealNutritheque()">
          <i class="fa-solid fa-arrow-right"></i> Accéder à ma Nutrithèque
        </button>'''

content = content.replace(old_success, new_success)

# 2. Delete the Metabolic Calculator block
calc_start_index = content.find('<!-- Calculateur Métabolique -->')
calc_end_index = content.find('<!-- Note du Cabinet -->')

if calc_start_index != -1 and calc_end_index != -1:
    content = content[:calc_start_index] + content[calc_end_index:]


# 3. Replace the reveal function
old_script = r'''    <script>
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

new_script = r'''    <script>
    window.revealNutritheque = () => {
        closeModal('bookingModal');
        const tracker = document.getElementById('food-tracker');
        if (tracker) {
            tracker.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    </script>'''

content = content.replace(old_script, new_script)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

