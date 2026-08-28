const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const darkModeCSS = `
    @media (prefers-color-scheme: dark) {
      :root {
        --bg-white: #1b1114;
        --bg-rose-soft: #241317;
        --accent-rose: #8a575b;
        --accent-rose-hover: #a36b70;
        --accent-mauve: #7e555d;
        --accent-blush: #3d2228;
        
        --text-dark-rose: #f4e3e5;
        --text-main: #fcfbf9;
        --text-muted: #d4a9ac;
        
        --glass-bg: rgba(30, 20, 24, 0.65);
        --glass-bg-hover: rgba(50, 30, 35, 0.75);
        --glass-border: rgba(255, 255, 255, 0.08);
        --glass-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
      }
      body { background-color: var(--bg-white); }
      .spinner { border-color: rgba(255, 255, 255, 0.1) !important; border-left-color: var(--accent-rose) !important; }
      .ai-loading-screen p { color: var(--text-main) !important; }
      .ai-back-btn { background: var(--glass-bg) !important; color: var(--text-main) !important; border-color: var(--glass-border) !important; }
      
      /* Subtle adjustments for text elements that might have hardcoded dark colors */
      p, h1, h2, h3, h4, span {
         /* Generally relying on CSS variables where possible */
      }
    }
`;

html = html.replace(/--transition-smooth: all 0\.4s cubic-bezier\(0\.16, 1, 0\.3, 1\);\s*\}/, '--transition-smooth: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n    }\n' + darkModeCSS);

fs.writeFileSync('index.html', html);
