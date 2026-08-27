import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

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
    },
    senior: {
      headline: "بروتوكول الحفاظ على القوة والنشاط لكبار السن",
      realities: [
        "الحفاظ على الكتلة العضلية (الوقاية من ضمور العضلات) هو مفتاح الشيخوخة النشطة.",
        "نقص الشهية الطبيعي يتطلب وجبات أكثر غنى بالمواد المغذية دون إثقال الهضم.",
        "الترطيب المستهدف والمغذيات الواقية تعزز النشاط اليومي ومرونة المفاصل."
      ],
      timeline: {
        days_14: "تحسن الحركة اليومية والهضم بعد الوجبات.",
        day_30: "استعادة القوة العضلية، نوم أكثر عمقاً وهضم منتظم.",
        day_90: "استعادة الحيوية بالكامل، تقوية المناعة والحفاظ الدائم على الاستقلالية."
      },
      steps: [
        { empathy: "الحفاظ على القوة البدنية يضمن حياة نشطة ومستقلة لكبار السن.", q: "ما هو الهدف الأهم لصحتهم ونشاطهم اليوم؟", opts: ["💪 الحفاظ على الكتلة العضلية والقوة البدنية", "⚡ استعادة الطاقة والنشاط طوال اليوم", "🌿 تحسين الهضم وانتظام العبور المعوي", "🩺 ضبط المؤشرات الحيوية (الضغط، السكر، الكوليسترول)"] },
        { empathy: "تراجع الشعور بالعطش وبطء الهضم يضعفان النشاط البدني العام.", q: "ما هي الصعوبة الأكثر وضوحاً في روتينهم؟", opts: ["🍲 قلة كمية الطعام في الوجبات لنقص الشهية", "💧 قلة شرب الماء والسوائل خلال اليوم", "😴 خمول ونعاس شديد بعد تناول الطعام", "🚶 صعوبة أو ثقل خفيف أثناء المشي والحركة"] },
        { empathy: "تعديلات غذائية بسيطة وشهية تعيد بناء الحيوية اليومية بامتياز.", q: "ما الذي تنتظره بشكل أساسي من هذه المتابعة السريرية؟", opts: ["📋 برنامج سهل ومرن دون حرمان أو تعقيد", "🛡️ نصائح غذائية آمنة تتوافق مع الأدوية اليومية", "🍏 استعادة متعة تناول وجبات صحية وشهية", "🤝 خطة غذائية متوازنة بالتنسيق مع الطبيب المعالج"] }
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
    },
    senior: {
      headline: "Préservation de la Force & Vitalité du Senior",
      realities: [
        "Le maintien de la masse musculaire (prévention de la sarcopénie) est la clé d'un bien-vieillir actif.",
        "La baisse d'appétit naturelle nécessite de densifier les apports nutritionnels sans alourdir la digestion.",
        "Une hydratation ciblée et des nutriments protecteurs renforcent le tonus et la souplesse articulaire."
      ],
      timeline: {
        days_14: "Meilleur confort après les repas et élan physique retrouvé en matinée.",
        day_30: "Regain de force musculaire, sommeil plus réparateur et digestion fluide.",
        day_90: "Vitalité restaurée, immunité renforcée et préservation durable de l'autonomie."
      },
      steps: [
        { empathy: "Préserver sa force et son tonus permet de vivre une retraite active et épanouie.", q: "Quel est l'objectif prioritaire pour sa forme aujourd'hui ?", opts: ["💪 Préserver la force physique et la masse musculaire", "⚡ Retrouver une énergie constante en journée", "🌿 Améliorer le confort digestif et le transit", "🩺 Réguler des paramètres (tension, sucre, cholestérol)"] },
        { empathy: "La baisse de sensibilité à la soif et la digestion lourde affaiblissent le tonus physique.", q: "Quelles difficultés observez-vous le plus ?", opts: ["🍲 Assiettes de plus en plus petites par manque d'appétit", "💧 Hydratation insuffisante en journée (oublie de boire)", "😴 Pesanteur et somnolence marquée après le repas", "🚶 Légère baisse d'entrain lors des déplacements"] },
        { empathy: "Des ajustements simples et savoureux redonnent un très beau dynamisme quotidien.", q: "Qu'attendez-vous principalement de son suivi clinique ?", opts: ["📋 Un programme agréable et facile à suivre sans privation", "🛡️ Des conseils protecteurs adaptés à ses traitements", "🍏 Redécouvrir le plaisir de manger équilibré", "🤝 Un accompagnement doux en accord avec son médecin"] }
      ]
    }
  }
};

