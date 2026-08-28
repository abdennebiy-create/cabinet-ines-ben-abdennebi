const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Insert CSS
const cssToInsert = `
    .chat-suggestions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 1rem;
    }
    .chat-suggestions button {
      background: rgba(232, 198, 200, 0.3);
      border: 1px solid rgba(232, 198, 200, 0.8);
      color: var(--text-dark-rose);
      padding: 0.5rem 0.8rem;
      border-radius: 20px;
      font-size: 0.8rem;
      cursor: pointer;
      transition: all 0.2s ease;
      white-space: nowrap;
      font-family: inherit;
    }
    .chat-suggestions button:hover {
      background: var(--accent-rose);
      color: #fff;
    }
`;
html = html.replace('</style>', cssToInsert + '</style>');

// 2. Insert HTML (escaping quotes properly)
const htmlToInsert = `
          <div class="chat-suggestions" id="aiChatSuggestions">
            <button onclick="envoyerMessageChat('Comment calculer mon IMC ?')">📊 Calculer mon IMC</button>
            <button onclick="envoyerMessageChat('Combien d\\'eau dois-je boire pour mon poids ?')">💧 Test d'hydratation</button>
            <button onclick="envoyerMessageChat('Que manger après un entraînement de sport de combat ?')">🥊 Collation sportive</button>
            <button onclick="envoyerMessageChat('Quels sont les tarifs et l\\'adresse du cabinet ?')">📍 Infos & Tarifs</button>
          </div>
`;
html = html.replace('</p>\n        </div>', '</p>' + htmlToInsert + '        </div>');

// 3. Insert JS function
const jsToInsert = `
    function envoyerMessageChat(msg) {
      const input = document.getElementById('aiChatInput');
      input.value = msg;
      sendAiChatMessage();
      // Masquer les suggestions après le premier clic
      const suggestions = document.getElementById('aiChatSuggestions');
      if (suggestions) {
        suggestions.style.display = 'none';
      }
    }
`;
html = html.replace('async function sendAiChatMessage', jsToInsert + '\n    async function sendAiChatMessage');

fs.writeFileSync('index.html', html);
