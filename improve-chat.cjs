const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Update Chat Window Transition
html = html.replace(
    'transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);',
    'transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);'
);

// 2. Update .message CSS
const oldMessageCSS = `.message {
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
}`;

const newMessageCSS = `.message {
    max-width: 85%;
    padding: 14px 18px;
    border-radius: 20px;
    font-size: 15px;
    line-height: 1.6;
    position: relative;
    animation: fadeInMessage 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
@keyframes fadeInMessage {
    from { opacity: 0; transform: translateY(15px) scale(0.95); }
    to { opacity: 1; transform: translateY(0) scale(1); }
}

/* Typing Indicator CSS */
.typing-indicator {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 6px;
}
.typing-dot {
    width: 6px;
    height: 6px;
    background-color: var(--text-muted, #95a5a6);
    border-radius: 50%;
    animation: typingBounce 1.4s infinite ease-in-out both;
}
.typing-dot:nth-child(1) { animation-delay: -0.32s; }
.typing-dot:nth-child(2) { animation-delay: -0.16s; }
@keyframes typingBounce {
    0%, 80%, 100% { transform: scale(0); opacity: 0.5; }
    40% { transform: scale(1); opacity: 1; }
}`;
html = html.replace(oldMessageCSS, newMessageCSS);

// 3. Update loading indicator JS
const oldJS = "loading.innerText = 'Inès écrit... ✍️';";
const newJS = "loading.innerHTML = '<div class=\"typing-indicator\"><span class=\"typing-dot\"></span><span class=\"typing-dot\"></span><span class=\"typing-dot\"></span></div>';";
html = html.replace(oldJS, newJS);

fs.writeFileSync('index.html', html);
console.log("Chat improvements applied.");
