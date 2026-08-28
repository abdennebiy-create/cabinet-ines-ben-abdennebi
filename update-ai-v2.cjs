const fs = require('fs');

function updateAssistant() {
  let content = fs.readFileSync('api/ai-assistant.js', 'utf8');
  const startIndex = content.indexOf('const formattedHistory');
  const endIndex = content.indexOf('return {', startIndex);
  if (startIndex !== -1 && endIndex !== -1) {
    const replacement = `
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
    const result = { text: resultText || interaction.output_text };
    `;
    content = content.substring(0, startIndex) + replacement + content.substring(endIndex);
    fs.writeFileSync('api/ai-assistant.js', content);
  } else {
    console.log("Could not find boundaries for ai-assistant.js");
  }
}

function updateSummarize() {
  let content = fs.readFileSync('api/ai-summarize.js', 'utf8');
  const startIndex = content.indexOf('const result = await ai.models.generateContent');
  const endIndex = content.indexOf('const responseText = result.text;', startIndex);
  if (startIndex !== -1 && endIndex !== -1) {
    const replacement = `
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
    const result = { text: resultText || interaction.output_text };
    `;
    content = content.substring(0, startIndex) + replacement + content.substring(endIndex);
    fs.writeFileSync('api/ai-summarize.js', content);
  } else {
    console.log("Could not find boundaries for ai-summarize.js");
  }
}

function updateDiagnostic() {
  let content = fs.readFileSync('api/ai-diagnostic-engine.js', 'utf8');
  const startIndex = content.indexOf('const result = await ai.models.generateContent');
  const endIndex = content.indexOf('const responseText = result.text;', startIndex);
  if (startIndex !== -1 && endIndex !== -1) {
    const replacement = `
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
    const result = { text: resultText || interaction.output_text };
    `;
    content = content.substring(0, startIndex) + replacement + content.substring(endIndex);
    fs.writeFileSync('api/ai-diagnostic-engine.js', content);
  } else {
    console.log("Could not find boundaries for ai-diagnostic-engine.js");
  }
}

updateAssistant();
updateSummarize();
updateDiagnostic();
