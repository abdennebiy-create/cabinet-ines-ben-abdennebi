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
AIEngine.renderTurnByNumber = (t) => {};
AIEngine.renderDeepDiveTurn = () => {};
AIEngine.renderFinalDossier = () => {};

const cardElMock = { 
  classList: { add: () => {}, remove: () => {} },
  querySelector: () => ({ innerHTML: '' })
};

AIEngine.handleOptionClick('🧒 Pour mon enfant / adolescent', cardElMock, 'enfant');

AIEngine.state.isLoading = false;
AIEngine.state.turn = 2;
AIEngine.handleOptionClick('👦 Garçon, 0-6 ans', cardElMock, null);

AIEngine.state.isLoading = false;
AIEngine.state.turn = 3;
AIEngine.state.selectedConditions = ['deficiency_child'];
AIEngine.validateConditions();
console.log('After turn 3, deepDiveQueue:', AIEngine.state.deepDiveQueue);

AIEngine.state.isLoading = false;
AIEngine.state.turn = 4;
AIEngine.handleOptionClick('loss mock text', cardElMock, null);
console.log('After turn 4, deepDiveQueue:', AIEngine.state.deepDiveQueue);

// Mock the deep dive turn structure
AIEngine.renderDeepDiveTurn = function() {
        const QD = window.QUIZ_DATA;
        const lang = 'fr';
        const currentTarget = this.getTarget();

        if (currentTarget === 'enfant') {
          this.state.deepDiveQueue = this.state.deepDiveQueue.filter(k => !k.startsWith('weightLoss_') && !k.startsWith('sarcopenia_') && !k.startsWith('senior_') && !k.startsWith('appetite_') && !k.startsWith('dysphagia_s_') && !k.startsWith('renal_s_') && !k.startsWith('recovery_s_'));
          if (this.state.deepDiveQueue.length === 0) {
            if (this.state.weightGoal === 'child_overweight') {
              this.state.deepDiveQueue.push('weight_child_step1', 'weight_child_step2', 'weight_child_step3');
              this.state.track = 'weight_child';
            } else if (this.state.weightGoal === 'child_growth') {
              this.state.deepDiveQueue.push('growth_step1', 'growth_step2', 'growth_step3');
              this.state.track = 'growth';
            } else {
              this.state.deepDiveQueue.push('pediatric_step1', 'pediatric_step2', 'pediatric_step3');
              this.state.track = 'pediatric';
            }
          }
        }
        
        let deepDiveKey = this.state.deepDiveQueue[0];
        console.log('Render Deep Dive: track:', this.state.track, 'key:', deepDiveKey);
        
        const data = QD && QD.deepDive && QD.deepDive[deepDiveKey]
            ? (QD.deepDive[deepDiveKey][lang] || QD.deepDive[deepDiveKey].fr) : null;
            
        if (!data) console.log("Missing data for key:", deepDiveKey);
};

AIEngine.renderDeepDiveTurn();

