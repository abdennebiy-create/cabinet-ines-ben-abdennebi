const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Remove old CSS classes if they exist, or just insert new ones
const newCSS = `
/* Bouton flottant */
.chat-toggle-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #4A7C59; /* Vert sauge premium */
    color: white;
    border: none;
    padding: 15px 25px;
    border-radius: 30px;
    font-size: 16px;
    font-weight: bold;
    box-shadow: 0 4px 15px rgba(74, 124, 89, 0.3);
    cursor: pointer;
    transition: transform 0.3s;
    z-index: 1000;
}
.chat-toggle-btn:hover { transform: scale(1.05); }

/* Fenêtre de chat */
.chat-window {
    position: fixed;
    bottom: 80px;
    right: 20px;
    width: 360px;
    max-height: 600px;
    background: #FFFFFF;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    z-index: 1000;
    transition: opacity 0.3s ease;
}
.chat-window.hidden { display: none; opacity: 0; }

/* En-tête */
.chat-header {
    background: #4A7C59;
    color: white;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.chat-profile { display: flex; align-items: center; gap: 10px; }
.chat-avatar { font-size: 24px; background: rgba(255,255,255,0.2); padding: 8px; border-radius: 50%; }
.chat-titles { display: flex; flex-direction: column; }
.chat-titles strong { font-size: 15px; }
.chat-titles span { font-size: 12px; opacity: 0.8; }
.close-btn { background: none; border: none; color: white; font-size: 18px; cursor: pointer; }

/* Corps des messages */
.chat-body {
    padding: 15px;
    flex-grow: 1;
    height: 300px;
    overflow-y: auto;
    background: #F9F9F9;
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.message {
    max-width: 80%;
    padding: 12px 16px;
    border-radius: 18px;
    font-size: 14px;
    line-height: 1.4;
}
.bot-message {
    background: #FFFFFF;
    color: #333;
    align-self: flex-start;
    border-bottom-left-radius: 4px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}
.user-message {
    background: #4A7C59;
    color: white;
    align-self: flex-end;
    border-bottom-right-radius: 4px;
}

/* Boutons rapides (Scroll horizontal) */
.chat-suggestions-scroll {
    display: flex;
    gap: 8px;
    padding: 10px 15px;
    background: #F9F9F9;
    overflow-x: auto;
    white-space: nowrap;
    border-top: 1px solid #EEE;
    scrollbar-width: none; /* Firefox */
}
.chat-suggestions-scroll::-webkit-scrollbar { display: none; }
.chat-suggestions-scroll button {
    background: #E8EFE9;
    color: #4A7C59;
    border: none;
    padding: 8px 14px;
    border-radius: 20px;
    font-size: 13px;
    cursor: pointer;
    transition: background 0.2s;
}
.chat-suggestions-scroll button:hover { background: #D0E3D3; }

/* Zone de texte */
.chat-footer {
    display: flex;
    padding: 10px 15px;
    background: #FFF;
    border-top: 1px solid #EEE;
}
#chat-input {
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 10px;
    font-size: 14px;
}
.send-btn {
    background: none;
    border: none;
    color: #4A7C59;
    font-size: 20px;
    cursor: pointer;
}

/* Mode Sombre (Smartphone) */
@media (prefers-color-scheme: dark) {
    .chat-window { background: #1E1E1E; }
    .chat-body, .chat-suggestions-scroll { background: #121212; border-color: #333; }
    .bot-message { background: #2A2A2A; color: #EEE; }
    .chat-footer { background: #1E1E1E; border-color: #333; }
    #chat-input { background: #1E1E1E; color: white; }
    .chat-suggestions-scroll button { background: #2A362B; color: #A0C1A3; }
}
`;

html = html.replace('</style>', newCSS + '\n</style>');

// 2. Replace HTML from <button class="ai-floating-trigger"... to <script>
const oldHTMLRegex = /<button class="ai-floating-trigger" id="aiFloatingTrigger"[^>]*>[\s\S]*?<\/div>\s*<\/div>\s*<script>/;
const newHTML = `
  <!-- Bouton flottant pour ouvrir le chat -->
  <button id="chatbot-toggle" class="chat-toggle-btn">💬 Assistant Bien-Être</button>

  <!-- Fenêtre du Chatbot -->
  <div id="chatbot-window" class="chat-window hidden">
      <div class="chat-header">
          <div class="chat-profile">
              <span class="chat-avatar">🍏</span>
              <div class="chat-titles">
                  <strong>Cabinet Inès Ben Abdennebi</strong>
                  <span>Assistant en ligne</span>
              </div>
          </div>
          <button id="close-chat" class="close-btn">✖</button>
      </div>

      <div class="chat-body" id="chat-messages">
          <!-- Message d'accueil -->
          <div class="message bot-message">
              Bonjour ! Je suis l'assistant du cabinet. Je peux calculer votre IMC, vous conseiller une collation sportive ou vous guider vers votre pré-consultation. Que puis-je faire pour vous ?
          </div>
      </div>

      <!-- Le carrousel horizontal des boutons rapides -->
      <div class="chat-suggestions-scroll" id="aiChatSuggestions">
          <button onclick="envoyerMessageChat('Comment calculer mon IMC ?')">📊 Mon IMC</button>
          <button onclick="envoyerMessageChat('Combien d\\'eau dois-je boire pour mon poids ?')">💧 Test hydratation</button>
          <button onclick="envoyerMessageChat('Que manger après le sport ?')">🥊 Collation sportive</button>
          <button onclick="envoyerMessageChat('As-tu une idée de recette saine ?')">🍅 Recette fraîche</button>
          <button onclick="envoyerMessageChat('Comment gérer une fringale de sucre ?')">🍫 Gérer une fringale</button>
          <button onclick="envoyerMessageChat('Quels sont les conseils pour le jeûne ?')">🌙 Jeûne & Horaires</button>
          <button onclick="envoyerMessageChat('Quels sont les tarifs et l\\'adresse ?')">📍 Infos cabinet</button>
      </div>

      <div class="chat-footer">
          <input type="text" id="chat-input" placeholder="Écrivez votre message..." onkeypress="if(event.key === 'Enter') sendAiChatMessage()">
          <button id="send-chat" class="send-btn" onclick="sendAiChatMessage()">➤</button>
      </div>
  </div>
  <script>
    document.getElementById('chatbot-toggle').addEventListener('click', function() {
        document.getElementById('chatbot-window').classList.remove('hidden');
    });
    
    document.getElementById('close-chat').addEventListener('click', function() {
        document.getElementById('chatbot-window').classList.add('hidden');
    });
`;

html = html.replace(oldHTMLRegex, newHTML);

fs.writeFileSync('index.html', html);
console.log("HTML replaced.");
