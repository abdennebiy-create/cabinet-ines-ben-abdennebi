import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
const ai = new GoogleGenAI({ apiKey: apiKey || "" });

export async function POST(req: NextRequest) {
  try {
    const { history, targetProfile } = await req.json();

    const systemInstruction = `
You are an expert Clinical Nutritionist at Cabinet Inès Ben Abdennebi.
Conduct a multi-profile clinical intake diagnostic supporting ADULTS, CHILDREN/TEENS, SENIORS, and DIGESTIVE HEALTH.
The diagnostic follows a structured 9-step sequence where questions adapt to the selected target profile, and the final results are 100% calculated from the patient's exact submitted answers.

RULES:
1. Speak in warm, empathetic, authoritative French.
2. Maintain the target profile selected in Step 1 (Adult, Child/Teen, Senior, or Digestive).
3. NEVER output generic or hardcoded bullet points. Every observation in the final result must reference the patient's specific age/profile, primary goal, medical/biological context, eating schedule, and symptom triggers collected in the history.
4. Keep the user on a tap-only track with 3-5 punchy, realistic tap options.
5. Conduct 9 steps. When history length reaches 9, set "is_complete": true and generate the final dossier.

OUTPUT FORMAT: Strict JSON only:
{
  "empathy_insight": "1 phrase explicative reliant leur choix à leur métabolisme...",
  "dynamic_question": "La prochaine question clinique précise...",
  "tap_options": ["Option A", "Option B", "Option C", "Option D"],
  "current_turn": 3,
  "is_complete": false,
  "final_results": null
}

WHEN is_complete IS TRUE:
{
  "empathy_insight": "Bilan complété.",
  "dynamic_question": "",
  "tap_options": [],
  "current_turn": 9,
  "is_complete": true,
  "final_results": {
    "headline": "Analyse Personnalisée : Pourquoi votre corps résiste à l'équilibre",
    "the_3_realities": [
      "Analyse 1 citant leur profil précis (ex: enfant 7-11 ans / adulte / senior / digestif avec l'objectif et le contexte médical)...",
      "Analyse 2 reliant explicitement leur rythme de journée aux symptômes du soir...",
      "Analyse 3 expliquant leur digestion, énergie ou métabolisme selon leur niveau d'activité..."
    ],
    "transformation_timeline": {
      "days_14": "Actions et résultats précis des 14 premiers jours...",
      "day_30": "Changements mesurables au bout d'un mois...",
      "day_90": "Stabilisation et autonomie complète..."
    },
    "whatsapp_message": "Bonjour Ines, je viens de terminer mon bilan sur votre site (Profil: [Synthèse des réponses]). Je souhaite réserver ma première consultation personnalisée."
  }
}
`;

    if (apiKey) {
      try {
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: JSON.stringify(history || []),
          config: {
            systemInstruction,
            responseMimeType: "application/json",
          },
        });

        const data = JSON.parse(response.text || "{}");
        data.generated_tap_options = data.tap_options || data.generated_tap_options || [];
        data.final_dossier = data.final_results || data.final_dossier || null;
        return NextResponse.json(data);
      } catch (e) {
        console.warn("GoogleGenAI SDK fallback to REST API:", e);
      }
    }

    // Step-by-Step Multi-Track Clinical Sequence Engine
    const historyList = history || [];
    const step = historyList.length + 1;
    const isComplete = step >= 9;

    const getAnswer = (idx: number) => (historyList[idx] ? (historyList[idx].selection || historyList[idx]) : "");

    // Detect Track from Step 1 answer or history
    const step1Ans = getAnswer(0).toString().toLowerCase();
    let track = "adult";
    if (step1Ans.includes("enfant") || step1Ans.includes("ado") || step1Ans.includes("pédiatrique")) {
      track = "pediatric";
    } else if (step1Ans.includes("senior") || step1Ans.includes("parent") || step1Ans.includes("âgé")) {
      track = "senior";
    } else if (step1Ans.includes("digestif") || step1Ans.includes("microbiote") || step1Ans.includes("côlon")) {
      track = "digestive";
    }

    if (isComplete) {
      const s1 = getAnswer(0);
      const s2 = getAnswer(1);
      const s3 = getAnswer(2);
      const s4 = getAnswer(3);
      const s5 = getAnswer(4);
      const s6 = getAnswer(5);
      const s7 = getAnswer(6);
      const s8 = getAnswer(7);

      let realities = [];
      let headline = "Analyse Personnalisée : Équilibre & Vitalité Nutritionnelle";

      if (track === "pediatric") {
        headline = "Analyse Pédiatrique : Pourquoi le rythme nutritionnel de votre enfant s'épuise";
        realities = [
          `Pour la tranche (${s2 || "Pédiatrique"}) confrontée à (${s3 || "des refus ou sélectivité"}), le rythme de repas actuels (${s4 || "goûters ou cantine"}) provoque une instabilité glycémique.`,
          `Les réactions en fin de journée (${s5 || "négociations au dîner"}) et les variations d'énergie (${s6 || "fatigue à 16h"}) sont des compensations de la faim, non des caprices.`,
          `Le confort digestif (${s7 || "ventre sensible"}) et la routine familiale (${s8 || "tensions à table"}) bénéficieront d'un rééquilibrage doux sans conflit.`
        ];
      } else if (track === "senior") {
        headline = "Analyse Senior : Préserver la masse musculaire et la vitalité au quotidien";
        realities = [
          `Pour la tranche (${s2 || "Seniors"}) avec l'objectif (${s3 || "préserver la masse musculaire & le tonus"}), le niveau d'activité (${s4 || "mobilité quotidienne"}) nécessite une densification des apports protéiques.`,
          `Le rythme alimentaire (${s5 || "assiettes plus petites"}) combiné aux traitements ou sensibilités (${s6 || "contexte médical"}) explique la baisse d'énergie d'après-midi.`,
          `Les manifestations digestives (${s7 || "pesanteur après repas"}) s'apaiseront grâce à une répartition ajustée au cours de la journée.`
        ];
      } else if (track === "digestive") {
        headline = "Analyse Microbiote & Transit : Restaurer la motilité intestinale";
        realities = [
          `Face au symptôme principal (${s2 || "ballonnements/ventre gonflé"}) présent depuis (${s3 || "plusieurs mois"}), la réaction aux aliments déclencheurs (${s4 || "fructose/FODMAPs/gluten"}) indique une hyper-sensibilité intestinale.`,
          `Le rythme des repas (${s5 || "mastication sous pression"}) associé à la baisse d'énergie (${s6 || "brouillard mental après repas"}) montre un ralentissement de la vidange gastrique.`,
          `Les tentatives passées (${s7 || "tisanes/probiotiques"}) et le niveau de stress (${s8 || "tension nerveuse au ventre"}) confirment la nécessité d'un protocole ciblé sur le microbiote.`
        ];
      } else {
        headline = "Analyse Personnalisée : Pourquoi votre corps résiste à la perte de poids";
        realities = [
          `Pour votre profil (${s2 || "Adulte"}), ciblant (${s3 || "une perte de poids globale"}) avec (${s5 || "contexte médical/hormonal"}), votre métabolisme s'est verrouillé en stockage suite à (${s6 || "vos régimes passés"}).`,
          `Votre rythme en journée (${s7 || "repas légers/sautés"}) provoque une baisse glycémique l'après-midi, déclenchant directement (${s8 || "les pulsions du soir"}).`,
          `Votre stockage localisé (${s4 || "au niveau abdominal/viscéral"}) et votre niveau d'activité nécessitent une restructuration nutritionnelle ciblée plutôt qu'une restriction.`
        ];
      }

      const finalResults = {
        headline,
        the_3_realities: realities,
        transformation_timeline: {
          days_14: "Réduction immédiate des désagréments, relance de la digestion et stabilisation de l'énergie.",
          day_30: "Résultats mesurables sur la forme et la silhouette sans faim ni fatigue.",
          day_90: "Équilibre métabolique durablement installé et liberté alimentaire totale."
        },
        whatsapp_message: `Bonjour Ines, je viens de terminer mon bilan sur votre site (Profil: ${s1} | ${s2}). Je souhaite réserver ma première consultation personnalisée.`
      };

      return NextResponse.json({
        empathy_insight: "Bilan complété.",
        dynamic_question: "",
        tap_options: [],
        generated_tap_options: [],
        current_turn: 9,
        is_complete: true,
        final_results: finalResults,
        final_dossier: finalResults
      });
    }

    // Step 1: Profile Selector
    if (step === 1) {
      return NextResponse.json({
        empathy_insight: "Bienvenue au Cabinet de Nutrition Inès Ben Abdennebi. Établissons ensemble votre bilan personnalisé.",
        dynamic_question: "Pour qui souhaitez-vous établir ce diagnostic nutritionnel ?",
        tap_options: [
          "👤 Pour Moi-Même (Adulte - Poids, énergie ou hormones)",
          "🧒 Pour Mon Enfant / Ado (Alimentation, croissance ou concentration)",
          "👵 Pour un Parent Âgé (Préservation musculaire, vitalité & santé)",
          "🌿 Pour des Soucis Digestifs (Ballonnements, côlon irritable, transit)"
        ],
        generated_tap_options: [
          "👤 Pour Moi-Même (Adulte - Poids, énergie ou hormones)",
          "🧒 Pour Mon Enfant / Ado (Alimentation, croissance ou concentration)",
          "👵 Pour un Parent Âgé (Préservation musculaire, vitalité & santé)",
          "🌿 Pour des Soucis Digestifs (Ballonnements, côlon irritable, transit)"
        ],
        current_turn: 1,
        is_complete: false,
        final_results: null,
        final_dossier: null
      });
    }

    // Dynamic Step Definitions per Track (Steps 2 to 8)
    let currentStepConfig = { empathy: "", q: "", opts: [] as string[] };

    if (track === "pediatric") {
      const pedSteps = [
        { empathy: "Chaque tranche d'âge pédiatrique possède des besoins métaboliques spécifiques.", q: "Quelle est la tranche d'âge de votre enfant ?", opts: ["Petite enfance (3 à 6 ans)", "Enfant (7 à 11 ans)", "Adolescent (12 à 17 ans)"] },
        { empathy: "Le refus d'aliments à table découle souvent d'une sensibilité sensorielle ou digestive.", q: "Quel est le défi principal au quotidien ?", opts: ["Refus de légumes & sélectivité alimentaire", "Crises d'irritabilité après l'école", "Prise de poids rapide & grignotages", "Troubles digestifs & maux de ventre"] },
        { empathy: "La qualité du déjeuner et du goûter conditionne la stabilité de l'humeur l'après-midi.", q: "Comment se déroulent ses collations en journée ?", opts: ["Ne mange presque rien à la cantine", "Goûter hyper sucré systématique", "Grignote continuellement en rentrant", "Sauts de repas & boissons sucrées"] },
        { empathy: "Le moment du dîner est un révélateur des besoins biologiques de la journée.", q: "Que se passe-t-il le soir à la maison ?", opts: ["Négociations interminables au dîner", "Demande du sucre/biscuit avant de dormir", "Refuse le repas familial préparé", "Mange trop vite et réclame de grandes portions"] },
        { empathy: "L'équilibre glycémique aide le cerveau de l'enfant à maintenir sa concentration.", q: "Avez-vous remarqué des baisses d'énergie ?", opts: ["Coup de fatigue marqué à 16h00", "Agitation suivie d'épuisement le soir", "Difficultés de concentration en classe", "Énergie stable mais poids à surveiller"] },
        { empathy: "Une digestion apaisée favorise une assimilation optimale des micronutriments de croissance.", q: "Ressent-il des inconforts physiques ?", opts: ["Ventre gonflé ou constipation régulière", "Courbe de croissance à optimiser", "Peau sensible ou fatigues fréquentes", "Aucun inconfort physique particulier"] },
        { empathy: "Devoir cuisiner séparément génère une grande charge mentale pour les parents.", q: "Quel est l'impact sur la routine familiale ?", opts: ["Préparation de 2 plats différents chaque soir", "Tensions répétées autour de la table", "Parents démunis face aux refus", "Souhait de transmettre de bonnes habitudes"] },
        { empathy: "Avec un accompagnement adapté, les enfants retrouvent très rapidement le plaisir de manger équilibré.", q: "Quel est votre objectif principal pour lui/elle ?", opts: ["Retrouver des repas familiaux sereins", "Soutenir sa croissance et son énergie", "Équilibrer le poids sans frustration", "Diversifier l'alimentation sans conflit"] }
      ];
      currentStepConfig = pedSteps[step - 2] || pedSteps[0];
    } else if (track === "senior") {
      const seniorSteps = [
        { empathy: "Préserver la force physique et la vitalité est la clé d'un bien-vieillir épanoui.", q: "Quel est sa tranche d'âge et son niveau d'autonomie ?", opts: ["60 à 70 ans (Retraite active)", "71 à 80 ans (Maintien du tonus)", "80+ ans (Vitalité & accompagnement)"] },
        { empathy: "La perte progressive de muscle (sarcopénie) peut être freinée par une nutrition ciblée.", q: "Quel est votre objectif prioritaire pour lui/elle ?", opts: ["Préserver la masse musculaire & la force", "Retrouver une énergie constante", "Optimiser la digestion & le transit", "Équilibrer diabète / tension / cholestérol"] },
        { empathy: "Le niveau de mobilité quotidienne indique la capacité de synthèse protéique du corps.", q: "Comment qualifiez-vous sa mobilité au quotidien ?", opts: ["Marche quotidienne & activité régulière", "Petit manque d'élan lors des déplacements", "Raideurs articulaires le matin", "Temps assis prolongé par fatigue"] },
        { empathy: "La baisse d'appétit avec l'âge demande de densifier la valeur nutritionnelle des repas.", q: "Comment se passent les repas habituels ?", opts: ["Assiettes de plus en plus petites par manque d'envie", "Repas très légers ou soupes le soir", "Préférence pour les douceurs l'après-midi", "Repas équilibrés mais digestion lourde"] },
        { empathy: "L'interaction entre alimentation et traitements médicamenteux nécessite une vigilance fine.", q: "Y a-t-il des éléments de santé particuliers ?", opts: ["Plusieurs traitements quotidiens à intégrer", "Suivi de tension ou glycémie", "Sensibilité estomac / reflux", "Aucun traitement particulier"] },
        { empathy: "Le confort digestif après le repas est essentiel pour maintenir l'énergie toute la journée.", q: "Que ressentez-vous après les repas ?", opts: ["Pesanteur et somnolence après déjeuner", "Reflux acide ou remontées le soir", "Transit ralenti ou ballonnements", "Sommeil haché pendant la nuit"] },
        { empathy: "Un apport micronutritionnel adapté préserve l'immunité et la souplesse articulaire.", q: "Quel est le besoin le plus ressenti ?", opts: ["Besoin de renforcer la tonicité physique", "Envie de retrouver une digestion légère", "Besoin de nutriments protecteurs", "Améliorer la qualité du sommeil"] },
        { empathy: "Des ajustements simples et savoureux redonnent un très beau tonus quotidien.", q: "Qu'attendez-vous de ce bilan nutritionnel ?", opts: ["Un programme doux et agréable au quotidien", "Des conseils simples sans privation", "Retrouver le plaisir de manger en forme", "Un suivi adapté en accord avec le médecin"] }
      ];
      currentStepConfig = seniorSteps[step - 2] || seniorSteps[0];
    } else if (track === "digestive") {
      const digSteps = [
        { empathy: "Les gênes intestinales sont les signaux d'une flore ou d'une motilité à rééquilibrer.", q: "Quel est votre symptôme digestif principal ?", opts: ["Ventre gonflé comme une enceinte dès 17h", "Ballonnements douloureux après repas", "Transit alterné (constipation / diarrhée)", "Brûlures d'estomac & reflux gastrique"] },
        { empathy: "La durée d'installation du déséquilibre permet d'adapter la profondeur du protocole.", q: "Depuis combien de temps ce trouble est-il présent ?", opts: ["Depuis quelques semaines", "Depuis 6 mois à 1 an", "Depuis plusieurs années (chronique)", "Apparu après un traitement / stress"] },
        { empathy: "Certaines familles d'aliments (FODMAPs, lactose, gluten) peuvent fermenter exagérément.", q: "Quels aliments déclenchent le plus d'inconfort ?", opts: ["Aliments riches (pain, pâtes, laitage)", "Crudités, salades & légumineuses", "Stress professionnel ou émotionnel", "Presque tout ce qui est consommé"] },
        { empathy: "Manger sous pression ou trop vite altère la première phase de la digestion enzyamatique.", q: "Comment se déroulent vos repas en semaine ?", opts: ["Repas avalés en 10 minutes sous pression", "Grignotage d'attente entre les repas", "Longues périodes à jeun puis gros repas", "Repas réguliers mais mastication rapide"] },
        { empathy: "L'axe intestin-cerveau explique pourquoi un ventre gonflé entraîne du brouillard mental.", q: "Quel est l'impact sur votre état général ?", opts: ["Brouillard mental & fatigue intense après repas", "Spasmes ou pesanteur gâchant les soirées", "Sommeil perturbé par le ventre", "Impact sur le choix des vêtements (serrés)"] },
        { empathy: "Sans prise en charge globale de la muqueuse, les solutions isolées restent temporaires.", q: "Quelles démarches avez-vous déjà tentées ?", opts: ["Tisanes & charbon sans grand effet", "Régime sans gluten ou sans lactose", "Probiotiques du commerce sans succès", "Aucune démarche ciblée effectuée"] },
        { empathy: "Le stress chronique contracte les sphincters digestifs et bloque le transit naturel.", q: "Comment évaluez-vous votre niveau de tension nerveuse ?", opts: ["Fort niveau de stress / anxiété quotidien", "Tension nerveuse localisée dans le ventre", "Sommeil non récupérateur", "Niveau de stress modéré"] },
        { empathy: "Un protocole ciblé sur la muqueuse et le microbiote permet d'apaiser durablement le ventre.", q: "Quelle est votre priorité absolue ?", opts: ["Dégonfler le ventre et retrouver un ventre plat", "Apaiser la sensibilité intestinale (FODMAPs)", "Réguler le transit et réparer le microbiote", "Retrouver la liberté de manger sans peur"] }
      ];
      currentStepConfig = digSteps[step - 2] || digSteps[0];
    } else {
      // Adult Track
      const adultSteps = [
        { empathy: "Bienvenue au Cabinet de Nutrition Inès Ben Abdennebi. Établissons votre profil clinique.", q: "Quel est votre profil biologique et votre tranche d'âge ?", opts: ["Femme (18–35 ans)", "Femme (36–50 ans)", "Femme (50+ ans)", "Homme (18–40 ans)", "Homme (40+ ans)"] },
        { empathy: "Chaque métabolisme réagit différemment selon la charge pondérale à éliminer.", q: "Quel est votre objectif de perte de poids ou de transformation ?", opts: ["Perdre 5 à 10 kg (Affiner & raffermir)", "Perdre 10 à 20 kg (Surpoids installé)", "Perdre 20 à 35 kg+ (Obésité & santé)", "Stabiliser & stopper l'effet yo-yo"] },
        { empathy: "La localisation de la masse grasse est un indicateur hormonal direct (insuline, cortisol).", q: "Où se concentre principalement votre stockage de graisse ?", opts: ["Bas du ventre & poignées d'amour", "Cuisses, hanches & bas du corps (gynoïde)", "Haut du corps, bras & poitrine", "Réparti uniformément sur tout le corps"] },
        { empathy: "Les paramètres endocriniens influencent fortement la vitesse de réponse du corps.", q: "Avez-vous une condition médicale ou un déséquilibre diagnostiqué ?", opts: ["Thyroïde (Hypo/Hashimoto) ou SOPK", "Diabète type 2, Pré-diabète ou Résistance insuline", "Post-grossesse / Allaitement récent", "Hypertension, Cholestérol ou Foie gras", "Aucun diagnostic médical particulier"] },
        { empathy: "Les régimes restrictifs répétés réduisent la dépense énergétique au repos.", q: "Quel est votre historique avec les régimes ?", opts: ["C'est ma 1ère vraie démarche clinique", "1 à 3 régimes passés avec reprise de poids", "5+ régimes stricts (métabolisme bloqué)", "Régime permanent sans aucun résultat"] },
        { empathy: "La répartition des apports en journée conditionne la saturation du soir.", q: "Comment se déroulent vos repas en journée de semaine ?", opts: ["Saute le petit-déj, déjeuner rapide/léger, faim le soir", "Plats préparés, fast-food ou sandwichs au bureau", "Grignotage continu (pain, biscuits, café sucré)", "Repas sains mais portions trop grandes"] },
        { empathy: "Les envies de fin de journée découlent d'un signal biologique de compensation du cerveau.", q: "Que se passe-t-il après 20h00 chez vous ?", opts: ["Pulsions incontrôlables de sucre/chocolat", "Mange par stress ou fatigue pour décompresser", "Ventre gonflé/tendu dès 17h00 et digestion lente", "Discipline totale mais la balance ne descend pas"] },
        { empathy: "L'activité physique quotidienne ajuste la sensibilité musculaire à l'insuline.", q: "Quel est votre niveau d'activité physique réel ?", opts: ["Sédentaire (Bureau 8h/jour, < 4000 pas)", "Activité modérée (Marche quotidienne)", "Sport 2 à 3x/semaine mais le poids stagne", "Épuisement total, aucune énergie pour bouger"] }
      ];
      currentStepConfig = adultSteps[step - 2] || adultSteps[0];
    }

    return NextResponse.json({
      empathy_insight: currentStepConfig.empathy,
      dynamic_question: currentStepConfig.q,
      tap_options: currentStepConfig.opts,
      generated_tap_options: currentStepConfig.opts,
      current_turn: step,
      is_complete: false,
      final_results: null,
      final_dossier: null
    });
  } catch (error) {
    console.error("AI Quiz Error:", error);
    return NextResponse.json({ error: "Failed to generate dynamic step" }, { status: 500 });
  }
}
