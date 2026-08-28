const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const newCSS = `
/* Bouton flottant */
.chat-toggle-btn {
    position: fixed;
    bottom: 24px;
    right: 24px;
    background-color: var(--bg-white);
    color: var(--text-dark-rose);
    border: 1px solid var(--accent-rose);
    padding: 8px 20px 8px 8px;
    border-radius: 40px;
    font-size: 15px;
    font-weight: 600;
    box-shadow: 0 10px 25px rgba(92, 60, 67, 0.15);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    z-index: 1000;
    display: flex;
    align-items: center;
    gap: 12px;
}
.chat-toggle-btn:hover { 
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(92, 60, 67, 0.2);
    border-color: var(--accent-mauve);
}
.chat-toggle-avatar {
    position: relative;
    width: 36px;
    height: 36px;
    background: var(--bg-rose-soft);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-dark-rose);
    font-size: 16px;
}
.status-dot-online {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    background-color: #2ecc71;
    border: 2px solid var(--bg-white);
    border-radius: 50%;
}

/* Fenêtre de chat */
.chat-window {
    position: fixed;
    bottom: 90px;
    right: 24px;
    width: 380px;
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 120px);
    height: 650px;
    background: var(--bg-white);
    border-radius: 24px;
    box-shadow: 0 20px 50px rgba(92, 60, 67, 0.15);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    z-index: 1000;
    transform-origin: bottom right;
    transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 1px solid var(--accent-blush);
}
.chat-window.hidden { 
    opacity: 0; 
    transform: scale(0.8) translateY(20px); 
    pointer-events: none;
}

/* En-tête */
.chat-header {
    background: var(--bg-white);
    padding: 16px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--bg-rose-soft);
    box-shadow: 0 2px 10px rgba(0,0,0,0.02);
    z-index: 10;
}
.chat-profile { display: flex; align-items: center; gap: 12px; }
.chat-avatar-wrapper {
    position: relative;
    width: 42px;
    height: 42px;
    background: var(--bg-rose-soft);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
}
.chat-titles { display: flex; flex-direction: column; }
.chat-titles strong { font-size: 15px; font-weight: 700; color: var(--text-main); }
.chat-titles span { font-size: 12px; color: #7f8c8d; margin-top: 2px; display: flex; align-items: center;}
.close-btn { 
    background: var(--bg-rose-soft); 
    border: none; 
    color: var(--text-dark-rose); 
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px; 
    cursor: pointer; 
    transition: all 0.2s; 
}
.close-btn:hover { background: var(--accent-rose); color: white; transform: rotate(90deg); }

/* Corps des messages */
.chat-body {
    padding: 20px;
    flex-grow: 1;
    overflow-y: auto;
    background: var(--bg-rose-soft);
    display: flex;
    flex-direction: column;
    gap: 16px;
    scroll-behavior: smooth;
}
.chat-timestamp {
    text-align: center;
    font-size: 11px;
    color: #95a5a6;
    margin-bottom: 8px;
    font-weight: 500;
}
.message {
    max-width: 85%;
    padding: 12px 16px;
    border-radius: 18px;
    font-size: 14px;
    line-height: 1.5;
    position: relative;
    animation: fadeInMessage 0.3s ease forwards;
}
@keyframes fadeInMessage {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
.bot-message {
    background: var(--bg-white);
    color: var(--text-main);
    align-self: flex-start;
    border-bottom-left-radius: 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.user-message {
    background: var(--text-dark-rose);
    color: white;
    align-self: flex-end;
    border-bottom-right-radius: 4px;
    box-shadow: 0 2px 8px rgba(92, 60, 67, 0.2);
}

/* Boutons rapides (Scroll horizontal) */
.chat-suggestions-scroll {
    display: flex;
    gap: 8px;
    padding: 12px 16px;
    background: var(--bg-white);
    overflow-x: auto;
    white-space: nowrap;
    border-top: 1px solid var(--accent-blush);
    scrollbar-width: none;
    box-shadow: 0 -2px 10px rgba(0,0,0,0.02);
    z-index: 10;
}
.chat-suggestions-scroll::-webkit-scrollbar { display: none; }
.chat-suggestions-scroll button {
    background: var(--bg-rose-soft);
    color: var(--text-main);
    border: 1px solid transparent;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    font-family: inherit;
    display: flex;
    align-items: center;
}
.chat-suggestions-scroll button:hover { 
    background: var(--accent-rose); 
    border-color: var(--accent-mauve);
    transform: translateY(-2px);
}

/* Zone de texte */
.chat-footer {
    display: flex;
    padding: 14px 16px;
    background: var(--bg-white);
    align-items: center;
    gap: 12px;
    z-index: 10;
}
#chat-input {
    flex-grow: 1;
    border: 1px solid var(--accent-blush);
    border-radius: 24px;
    outline: none;
    padding: 12px 16px;
    font-size: 14px;
    background: var(--bg-rose-soft);
    color: var(--text-main);
    transition: all 0.3s;
    font-family: inherit;
}
#chat-input:focus {
    border-color: var(--accent-mauve);
    background: var(--bg-white);
    box-shadow: 0 0 0 3px rgba(196, 157, 165, 0.2);
}
.send-btn {
    background: var(--text-dark-rose);
    color: white;
    border: none;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s;
    flex-shrink: 0;
}
.send-btn:hover {
    transform: scale(1.08) rotate(5deg);
    background: var(--accent-mauve);
    box-shadow: 0 4px 12px rgba(92, 60, 67, 0.3);
}

/* Mode Sombre (Smartphone) */
@media (prefers-color-scheme: dark) {
    .chat-toggle-btn { background-color: #1A1A1A; color: var(--accent-rose); border-color: #333; }
    .chat-toggle-avatar { background: #2A2A2A; color: var(--accent-rose); }
    .status-dot-online { border-color: #1A1A1A; }
    
    .chat-window { background: #1A1A1A; border-color: #333; }
    .chat-header { background: #1A1A1A; border-bottom-color: #333; }
    .chat-avatar-wrapper { background: #2A2A2A; }
    .chat-avatar-wrapper i { color: var(--accent-rose) !important; }
    .chat-titles strong { color: #FFF; }
    .close-btn { background: #2A2A2A; color: #FFF; }
    
    .chat-body { background: #121212; }
    .bot-message { background: #2A2A2A; color: #EEE; border: 1px solid #333; }
    .user-message { background: var(--accent-mauve); color: #FFF; }
    
    .chat-suggestions-scroll { background: #1A1A1A; border-top-color: #333; }
    .chat-suggestions-scroll button { background: #2A2A2A; color: #EEE; border-color:#333; }
    .chat-suggestions-scroll button:hover { background: #333; }
    
    .chat-footer { background: #1A1A1A; border-top-color: transparent; }
    #chat-input { background: #2A2A2A; color: white; border-color: #444; }
    #chat-input:focus { border-color: var(--accent-mauve); background: #1A1A1A; box-shadow: none;}
}
`;

