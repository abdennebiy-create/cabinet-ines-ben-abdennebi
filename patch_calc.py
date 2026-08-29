import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

calc_html = r'''            <!-- Calculateur Métabolique -->
            <div style="background: linear-gradient(135deg, #ffffff 0%, #fbf5f6 100%); border: 1.5px solid rgba(196, 157, 165, 0.4); border-radius: 1rem; padding: 1rem; margin-bottom: 1rem; box-shadow: 0 4px 15px rgba(92, 60, 67, 0.08); text-align: start;">
              <h3 style="font-family: 'Playfair Display', serif; font-size: 1.1rem; color: var(--text-dark-rose); margin-bottom: 0.8rem; display: flex; align-items: center; gap: 0.5rem;">
                <i class="fa-solid fa-calculator" style="color: var(--accent-mauve);"></i>
                ${lang === 'ar' ? 'حساب الاحتياج الأيضي' : lang === 'en' ? 'Metabolic Calculator' : lang === 'es' ? 'Calculadora Metabólica' : 'Calculateur Métabolique'}
              </h3>
              <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 1rem; line-height: 1.4;">
                ${lang === 'ar' ? 'قم بحساب السعرات الحرارية اليومية المطلوبة لبرنامجك. سيتم ربطها تلقائياً بمفكرة التغذية الخاصة بك.' : lang === 'en' ? 'Calculate your daily calorie needs for your program. It will be automatically synced with your Food Tracker.' : lang === 'es' ? 'Calcule sus necesidades calóricas diarias para su programa. Se sincronizará automáticamente con su Diario de Nutrición.' : 'Calculez vos besoins caloriques journaliers pour votre programme. Ils seront automatiquement synchronisés avec votre Nutrithèque.'}
              </p>
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 0.85rem;">
                <div>
                  <label style="font-size: 0.75rem; font-weight: 700; color: var(--text-dark-rose); margin-bottom: 0.2rem; display: block;">${lang === 'ar' ? 'الوزن (كغ)' : 'Poids (kg)'}</label>
                  <input type="number" id="calcPoids" placeholder="Ex: 70" style="width: 100%; padding: 0.6rem; border: 1px solid #e8c6c8; border-radius: 8px; font-size: 0.9rem; outline: none; background: white; color: var(--text-dark-rose);" />
                </div>
                <div>
                  <label style="font-size: 0.75rem; font-weight: 700; color: var(--text-dark-rose); margin-bottom: 0.2rem; display: block;">${lang === 'ar' ? 'الطول (سم)' : 'Taille (cm)'}</label>
                  <input type="number" id="calcTaille" placeholder="Ex: 165" style="width: 100%; padding: 0.6rem; border: 1px solid #e8c6c8; border-radius: 8px; font-size: 0.9rem; outline: none; background: white; color: var(--text-dark-rose);" />
                </div>
              </div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 1rem;">
                <div>
                  <label style="font-size: 0.75rem; font-weight: 700; color: var(--text-dark-rose); margin-bottom: 0.2rem; display: block;">${lang === 'ar' ? 'العمر' : 'Âge'}</label>
                  <input type="number" id="calcAge" placeholder="Ex: 35" style="width: 100%; padding: 0.6rem; border: 1px solid #e8c6c8; border-radius: 8px; font-size: 0.9rem; outline: none; background: white; color: var(--text-dark-rose);" />
                </div>
                <div>
                  <label style="font-size: 0.75rem; font-weight: 700; color: var(--text-dark-rose); margin-bottom: 0.2rem; display: block;">${lang === 'ar' ? 'الجنس' : 'Sexe'}</label>
                  <select id="calcSexe" style="width: 100%; padding: 0.6rem; border: 1px solid #e8c6c8; border-radius: 8px; font-size: 0.9rem; outline: none; background: white; color: var(--text-dark-rose);">
                    <option value="F">${lang === 'ar' ? 'أنثى' : 'Femme'}</option>
                    <option value="M">${lang === 'ar' ? 'ذكر' : 'Homme'}</option>
                  </select>
                </div>
              </div>
              
              <button onclick="window.calculateMetabolism()" class="btn-pill btn-rose" style="width: 100%; padding: 0.7rem; justify-content: center; font-size: 0.85rem; border-radius: 8px;">
                <i class="fa-solid fa-bolt"></i> ${lang === 'ar' ? 'حساب الاحتياج اليومي' : 'Calculer mon besoin journalier'}
              </button>
              
              <div id="metabolismResult" style="display: none; margin-top: 1rem; padding-top: 0.85rem; border-top: 1px dashed rgba(196, 157, 165, 0.4); text-align: center;">
                <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; margin-bottom: 0.3rem;">Votre Cible Calorique</div>
                <div id="metabolismVal" style="font-size: 1.8rem; font-weight: 800; color: var(--text-dark-rose); line-height: 1; margin-bottom: 0.3rem;">0 kcal</div>
                <div style="font-size: 0.75rem; color: #10b981; font-weight: 600;"><i class="fa-solid fa-check-circle"></i> Synchronisé avec la Nutrithèque</div>
              </div>
            </div>'''

old_html = r'''            <!-- Résumé Clinique Patient -->
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

new_html = old_html + "\n\n" + calc_html

content = content.replace(old_html, new_html)

# Add the window function
script_function = r'''    window.calculateMetabolism = () => {
      const p = parseFloat(document.getElementById('calcPoids').value);
      const t = parseFloat(document.getElementById('calcTaille').value);
      const a = parseFloat(document.getElementById('calcAge').value);
      const s = document.getElementById('calcSexe').value;
      
      if (!p || !t || !a) {
          alert("Veuillez remplir le poids, la taille et l'âge.");
          return;
      }
      
      let bmr = (10 * p) + (6.25 * t) - (5 * a);
      if (s === 'M') {
          bmr += 5;
      } else {
          bmr -= 161;
      }
      
      const tdee = Math.round(bmr * 1.3);
      
      const resBox = document.getElementById('metabolismResult');
      const resVal = document.getElementById('metabolismVal');
      resVal.textContent = tdee + " kcal";
      resBox.style.display = 'block';
      
      localStorage.setItem('cabinet_nutrition_daily_goal_v1', tdee.toString());
      if (window.DailyFoodLog && window.DailyFoodLog.state) {
          window.DailyFoodLog.state.dailyCalorieGoal = tdee;
          if (typeof window.DailyFoodLog.renderDailyLogHUD === 'function') {
              window.DailyFoodLog.renderDailyLogHUD();
          }
      }
    };
    
    // ================================================================
    // Render Functions
    // ================================================================
'''

content = content.replace('    // ================================================================\n    // Render Functions\n    // ================================================================', script_function)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
