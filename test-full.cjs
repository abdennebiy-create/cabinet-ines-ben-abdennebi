const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
let raw = fs.readFileSync('quiz-data.js', 'utf8').trim();
if (raw.endsWith(';')) raw = raw.slice(0, -1);
const prefix = 'window.QUIZ_DATA =';
const idx = raw.indexOf(prefix);
const dataStr = raw.slice(idx + prefix.length).trim();
const QD = eval('(' + dataStr + ')');

let engineCodeMatch = html.match(/const AIEngine = (\{[\s\S]*?\});\s*window\.AIEngine = AIEngine;/);
let engineCode = engineCodeMatch[1];

global.window = { QUIZ_DATA: QD, innerWidth: 1000 };
global.document = {
  getElementById: (id) => ({ className: '', innerHTML: '', dataset: {}, classList: { add: () => {}, remove: () => {} } }),
  querySelector: () => ({ classList: { add: () => {}, remove: () => {} }, innerHTML: '' }),
  querySelectorAll: () => []
};
global.currentLang = 'fr';
global.AIEngine = eval('(' + engineCode + ')');
global.AIEngine.updateHUD = () => {};

try {
  AIEngine.init();
  console.log("Init OK");
} catch(e) {
  console.log("Init Error:", e);
}

