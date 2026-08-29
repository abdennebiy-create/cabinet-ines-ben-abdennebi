exports.handler = async function(event, context) {
    // N'accepte que les requêtes POST
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    try {
        const data = JSON.parse(event.body);
        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        // Construction du message envoyé sur ton téléphone
        const messageText = `🩺 NOUVEAU PATIENT\n\nNom: ${data.nom}\nÂge: ${data.age}\n\nRésumé du Quiz:\n${data.resume}`;

        const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

        const response = await fetch(telegramUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: messageText
            })
        });

        if (!response.ok) {
            throw new Error(`Erreur Telegram: ${response.statusText}`);
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Dossier envoyé avec succès" })
        };
    } catch (error) {
        console.error("Erreur d'envoi:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Erreur interne du serveur" })
        };
    }
};
