const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const regex = /<div class="ai-drawer-body">[\s\S]*?<\/div>\s*<\/div>\s*<script>/;
const newHtml = `<div class="ai-drawer-body" style="padding: 0; overflow: hidden; display: flex; flex-direction: column; height: 450px; max-height: 60vh; background: var(--bg-white);">
      <div id="aiChatMessages" style="flex: 1; overflow-y: auto; padding: 1.25rem 1.5rem; display: flex; flex-direction: column; gap: 1rem; background: rgba(251, 245, 246, 0.4);">
        <div style="background: rgba(232, 198, 200, 0.2); border: 1px solid rgba(232, 198, 200, 0.4); padding: 1rem; border-radius: 16px; border-bottom-left-radius: 4px; align-self: flex-start; max-width: 90%; box-shadow: 0 4px 15px rgba(0,0,0,0.02);">
          <p style="margin: 0; font-size: 0.95rem; color: var(--text-dark-rose); line-height: 1.4;">
            Bonjour ! Je suis l'Assistant Bien-Être d'Inès. Posez-moi vos questions sur les consultations, l'hydratation, l'IMC ou la nutrition ! 👋
          </p>
        </div>
      </div>
      <div style="padding: 1rem 1.5rem; border-top: 1px solid rgba(232, 198, 200, 0.4); display: flex; gap: 0.6rem; background: var(--bg-white);">
        <input type="text" id="aiChatInput" placeholder="Tapez votre message..." style="flex: 1; border: 1px solid rgba(138, 87, 91, 0.2); border-radius: 9999px; padding: 0.75rem 1.2rem; outline: none; font-size: 0.95rem; background: #ffffff; color: var(--text-main); transition: border-color 0.3s;" onkeypress="if(event.key === 'Enter') sendAiChatMessage()" onfocus="this.style.borderColor='var(--accent-rose)'" onblur="this.style.borderColor='rgba(138, 87, 91, 0.2)'" />
        <button id="aiChatSendBtn" onclick="sendAiChatMessage()" style="background: var(--accent-rose); color: white; border: none; border-radius: 50%; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: transform 0.2s, background 0.3s;" onmouseover="this.style.transform='scale(1.05)'; this.style.background='var(--accent-rose-hover)'" onmouseout="this.style.transform='scale(1)'; this.style.background='var(--accent-rose)'">
          <i class="fa-solid fa-paper-plane" style="font-size: 1.1rem; margin-right: 2px; margin-top: 2px;"></i>
        </button>
      </div>
    </div>
  </div>
  <script>
    let aiChatHistory = [];
    async function sendAiChatMessage() {
      const input = document.getElementById('aiChatInput');
      const messagesContainer = document.getElementById('aiChatMessages');
      const text = input.value.trim();
      if (!text) return;
      
      // User message
      input.value = '';
      const userDiv = document.createElement('div');
      userDiv.style = "background: var(--accent-rose); color: white; padding: 0.8rem 1rem; border-radius: 16px; border-bottom-right-radius: 4px; align-self: flex-end; max-width: 90%; box-shadow: 0 4px 15px rgba(138, 87, 91, 0.2);";
      userDiv.innerHTML = \`<p style="margin: 0; font-size: 0.95rem; line-height: 1.4;">\${text}</p>\`;
      messagesContainer.appendChild(userDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
      
      const prevHistory = [...aiChatHistory];
      aiChatHistory.push({ role: 'user', text: text });
      
      // Loading indicator
      const loaderDiv = document.createElement('div');
      loaderDiv.style = "background: rgba(232, 198, 200, 0.2); border: 1px solid rgba(232, 198, 200, 0.4); padding: 0.8rem 1rem; border-radius: 16px; border-bottom-left-radius: 4px; align-self: flex-start; max-width: 90%;";
      loaderDiv.innerHTML = '<div style="display: flex; gap: 0.3rem;"><span style="width: 8px; height: 8px; background: var(--text-muted); border-radius: 50%; animation: pulse 1s infinite alternate;"></span><span style="width: 8px; height: 8px; background: var(--text-muted); border-radius: 50%; animation: pulse 1s infinite alternate 0.2s;"></span><span style="width: 8px; height: 8px; background: var(--text-muted); border-radius: 50%; animation: pulse 1s infinite alternate 0.4s;"></span></div>';
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
          modelDiv.style = "background: rgba(232, 198, 200, 0.2); border: 1px solid rgba(232, 198, 200, 0.4); padding: 1rem; border-radius: 16px; border-bottom-left-radius: 4px; align-self: flex-start; max-width: 90%; box-shadow: 0 4px 15px rgba(0,0,0,0.02);";
          // Basic markdown parsing for bold and line breaks
          let formattedReply = data.reply.replace(/\\n/g, '<br>').replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>');
          modelDiv.innerHTML = \`<p style="margin: 0; font-size: 0.95rem; color: var(--text-dark-rose); line-height: 1.4;">\${formattedReply}</p>\`;
          messagesContainer.appendChild(modelDiv);
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
        } else {
           throw new Error("No reply");
        }
      } catch (e) {
        messagesContainer.removeChild(loaderDiv);
        const errorDiv = document.createElement('div');
        errorDiv.style = "background: #fdecea; color: #e74c3c; border: 1px solid #f5b7b1; padding: 0.8rem 1rem; border-radius: 16px; align-self: flex-start; max-width: 90%;";
        errorDiv.innerHTML = \`<p style="margin: 0; font-size: 0.9rem;">Une erreur s'est produite. Veuillez réessayer.</p>\`;
        messagesContainer.appendChild(errorDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }
    }`;
html = html.replace(regex, newHtml);
fs.writeFileSync('index.html', html);
