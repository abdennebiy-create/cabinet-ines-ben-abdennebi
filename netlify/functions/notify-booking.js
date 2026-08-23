// netlify/functions/notify-booking.js
// Background WhatsApp notification sender for Cabinet Inès Ben Abdennebi

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

exports.handler = async (event, context) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers: corsHeaders, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return { 
      statusCode: 405, 
      headers: corsHeaders, 
      body: JSON.stringify({ error: "Method Not Allowed" }) 
    };
  }

  try {
    const payload = JSON.parse(event.body);
    const { nom, telephone, date, creneau, dossier } = payload;

    const apiKey = process.env.CALLMEBOT_API_KEY;
    const phone = process.env.IN_WHATSAPP_NUMBER || "21622841841";

    if (!apiKey) {
      console.warn("CALLMEBOT_API_KEY is not set in environment variables. WhatsApp notification skipped.");
      return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify({ success: false, error: "CALLMEBOT_API_KEY not set" })
      };
    }

    // Format the WhatsApp message beautifully
    const message = `🔔 *Nouveau RDV Cabinet Inès*\n\n` +
                    `👤 *Patient :* ${nom}\n` +
                    `📞 *Téléphone :* ${telephone}\n` +
                    `📅 *Date :* ${date}\n` +
                    `⏰ *Créneau :* ${creneau}\n\n` +
                    `📝 *Bilan Clinique :*\n${dossier || 'Aucun bilan'}`;

    // URL encode the message for CallMeBot request
    const waUrl = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodeURIComponent(message)}&apikey=${apiKey}`;

    const response = await fetch(waUrl);
    if (!response.ok) {
      throw new Error(`CallMeBot returned status ${response.status}`);
    }

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    console.error("Error sending WhatsApp notification:", error);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: error.message })
    };
  }
};
