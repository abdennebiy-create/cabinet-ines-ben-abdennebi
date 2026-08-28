const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const regex = /<script>\s*document\.getElementById\('chatbot-toggle'\)[\s\S]*?<\/script>\s*<!-- Bouton WhatsApp Flottant/g;

const newScript = `<script>
// 1. Ouvrir et fermer la fenêtre
document.getElementById('chatbot-toggle').addEventListener('click', () => {
    document.getElementById('chatbot-window').classList.remove('hidden');
});
document.getElementById('close-chat').addEventListener('click', () => {
    document.getElementById('chatbot-window').classList.add('hidden');
});
document.addEventListener('click', function(event) {
    const drawer = document.getElementById('chatbot-window');
    const trigger = document.getElementById('chatbot-toggle');
    if (drawer && !drawer.classList.contains('hidden')) {
    if (!drawer.contains(event.target) && (!trigger || !trigger.contains(event.target))) {
        drawer.classList.add('hidden');
    }
    }
});

let aiChatHistory = [];

// 2. Fonction pour ajouter visuellement une bulle de message
function ajouterBulle(texte, type) {
    const chatBody = document.getElementById('chat-messages');
    const bulle = document.createElement('div');
    bulle.className = \`message \${type}\`;
    
    // Si c'est l'IA, on gère les retours à la ligne et on cherche le tag IMC
    if (type === 'bot-message') {
        let formattedReply = texte.replace(/\\n/g, '<br>').replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>');
        const imcMatch = formattedReply.match(/\\[IMC_RESULT:\\s*([0-9.,]+)\\]/i);
        let imcValue = null;
        if (imcMatch) {
            imcValue = imcMatch[1].replace(',', '.');
            formattedReply = formattedReply.replace(imcMatch[0], '');
        }
        
        bulle.innerHTML = formattedReply;
        chatBody.appendChild(bulle);
        
        if (imcValue) {
            const chartContainer = document.createElement('div');
            const chartId = 'imc-chart-' + Date.now();
            chartContainer.id = chartId;
            chartContainer.style.marginTop = '10px';
            bulle.appendChild(chartContainer);
            if (window.renderIMCGauge) {
                window.renderIMCGauge(chartId, imcValue);
            }
        }
    } else {
        bulle.innerHTML = texte;
        chatBody.appendChild(bulle);
    }
    
    // Descendre l'ascenseur automatiquement vers le dernier message
    chatBody.scrollTop = chatBody.scrollHeight; 
}

// 3. Fonction principale d'envoi à l'IA
async function envoyerMessageChat(texteRapide = null) {
    const input = document.getElementById('chat-input');
    const message = texteRapide || input.value.trim();
    
    if (message === '') return; // Ne rien faire si c'est vide
    input.value = ''; // Vider la barre de texte

    // Masquer les suggestions
    const suggestions = document.getElementById('aiChatSuggestions');
    if (suggestions) {
        suggestions.style.display = 'none';
    }

    // Afficher le message du patient
    ajouterBulle(message, 'user-message');
    
    const prevHistory = [...aiChatHistory];
    aiChatHistory.push({ role: 'user', text: message });
    
    // Afficher une bulle d'attente
    const chatBody = document.getElementById('chat-messages');
    const loading = document.createElement('div');
    loading.className = 'message bot-message';
    loading.id = 'loading-message';
    loading.innerText = 'Inès écrit... ✍️';
    chatBody.appendChild(loading);
    chatBody.scrollTop = chatBody.scrollHeight;

    try {
        // Appel au serveur (ton fichier api/ai-assistant.js)
        const response = await fetch('/api/ai-assistant', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: message, history: prevHistory })
        });
        
        const data = await response.json();
        
        // Supprimer la bulle d'attente et afficher la vraie réponse
        document.getElementById('loading-message').remove();
        
        if (data.reponse) {
            aiChatHistory.push({ role: 'model', text: data.reponse });
            ajouterBulle(data.reponse, 'bot-message');
        } else if (data.reply) { // Fallback just in case
            aiChatHistory.push({ role: 'model', text: data.reply });
            ajouterBulle(data.reply, 'bot-message');
        } else {
            throw new Error("No response from server");
        }
        
    } catch (error) {
        if(document.getElementById('loading-message')) {
            document.getElementById('loading-message').remove();
        }
        ajouterBulle('Désolé, ma connexion a coupé. Pouvez-vous répéter ?', 'bot-message');
    }
}

// 4. Permettre d'envoyer avec la touche "Entrée"
document.getElementById('chat-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        envoyerMessageChat();
    }
});
// (The onClick is already in the HTML for send-chat, but we can add it here too if not duplicate)
document.getElementById('send-chat').addEventListener('click', () => envoyerMessageChat());

function handleChipClick(type) {
    if (type === 'whatsapp') {
    const infoMessages = {
        fr: "Bonjour, je souhaite des informations sur les consultations au cabinet de nutrition.",
        ar: "مرحباً، أود الحصول على معلومات حول الاستشارات في عيادة التغذية.",
        en: "Hello, I would like more information regarding consultations at the nutrition clinic.",
        es: "Hola, deseo más información sobre las consultas en la clínica de nutrición."
    };
    const msg = encodeURIComponent(infoMessages[currentLang] || infoMessages.fr);
    const phone = typeof WHATSAPP_NUMBER !== 'undefined' ? WHATSAPP_NUMBER : "21655211116";
    window.open(\`\${buildWhatsAppUrl(phone, decodeURIComponent(msg))}\`, '_blank');
    }
}
</script>
  <!-- Bouton WhatsApp Flottant`;

html = html.replace(regex, newScript);
fs.writeFileSync('index.html', html);
console.log("Replacement done.");
