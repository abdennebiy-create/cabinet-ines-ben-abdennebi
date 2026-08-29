import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_js = r'''    window.updateMetabolicChart = (totals, goals) => {
      const container = document.getElementById('metabolicChartRoot');
      if (container) {
        container.style.display = 'block';
        if (!container._reactRoot) {
            container._reactRoot = ReactDOM.createRoot(container);
        }
        container._reactRoot.render(<MetabolicProgressChart totals={totals} goals={goals} />);
      }
    };'''

new_js = r'''    window.updateMetabolicChart = (totals, goals) => {
      const container = document.getElementById('metabolicChartRoot');
      if (container) {
        container.style.display = 'block';
        if (!container._reactRoot) {
            container._reactRoot = ReactDOM.createRoot(container);
        }
        container._reactRoot.render(<MetabolicProgressChart totals={totals} goals={goals} />);
      }
      
      // Mettre à jour les valeurs consommées et les barres de progression
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
      }
    };'''

content = content.replace(old_js, new_js)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
