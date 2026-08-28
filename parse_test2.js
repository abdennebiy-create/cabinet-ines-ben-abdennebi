let texte = "Voici le lien: [Google Maps](https://maps.google.com/?q=Q789+XW+Rad%C3%A8s) clique ici";
let formatted = texte.replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g, '<a href="$2" target="_blank" style="color:var(--text-dark-rose); text-decoration:underline;">$1</a>');
console.log(formatted);
