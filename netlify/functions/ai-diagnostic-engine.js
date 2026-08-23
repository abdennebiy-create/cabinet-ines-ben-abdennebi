// netlify/functions/ai-diagnostic-engine.js
// Production Netlify Serverless Function for Cabinet Inès Ben Abdennebi AI Diagnostic Engine

let GoogleGenAI;
try {
  const genaiModule = require("@google/genai");
  GoogleGenAI = genaiModule.GoogleGenAI;
} catch (e) {
  // Graceful fallback if @google/genai is not yet installed in local environment
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Fallback multi-language clinical dictionary
const FALLBACK_PROFILES = {
  ar: {
    pediatric: {
      headline: "التحليل السريري لنمو الطفل والتغذية المتوازنة",
      realities: [
        "انتقائية الطفل للطعام استجابة حسية وهضمية تتطلب توجيهاً علمياً هادئاً.",
        "استقرار السكر صباحاً يضمن تركيزاً دراسياً ممتازاً وطاقة متوازنة.",
        "تنويع الأطعمة خطوة بخطوة يبني مناعة متينة دون ضغط أو توتر."
      ],
      timeline: {
        days_14: "وجبات عائلية هادئة وتراجع التوتر أثناء الأكل.",
        day_30: "تقبل أطعمة جديدة ومفيدة وتحسن التركيز والنشاط.",
        day_90: "نمو سليم ومثالي وعلاقة صحية وإيجابية مع الطعام."
      },
      steps: [
        { empathy: "رفض الطعام عند الطفل ليس عناداً بل استجابة حسية أو هضمية خاصة.", q: "ما هو السلوك الأكثر ملاحظة أثناء وجبات طفلك؟", opts: ["🍟 رفض تام للخضار والتركيز على صنفين أو ثلاثة", "📉 تعب مفاجئ وتقلب في المزاج بعد الأكل", "🤢 شكاوى متكررة من آلام في البطن وثقل هضمي", "⚡ نشاط مفرط يليه هبوط مفاجئ في الطاقة مساءً"] },
        { empathy: "الانتقائية الغذائية ترتبط بالبيئة الهضمية والحسية للطفل.", q: "كيف تتعاملون مع الوجبات العائلية يومياً؟", opts: ["🥊 الوجبات أصبحت مصدر ضغط وتفاوض دائم", "🍲 أحضر طبقاً مخصصاً منفصلاً لطفلي", "⏳ الوجبة تستغرق أكثر من 45 دقيقة أمام الشاشات", "🤷 ننتظر أن يتحسن الوضع تلقائياً مع النمو"] },
        { empathy: "السكريات السريعة صباحاً تسبب عدم استقرار في النشاط وتراجع التركيز.", q: "ما هو هدفك الأساسي لصحة طفلك في العيادة؟", opts: ["🍏 تنويع غذائه بكل هدوء وراحة", "⚡ تحسين تركيزه ونشاطه اليومي", "📈 مرافقة نموه السليم وقوته العضلية", "🌿 تهدئة آلام البطن وانتظام الهضم"] }
      ]
    },
    weight: {
      headline: "إعادة التوازن الأيضي وخسارة الوزن المستدامة",
      realities: [
        "الأعراض الصحية ناتجة عن بطء الحرق بسبب الحميات السابقة وليس قلة إرادة.",
        "الرغبة في السكر هي إشارة بيولوجية لحاجة الجسم لمغذيات كافية نهاراً.",
        "خسارة الدهون الدائمة تتطلب ضبط الهرمونات الطبيعية بدون أي حرمان."
      ],
      timeline: {
        days_14: "تراجع الالتهاب، نهاية نوبات الشراهة واستعادة الحيوية الصباحية.",
        day_30: "شعور عام بالخفة وبداية نزول الدهون بأمان.",
        day_90: "توازن أيضي دائم وعلاقة مريحة وسليمة مع الطعام."
      },
      steps: [
        { empathy: "زيادة الوزن ليست نقصاً في الإرادة، بل بطء في معدل الحرق وتخزين بيولوجي للدهون.", q: "ما هو التحدي الأكبر الذي واجهته في محاولاتك السابقة لخسارة الوزن؟", opts: ["🔄 استعادة الوزن المفقود بسرعة (تأثير اليويو)", "🥗 الإحباط من الحميات القاسية وحساب السعرات", "🍫 نوبات الشراهة والرغبة في السكريات مساءً", "⚖️ ثبات الميزان تماماً رغم تقليل الأكل والجهد"] },
        { empathy: "التوازن الغذائي الصحيح يجب أن يتماشى مع نمط حياتك اليومي دون تعقيد.", q: "كيف تصف نمط حياتك ونشاطك اليومي؟", opts: ["🏃 نشيط ومتوتر: أتناول وجبات سريعة وعلى عجل", "💻 خامل (عمل مكتبي، قلة النشاط البدني)", "⏳ أوقات غير منتظمة: أتخطى وجبات وأتعشى متأخراً", "🧘 نمط عادي، لكن ينقصني التنظيم في المطبخ"] },
        { empathy: "إيناس ستعيد برمجة وتنشيط حرق الدهون لديك بطريقة طبيعية ومستدامة.", q: "ما هي النتيجة المثالية التي ترغب في تحقيقها خلال 3 أشهر؟", opts: ["👗 الوصول لوزني المثالي وثباته على المدى الطويل", "⚡ نحت القوام واستعادة حيويتي ونشاطي", "🧘 تناول الطعام براحة واستمتاع دون حرمان أو ذنب", "💪 الحفاظ على الكتلة العضلية وخسارة الدهون الصافية"] }
      ]
    },
    medical: {
      headline: "بروتوكول التغذية العلاجية والتوازن الهرموني",
      realities: [
        "الأعراض (التعب، زيادة الوزن) ناتجة عن الاضطراب الهرموني وليست نقصاً في الإرادة.",
        "الحميات القاسية تؤدي لزيادة مقاومة الأنسولين واضطراب الغدة والتمثيل الغذائي.",
        "التغذية السريرية الموجهة تضبط التحاليل المخبرية وتستعيد الراحة البدنية والحيوية."
      ],
      timeline: {
        days_14: "تراجع الالتهاب واستقرار مستويات السكر والنشاط الصباحي.",
        day_30: "تحسن ملحوظ في المؤشرات الحيوية والشعور بالراحة والخفة.",
        day_90: "توازن أيضي وهرموني دائم واستقرار تام للمؤشرات الصحية."
      },
      steps: [
        { empathy: "التغذية العلاجية السريرية هي الركيزة الأساسية للسيطرة على حالتك الصحية.", q: "ما هي الحالة الصحية التي تحتاج لمتابعة دقيقة اليوم؟", opts: ["🦋 اضطراب هرموني: تكيس مبايض، خمول غدة درقية، بطانة الرحم", "🩸 اضطراب أيضي: السكري، مقاومة الأنسولين، ما قبل السكري", "🫀 صحة القلب والشرايين: الكوليسترول، الضغط، الكبد الدهني", "👩‍⚕️ حالة صحية أخرى تتطلب نظاماً غذائياً علاجياً"] },
        { empathy: "هذه الحالات تسبب تفاعلات متسلسلة في الجسم يمكن تهدئتها غذائياً.", q: "ما هو العَرَض الأكثر إزعاجاً لك في حياتك اليومية؟", opts: ["😴 إرهاق مزمن وهبوط مفاجئ في الطاقة بعد الوجبات", "📈 زيادة وزن غير مبررة أو صعوبة شديدة في نزول الوزن", "🩺 تحاليل مخبرية غير منتظمة أحتاج لضبطها", "🔥 آلام والتهابات أو عدم انتظام في الدورة الشهرية"] },
        { empathy: "سنقوم بتعديل مدخولك الغذائي بما يريح أعضاءك ويضبط الهرمونات.", q: "ما هو هدفك الأساسي من هذه المتابعة السريرية بالعيادة؟", opts: ["🛡️ تحسين المؤشرات المخبرية بأسلوب غذائي علمي", "✨ تهدئة الأعراض واستعادة حيوية وطاقة مستقرة", "🍏 تعلم التغذية المناسبة لحالتي بدون حرمان", "⚖️ التوفيق بين علاج حالتي الصحية وخسارة الوزن الزائد"] }
      ]
    },
    digestive: {
      headline: "البروتوكول السريري لراحة القولون وترميم الميكروبيوم",
      realities: [
        "الانتفاخ المسائي ناتج عن فرط تخمر سكريات محددة (FODMAP) وليس زيادة دهون.",
        "تهيج بطانة الأمعاء يسبب خمولاً وإرهاقاً عاماً عبر محور الأمعاء والدماغ.",
        "إعادة التوازن البكتيري تتم بخطة تدريجية واضحة دون حرمان غذائي دائم."
      ],
      timeline: {
        days_14: "بطن مستوٍ ومريح طوال اليوم واختفاء آلام القولون والغازات.",
        day_30: "استعادة تحمل الجهاز الهضمي والبدء في تنويع الأطعمة بأمان.",
        day_90: "ميكروبيوم معوي قوي، هضم هادئ وطاقة ممتازة بعد الوجبات."
      },
      steps: [
        { empathy: "الانتفاخ والغازات وآلام القولون ليست أمراً حتمياً، بل علامة على اختلال بكتيريا الأمعاء وفرط التخمر.", q: "ما هي الأعراض الهضمية الأكثر إزعاجاً لك يومياً؟", opts: ["🎈 بطن مستوٍ صباحاً، منتفخ ومؤلم في المساء", "🔄 متلازمة القولون العصبي (تقلب بين الإمساك والإسهال)", "🔥 حرقة المعدة، الارتجاع أو بطء شديد في الهضم", "🍞 انزعاج شديد بعد الخبز أو مشتقات الحليب أو الخضار النيئة"] },
        { empathy: "محور الأمعاء والدماغ يتفاعل بقوة مع التوتر عبر العصب المبهم مسبباً تقلصات معوية.", q: "كيف يؤثر التوتر وضغوط الحياة على جهازك الهضمي؟", opts: ["⚡ أي توتر أو ضغط يسبب لي تقلصات أو مغصاً فورياً", "⏳ أتناول طعامي بسرعة وتحت ضغط الوقت في العمل", "😴 الانزعاج الهضمي والانتفاخ يؤثران سلباً على نومي", "🧘 لا أشعر بتأثير التوتر، المشكلة تبدو مرتبطة بنوعية الطعام فقط"] },
        { empathy: "بروتوكول إعادة تأهيل الجهاز الهضمي والـ FODMAP العلمي يعيد ترميم بطانة الأمعاء وتوازن الميكروبيوم.", q: "ما هي أولويتك القصوى عند بدء المتابعة في العيادة؟", opts: ["🌿 بطن مريح وخفيف طوال اليوم بدون انتفاخات", "🍎 إعادة تنويع الأطعمة في غذائي دون خوف من الأزمات", "⚡ استعادة النشاط والطاقة بعد الوجبات بدون خمول", "🛡️ تشخيص دقيق وخطة علاجية تغذوية واضحة ومستدامة"] }
      ]
    }
  },
  fr: {
    pediatric: {
      headline: "Accompagnement Nutritionnel & Croissance Sereine",
      realities: [
        "La sélectivité alimentaire chez l'enfant est une sensibilité sensorielle et enzymatique réversible avec une guidance bienveillante.",
        "Les pics glycémiques matinaux perturbent l'attention scolaire et favorisent les coups de fatigue en fin d'après-midi.",
        "La diversification progressive renforce la diversité du microbiote pédiatrique sans confrontation."
      ],
      timeline: {
        days_14: "Repas familiaux plus sereins et fin des crises de négociation à table.",
        day_30: "Acceptation de nouveaux aliments sains et stabilité de l'énergie scolaire.",
        day_90: "Courbe de croissance harmonieuse et relation positive durable avec l'alimentation."
      },
      steps: [
        { empathy: "Le refus alimentaire chez l'enfant n'est pas un caprice: c'est une réaction de défense sensorielle ou digestive biochimique.", q: "Quel comportement observez-vous le plus fréquemment lors des repas ?", opts: ["🍟 Rejet strict des légumes et fixation sur 2 ou 3 aliments", "📉 Fatigue soudaine et irritabilité 30 min après avoir mangé", "🤢 Plaintes fréquentes de maux de ventre ou digestion lourde", "⚡ Agitation intense suivie d'un coup de fatigue le soir"] },
        { empathy: "La sélectivité sensorielle est liée à une sensibilité olfactive et à une flore intestinale spécifique chez l'enfant.", q: "Comment gérez-vous les repas en famille au quotidien ?", opts: ["🥊 Les repas sont devenus une source de négociation et de stress", "🍲 Je prépare un plat séparé spécialement pour mon enfant", "⏳ Les repas durent plus de 45 minutes avec distraction écran", "🤷 On laisse faire en espérant que ça passe avec la croissance"] },
        { empathy: "Le microbiote pédiatrique se rééduque par des micro-stimulations ludiques sans forcer le bras.", q: "Quel est votre objectif prioritaire pour la santé de votre enfant ?", opts: ["🍏 Diversifier son alimentation en toute sérénité", "⚡ Améliorer sa concentration et apaiser son énergie", "📈 Accompagner sa courbe de croissance et son tonus", "🌿 Apaiser ses douleurs de ventre et réguler son transit"] }
      ]
    },
    weight: {
      headline: "Rééquilibrage Métabolique & Perte de Poids Durable",
      realities: [
        "Votre métabolisme s'est ralenti (mode survie) à cause des restrictions passées.",
        "Les fringales sont un signal biologique de manque de nutriments pendant la journée.",
        "La perte de masse grasse durable nécessite d'équilibrer vos hormones sans aucune privation."
      ],
      timeline: {
        days_14: "Baisse de l'inflammation, fin des fringales et regain d'énergie.",
        day_30: "Sensation de légèreté et amorce de la perte de masse grasse.",
        day_90: "Normalisation métabolique durable et relation apaisée avec l'alimentation."
      },
      steps: [
        { empathy: "La prise de poids n'est pas un manque de volonté, c'est un blocage métabolique.", q: "Qu'est-ce qui vous a le plus bloqué(e) dans vos précédentes tentatives ?", opts: ["🔄 L'effet Yo-Yo : je reprends toujours les kilos perdus", "🥗 La frustration des régimes stricts et du comptage de calories", "🍫 Les fringales incontrôlables et les envies de sucre le soir", "⚖️ Le métabolisme lent : la balance refuse de bouger malgré mes efforts"] },
        { empathy: "Un bon équilibre alimentaire doit s'adapter à votre rythme.", q: "Comment décririez-vous votre mode de vie ?", opts: ["🏃‍♀️ Très actif et stressé(e) : je mange souvent vite ou sur le pouce", "💻 Plutôt sédentaire (travail de bureau, manque d'activité physique)", "⏳ Horaires décalés : je saute des repas et dîne très tard", "🧘‍♀️ Rythme classique, mais je manque d'organisation en cuisine"] },
        { empathy: "Inès va rééquilibrer votre assiette pour relancer la perte de graisse.", q: "Quel serait le résultat idéal pour vous d'ici 3 mois ?", opts: ["👗 Atteindre mon poids de forme de manière durable", "⚡ Affiner ma silhouette tout en retrouvant mon énergie", "🧘‍♀️ Manger sereinement sans culpabilité ni frustration", "💪 Conserver ma masse musculaire tout en perdant de la graisse"] }
      ]
    },
    medical: {
      headline: "Protocole Nutritionnel Thérapeutique & Équilibre Hormonal",
      realities: [
        "Vos symptômes (fatigue, prise de poids) sont la conséquence directe de votre pathologie, pas d'un manque de volonté.",
        "Les régimes restrictifs classiques aggravent souvent les déséquilibres hormonaux et la résistance à l'insuline.",
        "Une nutrition clinique ciblée permet de réguler vos biomarqueurs sanguins et de retrouver un vrai confort de vie."
      ],
      timeline: {
        days_14: "Baisse de l'inflammation, stabilisation de la glycémie et regain d'énergie.",
        day_30: "Amélioration des biomarqueurs sanguins et sensation de légèreté corporelle.",
        day_90: "Normalisation métabolique durable, vitalité stable et équilibre alimentaire serein."
      },
      steps: [
        { empathy: "La nutrition clinique est essentielle pour apaiser vos troubles.", q: "Quelle pathologie nécessite un accompagnement aujourd'hui ?", opts: ["🦋 Troubles Hormonaux : SOPK, Thyroïde, Endométriose", "🩸 Troubles Métaboliques : Diabète, Pré-diabète, Résistance à l'insuline", "🫀 Santé Cardiovasculaire : Cholestérol, Hypertension, Foie gras", "👩‍⚕️ Autre pathologie nécessitant une alimentation thérapeutique"] },
        { empathy: "Ces pathologies entraînent souvent des réactions en chaîne dans le corps.", q: "Quel est le symptôme qui vous gêne le plus au quotidien ?", opts: ["😴 Une fatigue chronique et des baisses d'énergie intenses", "📈 Une prise de poids inexpliquée ou impossible à perdre", "🩺 Des bilans sanguins perturbés que je dois stabiliser", "🔥 Des douleurs, de l'inflammation ou des cycles très irréguliers"] },
        { empathy: "Nous allons adapter vos apports pour soulager votre métabolisme.", q: "Quel est votre objectif prioritaire avec ce suivi clinique ?", opts: ["🛡️ Réguler mes bilans médicaux sans médicaments superflus", "✨ Apaiser mes symptômes et retrouver une vitalité stable", "🍏 Apprendre à manger selon ma maladie sans me priver", "⚖️ Associer la gestion de ma pathologie à une perte de poids"] }
      ]
    },
    digestive: {
      headline: "Protocole de Réparation du Microbiote & Confort Intestinal",
      realities: [
        "Vos ballonnements du soir sont provoqués par une fermentation excessive de sucres spécifiques (FODMAPs), et non par de la graisse.",
        "L'irritation de la muqueuse intestinale envoie des signaux de fatigue directe au système nerveux central via l'axe intestin-cerveau.",
        "Une réintroduction méthodique des aliments permet de restaurer votre microbiote sans restriction permanente."
      ],
      timeline: {
        days_14: "Ventre plat et apaisé du matin au soir, disparition des spasmes et crampes.",
        day_30: "Tolérance digestive restaurée et réintroduction progressive des aliments clés.",
        day_90: "Microbiote résilient, digestion silencieuse et énergie constante après les repas."
      },
      steps: [
        { empathy: "Les ballonnements et spasmes intestinaux ne sont pas une fatalité: ils signalent une dysbiose ou une fermentation excessive.", q: "Quels symptômes digestifs perturbent le plus votre quotidien ?", opts: ["🎈 Ventre plat le matin, ballonné et douloureux le soir", "🔄 Alternance constipation / selles molles et inconfort (IBS)", "🔥 Reflux gastrique, acidité ou digestion très lente", "🍞 Réaction inflammatoire après le pain, produits laitiers ou crudités"] },
        { empathy: "L'axe intestin-cerveau réagit intensément au stress via le nerf vague, provoquant des spasmes.", q: "Comment le stress et votre rythme de vie influencent-ils votre ventre ?", opts: ["⚡ Le stress déclenche immédiatement des crampes ou urgences", "⏳ Je mange trop vite sous pression au travail", "😴 Mon inconfort digestif perturbe la qualité de mon sommeil", "🧘 Pas d'impact direct du stress, le problème est purement alimentaire"] },
        { empathy: "Le protocole de réhabilitation digestive (FODMAP clinique) répare la muqueuse et rééquilibre le microbiote.", q: "Quel résultat attendez-vous en priorité de votre prise en charge ?", opts: ["🌿 Un ventre plat et apaisé du matin au soir sans douleur", "🍎 Réintroduire une grande variété d'aliments en toute sécurité", "⚡ Retrouver mon énergie sans sensation de lourdeur après les repas", "🛡️ Un diagnostic clair et un protocole clinique structuré"] }
      ]
    }
  }
};

function generateFallbackResponse(payload) {
  const lang = (payload && payload.lang) || 'fr';
  const historyList = (payload && payload.history) || [];
  const turn = (payload && payload.turn) ? Number(payload.turn) + 1 : historyList.length + 1;
  const isComplete = turn >= 5;

  const langKey = FALLBACK_PROFILES[lang] ? lang : 'fr';
  const track = (payload && payload.track) || 'weight';
  const profileData = FALLBACK_PROFILES[langKey][track] || FALLBACK_PROFILES[langKey]['weight'] || FALLBACK_PROFILES['fr']['weight'];

  if (isComplete) {
    const waMsg = lang === 'ar'
      ? "مرحباً أستاذة إيناس، لقد أتممت التقييم الغذائي على موقعك وأود حجز موعد استشارة مخصصة في عيادة رادس."
      : "Bonjour Ines, je viens de terminer mon bilan sur votre site. Je souhaite réserver ma première consultation personnalisée au cabinet de Radès.";

    return {
      empathy_insight: lang === 'ar' ? "تم إتمام التقييم السريري بنجاح." : "Bilan clinique complété avec succès.",
      dynamic_question: "",
      tap_options: [],
      generated_tap_options: [],
      current_turn: 5,
      is_complete: true,
      final_results: {
        headline: profileData.headline,
        the_3_realities: profileData.realities,
        transformation_timeline: profileData.timeline,
        whatsapp_message: waMsg,
        whatsapp_message_encoded: waMsg
      },
      final_dossier: {
        headline: profileData.headline,
        the_3_realities: profileData.realities,
        transformation_timeline: profileData.timeline,
        whatsapp_message: waMsg,
        whatsapp_message_encoded: waMsg
      }
    };
  }

  const stepIdx = Math.min(Math.max(0, turn - 2), profileData.steps.length - 1);
  const stepConfig = profileData.steps[stepIdx] || profileData.steps[0];

  return {
    empathy_insight: stepConfig.empathy,
    dynamic_question: stepConfig.q,
    tap_options: stepConfig.opts,
    generated_tap_options: stepConfig.opts,
    current_turn: turn,
    is_complete: false,
    final_results: null,
    final_dossier: null
  };
}

exports.handler = async (event, context) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: ""
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: corsHeaders,
      body: JSON.stringify({ error: "Method Not Allowed" })
    };
  }

  let payload = {};
  try {
    payload = event.body ? JSON.parse(event.body) : {};
  } catch (e) {
    payload = {};
  }

  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  const lang = payload.lang || "fr";
  const currentTurn = Number(payload.turn || 1) + 1;
  const isFinalStep = currentTurn >= 9 || (payload.history && payload.history.length >= 8);

  const systemInstruction = `
You are an expert Clinical Nutritionist at Cabinet Inès Ben Abdennebi in Radès (Tunisia).
Conduct a multi-profile clinical intake diagnostic supporting ADULTS, CHILDREN/TEENS, SENIORS, and DIGESTIVE HEALTH.

RULES:
1. Speak in warm, empathetic, authoritative ${lang === 'ar' ? 'Arabic (Tunisian/Standard friendly Arabic)' : lang === 'es' ? 'Spanish' : lang === 'en' ? 'English' : 'French'}.
2. Maintain the target profile selected in Step 1.
3. NEVER output generic bullet points. Every observation in the final result must reference the patient's specific profile and previous answers.
4. Keep the user on a tap-only track with 3-4 punchy, realistic tap options.
5. Conduct 9 steps. When history length reaches 8 or 9 (or isFinalStep is true), set "is_complete": true and generate the comprehensive final dossier.

OUTPUT STRICT JSON ONLY MATCHING THIS SCHEMA:
{
  "empathy_insight": "1 phrase explicative reliant leur choix à leur métabolisme...",
  "dynamic_question": "La prochaine question clinique précise...",
  "tap_options": ["Option A", "Option B", "Option C", "Option D"],
  "current_turn": ${currentTurn},
  "is_complete": ${isFinalStep ? 'true' : 'false'},
  "final_results": ${isFinalStep ? `{
    "headline": "Titre clair et percutant...",
    "the_3_realities": ["Réalité 1...", "Réalité 2...", "Réalité 3..."],
    "transformation_timeline": {
      "days_14": "14 premiers jours...",
      "day_30": "Au bout d'1 mois...",
      "day_90": "Stabilisation à 90 jours..."
    },
    "whatsapp_message": "Bonjour Ines, je viens de terminer mon bilan..."
  }` : 'null'}
}
`;

  // 1. Attempt using official @google/genai SDK if present and configured
  if (apiKey && GoogleGenAI) {
    try {
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: JSON.stringify(payload.history || payload),
        config: {
          systemInstruction,
          responseMimeType: "application/json",
        },
      });

      const responseText = response.text || (response.candidates && response.candidates[0]?.content?.parts[0]?.text);
      if (responseText) {
        const parsed = JSON.parse(responseText);
        parsed.generated_tap_options = parsed.tap_options || parsed.generated_tap_options || [];
        parsed.final_dossier = parsed.final_results || parsed.final_dossier || null;
        return {
          statusCode: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          body: JSON.stringify(parsed)
        };
      }
    } catch (sdkError) {
      console.warn("@google/genai SDK attempt failed, trying direct REST API...", sdkError.message);
    }
  }

  // 2. Attempt direct Google Gemini REST API call as resilient fallback
  if (apiKey) {
    try {
      const modelName = "gemini-2.5-flash";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;
      const restRes = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{
            parts: [
              { text: systemInstruction },
              { text: `Patient History & Context: ${JSON.stringify(payload)}` }
            ]
          }],
          generationConfig: {
            response_mime_type: "application/json",
            temperature: 0.7
          }
        })
      });

      if (restRes.ok) {
        const data = await restRes.json();
        const rawPart = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (rawPart) {
          const parsed = JSON.parse(rawPart);
          parsed.generated_tap_options = parsed.tap_options || parsed.generated_tap_options || [];
          parsed.final_dossier = parsed.final_results || parsed.final_dossier || null;
          return {
            statusCode: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            body: JSON.stringify(parsed)
          };
        }
      }
    } catch (restError) {
      console.warn("Direct Gemini REST call failed, using clinical fallback engine:", restError.message);
    }
  }

  // 3. Guaranteed local clinical fallback response (supports FR, AR, EN, ES)
  const fallback = generateFallbackResponse(payload);
  return {
    statusCode: 200,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    body: JSON.stringify(fallback)
  };
};
