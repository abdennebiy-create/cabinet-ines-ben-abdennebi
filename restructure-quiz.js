const fs = require('fs');

global.window = {};
eval(fs.readFileSync('quiz-data.js', 'utf8'));
const QD = window.QUIZ_DATA;

function flattenLangs(obj) {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return obj;
  
  // Check if this object has language keys
  const hasLangs = Object.keys(obj).some(k => ['fr', 'ar', 'en', 'es'].includes(k));
  if (hasLangs) {
    const flattened = {};
    for (const lang of ['fr', 'ar', 'en', 'es']) {
      if (obj[lang]) {
        for (const [key, value] of Object.entries(obj[lang])) {
          flattened[`${key}_${lang}`] = value;
        }
      }
    }
    // Also keep any non-language keys
    for (const key of Object.keys(obj)) {
      if (!['fr', 'ar', 'en', 'es'].includes(key)) {
        flattened[key] = flattenLangs(obj[key]);
      }
    }
    return flattened;
  } else {
    const newObj = {};
    for (const [key, value] of Object.entries(obj)) {
      newObj[key] = flattenLangs(value);
    }
    return newObj;
  }
}

const newQD = flattenLangs(QD);

const output = `// quiz-data.js — Clinical Anamnesis Data Engine v3.0
// Cabinet de Nutrition Inès Ben Abdennebi
// Restructured for Multilingual Flat Keys (e.g. question_fr, question_ar)

window.QUIZ_DATA = ${JSON.stringify(newQD, null, 2)};
`;

fs.writeFileSync('quiz-data.js', output);
