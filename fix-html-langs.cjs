const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 3587: const opts = (QD.targets[lang] || QD.targets.fr).options;
html = html.replace(/const opts = \(QD\.targets\[lang\] \|\| QD\.targets\.fr\)\.options;/, `const opts = QD.targets[\`options_\${lang}\`] || QD.targets.options_fr;`);

// 3910: const tData = (QD && QD.targets) ? (QD.targets[lang] || QD.targets.fr) : null;
// Actually I'll replace how tData properties are accessed.
// const insight = tData ? tData.insight : ...
html = html.replace(/const tData = \(QD && QD\.targets\) \? \(QD\.targets\[lang\] \|\| QD\.targets\.fr\) : null;/g, `const tData = (QD && QD.targets) ? QD.targets : null;`);
html = html.replace(/const insight = tData \? tData\.insight :/g, `const insight = tData ? (tData[\`insight_\${lang}\`] || tData.insight_fr) :`);
html = html.replace(/const q = tData \? tData\.question :/g, `const q = tData ? (tData[\`question_\${lang}\`] || tData.question_fr) :`);
html = html.replace(/const allOpts = tData \? tData\.options :/g, `const allOpts = tData ? (tData[\`options_\${lang}\`] || tData.options_fr) :`);

// 3948: const data = QD && QD.profiles && QD.profiles[profileKey] ? (QD.profiles[profileKey][lang] || QD.profiles[profileKey].fr) : null;
html = html.replace(/const data = QD && QD\.profiles && QD\.profiles\[profileKey\]\s*\?\s*\(QD\.profiles\[profileKey\]\[lang\] \|\| QD\.profiles\[profileKey\]\.fr\)\s*: null;/g, `const pData = QD && QD.profiles && QD.profiles[profileKey] ? QD.profiles[profileKey] : null;
        const data = pData ? { empathy: pData[\`empathy_\${lang}\`] || pData.empathy_fr, question: pData[\`question_\${lang}\`] || pData.question_fr, options: pData[\`options_\${lang}\`] || pData.options_fr } : null;`);

// 3981: const labels = (QD && QD.multiSelectLabels) ? (QD.multiSelectLabels[lang] || QD.multiSelectLabels.fr) : ...
html = html.replace(/const labels = \(QD && QD\.multiSelectLabels\) \? \(QD\.multiSelectLabels\[lang\] \|\| QD\.multiSelectLabels\.fr\) : \{ validate: 'Valider', hint: 'Sélectionnez tout ce qui s\\'applique', selected: 'sélectionné\(s\)' \};/g, `const mL = QD && QD.multiSelectLabels ? QD.multiSelectLabels : null;
        const labels = mL ? { validate: mL[\`validate_\${lang}\`] || mL.validate_fr, hint: mL[\`hint_\${lang}\`] || mL.hint_fr, selected: mL[\`selected_\${lang}\`] || mL.selected_fr } : { validate: 'Valider', hint: 'Sélectionnez tout ce qui s\\'applique', selected: 'sélectionné(s)' };`);

// 3780
html = html.replace(/const labels = \(window\.QUIZ_DATA && window\.QUIZ_DATA\.multiSelectLabels\) \? \(window\.QUIZ_DATA\.multiSelectLabels\[lang\] \|\| window\.QUIZ_DATA\.multiSelectLabels\.fr\) : \{ selected: 'sélectionné\(s\)' \};/g, `const mL = window.QUIZ_DATA && window.QUIZ_DATA.multiSelectLabels ? window.QUIZ_DATA.multiSelectLabels : null;
        const labels = mL ? { selected: mL[\`selected_\${lang}\`] || mL.selected_fr } : { selected: 'sélectionné(s)' };`);

// 3810, 3978
html = html.replace(/const condData = QD && QD\[condKey\] \? \(QD\[condKey\]\[lang\] \|\| QD\[condKey\]\.fr\) : null;/g, `const cD = QD && QD[condKey] ? QD[condKey] : null;
        const condData = cD ? { empathy: cD[\`empathy_\${lang}\`] || cD.empathy_fr, question: cD[\`question_\${lang}\`] || cD.question_fr, options: cD[\`options_\${lang}\`] || cD.options_fr } : null;`);

// 4050
html = html.replace(/const data = QD && QD\[dataKey\] \? \(QD\[dataKey\]\[lang\] \|\| QD\[dataKey\]\.fr\) : null;/g, `const dK = QD && QD[dataKey] ? QD[dataKey] : null;
        const data = dK ? { empathy: dK[\`empathy_\${lang}\`] || dK.empathy_fr, question: dK[\`question_\${lang}\`] || dK.question_fr, options: dK[\`options_\${lang}\`] || dK.options_fr } : null;`);

// 4164
html = html.replace(/const deepDiveData = QD && QD\.deepDive && QD\.deepDive\[fallbackKey\]\s*\?\s*\(QD\.deepDive\[fallbackKey\]\[lang\] \|\| QD\.deepDive\[fallbackKey\]\.fr\)\s*: null;/g, `const ddK = QD && QD.deepDive && QD.deepDive[fallbackKey] ? QD.deepDive[fallbackKey] : null;
            const deepDiveData = ddK ? { empathy: ddK[\`empathy_\${lang}\`] || ddK.empathy_fr, question: ddK[\`question_\${lang}\`] || ddK.question_fr, options: ddK[\`options_\${lang}\`] || ddK.options_fr } : null;`);

// 4179
html = html.replace(/const fallback = QD && QD\.deepDive && QD\.deepDive\[fallbackKeyBase\]\s*\?\s*\(QD\.deepDive\[fallbackKeyBase\]\[lang\] \|\| QD\.deepDive\[fallbackKeyBase\]\.fr\) : null;/g, `const fbK = QD && QD.deepDive && QD.deepDive[fallbackKeyBase] ? QD.deepDive[fallbackKeyBase] : null;
              const fallback = fbK ? { empathy: fbK[\`empathy_\${lang}\`] || fbK.empathy_fr, question: fbK[\`question_\${lang}\`] || fbK.question_fr, options: fbK[\`options_\${lang}\`] || fbK.options_fr } : null;`);

// 4213
html = html.replace(/const dossierData = QD && QD\.dossier && QD\.dossier\[dossierTrack\]\s*\?\s*\(QD\.dossier\[dossierTrack\]\[lang\] \|\| QD\.dossier\[dossierTrack\]\.fr\)\s*: null;/g, `const dosK = QD && QD.dossier && QD.dossier[dossierTrack] ? QD.dossier[dossierTrack] : null;
        const dossierData = dosK ? { headline: dosK[\`headline_\${lang}\`] || dosK.headline_fr, realities: dosK[\`realities_\${lang}\`] || dosK.realities_fr, timeline: dosK[\`timeline_\${lang}\`] || dosK.timeline_fr } : null;`);

fs.writeFileSync('index.html', html);
