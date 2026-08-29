import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_code = r'''      // Mettre à jour les valeurs consommées et les barres de progression
      const safePercent = (val, max) => max > 0 ? Math.min(100, Math.round((val / max) * 100)) : 0;
      
      const el = (id) => document.getElementById(id);
      
      if (el('mgc_kcal_consumed')) el('mgc_kcal_consumed').textContent = totals.calories;
      if (el('mgc_prot_consumed')) el('mgc_prot_consumed').textContent = totals.proteins;
      if (el('mgc_carb_consumed')) el('mgc_carb_consumed').textContent = totals.carbs;
      if (el('mgc_fat_consumed')) el('mgc_fat_consumed').textContent = totals.fats;
      
      if (el('mgc_prot_bar')) {
         const pct = safePercent(totals.proteins, goals.prot);
         el('mgc_prot_bar').style.width = `${pct}%`;
         el('mgc_prot_bar').style.backgroundColor = pct > 100 ? '#e74c3c' : '#c0392b';
      }
      if (el('mgc_carb_bar')) {
         const pct = safePercent(totals.carbs, goals.carb);
         el('mgc_carb_bar').style.width = `${pct}%`;
         el('mgc_carb_bar').style.backgroundColor = pct > 100 ? '#e74c3c' : '#d35400';
      }
      if (el('mgc_fat_bar')) {
         const pct = safePercent(totals.fats, goals.fat);
         el('mgc_fat_bar').style.width = `${pct}%`;
         el('mgc_fat_bar').style.backgroundColor = pct > 100 ? '#e74c3c' : '#27ae60';
      }'''

new_code = r'''      // Mettre à jour les valeurs consommées et les barres de progression
      const calcRawPct = (val, max) => max > 0 ? Math.round((val / max) * 100) : 0;
      
      const el = (id) => document.getElementById(id);
      
      const updateNutrientVisuals = (val, max, valId, barId, defaultColor) => {
        const valEl = el(valId);
        const barEl = el(barId);
        
        if (valEl) {
           valEl.textContent = val;
           valEl.style.color = val > max ? '#e74c3c' : '';
        }
        
        if (barEl) {
           const rawPct = calcRawPct(val, max);
           const pct = Math.min(100, rawPct);
           barEl.style.width = `${pct}%`;
           barEl.style.backgroundColor = rawPct > 100 ? '#e74c3c' : defaultColor;
        }
      };

      updateNutrientVisuals(totals.calories, goals.kcal, 'mgc_kcal_consumed', null, null);
      updateNutrientVisuals(totals.proteins, goals.prot, 'mgc_prot_consumed', 'mgc_prot_bar', '#c0392b');
      updateNutrientVisuals(totals.carbs, goals.carb, 'mgc_carb_consumed', 'mgc_carb_bar', '#d35400');
      updateNutrientVisuals(totals.fats, goals.fat, 'mgc_fat_consumed', 'mgc_fat_bar', '#27ae60');'''

content = content.replace(old_code, new_code)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
