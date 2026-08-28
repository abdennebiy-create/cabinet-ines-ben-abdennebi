const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Remove the theme-color meta tag for dark mode
html = html.replace(/<meta name="theme-color" content="#1b1114" media="\(prefers-color-scheme: dark\)">\n?/, '');

// Remove the @media (prefers-color-scheme: dark) block
const regex = /@media\s*\(\s*prefers-color-scheme:\s*dark\s*\)\s*\{[\s\S]*?\/\* Generally relying on CSS variables where possible \*\/\s*\}\s*\}/;
html = html.replace(regex, '');

fs.writeFileSync('index.html', html);
