var currentLang = 'fr';
var document = {
  readyState: 'complete',
  getElementById: function(id) {
    return {
      style: {},
      classList: { add: function(){}, remove: function(){}, contains: function(){} },
      children: [],
      parentElement: { children: [] },
      innerHTML: '',
      addEventListener: function(){}
    };
  },
  addEventListener: function() {}
};
var window = {
  location: { hostname: 'localhost' },
  addEventListener: function() {},
  innerWidth: 1000
};
// quiz-data.js — Clinical Anamnesis Data Engine
// Cabinet de Nutrition Inès Ben Abdennebi — 10 Archetypes × 4 Languages
// This file is loaded via <script> before index.html's AIEngine

window.QUIZ_DATA = {

  // ===================================================================
  // STEP 1: TARGET (Pour qui ?)
  // ===================================================================
  targets: {
    fr: { insight: "Bienvenue au Cabinet de Nutrition Inès Ben Abdennebi à Radès. Ce bilan express de 60 secondes établit le profil clinique complet.", question: "Pour qui souhaitez-vous réaliser ce bilan ?", options: ["👤 Pour moi-même", "🧒 Pour mon enfant / adolescent", "👵 Pour un parent (Senior)"] },
    ar: { insight: "مرحباً بكم في عيادة التغذية إيناس بن عبد النبي في رادس. هذا التقييم السريع يحدد الملف السريري الكامل في 60 ثانية.", question: "لمن تريد إجراء هذا التقييم؟", options: ["👤 لنفسي", "🧒 لطفلي / مراهق", "👵 لأحد الوالدين (كبير في السن)"] },
    en: { insight: "Welcome to Cabinet de Nutrition Inès Ben Abdennebi in Radès. This 60-second express assessment builds the complete clinical profile.", question: "Who is this assessment for?", options: ["👤 For myself", "🧒 For my child / teen", "👵 For a parent (Senior)"] },
    es: { insight: "Bienvenido al Gabinete de Nutrición Inès Ben Abdennebi en Radès. Esta evaluación express de 60 segundos construye el perfil clínico completo.", question: "¿Para quién es esta evaluación?", options: ["👤 Para mí mismo/a", "🧒 Para mi hijo/a / adolescente", "👵 Para un padre/madre (Senior)"] }
  },

  // ===================================================================
  // STEP 3: 8 Clinical Archetypes (Adults only)
  // ===================================================================
  archetypes: {
    fr: [
      "⚖️ Perte de Poids & Effet Yo-Yo",
      "🧠 TCA, Fringales & Compulsions",
      "🌿 Confort Digestif, SIBO & Côlon Irritable",
      "🦋 Équilibre Hormonal, SOPK & Ménopause",
      "🩸 Diabète, Insuline & Pré-diabète",
      "⚡ Fatigue Chronique & Stress",
      "🤰 Grossesse & Nutrition Maternelle",
      "🫀 Maladies Métaboliques & Foie"
    ],
    ar: [
      "⚖️ خسارة الوزن وتأثير اليويو",
      "🧠 اضطرابات الأكل والشراهة والنوبات",
      "🌿 راحة الجهاز الهضمي، SIBO والقولون العصبي",
      "🦋 التوازن الهرموني، تكيس المبايض وسن اليأس",
      "🩸 السكري، الأنسولين ومقدمات السكري",
      "⚡ الإرهاق المزمن والتوتر",
      "🤰 الحمل والتغذية الأمومية",
      "🫀 أمراض أيضية والكبد الدهني"
    ],
    en: [
      "⚖️ Weight Loss & Yo-Yo Effect",
      "🧠 Eating Disorders, Cravings & Compulsions",
      "🌿 Digestive Comfort, SIBO & IBS",
      "🦋 Hormonal Balance, PCOS & Menopause",
      "🩸 Diabetes, Insulin & Pre-diabetes",
      "⚡ Chronic Fatigue & Stress",
      "🤰 Pregnancy & Maternal Nutrition",
      "🫀 Metabolic Diseases & Fatty Liver"
    ],
    es: [
      "⚖️ Pérdida de Peso & Efecto Yo-Yo",
      "🧠 TCA, Antojos & Compulsiones",
      "🌿 Confort Digestivo, SIBO & Colon Irritable",
      "🦋 Equilibrio Hormonal, SOP & Menopausia",
      "🩸 Diabetes, Insulina & Pre-diabetes",
      "⚡ Fatiga Crónica & Estrés",
      "🤰 Embarazo & Nutrición Materna",
      "🫀 Enfermedades Metabólicas & Hígado"
    ]
  },

  // Track ID mapping from archetype index (Adult tracks only)
  trackIds: ['weight','tca','digestive','hormonal','diabetes','fatigue','pregnancy','metabolic'],

  // ===================================================================
  // WELCOME MESSAGES
  // ===================================================================
  welcome: {
    fr: { insight: "Bienvenue au Cabinet de Nutrition Inès Ben Abdennebi à Radès. Ce bilan express de 60 secondes établit votre profil clinique complet.", question: "Quel axe de santé souhaitez-vous explorer ?" },
    ar: { insight: "مرحباً بكم في عيادة التغذية إيناس بن عبد النبي في رادس. هذا التقييم السريع يحدد ملفك السريري الكامل في 60 ثانية.", question: "أي محور صحي تريد استكشافه؟" },
    en: { insight: "Welcome to Cabinet de Nutrition Inès Ben Abdennebi in Radès. This 60-second express assessment builds your complete clinical profile.", question: "Which health axis would you like to explore?" },
    es: { insight: "Bienvenido al Gabinete de Nutrición Inès Ben Abdennebi en Radès. Esta evaluación express de 60 segundos construye su perfil clínico completo.", question: "¿Qué eje de salud desea explorar?" }
  },

  // ===================================================================
  // STEP 2: PROFILE (Sex + Age combined)
  // ===================================================================
  profiles: {
    weight: {
      fr: { empathy: "Votre sexe et votre âge déterminent votre taux métabolique de base, votre profil hormonal et la répartition naturelle de vos réserves.", question: "Quel est votre profil ?", options: ["👩 Femme, 18-30 ans","👩 Femme, 30-45 ans","👩 Femme, 45+ ans","👨 Homme, 18-30 ans","👨 Homme, 30-45 ans","👨 Homme, 45+ ans"] },
      ar: { empathy: "جنسك وعمرك يحددان معدل الأيض الأساسي وتوزيع الدهون الطبيعي في جسمك.", question: "ما هو ملفك الشخصي؟", options: ["👩 أنثى، 18-30 سنة","👩 أنثى، 30-45 سنة","👩 أنثى، 45+ سنة","👨 ذكر، 18-30 سنة","👨 ذكر، 30-45 سنة","👨 ذكر، 45+ سنة"] },
      en: { empathy: "Your sex and age determine your basal metabolic rate, hormonal profile, and natural fat distribution.", question: "What is your profile?", options: ["👩 Female, 18-30","👩 Female, 30-45","👩 Female, 45+","👨 Male, 18-30","👨 Male, 30-45","👨 Male, 45+"] },
      es: { empathy: "Su sexo y edad determinan su tasa metabólica basal, perfil hormonal y distribución natural de grasa.", question: "¿Cuál es su perfil?", options: ["👩 Mujer, 18-30 años","👩 Mujer, 30-45 años","👩 Mujer, 45+ años","👨 Hombre, 18-30 años","👨 Hombre, 30-45 años","👨 Hombre, 45+ años"] }
    },
    tca: {
      fr: { empathy: "Les troubles alimentaires touchent tous les profils. Votre âge et votre sexe influencent les mécanismes neurobiologiques impliqués.", question: "Quel est votre profil ?", options: ["👩 Femme, 18-30 ans","👩 Femme, 30-45 ans","👩 Femme, 45+ ans","👨 Homme, 18-30 ans","👨 Homme, 30-45 ans","👨 Homme, 45+ ans"] },
      ar: { empathy: "اضطرابات الأكل تصيب كل الفئات. عمرك وجنسك يؤثران على الآليات العصبية البيولوجية المعنية.", question: "ما هو ملفك الشخصي؟", options: ["👩 أنثى، 18-30 سنة","👩 أنثى، 30-45 سنة","👩 أنثى، 45+ سنة","👨 ذكر، 18-30 سنة","👨 ذكر، 30-45 سنة","👨 ذكر، 45+ سنة"] },
      en: { empathy: "Eating disorders affect all profiles. Your age and sex influence the neurobiological mechanisms involved.", question: "What is your profile?", options: ["👩 Female, 18-30","👩 Female, 30-45","👩 Female, 45+","👨 Male, 18-30","👨 Male, 30-45","👨 Male, 45+"] },
      es: { empathy: "Los TCA afectan a todos los perfiles. Su edad y sexo influyen en los mecanismos neurobiológicos involucrados.", question: "¿Cuál es su perfil?", options: ["👩 Mujer, 18-30","👩 Mujer, 30-45","👩 Mujer, 45+","👨 Hombre, 18-30","👨 Hombre, 30-45","👨 Hombre, 45+"] }
    },
    digestive: {
      fr: { empathy: "Le microbiome intestinal varie considérablement selon le sexe et l'âge — cela influence directement votre protocole.", question: "Quel est votre profil ?", options: ["👩 Femme, 18-30 ans","👩 Femme, 30-45 ans","👩 Femme, 45+ ans","👨 Homme, 18-30 ans","👨 Homme, 30-45 ans","👨 Homme, 45+ ans"] },
      ar: { empathy: "الميكروبيوم المعوي يختلف بشكل كبير حسب الجنس والعمر — وهذا يؤثر مباشرة على بروتوكولك.", question: "ما هو ملفك الشخصي؟", options: ["👩 أنثى، 18-30 سنة","👩 أنثى، 30-45 سنة","👩 أنثى، 45+ سنة","👨 ذكر، 18-30 سنة","👨 ذكر، 30-45 سنة","👨 ذكر، 45+ سنة"] },
      en: { empathy: "The gut microbiome varies significantly by sex and age — this directly influences your protocol.", question: "What is your profile?", options: ["👩 Female, 18-30","👩 Female, 30-45","👩 Female, 45+","👨 Male, 18-30","👨 Male, 30-45","👨 Male, 45+"] },
      es: { empathy: "El microbioma intestinal varía significativamente según sexo y edad — esto influye directamente en su protocolo.", question: "¿Cuál es su perfil?", options: ["👩 Mujer, 18-30","👩 Mujer, 30-45","👩 Mujer, 45+","👨 Hombre, 18-30","👨 Hombre, 30-45","👨 Hombre, 45+"] }
    },
    hormonal: {
      fr: { empathy: "Le système endocrinien féminin et masculin réagit très différemment. Votre tranche d'âge détermine la phase hormonale active.", question: "Quel est votre profil ?", options: ["👩 Femme, 18-30 ans (cycles actifs)","👩 Femme, 30-45 ans (fertilité / SPM)","👩 Femme, 45+ ans (péri/ménopause)","👨 Homme, 18-35 ans","👨 Homme, 35-50 ans","👨 Homme, 50+ ans"] },
      ar: { empathy: "الجهاز الهرموني يتفاعل بشكل مختلف تماماً. فئتك العمرية تحدد المرحلة الهرمونية النشطة.", question: "ما هو ملفك الشخصي؟", options: ["👩 أنثى، 18-30 (دورات نشطة)","👩 أنثى، 30-45 (خصوبة / SPM)","👩 أنثى، 45+ (سن اليأس)","👨 ذكر، 18-35 سنة","👨 ذكر، 35-50 سنة","👨 ذكر، 50+ سنة"] },
      en: { empathy: "The endocrine system reacts very differently by sex. Your age range determines the active hormonal phase.", question: "What is your profile?", options: ["👩 Female, 18-30 (active cycles)","👩 Female, 30-45 (fertility / PMS)","👩 Female, 45+ (peri/menopause)","👨 Male, 18-35","👨 Male, 35-50","👨 Male, 50+"] },
      es: { empathy: "El sistema endocrino reacciona muy diferente. Su rango de edad determina la fase hormonal activa.", question: "¿Cuál es su perfil?", options: ["👩 Mujer, 18-30 (ciclos activos)","👩 Mujer, 30-45 (fertilidad / SPM)","👩 Mujer, 45+ (menopausia)","👨 Hombre, 18-35","👨 Hombre, 35-50","👨 Hombre, 50+"] }
    },
    diabetes: {
      fr: { empathy: "La gestion glycémique dépend étroitement de votre profil hormonal et métabolique lié à l'âge.", question: "Quel est votre profil ?", options: ["👩 Femme, 18-30 ans","👩 Femme, 30-45 ans","👩 Femme, 45+ ans","👨 Homme, 18-30 ans","👨 Homme, 30-45 ans","👨 Homme, 45+ ans"] },
      ar: { empathy: "إدارة نسبة السكر تعتمد على ملفك الهرموني والأيضي المرتبط بالعمر.", question: "ما هو ملفك الشخصي؟", options: ["👩 أنثى، 18-30 سنة","👩 أنثى، 30-45 سنة","👩 أنثى، 45+ سنة","👨 ذكر، 18-30 سنة","👨 ذكر، 30-45 سنة","👨 ذكر، 45+ سنة"] },
      en: { empathy: "Glycemic management closely depends on your age-related hormonal and metabolic profile.", question: "What is your profile?", options: ["👩 Female, 18-30","👩 Female, 30-45","👩 Female, 45+","👨 Male, 18-30","👨 Male, 30-45","👨 Male, 45+"] },
      es: { empathy: "La gestión glucémica depende estrechamente de su perfil hormonal y metabólico según la edad.", question: "¿Cuál es su perfil?", options: ["👩 Mujer, 18-30","👩 Mujer, 30-45","👩 Mujer, 45+","👨 Hombre, 18-30","👨 Hombre, 30-45","👨 Hombre, 45+"] }
    },
    fatigue: {
      fr: { empathy: "L'axe HPA (hypothalamo-hypophyso-surrénalien) réagit différemment selon le sexe et la phase de vie.", question: "Quel est votre profil ?", options: ["👩 Femme, 18-30 ans","👩 Femme, 30-45 ans","👩 Femme, 45+ ans","👨 Homme, 18-30 ans","👨 Homme, 30-45 ans","👨 Homme, 45+ ans"] },
      ar: { empathy: "محور HPA (الغدة الكظرية) يتفاعل بشكل مختلف حسب الجنس والمرحلة العمرية.", question: "ما هو ملفك الشخصي؟", options: ["👩 أنثى، 18-30 سنة","👩 أنثى، 30-45 سنة","👩 أنثى، 45+ سنة","👨 ذكر، 18-30 سنة","👨 ذكر، 30-45 سنة","👨 ذكر، 45+ سنة"] },
      en: { empathy: "The HPA axis reacts differently depending on sex and life stage.", question: "What is your profile?", options: ["👩 Female, 18-30","👩 Female, 30-45","👩 Female, 45+","👨 Male, 18-30","👨 Male, 30-45","👨 Male, 45+"] },
      es: { empathy: "El eje HPA reacciona de forma diferente según el sexo y la fase de vida.", question: "¿Cuál es su perfil?", options: ["👩 Mujer, 18-30","👩 Mujer, 30-45","👩 Mujer, 45+","👨 Hombre, 18-30","👨 Hombre, 30-45","👨 Hombre, 45+"] }
    },
    pregnancy: {
      fr: { empathy: "Chaque phase de la maternité a des besoins micronutritionnels uniques et critiques pour vous et votre bébé.", question: "À quelle étape êtes-vous ?", options: ["🤰 1er trimestre (0-12 semaines)","🤰 2ème trimestre (13-26 semaines)","🤰 3ème trimestre (27-40 semaines)","🍼 Post-partum & Allaitement","💭 Projet bébé (Préconception)"] },
      ar: { empathy: "كل مرحلة من الأمومة لها احتياجات غذائية دقيقة وحيوية لك ولطفلك.", question: "في أي مرحلة أنتِ؟", options: ["🤰 الثلث الأول (0-12 أسبوع)","🤰 الثلث الثاني (13-26 أسبوع)","🤰 الثلث الثالث (27-40 أسبوع)","🍼 بعد الولادة والرضاعة","💭 مشروع حمل (ما قبل الحمل)"] },
      en: { empathy: "Each phase of motherhood has unique and critical micronutritional needs for you and your baby.", question: "What stage are you at?", options: ["🤰 1st trimester (0-12 weeks)","🤰 2nd trimester (13-26 weeks)","🤰 3rd trimester (27-40 weeks)","🍼 Postpartum & Breastfeeding","💭 Trying to conceive (Preconception)"] },
      es: { empathy: "Cada fase de la maternidad tiene necesidades micronutricionales únicas y críticas.", question: "¿En qué etapa está?", options: ["🤰 1er trimestre (0-12 semanas)","🤰 2do trimestre (13-26 semanas)","🤰 3er trimestre (27-40 semanas)","🍼 Postparto & Lactancia","💭 Buscando embarazo (Preconcepción)"] }
    },
    pediatric: {
      fr: { empathy: "Le profil nutritionnel de votre enfant dépend de son stade de développement et de sa biologie unique.", question: "Quel est le profil de votre enfant ?", options: ["👦 Garçon, 0-6 ans","👦 Garçon, 7-12 ans","👧 Fille, 0-6 ans","👧 Fille, 7-12 ans","🧑 Adolescent(e), 13-17 ans"] },
      ar: { empathy: "الملف الغذائي لطفلك يعتمد على مرحلة نموه وبيولوجيته الفريدة.", question: "ما هو ملف طفلك؟", options: ["👦 ولد، 0-6 سنوات","👦 ولد، 7-12 سنة","👧 بنت، 0-6 سنوات","👧 بنت، 7-12 سنة","🧑 مراهق/ة، 13-17 سنة"] },
      en: { empathy: "Your child's nutritional profile depends on their developmental stage and unique biology.", question: "What is your child's profile?", options: ["👦 Boy, 0-6 years","👦 Boy, 7-12 years","👧 Girl, 0-6 years","👧 Girl, 7-12 years","🧑 Teenager, 13-17 years"] },
      es: { empathy: "El perfil nutricional de su hijo depende de su etapa de desarrollo y biología única.", question: "¿Cuál es el perfil de su hijo/a?", options: ["👦 Niño, 0-6 años","👦 Niño, 7-12 años","👧 Niña, 0-6 años","👧 Niña, 7-12 años","🧑 Adolescente, 13-17 años"] }
    },
    senior: {
      fr: { empathy: "Le vieillissement modifie profondément l'absorption des nutriments, la masse musculaire et la densité osseuse.", question: "Quel est le profil de votre parent ?", options: ["👨 Homme, 55-70 ans","👨 Homme, 70+ ans","👩 Femme, 55-70 ans","👩 Femme, 70+ ans"] },
      ar: { empathy: "الشيخوخة تغير بشكل عميق امتصاص المغذيات والكتلة العضلية وكثافة العظام.", question: "ما هو ملف والدك/تك؟", options: ["👨 رجل، 55-70 سنة","👨 رجل، 70+ سنة","👩 امرأة، 55-70 سنة","👩 امرأة، 70+ سنة"] },
      en: { empathy: "Aging profoundly alters nutrient absorption, muscle mass, and bone density.", question: "What is your parent's profile?", options: ["👨 Male, 55-70","👨 Male, 70+","👩 Female, 55-70","👩 Female, 70+"] },
      es: { empathy: "El envejecimiento altera profundamente la absorción de nutrientes, masa muscular y densidad ósea.", question: "¿Cuál es el perfil de su familiar?", options: ["👨 Hombre, 55-70","👨 Hombre, 70+","👩 Mujer, 55-70","👩 Mujer, 70+"] }
    },
    metabolic: {
      fr: { empathy: "Les maladies métaboliques ont des expressions cliniques différentes selon le sexe et la décennie de vie.", question: "Quel est votre profil ?", options: ["👩 Femme, 18-30 ans","👩 Femme, 30-45 ans","👩 Femme, 45+ ans","👨 Homme, 18-30 ans","👨 Homme, 30-45 ans","👨 Homme, 45+ ans"] },
      ar: { empathy: "الأمراض الأيضية لها تعبيرات سريرية مختلفة حسب الجنس والعقد العمري.", question: "ما هو ملفك الشخصي؟", options: ["👩 أنثى، 18-30 سنة","👩 أنثى، 30-45 سنة","👩 أنثى، 45+ سنة","👨 ذكر، 18-30 سنة","👨 ذكر، 30-45 سنة","👨 ذكر، 45+ سنة"] },
      en: { empathy: "Metabolic diseases have different clinical expressions depending on sex and life decade.", question: "What is your profile?", options: ["👩 Female, 18-30","👩 Female, 30-45","👩 Female, 45+","👨 Male, 18-30","👨 Male, 30-45","👨 Male, 45+"] },
      es: { empathy: "Las enfermedades metabólicas tienen expresiones clínicas diferentes según sexo y década de vida.", question: "¿Cuál es su perfil?", options: ["👩 Mujer, 18-30","👩 Mujer, 30-45","👩 Mujer, 45+","👨 Hombre, 18-30","👨 Hombre, 30-45","👨 Hombre, 45+"] }
    }
  },

  // ===================================================================
  // STEP 3: CLINICAL QUESTIONS (main probe per track)
  // ===================================================================
  clinical: {
    weight: {
      fr: { empathy: "La résistance au poids n'est jamais un manque de volonté — c'est un signal biologique que votre métabolisme s'est adapté aux restrictions.", question: "Quel schéma caractérise le mieux votre résistance au poids ?", options: ["🔄 Effet Yo-Yo : je reprends tout le poids perdu à chaque fois","🍫 Fringales irrésistibles de sucre le soir ou sous stress","⚖️ Plateau métabolique : le poids ne bouge plus malgré mes efforts","🫤 Sédentarité : alimentation désorganisée et repas sautés"] },
      ar: { empathy: "مقاومة الوزن ليست أبداً نقصاً في الإرادة — بل إشارة بيولوجية أن جسمك تكيف مع التقييد.", question: "أي نمط يصف مقاومة وزنك أفضل؟", options: ["🔄 تأثير اليويو: أستعيد كل الوزن المفقود في كل مرة","🍫 نوبات شراهة للسكر مساءً أو تحت الضغط","⚖️ ثبات الوزن: لا يتحرك رغم كل الجهود","🫤 خمول: وجبات غير منتظمة وأتخطى وجبات"] },
      en: { empathy: "Weight resistance is never a lack of willpower — it's a biological signal that your metabolism has adapted to restriction.", question: "Which pattern best characterizes your weight resistance?", options: ["🔄 Yo-Yo Effect: I regain all the weight every time","🍫 Irresistible sugar cravings in the evening or under stress","⚖️ Metabolic plateau: weight won't budge despite my efforts","🫤 Sedentary: disorganized eating and skipped meals"] },
      es: { empathy: "La resistencia al peso nunca es falta de voluntad — es una señal biológica de que su metabolismo se adaptó a la restricción.", question: "¿Qué patrón caracteriza mejor su resistencia al peso?", options: ["🔄 Efecto Yo-Yo: recupero todo el peso cada vez","🍫 Antojos irresistibles de azúcar por la noche o bajo estrés","⚖️ Meseta metabólica: el peso no se mueve pese a mis esfuerzos","🫤 Sedentarismo: alimentación desorganizada y comidas saltadas"] }
    },
    tca: {
      fr: { empathy: "Votre relation avec la nourriture reflète des mécanismes neurobiologiques profonds — pas un manque de discipline. Vous méritez un accompagnement sans jugement.", question: "Comment se manifeste votre relation conflictuelle avec la nourriture ?", options: ["🌙 Compulsions nocturnes : je mange en cachette le soir","🔁 Cycles restriction / craquage : je contrôle puis j'explose","😔 Alimentation émotionnelle : je mange pour gérer mes émotions","🚫 Culpabilité permanente : chaque repas est une source d'angoisse"] },
      ar: { empathy: "علاقتك بالطعام تعكس آليات عصبية بيولوجية عميقة — وليست نقصاً في الانضباط. تستحق مرافقة بدون أحكام.", question: "كيف تتجلى علاقتك المضطربة مع الطعام؟", options: ["🌙 نوبات ليلية: آكل خفية في المساء","🔁 دورات تقييد/انهيار: أتحكم ثم أنفجر","😔 أكل عاطفي: آكل لإدارة مشاعري","🚫 شعور دائم بالذنب: كل وجبة مصدر قلق"] },
      en: { empathy: "Your relationship with food reflects deep neurobiological mechanisms — not a lack of discipline. You deserve judgment-free support.", question: "How does your conflicted relationship with food manifest?", options: ["🌙 Nocturnal compulsions: I eat secretly at night","🔁 Restriction/binge cycles: I control then I explode","😔 Emotional eating: I eat to manage my emotions","🚫 Permanent guilt: every meal is a source of anxiety"] },
      es: { empathy: "Su relación con la comida refleja mecanismos neurobiológicos profundos — no falta de disciplina.", question: "¿Cómo se manifiesta su relación conflictiva con la comida?", options: ["🌙 Compulsiones nocturnas: como a escondidas por la noche","🔁 Ciclos restricción/atracón: controlo y luego exploto","😔 Alimentación emocional: como para gestionar mis emociones","🚫 Culpa permanente: cada comida es fuente de ansiedad"] }
    },
    digestive: {
      fr: { empathy: "Le système digestif est votre second cerveau. Vos symptômes sont des signaux précis que nous allons décoder ensemble.", question: "Quel type de symptôme digestif domine votre quotidien ?", options: ["🎈 Ventre plat le matin, ballonné et douloureux le soir","🔄 Alternance constipation / diarrhée (Côlon irritable)","🔥 Reflux, acidité ou digestions extrêmement lentes","🍞 Réactions inflammatoires après pain, lactose ou crudités"] },
      ar: { empathy: "الجهاز الهضمي هو دماغك الثاني. أعراضك إشارات دقيقة سنفك شفرتها معاً.", question: "أي نوع من الأعراض الهضمية يسيطر على يومك؟", options: ["🎈 بطن مسطح صباحاً ومنتفخ ومؤلم مساءً","🔄 تناوب إمساك/إسهال (القولون العصبي)","🔥 حموضة، ارتجاع أو هضم بطيء جداً","🍞 ردود فعل التهابية بعد الخبز أو الحليب أو الخضار النيئة"] },
      en: { empathy: "Your digestive system is your second brain. Your symptoms are precise signals we'll decode together.", question: "Which type of digestive symptom dominates your daily life?", options: ["🎈 Flat belly in the morning, bloated and painful by evening","🔄 Constipation / diarrhea alternation (IBS)","🔥 Reflux, acidity or extremely slow digestion","🍞 Inflammatory reactions after bread, dairy or raw vegetables"] },
      es: { empathy: "El sistema digestivo es su segundo cerebro. Sus síntomas son señales precisas que decodificaremos juntos.", question: "¿Qué tipo de síntoma digestivo domina su día a día?", options: ["🎈 Vientre plano por la mañana, hinchado por la noche","🔄 Alternancia estreñimiento/diarrea (Colon irritable)","🔥 Reflujo, acidez o digestiones extremadamente lentas","🍞 Reacciones inflamatorias tras pan, lácteos o crudos"] }
    },
    hormonal: {
      fr: { empathy: "Votre système hormonal orchestre plus de 200 fonctions métaboliques. Un déséquilibre même léger se répercute sur le poids, l'humeur et l'énergie.", question: "Quel aspect de votre déséquilibre hormonal impacte le plus votre vie ?", options: ["📅 Cycles irréguliers, absents ou douloureux","⚖️ Prise de poids inexpliquée localisée (ventre, hanches)","🔥 SPM invalidant ou symptômes de ménopause (bouffées, insomnie)","🌡️ Acné, hirsutisme ou chute de cheveux persistante"] },
      ar: { empathy: "نظامك الهرموني ينظم أكثر من 200 وظيفة أيضية. أي خلل حتى لو بسيط يؤثر على الوزن والمزاج والطاقة.", question: "أي جانب من اختلالك الهرموني يؤثر أكثر على حياتك؟", options: ["📅 دورات غير منتظمة أو غائبة أو مؤلمة","⚖️ زيادة وزن موضعية غير مفسرة (بطن، أرداف)","🔥 متلازمة ما قبل الحيض أو أعراض سن اليأس","🌡️ حب شباب، شعر زائد أو تساقط الشعر المستمر"] },
      en: { empathy: "Your hormonal system orchestrates 200+ metabolic functions. Even a slight imbalance impacts weight, mood, and energy.", question: "Which aspect of your hormonal imbalance impacts your life the most?", options: ["📅 Irregular, absent, or painful cycles","⚖️ Unexplained localized weight gain (belly, hips)","🔥 Debilitating PMS or menopause symptoms (hot flashes, insomnia)","🌡️ Persistent acne, hirsutism, or hair loss"] },
      es: { empathy: "Su sistema hormonal orquesta más de 200 funciones metabólicas. Un desequilibrio leve impacta peso, ánimo y energía.", question: "¿Qué aspecto de su desequilibrio hormonal impacta más su vida?", options: ["📅 Ciclos irregulares, ausentes o dolorosos","⚖️ Aumento de peso localizado inexplicable","🔥 SPM invalidante o síntomas de menopausia","🌡️ Acné, hirsutismo o caída de cabello persistente"] }
    },
    diabetes: {
      fr: { empathy: "Le diabète est un déséquilibre métabolique précis. La nutrition clinique ciblée est votre levier le plus puissant pour reprendre le contrôle.", question: "Quel est votre enjeu glycémique principal aujourd'hui ?", options: ["📊 HbA1c élevée malgré le traitement","🔄 Résistance à l'insuline / Pré-diabète diagnostiqué","⚡ Épisodes d'hypo/hyperglycémie fréquents","🥗 Difficulté à gérer les glucides au quotidien"] },
      ar: { empathy: "السكري اضطراب أيضي دقيق. التغذية السريرية المستهدفة هي أقوى وسيلة لاستعادة السيطرة.", question: "ما هو التحدي الرئيسي لنسبة السكر لديك اليوم؟", options: ["📊 HbA1c مرتفع رغم العلاج","🔄 مقاومة الأنسولين / تشخيص ما قبل السكري","⚡ نوبات هبوط/ارتفاع السكر المتكررة","🥗 صعوبة إدارة الكربوهيدرات يومياً"] },
      en: { empathy: "Diabetes is a precise metabolic imbalance. Targeted clinical nutrition is your most powerful lever to regain control.", question: "What is your main glycemic challenge today?", options: ["📊 Elevated HbA1c despite treatment","🔄 Insulin resistance / Diagnosed pre-diabetes","⚡ Frequent hypo/hyperglycemia episodes","🥗 Difficulty managing daily carbs"] },
      es: { empathy: "La diabetes es un desequilibrio metabólico preciso. La nutrición clínica dirigida es su palanca más poderosa.", question: "¿Cuál es su principal desafío glucémico hoy?", options: ["📊 HbA1c elevada pese al tratamiento","🔄 Resistencia a la insulina / Pre-diabetes","⚡ Episodios frecuentes de hipo/hiperglucemia","🥗 Dificultad para gestionar carbohidratos diarios"] }
    },
    fatigue: {
      fr: { empathy: "La fatigue chronique n'est pas « dans la tête ». C'est un dérèglement mesurable de l'axe du stress et de vos réserves micronutritionnelles.", question: "Comment se manifeste votre épuisement énergétique ?", options: ["🌫️ Brouillard mental matinal : impossible de démarrer la journée","💤 Crash post-repas : effondrement après le déjeuner","🔁 Cycle stress-insomnie-fatigue permanent","⚡ Énergie en dents de scie tout au long de la journée"] },
      ar: { empathy: "الإرهاق المزمن ليس 'في الرأس'. إنه خلل قابل للقياس في محور التوتر واحتياطياتك من المغذيات الدقيقة.", question: "كيف يتجلى إرهاقك الطاقي؟", options: ["🌫️ ضبابية ذهنية صباحية: مستحيل بدء اليوم","💤 انهيار بعد الوجبة: إعياء بعد الغداء","🔁 دورة توتر-أرق-إرهاق دائمة","⚡ طاقة متقلبة على مدار اليوم"] },
      en: { empathy: "Chronic fatigue isn't 'in your head'. It's a measurable disruption of your stress axis and micronutritional reserves.", question: "How does your energy exhaustion manifest?", options: ["🌫️ Morning brain fog: impossible to start the day","💤 Post-meal crash: collapse after lunch","🔁 Permanent stress-insomnia-fatigue cycle","⚡ Energy yo-yoing throughout the day"] },
      es: { empathy: "La fatiga crónica no está 'en la cabeza'. Es una alteración medible del eje del estrés y sus reservas micronutricionales.", question: "¿Cómo se manifiesta su agotamiento energético?", options: ["🌫️ Niebla mental matutina: imposible empezar el día","💤 Bajón post-comida: derrumbe después del almuerzo","🔁 Ciclo estrés-insomnio-fatiga permanente","⚡ Energía en dientes de sierra todo el día"] }
    },
    pregnancy: {
      fr: { empathy: "Chaque bouchée que vous prenez nourrit directement le développement de votre bébé. Nous allons optimiser chaque nutriment clé.", question: "Quel aspect de votre nutrition maternelle souhaitez-vous optimiser ?", options: ["🤢 Nausées, aversions : je ne peux plus rien manger","🩸 Risque de diabète gestationnel identifié","🧬 Optimiser les apports clés (fer, folates, oméga-3, DHA)","🍼 Favoriser une récupération post-partum et un allaitement serein"] },
      ar: { empathy: "كل لقمة تتناولينها تغذي نمو طفلك مباشرة. سنحسن كل عنصر غذائي أساسي.", question: "أي جانب من تغذيتك تريدين تحسينه؟", options: ["🤢 غثيان ونفور: لا أستطيع الأكل","🩸 تم تحديد خطر سكري الحمل","🧬 تحسين العناصر الأساسية (حديد، فوليك، أوميغا 3)","🍼 تعزيز التعافي بعد الولادة والرضاعة"] },
      en: { empathy: "Every bite you take directly nourishes your baby's development. We'll optimize every key nutrient.", question: "Which aspect of your maternal nutrition would you like to optimize?", options: ["🤢 Nausea, aversions: I can barely eat anything","🩸 Gestational diabetes risk identified","🧬 Optimize key nutrients (iron, folates, omega-3, DHA)","🍼 Support postpartum recovery and breastfeeding"] },
      es: { empathy: "Cada bocado que toma nutre directamente el desarrollo de su bebé. Optimizaremos cada nutriente clave.", question: "¿Qué aspecto de su nutrición materna desea optimizar?", options: ["🤢 Náuseas, aversiones: no puedo comer","🩸 Riesgo de diabetes gestacional identificado","🧬 Optimizar nutrientes clave (hierro, folatos, omega-3)","🍼 Apoyar la recuperación postparto y lactancia"] }
    },
    pediatric: {
      fr: { empathy: "Le comportement alimentaire de votre enfant est une réponse sensorielle et digestive — jamais un caprice. Nous sommes là pour vous guider sans pression.", question: "Quel est le principal défi alimentaire avec votre enfant ?", options: ["🥦 Sélectivité extrême : ne mange que 3-4 aliments","🥊 Repas = champ de bataille, stress et négociations","📉 Manque d'énergie, difficultés de concentration à l'école","⚖️ Surpoids ou croissance qui vous inquiète"] },
      ar: { empathy: "سلوك طفلك الغذائي هو استجابة حسية وهضمية — وليس عناداً أبداً. نحن هنا لإرشادك بدون ضغط.", question: "ما هو التحدي الغذائي الرئيسي مع طفلك؟", options: ["🥦 انتقائية شديدة: لا يأكل إلا 3-4 أطعمة","🥊 الوجبات = ميدان معركة وتوتر ومفاوضات","📉 نقص الطاقة وصعوبات التركيز في المدرسة","⚖️ زيادة وزن أو نمو يقلقك"] },
      en: { empathy: "Your child's eating behavior is a sensory and digestive response — never a whim. We're here to guide you without pressure.", question: "What is the main food challenge with your child?", options: ["🥦 Extreme selectivity: only eats 3-4 foods","🥊 Mealtimes = battlefield, stress and negotiations","📉 Low energy, concentration difficulties at school","⚖️ Overweight or growth that concerns you"] },
      es: { empathy: "El comportamiento alimentario de su hijo es una respuesta sensorial y digestiva — nunca un capricho.", question: "¿Cuál es el principal desafío alimentario con su hijo/a?", options: ["🥦 Selectividad extrema: solo come 3-4 alimentos","🥊 Comidas = campo de batalla y negociaciones","📉 Falta de energía, dificultades de concentración","⚖️ Sobrepeso o crecimiento que le preocupa"] }
    },
    senior: {
      fr: { empathy: "Après 55 ans, la nutrition devient un levier essentiel pour préserver l'autonomie, la force musculaire et la vitalité cognitive.", question: "Quel enjeu nutritionnel concerne le plus votre parent ?", options: ["💪 Fonte musculaire, faiblesse et risque de chutes","🦴 Fragilité osseuse, ostéoporose diagnostiquée","😕 Perte d'appétit et risque de dénutrition","💊 Interactions médicaments-nutrition à surveiller"] },
      ar: { empathy: "بعد سن 55، التغذية تصبح رافعة أساسية للحفاظ على الاستقلالية والقوة العضلية والحيوية الذهنية.", question: "أي تحدٍ غذائي يهم والدك/تك أكثر؟", options: ["💪 ضمور عضلي وضعف وخطر السقوط","🦴 هشاشة العظام المشخصة","😕 فقدان الشهية وخطر سوء التغذية","💊 تفاعلات الأدوية مع التغذية"] },
      en: { empathy: "After 55, nutrition becomes an essential lever to preserve autonomy, muscle strength, and cognitive vitality.", question: "Which nutritional issue concerns your parent the most?", options: ["💪 Muscle wasting, weakness and fall risk","🦴 Bone fragility, diagnosed osteoporosis","😕 Appetite loss and malnutrition risk","💊 Medication-nutrition interactions to monitor"] },
      es: { empathy: "Después de los 55, la nutrición es esencial para preservar autonomía, fuerza muscular y vitalidad cognitiva.", question: "¿Qué problema nutricional preocupa más a su familiar?", options: ["💪 Pérdida muscular, debilidad y riesgo de caídas","🦴 Fragilidad ósea, osteoporosis diagnosticada","😕 Pérdida de apetito y riesgo de desnutrición","💊 Interacciones medicamentos-nutrición"] }
    },
    metabolic: {
      fr: { empathy: "Les maladies métaboliques sont silencieuses mais progressives. La nutrition clinique est souvent le premier traitement — et le plus négligé.", question: "Quelle pathologie métabolique nécessite un ajustement nutritionnel ?", options: ["🫀 Cholestérol / Dyslipidémie (LDL, triglycérides)","🩺 Hypertension artérielle","🟤 Stéatose hépatique / NAFLD (foie gras)","🔥 État inflammatoire chronique de bas grade"] },
      ar: { empathy: "الأمراض الأيضية صامتة لكنها تتقدم. التغذية السريرية غالباً العلاج الأول — والأكثر إهمالاً.", question: "أي مرض أيضي يحتاج تعديلاً غذائياً؟", options: ["🫀 الكوليسترول / اضطرابات الدهون","🩺 ارتفاع ضغط الدم","🟤 الكبد الدهني / NAFLD","🔥 حالة التهابية مزمنة منخفضة الدرجة"] },
      en: { empathy: "Metabolic diseases are silent but progressive. Clinical nutrition is often the first treatment — and the most neglected.", question: "Which metabolic condition requires nutritional adjustment?", options: ["🫀 Cholesterol / Dyslipidemia (LDL, triglycerides)","🩺 Arterial hypertension","🟤 Fatty liver / NAFLD","🔥 Chronic low-grade inflammatory state"] },
      es: { empathy: "Las enfermedades metabólicas son silenciosas pero progresivas. La nutrición clínica es a menudo el primer tratamiento.", question: "¿Qué patología metabólica requiere ajuste nutricional?", options: ["🫀 Colesterol / Dislipidemia","🩺 Hipertensión arterial","🟤 Hígado graso / NAFLD","🔥 Estado inflamatorio crónico de bajo grado"] }
    }
  },

  // ===================================================================
  // STEP 4: ADAPTIVE FOLLOW-UP (keyword-branched)
  // ===================================================================
  adaptive: {
    weight: {
      fr: {
        'yo-yo': { empathy: "L'effet yo-yo n'est pas un échec — c'est la preuve que votre corps est devenu expert en survie face aux restrictions.", question: "Combien de régimes restrictifs avez-vous suivi ces 5 dernières années ?", options: ["1️⃣ Un ou deux, sans résultats durables","🔄 Entre 3 et 5 régimes différents","📉 Plus de 5 tentatives avec reprise à chaque fois","🚫 Jamais de régime, mais alimentation chaotique"] },
        'fringale': { empathy: "Les fringales du soir sont un signal biologique — votre cerveau réclame les nutriments manquants de la journée.", question: "Quand vos envies de sucre sont-elles les plus irrésistibles ?", options: ["🌙 Après 20h devant la TV, impossible de résister","☀️ L'après-midi au bureau (15h-17h)","😤 Quand je suis stressé(e) ou contrarié(e)","🔁 En continu toute la journée"] },
        'plateau': { empathy: "Un métabolisme au ralenti est la conséquence directe de restrictions prolongées qui ont mis votre corps en mode économie.", question: "Quels signes de ralentissement métabolique ressentez-vous ?", options: ["🥶 Mains et pieds froids en permanence","💤 Fatigue dès le réveil malgré 7-8h de sommeil","🦰 Chute de cheveux, ongles cassants, peau terne","🫤 Stockage abdominal malgré le sport régulier"] },
        'default': { empathy: "L'organisation alimentaire est la fondation d'un métabolisme actif et d'une perte de poids durable.", question: "Comment votre alimentation est-elle organisée au quotidien ?", options: ["⏭️ Je saute le petit-déjeuner et/ou le déjeuner","🍔 Je mange vite, debout, souvent dehors","🏠 Je cuisine rarement, surtout du prêt-à-manger","📋 Je mange correctement mais sans aucune structure"] }
      },
      ar: {
        'يويو': { empathy: "تأثير اليويو ليس فشلاً — بل دليل على أن جسمك أصبح خبيراً في النجاة من التقييد.", question: "كم عدد الحميات التي اتبعتها في آخر 5 سنوات؟", options: ["1️⃣ واحدة أو اثنتين بدون نتائج دائمة","🔄 بين 3 و5 حميات مختلفة","📉 أكثر من 5 محاولات مع استعادة الوزن","🚫 لم أتبع حمية لكن أكلي عشوائي"] },
        'شراهة': { empathy: "نوبات الشراهة المسائية إشارة بيولوجية — دماغك يطالب بالمغذيات الناقصة خلال اليوم.", question: "متى تكون رغبتك في السكريات أقوى؟", options: ["🌙 بعد الثامنة مساءً أمام التلفاز","☀️ بعد الظهر في العمل (3-5 مساءً)","😤 عند التوتر أو الإحباط","🔁 طوال اليوم بشكل مستمر"] },
        'default': { empathy: "تنظيم الوجبات هو أساس التمثيل الغذائي النشط وخسارة الوزن المستدامة.", question: "كيف تنظم وجباتك يومياً؟", options: ["⏭️ أتخطى الفطور و/أو الغداء","🍔 آكل بسرعة وغالباً خارج البيت","🏠 نادراً ما أطبخ، أعتمد على الجاهز","📋 آكل جيداً لكن بدون أي تنظيم"] }
      },
      en: {
        'yo-yo': { empathy: "The yo-yo effect isn't failure — it proves your body became an expert at surviving restriction.", question: "How many restrictive diets have you followed in the past 5 years?", options: ["1️⃣ One or two, without lasting results","🔄 Between 3 and 5 different diets","📉 More than 5 attempts with weight regain each time","🚫 No structured diet, but chaotic eating"] },
        'craving': { empathy: "Evening cravings are a biological signal — your brain demands the nutrients missing from your day.", question: "When are your sugar cravings most irresistible?", options: ["🌙 After 8pm in front of the TV","☀️ Mid-afternoon at the office (3-5pm)","😤 When stressed or upset","🔁 Continuously all day long"] },
        'default': { empathy: "Food organization is the foundation of an active metabolism and lasting weight loss.", question: "How is your daily eating organized?", options: ["⏭️ I skip breakfast and/or lunch","🍔 I eat fast, on the go, often outside","🏠 I rarely cook, mostly ready meals","📋 I eat well but with no structure"] }
      },
      es: {
        'yo-yo': { empathy: "El efecto rebote no es fracaso — demuestra que su cuerpo se volvió experto en sobrevivir la restricción.", question: "¿Cuántas dietas restrictivas ha seguido en los últimos 5 años?", options: ["1️⃣ Una o dos, sin resultados duraderos","🔄 Entre 3 y 5 dietas diferentes","📉 Más de 5 intentos con recuperación de peso","🚫 Ninguna dieta, pero alimentación caótica"] },
        'default': { empathy: "La organización alimentaria es la base de un metabolismo activo y una pérdida de peso duradera.", question: "¿Cómo está organizada su alimentación diaria?", options: ["⏭️ Salto el desayuno y/o el almuerzo","🍔 Como rápido, de pie, a menudo fuera","🏠 Raramente cocino, mayormente precocinados","📋 Como bien pero sin estructura"] }
      }
    },

    tca: {
      fr: {
        'nocturne': { empathy: "Les compulsions nocturnes sont liées à un déficit de sérotonine et de tryptophane en fin de journée — pas à un manque de volonté.", question: "Que se passe-t-il exactement pendant vos épisodes nocturnes ?", options: ["🍪 Je grignote sans faim jusqu'à l'endormissement","🥄 Je mange une grande quantité en très peu de temps","🤫 Je mange en cachette et je ressens une honte profonde","💊 Je compense par des purges, jeûne ou sport excessif"] },
        'restriction': { empathy: "Le cycle restriction-craquage est un piège neurobiologique : plus vous contrôlez, plus la réponse compulsive est violente.", question: "Quel type de restriction précède habituellement vos craquages ?", options: ["📊 Comptage obsessionnel des calories / macros","🚫 Suppression de groupes d'aliments entiers (glucides, gras...)","⏰ Jeûne intermittent trop prolongé ou trop strict","🍽️ Portions minuscules qui ne rassasient jamais"] },
        'émotionnel': { empathy: "L'alimentation émotionnelle utilise la nourriture comme régulateur d'émotions — une stratégie apprise souvent dans l'enfance.", question: "Quelle émotion déclenche le plus vos épisodes de nourriture réconfort ?", options: ["😰 L'anxiété et la sensation de perte de contrôle","😢 La tristesse, la solitude ou l'ennui profond","😤 La colère, la frustration ou l'injustice ressentie","🏃 L'épuisement total après une journée trop chargée"] },
        'default': { empathy: "La culpabilité alimentaire est un cercle vicieux : elle augmente le stress, qui augmente les compulsions.", question: "Depuis combien de temps vivez-vous cette relation difficile avec la nourriture ?", options: ["📅 Moins d'un an — c'est récent","📆 1 à 3 ans — ça s'est installé progressivement","📚 3 à 10 ans — c'est devenu chronique","♾️ Depuis l'adolescence ou l'enfance"] }
      },
      ar: {
        'ليلية': { empathy: "النوبات الليلية مرتبطة بنقص السيروتونين والتريبتوفان في نهاية اليوم — وليست ضعف إرادة.", question: "ماذا يحدث بالضبط خلال نوباتك الليلية؟", options: ["🍪 أتناول وجبات خفيفة بدون جوع حتى أنام","🥄 آكل كمية كبيرة في وقت قصير جداً","🤫 آكل خفية وأشعر بخجل عميق","💊 أعوض بالتطهير أو الصيام أو الرياضة المفرطة"] },
        'default': { empathy: "الشعور بالذنب تجاه الطعام حلقة مفرغة: يزيد التوتر الذي يزيد النوبات.", question: "منذ متى تعيش هذه العلاقة الصعبة مع الطعام؟", options: ["📅 أقل من سنة — حديث","📆 1 إلى 3 سنوات — تطور تدريجياً","📚 3 إلى 10 سنوات — أصبح مزمناً","♾️ منذ المراهقة أو الطفولة"] }
      },
      en: {
        'nocturnal': { empathy: "Nocturnal compulsions are linked to serotonin and tryptophan deficiency at day's end — not a lack of willpower.", question: "What exactly happens during your nighttime episodes?", options: ["🍪 I snack without hunger until I fall asleep","🥄 I eat a large amount in very little time","🤫 I eat secretly and feel deep shame","💊 I compensate with purging, fasting or excessive exercise"] },
        'default': { empathy: "Food guilt is a vicious cycle: it increases stress, which increases compulsions.", question: "How long have you been living this difficult relationship with food?", options: ["📅 Less than a year — it's recent","📆 1 to 3 years — it set in gradually","📚 3 to 10 years — it's become chronic","♾️ Since adolescence or childhood"] }
      },
      es: {
        'default': { empathy: "La culpa alimentaria es un círculo vicioso: aumenta el estrés, que aumenta las compulsiones.", question: "¿Desde cuándo vive esta relación difícil con la comida?", options: ["📅 Menos de un año — es reciente","📆 1 a 3 años — se instaló gradualmente","📚 3 a 10 años — se volvió crónico","♾️ Desde la adolescencia o infancia"] }
      }
    },

    digestive: {
      fr: {
        'ballonné': { empathy: "Le ventre qui gonfle progressivement au fil de la journée est typique d'une fermentation FODMAP excessive dans le côlon.", question: "Quels aliments déclenchent le plus vos ballonnements ?", options: ["🍞 Pain, pâtes, produits à base de blé","🥛 Produits laitiers (lait, fromage, yaourt)","🥬 Légumineuses, crudités, chou, oignon","🤷 Je n'arrive pas à identifier les déclencheurs"] },
        'constipation': { empathy: "L'alternance constipation/diarrhée traduit une hypersensibilité de votre muqueuse intestinale au stress et à certains aliments.", question: "À quelle fréquence ressentez-vous ces troubles du transit ?", options: ["📅 Tous les jours — c'est permanent et épuisant","🗓️ Plusieurs fois par semaine, par cycles","🍽️ Uniquement après certains repas spécifiques","😤 Surtout en période de stress intense"] },
        'reflux': { empathy: "Le reflux et la digestion lente signalent un déséquilibre entre acidité gastrique et motilité — souvent aggravé par l'alimentation.", question: "Quand ces symptômes sont-ils les plus intenses ?", options: ["🌙 La nuit, allongé(e) — ça me réveille","🍽️ Juste après les repas, surtout le soir","☕ Après le café, les épices ou les agrumes","🔁 De façon continue toute la journée"] },
        'default': { empathy: "Les intolérances alimentaires croisées créent un terrain inflammatoire chronique qu'il faut décoder avec méthode.", question: "Comment avez-vous essayé de gérer vos symptômes jusqu'ici ?", options: ["🔍 J'ai fait des tests d'intolérances (IgG, breath test...)","🚫 J'ai supprimé le gluten et/ou le lactose","🌿 J'ai essayé des probiotiques / compléments","🤷 Je n'ai rien fait, je subis au quotidien"] }
      },
      ar: {
        'انتفا': { empathy: "البطن الذي ينتفخ تدريجياً خلال اليوم نموذجي لتخمر FODMAP المفرط في القولون.", question: "ما الأطعمة التي تسبب أكثر الانتفاخات؟", options: ["🍞 الخبز والمعجنات ومنتجات القمح","🥛 منتجات الألبان (حليب، جبن، زبادي)","🥬 البقوليات والخضار النيئة والبصل","🤷 لا أستطيع تحديد المسببات"] },
        'default': { empathy: "عدم التحمل الغذائي المتقاطع يخلق أرضية التهابية مزمنة يجب فك شفرتها بمنهجية.", question: "كيف حاولت إدارة أعراضك حتى الآن؟", options: ["🔍 أجريت فحوصات عدم تحمل","🚫 حذفت الغلوتين و/أو اللاكتوز","🌿 جربت بروبيوتيك / مكملات","🤷 لم أفعل شيئاً، أعاني يومياً"] }
      },
      en: {
        'bloat': { empathy: "A belly that progressively swells throughout the day is typical of excessive FODMAP fermentation in the colon.", question: "Which foods trigger your bloating the most?", options: ["🍞 Bread, pasta, wheat-based products","🥛 Dairy products (milk, cheese, yogurt)","🥬 Legumes, raw vegetables, onion, garlic","🤷 I can't identify the triggers"] },
        'default': { empathy: "Cross food intolerances create chronic inflammatory terrain that needs methodical decoding.", question: "How have you tried to manage your symptoms so far?", options: ["🔍 I've done intolerance tests (IgG, breath test...)","🚫 I eliminated gluten and/or lactose","🌿 I tried probiotics / supplements","🤷 I haven't done anything, I suffer daily"] }
      },
      es: {
        'default': { empathy: "Las intolerancias cruzadas crean un terreno inflamatorio crónico que necesita decodificación metódica.", question: "¿Cómo ha intentado gestionar sus síntomas?", options: ["🔍 Hice pruebas de intolerancia","🚫 Eliminé gluten y/o lactosa","🌿 Probé probióticos/suplementos","🤷 No hice nada, sufro diariamente"] }
      }
    },

    hormonal: {
      fr: {
        'cycle': { empathy: "Des cycles irréguliers ou absents signalent un dialogue perturbé entre vos ovaires, votre hypophyse et votre thyroïde.", question: "Comment se manifestent vos cycles actuellement ?", options: ["❌ Absence de règles depuis 3+ mois (aménorrhée)","📅 Cycles très courts (<21j) ou très longs (>35j)","😣 Règles hémorragiques et/ou très douloureuses","🔄 Imprévisibles : impossible d'anticiper"] },
        'poids': { empathy: "La prise de poids hormonale se localise différemment de la prise de poids classique — elle cible le ventre, les hanches et les cuisses.", question: "Depuis quand ce poids résistant s'est-il installé ?", options: ["💊 Depuis le début d'un traitement hormonal (pilule, THS)","🤰 Depuis une grossesse / post-partum non résolu","🔄 Depuis l'arrêt de la pilule contraceptive","📆 Progressivement avec le temps, sans cause identifiable"] },
        'ménopause': { empathy: "La ménopause n'est pas une maladie — c'est une transition hormonale majeure que la nutrition peut adoucir considérablement.", question: "Quels symptômes de la ménopause souhaitez-vous atténuer en priorité ?", options: ["🔥 Bouffées de chaleur et sueurs nocturnes","😴 Insomnie, irritabilité et sautes d'humeur","⚖️ Prise de poids abdominale malgré une alimentation stable","🦴 Fragilité osseuse et douleurs articulaires"] },
        'default': { empathy: "L'acné et la chute de cheveux hormonales sont des marqueurs visibles d'un déséquilibre androgénique qu'il est possible de corriger.", question: "Avez-vous des analyses hormonales récentes ?", options: ["✅ Oui, avec des anomalies identifiées","📊 Oui, mais les résultats semblent normaux","❌ Non, je n'en ai pas fait récemment","🏥 Mon médecin ne m'a jamais prescrit de bilan hormonal"] }
      },
      ar: {
        'دور': { empathy: "الدورات غير المنتظمة أو الغائبة تشير إلى خلل في الحوار بين المبايض والغدة النخامية والغدة الدرقية.", question: "كيف تتجلى دوراتك حالياً؟", options: ["❌ غياب الدورة منذ 3+ أشهر","📅 دورات قصيرة جداً أو طويلة جداً","😣 نزيف غزير و/أو آلام شديدة","🔄 غير متوقعة: مستحيل التنبؤ"] },
        'default': { empathy: "حب الشباب وتساقط الشعر الهرموني علامات مرئية لخلل أندروجيني يمكن تصحيحه.", question: "هل لديك تحاليل هرمونية حديثة؟", options: ["✅ نعم، مع اكتشاف شذوذ","📊 نعم، لكن النتائج تبدو طبيعية","❌ لا، لم أجرِ فحوصات مؤخراً","🏥 طبيبي لم يطلب فحصاً هرمونياً أبداً"] }
      },
      en: {
        'cycle': { empathy: "Irregular or absent cycles signal disrupted communication between your ovaries, pituitary, and thyroid.", question: "How do your cycles currently manifest?", options: ["❌ No period for 3+ months (amenorrhea)","📅 Very short (<21d) or very long (>35d) cycles","😣 Hemorrhagic and/or very painful periods","🔄 Unpredictable: impossible to anticipate"] },
        'default': { empathy: "Hormonal acne and hair loss are visible markers of an androgenic imbalance that can be corrected.", question: "Do you have recent hormonal blood tests?", options: ["✅ Yes, with identified abnormalities","📊 Yes, but results seem normal","❌ No, haven't done any recently","🏥 My doctor never prescribed hormonal tests"] }
      },
      es: {
        'default': { empathy: "El acné y la caída del cabello hormonal son marcadores visibles de un desequilibrio androgénico corregible.", question: "¿Tiene análisis hormonales recientes?", options: ["✅ Sí, con anomalías identificadas","📊 Sí, pero los resultados parecen normales","❌ No, no me he hecho recientemente","🏥 Mi médico nunca me prescribió análisis hormonales"] }
      }
    },

    diabetes: {
      fr: {
        'hba1c': { empathy: "Une HbA1c élevée reflète une glycémie moyenne trop haute sur 3 mois — la nutrition peut agir de manière significative.", question: "Quel est votre dernier taux d'HbA1c ?", options: ["📊 Entre 6.5% et 7% (contrôle modéré)","📈 Entre 7% et 8% (à optimiser)","🔴 Au-dessus de 8% (nécessite une intervention)","🤷 Je ne connais pas mon dernier résultat"] },
        'résistance': { empathy: "La résistance à l'insuline est un état réversible — vous êtes au stade où l'alimentation peut tout changer.", question: "Quels signes d'insulinorésistance ressentez-vous ?", options: ["💤 Fatigue intense après les repas riches en glucides","🟤 Taches brunes sur le cou ou les aisselles (acanthosis)","🍑 Graisse abdominale centrale malgré une alimentation correcte","🍕 Faim permanente même 1h après avoir mangé"] },
        'default': { empathy: "La gestion quotidienne des glucides est la clé d'une glycémie stable et d'une énergie constante.", question: "Quel traitement suivez-vous actuellement ?", options: ["🥗 Régime alimentaire seul (pas de médicament)","💊 Metformine ou antidiabétiques oraux","💉 Insuline (injections ou pompe)","🆕 Pas encore de traitement — diagnostic récent"] }
      },
      ar: {
        'hba1c': { empathy: "ارتفاع HbA1c يعكس متوسط سكر دم مرتفع جداً على 3 أشهر — التغذية يمكنها التأثير بشكل كبير.", question: "ما هو آخر معدل HbA1c لديك؟", options: ["📊 بين 6.5% و7% (تحكم معتدل)","📈 بين 7% و8% (يحتاج تحسين)","🔴 فوق 8% (يتطلب تدخل)","🤷 لا أعرف آخر نتيجة"] },
        'default': { empathy: "إدارة الكربوهيدرات اليومية هي مفتاح سكر دم مستقر وطاقة ثابتة.", question: "أي علاج تتبعه حالياً؟", options: ["🥗 نظام غذائي فقط (بدون دواء)","💊 ميتفورمين أو أدوية فموية","💉 أنسولين (حقن أو مضخة)","🆕 لا علاج بعد — تشخيص حديث"] }
      },
      en: {
        'hba1c': { empathy: "Elevated HbA1c reflects too-high average blood sugar over 3 months — nutrition can act significantly.", question: "What is your latest HbA1c level?", options: ["📊 Between 6.5% and 7% (moderate control)","📈 Between 7% and 8% (needs optimization)","🔴 Above 8% (requires intervention)","🤷 I don't know my latest result"] },
        'default': { empathy: "Daily carbohydrate management is the key to stable blood sugar and consistent energy.", question: "What treatment are you currently on?", options: ["🥗 Diet only (no medication)","💊 Metformin or oral antidiabetics","💉 Insulin (injections or pump)","🆕 No treatment yet — recent diagnosis"] }
      },
      es: {
        'default': { empathy: "La gestión diaria de carbohidratos es la clave de una glucemia estable y energía constante.", question: "¿Qué tratamiento sigue actualmente?", options: ["🥗 Solo dieta (sin medicación)","💊 Metformina o antidiabéticos orales","💉 Insulina (inyecciones o bomba)","🆕 Sin tratamiento — diagnóstico reciente"] }
      }
    },

    fatigue: {
      fr: {
        'brouillard': { empathy: "Le brouillard mental matinal traduit souvent un épuisement surrénalien et une glycémie instable au réveil.", question: "Que mangez-vous au petit-déjeuner habituellement ?", options: ["☕ Café seul — impossible de manger le matin","🥐 Sucré : viennoiserie, céréales, jus de fruit","🍞 Pain blanc avec confiture ou pâte à tartiner","🥚 Protéiné : œufs, fromage, avocat..."] },
        'crash': { empathy: "L'effondrement post-repas signale un pic d'insuline suivi d'une chute glycémique — c'est corrigeable en 14 jours.", question: "Quel type de déjeuner précède habituellement votre crash ?", options: ["🍝 Repas riche en féculents (pâtes, riz, pain blanc)","🥗 Salade légère qui ne rassasie pas","🍔 Fast-food ou plat industriel rapide","⏭️ Je saute souvent le déjeuner"] },
        'default': { empathy: "Le cycle stress-insomnie-fatigue s'auto-entretient — la nutrition peut briser ce cercle vicieux.", question: "Comment évaluez-vous votre qualité de sommeil ?", options: ["😴 Je m'endors difficilement (>30 min)","🌙 Réveils nocturnes fréquents (2-4h du matin)","⏰ Je me réveille épuisé(e) même après 7-8h","😶 Mon sommeil est correct mais je suis quand même fatigué(e)"] }
      },
      ar: {
        'default': { empathy: "دورة التوتر-الأرق-الإرهاق تغذي نفسها — التغذية يمكنها كسر هذه الحلقة المفرغة.", question: "كيف تقيم جودة نومك؟", options: ["😴 أجد صعوبة في النوم (أكثر من 30 دقيقة)","🌙 استيقاظ ليلي متكرر (2-4 صباحاً)","⏰ أستيقظ منهكاً حتى بعد 7-8 ساعات","😶 نومي جيد لكنني مرهق دائماً"] }
      },
      en: {
        'fog': { empathy: "Morning brain fog often reflects adrenal exhaustion and unstable blood sugar upon waking.", question: "What do you usually eat for breakfast?", options: ["☕ Coffee only — impossible to eat in the morning","🥐 Sweet: pastries, cereal, fruit juice","🍞 White bread with jam or spread","🥚 Protein-based: eggs, cheese, avocado..."] },
        'default': { empathy: "The stress-insomnia-fatigue cycle is self-sustaining — nutrition can break this vicious circle.", question: "How would you rate your sleep quality?", options: ["😴 I have trouble falling asleep (>30 min)","🌙 Frequent night wakings (2-4 AM)","⏰ I wake up exhausted even after 7-8h","😶 My sleep is fine but I'm still tired"] }
      },
      es: {
        'default': { empathy: "El ciclo estrés-insomnio-fatiga se autoalimenta — la nutrición puede romper este círculo vicioso.", question: "¿Cómo evalúa su calidad de sueño?", options: ["😴 Me cuesta dormirme (>30 min)","🌙 Despertares nocturnos frecuentes","⏰ Me despierto agotado aun con 7-8h","😶 Mi sueño es correcto pero sigo cansado/a"] }
      }
    },

    pregnancy: {
      fr: {
        'nausée': { empathy: "Les nausées du 1er trimestre sont liées à l'HCG et à la sensibilité olfactive — elles ne sont pas imaginaires et peuvent être atténuées.", question: "Comment les nausées impactent-elles votre alimentation ?", options: ["🤢 Je vomis plusieurs fois par jour (hyperemesis)","😕 J'ai des nausées constantes mais sans vomir","🍋 Certaines odeurs/textures me repoussent totalement","🕐 Nausées uniquement le matin, ça va après midi"] },
        'diabète': { empathy: "Le diabète gestationnel est fréquent et gérable — une alimentation adaptée protège vous ET votre bébé.", question: "Où en êtes-vous dans le dépistage du diabète gestationnel ?", options: ["🩸 Diagnostiqué : je cherche un accompagnement nutritionnel","📊 Test HGPO positif, mon médecin m'a alertée","⚠️ Facteurs de risque (SOPK, antécédents familiaux, surpoids)","✅ Pas de diabète gestationnel mais je veux prévenir"] },
        'default': { empathy: "Chaque trimestre a des besoins nutritionnels spécifiques pour le développement optimal de votre bébé.", question: "Quel est votre plus grand défi nutritionnel en ce moment ?", options: ["🥩 Apporter assez de fer et éviter l'anémie","🧬 M'assurer que le développement neural du bébé est optimal (folates, DHA)","⚖️ Gérer ma prise de poids pendant la grossesse","🤱 Préparer mon corps pour un allaitement réussi"] }
      },
      ar: {
        'default': { empathy: "كل ثلث من الحمل له احتياجات غذائية خاصة لنمو طفلك الأمثل.", question: "ما هو أكبر تحدٍ غذائي لديك الآن؟", options: ["🥩 توفير ما يكفي من الحديد وتجنب فقر الدم","🧬 ضمان نمو دماغ الطفل المثالي (فوليك، DHA)","⚖️ إدارة زيادة الوزن أثناء الحمل","🤱 تحضير جسمي لرضاعة ناجحة"] }
      },
      en: {
        'default': { empathy: "Each trimester has specific nutritional needs for your baby's optimal development.", question: "What is your biggest nutritional challenge right now?", options: ["🥩 Getting enough iron and avoiding anemia","🧬 Ensuring optimal fetal neural development (folates, DHA)","⚖️ Managing weight gain during pregnancy","🤱 Preparing my body for successful breastfeeding"] }
      },
      es: {
        'default': { empathy: "Cada trimestre tiene necesidades nutricionales específicas para el desarrollo óptimo de su bebé.", question: "¿Cuál es su mayor desafío nutricional ahora?", options: ["🥩 Aportar suficiente hierro y evitar anemia","🧬 Asegurar el desarrollo neural óptimo del bebé","⚖️ Gestionar el aumento de peso en el embarazo","🤱 Preparar mi cuerpo para una lactancia exitosa"] }
      }
    },

    pediatric: {
      fr: {
        'sélectivité': { empathy: "La néophobie alimentaire est normale entre 2 et 6 ans — elle se corrige par une exposition progressive, jamais par la force.", question: "Combien d'aliments différents votre enfant accepte-t-il ?", options: ["🔴 Moins de 5 (très sélectif, toujours les mêmes)","🟠 Entre 5 et 10 aliments, catégories limitées","🟡 Une dizaine mais aucun légume ni fruit","🟢 Variété correcte mais refuse certains groupes entiers"] },
        'repas': { empathy: "Les conflits à table génèrent un stress qui renforce la résistance alimentaire de l'enfant — c'est un cercle vicieux à briser.", question: "Comment se passent les repas en famille habituellement ?", options: ["😤 Cris, pleurs, négociations — c'est un calvaire","📱 Écrans obligatoires pour qu'il/elle mange","⏳ Ça dure plus de 45 minutes chaque repas","🤷 Il/elle picore et quitte la table très vite"] },
        'énergie': { empathy: "Un petit-déjeuner trop sucré provoque un pic glycémique suivi d'un crash — c'est la première cause de déconcentration scolaire.", question: "Que mange votre enfant au petit-déjeuner ?", options: ["🥣 Céréales sucrées ou biscuits avec du lait","🍫 Pain blanc + Nutella/confiture + jus de fruit","🚫 Rien du tout — refuse de manger le matin","🥚 Petit-déjeuner équilibré mais toujours fatigué"] },
        'default': { empathy: "Le surpoids infantile est multifactoriel — il ne s'agit jamais simplement de 'trop manger' mais d'une régulation perturbée.", question: "Quel est votre objectif prioritaire pour votre enfant ?", options: ["🍏 Diversifier son alimentation en douceur","⚡ Améliorer sa concentration et son énergie","📈 Accompagner sa croissance de manière optimale","⚖️ L'aider à retrouver un poids santé sans frustration"] }
      },
      ar: {
        'انتقائ': { empathy: "رهاب الطعام الجديد طبيعي بين 2 و6 سنوات — يُصحح بالتعرض التدريجي وليس بالقوة أبداً.", question: "كم عدد الأطعمة المختلفة التي يقبلها طفلك؟", options: ["🔴 أقل من 5 (انتقائي جداً، نفس الأطعمة دائماً)","🟠 بين 5 و10 أطعمة، فئات محدودة","🟡 عشرة تقريباً لكن لا خضار ولا فاكهة","🟢 تنوع مقبول لكن يرفض مجموعات كاملة"] },
        'default': { empathy: "زيادة وزن الأطفال متعددة الأسباب — لا تتعلق أبداً بمجرد 'الأكل الزائد' بل بتنظيم مضطرب.", question: "ما هدفك الأساسي لطفلك؟", options: ["🍏 تنويع غذائه بهدوء","⚡ تحسين تركيزه وطاقته","📈 مرافقة نموه بشكل مثالي","⚖️ مساعدته على وزن صحي بدون إحباط"] }
      },
      en: {
        'selectivity': { empathy: "Food neophobia is normal between 2-6 years — it's corrected through gradual exposure, never by force.", question: "How many different foods does your child accept?", options: ["🔴 Less than 5 (very selective, always the same)","🟠 Between 5 and 10 foods, limited categories","🟡 About ten but no vegetables or fruit","🟢 Decent variety but refuses entire food groups"] },
        'default': { empathy: "Childhood overweight is multifactorial — it's never simply about 'eating too much' but about disrupted regulation.", question: "What is your priority goal for your child?", options: ["🍏 Diversify their diet gently","⚡ Improve focus and energy","📈 Support optimal growth","⚖️ Help reach a healthy weight without frustration"] }
      },
      es: {
        'default': { empathy: "El sobrepeso infantil es multifactorial — nunca se trata simplemente de 'comer demasiado' sino de regulación alterada.", question: "¿Cuál es su objetivo prioritario para su hijo/a?", options: ["🍏 Diversificar su alimentación suavemente","⚡ Mejorar concentración y energía","📈 Acompañar un crecimiento óptimo","⚖️ Ayudarle a alcanzar un peso saludable sin frustración"] }
      }
    },

    senior: {
      fr: {
        'muscle': { empathy: "La sarcopénie (fonte musculaire liée à l'âge) commence dès 50 ans — mais elle est réversible avec une nutrition protéique ciblée.", question: "Quels signes de fonte musculaire observez-vous chez votre parent ?", options: ["🚶 Difficulté à se lever d'une chaise sans aide","📉 Perte de poids involontaire ces derniers mois","💪 Fatigue rapide à la marche ou aux escaliers","🍖 Diminution de l'appétit pour la viande et les protéines"] },
        'os': { empathy: "La densité osseuse dépend directement des apports en calcium, vitamine D, K2 et magnésium — la nutrition est votre première ligne de défense.", question: "Quel est le statut osseux actuel de votre parent ?", options: ["🦴 Ostéoporose diagnostiquée par ostéodensitométrie","⚠️ Ostéopénie (stade pré-ostéoporose)","🤕 Fracture récente (poignet, hanche, vertèbre)","🔬 Pas encore de bilan osseux réalisé"] },
        'default': { empathy: "Après 70 ans, les besoins en protéines augmentent de 50% alors que l'appétit diminue — c'est le paradoxe nutritionnel du vieillissement.", question: "Comment se nourrit votre parent au quotidien ?", options: ["🍲 Repas réguliers mais portions très petites","🥫 Mange souvent seul(e), plats réchauffés","💊 Beaucoup de médicaments qui coupent l'appétit","🍵 Peu de variété, surtout du pain, soupe et thé"] }
      },
      ar: {
        'default': { empathy: "بعد 70 عاماً، تزداد الحاجة للبروتين بنسبة 50% بينما تنخفض الشهية — هذه مفارقة التغذية في الشيخوخة.", question: "كيف يتغذى والدك/تك يومياً؟", options: ["🍲 وجبات منتظمة لكن حصص صغيرة جداً","🥫 يأكل وحده غالباً، أطباق مسخنة","💊 أدوية كثيرة تقطع الشهية","🍵 تنوع قليل، خبز وشوربة وشاي غالباً"] }
      },
      en: {
        'muscle': { empathy: "Sarcopenia (age-related muscle wasting) begins at 50 — but it's reversible with targeted protein nutrition.", question: "What signs of muscle wasting do you observe in your parent?", options: ["🚶 Difficulty getting up from a chair unaided","📉 Unintentional weight loss in recent months","💪 Quick fatigue when walking or on stairs","🍖 Decreased appetite for meat and protein"] },
        'default': { empathy: "After 70, protein needs increase 50% while appetite decreases — this is the nutritional paradox of aging.", question: "How does your parent eat on a daily basis?", options: ["🍲 Regular meals but very small portions","🥫 Often eats alone, reheated meals","💊 Many medications that suppress appetite","🍵 Little variety, mostly bread, soup and tea"] }
      },
      es: {
        'default': { empathy: "Después de los 70, las necesidades de proteína aumentan 50% mientras el apetito disminuye.", question: "¿Cómo se alimenta su familiar diariamente?", options: ["🍲 Comidas regulares pero porciones muy pequeñas","🥫 Come solo/a frecuentemente, platos recalentados","💊 Muchos medicamentos que cortan el apetito","🍵 Poca variedad, sobre todo pan, sopa y té"] }
      }
    },

    metabolic: {
      fr: {
        'cholestérol': { empathy: "Le cholestérol LDL élevé n'est pas seulement une question de graisses alimentaires — c'est un problème d'inflammation et de qualité lipidique globale.", question: "Quel est votre profil lipidique actuel ?", options: ["📈 LDL élevé malgré les statines prescrites","⚖️ Triglycérides élevés (>1.5 g/L)","🔄 Ratio LDL/HDL déséquilibré","🆕 Diagnostic récent, pas encore de traitement"] },
        'hypertension': { empathy: "L'hypertension artérielle est le 'tueur silencieux' — la nutrition peut réduire la tension de 10-15 mmHg en 30 jours.", question: "Quel est votre statut tensionnel actuel ?", options: ["💊 Sous traitement mais tension encore mal contrôlée","📊 Tension limite (130-140/85-90) sans médicament","🏃 Bien contrôlée au repos mais monte à l'effort/stress","🆕 Découverte récente, j'explore les options naturelles"] },
        'foie': { empathy: "La stéatose hépatique (NAFLD) touche 25% de la population — elle est entièrement réversible par la nutrition dans la majorité des cas.", question: "Comment la stéatose a-t-elle été diagnostiquée ?", options: ["🔬 Échographie avec foie hyperéchogène","📊 Enzymes hépatiques élevées (ASAT, ALAT, GGT)","🩺 Découverte fortuite lors d'un bilan de routine","⚠️ Fibrose ou NASH suspectée par mon médecin"] },
        'default': { empathy: "L'inflammation chronique de bas grade est la racine commune de la plupart des maladies métaboliques — et elle se corrige par l'assiette.", question: "Quels marqueurs inflammatoires vous concernent ?", options: ["🔥 CRP élevée de manière chronique","🩸 Ferritine élevée (hors supplémentation en fer)","📊 Acide urique élevé / crises de goutte","🤷 Je ne connais pas mes marqueurs inflammatoires"] }
      },
      ar: {
        'default': { empathy: "الالتهاب المزمن منخفض الدرجة هو الجذر المشترك لمعظم الأمراض الأيضية — ويُصحح عبر التغذية.", question: "أي علامات التهابية تهمك؟", options: ["🔥 CRP مرتفع بشكل مزمن","🩸 فيريتين مرتفع (بدون مكملات حديد)","📊 حمض اليوريك مرتفع / نوبات نقرس","🤷 لا أعرف مؤشراتي الالتهابية"] }
      },
      en: {
        'cholesterol': { empathy: "High LDL cholesterol isn't just about dietary fats — it's about inflammation and overall lipid quality.", question: "What is your current lipid profile?", options: ["📈 High LDL despite prescribed statins","⚖️ Elevated triglycerides (>150 mg/dL)","🔄 Imbalanced LDL/HDL ratio","🆕 Recent diagnosis, no treatment yet"] },
        'default': { empathy: "Chronic low-grade inflammation is the common root of most metabolic diseases — and it's corrected through nutrition.", question: "Which inflammatory markers concern you?", options: ["🔥 Chronically elevated CRP","🩸 Elevated ferritin (without iron supplements)","📊 High uric acid / gout attacks","🤷 I don't know my inflammatory markers"] }
      },
      es: {
        'default': { empathy: "La inflamación crónica de bajo grado es la raíz común de la mayoría de enfermedades metabólicas.", question: "¿Qué marcadores inflamatorios le preocupan?", options: ["🔥 PCR crónicamente elevada","🩸 Ferritina elevada (sin suplementos de hierro)","📊 Ácido úrico alto / crisis de gota","🤷 No conozco mis marcadores inflamatorios"] }
      }
    }
  },

  // ===================================================================
  // STEP 5: DOSSIER CONTENT (final clinical report per track)
  // ===================================================================
  dossier: {
    weight: {
      fr: { headline: "Pourquoi votre corps stocke au lieu de brûler — et comment débloquer votre métabolisme", realities: ["Vos régimes passés ont ralenti votre métabolisme de base de 15 à 30%. Votre corps est en mode 'survie' et stocke chaque calorie excédentaire comme réserve de sécurité.","Vos fringales ne sont pas un manque de volonté. C'est un signal biologique : votre cerveau réclame les nutriments denses (protéines, graisses essentielles) qui manquent dans votre alimentation de la journée.","Votre gonflement abdominal du soir n'est pas du gras — c'est une fermentation digestive et une rétention d'eau inflammatoire qui se résolvent en 14 jours avec le bon protocole."], timeline: { days_14: "Disparition des fringales, énergie matinale retrouvée, début de dégonflement abdominal.", day_30: "Perte de 2 à 4 kg de masse grasse (pas de muscle), vêtements plus confortables, sommeil amélioré.", day_90: "Métabolisme relancé, poids stabilisé, autonomie alimentaire complète sans effet yo-yo." } },
      ar: { headline: "لماذا يخزن جسمك بدلاً من الحرق — وكيف تفتح قفل الأيض", realities: ["حمياتك السابقة أبطأت الأيض الأساسي بنسبة 15-30%. جسمك في وضع 'النجاة' ويخزن كل سعرة زائدة.","نوبات شراهتك ليست ضعف إرادة. إنها إشارة بيولوجية: دماغك يطالب بالعناصر الغذائية الكثيفة الناقصة.","انتفاخ بطنك المسائي ليس دهوناً — إنه تخمر هضمي واحتباس ماء التهابي يُحل في 14 يوماً."], timeline: { days_14: "اختفاء الشراهة، استعادة طاقة الصباح، بداية زوال انتفاخ البطن.", day_30: "خسارة 2-4 كغ من الدهون (ليس العضلات)، ملابس أكثر راحة، نوم أفضل.", day_90: "إعادة تنشيط الأيض، ثبات الوزن، استقلالية غذائية كاملة." } },
      en: { headline: "Why your body stores instead of burning — and how to unlock your metabolism", realities: ["Your past diets slowed your basal metabolism by 15-30%. Your body is in 'survival mode', storing every extra calorie as a safety reserve.","Your cravings aren't a lack of willpower. They're a biological signal: your brain demands the dense nutrients missing from your daily diet.","Your evening abdominal bloating isn't fat — it's digestive fermentation and inflammatory water retention that resolves in 14 days."], timeline: { days_14: "Cravings disappear, morning energy returns, abdominal deflation begins.", day_30: "2-4 kg fat loss (not muscle), clothes fit better, improved sleep.", day_90: "Metabolism reactivated, weight stabilized, complete food autonomy without yo-yo." } },
      es: { headline: "Por qué su cuerpo almacena en vez de quemar — y cómo desbloquear su metabolismo", realities: ["Sus dietas pasadas ralentizaron su metabolismo basal un 15-30%. Su cuerpo está en modo 'supervivencia'.","Sus antojos no son falta de voluntad. Son una señal biológica: su cerebro demanda los nutrientes densos que faltan.","Su hinchazón abdominal nocturna no es grasa — es fermentación digestiva y retención inflamatoria."], timeline: { days_14: "Desaparecen los antojos, energía matutina, inicio de deshinchamiento.", day_30: "Pérdida de 2-4 kg de grasa, ropa más cómoda, sueño mejorado.", day_90: "Metabolismo reactivado, peso estabilizado, autonomía alimentaria completa." } }
    },
    tca: {
      fr: { headline: "Comprendre les mécanismes de vos compulsions — et retrouver une relation sereine avec la nourriture", realities: ["Vos compulsions alimentaires sont orchestrées par un déséquilibre de sérotonine et de dopamine — pas par un défaut de caractère. C'est de la neurobiologie, pas de la morale.","Le cycle restriction-craquage renforce lui-même le circuit de la récompense. Plus vous vous privez, plus la réponse compulsive est violente et automatique.","La culpabilité post-repas génère du cortisol qui augmente le stockage abdominal et... les envies de sucre. C'est un cercle vicieux mesurable et cassable."], timeline: { days_14: "Apaisement des compulsions nocturnes, introduction de repas structurés sans culpabilité.", day_30: "Réduction significative des épisodes de craquage, meilleure conscience de la satiété.", day_90: "Relation restaurée avec la nourriture, flexibilité alimentaire retrouvée, autonomie émotionnelle." } },
      ar: { headline: "فهم آليات نوباتك — واستعادة علاقة سلمية مع الطعام", realities: ["نوباتك الغذائية تدار بخلل في السيروتونين والدوبامين — وليست عيباً في الشخصية.","دورة التقييد والانهيار تعزز نفسها. كلما حرمت نفسك أكثر، كانت الاستجابة القهرية أعنف.","الشعور بالذنب بعد الأكل يولد الكورتيزول الذي يزيد التخزين والرغبة في السكر. حلقة مفرغة قابلة للكسر."], timeline: { days_14: "تهدئة النوبات الليلية، إدخال وجبات منظمة بدون ذنب.", day_30: "تقليل كبير في نوبات الانهيار، وعي أفضل بالشبع.", day_90: "علاقة مرممة مع الطعام، مرونة غذائية واستقلالية عاطفية." } },
      en: { headline: "Understanding the mechanisms behind your compulsions — and restoring a peaceful relationship with food", realities: ["Your food compulsions are orchestrated by a serotonin/dopamine imbalance — not a character flaw.","The restriction-binge cycle reinforces itself. The more you deprive, the more violent the compulsive response.","Post-meal guilt generates cortisol that increases storage and sugar cravings. A measurable, breakable vicious cycle."], timeline: { days_14: "Nocturnal compulsions ease, structured meals without guilt introduced.", day_30: "Significant reduction in binge episodes, better satiety awareness.", day_90: "Restored relationship with food, regained flexibility and emotional autonomy." } },
      es: { headline: "Comprender los mecanismos de sus compulsiones — y restaurar una relación serena con la comida", realities: ["Sus compulsiones son orquestadas por un desequilibrio de serotonina/dopamina — no un defecto de carácter.","El ciclo restricción-atracón se refuerza a sí mismo. Cuanto más se priva, más violenta la respuesta.","La culpa post-comida genera cortisol que aumenta el almacenamiento y los antojos. Un círculo vicioso rompible."], timeline: { days_14: "Alivio de compulsiones nocturnas, comidas estructuradas sin culpa.", day_30: "Reducción significativa de episodios de atracón, mejor conciencia de saciedad.", day_90: "Relación restaurada con la comida, flexibilidad alimentaria y autonomía emocional." } }
    },
    digestive: {
      fr: { headline: "Votre intestin parle — voici ce qu'il essaie de vous dire", realities: ["Votre ballonnement du soir n'est pas du gras : c'est une fermentation excessive de sucres mal absorbés (FODMAPs) par votre microbiote déséquilibré.","L'alternance constipation/diarrhée (IBS) traduit une hypersensibilité de votre muqueuse intestinale — souvent amplifiée par le stress via le nerf vague.","Votre fatigue post-repas est liée à la perméabilité intestinale : des molécules alimentaires traversent votre barrière et activent votre système immunitaire en permanence."], timeline: { days_14: "Réduction des ballonnements de 50%, régularisation du transit, meilleur sommeil.", day_30: "Ventre plat et confortable, réintroduction progressive d'aliments évités.", day_90: "Microbiote restauré, diversité alimentaire retrouvée, confort digestif permanent." } },
      ar: { headline: "أمعاؤك تتكلم — إليك ما تحاول إخبارك به", realities: ["انتفاخك المسائي ليس دهوناً: إنه تخمر مفرط لسكريات سيئة الامتصاص (FODMAPs).","تناوب الإمساك والإسهال يعكس حساسية مفرطة لبطانة أمعائك — غالباً يضخمها التوتر.","إرهاقك بعد الأكل مرتبط بنفاذية الأمعاء: جزيئات غذائية تعبر حاجزك وتنشط جهاز المناعة باستمرار."], timeline: { days_14: "تقليل الانتفاخ 50%، انتظام الهضم، نوم أفضل.", day_30: "بطن مريح، إعادة إدخال تدريجية للأطعمة المحذوفة.", day_90: "ميكروبيوم مرمم، تنوع غذائي، راحة هضمية دائمة." } },
      en: { headline: "Your gut is speaking — here's what it's trying to tell you", realities: ["Your evening bloating isn't fat: it's excessive fermentation of poorly absorbed sugars (FODMAPs) by your imbalanced microbiome.","The constipation/diarrhea alternation reflects intestinal mucosal hypersensitivity — often amplified by stress via the vagus nerve.","Your post-meal fatigue is linked to intestinal permeability: food molecules cross your barrier and permanently activate your immune system."], timeline: { days_14: "50% bloating reduction, transit regularization, better sleep.", day_30: "Flat comfortable belly, gradual reintroduction of avoided foods.", day_90: "Restored microbiome, dietary diversity regained, permanent digestive comfort." } },
      es: { headline: "Su intestino habla — esto es lo que intenta decirle", realities: ["Su hinchazón nocturna no es grasa: es fermentación excesiva de azúcares mal absorbidos (FODMAPs).","La alternancia estreñimiento/diarrea refleja hipersensibilidad de la mucosa intestinal.","Su fatiga post-comida está ligada a la permeabilidad intestinal."], timeline: { days_14: "Reducción del 50% de hinchazón, regularización del tránsito.", day_30: "Vientre plano y cómodo, reintroducción progresiva de alimentos.", day_90: "Microbioma restaurado, diversidad alimentaria, confort digestivo permanente." } }
    },
    hormonal: {
      fr: { headline: "Rétablir l'harmonie hormonale — par la nutrition de précision", realities: ["Vos hormones ne fonctionnent pas isolément : insuline, cortisol, œstrogènes et thyroïde forment un orchestre dont chaque instrument influence les autres.","La prise de poids hormonale cible des zones spécifiques (ventre, hanches, cuisses) parce que les récepteurs d'œstrogènes y sont 4x plus concentrés.","Le SPM, l'acné et la chute de cheveux ne sont pas des fatalités — ce sont des symptômes de déséquilibres corrigibles par l'alimentation fonctionnelle."], timeline: { days_14: "Réduction de la rétention d'eau, amélioration de l'humeur prémenstruelle.", day_30: "Cycles plus réguliers, énergie stabilisée, diminution des fringales hormonales.", day_90: "Équilibre hormonal durable, disparition des symptômes gênants, poids stabilisé." } },
      ar: { headline: "استعادة الانسجام الهرموني — عبر التغذية الدقيقة", realities: ["هرموناتك لا تعمل بمعزل: الأنسولين والكورتيزول والإستروجين والغدة الدرقية أوركسترا كل آلة تؤثر على الأخرى.","الزيادة الهرمونية تستهدف مناطق محددة (بطن، أرداف) لأن مستقبلات الإستروجين أكثر تركيزاً 4 مرات هناك.","متلازمة ما قبل الحيض وحب الشباب وتساقط الشعر ليست قدراً — بل أعراض اختلالات قابلة للتصحيح غذائياً."], timeline: { days_14: "تقليل احتباس الماء، تحسن المزاج قبل الدورة.", day_30: "دورات أكثر انتظاماً، طاقة مستقرة.", day_90: "توازن هرموني دائم، اختفاء الأعراض المزعجة." } },
      en: { headline: "Restoring hormonal harmony — through precision nutrition", realities: ["Your hormones don't work in isolation: insulin, cortisol, estrogens and thyroid form an orchestra where each instrument influences the others.","Hormonal weight gain targets specific zones because estrogen receptors are 4x more concentrated there.","PMS, acne and hair loss aren't inevitable — they're symptoms of imbalances correctable through functional nutrition."], timeline: { days_14: "Water retention reduction, improved premenstrual mood.", day_30: "More regular cycles, stabilized energy, reduced hormonal cravings.", day_90: "Lasting hormonal balance, symptoms resolved, weight stabilized." } },
      es: { headline: "Restablecer la armonía hormonal — mediante nutrición de precisión", realities: ["Sus hormonas no funcionan aisladamente: forman una orquesta donde cada instrumento influye en los demás.","El aumento de peso hormonal apunta a zonas específicas donde los receptores de estrógeno están 4x más concentrados.","El SPM, acné y caída del cabello no son inevitables — son síntomas de desequilibrios corregibles."], timeline: { days_14: "Reducción de retención de agua, mejora del ánimo premenstrual.", day_30: "Ciclos más regulares, energía estabilizada.", day_90: "Equilibrio hormonal duradero, síntomas resueltos, peso estabilizado." } }
    },
    diabetes: {
      fr: { headline: "Reprendre le contrôle glycémique — votre plan nutritionnel de précision", realities: ["Votre glycémie n'est pas qu'une question de sucre : les graisses viscérales, le stress et le manque de sommeil augmentent directement votre résistance à l'insuline.","Les pics d'insuline post-repas ne dépendent pas que de la quantité de glucides, mais de leur qualité, de l'ordre de consommation et de la combinaison avec protéines et fibres.","La fatigue post-repas n'est pas normale — c'est un signe mesurable que votre pancréas compense un excès glycémique chronique."], timeline: { days_14: "Stabilisation glycémique, disparition des coups de fatigue post-repas.", day_30: "Réduction mesurable de l'HbA1c, meilleure sensibilité à l'insuline.", day_90: "Autonomie complète dans la gestion des glucides, glycémie durablement stable." } },
      ar: { headline: "استعادة السيطرة على السكر — خطتك الغذائية الدقيقة", realities: ["سكر دمك ليس مسألة سكر فقط: الدهون الحشوية والتوتر وقلة النوم تزيد مقاومة الأنسولين مباشرة.","قمم الأنسولين بعد الأكل لا تعتمد فقط على كمية الكربوهيدرات بل على جودتها وترتيب الأكل.","الإرهاق بعد الأكل ليس طبيعياً — إنه علامة قابلة للقياس أن بنكرياسك يعوض فائض سكر مزمن."], timeline: { days_14: "استقرار السكر، اختفاء إرهاق ما بعد الأكل.", day_30: "انخفاض ملموس في HbA1c، حساسية أفضل للأنسولين.", day_90: "استقلالية كاملة في إدارة الكربوهيدرات، سكر مستقر دائماً." } },
      en: { headline: "Regaining glycemic control — your precision nutrition plan", realities: ["Your blood sugar isn't just about sugar: visceral fat, stress and poor sleep directly increase insulin resistance.","Post-meal insulin spikes depend not only on carb quantity but quality, eating order, and protein/fiber pairing.","Post-meal fatigue isn't normal — it's a measurable sign your pancreas is compensating for chronic glycemic excess."], timeline: { days_14: "Glycemic stabilization, post-meal fatigue eliminated.", day_30: "Measurable HbA1c reduction, improved insulin sensitivity.", day_90: "Complete autonomy in carb management, durably stable blood sugar." } },
      es: { headline: "Recuperar el control glucémico — su plan nutricional de precisión", realities: ["Su glucemia no es solo cuestión de azúcar: grasa visceral, estrés y falta de sueño aumentan la resistencia a la insulina.","Los picos de insulina no dependen solo de la cantidad de carbohidratos sino de su calidad y combinación.","La fatiga post-comida no es normal — es señal medible de que su páncreas compensa un exceso glucémico crónico."], timeline: { days_14: "Estabilización glucémica, fatiga post-comida eliminada.", day_30: "Reducción medible de HbA1c, mejor sensibilidad a la insulina.", day_90: "Autonomía completa en gestión de carbohidratos, glucemia estable." } }
    },
    fatigue: {
      fr: { headline: "Sortir de l'épuisement — reprogrammer votre énergie cellulaire", realities: ["Votre fatigue n'est pas « dans la tête » : c'est un épuisement mesurable de vos réserves de fer, magnésium, vitamines B et CoQ10.","Le brouillard mental matinal signale que votre cortisol (hormone du réveil) ne monte plus assez tôt — souvent parce que vos surrénales sont épuisées.","L'effondrement de 14h est un crash glycémique causé par un petit-déjeuner trop sucré ou inexistant — pas par une mauvaise nuit."], timeline: { days_14: "Réveil plus facile, brouillard mental réduit, énergie stable l'après-midi.", day_30: "Endurance physique et mentale retrouvée, sommeil profond restauré.", day_90: "Réserves micronutritionnelles reconstituées, énergie naturelle et durable sans café." } },
      ar: { headline: "الخروج من الإرهاق — إعادة برمجة طاقتك الخلوية", realities: ["إرهاقك ليس 'في رأسك': إنه استنفاد قابل للقياس لمخزونك من الحديد والمغنيسيوم وفيتامينات B وCoQ10.","الضبابية الذهنية الصباحية تشير إلى أن الكورتيزول لا يرتفع بما يكفي — غالباً لأن الغدد الكظرية منهكة.","انهيار الثانية ظهراً هبوط سكر ناتج عن فطور حلو أو معدوم — وليس ليلة سيئة."], timeline: { days_14: "استيقاظ أسهل، تقليل الضبابية، طاقة مستقرة بعد الظهر.", day_30: "قدرة تحمل بدنية وذهنية، نوم عميق.", day_90: "احتياطيات مغذيات مرممة، طاقة طبيعية ومستدامة بدون قهوة." } },
      en: { headline: "Breaking free from exhaustion — reprogramming your cellular energy", realities: ["Your fatigue isn't 'in your head': it's a measurable depletion of iron, magnesium, B vitamins and CoQ10.","Morning brain fog signals your cortisol isn't rising early enough — often because your adrenals are exhausted.","The 2 PM crash is a glycemic crash from a too-sweet or nonexistent breakfast — not a bad night."], timeline: { days_14: "Easier waking, reduced brain fog, stable afternoon energy.", day_30: "Physical and mental endurance restored, deep sleep recovered.", day_90: "Micronutritional reserves rebuilt, natural sustainable energy without coffee." } },
      es: { headline: "Salir del agotamiento — reprogramar su energía celular", realities: ["Su fatiga no está 'en la cabeza': es un agotamiento medible de hierro, magnesio, vitaminas B y CoQ10.","La niebla mental matutina señala que su cortisol no sube lo suficiente — a menudo por glándulas suprarrenales agotadas.","El bajón de las 14h es un crash glucémico por un desayuno demasiado dulce o inexistente."], timeline: { days_14: "Despertar más fácil, niebla mental reducida, energía estable por la tarde.", day_30: "Resistencia física y mental restaurada, sueño profundo.", day_90: "Reservas micronutricionales reconstruidas, energía natural y sostenible." } }
    },
    pregnancy: {
      fr: { headline: "Nourrir deux vies — votre protocole de nutrition maternelle sur mesure", realities: ["Vos besoins en fer, folates et DHA augmentent de 50 à 100% pendant la grossesse. Une carence invisible impacte directement le développement neurologique de votre bébé.","Les nausées du 1er trimestre sont liées à l'HCG — elles protègent en réalité le fœtus des toxines mais peuvent être atténuées par des stratégies nutritionnelles précises.","Le diabète gestationnel touche 15% des grossesses et se gère remarquablement bien par l'alimentation — il protège votre bébé ET votre santé métabolique future."], timeline: { days_14: "Atténuation des nausées, énergie stabilisée, apports clés sécurisés.", day_30: "Glycémie maternelle optimale, prise de poids harmonieuse, vitalité retrouvée.", day_90: "Croissance fœtale optimale, préparation réussie pour l'accouchement et l'allaitement." } },
      ar: { headline: "تغذية حياتين — بروتوكولك الغذائي المخصص للأمومة", realities: ["احتياجاتك من الحديد والفوليك وDHA تزداد بنسبة 50-100% أثناء الحمل. نقص غير مرئي يؤثر مباشرة على نمو دماغ طفلك.","غثيان الثلث الأول مرتبط بهرمون HCG — يحمي الجنين فعلياً لكن يمكن تخفيفه باستراتيجيات غذائية دقيقة.","سكري الحمل يصيب 15% من الحوامل ويُدار بشكل ممتاز بالتغذية."], timeline: { days_14: "تخفيف الغثيان، طاقة مستقرة، تأمين العناصر الأساسية.", day_30: "سكر أمومي مثالي، زيادة وزن متناسقة.", day_90: "نمو جنيني مثالي، تحضير ناجح للولادة والرضاعة." } },
      en: { headline: "Nourishing two lives — your tailored maternal nutrition protocol", realities: ["Your iron, folate and DHA needs increase 50-100% during pregnancy. An invisible deficiency directly impacts your baby's neurological development.","First trimester nausea is linked to HCG — it actually protects the fetus but can be eased with precise nutritional strategies.","Gestational diabetes affects 15% of pregnancies and is remarkably manageable through nutrition."], timeline: { days_14: "Nausea relief, stabilized energy, key nutrients secured.", day_30: "Optimal maternal blood sugar, harmonious weight gain.", day_90: "Optimal fetal growth, successful preparation for delivery and breastfeeding." } },
      es: { headline: "Nutrir dos vidas — su protocolo de nutrición materna personalizado", realities: ["Sus necesidades de hierro, folatos y DHA aumentan 50-100% durante el embarazo.","Las náuseas del primer trimestre están ligadas a la HCG — protegen al feto pero pueden aliviarse con estrategias nutricionales.","La diabetes gestacional afecta al 15% de embarazos y se gestiona notablemente bien con nutrición."], timeline: { days_14: "Alivio de náuseas, energía estabilizada.", day_30: "Glucemia materna óptima, aumento de peso armonioso.", day_90: "Crecimiento fetal óptimo, preparación exitosa para parto y lactancia." } }
    },
    pediatric: {
      fr: { headline: "Le potentiel nutritionnel de votre enfant — libéré avec bienveillance", realities: ["La sélectivité alimentaire de votre enfant n'est pas un caprice — c'est une réponse sensorielle et digestive que la science sait corriger en douceur.","Un petit-déjeuner sucré (céréales, biscuits, jus) provoque un pic glycémique suivi d'un crash à 10h — première cause de déconcentration scolaire.","La diversification alimentaire se fait par exposition progressive et positive, jamais par la force — 15 expositions sont nécessaires avant qu'un enfant accepte un nouvel aliment."], timeline: { days_14: "Ambiance des repas apaisée, premiers progrès dans l'acceptation d'aliments.", day_30: "Énergie et concentration scolaire améliorées, réduction des conflits à table.", day_90: "Diversité alimentaire élargie, croissance harmonieuse, relation saine avec la nourriture." } },
      ar: { headline: "الإمكانيات الغذائية لطفلك — مُطلقة بحنان", realities: ["انتقائية طفلك ليست عناداً — إنها استجابة حسية وهضمية يعرف العلم كيف يصححها بلطف.","فطور حلو (حبوب، بسكويت، عصير) يسبب قمة سكر ثم هبوطاً — السبب الأول لعدم التركيز في المدرسة.","تنويع الطعام يتم بالتعرض التدريجي والإيجابي — 15 تعرض ضروري قبل أن يقبل الطفل طعاماً جديداً."], timeline: { days_14: "أجواء وجبات هادئة، تقدم أولي في قبول الأطعمة.", day_30: "طاقة وتركيز مدرسي أفضل، تقليل النزاعات على المائدة.", day_90: "تنوع غذائي أوسع، نمو متناسق، علاقة صحية مع الطعام." } },
      en: { headline: "Your child's nutritional potential — unlocked with care", realities: ["Your child's food selectivity isn't a whim — it's a sensory and digestive response science knows how to gently correct.","A sweet breakfast causes a glycemic spike then crash at 10 AM — the #1 cause of poor school concentration.","Food diversification happens through gradual positive exposure — 15 exposures are needed before a child accepts a new food."], timeline: { days_14: "Calmer mealtimes, first progress in food acceptance.", day_30: "Improved energy and school concentration, reduced table conflicts.", day_90: "Expanded food diversity, harmonious growth, healthy food relationship." } },
      es: { headline: "El potencial nutricional de su hijo — liberado con cariño", realities: ["La selectividad alimentaria no es un capricho — es una respuesta sensorial y digestiva que la ciencia sabe corregir.","Un desayuno dulce causa un pico glucémico y crash a las 10h — primera causa de desconcentración escolar.","La diversificación se hace por exposición progresiva positiva — 15 exposiciones son necesarias."], timeline: { days_14: "Comidas más tranquilas, primeros progresos en aceptación.", day_30: "Energía y concentración mejoradas, menos conflictos en la mesa.", day_90: "Diversidad alimentaria ampliada, crecimiento armonioso." } }
    },
    senior: {
      fr: { headline: "Préserver l'autonomie et la vitalité — le protocole nutritionnel senior", realities: ["Après 65 ans, les besoins en protéines augmentent de 50% (1.2g/kg/jour) alors que l'appétit diminue naturellement — c'est le paradoxe nutritionnel du vieillissement.","La fonte musculaire (sarcopénie) n'est pas inévitable : une nutrition protéique ciblée combinée à une activité minimale peut inverser la tendance en quelques semaines.","La dénutrition chez les seniors est silencieuse et touche 30% des plus de 70 ans — elle multiplie par 4 le risque de complications hospitalières."], timeline: { days_14: "Apports protéiques optimisés, énergie quotidienne améliorée.", day_30: "Stabilisation de la masse musculaire, meilleur équilibre à la marche.", day_90: "Force retrouvée, autonomie préservée, densité osseuse soutenue." } },
      ar: { headline: "الحفاظ على الاستقلالية والحيوية — البروتوكول الغذائي لكبار السن", realities: ["بعد 65 عاماً، تزداد الحاجة للبروتين 50% بينما تنخفض الشهية طبيعياً — هذه مفارقة التغذية في الشيخوخة.","ضمور العضلات ليس حتمياً: تغذية بروتينية مستهدفة مع نشاط بسيط يمكنها عكس الاتجاه في أسابيع.","سوء التغذية عند كبار السن صامت ويصيب 30% ممن تجاوزوا 70 — ويضاعف خطر المضاعفات 4 مرات."], timeline: { days_14: "تحسين المدخول البروتيني، طاقة يومية أفضل.", day_30: "استقرار الكتلة العضلية، توازن أفضل في المشي.", day_90: "قوة مستعادة، استقلالية محفوظة، دعم كثافة العظام." } },
      en: { headline: "Preserving autonomy and vitality — the senior nutrition protocol", realities: ["After 65, protein needs increase 50% while appetite naturally decreases — the nutritional paradox of aging.","Muscle wasting (sarcopenia) isn't inevitable: targeted protein nutrition with minimal activity can reverse it in weeks.","Senior malnutrition is silent and affects 30% of over-70s — it multiplies hospital complication risk by 4x."], timeline: { days_14: "Protein intake optimized, daily energy improved.", day_30: "Muscle mass stabilized, better walking balance.", day_90: "Strength regained, autonomy preserved, bone density supported." } },
      es: { headline: "Preservar la autonomía y vitalidad — el protocolo nutricional senior", realities: ["Después de 65 años, las necesidades de proteína aumentan 50% mientras el apetito disminuye.","La sarcopenia no es inevitable: nutrición proteica dirigida puede revertirla en semanas.","La desnutrición en mayores es silenciosa y afecta al 30% de mayores de 70 años."], timeline: { days_14: "Ingesta proteica optimizada, energía diaria mejorada.", day_30: "Masa muscular estabilizada, mejor equilibrio al caminar.", day_90: "Fuerza recuperada, autonomía preservada, densidad ósea apoyada." } }
    },
    metabolic: {
      fr: { headline: "Votre métabolisme peut se régénérer — voici le protocole nutritionnel ciblé", realities: ["Les maladies métaboliques (cholestérol, hypertension, stéatose) partagent une racine commune : l'inflammation chronique de bas grade entretenue par l'alimentation moderne.","La stéatose hépatique (foie gras) est réversible dans 90% des cas par la nutrition seule — sans médicament. C'est la maladie hépatique la plus répandue et la plus sous-diagnostiquée.","Réduire le LDL-cholestérol ne se fait pas en supprimant le beurre — c'est l'excès de sucres raffinés et de fructose qui est le vrai coupable de la production hépatique de triglycérides."], timeline: { days_14: "Réduction des marqueurs inflammatoires (CRP), meilleure énergie digestive.", day_30: "Amélioration du profil lipidique et de la tension artérielle.", day_90: "Stéatose significativement réduite, marqueurs métaboliques normalisés, médication potentiellement ajustable." } },
      ar: { headline: "أيضك قادر على التجدد — إليك البروتوكول الغذائي المستهدف", realities: ["الأمراض الأيضية (كوليسترول، ضغط، كبد دهني) تشترك في جذر واحد: التهاب مزمن منخفض الدرجة يغذيه الطعام الحديث.","الكبد الدهني قابل للعلاج في 90% من الحالات بالتغذية فقط — بدون دواء.","خفض LDL لا يتم بحذف الزبدة — السكريات المكررة والفركتوز هي المسبب الحقيقي لإنتاج الكبد للدهون الثلاثية."], timeline: { days_14: "تقليل علامات الالتهاب (CRP)، طاقة هضمية أفضل.", day_30: "تحسن في الملف الدهني وضغط الدم.", day_90: "تقليل كبير للكبد الدهني، مؤشرات أيضية طبيعية." } },
      en: { headline: "Your metabolism can regenerate — here's the targeted nutrition protocol", realities: ["Metabolic diseases (cholesterol, hypertension, fatty liver) share a common root: chronic low-grade inflammation fueled by modern diet.","Fatty liver (NAFLD) is reversible in 90% of cases through nutrition alone — no medication needed.","Reducing LDL isn't about cutting butter — refined sugars and fructose are the real culprits behind hepatic triglyceride production."], timeline: { days_14: "Inflammatory markers reduced (CRP), better digestive energy.", day_30: "Improved lipid profile and blood pressure.", day_90: "Fatty liver significantly reduced, metabolic markers normalized, medication potentially adjustable." } },
      es: { headline: "Su metabolismo puede regenerarse — aquí está el protocolo nutricional dirigido", realities: ["Las enfermedades metabólicas comparten una raíz común: inflamación crónica alimentada por la dieta moderna.","El hígado graso es reversible en el 90% de los casos solo con nutrición.","Reducir el LDL no se logra eliminando la mantequilla — los azúcares refinados son el verdadero culpable."], timeline: { days_14: "Marcadores inflamatorios reducidos, mejor energía digestiva.", day_30: "Perfil lipídico y presión arterial mejorados.", day_90: "Hígado graso significativamente reducido, marcadores metabólicos normalizados." } }
    }
  }
};
  
    /* Complete 4-Language Dictionary (FR, AR with RTL, EN, ES) */
    const translations = {
      fr: {
        ai_drawer_title: "Assistant Nutrition & Bien-Être",
        ai_drawer_trigger: "🤖 ASSISTANT BIEN-ÊTRE • CONSEILS",
        brand: "Inès Ben Abdennebi",
        btn_bilan: "COMMENCER MON BILAN GRATUIT",
        btn_explore: "EXPLORER NOS PROGRAMMES",
        btn_form: "FORMULAIRE DE RDV 30S",
        btn_reserve: "RÉSERVER UNE CONSULTATION",
        btn_send: "CONFIRMER LA DEMANDE (FORMULAIRE)",
        btn_wa: "RÉSERVATION WHATSAPP 1-CLIC",
        btn_wa_slot: "ENVOYER CE CHOIX SUR WHATSAPP",
        c1_head: "Adresse du Cabinet",
        c1_text: "Rue Ahmed Boulaiman (En face de MG), Radès, Tunis (Tunisie)",
        c2_head: "Téléphone & WhatsApp",
        c3_head: "Horaires de Consultation",
        c3_text: "Lundi – Samedi : 08:30 – 18:30 (Sur RDV)",
        card_badge: "VOTRE BIEN-ÊTRE",
        card_desc: "Suivi personnalisé adapté aux besoins spécifiques des enfants, personnes âgées et adultes au cabinet à Radès.",
        card_title: "PÉDIATRIE, SENIORS & FAMILLES",
        cnt_desc: "Prenez rendez-vous au cabinet à Radès ou sollicitez une téléconsultation avec notre équipe.",
        cnt_meta: "// CABINET & RDV",
        cnt_title: "Prêt(e) à démarrer votre suivi ?",
        contact_or: "OU",
        contact_pref: "Comment préférez-vous nous contacter ?",
        faq_a1: "La première séance dure 60 minutes complètes. Elle comprend un échange approfondi, un bilan de votre composition corporelle et la co-construction de votre plan alimentaire adapté.",
        faq_a2: "Apportez simplement vos bilans sanguins récents (de moins de 6 à 12 mois) si vous en disposez. Inutile d'en prescrire de nouveaux avant le premier RDV.",
        faq_a3: "Oui, nous assurons des téléconsultations sécurisées pour les patients résidant hors de Radès ou à l'international.",
        faq_q1: "Combien de temps dure la consultation ?",
        faq_q2: "Faut-il refaire des analyses de sang ?",
        faq_q3: "Proposez-vous des téléconsultations ?",
        hero_badge: "<i class=\"fa-solid fa-apple-whole\"></i> CABINET DE NUTRITION & DIÉTÉTIQUE",
        hero_headline: "Nutrition, Bien-Être & Accompagnement sur Mesure <span class=\"hero-subline\" style=\"display: block; font-size: 0.62em; font-style: italic; font-weight: 400; margin-top: 0.35rem;\">Cabinet Inès Ben Abdennebi — Radès</span>",
        hero_paragraph: "Accompagnement nutritionnel sur-mesure pour enfants, adultes et personnes âgées. Retrouvez vitalité, sérénité et équilibre métabolique avec une prise en charge attentionnée.",
        lbl_consent: "J'accepte que mes coordonnées soient traitées pour organiser mon rendez-vous médical et recevoir les consignes de consultation (Secret médical & RGPD respectés).",
        lbl_date: "Date Souhaitée pour la Consultation",
        lbl_dossier: "Votre Bilan Nutritionnel",
        lbl_name: "Nom & Prénom",
        lbl_phone: "Numéro de Téléphone",
        lbl_service: "Motif de Consultation",
        lbl_slot: "Quand souhaitez-vous votre rendez-vous ?",
        slot_opt_asap_morning: "🚀 Dès que possible - Matinée (08:30 - 13:00)",
        slot_opt_asap_afternoon: "🚀 Dès que possible - Après-midi (13:00 - 18:30)",
        slot_opt_this_week: "📅 Cette semaine - Premier créneau libre",
        slot_opt_saturday: "🗓️ Samedi matin (Créneau recherché)",
        slot_opt_remote: "💻 Téléconsultation à distance (En ligne)",
        ph_phone_short: "22 841 841",
        m_new_1: "<strong>Densité Nutritionnelle :</strong> Manger à votre faim des aliments denses pour éteindre les fringales du soir.",
        m_new_2: "<strong>Équilibre Hormonal :</strong> Régulation fine de l'insuline et de la thyroïde pour débloquer la perte de graisse.",
        m_new_3: "<strong>Santé Intestinale :</strong> Réparation du microbiote pour éliminer définitivement les ballonnements et inflammations.",
        m_new_4: "<strong>Transformation Durable :</strong> Un métabolisme réparé qui brûle l'énergie au lieu de la stocker.",
        m_new_badge: "NOTRE EXPERTISE CLINIQUE",
        m_new_title: "La Réhabilitation Métabolique",
        m_old_1: "<strong>Privation & Frustration :</strong> Affamer le corps en comptant chaque calorie, ruinant votre vie sociale.",
        m_old_2: "<strong>Perte Musculaire :</strong> La balance descend, mais vous perdez de l'eau et de la force, pas du gras.",
        m_old_3: "<strong>Alerte Biologique :</strong> Le corps panique, sécrète du cortisol (stress) et verrouille le stockage des graisses.",
        m_old_4: "<strong>L'Effet Yo-Yo :</strong> Le métabolisme de base est détruit. Vous reprenez tous les kilos au moindre écart.",
        m_old_badge: "L'ANCIENNE VOIE (L'ÉCHEC)",
        m_old_title: "La Restriction Calorique",
        m_sub: "L'équipe vous recontacte sous 24h pour valider votre créneau.",
        m_title: "Réserver une Consultation",
        nav_book: "RDV",
        nav_contact: "Contact",
        nav_diagnostic: "Bilan 60s",
        nav_faq: "FAQ",
        nav_home: "Accueil",
        nav_manifeste: "L'Approche",
        nav_services: "Programmes",
        nav_team: "L'Équipe",
        opt_s1: "Première Consultation & Bilan Nutritionnel",
        opt_s2: "Nutrition Pédiatrique (Enfants & Adolescents)",
        opt_s3: "Nutrition Gériatrique (Seniors & Longévité)",
        opt_s4: "Confort Digestif & Microbiote (SIBO / FODMAP)",
        opt_s5: "Équilibre Hormonal & SOPK",
        opt_s6: "Grossesse & Nutrition Maternelle",
        opt_s7: "Santé & Maladies Métaboliques (Diabète, Cholestérol)",
        opt_s8: "Perte de Poids & Recomposition Corporelle",
        opt_s9: "Téléconsultation en Ligne",
        ph_name: "Ex : Sarah Mansouri",
        ph_phone: "+216 22 --- ---",
        prg1_desc: "Prise en charge du syndrome du côlon irritable, SIBO, ballonnements et rééquilibrage de la flore intestinale (FODMAP).",
        prg1_title: "Confort Digestif & Microbiote",
        prg2_desc: "Régulation de l'insuline, syndrome des ovaires polykystiques, dysfonctionnements thyroïdiens et rééquilibrage du cycle.",
        prg2_title: "Équilibre Hormonal & SOPK",
        prg3_desc: "Prise en charge nutritionnelle de la femme enceinte et allaitante : couverture des besoins micro-nutritionnels, diabète gestationnel et post-partum serein.",
        prg3_title: "Grossesse & Nutrition Maternelle",
        prg4_desc: "Prise en charge diététique thérapeutique : diabète (Type 1 et 2), hypertension artérielle, dyslipidémies, stéatose hépatique et pathologies inflammatoires.",
        prg4_title: "Santé & Maladies Métaboliques",
        prg5_desc: "Perte de masse grasse ciblée sans fonte musculaire, rééducation alimentaire globale et stabilisation métabolique durable.",
        prg5_title: "Perte de Poids & Recomposition",
        prg_kids_desc: "Spécialiste de l'alimentation de l'enfant et de l'adolescent : croissance, surpoids infantile, néophobie et équilibre scolaire.",
        prg_kids_title: "Nutrition Pédiatrique (Enfants & Ado)",
        prg_more: "DÉCOUVRIR LE PROTOCOLE <i class=\"fa-solid fa-arrow-right\"></i>",
        prg_senior_desc: "Spécialiste du suivi des seniors : prise en charge de la sarcopénie (fonte musculaire), vitalité osseuse, prévention de la dénutrition et confort digestif quotidien.",
        prg_senior_title: "Nutrition Gériatrique (Personnes Âgées)",
        prg_tele_desc: "Consultations vidéo sécurisées pour les patients en région ou à l'international avec suivi hebdomadaire et plans digitaux.",
        prg_tele_title: "Téléconsultation en Ligne",
        s2_desc: "La prise de poids, l'épuisement ou les troubles digestifs ne sont pas des manques de volonté. Ce sont des signaux d'alarme biologiques. Nous arrêtons de traiter le symptôme pour enfin réparer la cause racine.",
        s2_meta: "// NOTRE APPROCHE",
        s2_title: "Pourquoi 95% des régimes échouent <br /><span style=\"font-style: italic;\">(et notre différence)</span>",
        s3_desc: "Des programmes ciblés élaborés selon vos bilans biologiques et votre cartographie métabolique.",
        s3_meta: "// 04 — NOS PROGRAMMES",
        s3_title: "Protocoles Nutritionnels Sur-Mesure",
        slot_opt1: "Matin (08:30 - 13:00)",
        slot_opt2: "Après-midi (13:00 - 18:30)",
        slot_opt3: "Premier créneau disponible",
        t1_bio: "\"Spécialiste de la prise en charge nutritionnelle des enfants, adolescents et personnes âgées. Ma mission est de vous accompagner avec bienveillance vers un équilibre alimentaire gourmand, sain et adapté à chaque étape de votre vie.\"",
        t1_name: "Inès Ben Abdennebi",
        t1_role: "SPÉCIALISTE NUTRITION ENFANTS, SENIORS & FAMILLES",
        t2_bio: "\"Prise en charge attentionnée et consultations dédiées pour l'accueil des patients locaux et internationaux.\"",
        t2_name: "Hadil Ounissi",
        t2_role: "COLLABORATRICE MULTILINGUE",
        team_desc: "Prise en charge professionnelle, personnalisée et bienveillante à Radès.",
        team_meta: "// 05 — EXPERTISE DU CABINET",
        team_title: "L'Équipe du Cabinet",
        wa_float_aria: "Contactez le cabinet sur WhatsApp"
      },
      ar: {
        ai_drawer_title: "مساعد التغذية والرفاهية",
        ai_drawer_trigger: "🤖 المساعد الصحي • إرشادات",
        brand: "إيناس بن عبد النبي",
        btn_bilan: "ابدأ تقييمك المجاني الآن",
        btn_explore: "اكتشف البرامج الغذائية",
        btn_form: "استمارة حجز سريع 30 ثانية",
        btn_reserve: "حجز موعد بالعيادة",
        btn_send: "تأكيد الطلب (استمارة)",
        btn_wa: "حجز مباشر عبر الواتساب 1-أنقر",
        btn_wa_slot: "إرسال هذا الموعد عبر واتساب",
        c1_head: "عنوان العيادة",
        c1_text: "نهج أحمد بوليمان (قبالة مغازة العامة MG)، رادس، تونس",
        c2_head: "الهاتف والواتساب",
        c3_head: "أوقات العمل",
        c3_text: "الإثنين – السبت : 08:30 – 18:30 (بموعد سابق)",
        card_badge: "التميز السريري",
        card_desc: "متابعة مخصصة تلبي الاحتياجات الحيوية للأطفال، كبار السن والبالغين برادس.",
        card_title: "الأطفال، كبار السن والعائلات",
        cnt_desc: "احجز موعدك بالعيادة برادس أو طلب استشارة عن بُعد.",
        cnt_meta: "// التواصل والتسجيل",
        cnt_title: "هل أنت مستعد لبدء رحلتك الصحية؟",
        contact_or: "أو",
        contact_pref: "كيف تفضل التواصل معنا؟",
        faq_a1: "تستغرق الجلسة الأولى 60 دقيقة كاملة: دراسة العادات الصحية، التقييم الغذائي الشامل، ووضع الخطة العلاجية الفردية.",
        faq_a2: "أحضر معك آخر التحاليل المتوفرة لديك (أقل من 6 إلى 12 شهراً). ليس من الضروري إجراء تحاليل جديدة مسبقاً إلا إذا طلبت الأخصائية ذلك بعد الاستشارة.",
        faq_a3: "نعم، نقدم استشارات مرئية آمنة ومتابعة دقيقة للمرضى في كامل الولايات التونسية أو بالخارج.",
        faq_q1: "كم تستغرق الاستشارة الأولى؟",
        faq_q2: "هل أحتاج لإجراء تحاليل دم جديدة قبل الموعد؟",
        faq_q3: "هل تقدمون استشارات عن بُعد؟",
        hero_badge: "<i class=\"fa-solid fa-apple-whole\"></i> عيادة التغذية والرفاهية",
        hero_headline: "التغذية، الرفاهية والمرافقة الصحية المخصصة <span class=\"hero-subline\" style=\"display: block; font-size: 0.62em; font-style: italic; font-weight: 400; margin-top: 0.35rem;\">عيادة إيناس بن عبد النبي — رادس</span>",
        hero_paragraph: "مرافقة غذائية موجهة للأطفال، البالغين وكبار السن. استعد الحيوية والتوازن الأيضي برعاية علمية دون حرمان في كل مراحل الحياة.",
        lbl_consent: "أوافق على استخدام بياناتي لتنظيم الموعد الطبي واستلام التعليمات السريرية (حماية البيانات والسر الطبي).",
        lbl_date: "التاريخ المفضل للاستشارة",
        lbl_dossier: "تقرير التقييم الغذائي",
        lbl_name: "الاسم واللقب",
        lbl_phone: "رقم الهاتف",
        lbl_service: "سبب الاستشارة",
        lbl_slot: "متى تفضل موعد استشارتك؟",
        slot_opt_asap_morning: "🚀 في أقرب وقت ممكن - الفترة الصباحية (08:30 - 13:00)",
        slot_opt_asap_afternoon: "🚀 في أقرب وقت ممكن - فترة بعد الظهر (13:00 - 18:30)",
        slot_opt_this_week: "📅 هذا الأسبوع - أول موعد متاح",
        slot_opt_saturday: "🗓️ صباح السبت (طلب مرتفع جداً)",
        slot_opt_remote: "💻 استشارة طبية عن بعد (عبر الإنترنت)",
        ph_phone_short: "22 841 841",
        m_new_1: "<strong>كثافة المغذيات:</strong> تناول وجبات مشبعة وكاملة لإطفاء نوبات الشراهة والرغبة في السكر مساءً.",
        m_new_2: "<strong>تناغم الهرمونات:</strong> تنظيم استجابة الأنسولين والغدة الدرقية لتنشيط حرق الدهون العنيدة طبيعياً.",
        m_new_3: "<strong>ترميم الميكروبيوم:</strong> إصلاح بطانة الأمعاء والتخلص نهائياً من الانتفاخات والالتهابات الهضمية.",
        m_new_4: "<strong>نتائج مستدامة:</strong> أيض نشط يحرق الطاقة بكفاءة بدلاً من تخزينها.",
        m_new_badge: "خبرتنا السريرية الفردية",
        m_new_title: "إعادة التأهيل الأيضي",
        m_old_1: "<strong>الحرمان والإحباط:</strong> تجويع الجسم وحساب كل سعرة حرارية، مما يعزل المريض اجتماعياً.",
        m_old_2: "<strong>فقدان الكتلة العضلية:</strong> انخفاض الرقم على الميزان نتيجة خسارة الماء والعضلات وليس الدهون العنيدة.",
        m_old_3: "<strong>إنذار بيولوجي:</strong> دخول الجسم في وضع الطوارئ وإفراز الكورتيزول الذي يقفل حرق الدهون.",
        m_old_4: "<strong>تأثير اليويو:</strong> تباطؤ الأيض الأساسي واستعادة كامل الوزن فور العودة للأكل الطبيعي.",
        m_old_badge: "الأسلوب القديم (الفشل المتكرر)",
        m_old_title: "الحرمان وحساب السعرات",
        m_sub: "سيتواصل معك فريقنا خلال 24 ساعة لتأكيد الموعد.",
        m_title: "حجز استشارة تغذية",
        nav_book: "حجز استشارة",
        nav_contact: "حجز موعد",
        nav_diagnostic: "التقييم 60 ثانية",
        nav_faq: "الأسئلة الشائعة",
        nav_home: "الرئيسية",
        nav_manifeste: "نهجنا العلاجي",
        nav_services: "البرامج العلاجية",
        nav_team: "فريق العيادة",
        opt_s1: "استشارة أولى وتقييم غذائي شامل",
        opt_s2: "تغذية الأطفال والمراهقين",
        opt_s3: "تغذية كبار السن والحيوية",
        opt_s4: "راحة الجهاز الهضمي والقولون",
        opt_s5: "التوازن الهرموني وتكيس المبايض",
        opt_s6: "تغذية الحوامل والمرضعات",
        opt_s7: "الصحة والتوازن الأيضي (السكري، الكوليسترول)",
        opt_s8: "خسارة الوزن وتنسيق القوام",
        opt_s9: "استشارة طبية عن بُعد",
        ph_name: "مثال: سارة المنصوري",
        ph_phone: "‎+216 22 --- ---",
        prg1_desc: "علاج متلازمة القولون العصبي، فرط النمو البكتيري، الانتفاخات وحمية FODMAP السريرية.",
        prg1_title: "راحة القولون والميكروبيوم",
        prg2_desc: "تنظيم حساسية الأنسولين، متلازمة تكيس المبايض (PCOS)، خمول الغدة الدرقية وتنظيم الدورة.",
        prg2_title: "التوازن الهرموني وتكيس المبايض",
        prg3_desc: "رعاية غذائية علاجية للحوامل والمرضعات: ضبط سكري الحمل، تغطية المغذيات، والتعافي الصحي بعد الولادة.",
        prg3_title: "تغذية الحامل والمرضع",
        prg4_desc: "علاج غذائي للأمراض المزمنة: السكري (النوع 1 و 2)، ضغط الدم، اضطراب الدهون، الكبد الدهني، ومتلازمة التمثيل الغذائي.",
        prg4_title: "الأمراض المزمنة والأيضية",
        prg5_desc: "استهداف الدهون الحشوية مع الحفاظ الكامل على الكتلة العضلية، تنشيط الأيض، وتثبيت الوزن نهائياً.",
        prg5_title: "خسارة الدهون وإعادة تشكيل القوام",
        prg_kids_desc: "أخصائية في تغذية الأطفال والمراهقين: مرافقة النمو السليم، معالجة السمنة والانتقائية، وتعزيز التركيز الدراسي.",
        prg_kids_title: "تغذية الأطفال والمراهقين",
        prg_more: "اكتشف تفاصيل البرنامج <i class=\"fa-solid fa-arrow-left\"></i>",
        prg_senior_desc: "أخصائية في متابعة كبار السن: علاج ضمور العضلات (الساركوبينيا)، تقوية العظام، الوقاية من سوء التغذية ودعم الحيوية.",
        prg_senior_title: "تغذية كبار السن",
        prg_tele_desc: "استشارات مرئية آمنة ومتابعة دقيقة للمرضى المقيمين خارج رادس أو خارج تونس مع خطة غذائية متكاملة.",
        prg_tele_title: "الاستشارة الطبية عن بُعد",
        s2_desc: "زيادة الوزن أو الخمول أو اضطرابات الهضم ليست نقصاً في الإرادة، بل إشارات بيولوجية دفاعية من جسمك. نتوقف عن معالجة الأعراض لنعالج جذور المشكلة.",
        s2_meta: "// نهجنا العلاجي",
        s2_title: "لماذا تفشل 95% من الحميات التقليدية <br /><span style=\"font-style: italic;\">(وما الذي يميز نهجنا)</span>",
        s3_desc: "بروتوكولات فردية مصممة بناءً على تحاليلك الطبية وقياساتك الأيضية الدقيقة.",
        s3_meta: "// 04 — برامجنا السريرية",
        s3_title: "بروتوكولات علاجية مخصصة",
        slot_opt1: "صباحاً (08:30 - 13:00)",
        slot_opt2: "بعد الظهر (13:00 - 18:30)",
        slot_opt3: "أقرب موعد متاح",
        t1_bio: "\"أخصائية في الرعاية الغذائية للأطفال والمراهقين وكبار السن. مهمتي مرافقتكم بكل عناية نحو توازن صحي ولذيذ يناسب كل مرحلة من مراحل حياتكم.\"",
        t1_name: "إيناس بن عبد النبي",
        t1_role: "أخصائية تغذية الأطفال، كبار السن والعائلات",
        t2_bio: "\"استقبال ورعاية مخصصة للمرضى المحليين والدوليين بمختلف اللغات.\"",
        t2_name: "هديل الونيسي",
        t2_role: "مساعدة متعددة اللغات",
        team_desc: "رعاية طبية احترافية، فردية ومبنية على الإنصات برادس.",
        team_meta: "// 05 — الكفاءات السريرية",
        team_title: "فريق العيادة",
        wa_float_aria: "تواصل مع العيادة عبر واتساب"
      },
      en: {
        ai_drawer_title: "Nutrition & Wellness Assistant",
        ai_drawer_trigger: "🤖 WELLNESS ASSISTANT • TIPS",
        brand: "Inès Ben Abdennebi",
        btn_bilan: "START MY FREE ASSESSMENT",
        btn_explore: "EXPLORE OUR PROGRAMS",
        btn_form: "EXPRESS 30S BOOKING FORM",
        btn_reserve: "BOOK A CONSULTATION",
        btn_send: "CONFIRM REQUEST (FORM)",
        btn_wa: "1-CLICK WHATSAPP BOOKING",
        btn_wa_slot: "SEND THIS SELECTION VIA WHATSAPP",
        c1_head: "Clinic Address",
        c1_text: "Ahmed Boulaiman Street (Opposite MG Supermarket), Radès, Tunis (Tunisia)",
        c2_head: "Phone & WhatsApp",
        c3_head: "Opening Hours",
        c3_text: "Monday – Saturday: 08:30 – 18:30 (By Appointment)",
        card_badge: "WELLNESS & EXPERTISE",
        card_desc: "Personalized care tailored to the specific needs of children, elderly patients, and adults in Radès.",
        card_title: "PEDIATRICS, SENIORS & FAMILIES",
        cnt_desc: "Book your appointment at our Radès clinic or request a remote teleconsultation.",
        cnt_meta: "// CLINIC & CONTACT",
        cnt_title: "Ready to start your journey?",
        contact_or: "OR",
        contact_pref: "How would you prefer to contact us?",
        faq_a1: "The initial session lasts a full 60 minutes. It encompasses a lifestyle intake, nutritional assessment, and co-creating your custom plan.",
        faq_a2: "Simply bring recent lab work (under 6 to 12 months) if available. It is not necessary to order new tests prior to the initial visit.",
        faq_a3: "Yes, we offer secure video teleconsultations for patients living outside Radès or abroad.",
        faq_q1: "How long does the consultation last?",
        faq_q2: "Do I need new blood tests before visiting?",
        faq_q3: "Do you provide teleconsultations?",
        hero_badge: "<i class=\"fa-solid fa-apple-whole\"></i> NUTRITION & WELLNESS CENTER",
        hero_headline: "Nutrition, Wellness & Tailored Guidance <span class=\"hero-subline\" style=\"display: block; font-size: 0.62em; font-style: italic; font-weight: 400; margin-top: 0.35rem;\">Cabinet Inès Ben Abdennebi — Radès</span>",
        hero_paragraph: "Tailored clinical nutrition care for children, seniors, and adults. Restore vitality, serenity, and metabolic balance through attentive guidance at every stage of life.",
        lbl_consent: "I agree that my contact details will be used to organize my medical consultation and receive pre-visit guidance (Medical confidentiality respected).",
        lbl_date: "Preferred Consultation Date",
        lbl_dossier: "Your Nutrition Assessment",
        lbl_name: "Full Name",
        lbl_phone: "Phone Number",
        lbl_service: "Consultation Reason",
        lbl_slot: "When would you like your appointment?",
        slot_opt_asap_morning: "🚀 As soon as possible - Morning (08:30 - 13:00)",
        slot_opt_asap_afternoon: "🚀 As soon as possible - Afternoon (13:00 - 18:30)",
        slot_opt_this_week: "📅 This week - First available slot",
        slot_opt_saturday: "🗓️ Saturday morning (High demand)",
        slot_opt_remote: "💻 Online consultation (Remote)",
        ph_phone_short: "22 841 841",
        m_new_1: "<strong>Nutrient Density:</strong> Eating to satiety with nutrient-rich foods to shut down evening cravings.",
        m_new_2: "<strong>Hormonal Harmony:</strong> Fine-tuning insulin and thyroid function to unlock real fat loss.",
        m_new_3: "<strong>Gut Health:</strong> Repairing the microbiome to eliminate bloating and discomfort for good.",
        m_new_4: "<strong>Lasting Transformation:</strong> A repaired metabolism that efficiently burns energy rather than storing it.",
        m_new_badge: "OUR CLINICAL EXPERTISE",
        m_new_title: "Metabolic Rehabilitation",
        m_old_1: "<strong>Deprivation & Frustration:</strong> Starving the body by counting every calorie, ruining your social life.",
        m_old_2: "<strong>Muscle Loss:</strong> The scale drops, but you lose water and strength, not stubborn fat.",
        m_old_3: "<strong>Biological Alarm:</strong> The body panics, spikes cortisol (stress), and locks down fat storage.",
        m_old_4: "<strong>The Yo-Yo Effect:</strong> Basal metabolic rate crashes. You regain all weight at the slightest slip.",
        m_old_badge: "THE OLD WAY (FAILURE)",
        m_old_title: "Calorie Restriction",
        m_sub: "Our team will contact you within 24h to confirm your slot.",
        m_title: "Book a Consultation",
        nav_book: "Book Consultation",
        nav_contact: "Contact",
        nav_diagnostic: "60s Assessment",
        nav_faq: "FAQ",
        nav_home: "Home",
        nav_manifeste: "Our Approach",
        nav_services: "Programs",
        nav_team: "The Team",
        opt_s1: "First Consultation & Nutrition Assessment",
        opt_s2: "Pediatric Nutrition (Children & Teens)",
        opt_s3: "Geriatric Nutrition (Seniors & Healthy Aging)",
        opt_s4: "Digestive Comfort & Gut Health",
        opt_s5: "Hormonal Balance & PCOS",
        opt_s6: "Pregnancy & Maternal Nutrition",
        opt_s7: "Metabolic Health (Diabetes, Cholesterol)",
        opt_s8: "Weight Loss & Healthy Recomposition",
        opt_s9: "Online Teleconsultation",
        ph_name: "e.g., Sarah Mansouri",
        ph_phone: "+216 22 --- ---",
        prg1_desc: "Management of IBS, SIBO, bloating, and low-FODMAP gut flora restoration.",
        prg1_title: "Gut Health & Microbiome",
        prg2_desc: "Insulin sensitivity, polycystic ovary syndrome, thyroid health, and cycle harmony.",
        prg2_title: "Hormonal Balance & PCOS",
        prg3_desc: "Specialized clinical nutrition for pregnancy and lactation: gestational diabetes management, micronutrient coverage, and serene postpartum recovery.",
        prg3_title: "Pregnancy & Maternal Nutrition",
        prg4_desc: "Nutritional therapy for metabolic balance: diabetes (Type 1 & 2), hypertension, lipids, and liver health.",
        prg4_title: "Chronic & Metabolic Health",
        prg5_desc: "Targeted visceral and fat loss while preserving lean muscle mass, whole-food metabolic rehabilitation, and long-term stabilization.",
        prg5_title: "Weight Management & Body Recomposition",
        prg_kids_desc: "Specialist in children's & adolescent nutrition: growth, childhood weight management, selective eating, and school energy balance.",
        prg_kids_title: "Pediatric Nutrition (Children & Teens)",
        prg_more: "DISCOVER PROTOCOL <i class=\"fa-solid fa-arrow-right\"></i>",
        prg_senior_desc: "Specialist in senior care: muscle preservation, bone vitality, nutrient-rich meals, and daily digestive ease.",
        prg_senior_title: "Geriatric Nutrition (Seniors)",
        prg_tele_desc: "Secure video consultations for patients living outside Radès or abroad with full remote coaching.",
        prg_tele_title: "Online Teleconsultation",
        s2_desc: "Weight gain, exhaustion, or digestive issues are not failures of willpower. They are biological alarm bells. We stop treating symptoms to heal the root cause.",
        s2_meta: "// OUR APPROACH",
        s2_title: "Why 95% of Diets Fail <br /><span style=\"font-style: italic;\">(and how we differ)</span>",
        s3_desc: "Personalized nutrition programs designed to support your body, vitality, and well-being at every stage of life.",
        s3_meta: "// 04 — OUR PROGRAMS",
        s3_title: "Tailored Nutrition Programs",
        slot_opt1: "Morning (08:30 - 13:00)",
        slot_opt2: "Afternoon (13:00 - 18:30)",
        slot_opt3: "Earliest available slot",
        t1_bio: "\"Specializing in nutritional guidance for children, adolescents, and seniors. My mission is to support you with care toward an enjoyable, healthy, and tailored dietary balance at every stage of life.\"",
        t1_name: "Inès Ben Abdennebi",
        t1_role: "NUTRITION SPECIALIST FOR CHILDREN, SENIORS & FAMILIES",
        t2_bio: "\"Dedicated care and support for local and international patients.\"",
        t2_name: "Hadil Ounissi",
        t2_role: "MULTILINGUAL COLLABORATOR",
        team_desc: "Professional, personalized, and compassionate care in Radès.",
        team_meta: "// 05 — CLINICAL EXPERTISE",
        team_title: "The Practice Team",
        wa_float_aria: "Contact the clinic on WhatsApp"
      },
      es: {
        ai_drawer_title: "Asistente de Nutrición y Bienestar",
        ai_drawer_trigger: "🤖 ASISTENTE DE BIENESTAR • CONSEJOS",
        brand: "Inès Ben Abdennebi",
        btn_bilan: "COMENZAR MI EVALUACIÓN GRATUITA",
        btn_explore: "EXPLORAR PROGRAMAS",
        btn_form: "FORMULARIO DE RESERVA 30S",
        btn_reserve: "RESERVAR CONSULTA",
        btn_send: "CONFIRMAR SOLICITUD (FORMULARIO)",
        btn_wa: "RESERVA WHATSAPP 1-CLIC",
        btn_wa_slot: "ENVIAR ESTA ELECCIÓN POR WHATSAPP",
        c1_head: "Dirección de la Clínica",
        c1_text: "Calle Ahmed Boulaiman (Frente a MG), Radès, Túnez",
        c2_head: "Teléfono y WhatsApp",
        c3_head: "Horario de Atención",
        c3_text: "Lunes – Sábado: 08:30 – 18:30 (Con Cita Previa)",
        card_badge: "BIENESTAR Y EXPERIENCIA",
        card_desc: "Mapeo metabólico integral de su vitalidad celular y masa muscular en Radès.",
        card_title: "PEDIATRÍA, SENIORS Y FAMILIAS",
        cnt_desc: "Reserve su cita en la clínica de Radès o pida una teleconsulta.",
        cnt_meta: "// CONTACTO Y CITAS",
        cnt_title: "¿Listo para comenzar su seguimiento?",
        contact_or: "O",
        contact_pref: "¿Cómo prefiere ponerse en contacto con nosotros?",
        faq_a1: "La primera sesión dura 60 minutos completos: historial de hábitos, valoración nutricional integral y elaboración del plan a medida.",
        faq_a2: "Traiga simplemente sus análisis recientes (de menos de 6 a 12 meses) si dispone de ellos. No es necesario realizar nuevos análisis antes de su cita.",
        faq_a3: "Sí, ofrecemos teleconsultas seguras por videollamada para pacientes en otras regiones o en el extranjero.",
        faq_q1: "¿Cuánto dura la consulta?",
        faq_q2: "¿Es necesario repetir análisis de sangre?",
        faq_q3: "¿Ofrecen teleconsultas?",
        hero_badge: "<i class=\"fa-solid fa-apple-whole\"></i> CENTRO DE NUTRICIÓN Y BIENESTAR",
        hero_headline: "Nutrición, Bienestar y Acompañamiento a Medida <span class=\"hero-subline\" style=\"display: block; font-size: 0.62em; font-style: italic; font-weight: 400; margin-top: 0.35rem;\">Gabinete Inès Ben Abdennebi — Radès</span>",
        hero_paragraph: "Nutrición personalizada basada en análisis metabólico y bienestar integral. Recupere su vitalidad sin dietas estrictamente restrictivas.",
        lbl_consent: "Acepto que mis datos se utilicen para gestionar mi cita médica y recibir instrucciones previas (Confidencialidad médica y RGPD).",
        lbl_date: "Fecha Deseada para la Consulta",
        lbl_dossier: "Su Evaluación Nutricional",
        lbl_name: "Nombre y Apellidos",
        lbl_phone: "Teléfono",
        lbl_service: "Motivo de Consulta",
        lbl_slot: "¿Cuándo desea su cita?",
        slot_opt_asap_morning: "🚀 Lo antes posible - Por la mañana (08:30 - 13:00)",
        slot_opt_asap_afternoon: "🚀 Lo antes posible - Por la tarde (13:00 - 18:30)",
        slot_opt_this_week: "📅 Esta semana - Primer turno libre",
        slot_opt_saturday: "🗓️ Sábado por la mañana (Muy solicitado)",
        slot_opt_remote: "💻 Consulta en línea (A distancia)",
        ph_phone_short: "22 841 841",
        m_new_1: "<strong>Densidad Nutricional:</strong> Comer hasta saciarse alimentos ricos para apagar los antojos nocturnos.",
        m_new_2: "<strong>Equilibrio Hormonal:</strong> Regulación precisa de insulina y tiroides para desbloquear la pérdida de grasa.",
        m_new_3: "<strong>Salud Intestinal:</strong> Reparación de la microbiota para eliminar definitivamente la hinchazón e inflamación.",
        m_new_4: "<strong>Transformación Sostenible:</strong> Un metabolismo reparado que quema energía en lugar de almacenarla.",
        m_new_badge: "NUESTRA EXPERIENCIA CLÍNICA",
        m_new_title: "La Rehabilitación Metabólica",
        m_old_1: "<strong>Privación y Frustración:</strong> Matar de hambre al cuerpo contando cada caloría, arruinando su vida social.",
        m_old_2: "<strong>Pérdida Muscular:</strong> La báscula baja, pero pierde agua y fuerza, no grasa.",
        m_old_3: "<strong>Alarma Biológica:</strong> El cuerpo entra en pánico, segrega cortisol (estrés) y bloquea la quema de grasa.",
        m_old_4: "<strong>El Efecto Rebote:</strong> El metabolismo basal se daña. Recupera los kilos al menor descuido.",
        m_old_badge: "EL MÉTODO ANTIGUO (EL FRACASO)",
        m_old_title: "La Restricción Calórica",
        m_sub: "Le contactaremos en 24h para confirmar su horario.",
        m_title: "Reservar Consulta",
        nav_book: "Reservar Cita",
        nav_contact: "Contacto",
        nav_diagnostic: "Auto-Diagnóstico 60s",
        nav_faq: "Preguntas Frecuentes",
        nav_home: "Inicio",
        nav_manifeste: "El Enfoque",
        nav_services: "Programas",
        nav_team: "El Equipo",
        opt_s1: "Primera Consulta y Evaluación Nutricional",
        opt_s2: "Nutrición Pediátrica (Niños y Adolescentes)",
        opt_s3: "Nutrición Geriátrica (Adultos Mayores)",
        opt_s4: "Confort Digestif y Salud Intestinal",
        opt_s5: "Equilibrio Hormonal y SOP",
        opt_s6: "Embarazo y Nutrición Materna",
        opt_s7: "Salud y Metabolismo (Diabetes, Colesterol)",
        opt_s8: "Pérdida de Peso y Recomposición",
        opt_s9: "Teleconsulta en Línea",
        ph_name: "ej: Sarah Mansouri",
        ph_phone: "+216 22 --- ---",
        prg1_desc: "Tratamiento de síndrome de intestino irritable, SIBO y dieta FODMAP.",
        prg1_title: "Salud Digestiva y Microbiota",
        prg2_desc: "Regulación de insulina, síndrome de ovario poliquístico y ciclo.",
        prg2_title: "Equilibrio Hormonal y SOP",
        prg3_desc: "Atención nutricional especializada para el embarazo y lactancia: control de diabetes gestacional, micronutrición y recuperación posparto.",
        prg3_title: "Embarazo y Nutrición Materna",
        prg4_desc: "Atención dietética para el equilibrio metabólico: diabetes (Tipo 1 y 2), hipertensión, dislipidemia e hígado graso.",
        prg4_title: "Salud y Equilibrio Metabólico",
        prg5_desc: "Pérdida de grasa localizada manteniendo la masa muscular magra y estabilización metabólica duradera.",
        prg5_title: "Pérdida de Peso y Recomposición",
        prg_kids_desc: "Especialista en nutrición infantil: crecimiento, sobrepeso y energía escolar.",
        prg_kids_title: "Nutrición Pediátrica (Niños y Jóvenes)",
        prg_more: "VER PROTOCOLO <i class=\"fa-solid fa-arrow-right\"></i>",
        prg_senior_desc: "Especialista en adultos mayores: preservación muscular, vitalidad ósea, prevención de la desnutrición y bienestar diario.",
        prg_senior_title: "Nutrición Geriátrica (Adultos Mayores)",
        prg_tele_desc: "Consultas por videollamada segura para pacientes internacionales o fuera de Radès con seguimiento remoto.",
        prg_tele_title: "Teleconsulta en Línea",
        s2_desc: "El aumento de peso, el agotamiento o los problemas digestivos no son falta de voluntad. Son alarmas biológicas. Dejamos de tratar los síntomas para reparar la causa raíz.",
        s2_meta: "// NUESTRO ENFOQUE",
        s2_title: "Por qué el 95% de las dietas fracasan <br /><span style=\"font-style: italic;\">(y nuestra diferencia)</span>",
        s3_desc: "Programas personalizados diseñados para potenciar su vitalidad y bienestar en cada etapa de la vida.",
        s3_meta: "// 04 — NUESTROS PROGRAMAS",
        s3_title: "Programas de Nutrición a Medida",
        slot_opt1: "Mañana (08:30 - 13:00)",
        slot_opt2: "Tarde (13:00 - 18:30)",
        slot_opt3: "Primer horario disponible",
        t1_bio: "\"Especialista en el cuidado nutricional de niños, adolescentes y adultos mayores. Mi misión es acompañarle con dedicación hacia un equilibrio saludable adaptado a cada etapa de la vida.\"",
        t1_name: "Inès Ben Abdennebi",
        t1_role: "ESPECIALISTA EN NUTRICIÓN DE NIÑOS, SENIORS Y FAMILIAS",
        t2_bio: "\"Atención dedicada y consultas adaptadas para la acogida de pacientes locales e internacionales.\"",
        t2_name: "Hadil Ounissi",
        t2_role: "COLABORADORA MULTILINGÜE",
        team_desc: "Atención profesional, personalizada y cercana en Radès.",
        team_meta: "// 05 — EXPERIENCIA CLÍNICA",
        team_title: "El Equipo de la Clínica",
        wa_float_aria: "Contacte con la clínica por WhatsApp"
      }
    };

    const WHATSAPP_NUMBER = "21622841841";
    let currentLang = 'fr';

    // Dynamic copyright year initialization & saved language restore
    document.addEventListener('DOMContentLoaded', () => {
      const el = document.getElementById('currentYear');
      if (el) el.textContent = new Date().getFullYear();

      // Prevent selection of past dates
      const dateEl = document.getElementById('bookingDate');
      if (dateEl) {
        const today = new Date().toISOString().split('T')[0];
        dateEl.min = today;
      }

      try {
        const savedLang = localStorage.getItem('cabinet_lang');
        if (savedLang && translations[savedLang]) {
          setLanguage(savedLang);
        } else if (typeof updateWhatsAppLinks === 'function') {
          updateWhatsAppLinks();
        }
      } catch (e) {
        if (typeof updateWhatsAppLinks === 'function') {
          updateWhatsAppLinks();
        }
      }
    });

    function setLanguage(lang) {
      if (!translations[lang]) return;
      currentLang = lang;

      try {
        localStorage.setItem('cabinet_lang', lang);
      } catch (e) {}

      // Update HTML lang attribute for screen readers & search bots
      document.documentElement.lang = lang;

      // Toggle active language button UI
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase().includes(lang));
      });

      // Handle RTL support for Arabic
      if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
      } else {
        document.documentElement.removeAttribute('dir');
      }

      // Translate all data-i18n elements
      const elements = document.querySelectorAll('[data-i18n]');
      elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
          el.innerHTML = translations[lang][key];
        }
      });

      // Translate all data-i18n-placeholder elements
      const phElements = document.querySelectorAll('[data-i18n-placeholder]');
      phElements.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
          el.setAttribute('placeholder', translations[lang][key]);
        }
      });

      // Translate all data-i18n-aria elements
      const ariaElements = document.querySelectorAll('[data-i18n-aria]');
      ariaElements.forEach(el => {
        const key = el.getAttribute('data-i18n-aria');
        if (translations[lang] && translations[lang][key]) {
          el.setAttribute('aria-label', translations[lang][key]);
        }
      });

      // Synchronize language with AIEngine
      if (window.AIEngine && typeof window.AIEngine.setLanguage === 'function') {
        window.AIEngine.setLanguage(lang);
      }

      // Synchronize dynamic WhatsApp links
      if (typeof updateWhatsAppLinks === 'function') {
        updateWhatsAppLinks();
      }

      // Re-render diagnostic component in chosen language
      if (typeof renderDiagnostic === 'function') {
        renderDiagnostic();
      }
    }

    /* Modal Engine & Overlay Handling (with Mobile Background Scroll Lock) */
    function openModal(id) {
      const modal = document.getElementById(id);
      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeModal(id) {
      const modal = document.getElementById(id);
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    }

    /* FAQ Accordion Toggle */
    function toggleFaq(itemEl) {
      if (!itemEl) return;
      const wasActive = itemEl.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
      if (!wasActive) itemEl.classList.add('active');
    }

    function handleModalBackdropClick(event, id) {
      if (event.target && event.target.id === id) {
        closeModal(id);
      }
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal('bookingModal');
        closeMobileMenu();
      }
    });

    /* Mobile Navigation Engine */
    function toggleMobileMenu() {
      const navLinks = document.querySelector('.nav-links');
      const toggleBtn = document.getElementById('mobileToggle');
      if (navLinks) {
        const isOpen = navLinks.classList.toggle('mobile-open');
        if (toggleBtn) {
          toggleBtn.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
        }
      }
    }

    function closeMobileMenu() {
      const navLinks = document.querySelector('.nav-links');
      const toggleBtn = document.getElementById('mobileToggle');
      if (navLinks) {
        navLinks.classList.remove('mobile-open');
      }
      if (toggleBtn) {
        toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
      }
    }

    // Auto-close mobile menu on clicking outside
    document.addEventListener('click', function(event) {
      const navLinks = document.querySelector('.nav-links');
      const toggleBtn = document.getElementById('mobileToggle');
      if (navLinks && navLinks.classList.contains('mobile-open')) {
        if (!navLinks.contains(event.target) && (!toggleBtn || !toggleBtn.contains(event.target))) {
          closeMobileMenu();
        }
      }
    });

    function getWhatsAppUrl() {
      const phone = typeof WHATSAPP_NUMBER !== 'undefined' ? WHATSAPP_NUMBER : "21622841841";
      
      // 1. Message de base selon la langue
      let baseMsg = "Bonjour Cabinet de Nutrition Inès Ben Abdennebi, je souhaite prendre rendez-vous.";
      if (currentLang === 'ar') baseMsg = "مرحباً عيادة التغذية إيناس بن عبد النبي، أود حجز موعد.";
      if (currentLang === 'en') baseMsg = "Hello Inès Ben Abdennebi Nutrition Clinic, I would like to book an appointment.";
      if (currentLang === 'es') baseMsg = "Hola Clínica de Nutrición Inès Ben Abdennebi, deseo reservar una cita.";

      // 2. La Magie : Ajouter le résumé complet du Quiz si le patient l'a terminé !
      if (window.AIEngine && window.AIEngine.state.isComplete) {
        let trackName = window.AIEngine.state.track || 'weight';
        const trackTranslations = {
          fr: { weight: "Perte de Poids", medical: "Suivi Médical", digestive: "Confort Digestif", pediatric: "Pédiatrie" },
          ar: { weight: "خسارة الوزن", medical: "متابعة طبية", digestive: "الجهاز الهضمي", pediatric: "تغذية الأطفال" },
          en: { weight: "Weight Loss", medical: "Medical Support", digestive: "Gut Health", pediatric: "Pediatrics" },
          es: { weight: "Pérdida de Peso", medical: "Seguimiento Médico", digestive: "Salud Digestiva", pediatric: "Pediatría" }
        };
        let translatedTrack = (trackTranslations[currentLang] && trackTranslations[currentLang][trackName]) || (trackTranslations.fr && trackTranslations.fr[trackName]) || trackName.toUpperCase();
        let score = (window.AIEngine.state.biometrics && window.AIEngine.state.biometrics.metabolic_score) ? window.AIEngine.state.biometrics.metabolic_score : 85;
        
        let answersSummary = '';
        if (window.AIEngine.state.history && window.AIEngine.state.history.length > 0) {
          answersSummary = window.AIEngine.state.history.map((h, i) => `   • Étape ${i + 1} : ${h.selection}`).join('\n');
        }

        let quizData = `\n\n🎯 *SYNTHÈSE DU BILAN EN LIGNE* :\n• *Profil détecté* : ${translatedTrack}\n• *Score de vitalité* : ${score}/100`;
        if (answersSummary) {
          quizData += `\n• *Détail des réponses* :\n${answersSummary}`;
        }

        if (currentLang === 'ar') {
          let arSummary = '';
          if (window.AIEngine.state.history && window.AIEngine.state.history.length > 0) {
            arSummary = window.AIEngine.state.history.map((h, i) => `   • المرحلة ${i + 1} : ${h.selection}`).join('\n');
          }
          quizData = `\n\n🎯 *تقرير التقييم الغذائي عبر الموقع* :\n• *الملف* : ${translatedTrack}\n• *نقاط الحيوية* : ${score}/100`;
          if (arSummary) {
            quizData += `\n• *تفاصيل الإجابات* :\n${arSummary}`;
          }
        } else if (currentLang === 'en') {
          let enSummary = '';
          if (window.AIEngine.state.history && window.AIEngine.state.history.length > 0) {
            enSummary = window.AIEngine.state.history.map((h, i) => `   • Step ${i + 1}: ${h.selection}`).join('\n');
          }
          quizData = `\n\n🎯 *ONLINE ASSESSMENT SUMMARY* :\n• *Detected Profile*: ${translatedTrack}\n• *Vitality Score*: ${score}/100`;
          if (enSummary) {
            quizData += `\n• *Responses Summary*:\n${enSummary}`;
          }
        } else if (currentLang === 'es') {
          let esSummary = '';
          if (window.AIEngine.state.history && window.AIEngine.state.history.length > 0) {
            esSummary = window.AIEngine.state.history.map((h, i) => `   • Paso ${i + 1}: ${h.selection}`).join('\n');
          }
          quizData = `\n\n🎯 *SÍNTESIS DE LA EVALUACIÓN EN LÍNEA* :\n• *Perfil detectado*: ${translatedTrack}\n• *Puntuación de vitalidad*: ${score}/100`;
          if (esSummary) {
            quizData += `\n• *Detalle de respuestas*:\n${esSummary}`;
          }
        }
        
        baseMsg += quizData;
      }

      return `https://wa.me/${phone}?text=${encodeURIComponent(baseMsg)}`;
    }

    function updateWhatsAppLinks() {
      const url = getWhatsAppUrl();
      const waFloat = document.getElementById('waFloatBtn');
      const contactWa = document.getElementById('contactWhatsAppBtn');
      if (waFloat) waFloat.href = url;
      if (contactWa) contactWa.href = url;
    }

    function openWhatsAppModal() {
      const url = getWhatsAppUrl();
      window.open(url, '_blank');
    }

    function openWhatsAppWithSlot() {
      const phone = typeof WHATSAPP_NUMBER !== 'undefined' ? WHATSAPP_NUMBER : "21622841841";
      const nameInput = (document.getElementById('bookingName') && document.getElementById('bookingName').value.trim()) || "Patient(e)";
      const dateInput = (document.getElementById('bookingDate') && document.getElementById('bookingDate').value) || "Date à convenir";
      const slotSelect = (document.getElementById('bookingSlot') && document.getElementById('bookingSlot').value) || "Premier créneau disponible";
      const serviceSelect = (document.getElementById('serviceSelect') && document.getElementById('serviceSelect').value) || "Première Consultation";

      let baseMsg = `Bonjour Cabinet Inès Ben Abdennebi,\n\nJe souhaite réserver un rendez-vous :\n👤 Nom : ${nameInput}\n📅 Date souhaitée : ${dateInput}\n⏰ Créneau : ${slotSelect}\n🎯 Motif : ${serviceSelect}`;

      if (currentLang === 'ar') {
        baseMsg = `مرحباً عيادة الأخصائية إيناس بن عبد النبي،\n\nأود حجز موعد استشارة :\n👤 الاسم : ${nameInput}\n📅 التاريخ المفضل : ${dateInput}\n⏰ الفترة الزمنية : ${slotSelect}\n🎯 سبب الاستشارة : ${serviceSelect}`;
      } else if (currentLang === 'en') {
        baseMsg = `Hello Cabinet Inès Ben Abdennebi,\n\nI would like to book a consultation:\n👤 Name: ${nameInput}\n📅 Preferred Date: ${dateInput}\n⏰ Time Slot: ${slotSelect}\n🎯 Reason: ${serviceSelect}`;
      } else if (currentLang === 'es') {
        baseMsg = `Hola Gabinete Inès Ben Abdennebi,\n\nDeseo reservar una cita:\n👤 Nombre: ${nameInput}\n📅 Fecha deseada: ${dateInput}\n⏰ Horario preferido: ${slotSelect}\n🎯 Motivo: ${serviceSelect}`;
      }

      // Si le patient a aussi fait le quiz de l'IA, on ajoute ses résultats au message
      if (window.AIEngine && window.AIEngine.state && window.AIEngine.state.isComplete) {
        let trackName = window.AIEngine.state.track || 'weight';
        const trackTranslations = {
          fr: { weight: "Perte de Poids", medical: "Suivi Médical", digestive: "Confort Digestif", pediatric: "Pédiatrie" },
          ar: { weight: "خسارة الوزن", medical: "متابعة طبية", digestive: "الجهاز الهضمي", pediatric: "تغذية الأطفال" },
          en: { weight: "Weight Loss", medical: "Medical Support", digestive: "Gut Health", pediatric: "Pediatrics" },
          es: { weight: "Pérdida de Peso", medical: "Seguimiento Médico", digestive: "Salud Digestiva", pediatric: "Pediatría" }
        };
        let translatedTrack = (trackTranslations[currentLang] && trackTranslations[currentLang][trackName]) || (trackTranslations.fr && trackTranslations.fr[trackName]) || trackName.toUpperCase();
        let score = (window.AIEngine.state.biometrics && window.AIEngine.state.biometrics.metabolic_score) ? window.AIEngine.state.biometrics.metabolic_score : 85;

        if (currentLang === 'ar') {
          baseMsg += `\n\n📊 تقرير التقييم عبر الموقع :\n• الملف : ${translatedTrack}\n• نقاط الحيوية : ${score}/100`;
        } else if (currentLang === 'en') {
          baseMsg += `\n\n📊 Online Assessment Summary:\n• Profile: ${translatedTrack}\n• Vitality Score: ${score}/100`;
        } else if (currentLang === 'es') {
          baseMsg += `\n\n📊 Resumen de Evaluación en Línea:\n• Perfil: ${translatedTrack}\n• Puntuación de Vitalidad: ${score}/100`;
        } else {
          baseMsg += `\n\n📊 Bilan en ligne :\n• Profil : ${translatedTrack}\n• Score de vitalité : ${score}/100`;
        }
      }

      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(baseMsg)}`, '_blank');
    }

    function openProgramDetails(prgKey) {
      const select = document.getElementById('serviceSelect');
      if (select) {
        const programMap = {
          'p_pediatric': 'Nutrition Pédiatrique',
          'p_kids': 'Nutrition Pédiatrique',
          'p_digestive': 'Confort Digestif',
          'p_gut': 'Confort Digestif',
          'p_medical': 'Maladies Métaboliques',
          'p_metabolic': 'Maladies Métaboliques',
          'p_weight': 'Perte de Poids',
          'p_seniors': 'Nutrition Gériatrique',
          'p_hormonal': 'Équilibre Hormonal',
          'p_pregnancy': 'Grossesse & Maternité',
          'p_tele': 'Téléconsultation en Ligne'
        };
        if (programMap[prgKey]) {
          select.value = programMap[prgKey];
        } else {
          select.value = 'Première Consultation';
        }
      }
      openModal('bookingModal');
    }

    let isFormSubmitting = false;

    async function handleFormSubmit(e) {
      e.preventDefault();
      if (isFormSubmitting) return;

      const form = e.target;
      const phoneInput = form.querySelector('input[name="telephone"]');
      
      // Clean and validate phone number
      const rawPhone = phoneInput ? phoneInput.value.trim() : '';
      const cleanPhone = rawPhone.replace(/[\s\-\.\(\)]/g, '');
      
      // Automatically prepend +216 if not already present
      const fullPhone = (cleanPhone.startsWith('+') || cleanPhone.startsWith('00')) ? cleanPhone : '+216' + cleanPhone;
      
      // Validation: Tunisian numbers (8 digits, with optional +216 or 00216) or valid international numbers (>= 8 digits)
      const tunisianRegex = /^(\+?216|00216)?[2459]\d{7}$/;
      const generalPhoneRegex = /^\+?[0-9]{8,15}$/;
      const isValid = tunisianRegex.test(fullPhone) || (fullPhone.startsWith('+') && generalPhoneRegex.test(fullPhone)) || /^\d{8}$/.test(cleanPhone);
      
      let existingErr = document.getElementById('phoneErrorNotice');
      if (!isValid) {
        if (phoneInput) {
          phoneInput.style.borderColor = '#ef4444';
          phoneInput.style.backgroundColor = '#fef2f2';
          phoneInput.focus();
        }
        const errorMessages = {
          fr: "Veuillez saisir un numéro de téléphone valide à 8 chiffres.",
          ar: "يرجى إدخال رقم هاتف صحيح متكون من 8 أرقام.",
          en: "Please enter a valid 8-digit phone number.",
          es: "Por favor, introduzca un número de teléfono válido de 8 dígitos."
        };
        const errorMsg = errorMessages[currentLang] || errorMessages.fr;
        
        if (!existingErr && phoneInput && phoneInput.parentNode) {
          existingErr = document.createElement('div');
          existingErr.id = 'phoneErrorNotice';
          existingErr.style.color = '#ef4444';
          existingErr.style.fontSize = '0.82rem';
          existingErr.style.marginTop = '0.4rem';
          existingErr.style.fontWeight = '600';
          phoneInput.parentNode.appendChild(existingErr);
        }
        if (existingErr) {
          existingErr.textContent = errorMsg;
        }
        return;
      }
      
      // Prepend +216 to the submitted value
      if (phoneInput) {
        phoneInput.value = fullPhone;
      }
      
      // Clean up error state if valid
      if (existingErr) existingErr.remove();
      if (phoneInput) {
        phoneInput.style.borderColor = '';
        phoneInput.style.backgroundColor = '';
      }

      isFormSubmitting = true;
      const submitBtn = document.getElementById('bookingSubmitBtn');
      const originalText = submitBtn ? submitBtn.innerHTML : 'CONFIRMER LA DEMANDE';
      
      const loadingTexts = {
        fr: '<i class="fa-solid fa-spinner fa-spin"></i> Envoi en cours...',
        ar: '<i class="fa-solid fa-spinner fa-spin"></i> جاري الإرسال...',
        en: '<i class="fa-solid fa-spinner fa-spin"></i> Sending request...',
        es: '<i class="fa-solid fa-spinner fa-spin"></i> Enviando solicitud...'
      };
      const loadingLabel = loadingTexts[currentLang] || loadingTexts.fr;

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = loadingLabel;
      }

      const successMessages = {
        fr: "Merci ! Votre demande de rendez-vous a bien été transmise à notre cabinet. L'équipe d'Inès Ben Abdennebi vous recontactera sous 24h.",
        ar: "شكراً لك! تم إرسال طلب الموعد بنجاح إلى عيادتنا. سيتواصل معك فريق إيناس بن عبد النبي خلال 24 ساعة.",
        en: "Thank you! Your appointment request has been successfully sent. Inès Ben Abdennebi's team will contact you within 24 hours.",
        es: "¡Gracias! Su solicitud de cita ha sido enviada con éxito. El equipo de Inès Ben Abdennebi le contactará en menos de 24 horas."
      };
      const alertMsg = successMessages[currentLang] || successMessages.fr;

      const nomVal = form.elements['nom'] ? form.elements['nom'].value : '';
      const telVal = form.elements['telephone'] ? form.elements['telephone'].value : '';
      const dateVal = form.elements['date_souhaitee'] ? form.elements['date_souhaitee'].value : '';
      const creneauVal = form.elements['creneau'] ? form.elements['creneau'].value : '';
      
      let fallbackMsg = `Bonjour Cabinet de Nutrition Inès Ben Abdennebi, je souhaite prendre rendez-vous :\n- Nom : ${nomVal}\n- Tél : ${telVal}\n- Date : ${dateVal}\n- Créneau : ${creneauVal}`;
      if (currentLang === 'ar') {
        fallbackMsg = `مرحباً عيادة التغذية إيناس بن عبد النبي، أود حجز موعد :\n- الاسم : ${nomVal}\n- الهاتف : ${telVal}\n- التاريخ : ${dateVal}\n- الوقت : ${creneauVal}`;
      } else if (currentLang === 'en') {
        fallbackMsg = `Hello Inès Ben Abdennebi Nutrition Clinic, I would like to book an appointment :\n- Name : ${nomVal}\n- Phone : ${telVal}\n- Date : ${dateVal}\n- Slot : ${creneauVal}`;
      } else if (currentLang === 'es') {
        fallbackMsg = `Hola Clínica de Nutrición Inès Ben Abdennebi, deseo reservar una cita :\n- Nombre : ${nomVal}\n- Tel : ${telVal}\n- Fecha : ${dateVal}\n- Turno : ${creneauVal}`;
      }
      
      const phone = "21622841841";
      const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(fallbackMsg)}`;

      try {
        const formData = new FormData(form);
        const response = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString()
        });
        if (!response.ok) {
          throw new Error(`Server responded with ${response.status}`);
        }
        
        // Success path: Store in Netlify dashboard, then trigger background WhatsApp notification
        try {
          const dossierVal = form.elements['dossier_patient_ia'] ? form.elements['dossier_patient_ia'].value : '';
          await fetch("/api/notify-booking", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              nom: nomVal,
              telephone: telVal,
              date: dateVal,
              creneau: creneauVal,
              dossier: dossierVal
            })
          });
        } catch (waError) {
          console.warn("Failed to trigger background WhatsApp notification:", waError);
        }

        alert(alertMsg);
        form.reset();
        closeModal('bookingModal');
      } catch (err) {
        console.warn("Netlify form submission error, triggering WhatsApp fallback:", err);
        
        const redirectAlerts = {
          fr: "Transmission de votre demande par WhatsApp...",
          ar: "جاري تحويل طلبك إلى واتساب لإتمام الحجز...",
          en: "Redirecting to WhatsApp to submit your request...",
          es: "Redirigiendo a WhatsApp para enviar su solicitud..."
        };
        alert(redirectAlerts[currentLang] || redirectAlerts.fr);
        window.open(waUrl, '_blank');
        form.reset();
        closeModal('bookingModal');
      } finally {
        isFormSubmitting = false;
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      }
    }

    /* Smooth Scroll Engine */
    function scrollToSection(id) {
      const sec = document.getElementById(id);
      if (sec) {
        sec.scrollIntoView({ behavior: 'smooth' });
      }
    }

    function revealQuiz() {
      const quizWrapper = document.getElementById('aiEngineWrapper');
      if (quizWrapper) {
        // 1. On affiche le quiz
        quizWrapper.style.display = 'block';
        
        // 2. On fait défiler l'écran vers le quiz en douceur
        setTimeout(() => {
          quizWrapper.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 50);
      }
    }

    // High-performance RAF scroll listener for pagination dots
    let isScrollTicking = false;
    window.addEventListener('scroll', () => {
      if (!isScrollTicking) {
        window.requestAnimationFrame(() => {
          const sections = ['hero', 'diagnostic', 'manifeste', 'services', 'team', 'contact'];
          const dots = document.querySelectorAll('.dot-item');

          let current = 'hero';
          sections.forEach(secId => {
            const el = document.getElementById(secId);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= 0) {
                current = secId;
              }
            }
          });

          sections.forEach((secId, idx) => {
            if (dots[idx]) {
              dots[idx].classList.toggle('active', secId === current);
            }
          });
          isScrollTicking = false;
        });
        isScrollTicking = true;
      }
    }, { passive: true });

    /* ==========================================================================
       3D LOGO REVEAL & INTRO LANGUAGE SELECTOR ENGINE
       ========================================================================== */
    let introTimer = null;

    function showLanguageSelector(e) {
      if (e) e.stopPropagation();
      if (introTimer) clearTimeout(introTimer);
      const intro = document.getElementById('introScreen');
      if (intro) {
        intro.classList.add('show-langs');
      }
    }

    function enterSiteWithLanguage(lang) {
      if (typeof setLanguage === 'function') {
        setLanguage(lang || 'fr');
      }
      try { sessionStorage.setItem('siteIntroSeen', 'true'); } catch(e){}
      const intro = document.getElementById('introScreen');
      if (intro) {
        intro.style.opacity = '0';
        intro.style.visibility = 'hidden';
        setTimeout(() => {
          intro.style.display = 'none';
        }, 500);
      }
      if (window.AIEngine && typeof window.AIEngine.setLanguage === 'function') {
        window.AIEngine.setLanguage(lang);
      }
      setTimeout(() => {
        const diagSec = document.getElementById('diagnostic');
        if (diagSec) {
          diagSec.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }

    function enterSite(lang) {
      enterSiteWithLanguage(lang || 'fr');
    }

    /* ==========================================================================
       CONVERSATIONAL AI CLINICAL NUTRITIONIST ENGINE STATE MACHINE
       ========================================================================== */
    const AIEngine = {
      state: {
        turn: 1,
        history: [],
        previousSelection: '',
        target: null, // 'moi', 'enfant', 'parent'
        track: 'weight',
        sex: null,
        age: null,
        profileAnswer: null,
        biometrics: {
          metabolic_score: 42,
          digestive_load: 38,
          endocrine_strain: 45
        },
        isComplete: false,
        finalDossier: null,
        isLoading: false
      },

      init() {
        this.renderInitialTurn();
      },

      async handleOptionClick(optionText, cardEl) {
        if (this.state.isLoading) return;
        this.state.isLoading = true;

        const QD = window.QUIZ_DATA;

        // TURN 1: Detect TARGET (Moi, Enfant, Parent)
        if (this.state.turn === 1 && QD) {
          const lang = this.state.lang || 'fr';
          const opts = QD.targets[lang].options;
          const idx = opts.indexOf(optionText);
          if (idx === 1) this.state.target = 'enfant';
          else if (idx === 2) this.state.target = 'parent';
          else this.state.target = 'moi';
        }

        // TURN 2: Extract sex + age from combined profile option
        if (this.state.turn === 2) {
          let selLower = (optionText || '').toLowerCase();
          if (selLower.includes('femme') || selLower.includes('fille') || selLower.includes('أنثى') || selLower.includes('بنت') || selLower.includes('female') || selLower.includes('girl') || selLower.includes('mujer') || selLower.includes('niña')) {
            this.state.sex = 'female';
          } else if (selLower.includes('homme') || selLower.includes('garçon') || selLower.includes('ذكر') || selLower.includes('ولد') || selLower.includes('male') || selLower.includes('boy') || selLower.includes('hombre') || selLower.includes('niño') || selLower.includes('رجل')) {
            this.state.sex = 'male';
          }
          this.state.profileAnswer = optionText;
          
          if (this.state.target === 'enfant') this.state.track = 'pediatric';
          if (this.state.target === 'parent') this.state.track = 'senior';
        }

        // TURN 3: Detect track from 8 adult archetypes (only if target == 'moi')
        if (this.state.turn === 3 && this.state.target === 'moi' && QD) {
          const lang = this.state.lang || 'fr';
          const archetypes = QD.archetypes[lang] || QD.archetypes.fr;
          const idx = archetypes.indexOf(optionText);
          if (idx >= 0 && QD.trackIds[idx]) {
            this.state.track = QD.trackIds[idx];
          } else {
            // Default fallback
            this.state.track = 'weight';
          }
        }


        // Interactive visual tap feedback
        if (cardEl) {
          cardEl.classList.add('selected-tap');
          const arrow = cardEl.querySelector('.ai-option-arrow');
          if (arrow) arrow.innerHTML = '<i class="fa-solid fa-check"></i>';

          const siblings = cardEl.parentElement ? cardEl.parentElement.querySelectorAll('.ai-option-card') : [];
          siblings.forEach(sib => {
            if (sib !== cardEl) sib.classList.add('faded-out');
          });
        }

        this.state.previousSelection = optionText;
        this.state.history.push({
          turn: this.state.turn,
          selection: optionText
        });

        // 300ms tactile delay before smooth transition
        await new Promise(r => setTimeout(r, 300));

        const stage = document.getElementById('aiStage');
        if (stage) stage.classList.add('stage-fade-out');

        await new Promise(r => setTimeout(r, 250));
        this.renderLoadingState();

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);

        try {
          const response = await fetch('/api/ai-diagnostic-engine', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            signal: controller.signal,
            body: JSON.stringify({
              turn: this.state.turn,
              previous_selection: optionText,
              history: this.state.history,
              track: this.state.track,
              lang: this.state.lang || (typeof currentLang !== 'undefined' ? currentLang : 'fr')
            })
          });

          clearTimeout(timeoutId);

          if (!response.ok) {
            throw new Error('API Response Error ' + response.status);
          }

          const data = await response.json();
          this.state.turn = data.current_turn;
          this.state.biometrics = data.biometric_updates || this.state.biometrics;
          this.state.isComplete = data.is_complete;
          this.state.finalDossier = data.final_results || data.final_dossier;

          await new Promise(r => setTimeout(r, 150));
          
          this.state.isLoading = false;
          if (this.state.turn === 3 && this.state.target === 'moi') {
            this.renderChipsTurn('archetypes', 3);
          } else {
            this.renderTurnData(data);
          }

        } catch (err) {
          clearTimeout(timeoutId);
          console.warn('Backend API fallback triggered (network/timeout):', err);
          const nextTurn = this.state.turn + 1;
          const fallbackData = this.getFallbackTurnData(optionText, nextTurn, this.state.track);
          
          this.state.turn = fallbackData.current_turn;
          this.state.biometrics = fallbackData.biometric_updates || this.state.biometrics;
          this.state.isComplete = fallbackData.is_complete;
          this.state.finalDossier = fallbackData.final_results || fallbackData.final_dossier;
          this.state.isLoading = false;
          
          if (fallbackData.current_turn === 3 && this.state.target === 'moi') {
            this.renderChipsTurn('archetypes', 3);
          } else {
            this.renderTurnData(fallbackData);
          }
        }
      },

      // ================================================================
      // NEW DATA-DRIVEN FALLBACK ENGINE — 5 Steps, 10 Archetypes
      // Step 1: Archetype → Step 2: Profile → Step 3: Clinical → Step 4: Adaptive → Step 5: Dossier
      // ================================================================
      getFallbackTurnData(optionText, turn, currentTrack) {
        const QD = window.QUIZ_DATA;
        const lang = this.state.lang || (typeof currentLang !== 'undefined' ? currentLang : 'fr');
        const track = currentTrack || this.state.track || 'weight';
        this.state.track = track;

        // Helper: lookup data from QUIZ_DATA with fallback chain
        const lookup = (section, trk, lng) => {
          if (!QD || !QD[section]) return null;
          const trackData = QD[section][trk || track];
          if (!trackData) return null;
          return trackData[lng || lang] || trackData['fr'] || null;
        };

        // ============================================
        // STEP 2: PROFILE (Sex + Age combined)
        // ============================================
        if (turn === 2) {
          let profileTrack = 'weight';
          if (this.state.target === 'enfant') profileTrack = 'pediatric';
          if (this.state.target === 'parent') profileTrack = 'senior';
          
          const data = lookup('profiles', profileTrack, lang);
          if (data) {
            return {
              empathy_insight: data.empathy,
              dynamic_question: data.question,
              tap_options: data.options,
              generated_tap_options: data.options,
              biometric_updates: { metabolic_score: 48, digestive_load: 42, endocrine_strain: 50 },
              current_turn: 2,
              is_complete: false
            };
          }
        }

        // ============================================
        // STEP 3: ARCHETYPE (Adults only)
        // ============================================
        if (turn === 3) {
          if (this.state.target !== 'moi') {
            // Skip Archetype turn for kids/seniors -> go to turn 4 immediately
            return this.getFallbackTurnData(optionText, 4, track);
          }
          
          return {
            empathy_insight: "", // Handled by renderChipsTurn
            dynamic_question: "",
            tap_options: [],
            generated_tap_options: [],
            biometric_updates: { metabolic_score: 55, digestive_load: 48, endocrine_strain: 52 },
            current_turn: 3,
            is_complete: false
          };
        }

        // ============================================
        // STEP 4: CLINICAL QUESTION (main probe)
        // ============================================
        if (turn === 4) {
          const data = lookup('clinical', track, lang);
          if (data) {
            return {
              empathy_insight: data.empathy,
              dynamic_question: data.question,
              tap_options: data.options,
              generated_tap_options: data.options,
              biometric_updates: { metabolic_score: 62, digestive_load: 56, endocrine_strain: 64 },
              current_turn: 4,
              is_complete: false
            };
          }
        }

        // ============================================
        // STEP 5: SMART ADAPTIVE FOLLOW-UP (keyword-branched)
        // ============================================
        if (turn === 5) {
          const adaptiveSection = QD && QD.adaptive && QD.adaptive[track];
          const langData = adaptiveSection && (adaptiveSection[lang] || adaptiveSection['fr']);
          
          if (langData) {
            const selLower = (optionText || '').toLowerCase();
            let matched = null;

            // Try to match keywords from the previous answer
            for (const keyword of Object.keys(langData)) {
              if (keyword !== 'default' && selLower.includes(keyword)) {
                matched = langData[keyword];
                break;
              }
            }

            // Fallback to default
            if (!matched) matched = langData['default'];

            if (matched) {
              return {
                empathy_insight: matched.empathy,
                dynamic_question: matched.question,
                tap_options: matched.options,
                generated_tap_options: matched.options,
                biometric_updates: { metabolic_score: 78, digestive_load: 72, endocrine_strain: 80 },
                current_turn: 5,
                is_complete: false
              };
            }
          }
        }

        // ============================================
        // STEP 6: FINAL CLINICAL DOSSIER
        // ============================================
        if (turn >= 6) {
          const dossierData = lookup('dossier', track, lang);
          
          let headline, realities, timeline;
          if (dossierData) {
            headline = dossierData.headline;
            realities = dossierData.realities;
            timeline = { days_14: dossierData.timeline.j14, day_30: dossierData.timeline.j30, day_90: dossierData.timeline.j90 };
          } else {
            // Ultimate fallback
            headline = "Votre bilan clinique personnalisé est prêt";
            realities = [
              "Votre métabolisme s'est adapté aux restrictions passées — il est temps de le relancer.",
              "Vos symptômes reflètent des déséquilibres précis identifiables et corrigibles.",
              "La nutrition clinique ciblée est votre levier le plus puissant pour transformer votre santé."
            ];
            timeline = { days_14: "Premiers signes d'amélioration.", day_30: "Stabilisation biologique.", day_90: "Transformation durable." };
          }

          // Build smart WhatsApp message with FULL patient dossier
          const trackLabels = {
            weight: 'Perte de Poids', tca: 'TCA & Compulsions', digestive: 'Confort Digestif',
            hormonal: 'Équilibre Hormonal', diabetes: 'Diabète & Insuline', fatigue: 'Fatigue & Stress',
            pregnancy: 'Grossesse', pediatric: 'Nutrition Pédiatrique', senior: 'Senior & Longévité',
            metabolic: 'Maladies Métaboliques'
          };
          const trackLabel = trackLabels[track] || track;
          
          let waHeader = lang === 'ar' ? 'مرحباً أستاذة إيناس' : lang === 'en' ? 'Hello Inès' : lang === 'es' ? 'Hola Inès' : 'Bonjour Inès';
          let waIntro = lang === 'ar' ? `أتممت التقييم السريري (${trackLabel}) على موقعك.` : lang === 'en' ? `I completed the clinical assessment (${trackLabel}) on your website.` : lang === 'es' ? `He completado la evaluación clínica (${trackLabel}) en su sitio web.` : `J'ai complété le bilan clinique (${trackLabel}) sur votre site.`;

          let waResponses = '';
          this.state.history.forEach((item, i) => {
            waResponses += `\n• Étape ${item.turn}: ${item.selection}`;
          });

          let waFooter = lang === 'ar' ? 'أود حجز استشارة في عيادة رادس.' : lang === 'en' ? 'I would like to book a consultation at the Radès clinic.' : lang === 'es' ? 'Deseo reservar una consulta en la clínica de Radès.' : 'Je souhaite prendre rendez-vous au cabinet de Radès.';

          const waMsg = `${waHeader},\n\n${waIntro}\n\n📋 DOSSIER PATIENT:${waResponses}\n\n🏥 ${waFooter}`;

          let insightMsg = "Bilan complété avec succès. Votre profil clinique est intégralement modélisé.";
          if (lang === 'ar') insightMsg = "تم إتمام التقييم السريري بنجاح. ملفك الأيضي جاهز بالكامل.";
          else if (lang === 'en') insightMsg = "Assessment completed successfully. Your clinical profile is fully modeled.";
          else if (lang === 'es') insightMsg = "Evaluación completada con éxito. Su perfil clínico está completamente modelado.";

          return {
            empathy_insight: insightMsg,
            dynamic_question: "",
            tap_options: [],
            generated_tap_options: [],
            biometric_updates: { metabolic_score: 92, digestive_load: 88, endocrine_strain: 94 },
            current_turn: 6,
            is_complete: true,
            final_results: {
              headline,
              the_3_realities: realities,
              transformation_timeline: timeline,
              whatsapp_message: waMsg,
              whatsapp_message_encoded: waMsg
            }
          };
        }

        // Fallback for unexpected turns
        return {
          empathy_insight: "Analyse en cours...",
          dynamic_question: "Comment souhaitez-vous être accompagné(e) ?",
          tap_options: ["🌿 Consultation personnalisée", "📊 Bilan approfondi", "⚡ Plan d'action immédiat", "💬 En savoir plus"],
          generated_tap_options: ["🌿 Consultation personnalisée", "📊 Bilan approfondi", "⚡ Plan d'action immédiat", "💬 En savoir plus"],
          biometric_updates: { metabolic_score: 60, digestive_load: 55, endocrine_strain: 58 },
          current_turn: turn,
          is_complete: false
        };
      },

      updateHUD(biometrics, turn) {
        const turnText = document.getElementById('aiTurnText') || document.getElementById('aiTurnBadge');
        const progressFill = document.getElementById('aiProgressFill');
        const lang = this.state.lang || (typeof currentLang !== 'undefined' ? currentLang : 'fr');
        const totalSteps = this.state.target === 'moi' ? 6 : (this.state.target ? 5 : 6);
        const currentTurn = turn || 1;
        const percent = Math.min(100, Math.round((currentTurn / totalSteps) * 100));

        if (turnText) {
          if (lang === 'ar') {
            turnText.textContent = currentTurn >= totalSteps 
              ? `المرحلة ${totalSteps} من ${totalSteps} • تقييمك المخصص جاهز!` 
              : `المرحلة ${currentTurn} من ${totalSteps} • يتم إعداد تقييمك المخصص`;
          } else if (lang === 'en') {
            turnText.textContent = currentTurn >= totalSteps 
              ? `Step ${totalSteps} of ${totalSteps} • Your personalized assessment is ready!` 
              : `Step ${currentTurn} of ${totalSteps} • Preparing your personalized assessment`;
          } else if (lang === 'es') {
            turnText.textContent = currentTurn >= totalSteps 
              ? `Paso ${totalSteps} de ${totalSteps} • ¡Su evaluación personalizada está lista!` 
              : `Paso ${currentTurn} de ${totalSteps} • Preparando su evaluación personalizada`;
          } else {
            turnText.textContent = currentTurn >= totalSteps 
              ? `Étape ${totalSteps} sur ${totalSteps} • Votre bilan personnalisé est prêt !` 
              : `Étape ${currentTurn} sur ${totalSteps} • Votre bilan personnalisé se prépare`;
          }
        }
        if (progressFill) {
          progressFill.style.width = `${percent}%`;
        }
      },

      setLanguage(lang) {
        this.state.lang = lang || 'fr';
        if (this.state.turn <= 1 && this.state.history.length === 0) {
          this.renderInitialTurn();
        } else if (!this.state.isComplete) {
          const data = this.getFallbackTurnData(this.state.previousSelection, this.state.turn, this.state.track);
          if (this.state.turn === 3 && this.state.target === 'moi') {
            this.renderChipsTurn('archetypes', 3);
          } else {
            this.renderTurnData(data);
          }
        } else if (this.state.isComplete) {
          const data = this.getFallbackTurnData(this.state.previousSelection, 6, this.state.track);
          this.renderDossier(data.final_results || this.state.finalDossier || this.state.finalResults);
        }
      },

      renderChipsTurn(type, turnIndex) {
        const QD = window.QUIZ_DATA;
        const lang = this.state.lang || (typeof currentLang !== 'undefined' ? currentLang : 'fr');
        const stage = document.getElementById('aiStage');
        if (!stage) return;

        let insight, q, allOpts;
        if (type === 'targets') {
          const tData = (QD && QD.targets) ? (QD.targets[lang] || QD.targets.fr) : null;
          if (tData) {
            insight = tData.insight;
            q = tData.question;
            allOpts = tData.options;
          } else {
            insight = "Bienvenue au Cabinet de Nutrition Inès Ben Abdennebi.";
            q = "Pour qui souhaitez-vous réaliser ce bilan ?";
            allOpts = ["👤 Pour moi-même", "🧒 Pour mon enfant", "👵 Pour un parent"];
          }
        } else if (type === 'archetypes') {
          const welcomeData = (QD && QD.welcome) ? (QD.welcome[lang] || QD.welcome.fr) : null;
          insight = welcomeData ? welcomeData.insight : "Sélectionnez votre axe de santé principal.";
          q = welcomeData ? welcomeData.question : "Quel axe de santé souhaitez-vous explorer ?";
          allOpts = (QD && QD.archetypes) ? (QD.archetypes[lang] || QD.archetypes.fr) : [];
        }

        const makeChip = (opt) => {
          const escapedOpt = opt.replace(/'/g, "\\'");
          return `<div class="ai-option-chip" role="button" tabindex="0" onclick="AIEngine.handleOptionClick('${escapedOpt}', this)" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();AIEngine.handleOptionClick('${escapedOpt}', this);}">
            <span class="ai-option-text">${opt}</span>
          </div>`;
        };

        let chipsHtml = '';
        allOpts.forEach(opt => {
          if (opt) chipsHtml += makeChip(opt);
        });

        this.updateHUD(this.state.biometrics, turnIndex);

        stage.className = 'ai-stage stage-slide-in';
        stage.innerHTML = `
          <div class="ai-empathy-box">
            <div class="ai-empathy-icon"><i class="fa-solid fa-heart-pulse"></i></div>
            <div class="ai-empathy-text">${insight}</div>
          </div>
          <h2 class="ai-question-title">${q}</h2>
          <div class="ai-archetype-chips">${chipsHtml}</div>
        `;
      },

      renderInitialTurn() {
        this.renderChipsTurn('targets', 1);
      },
      renderLoadingState() {
        const stage = document.getElementById('aiStage');
        if (!stage) return;
        const lang = this.state.lang || (typeof currentLang !== 'undefined' ? currentLang : 'fr');
        let loadingText = "Préparation de votre bilan personnalisé...";
        if (lang === 'ar') loadingText = "جاري إعداد تقييمك المخصص...";
        else if (lang === 'en') loadingText = "Preparing your personalized assessment...";
        else if (lang === 'es') loadingText = "Preparando su evaluación personalizada...";

        stage.className = 'ai-stage stage-slide-in';
        stage.innerHTML = `
          <div class="ai-loading-box">
            <div class="ai-spinner" style="border-top-color: #10b981;"></div>
            <div class="ai-loading-text" style="color: var(--text-dark-rose); font-weight: 600;">
              ${loadingText}
            </div>
          </div>
        `;
      },

      goBack() {
        if (this.state.history.length > 0) {
          this.state.history.pop();
          this.state.turn = Math.max(1, this.state.turn - 1);
          this.state.isComplete = false;
          this.state.finalDossier = null;
          
          if (this.state.turn === 1 || this.state.history.length === 0) {
            this.state.history = [];
            this.state.turn = 1;
            this.state.previousSelection = '';
            this.renderInitialTurn();
          } else {
            const lastEntry = this.state.history[this.state.history.length - 1];
            this.state.previousSelection = lastEntry ? lastEntry.selection : '';
            const data = this.getFallbackTurnData(this.state.previousSelection, this.state.turn, this.state.track);
            this.renderTurnData(data);
          }
        }
      },

      renderTurnData(data) {
        this.updateHUD(data.biometric_updates || this.state.biometrics, data.current_turn);

        const finalDossier = data.final_results || data.final_dossier;
        if (data.is_complete && finalDossier) {
          this.renderDossier(finalDossier);
          return;
        }

        const stage = document.getElementById('aiStage');
        if (!stage) return;
        const lang = this.state.lang || (typeof currentLang !== 'undefined' ? currentLang : 'fr');

        let restartText = "Recommencer le diagnostic";
        let backText = "Question précédente";
        if (lang === 'ar') {
          restartText = "إعادة التقييم من البداية";
          backText = "السؤال السابق";
        } else if (lang === 'en') {
          restartText = "Restart assessment";
          backText = "Previous question";
        } else if (lang === 'es') {
          restartText = "Reiniciar diagnóstico";
          backText = "Pregunta anterior";
        }

        const isRtl = lang === 'ar';
        const backIcon = isRtl ? 'fa-arrow-right' : 'fa-arrow-left';

        let backButtonHtml = '';
        if (data.current_turn > 1) {
          backButtonHtml = `
            <div style="display: flex; justify-content: flex-start; margin-bottom: 1.25rem;">
              <button class="ai-back-btn" onclick="AIEngine.goBack()" style="background: rgba(244, 227, 229, 0.6); border: 1.5px solid var(--accent-mauve); border-radius: var(--radius-pill); padding: 0.45rem 1.1rem; font-size: 0.84rem; font-weight: 600; color: var(--text-dark-rose); cursor: pointer; display: inline-flex; align-items: center; gap: 0.45rem; transition: all 0.3s ease; box-shadow: 0 4px 12px rgba(92, 60, 67, 0.05);">
                <i class="fa-solid ${backIcon}"></i> ${backText}
              </button>
            </div>
          `;
        }

        const options = data.tap_options || data.generated_tap_options || [];
        let optionsHtml = '';
        options.forEach(opt => {
          const escapedOpt = opt.replace(/'/g, "\\'");
          optionsHtml += `
            <div class="ai-option-card" role="button" tabindex="0" onclick="AIEngine.handleOptionClick('${escapedOpt}', this)" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();AIEngine.handleOptionClick('${escapedOpt}', this);}">
              <span class="ai-option-text">${opt}</span>
              <div class="ai-option-arrow"><i class="fa-solid fa-chevron-right"></i></div>
            </div>
          `;
        });

        stage.className = 'ai-stage stage-slide-in';
        stage.innerHTML = `
          ${backButtonHtml}
          <div class="ai-empathy-box">
            <div class="ai-empathy-icon"><i class="fa-solid fa-heart-pulse"></i></div>
            <div class="ai-empathy-text">${data.empathy_insight || "Votre biologie métabolique réagit précisément."}</div>
          </div>

          <h2 class="ai-question-title">${data.dynamic_question}</h2>

          <div class="ai-options-grid">
            ${optionsHtml}
          </div>

          <div style="text-align: center;">
            <button class="ai-restart-btn" onclick="AIEngine.reset()">
              <i class="fa-solid fa-rotate-left"></i> ${restartText}
            </button>
          </div>
        `;

        // Smooth mobile auto-centering on active question
        if (window.innerWidth < 768) {
          setTimeout(() => {
            const stageEl = document.getElementById('aiStage');
            if (stageEl) {
              stageEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }, 100);
        }
      },

      renderDossier(dossier) {
        const stage = document.getElementById('aiStage');
        if (!stage) return;
        const lang = this.state.lang || (typeof currentLang !== 'undefined' ? currentLang : 'fr');

        const headline = dossier.headline || dossier.user_headline || "Pourquoi votre corps stocke les graisses au lieu de les brûler";
        const realities = dossier.the_3_realities || [
          "Votre déjeuner manque de carburant dense, ce qui force votre cerveau à réclamer du sucre à 20h00.",
          "Vos régimes passés ont forcé votre métabolisme à tourner au ralenti pour économiser l'énergie.",
          "Votre gonflement du soir est une digestion lente facilement réversible, pas de la graisse."
        ];
        const timeline = dossier.transformation_timeline || {
          days_14: "Baisse de l'inflammation et regain d'énergie.",
          day_30: "Amélioration corporelle et légèreté.",
          day_90: "Normalisation métabolique durable."
        };

        const defaultWaMessages = {
          fr: "Bonjour Inès, je viens de terminer mon bilan sur votre site et je souhaite réserver ma consultation personnalisée à Radès.",
          ar: "مرحباً إيناس، لقد أتممت للتو التقييم الأيضي عبر موقعك وأود حجز استشارتي الفردية في عيادة رادس.",
          en: "Hello Inès, I have just completed my assessment on your website and would like to book my personalized consultation in Radès.",
          es: "Hola Inès, acabo de completar mi evaluación en su sitio web y deseo reservar mi consulta personalizada en Radès."
        };
        const defaultWaMsg = defaultWaMessages[lang] || defaultWaMessages.fr;
        const waMsg = dossier.whatsapp_message_encoded || dossier.whatsapp_message || defaultWaMsg;

        // Internationalized labels
        let badgeLabel = "VOTRE BILAN NUTRITIONNEL & SYNTHÈSE";
        let realitiesTitle = "Les 3 Clés Identifiées pour Votre Corps";
        let realityPrefix = "Réalité Biologique 0";
        let timelineTitle = "Votre Évolution Attendue";
        let day14Label = "🌱 14 Premiers Jours";
        let day30Label = "🚀 30 Jours";
        let day90Label = "✨ 90 Jours";
        let bookingTitle = "Prêt(e) à démarrer votre suivi ?";
        let bookingSub = "Votre bilan personnalisé est prêt. Transmettez-le au cabinet pour finaliser votre rendez-vous.";
        let bookingBtn = "ENVOYER MON BILAN & PRENDRE RENDEZ-VOUS";
        let restartBtn = "Recommencer le test";

        if (lang === 'ar') {
          badgeLabel = "تقرير التقييم الغذائي والخطة السريرية";
          realitiesTitle = "المؤشرات الثلاثة الأساسية لجسمك";
          realityPrefix = "التحليل الحيوي 0";
          timelineTitle = "مسار التحول الصحي المتوقع";
          day14Label = "🌱 أول 14 يوماً";
          day30Label = "🚀 30 يوماً";
          day90Label = "✨ 90 يوماً";
          bookingTitle = "هل أنت مستعد لبدء خطتك العلاجية؟";
          bookingSub = "تم إعداد تقييمك المخصص. أرسله إلى العيادة لتأكيد موعد استشارتك.";
          bookingBtn = "إرسال التقرير وتأكيد الموعد بالعيادة";
          restartBtn = "إعادة التقييم";
        } else if (lang === 'en') {
          badgeLabel = "YOUR CLINICAL NUTRITION ASSESSMENT";
          realitiesTitle = "The 3 Key Insights Identified for Your Body";
          realityPrefix = "Biological Insight 0";
          timelineTitle = "Your Expected Transformation Timeline";
          day14Label = "🌱 First 14 Days";
          day30Label = "🚀 30 Days";
          day90Label = "✨ 90 Days";
          bookingTitle = "Ready to begin your personalized care?";
          bookingSub = "Your personalized assessment is ready. Submit it to the clinic to finalize your consultation.";
          bookingBtn = "SUBMIT MY ASSESSMENT & BOOK CONSULTATION";
          restartBtn = "Restart assessment";
        } else if (lang === 'es') {
          badgeLabel = "SU EVALUACIÓN NUTRICIONAL Y SÍNTESIS";
          realitiesTitle = "Las 3 Claves Identificadas para su Cuerpo";
          realityPrefix = "Realidad Biológica 0";
          timelineTitle = "Su Evolución Esperada";
          day14Label = "🌱 Primeros 14 Días";
          day30Label = "🚀 30 Días";
          day90Label = "✨ 90 Días";
          bookingTitle = "¿Listo/a para comenzar su seguimiento?";
          bookingSub = "Su evaluación personalizada está lista. Envíela a la clínica para finalizar su cita.";
          bookingBtn = "ENVIAR MI EVALUACIÓN Y RESERVAR CITA";
          restartBtn = "Reiniciar evaluación";
        }

        let realitiesHtml = '';
        realities.forEach((real, idx) => {
          realitiesHtml += `
            <div style="background: #ffffff; border: 1.5px solid rgba(232, 198, 200, 0.85); border-radius: 1.25rem; padding: 1.5rem; box-shadow: 0 8px 25px rgba(92, 60, 67, 0.05); display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="font-family: 'Inter', sans-serif; font-size: 0.82rem; font-weight: 700; color: var(--text-dark-rose); text-transform: uppercase; margin-bottom: 0.6rem;">
                  <i class="fa-solid fa-circle-dot" style="color: var(--accent-mauve); margin-right: 0.4rem;"></i> ${realityPrefix}${idx + 1}
                </div>
                <p style="font-size: 0.95rem; color: var(--text-main); line-height: 1.55; font-weight: 500;">
                  "${real}"
                </p>
              </div>
            </div>
          `;
        });

        stage.className = 'ai-stage stage-slide-in';
        stage.innerHTML = `
          <div class="ai-dossier-card">
            <div class="ai-dossier-header" style="background: linear-gradient(135deg, #fbf5f6 0%, #f4e3e5 100%); border: 1.5px solid #c49da5; border-radius: 1.5rem; padding: 2.25rem 1.75rem; text-align: center; margin-bottom: 2rem;">
              <span class="ai-dossier-badge" style="background: rgba(196, 157, 165, 0.25); border: 1px solid #c49da5; color: var(--text-dark-rose);"><i class="fa-solid fa-clipboard-check"></i> ${badgeLabel}</span>
              <h2 class="ai-dossier-archetype" style="font-family: 'Playfair Display', serif; font-size: 1.9rem; color: var(--text-dark-rose); font-weight: 600; margin-top: 0.75rem; line-height: 1.3;">${headline}</h2>
            </div>

            <!-- Les 3 Réalités Biologiques -->
            <div style="margin-bottom: 2.5rem;">
              <h3 style="font-family: 'Playfair Display', serif; font-size: 1.35rem; color: var(--text-dark-rose); margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.6rem;">
                <i class="fa-solid fa-dna" style="color: var(--accent-mauve);"></i>
                ${realitiesTitle}
              </h3>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem;">
                ${realitiesHtml}
              </div>
            </div>

            <!-- Chronologie de Transformation -->
            <div style="background: #ffffff; border: 1.5px solid rgba(232, 198, 200, 0.85); border-radius: 1.5rem; padding: 2rem; margin-bottom: 2.5rem; box-shadow: 0 10px 30px rgba(92, 60, 67, 0.05);">
              <h3 style="font-family: 'Playfair Display', serif; font-size: 1.35rem; color: var(--text-dark-rose); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.6rem;">
                <i class="fa-solid fa-arrow-trend-up" style="color: var(--accent-mauve);"></i>
                ${timelineTitle}
              </h3>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.25rem;">
                <div style="background: #fbf5f6; border-inline-start: 4px solid #c49da5; border-radius: 1rem; padding: 1.25rem;">
                  <div style="font-family: 'Inter', sans-serif; font-size: 0.8rem; font-weight: 700; color: var(--text-dark-rose); text-transform: uppercase;">${day14Label}</div>
                  <p style="font-size: 0.93rem; color: var(--text-main); margin-top: 0.5rem; line-height: 1.5;">${timeline.days_14}</p>
                </div>
                <div style="background: #fbf5f6; border-inline-start: 4px solid #e8c6c8; border-radius: 1rem; padding: 1.25rem;">
                  <div style="font-family: 'Inter', sans-serif; font-size: 0.8rem; font-weight: 700; color: var(--text-dark-rose); text-transform: uppercase;">${day30Label}</div>
                  <p style="font-size: 0.93rem; color: var(--text-main); margin-top: 0.5rem; line-height: 1.5;">${timeline.day_30}</p>
                </div>
                <div style="background: #fbf5f6; border-inline-start: 4px solid #5c3c43; border-radius: 1rem; padding: 1.25rem;">
                  <div style="font-family: 'Inter', sans-serif; font-size: 0.8rem; font-weight: 700; color: var(--text-dark-rose); text-transform: uppercase;">${day90Label}</div>
                  <p style="font-size: 0.93rem; color: var(--text-main); margin-top: 0.5rem; line-height: 1.5;">${timeline.day_90}</p>
                </div>
              </div>
            </div>

            <!-- Emotional VIP Conclusion: Note de l'Expert -->
            <div style="background: #ffffff; border-radius: 1.25rem; padding: 2rem; margin-bottom: 2.5rem; border: 1px solid rgba(196, 157, 165, 0.4); box-shadow: 0 10px 25px rgba(92, 60, 67, 0.08); position: relative;">
              <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.25rem;">
                <div style="width: 50px; height: 50px; border-radius: 50%; background: linear-gradient(135deg, var(--text-dark-rose) 0%, var(--accent-mauve) 100%); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-family: 'Playfair Display', serif; font-size: 1.5rem; box-shadow: 0 4px 10px rgba(196, 157, 165, 0.5);">
                  I
                </div>
                <div>
                  <h4 style="font-family: 'Inter', sans-serif; font-size: 1.1rem; color: var(--text-dark-rose); margin: 0; font-weight: 700;">Note du Cabinet</h4>
                  <span style="font-size: 0.85rem; color: #7f8c8d;">Inès Ben Abdennebi - Diététicienne Clinicienne</span>
                </div>
              </div>
              <p style="font-size: 1rem; color: var(--text-main); line-height: 1.6; font-style: italic; margin-bottom: 0;">
                « Votre profil indique une réelle détresse métabolique, mais la <strong>bonne nouvelle</strong> est qu'elle est parfaitement réversible. Ce n'est pas un manque de volonté de votre part, mais une chimie interne qui demande à être rééquilibrée de toute urgence. Je suis là pour vous accompagner pas à pas vers votre guérison. Ne laissez plus ces symptômes dicter votre quotidien. »
              </p>
            </div>

            <!-- The Patient File CTA -->
            <div class="ai-booking-box" style="background: var(--text-dark-rose); color: white; border-radius: 1.5rem; padding: 2.5rem 2rem; text-align: center; box-shadow: 0 15px 35px rgba(92, 60, 67, 0.2);">
              <h3 class="ai-booking-headline" style="color: white; font-size: 1.6rem; margin-bottom: 1rem;">${bookingTitle}</h3>
              <p class="ai-booking-sub" style="color: rgba(255,255,255,0.85); font-size: 1rem; margin-bottom: 2rem;">${bookingSub}</p>
              
              <button onclick="AIEngine.transferDossierToForm()" class="btn-pill" style="width: 100%; font-size: 1.1rem; padding: 1.2rem; cursor: pointer; background: white; color: var(--text-dark-rose); transition: transform 0.3s ease;">
                <i class="fa-solid fa-clipboard-check"></i> ${bookingBtn}
              </button>
            </div>

            <div style="text-align: center; margin-top: 1.5rem;">
              <button class="ai-restart-btn" onclick="AIEngine.reset()">
                <i class="fa-solid fa-rotate-left"></i> ${restartBtn}
              </button>
            </div>
          </div>
        `;

        // Smooth mobile auto-centering on final dossier
        if (window.innerWidth < 768) {
          setTimeout(() => {
            const stageEl = document.getElementById('aiStage');
            if (stageEl) {
              stageEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 100);
        }

        // Update WhatsApp message with clinical synthesis
        if (typeof updateWhatsAppLinks === 'function') {
          updateWhatsAppLinks();
        }
      },

      transferDossierToForm() {
        const lang = this.state.lang || (typeof currentLang !== 'undefined' ? currentLang : 'fr');
        let dossierHeader = "--- BILAN NUTRITIONNEL & OBJECTIFS ---\n\n";
        let responsesHeader = "VOS RÉPONSES AU TEST :\n";
        let stepLabel = "Étape";
        let langLabel = "Langue";
        let profileLabel = "Profil identifié";
        let scoreLabel = "Score de Vitalité";

        if (lang === 'ar') {
          dossierHeader = "--- تقرير التقييم الغذائي والأهداف ---\n\n";
          responsesHeader = "إجاباتك على التقييم:\n";
          stepLabel = "المرحلة";
          langLabel = "اللغة";
          profileLabel = "الملف المحدد";
          scoreLabel = "نقاط الحيوية";
        } else if (lang === 'en') {
          dossierHeader = "--- NUTRITIONAL ASSESSMENT & GOALS ---\n\n";
          responsesHeader = "YOUR ASSESSMENT RESPONSES:\n";
          stepLabel = "Step";
          langLabel = "Language";
          profileLabel = "Identified Profile";
          scoreLabel = "Vitality Score";
        } else if (lang === 'es') {
          dossierHeader = "--- EVALUACIÓN NUTRICIONAL Y OBJETIVOS ---\n\n";
          responsesHeader = "SUS RESPUESTAS A LA EVALUACIÓN:\n";
          stepLabel = "Paso";
          langLabel = "Idioma";
          profileLabel = "Perfil Identificado";
          scoreLabel = "Puntuación de Vitalidad";
        }

        const metabolicScore = (this.state.biometrics && this.state.biometrics.metabolic_score) ? this.state.biometrics.metabolic_score : 85;

        let dossierText = dossierHeader;
        dossierText += `${langLabel} : ${lang.toUpperCase()}\n`;
        dossierText += `${profileLabel} : ${this.state.track.toUpperCase()}\n`;
        dossierText += `${scoreLabel} : ${metabolicScore}/100\n\n`;
        
        dossierText += responsesHeader;
        this.state.history.forEach(item => {
          dossierText += `${stepLabel} ${item.turn}: ${item.selection}\n`;
        });

        const dossierInput = document.getElementById('bookingDossier');
        const dossierContainer = document.getElementById('dossierContainer');
        const serviceSelect = document.getElementById('serviceSelect');
        
        if (dossierInput && dossierContainer) {
          dossierInput.value = dossierText;
          dossierContainer.style.display = 'block'; 
        }

        if (serviceSelect) {
          const trackToService = {
            'weight': 'Perte de Poids',
            'tca': 'Troubles du Comportement Alimentaire',
            'digestive': 'Confort Digestif',
            'hormonal': 'Équilibre Hormonal',
            'diabetes': 'Diabète & Suivi Métabolique',
            'fatigue': 'Fatigue & Stress',
            'pregnancy': 'Grossesse & Maternité',
            'pediatric': 'Nutrition Pédiatrique',
            'senior': 'Senior & Longévité',
            'metabolic': 'Maladies Métaboliques'
          };
          const preferredService = trackToService[this.state.track] || 'Première Consultation';
          // Try to match the preferred service, fallback to first option or generic
          const foundOption = Array.from(serviceSelect.options).find(o => o.value === preferredService || o.text.includes(preferredService));
          if (foundOption) serviceSelect.value = foundOption.value;
          else serviceSelect.value = serviceSelect.options[1] ? serviceSelect.options[1].value : serviceSelect.options[0].value;
        }

        openModal('bookingModal');
      },

      transferToForm() {
        this.transferDossierToForm();
      },

      async handleLeadSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const btn = document.getElementById('aiLeadSubmitBtn');
        const successMsg = document.getElementById('aiLeadSuccessMsg');
        if (btn) {
          btn.disabled = true;
          btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Envoi en cours...';
        }
        try {
          const formData = new FormData(form);
          await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
          });
        } catch (err) {
          console.warn("Async lead submission fallback:", err);
        } finally {
          if (btn) btn.style.display = 'none';
          if (successMsg) successMsg.style.display = 'block';
        }
      },

      reset() {
        this.state = {
          turn: 1,
          history: [],
          previousSelection: '',
          track: 'weight',
          sex: null,
          age: null,
          profileAnswer: null,
          biometrics: { metabolic_score: 42, digestive_load: 38, endocrine_strain: 45 },
          isComplete: false,
          finalDossier: null,
          isLoading: false
        };
        this.renderInitialTurn();
        if (typeof updateWhatsAppLinks === 'function') {
          updateWhatsAppLinks();
        }
      }
    };
    window.AIEngine = AIEngine;

    // Direct website & AI intake engine initialization
    function initInteractiveScheduler() {
      const dateInput = document.getElementById('bookingDate');
      const timeSlotsGroup = document.getElementById('timeSlotsGroup');
      const timeSlotsGrid = document.getElementById('timeSlotsGrid');
      const slotInput = document.getElementById('bookingSlot');

      if (dateInput) {
        // Set minimum date to today
        const todayStr = new Date().toISOString().split('T')[0];
        dateInput.min = todayStr;

        dateInput.addEventListener('change', () => {
          const selectedDate = dateInput.value;
          if (!selectedDate) {
            timeSlotsGroup.style.display = 'none';
            return;
          }

          // Show time slots section
          timeSlotsGroup.style.display = 'block';
          timeSlotsGrid.innerHTML = '';
          slotInput.value = ''; // Reset slot selection

          const dateObj = new Date(selectedDate);
          const dayOfWeek = dateObj.getDay(); // 0 = Sunday, 6 = Saturday

          // If Sunday, show closed message
          if (dayOfWeek === 0) {
            timeSlotsGrid.innerHTML = `
              <div style="grid-column: span 4; text-align: center; color: #ef4444; font-weight: 600; padding: 1.25rem 1rem; background: #fef2f2; border-radius: 0.85rem; border: 1.5px solid #fca5a5; font-size: 0.88rem; width: 100%;">
                <i class="fa-solid fa-store-slash"></i> Le cabinet est fermé le dimanche. Veuillez choisir un autre jour.
              </div>
            `;
            return;
          }

          // 8 standard slot hours
          const hours = ["08:30", "09:30", "10:30", "11:30", "14:00", "15:00", "16:00", "17:00"];
          
          // Deterministic availability hash based on chosen date
          let hash = 0;
          for (let i = 0; i < selectedDate.length; i++) {
            hash = selectedDate.charCodeAt(i) + ((hash << 5) - hash);
          }

          hours.forEach((hr, index) => {
            // Predictably mark some hours as taken (e.g. index-based modulo)
            const isTaken = (Math.abs(hash + index * 37) % 3) === 0;

            const card = document.createElement('div');
            card.textContent = hr;
            card.style.textAlign = 'center';
            card.style.padding = '0.75rem 0.5rem';
            card.style.borderRadius = '0.5rem';
            card.style.fontWeight = '600';
            card.style.fontSize = '0.9rem';
            card.style.transition = 'all 0.2s ease';
            card.style.userSelect = 'none';

            if (isTaken) {
              card.style.background = '#f3f4f6';
              card.style.border = '1px solid #e5e7eb';
              card.style.color = '#9ca3af';
              card.style.cursor = 'not-allowed';
              card.title = "Créneau réservé";
            } else {
              card.style.background = '#ffffff';
              card.style.border = '1.5px solid #10b981';
              card.style.color = '#10b981';
              card.style.cursor = 'pointer';
              card.style.boxShadow = '0 2px 5px rgba(16, 185, 129, 0.1)';

              card.addEventListener('mouseenter', () => {
                if (slotInput.value !== hr) {
                  card.style.background = '#ecfdf5';
                }
              });

              card.addEventListener('mouseleave', () => {
                if (slotInput.value !== hr) {
                  card.style.background = '#ffffff';
                }
              });

              card.addEventListener('click', () => {
                // Clear other active selections
                const siblings = timeSlotsGrid.children;
                for (let i = 0; i < siblings.length; i++) {
                  if (siblings[i].style.cursor === 'pointer') {
                    siblings[i].style.background = '#ffffff';
                    siblings[i].style.color = '#10b981';
                  }
                }
                // Highlight clicked slot
                card.style.background = '#10b981';
                card.style.color = '#ffffff';
                slotInput.value = hr;
              });
            }

            timeSlotsGrid.appendChild(card);
          });
        });
      }
    }

    if (document.readyState === 'loading') {
      window.addEventListener('DOMContentLoaded', () => {
        AIEngine.init();
        initInteractiveScheduler();
      });
    } else {
      AIEngine.init();
      initInteractiveScheduler();
    }
  

  <!-- Floating Smart AI Assistant Trigger & Drawer -->
  <button class="ai-floating-trigger" id="aiFloatingTrigger" onclick="toggleAIDrawer()" aria-label="Ouvrir l'assistant bien-être">
    <span class="ai-pulse-dot"></span>
    <span data-i18n="ai_drawer_trigger">🤖 ASSISTANT BIEN-ÊTRE • CONSEILS</span>
  </button>

  <div class="ai-suggestions-drawer" id="aiSuggestionsDrawer">
    <div class="ai-drawer-header">
      <div class="ai-drawer-title">
        <i class="fa-solid fa-sparkles" style="color: #e8c6c8;"></i>
        <span data-i18n="ai_drawer_title">Assistant Nutrition & Bien-Être</span>
      </div>
      <button class="ai-drawer-close" onclick="toggleAIDrawer()" aria-label="Fermer l'assistant bien-être"><i class="fa-solid fa-xmark"></i></button>
    </div>

    <div class="ai-drawer-body">
      
      <!-- Bouton WhatsApp Rapide -->
      <div class="ai-suggestion-chip" onclick="handleChipClick('whatsapp')" style="background: linear-gradient(135deg, #fbf5f6 0%, #f4e3e5 100%); border-color: #c49da5;">
        <div class="ai-chip-header">
          <i class="fa-brands fa-whatsapp" style="color: #25D366; font-size: 1.2rem;"></i> Échange Direct WhatsApp
        </div>
        <div class="ai-chip-text" style="font-size: 0.85rem;">
          Posez votre question au cabinet ou réservez votre consultation en 1 clic.
        </div>
      </div>

      <hr style="border: none; border-top: 1px solid rgba(232, 198, 200, 0.5); margin: 0.5rem 0;" />

      <!-- FAQ Accordéon Intégrée -->
      <div class="ai-chip-header" style="margin-bottom: 0.5rem; color: var(--text-dark-rose);">
        <i class="fa-solid fa-circle-question"></i> Questions Fréquentes
      </div>

      <div class="faq-grid" style="gap: 0.5rem;">
        <div class="faq-item" onclick="toggleFaq(this)">
          <div class="faq-question" style="padding: 1rem; font-size: 0.9rem;">
            <span data-i18n="faq_q1">Combien de temps dure la consultation ?</span>
            <div class="faq-icon" style="width: 24px; height: 24px;"><i class="fa-solid fa-chevron-down"></i></div>
          </div>
          <div class="faq-answer" style="padding: 0 1rem;"><p data-i18n="faq_a1" style="font-size: 0.85rem; padding-bottom: 1rem;">La première séance dure 60 minutes complètes. Elle comprend un échange approfondi, un bilan de votre composition corporelle et la co-construction de votre plan alimentaire adapté.</p></div>
        </div>

        <div class="faq-item" onclick="toggleFaq(this)">
          <div class="faq-question" style="padding: 1rem; font-size: 0.9rem;">
            <span data-i18n="faq_q2">Faut-il refaire des analyses de sang ?</span>
            <div class="faq-icon" style="width: 24px; height: 24px;"><i class="fa-solid fa-chevron-down"></i></div>
          </div>
          <div class="faq-answer" style="padding: 0 1rem;"><p data-i18n="faq_a2" style="font-size: 0.85rem; padding-bottom: 1rem;">Apportez simplement vos bilans sanguins récents (de moins de 6 à 12 mois) si vous en disposez. Inutile d'en prescrire de nouveaux avant le premier RDV.</p></div>
        </div>

        <div class="faq-item" onclick="toggleFaq(this)">
          <div class="faq-question" style="padding: 1rem; font-size: 0.9rem;">
            <span data-i18n="faq_q3">Proposez-vous des téléconsultations ?</span>
            <div class="faq-icon" style="width: 24px; height: 24px;"><i class="fa-solid fa-chevron-down"></i></div>
          </div>
          <div class="faq-answer" style="padding: 0 1rem;"><p data-i18n="faq_a3" style="font-size: 0.85rem; padding-bottom: 1rem;">Oui, nous assurons des téléconsultations sécurisées pour les patients résidant hors de Radès ou à l'international.</p></div>
        </div>
      </div>

    </div>
  </div>

