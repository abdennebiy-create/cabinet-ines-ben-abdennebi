const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const newCSS = `
/* Bouton flottant */
.chat-toggle-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: var(--accent-mauve);
    color: white;
    border: none;
    padding: 15px 25px;
    border-radius: 30px;
    font-size: 16px;
    font-weight: bold;
    box-shadow: 0 4px 15px rgba(196, 157, 165, 0.4);
    cursor: pointer;
    transition: transform 0.3s, background-color 0.3s;
    z-index: 1000;
    display: flex;
    align-items: center;
    gap: 8px;
}
.chat-toggle-btn:hover { 
    transform: scale(1.05);
    background-color: var(--text-dark-rose);
}

/* Fenêtre de chat */
.chat-window {
    position: fixed;
    bottom: 80px;
    right: 20px;
    width: 360px;
    max-height: 600px;
    background: var(--bg-white);
    border-radius: 20px;
    box-shadow: var(--glass-shadow);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    z-index: 1000;
    transition: opacity 0.3s ease, transform 0.3s ease;
    border: 1px solid var(--accent-blush);
}
.chat-window.hidden { display: none; opacity: 0; transform: translateY(10px); }

/* En-tête */
.chat-header {
    background: var(--accent-mauve);
    color: white;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.chat-profile { display: flex; align-items: center; gap: 10px; }
.chat-avatar { font-size: 24px; background: rgba(255,255,255,0.2); padding: 8px; border-radius: 50%; }
.chat-titles { display: flex; flex-direction: column; }
.chat-titles strong { font-size: 15px; font-weight: 600; }
.chat-titles span { font-size: 12px; opacity: 0.9; }
.close-btn { background: none; border: none; color: white; font-size: 18px; cursor: pointer; transition: transform 0.2s; }
.close-btn:hover { transform: scale(1.2); }

/* Corps des messages */
.chat-body {
    padding: 15px;
    flex-grow: 1;
    height: 350px;
    overflow-y: auto;
    background: var(--bg-rose-soft);
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.message {
    max-width: 85%;
    padding: 12px 16px;
    border-radius: 18px;
    font-size: 14px;
    line-height: 1.5;
}
.bot-message {
    background: var(--bg-white);
    color: var(--text-main);
    align-self: flex-start;
    border-bottom-left-radius: 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.03);
    border: 1px solid var(--accent-blush);
}
.user-message {
    background: var(--accent-mauve);
    color: white;
    align-self: flex-end;
    border-bottom-right-radius: 4px;
    box-shadow: 0 2px 8px rgba(196, 157, 165, 0.2);
}

/* Boutons rapides (Scroll horizontal) */
.chat-suggestions-scroll {
    display: flex;
    gap: 8px;
    padding: 12px 15px;
    background: var(--bg-rose-soft);
    overflow-x: auto;
    white-space: nowrap;
    border-top: 1px solid var(--accent-blush);
    scrollbar-width: none; /* Firefox */
}
.chat-suggestions-scroll::-webkit-scrollbar { display: none; }
.chat-suggestions-scroll button {
    background: rgba(232, 198, 200, 0.25);
    color: var(--text-dark-rose);
    border: 1px solid rgba(232, 198, 200, 0.6);
    padding: 8px 14px;
    border-radius: 20px;
    font-size: 13px;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
    font-family: inherit;
}
.chat-suggestions-scroll button:hover { 
    background: var(--accent-rose); 
    color: var(--text-dark-rose);
    transform: translateY(-1px);
}

/* Zone de texte */
.chat-footer {
    display: flex;
    padding: 12px 15px;
    background: var(--bg-white);
    border-top: 1px solid var(--accent-blush);
    align-items: center;
    gap: 8px;
}
#chat-input {
    flex-grow: 1;
    border: 1px solid var(--accent-rose);
    border-radius: 20px;
    outline: none;
    padding: 10px 15px;
    font-size: 14px;
    background: var(--bg-white);
    color: var(--text-main);
    transition: border-color 0.3s;
    font-family: inherit;
}
#chat-input:focus {
    border-color: var(--accent-mauve);
}
.send-btn {
    background: var(--accent-mauve);
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
    transition: transform 0.2s, background 0.3s;
}
.send-btn:hover {
    transform: scale(1.05);
    background: var(--text-dark-rose);
}

/* Mode Sombre (Smartphone) */
@media (prefers-color-scheme: dark) {
    .chat-window { background: #1E1E1E; border-color: #333; }
    .chat-body, .chat-suggestions-scroll { background: #121212; border-color: #333; }
    .bot-message { background: #2A2A2A; color: #EEE; border-color: #333; }
    .chat-footer { background: #1E1E1E; border-color: #333; }
    #chat-input { background: #2A2A2A; color: white; border-color: #444; }
    #chat-input:focus { border-color: var(--accent-mauve); }
    .chat-suggestions-scroll button { 
        background: rgba(232, 198, 200, 0.1); 
        color: var(--accent-rose); 
        border-color: rgba(232, 198, 200, 0.2); 
    }
    .chat-suggestions-scroll button:hover {
        background: rgba(232, 198, 200, 0.2); 
    }
}
`;

const regexToReplace = /\/\* Bouton flottant \*\/[\s\S]*?\}\s*<\/style>/;
html = html.replace(regexToReplace, newCSS.trim() + '\n</style>');

fs.writeFileSync('index.html', html);
