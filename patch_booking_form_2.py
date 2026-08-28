import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Add to the form
old_form_start = r'''        <div class="form-group">
          <label for="bookingName" data-i18n="lbl_name">Nom & Prénom</label>'''

new_form_start = r'''        <div class="form-group">
          <label for="bookingAge" data-i18n="lbl_age" style="font-weight: 600; color: var(--text-dark-rose);">Profil du patient</label>
          <select class="form-control" name="tranche_age" id="bookingAge" onchange="toggleInfantPathologies(this.value)">
            <option value="Adulte">Adulte (18 - 64 ans)</option>
            <option value="Enfant">Enfant / Adolescent (Moins de 18 ans)</option>
            <option value="Senior">Senior (65+ ans)</option>
          </select>
        </div>
        
        <div class="form-group hidden" id="infantPathologiesBlock" style="display: none; padding: 1rem; background: rgba(255,230,235,0.5); border-radius: 0.85rem;">
          <label style="font-weight: 600; color: var(--text-dark-rose); margin-bottom: 0.5rem; display: block;" data-i18n="lbl_infant_patho"><i class="fa-solid fa-child-reaching" style="color: var(--accent-mauve);"></i> Pathologies Infantiles</label>
          <div style="display: flex; flex-direction: column; gap: 0.5rem;">
            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer; color: var(--text-dark-rose); font-size: 0.9rem;">
              <input type="checkbox" name="pathologies_infantiles" value="Diabète" style="accent-color: var(--accent-mauve);"> Diabète Infantile
            </label>
            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer; color: var(--text-dark-rose); font-size: 0.9rem;">
              <input type="checkbox" name="pathologies_infantiles" value="Cœliaque" style="accent-color: var(--accent-mauve);"> Maladie Cœliaque
            </label>
          </div>
        </div>

        <div class="form-group">
          <label for="bookingName" data-i18n="lbl_name">Nom & Prénom</label>'''

if old_form_start in content:
    content = content.replace(old_form_start, new_form_start)
else:
    print("Could not find form start!")

js_inject = r'''    function toggleInfantPathologies(val) {
      const block = document.getElementById('infantPathologiesBlock');
      if (block) {
        block.style.display = (val === 'Enfant') ? 'block' : 'none';
      }
    }
'''
content = content.replace("    function openProgramDetails", js_inject + "\n    function openProgramDetails")

# Fallback message
old_msg_build = r'''      let fallbackMsg = `Bonjour Cabinet de Nutrition Inès Ben Abdennebi, je souhaite prendre rendez-vous :\n- Nom : ${nomVal}\n- Tél : ${telVal}\n- Date : ${dateVal}\n- Créneau : ${creneauVal}\n- Motif : ${serviceVal}`;'''
new_msg_build = r'''      const ageVal = form.elements['tranche_age'] ? form.elements['tranche_age'].value : 'Adulte';
      let infantPathos = [];
      const checkboxes = form.querySelectorAll('input[name="pathologies_infantiles"]:checked');
      checkboxes.forEach(cb => infantPathos.push(cb.value));
      
      let fallbackMsg = `Nouvelle demande de rendez-vous :\n- Profil : ${ageVal}\n- Nom : ${nomVal}\n- Tél : ${telVal}\n- Date : ${dateVal}\n- Créneau : ${creneauVal}\n- Motif : ${serviceVal}`;
      if (ageVal === 'Enfant' && infantPathos.length > 0) {
        fallbackMsg += `\n- Pathologies infantiles : ${infantPathos.join(', ')}`;
      }'''

if old_msg_build in content:
    content = content.replace(old_msg_build, new_msg_build)
else:
    print("Could not find fallbackMsg building!")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
