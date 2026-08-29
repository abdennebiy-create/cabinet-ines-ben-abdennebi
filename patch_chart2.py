import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_js = r'''      const updateNutrientVisuals = (val, max, valId, barId, defaultColor) => {
        const valEl = el(valId);
        const barEl = el(barId);
        
        if (valEl) {
           valEl.textContent = val;
           valEl.style.color = val > max ? '#e74c3c' : '';
        }
        
        if (barEl) {
           const rawPct = calcRawPct(val, max);
           const pct = Math.min(100, rawPct);
           
           // Apply a small delay so the CSS transition smoothly animates from 0% on initial load
           setTimeout(() => {
               barEl.style.width = `${pct}%`;
               barEl.style.backgroundColor = rawPct > 100 ? '#e74c3c' : defaultColor;
           }, 50);
        }
      };

      updateNutrientVisuals(totals.calories, goals.kcal, 'mgc_kcal_consumed', null, null);
      updateNutrientVisuals(totals.proteins, goals.prot, 'mgc_prot_consumed', 'mgc_prot_bar', '#c0392b');
      updateNutrientVisuals(totals.carbs, goals.carb, 'mgc_carb_consumed', 'mgc_carb_bar', '#d35400');
      updateNutrientVisuals(totals.fats, goals.fat, 'mgc_fat_consumed', 'mgc_fat_bar', '#27ae60');'''

new_js = r'''      const updateNutrientVisuals = (val, max, valId, targetId, barId, defaultColor) => {
        const valEl = el(valId);
        const targetEl = el(targetId);
        const barEl = el(barId);
        
        if (valEl) {
           valEl.textContent = val;
           valEl.style.color = val > max ? '#e74c3c' : '';
        }
        
        if (targetEl) {
           targetEl.textContent = max;
        }
        
        if (barEl) {
           const rawPct = calcRawPct(val, max);
           const pct = Math.min(100, rawPct);
           
           // Apply a small delay so the CSS transition smoothly animates from 0% on initial load
           setTimeout(() => {
               barEl.style.width = `${pct}%`;
               barEl.style.backgroundColor = rawPct > 100 ? '#e74c3c' : defaultColor;
           }, 50);
        }
      };

      updateNutrientVisuals(totals.calories, goals.kcal, 'mgc_kcal_consumed', 'mgc_kcal', null, null);
      updateNutrientVisuals(totals.proteins, goals.prot, 'mgc_prot_consumed', 'mgc_prot', 'mgc_prot_bar', '#c0392b');
      updateNutrientVisuals(totals.carbs, goals.carb, 'mgc_carb_consumed', 'mgc_carb', 'mgc_carb_bar', '#d35400');
      updateNutrientVisuals(totals.fats, goals.fat, 'mgc_fat_consumed', 'mgc_fat', 'mgc_fat_bar', '#27ae60');'''

content = content.replace(old_js, new_js)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
