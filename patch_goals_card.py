import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_html = r'''                <div style="font-size: 1.8rem; font-weight: 800; color: var(--text-dark-rose); line-height: 1;"><span id="mgc_kcal">2000</span></div>
                <div style="font-size: 0.75rem; color: #7a5c64; font-weight: 600; margin-top: 0.3rem;">kcal / jour</div>
              </div>
              <div style="display: flex; flex-direction: column; justify-content: space-between; gap: 0.4rem;">
                 <div style="background: white; border: 1px solid rgba(232, 198, 200, 0.5); border-radius: 12px; padding: 0.6rem;">
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

new_html = r'''                <div style="font-size: 1.8rem; font-weight: 800; color: var(--text-dark-rose); line-height: 1;">
                  <span id="mgc_kcal_consumed">0</span> <span style="font-size: 1rem; color: #7a5c64; font-weight: 600;">/ <span id="mgc_kcal">2000</span></span>
                </div>
                <div style="font-size: 0.75rem; color: #7a5c64; font-weight: 600; margin-top: 0.3rem;">kcal</div>
              </div>
              <div style="display: flex; flex-direction: column; justify-content: space-between; gap: 0.4rem;">
                 <div style="background: white; border: 1px solid rgba(232, 198, 200, 0.5); border-radius: 12px; padding: 0.6rem;">
                   <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
                     <span style="font-size: 0.75rem; font-weight: 700; color: #c0392b;">Protéines</span>
                     <span style="font-size: 0.75rem; font-weight: 800; color: var(--text-dark-rose);"><span id="mgc_prot_consumed">0</span> / <span id="mgc_prot">0</span>g</span>
                   </div>
                   <div style="width: 100%; height: 6px; background: rgba(192, 57, 43, 0.15); border-radius: 4px; overflow: hidden;">
                     <div id="mgc_prot_bar" style="width: 0%; height: 100%; background: #c0392b; border-radius: 4px; transition: width 0.4s ease;"></div>
                   </div>
                 </div>
                 <div style="background: white; border: 1px solid rgba(232, 198, 200, 0.5); border-radius: 12px; padding: 0.6rem;">
                   <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
                     <span style="font-size: 0.75rem; font-weight: 700; color: #d35400;">Glucides</span>
                     <span style="font-size: 0.75rem; font-weight: 800; color: var(--text-dark-rose);"><span id="mgc_carb_consumed">0</span> / <span id="mgc_carb">0</span>g</span>
                   </div>
                   <div style="width: 100%; height: 6px; background: rgba(211, 84, 0, 0.15); border-radius: 4px; overflow: hidden;">
                     <div id="mgc_carb_bar" style="width: 0%; height: 100%; background: #d35400; border-radius: 4px; transition: width 0.4s ease;"></div>
                   </div>
                 </div>
                 <div style="background: white; border: 1px solid rgba(232, 198, 200, 0.5); border-radius: 12px; padding: 0.6rem;">
                   <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
                     <span style="font-size: 0.75rem; font-weight: 700; color: #27ae60;">Lipides</span>
                     <span style="font-size: 0.75rem; font-weight: 800; color: var(--text-dark-rose);"><span id="mgc_fat_consumed">0</span> / <span id="mgc_fat">0</span>g</span>
                   </div>
                   <div style="width: 100%; height: 6px; background: rgba(39, 174, 96, 0.15); border-radius: 4px; overflow: hidden;">
                     <div id="mgc_fat_bar" style="width: 0%; height: 100%; background: #27ae60; border-radius: 4px; transition: width 0.4s ease;"></div>
                   </div>
                 </div>'''

content = content.replace(old_html, new_html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
