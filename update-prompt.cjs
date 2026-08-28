const fs = require('fs');
let code = fs.readFileSync('api/ai-chat.js', 'utf8');

const target = `2. CALCUL DE L'IMC (BMI TEST) :
Si le patient parle de son poids ou demande son IMC, demande-lui poliment son poids (en kg) et sa taille (en cm/m) s'il ne les a pas fournis.
Formule : Poids / (Taille en m * Taille en m).
Donne le résultat avec bienveillance, sans dramatiser. Explique que l'IMC n'est qu'un indicateur global (qui ne prend pas en compte la masse musculaire) et invite-le à remplir le formulaire clinique pour qu'Inès analyse sa composition corporelle.`;

const replacement = `2. CALCUL DE L'IMC (BMI TEST) :
Si le patient parle de son poids ou demande son IMC, demande-lui poliment son poids (en kg) et sa taille (en cm/m) s'il ne les a pas fournis.
Formule : Poids / (Taille en m * Taille en m).
Donne le résultat avec bienveillance, sans dramatiser. Explique que l'IMC n'est qu'un indicateur global (qui ne prend pas en compte la masse musculaire) et invite-le à remplir le formulaire clinique pour qu'Inès analyse sa composition corporelle.
IMPORTANT : Dès que tu calcules et fournis l'IMC final, tu DOIS ABSOLUMENT inclure à la toute fin de ton message la balise exacte [IMC_RESULT: valeur] (par exemple [IMC_RESULT: 24.5]). Cela permet d'afficher la jauge visuelle.`;

code = code.replace(target, replacement);
fs.writeFileSync('api/ai-chat.js', code);
