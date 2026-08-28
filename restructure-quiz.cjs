const fs = require('fs');

global.window = {};
eval(fs.readFileSync('quiz-data.js', 'utf8'));
const QD = window.QUIZ_DATA;

function flattenLangs(obj) {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return obj;
  
  // Check if this object has language keys
  const langs = ['fr', 'ar', 'en', 'es'];
  const keys = Object.keys(obj);
  // It's a language node if it has EXACTLY some combination of these languages as keys and nothing else (except maybe some random stuff, but usually just langs)
  // Let's be precise: if it contains 'fr', 'ar', 'en', 'es' and their values are objects (with question, empathy etc.)
  const hasLangs = keys.includes('fr') && keys.includes('ar') && typeof obj['fr'] === 'object' && !Array.isArray(obj['fr']);
  
  if (hasLangs) {
    const flattened = {};
    for (const lang of langs) {
      if (obj[lang]) {
        for (const [key, value] of Object.entries(obj[lang])) {
          flattened[`${key}_${lang}`] = value;
        }
      }
    }
    // Also keep any non-language keys
    for (const key of keys) {
      if (!langs.includes(key)) {
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
