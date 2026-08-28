const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const regexWindow = /\.chat-window\s*\{[\s\S]*?\}/;
const replacementWindow = `.chat-window {
    position: fixed;
    bottom: 90px;
    right: 16px;
    width: 420px;
    max-width: calc(100vw - 32px);
    max-height: calc(100vh - 110px);
    height: 680px;
    background: var(--bg-white);
    border-radius: 24px;
    box-shadow: 0 20px 50px rgba(92, 60, 67, 0.15);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    z-index: 1000;
    transform-origin: bottom right;
    transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    border: 1px solid var(--accent-blush);
}`;

const regexToggle = /\.chat-toggle-btn\s*\{[\s\S]*?\}/;
const oldToggleMatch = html.match(regexToggle);
if (oldToggleMatch) {
    const replacementToggle = oldToggleMatch[0].replace(/right:\s*24px;/, 'right: 16px;');
    html = html.replace(regexToggle, replacementToggle);
}


const regexMessage = /\.message\s*\{[\s\S]*?\}/;
const replacementMessage = `.message {
    max-width: 88%;
    padding: 16px 22px;
    border-radius: 20px;
    font-size: 15px;
    line-height: 1.6;
    position: relative;
    animation: fadeInMessage 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}`;

html = html.replace(regexWindow, replacementWindow);
html = html.replace(regexMessage, replacementMessage);

fs.writeFileSync('index.html', html);
console.log("Mobile readability improvements applied.");
