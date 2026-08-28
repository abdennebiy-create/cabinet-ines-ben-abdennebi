const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const jsToRemoveRegex = /function toggleAIDrawer\(\) \{[\s\S]*?\}\s*\}\);\s*function handleChipClick\(type\) \{[\s\S]*?whatsapp\.com.*?\}\s*\}/;
html = html.replace(jsToRemoveRegex, '');

// Auto close the chatbot window when clicking outside
const newGlobalClick = `
    document.addEventListener('click', function(event) {
      const drawer = document.getElementById('chatbot-window');
      const trigger = document.getElementById('chatbot-toggle');
      if (drawer && !drawer.classList.contains('hidden')) {
        if (!drawer.contains(event.target) && (!trigger || !trigger.contains(event.target))) {
          drawer.classList.add('hidden');
        }
      }
    });
`;

html = html.replace("let aiChatHistory = [];", newGlobalClick + "\n    let aiChatHistory = [];");

fs.writeFileSync('index.html', html);
console.log("Clean JS applied.");
