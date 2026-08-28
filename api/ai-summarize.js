import { GoogleGenAI } from "@google/genai";

export const handler = async function(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const body = JSON.parse(event.body);
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      return { statusCode: 500, body: JSON.stringify({ error: "Missing API Key" }) };
    }

    const ai = new GoogleGenAI({ apiKey: apiKey });
    const { target, history = [], lang: language = 'fr' } = body;

    let tranche_age = "Adulte";
    if (target === "enfant") tranche_age = "Enfant/Ado";
    if (target === "parent") tranche_age = "Senior";

    const prompt = `Tu es l'assistant du Cabinet Inès Ben Abdennebi.
Langue de sortie : ${language} (Tu dois impérativement générer le résumé dans cette langue).

Tu analyses le profil nutritionnel d'un patient de la catégorie : ${tranche_age}.
Profil : ${target}
Historique de la consultation : ${JSON.stringify(history)}

TÂCHE : Résume toute cette conversation en EXACTEMENT 4 puces cliniques ultra-courtes en ciblant les enjeux de la tranche d'âge (${tranche_age}).
Format attendu (exemple) :
- Patient : [Profil / Âge]
- Objectif principal : [Objectif]
- Problème majeur : [Problème]
- Facteur clé : [Détail important]

Réponds UNIQUEMENT au format JSON strict avec la clé "summary" contenant une chaîne de caractères (avec les sauts de ligne \\n).`;

    
    const interaction = await ai.interactions.create({
      model: "gemini-3.1-flash-lite",
      input: prompt,
    });
    let resultText = "";
    if (interaction.steps) {
      for (const step of interaction.steps) {
        if (step.type === 'model_output') {
          const textContent = step.content?.find(c => c.type === 'text');
          if (textContent && textContent.text) {
            resultText += textContent.text;
          }
        }
      }
    }
    const result = { text: resultText };

    const responseText = result.text;
    
    // Parsage sécurisé et nettoyage du JSON
    let aiData;
    try {
      const cleaned = responseText.replace(/```(?:json)?/gi, '').replace(/```/g, '').trim();
      aiData = JSON.parse(cleaned);
    } catch (e) {
      aiData = {
        summary: "- Bilan clinique complété\n- Profil évalué avec succès\n- Demande de consultation ciblée"
      };
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(aiData)
    };

  } catch (error) {
    console.error("AI Summarize Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