function generateFallbackResponse(payload) {
  const lang = (payload && payload.lang) || "fr";
  const historyList = (payload && payload.history) || [];
  const turn = (payload && payload.turn) ? Number(payload.turn) + 1 : historyList.length + 1;
  const isComplete = turn >= 5;

  const langKey = FALLBACK_PROFILES[lang] ? lang : "fr";
  let track = (payload && payload.track) || "weight";
  if (payload && payload.target === 'enfant') {
    track = 'pediatric';
  } else if (payload && payload.target === 'parent') {
    track = 'senior';
  }
  const profileData = FALLBACK_PROFILES[langKey][track] || FALLBACK_PROFILES[langKey]["weight"] || FALLBACK_PROFILES["fr"]["weight"];

  if (isComplete) {
    const waMsg = lang === "ar"
      ? "مرحباً أستاذة إيناس، لقد أتممت التقييم الغذائي على موقعك وأود حجز موعد استشارة مخصصة في عيادة رادس."
      : "Bonjour Inès, je viens de terminer mon bilan sur votre site. Je souhaite réserver ma première consultation personnalisée au cabinet de Radès.";

    return {
      empathy_insight: lang === "ar" ? "تم إتمام التقييم السريري بنجاح." : "Bilan clinique complété avec succès.",
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

// AI Final Personalized Dossier Generation Handler
async function handleAIAnalyzeDossier(req, res) {
  const payload = req.body || {};
  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  const lang = payload.lang || "fr";
  const target = payload.target || "moi";
  const profileAnswer = payload.profileAnswer || "";
  const selectedConditions = Array.isArray(payload.selectedConditions) ? payload.selectedConditions.join(", ") : (payload.selectedConditions || "Bilan général");
  const weightGoal = payload.weightGoal || "";
  const history = Array.isArray(payload.history) ? payload.history : [];

  let historySummary = "";
  history.forEach(item => {
    historySummary += `- Étape ${item.turn}: Question posée: "${item.question || ''}" -> Réponse choisie: "${item.selection || ''}"\n`;
  });

  const languageName = lang === "ar" ? "Arabic" : lang === "es" ? "Spanish" : lang === "en" ? "English" : "French";
  const langKey = FALLBACK_PROFILES[lang] ? lang : "fr";
  const track = payload.track || "weight";

  const systemInstruction = `
You are Inès Ben Abdennebi, an expert, certified Clinical Nutritionist and Dietitian at Cabinet de Nutrition Inès Ben Abdennebi in Radès (Tunisia).
Your task is to analyze the patient's answers from the clinical assessment quiz and generate an authoritative, highly personalized, direct, empathetic, and scientifically grounded clinical assessment dossier ("Dossier Clinique Personnalisé").

CONSTRAINTS & RULES:
1. Speak in ${languageName} with a warm, caring, yet expert clinical medical authority.
2. Address the person directly:
   - If target is 'moi' (Adult): address the patient as 'vous' (or direct Arabic/English/Spanish address).
   - If target is 'enfant' (Child/Adolescent): address the parent concerning their child/teenager with tailored pediatric advice.
   - If target is 'parent' (Senior): address the caregiver/family member or senior with gentle, protective geriatric advice.
3. Be EXTREMELY DIRECT, personalized, and specific to the exact conditions and answers they chose (e.g. insulin resistance, PCOS, thyroid, gut dysbiosis, picky eating, child obesity, sarcopenia, senior diabetes, etc.).
4. Do NOT give generic filler advice. Explain the exact biological mechanism (e.g. why blood sugar spikes cause evening binge eating, or why lack of protein leads to muscle loss after 65) and provide a concrete action roadmap.
5. Return STRICT JSON ONLY adhering to the following JSON schema:
{
  "headline": "A punchy, accurate clinical diagnosis title tailored to their profile (e.g., 'Profil Métabolique & Résistance à l'Insuline : Protocole de Rééquilibrage Cellulaire')",
  "target_profile_summary": "1-sentence summary of their identified metabolic/nutritional profile",
  "priority_focus": "The #1 clinical priority to address first based on their specific answers",
  "the_3_realities": [
    "Biological Reality 1: Direct explanation of what is happening inside their body...",
    "Biological Reality 2: Why past approaches didn't work and what needs biochemical correction...",
    "Biological Reality 3: The key physiological lever that will unlock their progress..."
  ],
  "transformation_timeline": {
    "days_14": "Concrete clinical milestones expected within 14 days...",
    "day_30": "Metabolic consolidation and visible changes expected by day 30...",
    "day_90": "Long-term stabilization and clinical autonomy by day 90..."
  },
  "personalized_dietary_keys": [
    { "type": "prioritize", "title": "Aliment/Nutriment Clé", "desc": "Ce qu'il faut privilégier précisément..." },
    { "type": "avoid", "title": "Erreur/Aliment à Éviter", "desc": "Ce qui entretient l'inflammation ou le blocage..." },
    { "type": "timing", "title": "Rythme & Habitude", "desc": "Le conseil de chrono-nutrition ou d'organisation idéal..." }
  ],
  "direct_note_from_ines": "A personalized, empathetic 2-3 sentence note from Inès Ben Abdennebi addressing them directly.",
  "whatsapp_message": "Structured text summary for WhatsApp booking"
}
`;

  if (apiKey) {
    try {
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: { headers: { 'User-Agent': 'aistudio-build' } }
      });
      const prompt = `
PATIENT CLINICAL ANAMNESIS DATA:
- Target: ${target} (${target === 'enfant' ? 'Pédiatrique / Adolescent' : target === 'parent' ? 'Senior / Gériatrique' : 'Adulte'})
- Profile/Age/Sex: ${profileAnswer}
- Selected Pathologies/Conditions: ${selectedConditions}
- Weight & Health Goal: ${weightGoal}

DETAILED QUIZ RESPONSES:
${historySummary}

Language requested: ${languageName} (${lang}).

Generate the full personalized clinical assessment JSON now.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          systemInstruction,
          responseMimeType: "application/json",
        },
      });

      const responseText = response.text || (response.candidates && response.candidates[0]?.content?.parts[0]?.text);
      if (responseText) {
        const parsed = JSON.parse(responseText);
        return res.json({ success: true, is_ai_generated: true, ...parsed });
      }
    } catch (err) {
      console.warn("AI Dossier generation error, falling back to rule engine:", err.message);
    }
  }

  // Fallback to static rule engine if API key missing or error
  let profileData = FALLBACK_PROFILES["fr"]["weight"];
  if (FALLBACK_PROFILES[langKey] && FALLBACK_PROFILES[langKey][track]) {
    profileData = FALLBACK_PROFILES[langKey][track];
  } else if (FALLBACK_PROFILES[langKey] && FALLBACK_PROFILES[langKey]["weight"]) {
    profileData = FALLBACK_PROFILES[langKey]["weight"];
  }

  const waMsg = lang === "ar"
    ? "مرحباً أستاذة إيناس، لقد أتممت التقييم الغذائي على موقعك وأود حجز موعد استشارة مخصصة في عيادة رادس."
    : "Bonjour Inès, je viens de terminer mon bilan sur votre site. Je souhaite réserver ma première consultation personnalisée au cabinet de Radès.";

  return res.json({
    success: true,
    is_ai_generated: false,
    headline: profileData.headline,
    target_profile_summary: selectedConditions,
    priority_focus: "Rééquilibrage métabolique et nutritionnel ciblé",
    the_3_realities: profileData.realities,
    transformation_timeline: profileData.timeline,
    personalized_dietary_keys: [
      { type: "prioritize", title: "Protéines & Fibres", desc: "Densifier les micronutriments protecteurs et stabiliser la glycémie." },
      { type: "avoid", title: "Sucres isolés & Produits ultra-transformés", desc: "Limiter les pics d'insuline qui favorisent le stockage et la fatigue." },
      { type: "timing", title: "Hydratation & Régularité", desc: "Structurer les prises alimentaires sans grignotage." }
    ],
    direct_note_from_ines: "Votre profil montre un vrai potentiel de rééquilibrage. Je serai ravie de vous accompagner au cabinet de Radès.",
    whatsapp_message: waMsg
  });
}

// AI Diagnostic Engine Route Handler
async function handleAIDiagnostic(req, res) {
  const payload = req.body || {};
  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  const lang = payload.lang || "fr";
  const currentTurn = Number(payload.turn || 1) + 1;
  const isFinalStep = currentTurn >= 9 || (payload.history && payload.history.length >= 8);

  const systemInstruction = `
You are an expert Clinical Nutritionist at Cabinet Inès Ben Abdennebi in Radès (Tunisia).
Conduct an intelligent, fully adaptive clinical intake diagnostic to build a personalized patient file ("Dossier Patient Clinique").

CONVERSATION FLOW:
- Step 1: Target/Profile selection (Adult, Pediatric, Senior, Digestive, etc.).
- Steps 2-8: Dynamic, highly empathetic clinical intake. Ask one focused question and provide 3-4 realistic tap options.
- Step 9: Conclude. Mark "is_complete": true and provide the comprehensive final dossier with biological insights and transformation timeline.

RULES:
1. Speak in warm, empathetic, authoritative ${lang === "ar" ? "Arabic" : lang === "es" ? "Spanish" : lang === "en" ? "English" : "French"}.
2. Output STRICT JSON ONLY matching:
{
  "empathy_insight": "1-sentence explanation connecting their choice to biochemistry/nutrition...",
  "dynamic_question": "The next clinical question...",
  "tap_options": ["Option A", "Option B", "Option C", "Option D"],
  "current_turn": ${currentTurn},
  "is_complete": ${isFinalStep ? "true" : "false"},
  "final_results": ${isFinalStep ? `{
    "headline": "Title of the clinical profile...",
    "the_3_realities": ["Insight 1...", "Insight 2...", "Insight 3..."],
    "transformation_timeline": {
      "days_14": "14-day actions...",
      "day_30": "30-day milestone...",
      "day_90": "90-day stabilization..."
    },
    "whatsapp_message": "Structured patient report summary..."
  }` : "null"}
}
`;

  let historyText = "";
  if (payload.history && Array.isArray(payload.history)) {
    historyText = payload.history.map(item => `Step ${item.turn} response: "${item.selection}"`).join("\n");
  } else {
    historyText = "No previous responses. This is Step 1.";
  }

  if (apiKey) {
    try {
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: { headers: { 'User-Agent': 'aistudio-build' } }
      });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Here is the progress of the patient intake quiz:\n\n${historyText}\n\nLanguage: ${lang}. Track: ${payload.track || "not set"}.`,
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
        return res.json(parsed);
      }
    } catch (sdkError) {
      console.warn("AI generation fallback to rule engine:", sdkError.message);
    }
  }

  // Guaranteed resilient clinical response
  const fallback = generateFallbackResponse(payload);
  return res.json(fallback);
}

