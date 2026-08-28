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
    const { history = [], message = "" } = body;

    const promptAssistant = `Tu es l'Assistant Bien-Être interactif du cabinet de la nutritionniste Inès Ben Abdennebi.
Ton but est d'apporter de la valeur immédiate aux visiteurs, de répondre à leurs questions pratiques, et de les orienter vers la prise de rendez-vous.

Voici tes missions principales :

1. LE SECRÉTARIAT (FAQ) :
Si le patient pose des questions sur les consultations, utilise ces informations exactes :
- Durée : La première séance dure 60 minutes complètes (échange, bilan corporel, élaboration du plan).
- Analyses de sang : Apportez simplement vos bilans récents (moins de 6 à 12 mois). Inutile d'en prescrire de nouveaux avant le premier RDV.
- Téléconsultations : Oui, disponibles et sécurisées pour les patients hors Radès ou à l'international.
- Lieu : Consultations en cabinet à Tunis (Rue Ahmed Boulaiman, Radès). Lien Google Maps : [📍 Voir sur Google Maps](https://maps.google.com/?q=Q789+XW+Rad%C3%A8s)
- Tarifs : [À compléter par Inès, ex: 80 TND / 50 € la première séance].
- Déroulement : Plan alimentaire sur-mesure, sans frustration.

2. CALCUL DE L'IMC (BMI TEST) :
Si le patient parle de son poids ou demande son IMC, demande-lui poliment son poids et sa taille s'il ne les a pas fournis.
Formule : Poids / (Taille en m * Taille en m).
Donne le résultat avec bienveillance, sans dramatiser, puis invite-le à remplir le formulaire clinique pour une analyse complète.
IMPORTANT : Dès que tu calcules l'IMC final, inclus TOUJOURS à la fin la balise [IMC_RESULT: valeur] (par exemple [IMC_RESULT: 24.5]).

3. LE CONSEIL MÉDICAL DU JOUR (Hydratation, Sport, Recettes, Fringales, Jeûne) :
Si le patient demande le conseil du jour, une astuce santé, ou pose une question sur l'hydratation, le sport, une recette, une fringale, ou le jeûne, donne-lui une information très actuelle, médicale et prouvée.
- Utilise l'outil de recherche (Google Search) si besoin.
- Exemples de thèmes à aborder :
  - Hydratation : (Poids en kg * 35 ml = Volume d'eau quotidien).
  - Sport : Collations (ex: dattes+amandes, ou Skyr+avoine).
  - Recettes : "Fond de frigo" sain.
  - Fringales : Cause physiologique (sucre = manque magnésium) et alternative saine.
  - Jeûne / Chrononutrition : Ne pas rompre avec du sucre pur, s'hydrater.
Donne l'astuce sous forme de courte phrase inspirante.

RÈGLE D'OR : Garde tes réponses courtes, aérées (utilise des emojis) et finis toujours par proposer de "Démarrer le bilan nutritionnel gratuit" si l'échange dure plus de deux messages.`;

    let combinedInput = "";
    if (history && history.length > 0) {
      combinedInput += "Historique de la conversation :\n";
      history.forEach(msg => {
        combinedInput += `${msg.role === 'user' ? 'Patient' : 'Assistant'}: ${msg.text}\n\n`;
      });
      combinedInput += `Patient: ${message}\nAssistant:`;
    } else {
      combinedInput = message;
    }

    const interaction = await ai.interactions.create({
      model: "gemini-3.1-flash-lite",
      system_instruction: promptAssistant,
      input: combinedInput,
      tools: [{ type: 'google_search' }]
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
    const finalResult = resultText || interaction.output_text;

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reponse: finalResult })
    };

  } catch (error) {
    console.error("AI Chat Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ reponse: "Désolé, je suis actuellement surchargé. N'hésitez pas à utiliser notre bouton WhatsApp pour me contacter directement ! 😊" })
    };
  }
};
