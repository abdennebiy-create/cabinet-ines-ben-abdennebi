let texte = "Voici: [Lien](https://maps.google.com/?q=abc) et aussi https://google.com direct.";
let formatted = texte
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g, '<a href="$2" target="_blank">$1</a>')
    .replace(/(?<!href="|">)(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank">$1</a>');
console.log(formatted);
