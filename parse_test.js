let texte = "Voici le lien: https://maps.google.com/?q=Q789+XW+Rad%C3%A8s clique ici";
let formatted = texte.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" style="color:var(--text-dark-rose); text-decoration:underline;">$1</a>');
console.log(formatted);
