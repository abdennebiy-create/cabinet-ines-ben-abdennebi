import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Update the HTML inline styles for transitions
content = content.replace(
    '<div id="mgc_prot_bar" style="width: 0%; height: 100%; background: #c0392b; border-radius: 4px; transition: width 0.4s ease;"></div>',
    '<div id="mgc_prot_bar" style="width: 0%; height: 100%; background: #c0392b; border-radius: 4px; transition: all 1s cubic-bezier(0.25, 1, 0.5, 1);"></div>'
)

content = content.replace(
    '<div id="mgc_carb_bar" style="width: 0%; height: 100%; background: #d35400; border-radius: 4px; transition: width 0.4s ease;"></div>',
    '<div id="mgc_carb_bar" style="width: 0%; height: 100%; background: #d35400; border-radius: 4px; transition: all 1s cubic-bezier(0.25, 1, 0.5, 1);"></div>'
)

content = content.replace(
    '<div id="mgc_fat_bar" style="width: 0%; height: 100%; background: #27ae60; border-radius: 4px; transition: width 0.4s ease;"></div>',
    '<div id="mgc_fat_bar" style="width: 0%; height: 100%; background: #27ae60; border-radius: 4px; transition: all 1s cubic-bezier(0.25, 1, 0.5, 1);"></div>'
)

# Update Javascript function updateNutrientVisuals
old_js = r'''        if (barEl) {
           const rawPct = calcRawPct(val, max);
           const pct = Math.min(100, rawPct);
           barEl.style.width = `${pct}%`;
           barEl.style.backgroundColor = rawPct > 100 ? '#e74c3c' : defaultColor;
        }'''

new_js = r'''        if (barEl) {
           const rawPct = calcRawPct(val, max);
           const pct = Math.min(100, rawPct);
           
           // Apply a small delay so the CSS transition smoothly animates from 0% on initial load
           setTimeout(() => {
               barEl.style.width = `${pct}%`;
               barEl.style.backgroundColor = rawPct > 100 ? '#e74c3c' : defaultColor;
           }, 50);
        }'''

content = content.replace(old_js, new_js)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
