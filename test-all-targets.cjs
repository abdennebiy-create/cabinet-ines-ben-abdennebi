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
  querySelector: () => ({ classList: { add: () => {}, remove: () => {} }, innerHTML: '' })
};
global.currentLang = 'fr';
const AIEngine = eval('(' + engineCode + ')');
AIEngine.updateHUD = () => {};

let testOutput = [];

['moi', 'enfant', 'parent'].forEach(target => {
  AIEngine.state = {
     turn: 3,
     history: [],
     target: target,
     lang: 'fr',
     selectedConditions: [],
     deepDiveQueue: [],
     profileAnswer: 'dummy'
  };
  
  let htmlOut = "";
  global.document.getElementById = (id) => {
      return {
         className: '',
         set innerHTML(val) { htmlOut = val; }
      };
  };
  
  try {
     AIEngine.renderConditionsTurn();
     const count = (htmlOut.match(/class="ai-condition-chip"/g) || []).length;
     testOutput.push(`Target: ${target} -> ${count} chips rendered.`);
  } catch (e) {
     testOutput.push(`Target: ${target} -> ERROR: ${e.message}`);
  }
});

console.log(testOutput.join('\n'));