// WhatsApp Booking Notification Route Handler (CallMeBot & Direct WhatsApp)
async function handleNotifyBooking(req, res) {
  try {
    const { nom, telephone, date, creneau, service, dossier } = req.body || {};
    const apiKey = process.env.CALLMEBOT_API_KEY || process.env.CALLMEBOTKEY || process.env.CALLME_BOT_KEY || process.env.CALLMEBOT_KEY || process.env.CALLMEBOT_APIKEY;
    const rawPhone = process.env.IN_WHATSAPP_NUMBER || process.env.CALLMEBOT_PHONE || "21622841841";
    const phone = rawPhone.replace(/[^0-9]/g, "");

    const message = `🔔 *Nouveau RDV Cabinet Inès Ben Abdennebi*\n\n` +
                    `👤 *Patient :* ${nom || "Non spécifié"}\n` +
                    `📞 *Téléphone :* ${telephone || "Non spécifié"}\n` +
                    `📅 *Date souhaitée :* ${date || "Non spécifiée"}\n` +
                    `⏰ *Créneau :* ${creneau || "Non spécifié"}\n` +
                    `🎯 *Motif :* ${service || "Consultation Nutritionnelle"}\n\n` +
                    `📋 *Bilan & Dossier Clinique :*\n${dossier || "Bilan standard"}`;

    if (!apiKey) {
      console.log(`[Booking Received] CallMeBot API key not configured. Logged booking for ${nom} (${telephone}) on ${date} [${creneau}] - Service: ${service}`);
      return res.json({ 
        success: true, 
        delivered_callmebot: false, 
        message: "Demande enregistrée avec succès (CallMeBot non configuré)" 
      });
    }

    const waUrl = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodeURIComponent(message)}&apikey=${apiKey}`;
    const botRes = await fetch(waUrl);
    const botText = await botRes.text();
    console.log(`[CallMeBot Result] Status: ${botRes.status}, Response: ${botText.substring(0, 120)}`);

    return res.json({ success: true, delivered_callmebot: true, status: botRes.status });
  } catch (error) {
    console.error("Booking notification error:", error);
    return res.json({ success: true, delivered_callmebot: false, warning: error.message });
  }
}

// Wire API Endpoints
const analyzeDossierRoutes = [
  "/api/analyze-dossier",
  "/.netlify/functions/analyze-dossier"
];

analyzeDossierRoutes.forEach(route => {
  app.post(route, handleAIAnalyzeDossier);
});

const aiRoutes = [
  "/api/ai-diagnostic-engine",
  "/api/ai-intake-agent",
  "/api/ai-quiz",
  "/.netlify/functions/ai-diagnostic-engine",
  "/.netlify/functions/ai-intake-agent",
  "/.netlify/functions/ai-quiz"
];

aiRoutes.forEach(route => {
  app.post(route, handleAIDiagnostic);
});

const bookingRoutes = [
  "/api/notify-booking",
  "/.netlify/functions/notify-booking"
];

bookingRoutes.forEach(route => {
  app.post(route, handleNotifyBooking);
});

// Fallback form post endpoint
app.post("/", (req, res) => {
  res.json({ success: true, received: req.body });
});

// Serve static assets from the root and public directory
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname));

// SPA / Index Fallback (Express 5 compatible)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Cabinet Inès Ben Abdennebi server running on http://0.0.0.0:${PORT}`);
});
