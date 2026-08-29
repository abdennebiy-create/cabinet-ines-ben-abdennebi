import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Add the Metabolic Goals Card HTML
old_html = r'''        <!-- Right: Daily Food Log & Macronutrient HUD -->
        <div>
          <div id="dailyFoodLogContainer">'''

new_html = r'''        <!-- Right: Daily Food Log & Macronutrient HUD -->
        <div>
          <!-- Nouveau module : Objectifs Métaboliques (Synchronisé IA) -->
          <div id="metabolicGoalsCard" style="display: none; background: linear-gradient(135deg, #ffffff 0%, #fbf5f6 100%); border: 1.5px solid #10b981; border-radius: 24px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 10px 30px rgba(16, 185, 129, 0.08); transition: all 0.3s ease;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
              <h3 style="font-family: var(--font-heading); font-size: 1.2rem; color: var(--text-dark-rose); margin: 0; display: flex; align-items: center; gap: 0.5rem;">
                <i class="fa-solid fa-bolt" style="color: #10b981;"></i> Objectif Métabolique
              </h3>
              <span style="background: rgba(16, 185, 129, 0.15); color: #10b981; padding: 0.3rem 0.6rem; border-radius: 8px; font-size: 0.75rem; font-weight: 700; display: flex; align-items: center; gap: 0.3rem;">
                <i class="fa-solid fa-link"></i> Synchronisé IA
              </span>
            </div>
            
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.2rem; line-height: 1.4;">
              Ces besoins ont été calculés et répartis automatiquement d'après votre Bilan Métabolique.
            </p>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 0.5rem;">
              <div style="background: white; border: 1px solid rgba(232, 198, 200, 0.5); border-radius: 16px; padding: 1rem; text-align: center; display: flex; flex-direction: column; justify-content: center;">
                <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase; margin-bottom: 0.4rem;">Énergie Cible</div>
                <div style="font-size: 1.8rem; font-weight: 800; color: var(--text-dark-rose); line-height: 1;"><span id="mgc_kcal">2000</span></div>
                <div style="font-size: 0.75rem; color: #7a5c64; font-weight: 600; margin-top: 0.3rem;">kcal / jour</div>
              </div>
              <div style="display: flex; flex-direction: column; justify-content: space-between; gap: 0.4rem;">
                 <div style="background: white; border: 1px solid rgba(232, 198, 200, 0.5); border-radius: 12px; padding: 0.6rem; display: flex; justify-content: space-between; align-items: center;">
                   <span style="font-size: 0.75rem; font-weight: 700; color: #c0392b;">Protéines (25%)</span>
                   <span style="font-size: 0.85rem; font-weight: 800; color: var(--text-dark-rose);"><span id="mgc_prot">0</span>g</span>
                 </div>
                 <div style="background: white; border: 1px solid rgba(232, 198, 200, 0.5); border-radius: 12px; padding: 0.6rem; display: flex; justify-content: space-between; align-items: center;">
                   <span style="font-size: 0.75rem; font-weight: 700; color: #d35400;">Glucides (45%)</span>
                   <span style="font-size: 0.85rem; font-weight: 800; color: var(--text-dark-rose);"><span id="mgc_carb">0</span>g</span>
                 </div>
                 <div style="background: white; border: 1px solid rgba(232, 198, 200, 0.5); border-radius: 12px; padding: 0.6rem; display: flex; justify-content: space-between; align-items: center;">
                   <span style="font-size: 0.75rem; font-weight: 700; color: #27ae60;">Lipides (30%)</span>
                   <span style="font-size: 0.85rem; font-weight: 800; color: var(--text-dark-rose);"><span id="mgc_fat">0</span>g</span>
                 </div>
              </div>
            </div>
          </div>
          
          <div id="dailyFoodLogContainer">'''

content = content.replace(old_html, new_html)

# Add the updateMetabolicGoalsCard function to window and call it on calculateMetabolism
old_func = r'''      // Auto-scroll to Nutrithèque to show the synced connection
      setTimeout(() => {'''

new_func = r'''      // Update Metabolic Goals Card
      window.updateMetabolicGoalsCard(tdee);
      
      // Auto-scroll to Nutrithèque to show the synced connection
      setTimeout(() => {'''

content = content.replace(old_func, new_func)

new_func_def = r'''    window.calculateMetabolism = () => {'''

new_func_def_replace = r'''    window.updateMetabolicGoalsCard = (tdee) => {
        const card = document.getElementById('metabolicGoalsCard');
        if (!card) return;
        
        document.getElementById('mgc_kcal').textContent = tdee;
        
        const prot = Math.round((tdee * 0.25) / 4);
        const carb = Math.round((tdee * 0.45) / 4);
        const fat = Math.round((tdee * 0.30) / 9);
        
        document.getElementById('mgc_prot').textContent = prot;
        document.getElementById('mgc_carb').textContent = carb;
        document.getElementById('mgc_fat').textContent = fat;
        
        card.style.display = 'block';
    };

    window.calculateMetabolism = () => {'''

content = content.replace(new_func_def, new_func_def_replace)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
