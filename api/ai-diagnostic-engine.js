import { GoogleGenAI } from "@google/genai";

export const handler = async function(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const body = JSON.parse(event.body);
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      console.warn("No GEMINI_API_KEY found, failing to trigger fallback.");
      return { statusCode: 500, body: JSON.stringify({ error: "Missing API Key" }) };
    }

    const ai = new GoogleGenAI({ apiKey: apiKey });
    const { target, conditions = [], history = [], lang: language = 'fr' } = body;

    let tranche_age = "Adulte";
    if (target === "enfant") tranche_age = "Enfant/Ado";
    if (target === "parent") tranche_age = "Senior";

    const prompt = `Tu es l'assistant de pré-consultation du Cabinet Inès Ben Abdennebi, experte en nutrition.
Langue de l'interface : ${language} (Tu dois impérativement générer ta question et les options dans cette langue).

Tu analyses le profil nutritionnel d'un patient de la catégorie : ${tranche_age}.
* Si 'Enfant/Ado' : Adresse-toi aux parents. Identifie les problèmes de croissance, les aversions alimentaires et l'excès de sucre.
CAS SPÉCIFIQUES - MALADIES INFANTILES (Enfant/Ado) :
 - Si Diabète signalé : Oriente tes questions sur la gestion quotidienne des repas (ex: "L'enfant prend-il ses repas à la cantine scolaire ?", "Comment sont gérées les collations et les potentielles hypoglycémies pendant le sport ?"). INTERDICTION ABSOLUE de commenter ou de conseiller sur les doses d'insuline ou le traitement médical.
 - Si Allergie ou Maladie Cœliaque signalée : Demande quelles sont les principales difficultés rencontrées par les parents pour diversifier les repas ou lire les étiquettes à la maison.
 - Si Surpoids signalé : Pose des questions bienveillantes sur le niveau d'activité physique de l'enfant et la présence de grignotages ou de boissons sucrées à la maison, sans jamais utiliser de ton culpabilisant pour les parents.
* Si 'Senior' : Privilégie la détection de la dénutrition, de la fonte musculaire, des problèmes de mastication et des traitements médicaux lourds.
* Ajuste systématiquement tes questions selon cette tranche d'âge, tout en respectant la langue ${language} (FR/AR/EN) et sans jamais prescrire de médicaments.

Profil : ${target}. Sujets signalés : ${conditions.join(', ')}. Historique : ${JSON.stringify(history)}.

RÈGLES STRICTES :
1. Reste exclusivement dans le domaine de la diététique, de la nutrition, du mode de vie, de l'hydratation et des habitudes alimentaires.
2. INTERDICTION de poser un diagnostic médical, de suggérer une maladie ou de prescrire des médicaments/analyses de sang.
3. Si un symptôme évoque un problème médical (ex: douleurs, vertiges), ignore l'aspect médical et reconcentre la question sur l'impact alimentaire ou la digestion.
4. Pose UNE SEULE question ciblée avec 3 à 4 options de réponses courtes et claires.
5. Adopte un ton empathique, déculpabilisant et motivant.

Réponds UNIQUEMENT au format JSON strict avec les clés "question" (string) et "options" (tableau de strings).`;

    
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
    
    // Parsage sécurisé
    let aiData;
    try {
      const cleaned = responseText.replace(/```(?:json)?/gi, '').replace(/```/g, '').trim();
      aiData = JSON.parse(cleaned);
      
      if (!aiData.empathy_insight && !aiData.empathy) {
          const defaultEmpathy = {
              'fr': 'Merci pour ces précisions. Continuons notre analyse nutritionnelle.',
              'ar': 'شكرا على هذه التوضيحات. لنواصل تحليلنا الغذائي.',
              'en': 'Thank you for these details. Let\'s continue our nutritional analysis.',
              'es': 'Gracias por estos detalles. Continuemos nuestro análisis nutricional.'
          };
          aiData.empathy_insight = defaultEmpathy[language] || defaultEmpathy['fr'];
      }
    } catch (e) {
      aiData = {
        empathy_insight: "Nous analysons ces symptômes.",
        question: "Pouvez-vous préciser l'impact de ce point sur votre quotidien ou vos repas ?",
        options: ["Léger", "Modéré", "Sévère"]
      };
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(aiData)
    };

  } catch (error) {
    console.error("AI Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
