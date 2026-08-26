const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');

const regex = /<script>([\s\S]*?)<\/script>/g;
let match;
while ((match = regex.exec(content)) !== null) {
    const scriptBody = match[1];
    if (scriptBody.includes('AIEngine')) {
        fs.writeFileSync('extracted_engine.js', scriptBody);
        console.log("Extracted script containing AIEngine.");
    }
}
