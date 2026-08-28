const fs = require('fs');

function updateAssistant() {
  let content = fs.readFileSync('api/ai-assistant.js', 'utf8');
  content = content.replace(/const formattedHistory = history\.map.*?\]\s*\}\);\s*const result = await ai\.models\.generateContent\(\{[\s\S]*?\}\);/g, `
    let combinedInput = "";
    if (history && history.length > 0) {
      combinedInput += "Historique de la conversation :\\n";
      history.forEach(msg => {
        combinedInput += \`\${msg.role === 'user' ? 'Patient' : 'Assistant'}: \${msg.text}\\n\\n\`;
      });
      combinedInput += \`Patient: \${message}\\nAssistant:\`;
    } else {
      combinedInput = message;
    }

    const interaction = await ai.interactions.create({
      model: "gemini-3.6-flash",
      system_instruction: promptAssistant,
      input: combinedInput
    });
    
    let resultText = "";
    if (interaction.steps) {
      for (const step of interaction.steps) {
        if (step.type === 'model_output') {
          const textContent = step.content?.find(c => c.type === 'text');
          if (textContent && textContent.text) {
            resultText += textContent.text;
          }
        }
      }
    }
    const result = { text: resultText };
`);
  fs.writeFileSync('api/ai-assistant.js', content);
}

function updateSummarize() {
  let content = fs.readFileSync('api/ai-summarize.js', 'utf8');
  content = content.replace(/const result = await ai\.models\.generateContent\(\{[\s\S]*?\}\);/, `
    const interaction = await ai.interactions.create({
      model: "gemini-3.6-flash",
      input: prompt,
    });
    let resultText = "";
    if (interaction.steps) {
      for (const step of interaction.steps) {
        if (step.type === 'model_output') {
          const textContent = step.content?.find(c => c.type === 'text');
          if (textContent && textContent.text) {
            resultText += textContent.text;
          }
        }
      }
    }
    const result = { text: resultText };
`);
  fs.writeFileSync('api/ai-summarize.js', content);
}

function updateDiagnostic() {
  let content = fs.readFileSync('api/ai-diagnostic-engine.js', 'utf8');
  content = content.replace(/const result = await ai\.models\.generateContent\(\{[\s\S]*?\}\);/, `
    const interaction = await ai.interactions.create({
      model: "gemini-3.6-flash",
      input: prompt,
    });
    let resultText = "";
    if (interaction.steps) {
      for (const step of interaction.steps) {
        if (step.type === 'model_output') {
          const textContent = step.content?.find(c => c.type === 'text');
          if (textContent && textContent.text) {
            resultText += textContent.text;
          }
        }
      }
    }
    const result = { text: resultText };
`);
  fs.writeFileSync('api/ai-diagnostic-engine.js', content);
}

updateAssistant();
updateSummarize();
updateDiagnostic();
