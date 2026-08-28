const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace contact section phone numbers (remove the second one and the separator)
html = html.replace(
  /<a href="tel:\+21622841841" style="color: inherit; text-decoration: none; font-weight: 600;">\+216 22 841 841<\/a>\s*<span style="opacity: 0\.5; margin: 0 0\.35rem;">\/<\/span>\s*<a href="tel:\+21671890123" style="color: inherit; text-decoration: none; font-weight: 600;">\+216 71 890 123<\/a>/g,
  '<a href="tel:+21655211116" style="color: inherit; text-decoration: none; font-weight: 600;">+216 55 211 116</a>'
);

// Fallback if the specific structure isn't perfectly matched:
// In general, we want to make sure +216 22 841 841 becomes +216 55 211 116
html = html.replace(/\+216 22 841 841/g, '+216 55 211 116');
html = html.replace(/\+21622841841/g, '+21655211116');
html = html.replace(/21622841841/g, '21655211116');

// Replace other formats and placeholders
html = html.replace(/22 841 841/g, '55 211 116');

// Remove the second number if it still exists
html = html.replace(/<span style="opacity: 0\.5; margin: 0 0\.35rem;">\/<\/span>\s*<a href="tel:\+21671890123" style="color: inherit; text-decoration: none; font-weight: 600;">\+216 71 890 123<\/a>/g, '');

fs.writeFileSync('index.html', html);
