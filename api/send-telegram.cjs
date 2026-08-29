exports.handler = async function(event, context) {
    if (event.httpMethod !== "POST") return { statusCode: 405, body: "Méthode non autorisée" };

    try {
        const data = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
        
        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (!botToken || !chatId) {
            return { statusCode: 500, body: JSON.stringify({ error: "Clés Telegram manquantes" }) };
        }

        const messageText = `🩺 NOUVEAU PATIENT\n\nNom: ${data.nom || 'Non précisé'}\nÂge: ${data.age || 'Non précisé'}\nRésumé: ${data.resume || 'Aucun'}`;

        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: chatId, text: messageText })
        });

        const telegramResponse = await response.json();

        if (!response.ok) {
            return { statusCode: 502, body: JSON.stringify({ error: "Telegram a refusé le message", details: telegramResponse }) };
        }

        return { statusCode: 200, body: JSON.stringify({ message: "Succès" }) };
        
    } catch (error) {
        return { statusCode: 500, body: JSON.stringify({ error: error.message || "Erreur interne" }) };
    }
};
