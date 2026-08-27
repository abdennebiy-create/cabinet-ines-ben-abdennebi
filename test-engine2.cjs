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
global.AIEngine = eval('(' + engineCode + ')');
AIEngine.updateHUD = () => {};

const cardElMock = { 
  classList: { add: () => {}, remove: () => {} },
  querySelector: () => ({ innerHTML: '' }),
  dataset: { target: 'enfant' }
};

console.log("Starting turn 1");
AIEngine.state.turn = 1;
AIEngine.handleOptionClick('🧒 Pour mon enfant / adolescent', cardElMock, 'enfant');

console.log("State target is now:", AIEngine.state.target);
console.log("getTarget returns:", AIEngine.getTarget());

console.log("Starting turn 2");
AIEngine.state.turn = 2;
AIEngine.handleOptionClick('👦 Garçon, 0-6 ans', cardElMock, null);

console.log("State profileAnswer:", AIEngine.state.profileAnswer);
console.log("getTarget returns:", AIEngine.getTarget());

AIEngine.state.turn = 3;
console.log("Rendering conditions turn...");
let htmlOut = "";
global.document.getElementById = (id) => {
    return {
       className: '',
       set innerHTML(val) { htmlOut = val; }
    };
};
AIEngine.renderConditionsTurn();
console.log("Did it render conditions?", htmlOut.length > 0);
console.log("How many condition chips?", (htmlOut.match(/class="ai-condition-chip"/g) || []).length);