const cssRegex = /\/\* Bouton flottant \*\/[\s\S]*?\}\s*<\/style>/;
html = html.replace(cssRegex, newCSS.trim() + '\n</style>');

const newHTML = `  <!-- Bouton flottant pour ouvrir le chat -->
  <button id="chatbot-toggle" class="chat-toggle-btn" aria-label="Ouvrir l'assistant">
      <div class="chat-toggle-avatar">
          <i class="fa-solid fa-leaf"></i>
          <span class="status-dot-online"></span>
      </div>
      <span class="chat-toggle-text">Assistant IA</span>
  </button>

  <!-- Fenêtre du Chatbot -->
  <div id="chatbot-window" class="chat-window hidden">
      <div class="chat-header">
          <div class="chat-profile">
              <div class="chat-avatar-wrapper">
                  <i class="fa-solid fa-leaf" style="color: var(--text-dark-rose);"></i>
                  <span class="status-dot-online"></span>
              </div>
              <div class="chat-titles">
                  <strong>Assistant d'Inès</strong>
                  <span><i class="fa-solid fa-bolt" style="color:#f1c40f; font-size:10px; margin-right:3px;"></i>Répond instantanément</span>
              </div>
          </div>
          <button id="close-chat" class="close-btn"><i class="fa-solid fa-chevron-down"></i></button>
      </div>

      <div class="chat-body" id="chat-messages">
          <div class="chat-timestamp">Aujourd'hui</div>
          <!-- Message d'accueil -->
          <div class="message bot-message">
              Bonjour ! 👋 Je suis l'assistant IA du cabinet. Je peux calculer votre IMC, concevoir une collation sportive, ou répondre à vos questions sur les consultations. Que puis-je faire pour vous ?
          </div>
      </div>

      <!-- Le carrousel horizontal des boutons rapides -->
      <div class="chat-suggestions-scroll" id="aiChatSuggestions">
          <button onclick="envoyerMessageChat('Comment calculer mon IMC ?')"><i class="fa-solid fa-chart-pie" style="color:#3498db; margin-right:4px;"></i> Mon IMC</button>
          <button onclick="envoyerMessageChat('Combien d\\'eau dois-je boire pour mon poids ?')"><i class="fa-solid fa-droplet" style="color:#2ecc71; margin-right:4px;"></i> Hydratation</button>
          <button onclick="envoyerMessageChat('Que manger après le sport ?')"><i class="fa-solid fa-dumbbell" style="color:#e67e22; margin-right:4px;"></i> Sport</button>
          <button onclick="envoyerMessageChat('As-tu une idée de recette saine ?')"><i class="fa-solid fa-carrot" style="color:#e74c3c; margin-right:4px;"></i> Recette</button>
          <button onclick="envoyerMessageChat('Comment gérer une fringale de sucre ?')"><i class="fa-solid fa-cookie-bite" style="color:#8e44ad; margin-right:4px;"></i> Fringale</button>
          <button onclick="envoyerMessageChat('Quels sont les conseils pour le jeûne ?')"><i class="fa-solid fa-moon" style="color:#f39c12; margin-right:4px;"></i> Jeûne</button>
          <button onclick="envoyerMessageChat('Quels sont les tarifs et l\\'adresse ?')"><i class="fa-solid fa-location-dot" style="color:#7f8c8d; margin-right:4px;"></i> Infos</button>
      </div>

      <div class="chat-footer">
          <input type="text" id="chat-input" placeholder="Écrivez votre message..." onkeypress="if(event.key === 'Enter') sendAiChatMessage()">
          <button id="send-chat" class="send-btn" onclick="sendAiChatMessage()"><i class="fa-solid fa-paper-plane"></i></button>
      </div>
  </div>`;

const htmlRegex = /<!-- Bouton flottant pour ouvrir le chat -->[\s\S]*?<\/div>\s*<\/div>\s*<script>/;
html = html.replace(htmlRegex, newHTML + '\n  <script>');

fs.writeFileSync('index.html', html);
console.log("Upgraded Design Complete");
