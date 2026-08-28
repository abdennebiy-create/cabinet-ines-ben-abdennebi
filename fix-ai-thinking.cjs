const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const lockJs = `
      async handleOptionClick(optionText, cardEl, explicitTarget) {
        if (window.isAiThinking) return;
        window.isAiThinking = true;
        this.state.isLoading = true;
        document.querySelectorAll('.ai-option-card, .ai-back-btn, #aiValidateConditions').forEach(el => el.style.pointerEvents = 'none');
`;

html = html.replace(/async handleOptionClick\(optionText, cardEl, explicitTarget\) \{\s*if \(this\.state\.isLoading\) return;\s*this\.state\.isLoading = true;/, lockJs);

const unlockJs = `
        this.state.isLoading = false;
        window.isAiThinking = false;
        document.querySelectorAll('.ai-option-card, .ai-back-btn, #aiValidateConditions').forEach(el => el.style.pointerEvents = '');
        this.renderTurnByNumber(nextTurn);
`;

html = html.replace(/this\.state\.isLoading = false;\s*this\.renderTurnByNumber\(nextTurn\);/, unlockJs);

// Also apply to validateConditions
const validateJs = `
      async validateConditions() {
        if (this.state.selectedConditions.length === 0 || window.isAiThinking) return;
        window.isAiThinking = true;
        this.state.isLoading = true;
        document.querySelectorAll('.ai-option-card, .ai-back-btn, #aiValidateConditions').forEach(el => el.style.pointerEvents = 'none');
`;
html = html.replace(/async validateConditions\(\) \{\s*if \(this\.state\.selectedConditions\.length === 0 \|\| this\.state\.isLoading\) return;/, validateJs);

const validateUnlockJs = `
        this.state.isLoading = false;
        window.isAiThinking = false;
        document.querySelectorAll('.ai-option-card, .ai-back-btn, #aiValidateConditions').forEach(el => el.style.pointerEvents = '');
        this.renderTurnByNumber(4);
`;
html = html.replace(/this\.state\.isLoading = false;\s*this\.renderTurnByNumber\(4\);/, validateUnlockJs);

fs.writeFileSync('index.html', html);
