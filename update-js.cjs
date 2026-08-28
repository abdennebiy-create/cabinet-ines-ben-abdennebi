const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const regexSendAiMessage = /async function sendAiChatMessage\(\) \{[\s\S]*?catch \(e\) \{\s*messagesContainer\.removeChild\(loaderDiv\);\s*const errorDiv = document\.createElement\('div'\);[\s\S]*?messagesContainer\.scrollTop = messagesContainer\.scrollHeight;\s*\}\s*\}/;

const newSendAiMessage = `async function sendAiChatMessage() {
      const input = document.getElementById('chat-input');
      const messagesContainer = document.getElementById('chat-messages');
      const text = input.value.trim();
      if (!text) return;
      
      // User message
      input.value = '';
      const userDiv = document.createElement('div');
      userDiv.className = "message user-message";
      userDiv.innerHTML = text;
      messagesContainer.appendChild(userDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
      
      const prevHistory = [...aiChatHistory];
      aiChatHistory.push({ role: 'user', text: text });
      
      // Loading indicator
      const loaderDiv = document.createElement('div');
      loaderDiv.className = "message bot-message";
      loaderDiv.innerHTML = '<div style="display: flex; gap: 0.3rem;"><span style="width: 8px; height: 8px; background: #ccc; border-radius: 50%; animation: pulse 1s infinite alternate;"></span><span style="width: 8px; height: 8px; background: #ccc; border-radius: 50%; animation: pulse 1s infinite alternate 0.2s;"></span><span style="width: 8px; height: 8px; background: #ccc; border-radius: 50%; animation: pulse 1s infinite alternate 0.4s;"></span></div>';
      messagesContainer.appendChild(loaderDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
      
      try {
        const response = await fetch('/api/ai-chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: text, history: prevHistory })
        });
        
        const data = await response.json();
        if (data.reply) {
          aiChatHistory.push({ role: 'model', text: data.reply });
          messagesContainer.removeChild(loaderDiv);
          
          const modelDiv = document.createElement('div');
          modelDiv.className = "message bot-message";
          let formattedReply = data.reply.replace(/\\n/g, '<br>').replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>');
          modelDiv.innerHTML = formattedReply;
          messagesContainer.appendChild(modelDiv);
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
        } else {
           throw new Error("No reply");
        }
      } catch (e) {
        messagesContainer.removeChild(loaderDiv);
        const errorDiv = document.createElement('div');
        errorDiv.className = "message bot-message";
        errorDiv.style.color = "#e74c3c";
        errorDiv.innerHTML = "Une erreur s'est produite. Veuillez réessayer.";
        messagesContainer.appendChild(errorDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }
    }`;

html = html.replace(regexSendAiMessage, newSendAiMessage);

// Update `envoyerMessageChat` to use the new input ID
html = html.replace(/document\.getElementById\('aiChatInput'\)/g, "document.getElementById('chat-input')");

fs.writeFileSync('index.html', html);
console.log("JS updated.");
