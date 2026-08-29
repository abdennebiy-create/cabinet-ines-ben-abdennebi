import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_html = r'''                 <div style="background: white; border: 1px solid rgba(232, 198, 200, 0.5); border-radius: 12px; padding: 0.6rem; display: flex; justify-content: space-between; align-items: center;">
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
                 </div>'''

new_html = r'''                 <div style="background: white; border: 1px solid rgba(232, 198, 200, 0.5); border-radius: 12px; padding: 0.6rem;">
                   <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
                     <span style="font-size: 0.75rem; font-weight: 700; color: #c0392b;">Protéines (25%)</span>
                     <span style="font-size: 0.85rem; font-weight: 800; color: var(--text-dark-rose);"><span id="mgc_prot">0</span>g</span>
                   </div>
                   <div style="width: 100%; height: 6px; background: rgba(192, 57, 43, 0.15); border-radius: 4px; overflow: hidden;">
                     <div style="width: 25%; height: 100%; background: #c0392b; border-radius: 4px;"></div>
                   </div>
                 </div>
                 <div style="background: white; border: 1px solid rgba(232, 198, 200, 0.5); border-radius: 12px; padding: 0.6rem;">
                   <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
                     <span style="font-size: 0.75rem; font-weight: 700; color: #d35400;">Glucides (45%)</span>
                     <span style="font-size: 0.85rem; font-weight: 800; color: var(--text-dark-rose);"><span id="mgc_carb">0</span>g</span>
                   </div>
                   <div style="width: 100%; height: 6px; background: rgba(211, 84, 0, 0.15); border-radius: 4px; overflow: hidden;">
                     <div style="width: 45%; height: 100%; background: #d35400; border-radius: 4px;"></div>
                   </div>
                 </div>
                 <div style="background: white; border: 1px solid rgba(232, 198, 200, 0.5); border-radius: 12px; padding: 0.6rem;">
                   <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
                     <span style="font-size: 0.75rem; font-weight: 700; color: #27ae60;">Lipides (30%)</span>
                     <span style="font-size: 0.85rem; font-weight: 800; color: var(--text-dark-rose);"><span id="mgc_fat">0</span>g</span>
                   </div>
                   <div style="width: 100%; height: 6px; background: rgba(39, 174, 96, 0.15); border-radius: 4px; overflow: hidden;">
                     <div style="width: 30%; height: 100%; background: #27ae60; border-radius: 4px;"></div>
                   </div>
                 </div>'''

content = content.replace(old_html, new_html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
