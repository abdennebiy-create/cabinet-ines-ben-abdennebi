// quiz-data.js — Clinical Anamnesis Data Engine v3.0
// Cabinet de Nutrition Inès Ben Abdennebi
// Restructured for Multilingual Flat Keys (e.g. question_fr, question_ar)

window.QUIZ_DATA = {
  "targets": {
    "insight_fr": "Bienvenue au Cabinet de Nutrition Inès Ben Abdennebi à Radès. Ce bilan express de 60 secondes établit le profil clinique complet.",
    "question_fr": "Quel est le profil de la personne concernée par ce bilan ?",
    "options_fr": [
      "🧒 Enfant / Adolescent (Moins de 18 ans)",
      "👤 Adulte (18 - 64 ans)",
      "👵 Senior (65 ans et plus)"
    ],
    "insight_ar": "مرحباً بكم في عيادة التغذية إيناس بن عبد النبي في رادس. هذا التقييم السريع يحدد الملف السريري الكامل في 60 ثانية.",
    "question_ar": "ما هو الملف الشخصي للشخص المعني بهذا التقييم؟",
    "options_ar": [
      "🧒 طفل / مراهق (أقل من 18 عاماً)",
      "👤 بالغ (18 - 64 عاماً)",
      "👵 كبير في السن (65 عاماً فأكثر)"
    ],
    "insight_en": "Welcome to Cabinet de Nutrition Inès Ben Abdennebi in Radès. This 60-second express assessment builds the complete clinical profile.",
    "question_en": "What is the demographic profile of the person taking this assessment?",
    "options_en": [
      "🧒 Child / Teenager (Under 18)",
      "👤 Adult (18 - 64 years)",
      "👵 Senior (65+ years)"
    ],
    "insight_es": "Bienvenido al Gabinete de Nutrición Inès Ben Abdennebi en Radès. Esta evaluación express de 60 segundos construye el perfil clínico completo.",
    "question_es": "¿Cuál es el perfil de la persona para esta evaluación?",
    "options_es": [
      "🧒 Niño / Adolescente (Menos de 18 años)",
      "👤 Adulto (18 - 64 años)",
      "👵 Adulto mayor (65+ años)"
    ]
  },
  "profiles": {
    "adult": {
      "empathy_fr": "Votre sexe et votre âge déterminent votre taux métabolique de base, votre profil hormonal et la répartition naturelle de vos réserves.",
      "question_fr": "Quel est votre profil ?",
      "options_fr": [
        "👩 Femme, 18-30 ans",
        "👩 Femme, 30-45 ans",
        "👩 Femme, 45+ ans",
        "👨 Homme, 18-30 ans",
        "👨 Homme, 30-45 ans",
        "👨 Homme, 45+ ans"
      ],
      "empathy_ar": "جنسك وعمرك يحددان معدل الأيض الأساسي وتوزيع الدهون الطبيعي في جسمك.",
      "question_ar": "ما هو ملفك الشخصي؟",
      "options_ar": [
        "👩 أنثى، 18-30 سنة",
        "👩 أنثى، 30-45 سنة",
        "👩 أنثى، 45+ سنة",
        "👨 ذكر، 18-30 سنة",
        "👨 ذكر، 30-45 سنة",
        "👨 ذكر، 45+ سنة"
      ],
      "empathy_en": "Your sex and age determine your basal metabolic rate, hormonal profile, and natural fat distribution.",
      "question_en": "What is your profile?",
      "options_en": [
        "👩 Female, 18-30",
        "👩 Female, 30-45",
        "👩 Female, 45+",
        "👨 Male, 18-30",
        "👨 Male, 30-45",
        "👨 Male, 45+"
      ],
      "empathy_es": "Su sexo y edad determinan su tasa metabólica basal, perfil hormonal y distribución natural de grasa.",
      "question_es": "¿Cuál es su perfil?",
      "options_es": [
        "👩 Mujer, 18-30 años",
        "👩 Mujer, 30-45 años",
        "👩 Mujer, 45+ años",
        "👨 Hombre, 18-30 años",
        "👨 Hombre, 30-45 años",
        "👨 Hombre, 45+ años"
      ]
    },
    "pediatric": {
      "empathy_fr": "Le profil nutritionnel de votre enfant dépend de son stade de développement et de sa biologie unique.",
      "question_fr": "Quel est le profil de votre enfant ?",
      "options_fr": [
        "👦 Garçon, 0-6 ans",
        "👦 Garçon, 7-12 ans",
        "👧 Fille, 0-6 ans",
        "👧 Fille, 7-12 ans",
        "🧑 Adolescent(e), 13-17 ans"
      ],
      "empathy_ar": "الملف الغذائي لطفلك يعتمد على مرحلة نموه وبيولوجيته الفريدة.",
      "question_ar": "ما هو ملف طفلك؟",
      "options_ar": [
        "👦 ولد، 0-6 سنوات",
        "👦 ولد، 7-12 سنة",
        "👧 بنت، 0-6 سنوات",
        "👧 بنت، 7-12 سنة",
        "🧑 مراهق/ة، 13-17 سنة"
      ],
      "empathy_en": "Your child's nutritional profile depends on their developmental stage and unique biology.",
      "question_en": "What is your child's profile?",
      "options_en": [
        "👦 Boy, 0-6 years",
        "👦 Boy, 7-12 years",
        "👧 Girl, 0-6 years",
        "👧 Girl, 7-12 years",
        "🧑 Teenager, 13-17 years"
      ],
      "empathy_es": "El perfil nutricional de su hijo depende de su etapa de desarrollo y biología única.",
      "question_es": "¿Cuál es el perfil de su hijo/a?",
      "options_es": [
        "👦 Niño, 0-6 años",
        "👦 Niño, 7-12 años",
        "👧 Niña, 0-6 años",
        "👧 Niña, 7-12 años",
        "🧑 Adolescente, 13-17 años"
      ]
    },
    "senior": {
      "empathy_fr": "Le vieillissement modifie profondément l'absorption des nutriments, la masse musculaire et la densité osseuse.",
      "question_fr": "Quel est le profil de votre parent ?",
      "options_fr": [
        "👨 Homme, 55-70 ans",
        "👨 Homme, 70+ ans",
        "👩 Femme, 55-70 ans",
        "👩 Femme, 70+ ans"
      ],
      "empathy_ar": "الشيخوخة تغير بشكل عميق امتصاص المغذيات والكتلة العضلية وكثافة العظام.",
      "question_ar": "ما هو ملف والدك/تك؟",
      "options_ar": [
        "👨 رجل، 55-70 سنة",
        "👨 رجل، 70+ سنة",
        "👩 امرأة، 55-70 سنة",
        "👩 امرأة، 70+ سنة"
      ],
      "empathy_en": "Aging profoundly alters nutrient absorption, muscle mass, and bone density.",
      "question_en": "What is your parent's profile?",
      "options_en": [
        "👨 Male, 55-70",
        "👨 Male, 70+",
        "👩 Female, 55-70",
        "👩 Female, 70+"
      ],
      "empathy_es": "El envejecimiento modifica profundamente la absorción de nutrientes, la masa muscular y la densidad ósea.",
      "question_es": "¿Cuál es el perfil de su familiar?",
      "options_es": [
        "👨 Hombre, 55-70 años",
        "👨 Hombre, 70+ años",
        "👩 Mujer, 55-70 años",
        "👩 Mujer, 70+ años"
      ]
    }
  },
  "conditions": {
    "empathy_fr": "Beaucoup de patients présentent plusieurs troubles simultanément. N'hésitez pas à tout cocher — cela nous permet d'établir un bilan complet.",
    "question_fr": "Avez-vous des maladies, troubles ou symptômes particuliers ?",
    "options_fr": [
      {
        "id": "diabetes",
        "label": "🩸 Diabète / Résistance à l'insuline",
        "track": "diabetes"
      },
      {
        "id": "hormonal",
        "label": "🦋 Troubles Hormonaux (SOPK, Thyroïde, Ménopause)",
        "track": "hormonal"
      },
      {
        "id": "digestive",
        "label": "🌿 Troubles Digestifs (Ballonnements, SIBO, RGO)",
        "track": "digestive"
      },
      {
        "id": "tca",
        "label": "🧠 TCA, Fringales & Compulsions alimentaires",
        "track": "tca"
      },
      {
        "id": "fatigue",
        "label": "⚡ Fatigue chronique / Stress / Insomnie",
        "track": "fatigue"
      },
      {
        "id": "metabolic",
        "label": "🫀 Maladies Métaboliques (Foie gras, Cholestérol)",
        "track": "metabolic"
      },
      {
        "id": "pregnancy",
        "label": "🤰 Grossesse ou projet bébé",
        "track": "pregnancy"
      },
      {
        "id": "none",
        "label": "✅ Non, rien de particulier",
        "track": null
      }
    ],
    "empathy_ar": "كثير من المرضى يعانون من عدة اضطرابات في آن واحد. لا تتردد في تحديد كل ما ينطبق — هذا يساعدنا في إعداد تقييم شامل.",
    "question_ar": "هل تعاني من أمراض أو اضطرابات أو أعراض معينة؟",
    "options_ar": [
      {
        "id": "diabetes",
        "label": "🩸 السكري / مقاومة الأنسولين",
        "track": "diabetes"
      },
      {
        "id": "hormonal",
        "label": "🦋 اضطرابات هرمونية (تكيس المبايض، الغدة الدرقية، سن اليأس)",
        "track": "hormonal"
      },
      {
        "id": "digestive",
        "label": "🌿 اضطرابات هضمية (انتفاخ، SIBO، ارتجاع)",
        "track": "digestive"
      },
      {
        "id": "tca",
        "label": "🧠 اضطرابات الأكل والشراهة",
        "track": "tca"
      },
      {
        "id": "fatigue",
        "label": "⚡ إرهاق مزمن / توتر / أرق",
        "track": "fatigue"
      },
      {
        "id": "metabolic",
        "label": "🫀 أمراض أيضية (كبد دهني، كوليسترول)",
        "track": "metabolic"
      },
      {
        "id": "pregnancy",
        "label": "🤰 حمل أو مشروع حمل",
        "track": "pregnancy"
      },
      {
        "id": "none",
        "label": "✅ لا، لا شيء خاص",
        "track": null
      }
    ],
    "empathy_en": "Many patients present multiple conditions simultaneously. Feel free to select all that apply — this helps us build a comprehensive assessment.",
    "question_en": "Do you have any medical conditions, disorders, or specific symptoms?",
    "options_en": [
      {
        "id": "diabetes",
        "label": "🩸 Diabetes / Insulin Resistance",
        "track": "diabetes"
      },
      {
        "id": "hormonal",
        "label": "🦋 Hormonal Issues (PCOS, Thyroid, Menopause)",
        "track": "hormonal"
      },
      {
        "id": "digestive",
        "label": "🌿 Digestive Issues (Bloating, SIBO, GERD)",
        "track": "digestive"
      },
      {
        "id": "tca",
        "label": "🧠 Eating Disorders, Cravings & Compulsions",
        "track": "tca"
      },
      {
        "id": "fatigue",
        "label": "⚡ Chronic Fatigue / Stress / Insomnia",
        "track": "fatigue"
      },
      {
        "id": "metabolic",
        "label": "🫀 Metabolic Diseases (Fatty Liver, Cholesterol)",
        "track": "metabolic"
      },
      {
        "id": "pregnancy",
        "label": "🤰 Pregnancy or Planning",
        "track": "pregnancy"
      },
      {
        "id": "none",
        "label": "✅ No, nothing specific",
        "track": null
      }
    ],
    "empathy_es": "Muchos pacientes presentan varias condiciones simultáneamente. Seleccione todas las que correspondan — esto nos ayuda a crear una evaluación completa.",
    "question_es": "¿Tiene enfermedades, trastornos o síntomas particulares?",
    "options_es": [
      {
        "id": "diabetes",
        "label": "🩸 Diabetes / Resistencia a la insulina",
        "track": "diabetes"
      },
      {
        "id": "hormonal",
        "label": "🦋 Trastornos Hormonales (SOP, Tiroides, Menopausia)",
        "track": "hormonal"
      },
      {
        "id": "digestive",
        "label": "🌿 Trastornos Digestivos (Hinchazón, SIBO, ERGE)",
        "track": "digestive"
      },
      {
        "id": "tca",
        "label": "🧠 TCA, Antojos y Compulsiones alimentarias",
        "track": "tca"
      },
      {
        "id": "fatigue",
        "label": "⚡ Fatiga crónica / Estrés / Insomnio",
        "track": "fatigue"
      },
      {
        "id": "metabolic",
        "label": "🫀 Enfermedades Metabólicas (Hígado graso, Colesterol)",
        "track": "metabolic"
      },
      {
        "id": "pregnancy",
        "label": "🤰 Embarazo o proyecto de bebé",
        "track": "pregnancy"
      },
      {
        "id": "none",
        "label": "✅ No, nada particular",
        "track": null
      }
    ]
  },
  "conditionsPediatric": {
    "empathy_fr": "Le dépistage de certaines pathologies nous permet d'adapter le protocole.",
    "question_fr": "L'enfant est-il suivi pour une pathologie spécifique ? (Optionnel)",
    "options_fr": [
      {
        "id": "diabetes",
        "label": "🩸 Diabète (Type 1 ou 2)",
        "track": "diabetes"
      },
      {
        "id": "celiac",
        "label": "🌾 Maladie Cœliaque / Intolérance au gluten",
        "track": "celiac"
      },
      {
        "id": "allergy",
        "label": "🤧 Allergies alimentaires",
        "track": "allergy"
      },
      {
        "id": "weight_child",
        "label": "⚖️ Surpoids / Obésité infantile",
        "track": "weight_child"
      },
      {
        "id": "eating_disorder",
        "label": "🧠 Troubles du comportement alimentaire",
        "track": "eating_disorder"
      },
      {
        "id": "none",
        "label": "✅ Aucune de ces pathologies",
        "track": "pediatric"
      }
    ],
    "empathy_ar": "يسمح لنا فحص بعض الأمراض بتكييف البروتوكول.",
    "question_ar": "هل تتم متابعة الطفل لمرض معين؟ (اختياري)",
    "options_ar": [
      {
        "id": "diabetes",
        "label": "🩸 السكري (النوع 1 أو 2)",
        "track": "diabetes"
      },
      {
        "id": "celiac",
        "label": "🌾 الداء البطني / حساسية الغلوتين",
        "track": "celiac"
      },
      {
        "id": "allergy",
        "label": "🤧 حساسية الطعام",
        "track": "allergy"
      },
      {
        "id": "weight_child",
        "label": "⚖️ زيادة الوزن / السمنة عند الأطفال",
        "track": "weight_child"
      },
      {
        "id": "eating_disorder",
        "label": "🧠 اضطرابات الأكل",
        "track": "eating_disorder"
      },
      {
        "id": "none",
        "label": "✅ لا يوجد أي من هذه الأمراض",
        "track": "pediatric"
      }
    ],
    "empathy_en": "Screening for certain conditions allows us to adapt the protocol.",
    "question_en": "Is the child being treated for a specific condition? (Optional)",
    "options_en": [
      {
        "id": "diabetes",
        "label": "🩸 Diabetes (Type 1 or 2)",
        "track": "diabetes"
      },
      {
        "id": "celiac",
        "label": "🌾 Celiac Disease / Gluten Intolerance",
        "track": "celiac"
      },
      {
        "id": "allergy",
        "label": "🤧 Food Allergies",
        "track": "allergy"
      },
      {
        "id": "weight_child",
        "label": "⚖️ Overweight / Childhood Obesity",
        "track": "weight_child"
      },
      {
        "id": "eating_disorder",
        "label": "🧠 Eating Disorders",
        "track": "eating_disorder"
      },
      {
        "id": "none",
        "label": "✅ None of these conditions",
        "track": "pediatric"
      }
    ],
    "empathy_es": "La detección de ciertas patologías nos permite adaptar el protocolo.",
    "question_es": "¿El niño(a) está en tratamiento por una patología específica? (Opcional)",
    "options_es": [
      {
        "id": "diabetes",
        "label": "🩸 Diabetes (Tipo 1 o 2)",
        "track": "diabetes"
      },
      {
        "id": "celiac",
        "label": "🌾 Enfermedad Celíaca / Intolerancia al gluten",
        "track": "celiac"
      },
      {
        "id": "allergy",
        "label": "🤧 Alergias alimentarias",
        "track": "allergy"
      },
      {
        "id": "weight_child",
        "label": "⚖️ Sobrepeso / Obesidad infantil",
        "track": "weight_child"
      },
      {
        "id": "eating_disorder",
        "label": "🧠 Trastornos de la conducta alimentaria",
        "track": "eating_disorder"
      },
      {
        "id": "none",
        "label": "✅ Ninguna de estas patologías",
        "track": "pediatric"
      }
    ]
  },
  "conditionsSenior": {
    "empathy_fr": "Les besoins nutritionnels changent considérablement avec l'âge. N'hésitez pas à tout sélectionner.",
    "question_fr": "Votre parent présente-t-il des problèmes particuliers ?",
    "options_fr": [
      {
        "id": "sarcopenia",
        "label": "💪 Fonte musculaire / Faiblesse / Chutes",
        "track": "sarcopenia"
      },
      {
        "id": "appetite",
        "label": "🍽️ Perte d'appétit / Dénutrition",
        "track": "appetite"
      },
      {
        "id": "diabetes_s",
        "label": "🩸 Diabète ou troubles glycémiques",
        "track": "diabetes_s"
      },
      {
        "id": "memory",
        "label": "🧠 Troubles de mémoire / Déclin cognitif",
        "track": "memory"
      },
      {
        "id": "none",
        "label": "✅ Rien de particulier, bilan préventif",
        "track": "senior"
      }
    ],
    "empathy_ar": "الاحتياجات الغذائية تتغير كثيراً مع التقدم في السن. لا تتردد في تحديد كل ما ينطبق.",
    "question_ar": "هل يعاني والدك/والدتك من مشاكل معينة؟",
    "options_ar": [
      {
        "id": "sarcopenia",
        "label": "💪 ضمور عضلي / ضعف / سقوط",
        "track": "sarcopenia"
      },
      {
        "id": "appetite",
        "label": "🍽️ فقدان الشهية / سوء تغذية",
        "track": "appetite"
      },
      {
        "id": "diabetes_s",
        "label": "🩸 سكري أو اضطرابات السكر",
        "track": "diabetes_s"
      },
      {
        "id": "memory",
        "label": "🧠 مشاكل ذاكرة / تدهور إدراكي",
        "track": "memory"
      },
      {
        "id": "none",
        "label": "✅ لا شيء خاص، تقييم وقائي",
        "track": "senior"
      }
    ],
    "empathy_en": "Nutritional needs change considerably with age. Feel free to select all that apply.",
    "question_en": "Does your parent have any specific issues?",
    "options_en": [
      {
        "id": "sarcopenia",
        "label": "💪 Muscle loss / Weakness / Falls",
        "track": "sarcopenia"
      },
      {
        "id": "appetite",
        "label": "🍽️ Loss of appetite / Malnutrition",
        "track": "appetite"
      },
      {
        "id": "diabetes_s",
        "label": "🩸 Diabetes or blood sugar issues",
        "track": "diabetes_s"
      },
      {
        "id": "memory",
        "label": "🧠 Memory issues / Cognitive decline",
        "track": "memory"
      },
      {
        "id": "none",
        "label": "✅ Nothing specific, preventive checkup",
        "track": "senior"
      }
    ],
    "empathy_es": "Las necesidades nutricionales cambian considerablemente con la edad. Seleccione todo lo que aplique.",
    "question_es": "¿Su familiar presenta problemas particulares?",
    "options_es": [
      {
        "id": "sarcopenia",
        "label": "💪 Pérdida muscular / Debilidad / Caídas",
        "track": "sarcopenia"
      },
      {
        "id": "appetite",
        "label": "🍽️ Pérdida de apetito / Desnutrición",
        "track": "appetite"
      },
      {
        "id": "diabetes_s",
        "label": "🩸 Diabetes o trastornos glucémicos",
        "track": "diabetes_s"
      },
      {
        "id": "memory",
        "label": "🧠 Problemas de memoria / Deterioro cognitivo",
        "track": "memory"
      },
      {
        "id": "none",
        "label": "✅ Nada particular, chequeo preventivo",
        "track": "senior"
      }
    ]
  },
  "weightGoal": {
    "empathy_fr": "Le poids est un marqueur important mais il n'est qu'une partie du puzzle clinique. Votre réponse nous aide à compléter le tableau.",
    "question_fr": "Avez-vous un objectif lié au poids ?",
    "options_fr": [
      "📉 Oui, je veux perdre du poids",
      "📈 Oui, je veux prendre du poids / de la masse",
      "⚖️ Non, je souhaite juste améliorer ma santé"
    ],
    "empathy_ar": "الوزن مؤشر مهم لكنه جزء فقط من الصورة السريرية. إجابتك تساعدنا في إكمال التقييم.",
    "question_ar": "هل لديك هدف متعلق بالوزن؟",
    "options_ar": [
      "📉 نعم، أريد إنقاص وزني",
      "📈 نعم، أريد زيادة وزني / كتلتي",
      "⚖️ لا، أريد فقط تحسين صحتي"
    ],
    "empathy_en": "Weight is an important marker but it's only part of the clinical puzzle. Your answer helps us complete the picture.",
    "question_en": "Do you have a weight-related goal?",
    "options_en": [
      "📉 Yes, I want to lose weight",
      "📈 Yes, I want to gain weight / mass",
      "⚖️ No, I just want to improve my health"
    ],
    "empathy_es": "El peso es un marcador importante pero solo es parte del puzzle clínico. Su respuesta nos ayuda a completar el cuadro.",
    "question_es": "¿Tiene un objetivo relacionado con el peso?",
    "options_es": [
      "📉 Sí, quiero perder peso",
      "📈 Sí, quiero ganar peso / masa",
      "⚖️ No, solo quiero mejorar mi salud"
    ]
  },
  "weightGoalPediatric": {
    "empathy_fr": "Le poids de votre enfant est un indicateur de sa croissance. Chaque cas est unique.",
    "question_fr": "Avez-vous une préoccupation liée au poids de votre enfant ?",
    "options_fr": [
      "📉 Mon enfant a besoin de perdre du poids",
      "📈 Mon enfant a besoin de prendre du poids",
      "⚖️ Non, la croissance me semble normale"
    ],
    "empathy_ar": "وزن طفلك مؤشر على نموه. كل حالة فريدة.",
    "question_ar": "هل لديك قلق بخصوص وزن طفلك؟",
    "options_ar": [
      "📉 طفلي يحتاج لإنقاص وزنه",
      "📈 طفلي يحتاج لزيادة وزنه",
      "⚖️ لا، النمو يبدو طبيعياً"
    ],
    "empathy_en": "Your child's weight is an indicator of their growth. Each case is unique.",
    "question_en": "Do you have a concern about your child's weight?",
    "options_en": [
      "📉 My child needs to lose weight",
      "📈 My child needs to gain weight",
      "⚖️ No, growth seems normal"
    ],
    "empathy_es": "El peso de su hijo/a es un indicador de crecimiento. Cada caso es único.",
    "question_es": "¿Tiene una preocupación sobre el peso de su hijo/a?",
    "options_es": [
      "📉 Mi hijo/a necesita perder peso",
      "📈 Mi hijo/a necesita ganar peso",
      "⚖️ No, el crecimiento parece normal"
    ]
  },
  "weightGoalSenior": {
    "empathy_fr": "La perte de poids involontaire chez les seniors est un signal d'alerte clinique majeur.",
    "question_fr": "Avez-vous une préoccupation liée au poids de votre parent ?",
    "options_fr": [
      "📉 Il/Elle a besoin de perdre du poids",
      "📈 Il/Elle perd du poids involontairement",
      "⚖️ Non, le poids est stable"
    ],
    "empathy_ar": "فقدان الوزن غير الإرادي عند كبار السن إشارة تحذيرية سريرية كبرى.",
    "question_ar": "هل لديك قلق بخصوص وزن والدك/تك؟",
    "options_ar": [
      "📉 يحتاج لإنقاص وزنه",
      "📈 يفقد وزناً بشكل لا إرادي",
      "⚖️ لا، الوزن مستقر"
    ],
    "empathy_en": "Involuntary weight loss in seniors is a major clinical warning sign.",
    "question_en": "Do you have a concern about your parent's weight?",
    "options_en": [
      "📉 They need to lose weight",
      "📈 They are losing weight involuntarily",
      "⚖️ No, weight is stable"
    ],
    "empathy_es": "La pérdida de peso involuntaria en mayores es una señal de alerta clínica importante.",
    "question_es": "¿Tiene una preocupación sobre el peso de su familiar?",
    "options_es": [
      "📉 Necesita perder peso",
      "📈 Pierde peso involuntariamente",
      "⚖️ No, el peso es estable"
    ]
  },
  "deepDive": {
    "picky_step1": {
      "empathy_fr": "Les repas peuvent devenir une vraie source de stress.",
      "question_fr": "Depuis quand votre enfant refuse-t-il certains aliments ?",
      "options_fr": [
        "🛑 Depuis la diversification",
        "🛑 Récemment",
        "🛑 Ça dépend des jours",
        "🛑 Surtout les légumes"
      ],
      "empathy_ar": "قد تصبح الوجبات مصدر توتر.",
      "question_ar": "منذ متى يرفض طفلك بعض الأطعمة؟",
      "options_ar": [
        "🛑 منذ بدء التنوع",
        "🛑 مؤخرًا",
        "🛑 يعتمد على اليوم",
        "🛑 خاصة الخضار"
      ],
      "empathy_en": "Meals can become a source of stress.",
      "question_en": "Since when does your child refuse certain foods?",
      "options_en": [
        "🛑 Since starting solids",
        "🛑 Recently",
        "🛑 Depends on the day",
        "🛑 Especially vegetables"
      ],
      "empathy_es": "Las comidas pueden volverse estresantes.",
      "question_es": "¿Desde cuándo su hijo rechaza ciertos alimentos?",
      "options_es": [
        "🛑 Desde el inicio",
        "🛑 Recientemente",
        "🛑 Depende del día",
        "🛑 Especialmente verduras"
      ]
    },
    "picky_step2": {
      "empathy_fr": "L'aversion aux textures est très fréquente.",
      "question_fr": "Accepte-t-il au moins un groupe d'aliments de façon systématique ?",
      "options_fr": [
        "📉 Oui, les féculents (pâtes, pain)",
        "📉 Oui, les produits laitiers",
        "📉 Seulement les aliments sucrés",
        "📉 Non, c'est très aléatoire"
      ],
      "empathy_ar": "النفور من بعض القوام شائع جدا.",
      "question_ar": "هل يقبل على الأقل مجموعة واحدة من الأطعمة باستمرار؟",
      "options_ar": [
        "📉 نعم، النشويات",
        "📉 نعم، منتجات الألبان",
        "📉 الأطعمة الحلوة فقط",
        "📉 لا، الأمر عشوائي جدا"
      ],
      "empathy_en": "Aversion to textures is very common.",
      "question_en": "Does he systematically accept at least one food group?",
      "options_en": [
        "📉 Yes, starches",
        "📉 Yes, dairy",
        "📉 Only sweet foods",
        "📉 No, very random"
      ],
      "empathy_es": "La aversión a las texturas es muy común.",
      "question_es": "¿Acepta sistemáticamente al menos un grupo de alimentos?",
      "options_es": [
        "📉 Sí, carbohidratos",
        "📉 Sí, lácteos",
        "📉 Solo dulces",
        "📉 No, es muy aleatorio"
      ]
    },
    "picky_step3": {
      "empathy_fr": "Le contexte familial joue beaucoup.",
      "question_fr": "Comment se déroulent les repas à la maison ?",
      "options_fr": [
        "🍽️ Il mange devant un écran",
        "🍽️ Il mange souvent seul",
        "🍽️ Nous mangeons tous ensemble",
        "🍽️ C'est souvent un rapport de force"
      ],
      "empathy_ar": "السياق العائلي يلعب دورا كبيرا.",
      "question_ar": "كيف تجري الوجبات في المنزل؟",
      "options_ar": [
        "🍽️ يأكل أمام الشاشة",
        "🍽️ يأكل غالبا بمفرده",
        "🍽️ نأكل جميعا معا",
        "🍽️ غالبا ما يكون هناك صراع"
      ],
      "empathy_en": "Family context plays a big role.",
      "question_en": "How do meals go at home?",
      "options_en": [
        "🍽️ Eats in front of a screen",
        "🍽️ Often eats alone",
        "🍽️ We eat together",
        "🍽️ It's often a power struggle"
      ],
      "empathy_es": "El contexto familiar juega un gran papel.",
      "question_es": "¿Cómo transcurren las comidas en casa?",
      "options_es": [
        "🍽️ Come frente a una pantalla",
        "🍽️ A menudo come solo",
        "🍽️ Comemos todos juntos",
        "🍽️ A menudo hay conflictos"
      ]
    },
    "weight_child_step1": {
      "empathy_fr": "La croissance d'un enfant n'est pas linéaire.",
      "question_fr": "Avez-vous remarqué une prise de poids rapide ?",
      "options_fr": [
        "🛑 Récemment",
        "🛑 Depuis la petite enfance",
        "🛑 Surtout au niveau du ventre",
        "🛑 Je ne sais pas"
      ],
      "empathy_ar": "نمو الطفل ليس خطياً.",
      "question_ar": "هل لاحظت زيادة سريعة في الوزن؟",
      "options_ar": [
        "🛑 مؤخراً",
        "🛑 منذ الطفولة المبكرة",
        "🛑 خاصة في البطن",
        "🛑 لا أعلم"
      ],
      "empathy_en": "A child's growth is not linear.",
      "question_en": "Have you noticed rapid weight gain?",
      "options_en": [
        "🛑 Recently",
        "🛑 Since early childhood",
        "🛑 Mostly around the belly",
        "🛑 I don't know"
      ],
      "empathy_es": "El crecimiento infantil no es lineal.",
      "question_es": "¿Ha notado un aumento rápido de peso?",
      "options_es": [
        "🛑 Recientemente",
        "🛑 Desde la primera infancia",
        "🛑 Principalmente en el vientre",
        "🛑 No sé"
      ]
    },
    "weight_child_step2": {
      "empathy_fr": "L'environnement alimentaire est clé.",
      "question_fr": "Consomme-t-il souvent des produits sucrés industriels (jus, biscuits) ?",
      "options_fr": [
        "📉 Oui, tous les jours",
        "📉 Seulement le week-end",
        "📉 Rarement",
        "📉 Surtout en cachette"
      ],
      "empathy_ar": "البيئة الغذائية أساسية.",
      "question_ar": "هل يستهلك غالبا منتجات حلوة صناعية؟",
      "options_ar": [
        "📉 نعم، كل يوم",
        "📉 في عطلة نهاية الأسبوع فقط",
        "📉 نادرا",
        "📉 في السر غالبا"
      ],
      "empathy_en": "Food environment is key.",
      "question_en": "Does he often consume processed sugary products?",
      "options_en": [
        "📉 Yes, every day",
        "📉 Only on weekends",
        "📉 Rarely",
        "📉 Mostly secretly"
      ],
      "empathy_es": "El entorno alimentario es clave.",
      "question_es": "¿Consume a menudo productos azucarados industriales?",
      "options_es": [
        "📉 Sí, todos los días",
        "📉 Solo los fines de semana",
        "📉 Raramente",
        "📉 Mayormente a escondidas"
      ]
    },
    "weight_child_step3": {
      "empathy_fr": "L'activité physique compte autant que l'assiette.",
      "question_fr": "Quel est son niveau d'activité physique ?",
      "options_fr": [
        "🍽️ Très sédentaire (écrans fréquents)",
        "🍽️ Fait du sport 1 à 2 fois par semaine",
        "🍽️ Très actif tout le temps",
        "🍽️ Réticent à bouger"
      ],
      "empathy_ar": "النشاط البدني لا يقل أهمية عن الأكل.",
      "question_ar": "ما هو مستوى نشاطه البدني؟",
      "options_ar": [
        "🍽️ خامل جدا (شاشات)",
        "🍽️ رياضة 1-2 مرة أسبوعيا",
        "🍽️ نشيط جدا",
        "🍽️ يرفض الحركة"
      ],
      "empathy_en": "Physical activity matters as much as food.",
      "question_en": "What is his physical activity level?",
      "options_en": [
        "🍽️ Very sedentary",
        "🍽️ Sports 1-2 times/week",
        "🍽️ Very active",
        "🍽️ Reluctant to move"
      ],
      "empathy_es": "La actividad física importa tanto como la comida.",
      "question_es": "¿Cuál es su nivel de actividad física?",
      "options_es": [
        "🍽️ Muy sedentario",
        "🍽️ Deporte 1-2 veces/semana",
        "🍽️ Muy activo",
        "🍽️ Reacio a moverse"
      ]
    },
    "growth_step1": {
      "empathy_fr": "La courbe de croissance est un indicateur précieux.",
      "question_fr": "Que dit le pédiatre concernant sa courbe de croissance ?",
      "options_fr": [
        "🛑 Cassure de la courbe de poids",
        "🛑 Cassure de la courbe de taille",
        "🛑 Stagnation générale",
        "🛑 Il la trouve normale mais je m'inquiète"
      ],
      "empathy_ar": "منحنى النمو مؤشر قيم.",
      "question_ar": "ماذا يقول طبيب الأطفال عن منحنى نموه؟",
      "options_ar": [
        "🛑 توقف في منحنى الوزن",
        "🛑 توقف في منحنى الطول",
        "🛑 ركود عام",
        "🛑 يجده طبيعيا لكنني قلق"
      ],
      "empathy_en": "The growth chart is a valuable indicator.",
      "question_en": "What does the pediatrician say about his growth chart?",
      "options_en": [
        "🛑 Drop in weight curve",
        "🛑 Drop in height curve",
        "🛑 General stagnation",
        "🛑 Thinks it's normal but I worry"
      ],
      "empathy_es": "La curva de crecimiento es un indicador valioso.",
      "question_es": "¿Qué dice el pediatra sobre su curva de crecimiento?",
      "options_es": [
        "🛑 Caída en la curva de peso",
        "🛑 Caída en la curva de altura",
        "🛑 Estancamiento general",
        "🛑 Lo ve normal pero me preocupa"
      ]
    },
    "growth_step2": {
      "empathy_fr": "Certaines périodes sont critiques pour la croissance.",
      "question_fr": "Avez-vous remarqué des troubles digestifs fréquents (maux de ventre, diarrhées) ?",
      "options_fr": [
        "📉 Oui, très souvent",
        "📉 Parfois après les repas",
        "📉 Rarement",
        "📉 Jamais"
      ],
      "empathy_ar": "بعض الفترات حرجة للنمو.",
      "question_ar": "هل لاحظت اضطرابات هضمية متكررة (آلام البطن، إسهال)؟",
      "options_ar": [
        "📉 نعم، في كثير من الأحيان",
        "📉 أحيانا بعد الوجبات",
        "📉 نادرا",
        "📉 أبدا"
      ],
      "empathy_en": "Certain periods are critical for growth.",
      "question_en": "Have you noticed frequent digestive issues (stomach aches, diarrhea)?",
      "options_en": [
        "📉 Yes, very often",
        "📉 Sometimes after meals",
        "📉 Rarely",
        "📉 Never"
      ],
      "empathy_es": "Algunos períodos son críticos para el crecimiento.",
      "question_es": "¿Ha notado problemas digestivos frecuentes (dolor de barriga, diarrea)?",
      "options_es": [
        "📉 Sí, muy a menudo",
        "📉 A veces después de las comidas",
        "📉 Raramente",
        "📉 Nunca"
      ]
    },
    "growth_step3": {
      "empathy_fr": "L'énergie de l'enfant nous donne beaucoup d'indices.",
      "question_fr": "Comment est son niveau d'énergie en général ?",
      "options_fr": [
        "🍽️ Très fatigué, manque d'entrain",
        "🍽️ Fatigué surtout l'après-midi",
        "🍽️ Normal",
        "🍽️ Très dynamique"
      ],
      "empathy_ar": "طاقة الطفل تعطينا الكثير من الدلائل.",
      "question_ar": "كيف هو مستوى طاقته بشكل عام؟",
      "options_ar": [
        "🍽️ متعب جدا، يفتقر للحماس",
        "🍽️ متعب خاصة بعد الظهر",
        "🍽️ طبيعي",
        "🍽️ حيوي جدا"
      ],
      "empathy_en": "A child's energy gives us many clues.",
      "question_en": "How is his energy level in general?",
      "options_en": [
        "🍽️ Very tired, lacks drive",
        "🍽️ Tired mostly in the afternoon",
        "🍽️ Normal",
        "🍽️ Very dynamic"
      ],
      "empathy_es": "La energía del niño nos da muchas pistas.",
      "question_es": "¿Cómo es su nivel de energía en general?",
      "options_es": [
        "🍽️ Muy cansado, sin ganas",
        "🍽️ Cansado sobre todo por la tarde",
        "🍽️ Normal",
        "🍽️ Muy dinámico"
      ]
    },
    "allergy_step1": {
      "empathy_fr": "Vivre avec une allergie demande une vigilance constante.",
      "question_fr": "S'agit-il d'allergies diagnostiquées ou de suspicions d'intolérances ?",
      "options_fr": [
        "🛑 Allergies sévères diagnostiquées (choc anaphylactique possible)",
        "🛑 Intolérances digestives confirmées (ex: gluten, lactose)",
        "🛑 Fortes suspicions, en cours de diagnostic",
        "🛑 Je ne sais pas trop"
      ],
      "empathy_ar": "العيش مع الحساسية يتطلب يقظة مستمرة.",
      "question_ar": "هل هي حساسيات مشخصة أم اشتباه في عدم تحمل؟",
      "options_ar": [
        "🛑 حساسية شديدة مشخصة",
        "🛑 عدم تحمل هضمي مؤكد (مثل الغلوتين واللاكتوز)",
        "🛑 شكوك قوية، قيد التشخيص",
        "🛑 لا أعلم تماما"
      ],
      "empathy_en": "Living with an allergy requires constant vigilance.",
      "question_en": "Are these diagnosed allergies or suspected intolerances?",
      "options_en": [
        "🛑 Severe diagnosed allergies",
        "🛑 Confirmed digestive intolerances",
        "🛑 Strong suspicions, pending diagnosis",
        "🛑 I'm not entirely sure"
      ],
      "empathy_es": "Vivir con una alergia requiere vigilancia constante.",
      "question_es": "¿Son alergias diagnosticadas o sospechas de intolerancias?",
      "options_es": [
        "🛑 Alergias graves diagnosticadas",
        "🛑 Intolerancias digestivas confirmadas",
        "🛑 Fuertes sospechas, en diagnóstico",
        "🛑 No estoy muy seguro"
      ]
    },
    "allergy_step2": {
      "empathy_fr": "L'éviction n'est pas la seule clé.",
      "question_fr": "Quels sont les principaux symptômes ressentis par l'enfant ?",
      "options_fr": [
        "📉 Cutanés (eczéma, urticaire)",
        "📉 Digestifs (ballonnements, reflux, diarrhées)",
        "📉 Respiratoires (asthme, toux)",
        "📉 Un mélange de tout ça"
      ],
      "empathy_ar": "الامتناع ليس المفتاح الوحيد.",
      "question_ar": "ما هي الأعراض الرئيسية التي يعاني منها الطفل؟",
      "options_ar": [
        "📉 جلدية (أكزيما، شرى)",
        "📉 هضمية (انتفاخ، ارتجاع، إسهال)",
        "📉 تنفسية (ربو، سعال)",
        "📉 مزيج من كل هذا"
      ],
      "empathy_en": "Avoidance is not the only key.",
      "question_en": "What are the main symptoms the child experiences?",
      "options_en": [
        "📉 Skin (eczema, hives)",
        "📉 Digestive (bloating, reflux, diarrhea)",
        "📉 Respiratory (asthma, cough)",
        "📉 A mix of everything"
      ],
      "empathy_es": "La evitación no es la única clave.",
      "question_es": "¿Cuáles son los principales síntomas que experimenta el niño?",
      "options_es": [
        "📉 Piel (eczema, urticaria)",
        "📉 Digestivos (hinchazón, reflujo, diarrea)",
        "📉 Respiratorios (asma, tos)",
        "📉 Una mezcla de todo"
      ]
    },
    "allergy_step3": {
      "empathy_fr": "Gérer les repas peut être complexe.",
      "question_fr": "Le régime d'éviction actuel complique-t-il l'équilibre des repas familiaux ?",
      "options_fr": [
        "🍽️ Énormément, c'est un casse-tête",
        "🍽️ Un peu, mais on gère",
        "🍽️ Pas du tout",
        "🍽️ L'éviction n'est pas encore stricte"
      ],
      "empathy_ar": "إدارة الوجبات قد تكون معقدة.",
      "question_ar": "هل يعقد النظام الغذائي الحالي توازن الوجبات العائلية؟",
      "options_ar": [
        "🍽️ كثيراً، إنه لغز",
        "🍽️ قليلاً، لكننا نتعامل مع الأمر",
        "🍽️ لا، أبداً",
        "🍽️ الامتناع ليس صارماً بعد"
      ],
      "empathy_en": "Managing meals can be complex.",
      "question_en": "Does the current elimination diet complicate family meal balance?",
      "options_en": [
        "🍽️ Enormously, it's a puzzle",
        "🍽️ A bit, but we manage",
        "🍽️ Not at all",
        "🍽️ Avoidance isn't strict yet"
      ],
      "empathy_es": "Manejar las comidas puede ser complejo.",
      "question_es": "¿La dieta de eliminación actual complica el equilibrio de las comidas familiares?",
      "options_es": [
        "🍽️ Enormemente, es un rompecabezas",
        "🍽️ Un poco, pero nos las arreglamos",
        "🍽️ En absoluto",
        "🍽️ La evitación aún no es estricta"
      ]
    },
    "focus_step1": {
      "empathy_fr": "Le lien intestin-cerveau est puissant chez l'enfant.",
      "question_fr": "Avez-vous remarqué que ces troubles s'aggravent après certains repas ?",
      "options_fr": [
        "🛑 Oui, après les repas sucrés",
        "🛑 Oui, après des produits très transformés",
        "🛑 Non, c'est tout le temps",
        "🛑 Je n'ai pas fait attention"
      ],
      "empathy_ar": "الرابط بين الأمعاء والدماغ قوي جدا عند الأطفال.",
      "question_ar": "هل لاحظت أن هذه الاضطرابات تتفاقم بعد وجبات معينة؟",
      "options_ar": [
        "🛑 نعم، بعد الوجبات الحلوة",
        "🛑 نعم، بعد المنتجات المصنعة جدا",
        "🛑 لا، هذا في كل الأوقات",
        "🛑 لم ألاحظ"
      ],
      "empathy_en": "The gut-brain connection is powerful in children.",
      "question_en": "Have you noticed these issues worsen after certain meals?",
      "options_en": [
        "🛑 Yes, after sugary meals",
        "🛑 Yes, after highly processed foods",
        "🛑 No, it's all the time",
        "🛑 I haven't paid attention"
      ],
      "empathy_es": "La conexión intestino-cerebro es poderosa en los niños.",
      "question_es": "¿Ha notado que estos problemas empeoran después de ciertas comidas?",
      "options_es": [
        "🛑 Sí, después de comidas azucaradas",
        "🛑 Sí, después de productos muy procesados",
        "🛑 No, es todo el tiempo",
        "🛑 No me he fijado"
      ]
    },
    "focus_step2": {
      "empathy_fr": "Le sucre caché joue aux montagnes russes avec l'humeur.",
      "question_fr": "Combien de fois par jour consomme-t-il des aliments au goût sucré ?",
      "options_fr": [
        "📉 1 fois",
        "📉 2 à 3 fois",
        "📉 4 fois ou plus",
        "📉 Quasiment pas"
      ],
      "empathy_ar": "السكر الخفي يلعب دوراً كبيراً في تقلب المزاج.",
      "question_ar": "كم مرة في اليوم يستهلك أطعمة ذات طعم حلو؟",
      "options_ar": [
        "📉 مرة واحدة",
        "📉 2-3 مرات",
        "📉 4 مرات أو أكثر",
        "📉 نادراً جداً"
      ],
      "empathy_en": "Hidden sugar acts like a rollercoaster for mood.",
      "question_en": "How many times a day does he consume sweet-tasting foods?",
      "options_en": [
        "📉 1 time",
        "📉 2 to 3 times",
        "📉 4 or more times",
        "📉 Almost never"
      ],
      "empathy_es": "El azúcar oculto es una montaña rusa para el estado de ánimo.",
      "question_es": "¿Cuántas veces al día consume alimentos con sabor dulce?",
      "options_es": [
        "📉 1 vez",
        "📉 2 a 3 veces",
        "📉 4 o más veces",
        "📉 Casi nunca"
      ]
    },
    "focus_step3": {
      "empathy_fr": "Le microbiote synthétise nos neuromédiateurs.",
      "question_fr": "L'enfant souffre-t-il de maux de ventre ou de transit irrégulier (constipation/diarrhée) ?",
      "options_fr": [
        "🍽️ Oui, très souvent",
        "🍽️ Parfois",
        "🍽️ Non, jamais",
        "🍽️ Il s'en plaint rarement"
      ],
      "empathy_ar": "الميكروبيوم يصنع نواقلنا العصبية.",
      "question_ar": "هل يعاني الطفل من آلام البطن أو عدم انتظام العبور المعوي؟",
      "options_ar": [
        "🍽️ نعم، كثيرا",
        "🍽️ أحيانا",
        "🍽️ لا أبدا",
        "🍽️ نادرا ما يشتكي"
      ],
      "empathy_en": "The microbiome synthesizes our neurotransmitters.",
      "question_en": "Does the child suffer from stomach aches or irregular bowel movements?",
      "options_en": [
        "🍽️ Yes, very often",
        "🍽️ Sometimes",
        "🍽️ No, never",
        "🍽️ Rarely complains"
      ],
      "empathy_es": "El microbioma sintetiza nuestros neurotransmisores.",
      "question_es": "¿El niño sufre de dolor de barriga o tránsito irregular?",
      "options_es": [
        "🍽️ Sí, muy a menudo",
        "🍽️ A veces",
        "🍽️ No, nunca",
        "🍽️ Rara vez se queja"
      ]
    },
    "sarcopenia_step1": {
      "empathy_fr": "La perte de force musculaire est le premier facteur de perte d'autonomie.",
      "question_fr": "Avez-vous remarqué des difficultés pour se lever d'une chaise ou des pertes d'équilibre ?",
      "options_fr": [
        "🛑 Oui, c'est de plus en plus fréquent",
        "🛑 Parfois, selon les jours",
        "🛑 Non, mais il/elle marche plus lentement",
        "🛑 Non, il/elle est encore très alerte"
      ],
      "empathy_ar": "فقدان القوة العضلية هو العامل الأول في فقدان الاستقلالية.",
      "question_ar": "هل لاحظت صعوبة في النهوض من الكرسي أو فقدان التوازن؟",
      "options_ar": [
        "🛑 نعم، هذا يحدث بشكل متكرر",
        "🛑 أحيانا، حسب الأيام",
        "🛑 لا، لكنه يمشي أبطأ",
        "🛑 لا، لا يزال يقظا جدا"
      ],
      "empathy_en": "Loss of muscle strength is the first factor in loss of autonomy.",
      "question_en": "Have you noticed difficulties getting up from a chair or loss of balance?",
      "options_en": [
        "🛑 Yes, it's increasingly frequent",
        "🛑 Sometimes, depending on the day",
        "🛑 No, but walking is slower",
        "🛑 No, still very alert"
      ],
      "empathy_es": "La pérdida de fuerza muscular es el primer factor de pérdida de autonomía.",
      "question_es": "¿Ha notado dificultades para levantarse de una silla o pérdida de equilibrio?",
      "options_es": [
        "🛑 Sí, es cada vez más frecuente",
        "🛑 A veces, según el día",
        "🛑 No, pero camina más despacio",
        "🛑 No, todavía está muy alerta"
      ]
    },
    "sarcopenia_step2": {
      "empathy_fr": "Après 65 ans, les besoins en protéines augmentent de 50%.",
      "question_fr": "Quelle est la source principale de protéines dans ses repas ?",
      "options_fr": [
        "📉 La viande et le poisson (presque tous les jours)",
        "📉 Les œufs et laitages",
        "📉 Très peu de protéines, beaucoup de soupe/pain",
        "📉 Je ne sais pas"
      ],
      "empathy_ar": "بعد سن 65، تزداد الحاجة للبروتين بنسبة 50%.",
      "question_ar": "ما هو المصدر الرئيسي للبروتين في وجباته؟",
      "options_ar": [
        "📉 اللحوم والأسماك (شبه يوميا)",
        "📉 البيض ومنتجات الألبان",
        "📉 قليل جدا من البروتين، الكثير من الحساء/الخبز",
        "📉 لا أعلم"
      ],
      "empathy_en": "After 65, protein needs increase by 50%.",
      "question_en": "What is the main source of protein in their meals?",
      "options_en": [
        "📉 Meat and fish (almost every day)",
        "📉 Eggs and dairy",
        "📉 Very little protein, lots of soup/bread",
        "📉 I don't know"
      ],
      "empathy_es": "Después de los 65, las necesidades de proteínas aumentan un 50%.",
      "question_es": "¿Cuál es la principal fuente de proteínas en sus comidas?",
      "options_es": [
        "📉 Carne y pescado (casi todos los días)",
        "📉 Huevos y lácteos",
        "📉 Muy poca proteína, mucha sopa/pan",
        "📉 No lo sé"
      ]
    },
    "sarcopenia_step3": {
      "empathy_fr": "L'inflammation silencieuse bloque la fabrication des muscles.",
      "question_fr": "Prend-il/elle des médicaments contre la douleur ou l'inflammation au quotidien ?",
      "options_fr": [
        "🍽️ Oui, tous les jours",
        "🍽️ Régulièrement",
        "🍽️ Rarement",
        "🍽️ Jamais"
      ],
      "empathy_ar": "الالتهاب الصامت يمنع بناء العضلات.",
      "question_ar": "هل يأخذ أدوية للألم أو الالتهاب يومياً؟",
      "options_ar": [
        "🍽️ نعم، كل يوم",
        "🍽️ بانتظام",
        "🍽️ نادراً",
        "🍽️ أبداً"
      ],
      "empathy_en": "Silent inflammation blocks muscle building.",
      "question_en": "Does he/she take pain or inflammation medication daily?",
      "options_en": [
        "🍽️ Yes, every day",
        "🍽️ Regularly",
        "🍽️ Rarely",
        "🍽️ Never"
      ],
      "empathy_es": "La inflamación silenciosa bloquea la creación de músculo.",
      "question_es": "¿Toma medicamentos para el dolor o la inflamación a diario?",
      "options_es": [
        "🍽️ Sí, todos los días",
        "🍽️ Regularmente",
        "🍽️ Raramente",
        "🍽️ Nunca"
      ]
    },
    "appetite_step1": {
      "empathy_fr": "La perte d'appétit (anorexie du sujet âgé) est très fréquente et inquiétante.",
      "question_fr": "Saute-t-il/elle souvent des repas complètement ?",
      "options_fr": [
        "🛑 Très souvent (notamment le soir)",
        "🛑 Parfois",
        "🛑 Non, mais les portions sont minuscules",
        "🛑 Il/Elle mange mais perd du poids"
      ],
      "empathy_ar": "فقدان الشهية لدى كبار السن شائع جدا ومقلق.",
      "question_ar": "هل يتخطى غالبا وجبات كاملة؟",
      "options_ar": [
        "🛑 في كثير من الأحيان (خاصة في المساء)",
        "🛑 أحيانا",
        "🛑 لا، لكن الحصص صغيرة جدا",
        "🛑 يأكل لكنه يفقد الوزن"
      ],
      "empathy_en": "Loss of appetite in the elderly is very common and worrying.",
      "question_en": "Does he/she often skip meals completely?",
      "options_en": [
        "🛑 Very often (especially evening)",
        "🛑 Sometimes",
        "🛑 No, but portions are tiny",
        "🛑 Eats but loses weight"
      ],
      "empathy_es": "La pérdida de apetito en personas mayores es muy común y preocupante.",
      "question_es": "¿A menudo se salta las comidas por completo?",
      "options_es": [
        "🛑 Muy a menudo (especialmente por la noche)",
        "🛑 A veces",
        "🛑 No, pero las porciones son minúsculas",
        "🛑 Come pero pierde peso"
      ]
    },
    "appetite_step2": {
      "empathy_fr": "Le goût et l'odorat changent avec les années.",
      "question_fr": "Y a-t-il des problèmes de mastication ou de déglutition (dents, fausses routes) ?",
      "options_fr": [
        "📉 Oui, cela limite ce qu'il/elle peut manger",
        "📉 Parfois, il faut adapter les textures",
        "📉 Non, aucune difficulté de ce côté",
        "📉 C'est surtout un manque d'envie"
      ],
      "empathy_ar": "الذوق والشم يتغيران مع السنين.",
      "question_ar": "هل هناك مشاكل في المضغ أو البلع؟",
      "options_ar": [
        "📉 نعم، هذا يحد مما يمكنه أكله",
        "📉 أحيانا، يجب تعديل القوام",
        "📉 لا، لا توجد صعوبة في هذا الجانب",
        "📉 هو في الأساس نقص في الرغبة"
      ],
      "empathy_en": "Taste and smell change over the years.",
      "question_en": "Are there chewing or swallowing problems (teeth, choking)?",
      "options_en": [
        "📉 Yes, limits what they can eat",
        "📉 Sometimes, textures need adapting",
        "📉 No difficulties here",
        "📉 Mostly a lack of desire"
      ],
      "empathy_es": "El gusto y el olfato cambian con los años.",
      "question_es": "¿Hay problemas de masticación o deglución?",
      "options_es": [
        "📉 Sí, limita lo que puede comer",
        "📉 A veces, hay que adaptar texturas",
        "📉 No, ninguna dificultad en este aspecto",
        "📉 Es principalmente falta de deseo"
      ]
    },
    "appetite_step3": {
      "empathy_fr": "L'hydratation est souvent le grand oublié.",
      "question_fr": "Boit-il/elle suffisamment d'eau dans la journée ?",
      "options_fr": [
        "🍽️ Très peu (moins d'un demi-litre)",
        "🍽️ Correctement",
        "🍽️ Seulement du café ou du thé",
        "🍽️ Il faut toujours lui rappeler"
      ],
      "empathy_ar": "غالبا ما يُنسى الترطيب.",
      "question_ar": "هل يشرب كمية كافية من الماء خلال اليوم؟",
      "options_ar": [
        "🍽️ قليل جدا (أقل من نصف لتر)",
        "🍽️ بشكل مناسب",
        "🍽️ فقط القهوة أو الشاي",
        "🍽️ يجب تذكيره دائما"
      ],
      "empathy_en": "Hydration is often the great forgotten.",
      "question_en": "Does he/she drink enough water during the day?",
      "options_en": [
        "🍽️ Very little (less than half a liter)",
        "🍽️ Adequately",
        "🍽️ Only coffee or tea",
        "🍽️ Always have to remind them"
      ],
      "empathy_es": "La hidratación suele ser la gran olvidada.",
      "question_es": "¿Bebe suficiente agua durante el día?",
      "options_es": [
        "🍽️ Muy poco (menos de medio litro)",
        "🍽️ Adecuadamente",
        "🍽️ Solo café o té",
        "🍽️ Siempre hay que recordárselo"
      ]
    },
    "diabetes_s_step1": {
      "empathy_fr": "La gestion du diabète chez le senior nécessite beaucoup de douceur.",
      "question_fr": "Est-il/elle sous insuline ou sous traitement oral (comprimés) ?",
      "options_fr": [
        "🛑 Insuline",
        "🛑 Comprimés (antidiabétiques oraux)",
        "🛑 Les deux",
        "🛑 Seulement un régime / pas de traitement"
      ],
      "empathy_ar": "إدارة السكري لدى كبار السن تتطلب الكثير من اللطف.",
      "question_ar": "هل يتناول الأنسولين أم أدوية عن طريق الفم؟",
      "options_ar": [
        "🛑 أنسولين",
        "🛑 أقراص",
        "🛑 كلاهما",
        "🛑 حمية فقط / لا يوجد علاج"
      ],
      "empathy_en": "Managing diabetes in seniors requires gentleness.",
      "question_en": "Is he/she on insulin or oral medication?",
      "options_en": [
        "🛑 Insulin",
        "🛑 Pills",
        "🛑 Both",
        "🛑 Diet only / no medication"
      ],
      "empathy_es": "El manejo del diabetes en personas mayores requiere mucha delicadeza.",
      "question_es": "¿Está en insulina o tratamiento oral?",
      "options_es": [
        "🛑 Insulina",
        "🛑 Pastillas",
        "🛑 Ambos",
        "🛑 Solo dieta / sin medicación"
      ]
    },
    "diabetes_s_step2": {
      "empathy_fr": "L'hypoglycémie est le plus grand risque chez le sujet âgé.",
      "question_fr": "Fait-il/elle souvent des épisodes d'hypoglycémie (malaise, sueurs, confusion) ?",
      "options_fr": [
        "📉 Oui, fréquemment",
        "📉 Parfois, surtout la nuit ou avant le repas",
        "📉 Très rarement",
        "📉 Jamais, la glycémie est plutôt toujours haute"
      ],
      "empathy_ar": "نقص السكر في الدم هو الخطر الأكبر لدى كبار السن.",
      "question_ar": "هل يعاني غالبا من نوبات نقص السكر؟",
      "options_ar": [
        "📉 نعم، كثيرا",
        "📉 أحيانا، خاصة في الليل",
        "📉 نادرا جدا",
        "📉 أبدا، السكر دائما مرتفع"
      ],
      "empathy_en": "Hypoglycemia is the greatest risk in the elderly.",
      "question_en": "Does he/she often have hypoglycemic episodes (dizziness, sweats, confusion)?",
      "options_en": [
        "📉 Yes, frequently",
        "📉 Sometimes, especially at night",
        "📉 Very rarely",
        "📉 Never, blood sugar is usually high"
      ],
      "empathy_es": "La hipoglucemia es el mayor riesgo en los ancianos.",
      "question_es": "¿Tiene a menudo episodios de hipoglucemia (mareos, sudores)?",
      "options_es": [
        "📉 Sí, frecuentemente",
        "📉 A veces, sobre todo de noche",
        "📉 Muy raramente",
        "📉 Nunca, la glucosa suele estar alta"
      ]
    },
    "diabetes_s_step3": {
      "empathy_fr": "Les reins et la vue subissent le sucre en excès.",
      "question_fr": "Y a-t-il des complications liées au diabète (vue, reins, pieds) ?",
      "options_fr": [
        "🍽️ Oui, problèmes rénaux",
        "🍽️ Oui, neuropathie (pieds/jambes)",
        "🍽️ Oui, vue (rétinopathie)",
        "🍽️ Non, pas de complications connues"
      ],
      "empathy_ar": "الكلى والبصر تعاني من زيادة السكر.",
      "question_ar": "هل هناك مضاعفات مرتبطة بالسكري (بصر، كلى، قدمين)؟",
      "options_ar": [
        "🍽️ نعم، مشاكل في الكلى",
        "🍽️ نعم، اعتلال الأعصاب (أقدام)",
        "🍽️ نعم، بصر (اعتلال الشبكية)",
        "🍽️ لا، لا توجد مضاعفات معروفة"
      ],
      "empathy_en": "Kidneys and vision suffer from excess sugar.",
      "question_en": "Are there complications related to diabetes (vision, kidneys, feet)?",
      "options_en": [
        "🍽️ Yes, kidney problems",
        "🍽️ Yes, neuropathy (feet/legs)",
        "🍽️ Yes, vision (retinopathy)",
        "🍽️ No known complications"
      ],
      "empathy_es": "Los riñones y la vista sufren por el exceso de azúcar.",
      "question_es": "¿Hay complicaciones relacionadas con la diabetes (vista, riñones, pies)?",
      "options_es": [
        "🍽️ Sí, problemas renales",
        "🍽️ Sí, neuropatía (pies/piernas)",
        "🍽️ Sí, vista (retinopatía)",
        "🍽️ No hay complicaciones conocidas"
      ]
    },
    "memory_step1": {
      "empathy_fr": "La nutrition joue un rôle protecteur majeur sur le cerveau.",
      "question_fr": "Avez-vous remarqué des confusions fréquentes ou des pertes de mémoire récentes ?",
      "options_fr": [
        "🛑 Oui, diagnostiqué (Alzheimer / Démence)",
        "🛑 Des oublis fréquents mais non diagnostiqués",
        "🛑 Non, c'est surtout préventif",
        "🛑 Il/Elle répète souvent les mêmes choses"
      ],
      "empathy_ar": "التغذية تلعب دورا وقائيا كبيرا للدماغ.",
      "question_ar": "هل لاحظت ارتباكا متكررا أو فقدانا حديثا للذاكرة؟",
      "options_ar": [
        "🛑 نعم، مشخص (زهايمر / خرف)",
        "🛑 نسيان متكرر غير مشخص",
        "🛑 لا، هذا كإجراء وقائي",
        "🛑 يكرر غالبا نفس الأشياء"
      ],
      "empathy_en": "Nutrition plays a major protective role for the brain.",
      "question_en": "Have you noticed frequent confusion or recent memory loss?",
      "options_en": [
        "🛑 Yes, diagnosed (Alzheimer's / Dementia)",
        "🛑 Frequent but undiagnosed forgetfulness",
        "🛑 No, mostly preventive",
        "🛑 Often repeats the same things"
      ],
      "empathy_es": "La nutrición juega un papel protector importante para el cerebro.",
      "question_es": "¿Ha notado confusión frecuente o pérdida de memoria reciente?",
      "options_es": [
        "🛑 Sí, diagnosticado (Alzheimer / Demencia)",
        "🛑 Olvidos frecuentes pero no diagnosticados",
        "🛑 No, principalmente preventivo",
        "🛑 A menudo repite las mismas cosas"
      ]
    },
    "memory_step2": {
      "empathy_fr": "Le cerveau est l'organe le plus gras du corps.",
      "question_fr": "Consomme-t-il/elle régulièrement des aliments riches en bonnes graisses (poissons gras, huile d'olive, noix) ?",
      "options_fr": [
        "📉 Oui, très régulièrement",
        "📉 Parfois",
        "📉 Rarement",
        "📉 Pratiquement jamais (régime sans graisse)"
      ],
      "empathy_ar": "الدماغ هو العضو الأكثر دهنية في الجسم.",
      "question_ar": "هل يستهلك بانتظام الأطعمة الغنية بالدهون الجيدة (الأسماك الدهنية، زيت الزيتون)؟",
      "options_ar": [
        "📉 نعم، بانتظام جدا",
        "📉 أحيانا",
        "📉 نادرا",
        "📉 عمليا أبدا (نظام خال من الدهون)"
      ],
      "empathy_en": "The brain is the fattiest organ in the body.",
      "question_en": "Does he/she regularly consume foods rich in good fats (fatty fish, olive oil, nuts)?",
      "options_en": [
        "📉 Yes, very regularly",
        "📉 Sometimes",
        "📉 Rarely",
        "📉 Almost never (low-fat diet)"
      ],
      "empathy_es": "El cerebro es el órgano más graso del cuerpo.",
      "question_es": "¿Consume regularmente alimentos ricos en grasas buenas (pescado graso, aceite de oliva)?",
      "options_es": [
        "📉 Sí, muy regularmente",
        "📉 A veces",
        "📉 Raramente",
        "📉 Prácticamente nunca (dieta sin grasa)"
      ]
    },
    "memory_step3": {
      "empathy_fr": "Un intestin inflammé accélère le déclin cognitif.",
      "question_fr": "Souffre-t-il/elle de constipation chronique (très fréquent avec l'âge) ?",
      "options_fr": [
        "🍽️ Oui, c'est un problème constant",
        "🍽️ Parfois",
        "🍽️ Non, transit normal",
        "🍽️ Prend des laxatifs tous les jours"
      ],
      "empathy_ar": "الأمعاء الملتهبة تسرع التدهور المعرفي.",
      "question_ar": "هل يعاني من إمساك مزمن؟",
      "options_ar": [
        "🍽️ نعم، مشكلة مستمرة",
        "🍽️ أحيانا",
        "🍽️ لا، عبور طبيعي",
        "🍽️ يأخذ ملينات كل يوم"
      ],
      "empathy_en": "An inflamed gut accelerates cognitive decline.",
      "question_en": "Does he/she suffer from chronic constipation?",
      "options_en": [
        "🍽️ Yes, constant problem",
        "🍽️ Sometimes",
        "🍽️ No, normal transit",
        "🍽️ Takes laxatives daily"
      ],
      "empathy_es": "Un intestino inflamado acelera el declive cognitivo.",
      "question_es": "¿Sufre de estreñimiento crónico?",
      "options_es": [
        "🍽️ Sí, problema constante",
        "🍽️ A veces",
        "🍽️ No, tránsito normal",
        "🍽️ Toma laxantes a diario"
      ]
    },
    "general_step1": {
      "empathy_fr": "Un bon métabolisme de base garantit une énergie constante.",
      "question_fr": "Comment décririez-vous votre niveau d'énergie général ?",
      "options_fr": [
        "🛑 Constant tout au long de la journée",
        "🛑 Des coups de pompe fréquents",
        "🛑 Je suis très fatigué(e) au réveil",
        "🛑 Une grosse baisse l'après-midi"
      ],
      "empathy_ar": "يضمن التمثيل الغذائي الأساسي الجيد طاقة ثابتة.",
      "question_ar": "كيف تصف مستوى طاقتك العام؟",
      "options_ar": [
        "🛑 ثابت طوال اليوم",
        "🛑 انخفاض متكرر في الطاقة",
        "🛑 متعب جدا عند الاستيقاظ",
        "🛑 انخفاض كبير بعد الظهر"
      ],
      "empathy_en": "A good basal metabolism guarantees constant energy.",
      "question_en": "How would you describe your overall energy level?",
      "options_en": [
        "🛑 Constant throughout the day",
        "🛑 Frequent energy crashes",
        "🛑 Very tired upon waking up",
        "🛑 A big drop in the afternoon"
      ],
      "empathy_es": "Un buen metabolismo basal garantiza energía constante.",
      "question_es": "¿Cómo describiría su nivel de energía general?",
      "options_es": [
        "🛑 Constante durante el día",
        "🛑 Bajones frecuentes de energía",
        "🛑 Muy cansado/a al despertar",
        "🛑 Gran bajón por la tarde"
      ]
    },
    "general_step2": {
      "empathy_fr": "L'hydratation et le sommeil sont les piliers invisibles de la santé.",
      "question_fr": "Combien d'heures dormez-vous en moyenne ?",
      "options_fr": [
        "📉 Moins de 6 heures",
        "📉 6 à 7 heures",
        "📉 7 à 8 heures",
        "📉 Plus de 8 heures"
      ],
      "empathy_ar": "الترطيب والنوم هما الركائز غير المرئية للصحة.",
      "question_ar": "كم عدد ساعات نومك في المتوسط؟",
      "options_ar": [
        "📉 أقل من 6 ساعات",
        "📉 6 إلى 7 ساعات",
        "📉 7 إلى 8 ساعات",
        "📉 أكثر من 8 ساعات"
      ],
      "empathy_en": "Hydration and sleep are the invisible pillars of health.",
      "question_en": "How many hours do you sleep on average?",
      "options_en": [
        "📉 Less than 6 hours",
        "📉 6 to 7 hours",
        "📉 7 to 8 hours",
        "📉 More than 8 hours"
      ],
      "empathy_es": "La hidratación y el sueño son los pilares invisibles de la salud.",
      "question_es": "¿Cuántas horas duerme en promedio?",
      "options_es": [
        "📉 Menos de 6 horas",
        "📉 6 a 7 horas",
        "📉 7 a 8 horas",
        "📉 Más de 8 horas"
      ]
    },
    "general_step3": {
      "empathy_fr": "Même sans symptôme particulier, la prévention est essentielle.",
      "question_fr": "Avez-vous une activité physique régulière ?",
      "options_fr": [
        "🍽️ Je suis sédentaire",
        "🍽️ 1 à 2 fois par semaine",
        "🍽️ 3 à 4 fois par semaine",
        "🍽️ Tous les jours"
      ],
      "empathy_ar": "حتى بدون أعراض محددة، الوقاية ضرورية.",
      "question_ar": "هل تمارس نشاطًا بدنيًا بانتظام؟",
      "options_ar": [
        "🍽️ أنا خامل",
        "🍽️ 1 إلى 2 مرات في الأسبوع",
        "🍽️ 3 إلى 4 مرات في الأسبوع",
        "🍽️ كل يوم"
      ],
      "empathy_en": "Even without specific symptoms, prevention is essential.",
      "question_en": "Do you engage in regular physical activity?",
      "options_en": [
        "🍽️ I am sedentary",
        "🍽️ 1 to 2 times a week",
        "🍽️ 3 to 4 times a week",
        "🍽️ Every day"
      ],
      "empathy_es": "Incluso sin síntomas particulares, la prevención es esencial.",
      "question_es": "¿Realiza actividad física de forma regular?",
      "options_es": [
        "🍽️ Soy sedentario/a",
        "🍽️ 1 a 2 veces por semana",
        "🍽️ 3 a 4 veces por semana",
        "🍽️ Todos los días"
      ]
    },
    "weightLoss_step1": {
      "empathy_fr": "La perte de poids n'est pas qu'une question de calories in/out.",
      "question_fr": "Quel est le principal obstacle que vous rencontrez ?",
      "options_fr": [
        "🛑 Effet yo-yo constant",
        "🛑 Je stagne malgré mes efforts",
        "🛑 Fringales émotionnelles",
        "🛑 Je ne sais pas par où commencer"
      ],
      "empathy_ar": "فقدان الوزن ليس مجرد حساب سعرات.",
      "question_ar": "ما هو العائق الرئيسي الذي تواجهه؟",
      "options_ar": [
        "🛑 تأثير اليويو المستمر",
        "🛑 ثبات الوزن رغم الجهود",
        "🛑 الجوع العاطفي",
        "🛑 لا أعرف من أين أبدأ"
      ],
      "empathy_en": "Weight loss isn't just about calories in/out.",
      "question_en": "What is the main obstacle you face?",
      "options_en": [
        "🛑 Constant yo-yo effect",
        "🛑 Plateauing despite efforts",
        "🛑 Emotional cravings",
        "🛑 I don't know where to start"
      ],
      "empathy_es": "La pérdida de peso no es solo cuestión de calorías.",
      "question_es": "¿Cuál es el principal obstáculo que enfrenta?",
      "options_es": [
        "🛑 Efecto yo-yo constante",
        "🛑 Estancamiento a pesar de los esfuerzos",
        "🛑 Antojos emocionales",
        "🛑 No sé por dónde empezar"
      ]
    },
    "weightLoss_step2": {
      "empathy_fr": "Les régimes restrictifs passés abîment souvent le métabolisme de base.",
      "question_fr": "Combien de régimes stricts avez-vous suivis dans le passé ?",
      "options_fr": [
        "📉 Aucun, c'est ma première fois",
        "📉 1 à 3 régimes",
        "📉 4 à 6 régimes",
        "📉 Je suis toujours au régime"
      ],
      "empathy_ar": "الأنظمة القاسية السابقة تضر غالباً بالأيض الأساسي.",
      "question_ar": "كم عدد الأنظمة الصارمة التي اتبعتها في الماضي؟",
      "options_ar": [
        "📉 لا شيء، هذه أول مرة",
        "📉 1 إلى 3 أنظمة",
        "📉 4 إلى 6 أنظمة",
        "📉 أنا دائماً في دايت"
      ],
      "empathy_en": "Past restrictive diets often damage basal metabolism.",
      "question_en": "How many strict diets have you followed in the past?",
      "options_en": [
        "📉 None, it's my first time",
        "📉 1 to 3 diets",
        "📉 4 to 6 diets",
        "📉 I'm always on a diet"
      ],
      "empathy_es": "Las dietas restrictivas pasadas a menudo dañan el metabolismo basal.",
      "question_es": "¿Cuántas dietas estrictas ha seguido en el pasado?",
      "options_es": [
        "📉 Ninguna, es mi primera vez",
        "📉 1 a 3 dietas",
        "📉 4 a 6 dietas",
        "📉 Siempre estoy a dieta"
      ]
    },
    "weightLoss_step3": {
      "empathy_fr": "Votre rythme de vie joue un rôle majeur.",
      "question_fr": "À quelle fréquence mangez-vous à l'extérieur ou commandez-vous vos repas ?",
      "options_fr": [
        "🍽️ Presque jamais (tout est fait maison)",
        "🍽️ 1 à 2 fois par semaine",
        "🍽️ 3 à 5 fois par semaine",
        "🍽️ Presque tous les jours"
      ],
      "empathy_ar": "نمط حياتك يلعب دوراً كبيراً.",
      "question_ar": "كم مرة تأكل في الخارج أو تطلب وجبات؟",
      "options_ar": [
        "🍽️ تقريباً أبداً (كل شيء منزلي)",
        "🍽️ 1 إلى 2 مرات أسبوعياً",
        "🍽️ 3 إلى 5 مرات أسبوعياً",
        "🍽️ تقريباً كل يوم"
      ],
      "empathy_en": "Your lifestyle plays a major role.",
      "question_en": "How often do you eat out or order meals?",
      "options_en": [
        "🍽️ Almost never (all homemade)",
        "🍽️ 1 to 2 times a week",
        "🍽️ 3 to 5 times a week",
        "🍽️ Almost every day"
      ],
      "empathy_es": "Su estilo de vida juega un papel importante.",
      "question_es": "¿Con qué frecuencia come fuera o pide comida?",
      "options_es": [
        "🍽️ Casi nunca (todo casero)",
        "🍽️ 1 a 2 veces por semana",
        "🍽️ 3 a 5 veces por semana",
        "🍽️ Casi todos los días"
      ]
    },
    "diabetes_step1": {
      "empathy_fr": "Votre glycémie n'est pas qu'une question de sucre — les graisses viscérales et le stress influencent votre insuline.",
      "question_fr": "Quel est votre statut médical actuel concernant le sucre ?",
      "options_fr": [
        "🩸 Je suis pré-diabétique",
        "🩸 Diabète de Type 2 (installé)",
        "🩸 Diabète de Type 1",
        "🩸 Diabète gestationnel"
      ],
      "empathy_ar": "سكر دمك ليس مسألة سكر فقط — الدهون والتوتر يؤثرون على الأنسولين.",
      "question_ar": "ما هو وضعك الطبي الحالي بخصوص السكر؟",
      "options_ar": [
        "🩸 أنا في مرحلة ما قبل السكري",
        "🩸 سكري النوع الثاني (مستقر)",
        "🩸 سكري النوع الأول",
        "🩸 سكري الحمل"
      ],
      "empathy_en": "Your blood sugar isn't just about sugar — visceral fat and stress influence your insulin.",
      "question_en": "What is your current medical status regarding sugar?",
      "options_en": [
        "🩸 I am pre-diabetic",
        "🩸 Type 2 Diabetes (established)",
        "🩸 Type 1 Diabetes",
        "🩸 Gestational diabetes"
      ],
      "empathy_es": "Su glucemia no es solo cuestión de azúcar — la grasa visceral y el estrés influyen en su insulina.",
      "question_es": "¿Cuál es su estado médico actual respecto al azúcar?",
      "options_es": [
        "🩸 Soy pre-diabético",
        "🩸 Diabetes Tipo 2 (establecida)",
        "🩸 Diabetes Tipo 1",
        "🩸 Diabetes gestacional"
      ]
    },
    "diabetes_step2": {
      "empathy_fr": "Le traitement du diabète est très évolutif et doit s'adapter à votre mode de vie.",
      "question_fr": "Prenez-vous un traitement pour réguler votre glycémie ?",
      "options_fr": [
        "💊 Oui, des comprimés oraux (ex: Metformine)",
        "💉 Oui, de l'insuline",
        "💊💉 Les deux (comprimés et insuline)",
        "🚫 Aucun traitement, juste mon alimentation"
      ],
      "empathy_ar": "علاج السكري متطور جداً ويجب أن يتكيف مع نمط حياتك.",
      "question_ar": "هل تتناول علاجاً لتنظيم سكر الدم؟",
      "options_ar": [
        "💊 نعم، أقراص فموية (مثل ميتفورمين)",
        "💉 نعم، أنسولين",
        "💊💉 كلاهما (أقراص وأنسولين)",
        "🚫 لا يوجد علاج، فقط نظامي الغذائي"
      ],
      "empathy_en": "Diabetes treatment is highly evolving and must adapt to your lifestyle.",
      "question_en": "Do you take medication to regulate your blood sugar?",
      "options_en": [
        "💊 Yes, oral tablets (e.g., Metformin)",
        "💉 Yes, insulin",
        "💊💉 Both (tablets and insulin)",
        "🚫 No medication, just my diet"
      ],
      "empathy_es": "El tratamiento de la diabetes es muy evolutivo y debe adaptarse a su estilo de vida.",
      "question_es": "¿Toma medicación para regular su glucemia?",
      "options_es": [
        "💊 Sí, pastillas orales (ej: Metformina)",
        "💉 Sí, insulina",
        "💊💉 Ambas (pastillas e insulina)",
        "🚫 Ninguna medicación, solo mi dieta"
      ]
    },
    "diabetes_step3": {
      "empathy_fr": "L'hémoglobine glyquée (HbA1c) est le véritable témoin de votre équilibre sur 3 mois.",
      "question_fr": "Savez-vous où se situe votre dernière HbA1c ?",
      "options_fr": [
        "📉 En dessous de 6%",
        "📊 Entre 6% et 7%",
        "📈 Au-dessus de 7%",
        "🤷‍♂️ Je ne sais pas / Je n'ai pas fait d'analyses récemment"
      ],
      "empathy_ar": "الخزان (HbA1c) هو الشاهد الحقيقي على توازنك لمدة 3 أشهر.",
      "question_ar": "هل تعرف أين يقع مستوى HbA1c الأخير لديك؟",
      "options_ar": [
        "📉 أقل من 6%",
        "📊 بين 6% و 7%",
        "📈 أعلى من 7%",
        "🤷‍♂️ لا أعرف / لم أقم بتحاليل مؤخراً"
      ],
      "empathy_en": "Glycated hemoglobin (HbA1c) is the true witness of your balance over 3 months.",
      "question_en": "Do you know where your last HbA1c stands?",
      "options_en": [
        "📉 Below 6%",
        "📊 Between 6% and 7%",
        "📈 Above 7%",
        "🤷‍♂️ I don't know / I haven't tested recently"
      ],
      "empathy_es": "La hemoglobina glicosilada (HbA1c) es el verdadero testigo de su equilibrio en 3 meses.",
      "question_es": "¿Sabe dónde se sitúa su última HbA1c?",
      "options_es": [
        "📉 Por debajo del 6%",
        "📊 Entre el 6% y el 7%",
        "📈 Por encima del 7%",
        "🤷‍♂️ No lo sé / No me he hecho análisis recientemente"
      ]
    },
    "hormonal_step1": {
      "empathy_fr": "Le système endocrinien est un orchestre : insuline, cortisol, œstrogènes s'influencent mutuellement.",
      "question_fr": "Quel trouble hormonal vous concerne principalement ?",
      "options_fr": [
        "🦋 SOPK (Ovaires Polykystiques)",
        "🦋 Thyroïde (Hypo / Hashimoto)",
        "🌸 Ménopause / Péri-ménopause",
        "📅 SPM sévère / Endométriose"
      ],
      "empathy_ar": "الجهاز الهرموني أوركسترا: الأنسولين والكورتيزول والإستروجين يؤثرون على بعض.",
      "question_ar": "أي اضطراب هرموني يخصك أساساً؟",
      "options_ar": [
        "🦋 تكيس المبايض (SOPK)",
        "🦋 الغدة الدرقية (خمول / هاشيموتو)",
        "🌸 سن اليأس / قبل سن اليأس",
        "📅 متلازمة ما قبل الحيض / بطانة الرحم المهاجرة"
      ],
      "empathy_en": "The endocrine system is an orchestra: insulin, cortisol, estrogens influence each other.",
      "question_en": "Which hormonal issue concerns you most?",
      "options_en": [
        "🦋 PCOS (Polycystic Ovaries)",
        "🦋 Thyroid (Hypo / Hashimoto)",
        "🌸 Menopause / Peri-menopause",
        "📅 Severe PMS / Endometriosis"
      ],
      "empathy_es": "El sistema endocrino es una orquesta: insulina, cortisol, estrógenos se influyen mutuamente.",
      "question_es": "¿Qué trastorno hormonal le preocupa principalmente?",
      "options_es": [
        "🦋 SOP (Ovarios Poliquísticos)",
        "🦋 Tiroides (Hipo / Hashimoto)",
        "🌸 Menopausia / Peri-menopausia",
        "📅 SPM severo / Endometriosis"
      ]
    },
    "hormonal_step2": {
      "empathy_fr": "Les cycles hormonaux ont une énorme influence sur la rétention d'eau et les compulsions.",
      "question_fr": "Comment ce trouble se manifeste-t-il au quotidien ?",
      "options_fr": [
        "🔥 Prise de poids inexpliquée",
        "🌊 Rétention d'eau et jambes lourdes",
        "🍫 Fringales sucrées incontrôlables",
        "😴 Fatigue intense et chute de cheveux"
      ],
      "empathy_ar": "للدورات الهرمونية تأثير كبير على احتباس الماء والشراهة.",
      "question_ar": "كيف يتجلى هذا الاضطراب يومياً؟",
      "options_ar": [
        "🔥 زيادة وزن غير مبررة",
        "🌊 احتباس ماء وثقل في الساقين",
        "🍫 رغبة شديدة في السكريات",
        "😴 تعب شديد وتساقط الشعر"
      ],
      "empathy_en": "Hormonal cycles heavily influence water retention and cravings.",
      "question_en": "How does this disorder manifest daily?",
      "options_en": [
        "🔥 Unexplained weight gain",
        "🌊 Water retention and heavy legs",
        "🍫 Uncontrollable sugar cravings",
        "😴 Intense fatigue and hair loss"
      ],
      "empathy_es": "Los ciclos hormonales influyen enormemente en la retención de líquidos y los antojos.",
      "question_es": "¿Cómo se manifiesta este trastorno a diario?",
      "options_es": [
        "🔥 Aumento de peso inexplicable",
        "🌊 Retención de líquidos y piernas pesadas",
        "🍫 Antojos incontrolables de azúcar",
        "😴 Fatiga intensa y caída del cabello"
      ]
    },
    "hormonal_step3": {
      "empathy_fr": "L'inflammation de bas grade aggrave toujours les dérèglements hormonaux.",
      "question_fr": "Avez-vous déjà pris un traitement pour cela (pilule, lévothyrox, inositol...) ?",
      "options_fr": [
        "💊 Oui, traitement médical (Lévothyrox, etc.)",
        "💊 Oui, contraceptif hormonal",
        "🌿 Compléments naturels (Inositol, etc.)",
        "🚫 Aucun traitement pour l'instant"
      ],
      "empathy_ar": "الالتهاب منخفض الدرجة يؤدي دائماً إلى تفاقم الاضطرابات الهرمونية.",
      "question_ar": "هل أخذت علاجاً لذلك من قبل (حبوب، ليفوثايروكس، إينوزيتول...)؟",
      "options_ar": [
        "💊 نعم، علاج طبي (ليفوثايروكس، إلخ)",
        "💊 نعم، موانع حمل هرمونية",
        "🌿 مكملات طبيعية (إينوزيتول، إلخ)",
        "🚫 لا يوجد علاج حالياً"
      ],
      "empathy_en": "Low-grade inflammation always worsens hormonal imbalances.",
      "question_en": "Have you ever taken treatment for this (pill, levothyroxine, inositol...)?",
      "options_en": [
        "💊 Yes, medical treatment (Levothyroxine, etc.)",
        "💊 Yes, hormonal contraceptive",
        "🌿 Natural supplements (Inositol, etc.)",
        "🚫 No treatment at the moment"
      ],
      "empathy_es": "La inflamación de bajo grado siempre agrava los desequilibrios hormonales.",
      "question_es": "¿Ha tomado alguna vez tratamiento para esto (píldora, levotiroxina, inositol...)?",
      "options_es": [
        "💊 Sí, tratamiento médico (Levotiroxina, etc.)",
        "💊 Sí, anticonceptivo hormonal",
        "🌿 Suplementos naturales (Inositol, etc.)",
        "🚫 Ningún tratamiento por el momento"
      ]
    },
    "digestive_step1": {
      "empathy_fr": "Votre intestin est votre 2ème cerveau — chaque symptôme est un message décodable.",
      "question_fr": "Quel symptôme digestif vous gêne le plus au quotidien ?",
      "options_fr": [
        "💨 Ballonnements et gaz (le ventre qui gonfle)",
        "🔄 Alternance constipation / diarrhée (IBS)",
        "🔥 Reflux gastrique (RGO) et brûlures",
        "🤢 Lenteur digestive et nausées"
      ],
      "empathy_ar": "أمعاؤك هي دماغك الثاني — كل عرض هو رسالة يمكن فك شفرتها.",
      "question_ar": "أي عرض هضمي يزعجك أكثر يومياً؟",
      "options_ar": [
        "💨 انتفاخ وغازات",
        "🔄 تناوب إمساك / إسهال (IBS)",
        "🔥 ارتجاع معدي وحرقة",
        "🤢 بطء في الهضم وغثيان"
      ],
      "empathy_en": "Your gut is your 2nd brain — every symptom is a decodable message.",
      "question_en": "Which digestive symptom bothers you most daily?",
      "options_en": [
        "💨 Bloating and gas (belly swelling)",
        "🔄 Alternating constipation / diarrhea (IBS)",
        "🔥 Acid reflux (GERD) and heartburn",
        "🤢 Digestive slowness and nausea"
      ],
      "empathy_es": "Su intestino es su 2º cerebro — cada síntoma es un mensaje descifrable.",
      "question_es": "¿Qué síntoma digestivo le molesta más a diario?",
      "options_es": [
        "💨 Hinchazón y gases (vientre que se hincha)",
        "🔄 Alternancia estreñimiento / diarrea (SII)",
        "🔥 Reflujo gástrico y ardor",
        "🤢 Lentitud digestiva y náuseas"
      ]
    },
    "digestive_step2": {
      "empathy_fr": "Les intolérances alimentaires créent une inflammation silencieuse constante.",
      "question_fr": "Avez-vous identifié des aliments déclencheurs ?",
      "options_fr": [
        "🥛 Le lait et les produits laitiers",
        "🍞 Le pain, les pâtes (Gluten)",
        "🧅 Certains légumes (FODMAPs)",
        "❓ Je ne sais pas, ça semble aléatoire"
      ],
      "empathy_ar": "عدم تحمل الطعام يخلق التهاباً صامتاً مستمراً.",
      "question_ar": "هل حددت أطعمة محفزة؟",
      "options_ar": [
        "🥛 الحليب ومشتقاته",
        "🍞 الخبز، المعكرونة (الغلوتين)",
        "🧅 بعض الخضروات (FODMAPs)",
        "❓ لا أعرف، يبدو الأمر عشوائياً"
      ],
      "empathy_en": "Food intolerances create constant silent inflammation.",
      "question_en": "Have you identified trigger foods?",
      "options_en": [
        "🥛 Milk and dairy products",
        "🍞 Bread, pasta (Gluten)",
        "🧅 Certain vegetables (FODMAPs)",
        "❓ I don't know, it seems random"
      ],
      "empathy_es": "Las intolerancias alimentarias crean una inflamación silenciosa constante.",
      "question_es": "¿Ha identificado alimentos desencadenantes?",
      "options_es": [
        "🥛 Leche y lácteos",
        "🍞 Pan, pasta (Gluten)",
        "🧅 Ciertas verduras (FODMAPs)",
        "❓ No lo sé, parece aleatorio"
      ]
    },
    "digestive_step3": {
      "empathy_fr": "Le stress modifie la motilité intestinale de manière drastique.",
      "question_fr": "Vos symptômes s'aggravent-ils avec le stress ou l'anxiété ?",
      "options_fr": [
        "📈 Énormément, c'est très lié",
        "📊 Un petit peu",
        "⚖️ Non, ça n'a pas de lien",
        "🤷‍♂️ Je n'ai pas remarqué"
      ],
      "empathy_ar": "التوتر يغير حركة الأمعاء بشكل جذري.",
      "question_ar": "هل تتفاقم أعراضك مع التوتر أو القلق؟",
      "options_ar": [
        "📈 كثيراً، مرتبطان جداً",
        "📊 قليلاً",
        "⚖️ لا، لا علاقة لهما",
        "🤷‍♂️ لم ألاحظ"
      ],
      "empathy_en": "Stress drastically alters intestinal motility.",
      "question_en": "Do your symptoms worsen with stress or anxiety?",
      "options_en": [
        "📈 Enormously, it's very linked",
        "📊 A little bit",
        "⚖️ No, there's no link",
        "🤷‍♂️ I haven't noticed"
      ],
      "empathy_es": "El estrés altera drásticamente la motilidad intestinal.",
      "question_es": "¿Sus síntomas empeoran con el estrés o la ansiedad?",
      "options_es": [
        "📈 Enormemente, está muy relacionado",
        "📊 Un poco",
        "⚖️ No, no hay relación",
        "🤷‍♂️ No me he fijado"
      ]
    },
    "tca_step1": {
      "empathy_fr": "Les compulsions sont orchestrées par un déséquilibre (sérotonine/dopamine) — ce n'est pas un manque de volonté.",
      "question_fr": "Comment se manifestent vos troubles alimentaires ?",
      "options_fr": [
        "🌙 Compulsions nocturnes (après 21h)",
        "😰 Crises de boulimie (avec ou sans vomissements)",
        "🔁 Hyperphagie / Grignotage continu",
        "🤐 Restriction stricte (peur de manger)"
      ],
      "empathy_ar": "النوبات يحركها اختلال في التوازن (سيروتونين/دوبامين) — ليست نقصاً في الإرادة.",
      "question_ar": "كيف تتجلى اضطراباتك الغذائية؟",
      "options_ar": [
        "🌙 نوبات ليلية (بعد 9 مساءً)",
        "😰 نوبات شراهة (مع أو بدون تقيؤ)",
        "🔁 أكل مفرط / نقنقة مستمرة",
        "🤐 تقييد صارم (خوف من الأكل)"
      ],
      "empathy_en": "Compulsions are orchestrated by an imbalance (serotonin/dopamine) — it's not a lack of willpower.",
      "question_en": "How do your eating disorders manifest?",
      "options_en": [
        "🌙 Night compulsions (after 9pm)",
        "😰 Bulimia episodes (with or without vomiting)",
        "🔁 Binge eating / Continuous snacking",
        "🤐 Strict restriction (fear of eating)"
      ],
      "empathy_es": "Las compulsiones son orquestadas por un desequilibrio (serotonina/dopamina) — no es falta de voluntad.",
      "question_es": "¿Cómo se manifiestan sus trastornos alimentarios?",
      "options_es": [
        "🌙 Compulsiones nocturnas (después de las 21h)",
        "😰 Crisis de bulimia (con o sin vómitos)",
        "🔁 Hiperfagia / Picoteo continuo",
        "🤐 Restricción estricta (miedo a comer)"
      ]
    },
    "tca_step2": {
      "empathy_fr": "Culpabiliser après une crise ne fait que relancer le cycle.",
      "question_fr": "À quelle fréquence ces crises surviennent-elles ?",
      "options_fr": [
        "📅 Plusieurs fois par jour",
        "📅 Presque tous les jours",
        "📅 1 à 3 fois par semaine",
        "📅 Moins d'une fois par semaine"
      ],
      "empathy_ar": "الشعور بالذنب بعد النوبة يعيد إطلاق الدورة فقط.",
      "question_ar": "كم مرة تحدث هذه النوبات؟",
      "options_ar": [
        "📅 عدة مرات في اليوم",
        "📅 تقريباً كل يوم",
        "📅 1 إلى 3 مرات أسبوعياً",
        "📅 أقل من مرة أسبوعياً"
      ],
      "empathy_en": "Feeling guilty after a crisis only restarts the cycle.",
      "question_en": "How often do these crises occur?",
      "options_en": [
        "📅 Several times a day",
        "📅 Almost every day",
        "📅 1 to 3 times a week",
        "📅 Less than once a week"
      ],
      "empathy_es": "Sentirse culpable tras una crisis solo reinicia el ciclo.",
      "question_es": "¿Con qué frecuencia ocurren estas crisis?",
      "options_es": [
        "📅 Varias veces al día",
        "📅 Casi todos los días",
        "📅 1 a 3 veces por semana",
        "📅 Menos de una vez por semana"
      ]
    },
    "tca_step3": {
      "empathy_fr": "Identifier l'élément déclencheur est la première étape vers la libération.",
      "question_fr": "Quel est selon vous le déclencheur principal ?",
      "options_fr": [
        "😫 Le stress ou la contrariété",
        "😞 L'ennui ou la solitude",
        "😔 Une émotion forte (tristesse, colère)",
        "🍽️ Après m'être trop restreint(e) (le régime)"
      ],
      "empathy_ar": "تحديد المحفز هو الخطوة الأولى نحو التحرر.",
      "question_ar": "ما هو برأيك المحفز الرئيسي؟",
      "options_ar": [
        "😫 التوتر أو الانزعاج",
        "😞 الملل أو الوحدة",
        "😔 عاطفة قوية (حزن، غضب)",
        "🍽️ بعد تقييد نفسي أكثر من اللازم (الدايت)"
      ],
      "empathy_en": "Identifying the trigger is the first step towards liberation.",
      "question_en": "What do you think is the main trigger?",
      "options_en": [
        "😫 Stress or annoyance",
        "😞 Boredom or loneliness",
        "😔 Strong emotion (sadness, anger)",
        "🍽️ After restricting myself too much (diet)"
      ],
      "empathy_es": "Identificar el desencadenante es el primer paso hacia la liberación.",
      "question_es": "¿Cuál cree que es el desencadenante principal?",
      "options_es": [
        "😫 Estrés o molestia",
        "😞 Aburrimiento o soledad",
        "😔 Una emoción fuerte (tristeza, ira)",
        "🍽️ Después de restringirme demasiado (dieta)"
      ]
    },
    "fatigue_step1": {
      "empathy_fr": "La fatigue chronique est un épuisement mesurable de vos réserves cellulaires (fer, magnésium, B12).",
      "question_fr": "Quand cette fatigue est-elle la plus intense ?",
      "options_fr": [
        "☁️ Dès le réveil (sommeil non réparateur)",
        "💤 Effondrement total après 14h (crash)",
        "🔋 En fin de journée, épuisement total",
        "⚖️ C'est permanent, toute la journée"
      ],
      "empathy_ar": "التعب المزمن هو استنفاد يمكن قياسه لاحتياطياتك الخلوية (حديد، مغنيسيوم، B12).",
      "question_ar": "متى يكون هذا التعب أشد؟",
      "options_ar": [
        "☁️ منذ الاستيقاظ (نوم غير مريح)",
        "💤 انهيار تام بعد الثانية ظهراً",
        "🔋 نهاية اليوم، إنهاك تام",
        "⚖️ إنه دائم، طوال اليوم"
      ],
      "empathy_en": "Chronic fatigue is a measurable depletion of your cellular reserves (iron, magnesium, B12).",
      "question_en": "When is this fatigue most intense?",
      "options_en": [
        "☁️ Upon waking up (unrefreshing sleep)",
        "💤 Total crash after 2pm",
        "🔋 At the end of the day, total exhaustion",
        "⚖️ It's permanent, all day long"
      ],
      "empathy_es": "La fatiga crónica es un agotamiento medible de sus reservas celulares (hierro, magnesio, B12).",
      "question_es": "¿Cuándo es más intensa esta fatiga?",
      "options_es": [
        "☁️ Al despertar (sueño no reparador)",
        "💤 Colapso total después de las 14h",
        "🔋 Al final del día, agotamiento total",
        "⚖️ Es permanente, todo el día"
      ]
    },
    "fatigue_step2": {
      "empathy_fr": "La qualité de votre sommeil dicte la réparation de votre corps.",
      "question_fr": "Comment évaluez-vous votre sommeil ?",
      "options_fr": [
        "😴 Je dors bien mais je suis toujours fatigué(e)",
        "⏰ Je me réveille souvent vers 3h du matin",
        "🛌 J'ai beaucoup de mal à m'endormir",
        "🥴 Mon sommeil est agité et court"
      ],
      "empathy_ar": "جودة نومك تملي عملية ترميم جسمك.",
      "question_ar": "كيف تقيم نومك؟",
      "options_ar": [
        "😴 أنام جيداً لكنني متعب دائماً",
        "⏰ أستيقظ غالباً حوالي الثالثة فجراً",
        "🛌 أجد صعوبة كبيرة في النوم",
        "🥴 نومي مضطرب وقصير"
      ],
      "empathy_en": "Your sleep quality dictates your body's repair.",
      "question_en": "How do you rate your sleep?",
      "options_en": [
        "😴 I sleep well but am always tired",
        "⏰ I often wake up around 3 am",
        "🛌 I have a hard time falling asleep",
        "🥴 My sleep is restless and short"
      ],
      "empathy_es": "La calidad de su sueño dicta la reparación de su cuerpo.",
      "question_es": "¿Cómo evalúa su sueño?",
      "options_es": [
        "😴 Duermo bien pero siempre estoy cansado",
        "⏰ A menudo me despierto sobre las 3 am",
        "🛌 Me cuesta mucho conciliar el sueño",
        "🥴 Mi sueño es agitado y corto"
      ]
    },
    "fatigue_step3": {
      "empathy_fr": "Une carence en vitamine D, fer ou magnésium bloque le moteur cellulaire.",
      "question_fr": "Prenez-vous des compléments alimentaires ou des vitamines actuellement ?",
      "options_fr": [
        "💊 Oui, je me complémente souvent",
        "💊 J'ai essayé le magnésium/vitamine C mais sans succès",
        "☕ Non, je compte sur le café pour tenir",
        "🚫 Non, je ne prends rien"
      ],
      "empathy_ar": "نقص فيتامين D أو الحديد أو المغنيسيوم يوقف المحرك الخلوي.",
      "question_ar": "هل تتناول مكملات غذائية أو فيتامينات حالياً؟",
      "options_ar": [
        "💊 نعم، آخذ مكملات غالباً",
        "💊 جربت المغنيسيوم/فيتامين C لكن بدون نجاح",
        "☕ لا، أعتمد على القهوة للصمود",
        "🚫 لا، لا آخذ شيئاً"
      ],
      "empathy_en": "A deficiency in vitamin D, iron or magnesium blocks the cellular engine.",
      "question_en": "Are you currently taking dietary supplements or vitamins?",
      "options_en": [
        "💊 Yes, I often take supplements",
        "💊 I tried magnesium/vitamin C but without success",
        "☕ No, I rely on coffee to keep going",
        "🚫 No, I take nothing"
      ],
      "empathy_es": "Una deficiencia de vitamina D, hierro o magnesio bloquea el motor celular.",
      "question_es": "¿Toma actualmente suplementos dietéticos o vitaminas?",
      "options_es": [
        "💊 Sí, me suplemento a menudo",
        "💊 Probé magnesio/vitamina C pero sin éxito",
        "☕ No, confío en el café para aguantar",
        "🚫 No, no tomo nada"
      ]
    },
    "metabolic_step1": {
      "empathy_fr": "L'inflammation chronique de bas grade est la racine commune de ces troubles, réversible par l'assiette.",
      "question_fr": "Quelles anomalies ont été détectées dans vos analyses ?",
      "options_fr": [
        "📊 Cholestérol élevé (LDL / Triglycérides)",
        "🫀 Hypertension artérielle",
        "🔬 Foie gras (Stéatose hépatique / NAFLD)",
        "🔥 Acide urique (Goutte)"
      ],
      "empathy_ar": "الالتهاب المزمن منخفض الدرجة هو الجذر المشترك لهذه الاضطرابات، ويمكن عكسه بالطعام.",
      "question_ar": "ما هي التشوهات التي تم اكتشافها في تحاليلك؟",
      "options_ar": [
        "📊 كوليسترول مرتفع (LDL / دهون ثلاثية)",
        "🫀 ارتفاع ضغط الدم",
        "🔬 كبد دهني (NAFLD)",
        "🔥 حمض اليوريك (النقرس)"
      ],
      "empathy_en": "Chronic low-grade inflammation is the common root of these disorders, reversible through diet.",
      "question_en": "What abnormalities were detected in your tests?",
      "options_en": [
        "📊 High cholesterol (LDL / Triglycerides)",
        "🫀 High blood pressure",
        "🔬 Fatty liver (Steatosis / NAFLD)",
        "🔥 Uric acid (Gout)"
      ],
      "empathy_es": "La inflamación crónica de bajo grado es la raíz común de estos trastornos, reversible con la dieta.",
      "question_es": "¿Qué anomalías se detectaron en sus análisis?",
      "options_es": [
        "📊 Colesterol alto (LDL / Triglicéridos)",
        "🫀 Hipertensión arterial",
        "🔬 Hígado graso (Esteatosis / NAFLD)",
        "🔥 Ácido úrico (Gota)"
      ]
    },
    "metabolic_step2": {
      "empathy_fr": "Beaucoup de personnes prennent des médicaments pour les symptômes sans traiter la cause (l'assiette).",
      "question_fr": "Prenez-vous des médicaments pour cela (Statines, Antihypertenseurs...) ?",
      "options_fr": [
        "💊 Oui, des statines (pour le cholestérol)",
        "💊 Oui, des médicaments pour la tension",
        "💊 Les deux (Tension + Cholestérol)",
        "🚫 Aucun, je veux régler ça naturellement"
      ],
      "empathy_ar": "الكثير من الناس يأخذون أدوية للأعراض دون علاج السبب (الطعام).",
      "question_ar": "هل تأخذ أدوية لذلك (ستاتين، خافضات ضغط...)؟",
      "options_ar": [
        "💊 نعم، ستاتين (للكوليسترول)",
        "💊 نعم، أدوية للضغط",
        "💊 كلاهما (ضغط + كوليسترول)",
        "🚫 لا شيء، أريد حل ذلك طبيعياً"
      ],
      "empathy_en": "Many people take medications for symptoms without treating the cause (diet).",
      "question_en": "Do you take medications for this (Statins, Antihypertensives...)?",
      "options_en": [
        "💊 Yes, statins (for cholesterol)",
        "💊 Yes, blood pressure medications",
        "💊 Both (BP + Cholesterol)",
        "🚫 None, I want to resolve this naturally"
      ],
      "empathy_es": "Muchas personas toman medicamentos para los síntomas sin tratar la causa (la dieta).",
      "question_es": "¿Toma medicamentos para esto (Estatinas, Antihipertensivos...)?",
      "options_es": [
        "💊 Sí, estatinas (para el colesterol)",
        "💊 Sí, medicamentos para la tensión",
        "💊 Ambos (Tensión + Colesterol)",
        "🚫 Ninguno, quiero resolverlo de forma natural"
      ]
    },
    "metabolic_step3": {
      "empathy_fr": "Le métabolisme réagit très vite à la répartition des macronutriments dans la journée.",
      "question_fr": "Avez-vous une sédentarité importante ?",
      "options_fr": [
        "🪑 Oui, je suis assis(e) toute la journée",
        "🚶‍♂️ Non, je marche régulièrement",
        "🏋️‍♂️ Je fais du sport 2-3 fois par semaine",
        "🤸‍♂️ Je suis très actif(ve) tous les jours"
      ],
      "empathy_ar": "يتفاعل الأيض بسرعة كبيرة مع توزيع المغذيات الكبيرة على مدار اليوم.",
      "question_ar": "هل لديك خمول بدني كبير؟",
      "options_ar": [
        "🪑 نعم، أنا جالس طوال اليوم",
        "🚶‍♂️ لا، أمشي بانتظام",
        "🏋️‍♂️ أمارس الرياضة 2-3 مرات في الأسبوع",
        "🤸‍♂️ أنا نشيط جداً كل يوم"
      ],
      "empathy_en": "Metabolism reacts very quickly to the distribution of macronutrients throughout the day.",
      "question_en": "Do you have a highly sedentary lifestyle?",
      "options_en": [
        "🪑 Yes, I sit all day",
        "🚶‍♂️ No, I walk regularly",
        "🏋️‍♂️ I exercise 2-3 times a week",
        "🤸‍♂️ I am very active every day"
      ],
      "empathy_es": "El metabolismo reacciona muy rápido a la distribución de macronutrientes a lo largo del día.",
      "question_es": "¿Tiene un gran sedentarismo?",
      "options_es": [
        "🪑 Sí, estoy sentado todo el día",
        "🚶‍♂️ No, camino regularmente",
        "🏋️‍♂️ Hago deporte 2-3 veces por semana",
        "🤸‍♂️ Soy muy activo(a) todos los días"
      ]
    },
    "pregnancy_step1": {
      "empathy_fr": "Chaque phase de la maternité a des besoins micronutritionnels critiques (fer, folates, iode).",
      "question_fr": "À quelle étape précise êtes-vous ?",
      "options_fr": [
        "💭 Projet bébé (Préconception / Fertilité)",
        "🤰 1er trimestre (Nausées, fatigue)",
        "🤰 2ème ou 3ème trimestre",
        "🍼 Post-partum ou Allaitement"
      ],
      "empathy_ar": "كل مرحلة من الأمومة لها احتياجات دقيقة (حديد، حمض الفوليك، يود).",
      "question_ar": "في أي مرحلة أنتِ تحديداً؟",
      "options_ar": [
        "💭 مشروع حمل (ما قبل الحمل / الخصوبة)",
        "🤰 الثلث الأول (غثيان، تعب)",
        "🤰 الثلث الثاني أو الثالث",
        "🍼 بعد الولادة أو الرضاعة"
      ],
      "empathy_en": "Each phase of motherhood has critical micronutritional needs (iron, folates, iodine).",
      "question_en": "What specific stage are you at?",
      "options_en": [
        "💭 Trying to conceive (Preconception / Fertility)",
        "🤰 1st trimester (Nausea, fatigue)",
        "🤰 2nd or 3rd trimester",
        "🍼 Postpartum or Breastfeeding"
      ],
      "empathy_es": "Cada fase de la maternidad tiene necesidades micronutricionales críticas (hierro, folatos, yodo).",
      "question_es": "¿En qué etapa específica está?",
      "options_es": [
        "💭 Buscando embarazo (Preconcepción / Fertilidad)",
        "🤰 1er trimestre (Náuseas, fatiga)",
        "🤰 2do o 3er trimestre",
        "🍼 Postparto o Lactancia"
      ]
    },
    "pregnancy_step2": {
      "empathy_fr": "La régulation de la glycémie est primordiale pour éviter les complications.",
      "question_fr": "Faites-vous du diabète gestationnel ?",
      "options_fr": [
        "🩸 Oui, sous régime strict",
        "💉 Oui, sous insuline",
        "⚖️ Non, ma glycémie est normale",
        "❓ Je ne sais pas encore, test prévu bientôt"
      ],
      "empathy_ar": "تنظيم سكر الدم أمر بالغ الأهمية لتجنب المضاعفات.",
      "question_ar": "هل تعانين من سكري الحمل؟",
      "options_ar": [
        "🩸 نعم، تحت نظام صارم",
        "💉 نعم، تحت الأنسولين",
        "⚖️ لا، سكري طبيعي",
        "❓ لا أعرف بعد، الفحص قريب"
      ],
      "empathy_en": "Blood sugar regulation is paramount to avoid complications.",
      "question_en": "Do you have gestational diabetes?",
      "options_en": [
        "🩸 Yes, on a strict diet",
        "💉 Yes, on insulin",
        "⚖️ No, my blood sugar is normal",
        "❓ I don't know yet, test scheduled soon"
      ],
      "empathy_es": "La regulación de la glucemia es primordial para evitar complicaciones.",
      "question_es": "¿Tiene diabetes gestacional?",
      "options_es": [
        "🩸 Sí, con dieta estricta",
        "💉 Sí, con insulina",
        "⚖️ No, mi glucemia es normal",
        "❓ Aún no lo sé, prueba programada pronto"
      ]
    },
    "pregnancy_step3": {
      "empathy_fr": "Votre digestion est fortement impactée par la progestérone et le volume de l'utérus.",
      "question_fr": "Avez-vous des inconforts digestifs marqués ?",
      "options_fr": [
        "🔥 Énormément de brûlures d'estomac (RGO)",
        "🔄 Constipation sévère",
        "🤢 Nausées persistantes",
        "👌 Non, tout va bien niveau digestif"
      ],
      "empathy_ar": "يتأثر هضمك بشدة بالبروجستيرون وحجم الرحم.",
      "question_ar": "هل تعانين من انزعاج هضمي ملحوظ؟",
      "options_ar": [
        "🔥 حرقة معدة شديدة",
        "🔄 إمساك شديد",
        "🤢 غثيان مستمر",
        "👌 لا، كل شيء جيد هضمياً"
      ],
      "empathy_en": "Your digestion is heavily impacted by progesterone and uterus volume.",
      "question_en": "Do you have marked digestive discomforts?",
      "options_en": [
        "🔥 A lot of heartburn (GERD)",
        "🔄 Severe constipation",
        "🤢 Persistent nausea",
        "👌 No, everything is fine digestively"
      ],
      "empathy_es": "Su digestión está fuertemente impactada por la progesterona y el volumen del útero.",
      "question_es": "¿Tiene molestias digestivas marcadas?",
      "options_es": [
        "🔥 Mucha acidez estomacal (ERGE)",
        "🔄 Estreñimiento severo",
        "🤢 Náuseas persistentes",
        "👌 No, todo bien a nivel digestivo"
      ]
    },
    "pediatric_step1": {
      "empathy_fr": "L'alimentation d'un enfant en pleine croissance nécessite une grande diplomatie, pas de restrictions.",
      "question_fr": "Quel est le comportement de votre enfant face à la nourriture ?",
      "options_fr": [
        "🍽️ Très sélectif, refuse les légumes (Néophobie)",
        "🍬 Attiré exclusivement par le sucre",
        "🔁 Il/Elle a tout le temps faim et réclame",
        "🤐 Il/Elle a un très petit appétit"
      ],
      "empathy_ar": "تغذية طفل في مرحلة النمو تتطلب دبلوماسية كبيرة، لا قيود.",
      "question_ar": "كيف هو سلوك طفلك تجاه الطعام؟",
      "options_ar": [
        "🍽️ انتقائي جداً، يرفض الخضار",
        "🍬 ينجذب حصرياً للسكر",
        "🔁 جائع طوال الوقت ويطلب الأكل",
        "🤐 شهيته ضعيفة جداً"
      ],
      "empathy_en": "Feeding a growing child requires great diplomacy, not restrictions.",
      "question_en": "What is your child's behavior towards food?",
      "options_en": [
        "🍽️ Very selective, refuses vegetables",
        "🍬 Exclusively drawn to sugar",
        "🔁 Always hungry and asking for food",
        "🤐 Very small appetite"
      ],
      "empathy_es": "La alimentación de un niño en crecimiento requiere gran diplomacia, no restricciones.",
      "question_es": "¿Cuál es el comportamiento de su hijo(a) ante la comida?",
      "options_es": [
        "🍽️ Muy selectivo, rechaza las verduras",
        "🍬 Atraído exclusivamente por el azúcar",
        "🔁 Siempre tiene hambre y pide comer",
        "🤐 Tiene muy poco apetito"
      ]
    },
    "pediatric_step2": {
      "empathy_fr": "L'environnement familial est le premier modèle nutritionnel de l'enfant.",
      "question_fr": "Comment se passent les repas à la maison ?",
      "options_fr": [
        "📺 Souvent devant un écran (TV, tablette)",
        "⚔️ C'est un combat quotidien, beaucoup de cris",
        "🍽️ On mange tous ensemble calmement",
        "🏃‍♂️ Sur le pouce, par manque de temps"
      ],
      "empathy_ar": "البيئة الأسرية هي النموذج الغذائي الأول للطفل.",
      "question_ar": "كيف تمر أوقات الوجبات في المنزل؟",
      "options_ar": [
        "📺 غالباً أمام شاشة (تلفاز، تابلت)",
        "⚔️ صراع يومي، الكثير من الصراخ",
        "🍽️ نأكل جميعاً معاً بهدوء",
        "🏃‍♂️ على عجل، لضيق الوقت"
      ],
      "empathy_en": "The family environment is the child's first nutritional model.",
      "question_en": "How do meals go at home?",
      "options_en": [
        "📺 Often in front of a screen (TV, tablet)",
        "⚔️ It's a daily battle, lots of yelling",
        "🍽️ We all eat together calmly",
        "🏃‍♂️ On the go, due to lack of time"
      ],
      "empathy_es": "El entorno familiar es el primer modelo nutricional del niño.",
      "question_es": "¿Cómo transcurren las comidas en casa?",
      "options_es": [
        "📺 A menudo frente a una pantalla (TV, tablet)",
        "⚔️ Es una lucha diaria, muchos gritos",
        "🍽️ Comemos todos juntos tranquilamente",
        "🏃‍♂️ Sobre la marcha, por falta de tiempo"
      ]
    },
    "pediatric_step3": {
      "empathy_fr": "Le suivi de la courbe de croissance est essentiel pour détecter les anomalies.",
      "question_fr": "Que dit le pédiatre concernant sa courbe de poids ?",
      "options_fr": [
        "📈 Surpoids ou risque d'obésité infantile",
        "📉 Cassure de la courbe (trop mince)",
        "⚖️ La courbe est parfaitement normale",
        "🤷‍♂️ Je n'ai pas consulté récemment"
      ],
      "empathy_ar": "متابعة منحنى النمو ضرورية لاكتشاف أي خلل.",
      "question_ar": "ماذا يقول طبيب الأطفال عن منحنى وزنه؟",
      "options_ar": [
        "📈 زيادة وزن أو خطر السمنة",
        "📉 انكسار المنحنى (نحيف جداً)",
        "⚖️ المنحنى طبيعي تماماً",
        "🤷‍♂️ لم أستشر مؤخراً"
      ],
      "empathy_en": "Monitoring the growth chart is essential to detect abnormalities.",
      "question_en": "What does the pediatrician say about their weight curve?",
      "options_en": [
        "📈 Overweight or risk of childhood obesity",
        "📉 Curve break (too thin)",
        "⚖️ The curve is perfectly normal",
        "🤷‍♂️ I haven't consulted recently"
      ],
      "empathy_es": "El seguimiento de la curva de crecimiento es esencial para detectar anomalías.",
      "question_es": "¿Qué dice el pediatra sobre su curva de peso?",
      "options_es": [
        "📈 Sobrepeso o riesgo de obesidad",
        "📉 Ruptura de la curva (demasiado delgado)",
        "⚖️ La curva es perfectamente normal",
        "🤷‍♂️ No he consultado recientemente"
      ]
    },
    "senior_step1": {
      "empathy_fr": "L'avancée dans l'âge modifie profondément l'absorption des protéines et des vitamines.",
      "question_fr": "Avez-vous remarqué l'un de ces changements chez votre parent ?",
      "options_fr": [
        "🤐 Perte d'appétit marquée",
        "💪 Fonte musculaire (sarcopénie) ou perte de force",
        "🦷 Difficultés à mâcher ou avaler",
        "⚖️ Aucun de ces signes, très en forme"
      ],
      "empathy_ar": "التقدم في العمر يغير بعمق امتصاص البروتينات والفيتامينات.",
      "question_ar": "هل لاحظت أياً من هذه التغييرات لدى والدك/والدتك؟",
      "options_ar": [
        "🤐 فقدان ملحوظ للشهية",
        "💪 ضمور العضلات أو فقدان القوة",
        "🦷 صعوبة في المضغ أو البلع",
        "⚖️ لا شيء من هذا، بصحة جيدة جداً"
      ],
      "empathy_en": "Advancing age profoundly changes the absorption of proteins and vitamins.",
      "question_en": "Have you noticed any of these changes in your parent?",
      "options_en": [
        "🤐 Marked loss of appetite",
        "💪 Muscle wasting (sarcopenia) or loss of strength",
        "🦷 Difficulty chewing or swallowing",
        "⚖️ None of these signs, very fit"
      ],
      "empathy_es": "El avance de la edad modifica profundamente la absorción de proteínas y vitaminas.",
      "question_es": "¿Ha notado alguno de estos cambios en su padre/madre?",
      "options_es": [
        "🤐 Pérdida de apetito marcada",
        "💪 Pérdida de masa muscular (sarcopenia) o fuerza",
        "🦷 Dificultades para masticar o tragar",
        "⚖️ Ninguno de estos signos, muy en forma"
      ]
    },
    "senior_step2": {
      "empathy_fr": "L'hydratation est souvent négligée car la sensation de soif s'estompe avec l'âge.",
      "question_fr": "Comment s'hydrate-t-il/elle au quotidien ?",
      "options_fr": [
        "💧 Très peu, il faut lui rappeler de boire",
        "☕ Surtout du thé ou du café",
        "🥤 Assez bien (au moins 1L d'eau)",
        "🤷‍♂️ Je ne suis pas sûr(e)"
      ],
      "empathy_ar": "غالباً ما يُهمل الترطيب لأن الشعور بالعطش يتلاشى مع العمر.",
      "question_ar": "كيف يترطب يومياً؟",
      "options_ar": [
        "💧 قليل جداً، يجب تذكيره بالشرب",
        "☕ أساساً شاي أو قهوة",
        "🥤 جيداً (على الأقل 1 لتر ماء)",
        "🤷‍♂️ لست متأكداً"
      ],
      "empathy_en": "Hydration is often neglected as the sensation of thirst fades with age.",
      "question_en": "How do they hydrate daily?",
      "options_en": [
        "💧 Very little, they need to be reminded to drink",
        "☕ Mostly tea or coffee",
        "🥤 Fairly well (at least 1L of water)",
        "🤷‍♂️ I'm not sure"
      ],
      "empathy_es": "La hidratación a menudo se descuida porque la sensación de sed se desvanece con la edad.",
      "question_es": "¿Cómo se hidrata a diario?",
      "options_es": [
        "💧 Muy poco, hay que recordarle que beba",
        "☕ Sobre todo té o café",
        "🥤 Bastante bien (al menos 1L de agua)",
        "🤷‍♂️ No estoy seguro(a)"
      ]
    },
    "senior_step3": {
      "empathy_fr": "La poly-médication (prise de nombreux médicaments) altère l'absorption des nutriments.",
      "question_fr": "Prend-il/elle de nombreux médicaments chaque jour ?",
      "options_fr": [
        "💊 Oui, plus de 5 médicaments par jour",
        "💊 Entre 2 et 4 médicaments",
        "💊 Seulement 1 médicament ciblé",
        "🚫 Aucun médicament régulier"
      ],
      "empathy_ar": "تعدد الأدوية يضعف امتصاص العناصر الغذائية.",
      "question_ar": "هل يأخذ العديد من الأدوية يومياً؟",
      "options_ar": [
        "💊 نعم، أكثر من 5 أدوية يومياً",
        "💊 بين 2 و 4 أدوية",
        "💊 دواء واحد فقط",
        "🚫 لا توجد أدوية منتظمة"
      ],
      "empathy_en": "Poly-medication (taking many drugs) alters nutrient absorption.",
      "question_en": "Do they take many medications every day?",
      "options_en": [
        "💊 Yes, more than 5 medications a day",
        "💊 Between 2 and 4 medications",
        "💊 Only 1 targeted medication",
        "🚫 No regular medication"
      ],
      "empathy_es": "La polimedicación (tomar muchos medicamentos) altera la absorción de nutrientes.",
      "question_es": "¿Toma muchos medicamentos cada día?",
      "options_es": [
        "💊 Sí, más de 5 medicamentos al día",
        "💊 Entre 2 y 4 medicamentos",
        "💊 Solo 1 medicamento",
        "🚫 Ningún medicamento regular"
      ]
    }
  },
  "dossier": {
    "picky": {
      "headline_fr": "Sélectivité Alimentaire : Retrouver la Sérénité",
      "realities_fr": [
        "Les aversions (néophobie) sont normales, forcer crée des blocages durables.",
        "C'est souvent une question sensorielle (texture, vue) plus que de goût.",
        "Le mimétisme familial est le levier le plus puissant pour l'enfant."
      ],
      "timeline_fr": {
        "j14": "Dédramatisation des repas.",
        "j30": "Premiers essais de nouveaux aliments.",
        "j90": "Assiette diversifiée sans conflit."
      },
      "headline_ar": "الانتقائية الغذائية: استعادة الهدوء",
      "realities_ar": [
        "النفور طبيعي، والإجبار يخلق عقبات دائمة.",
        "غالبًا ما تكون مسألة حسية (ملمس، منظر) وليس طعم.",
        "التقليد العائلي هو أقوى دافع للطفل."
      ],
      "timeline_ar": {
        "j14": "تقليل التوتر في الوجبات.",
        "j30": "محاولات أولى لأطعمة جديدة.",
        "j90": "طبق متنوع بدون صراع."
      },
      "headline_en": "Picky Eating: Finding Serenity",
      "realities_en": [
        "Aversions are normal, forcing creates lasting blocks.",
        "It's often a sensory issue rather than just taste.",
        "Family mimicking is the most powerful tool."
      ],
      "timeline_en": {
        "j14": "Reduced mealtime stress.",
        "j30": "First attempts at new foods.",
        "j90": "Diversified plate without conflict."
      },
      "headline_es": "Selectividad Alimentaria: Encontrar la Serenidad",
      "realities_es": [
        "Las aversiones son normales, forzar crea bloqueos duraderos.",
        "A menudo es una cuestión sensorial más que de sabor.",
        "El mimetismo familiar es la herramienta más poderosa."
      ],
      "timeline_es": {
        "j14": "Reducción de la tensión.",
        "j30": "Primeros intentos de nuevos alimentos.",
        "j90": "Plato diversificado sin conflictos."
      }
    },
    "weight_child": {
      "headline_fr": "Gestion du Poids : Accompagner sans Restreindre",
      "realities_fr": [
        "Mettre un enfant au régime strict est contre-productif, il faut ralentir la prise de poids pendant qu'il grandit en taille.",
        "Le sommeil et la sédentarité (écrans) impactent directement le stockage des graisses.",
        "Les calories liquides (jus, sodas) trompent la satiété de l'enfant."
      ],
      "timeline_fr": {
        "j14": "Réduction des grignotages sans frustration.",
        "j30": "Énergie stabilisée tout au long de la journée.",
        "j90": "Courbe d'IMC normalisée."
      },
      "headline_ar": "إدارة الوزن: مرافقة بدون حرمان",
      "realities_ar": [
        "النظام الغذائي الصارم للطفل يأتي بنتائج عكسية، يجب إبطاء زيادة الوزن أثناء النمو.",
        "النوم وقلة الحركة يؤثران على تخزين الدهون.",
        "السعرات السائلة تخدع الشبع."
      ],
      "timeline_ar": {
        "j14": "تقليل الوجبات الخفيفة بدون حرمان.",
        "j30": "طاقة مستقرة طوال اليوم.",
        "j90": "تطبيع منحنى كتلة الجسم."
      },
      "headline_en": "Weight Management: Support without Restriction",
      "realities_en": [
        "Strict diets are counterproductive; we aim to slow weight gain while they grow taller.",
        "Sleep and screen time directly impact fat storage.",
        "Liquid calories deceive satiety."
      ],
      "timeline_en": {
        "j14": "Reduced snacking without frustration.",
        "j30": "Stabilized energy.",
        "j90": "Normalized BMI curve."
      },
      "headline_es": "Manejo del Peso: Apoyo sin Restricciones",
      "realities_es": [
        "Las dietas estrictas son contraproducentes; buscamos frenar el aumento mientras crece.",
        "El sueño y las pantallas impactan el almacenamiento de grasa.",
        "Las calorías líquidas engañan la saciedad."
      ],
      "timeline_es": {
        "j14": "Reducción de picoteos sin frustración.",
        "j30": "Energía estabilizada.",
        "j90": "Curva de IMC normalizada."
      }
    },
    "growth": {
      "headline_fr": "Soutenir la Croissance Harmonieuse",
      "realities_fr": [
        "Un retard de croissance peut cacher une malabsorption invisible (comme une intolérance).",
        "Densifier les assiettes nutritionnellement (pas juste caloriquement) fait la différence.",
        "Le système digestif de l'enfant doit être apaisé pour bien assimiler."
      ],
      "timeline_fr": {
        "j14": "Digestion améliorée, moins de maux de ventre.",
        "j30": "Regain de vitalité et d'énergie.",
        "j90": "Reprise progressive de la courbe de croissance."
      },
      "headline_ar": "دعم النمو المتناغم",
      "realities_ar": [
        "تأخر النمو قد يخفي سوء امتصاص غير مرئي.",
        "تكثيف الأطباق غذائياً (وليس فقط بالسعرات) يصنع الفارق.",
        "يجب تهدئة الجهاز الهضمي للطفل ليتمكن من الامتصاص الجيد."
      ],
      "timeline_ar": {
        "j14": "تحسن الهضم، ألم بطن أقل.",
        "j30": "استعادة الحيوية والطاقة.",
        "j90": "استئناف تدريجي لمنحنى النمو."
      },
      "headline_en": "Supporting Harmonious Growth",
      "realities_en": [
        "Growth delay can hide invisible malabsorption.",
        "Nutritionally densifying plates (not just calorically) makes the difference.",
        "The child's digestive system must be soothed for proper assimilation."
      ],
      "timeline_en": {
        "j14": "Improved digestion, fewer stomach aches.",
        "j30": "Regained vitality and energy.",
        "j90": "Progressive resumption of the growth curve."
      },
      "headline_es": "Apoyo al Crecimiento Armonioso",
      "realities_es": [
        "El retraso en el crecimiento puede ocultar mala absorción.",
        "Densificar los platos nutricionalmente marca la diferencia.",
        "El sistema digestivo del niño debe estar calmado para asimilar bien."
      ],
      "timeline_es": {
        "j14": "Digestión mejorada, menos dolor de barriga.",
        "j30": "Recuperación de vitalidad y energía.",
        "j90": "Reanudación progresiva de la curva de crecimiento."
      }
    },
    "allergy": {
      "headline_fr": "Allergies et Intolérances : Gérer Sans Frustration",
      "realities_fr": [
        "L'inflammation de l'intestin aggrave les réactions allergiques et l'eczéma.",
        "Manger sans les allergènes ne suffit pas : il faut cicatriser la muqueuse intestinale.",
        "Il est tout à fait possible d'offrir des repas gourmands tout en respectant les évictions."
      ],
      "timeline_fr": {
        "j14": "Baisse de l'inflammation visible (peau, digestion).",
        "j30": "Moins de crises et système immunitaire renforcé.",
        "j90": "Routines culinaires faciles et sans danger adoptées par toute la famille."
      },
      "headline_ar": "الحساسية وعدم التحمل: الإدارة بدون إحباط",
      "realities_ar": [
        "التهاب الأمعاء يفاقم ردود الفعل التحسسية والأكزيما.",
        "الأكل بدون مسببات الحساسية لا يكفي: يجب التئام الغشاء المخاطي المعوي.",
        "من الممكن تقديم وجبات لذيذة مع احترام الامتناع."
      ],
      "timeline_ar": {
        "j14": "انخفاض ملحوظ في الالتهاب (الجلد، الهضم).",
        "j30": "أزمات أقل وجهاز مناعي أقوى.",
        "j90": "روتين طهي سهل وآمن متبنى من العائلة."
      },
      "headline_en": "Allergies and Intolerances: Manage Without Frustration",
      "realities_en": [
        "Gut inflammation worsens allergic reactions and eczema.",
        "Eating without allergens isn't enough: the intestinal lining must heal.",
        "It's entirely possible to offer tasty meals while respecting eliminations."
      ],
      "timeline_en": {
        "j14": "Visible reduction in inflammation (skin, digestion).",
        "j30": "Fewer flare-ups and strengthened immune system.",
        "j90": "Easy, safe cooking routines adopted by the whole family."
      },
      "headline_es": "Alergias e Intolerancias: Manejo sin Frustración",
      "realities_es": [
        "La inflamación intestinal empeora las reacciones alérgicas y el eczema.",
        "Comer sin alérgenos no es suficiente: la mucosa intestinal debe sanar.",
        "Es completamente posible ofrecer comidas deliciosas respetando las eliminaciones."
      ],
      "timeline_es": {
        "j14": "Reducción visible de la inflamación (piel, digestión).",
        "j30": "Menos crisis y sistema inmunológico fortalecido.",
        "j90": "Rutinas de cocina fáciles y seguras adoptadas por la familia."
      }
    },
    "focus": {
      "headline_fr": "Concentration et Apaisement : Le Pouvoir de l'Assiette",
      "realities_fr": [
        "L'excès de sucres et additifs provoque des pics d'insuline qui se traduisent par de l'agitation et des baisses d'attention.",
        "L'intestin est le 2ème cerveau : un microbiote perturbé altère la production de sérotonine (apaisement).",
        "Les bons gras (Oméga-3) sont le carburant essentiel du cerveau en développement."
      ],
      "timeline_fr": {
        "j14": "Humeur plus stable au cours de la journée, moins de crises.",
        "j30": "Meilleur endormissement et concentration prolongée.",
        "j90": "Axe intestin-cerveau apaisé, vraie différence à l'école."
      },
      "headline_ar": "التركيز والهدوء: قوة الطبق",
      "realities_ar": [
        "كثرة السكر والإضافات تسبب ارتفاع الأنسولين، مما يؤدي إلى فرط الحركة وتشتت الانتباه.",
        "الأمعاء هي الدماغ الثاني: الميكروبيوم المضطرب يغير إنتاج السيروتونين.",
        "الدهون الجيدة (أوميغا-3) هي الوقود الأساسي للدماغ النامي."
      ],
      "timeline_ar": {
        "j14": "مزاج أكثر استقراراً، نوبات غضب أقل.",
        "j30": "نوم أفضل وتركيز أطول.",
        "j90": "تهدئة محور الأمعاء والدماغ، فرق حقيقي في المدرسة."
      },
      "headline_en": "Focus and Calm: The Power of the Plate",
      "realities_en": [
        "Excess sugar and additives cause insulin spikes, leading to restlessness and attention drops.",
        "The gut is the 2nd brain: a disrupted microbiome alters serotonin (calming) production.",
        "Good fats (Omega-3s) are the essential fuel for a developing brain."
      ],
      "timeline_en": {
        "j14": "More stable mood throughout the day, fewer outbursts.",
        "j30": "Better sleep onset and prolonged focus.",
        "j90": "Soothed gut-brain axis, real difference at school."
      },
      "headline_es": "Enfoque y Calma: El Poder del Plato",
      "realities_es": [
        "El exceso de azúcar y aditivos causa picos de insulina, lo que lleva a la agitación y caídas de atención.",
        "El intestino es el segundo cerebro: un microbioma alterado altera la producción de serotonina.",
        "Las grasas buenas (Omega-3) son el combustible esencial para un cerebro en desarrollo."
      ],
      "timeline_es": {
        "j14": "Estado de ánimo más estable, menos crisis.",
        "j30": "Mejor sueño y concentración prolongada.",
        "j90": "Eje intestino-cerebro calmado, verdadera diferencia en la escuela."
      }
    },
    "sarcopenia": {
      "headline_fr": "Renforcer la Vitalité et l'Autonomie",
      "realities_fr": [
        "La sarcopénie (fonte musculaire) n'est pas une fatalité liée à l'âge, c'est souvent un déficit d'assimilation des protéines.",
        "Plus l'alimentation est pauvre en nutriments, plus le risque de chute et de fracture augmente.",
        "Il est possible de redensifier le muscle et l'os à tout âge avec le bon dosage protéique et anti-inflammatoire."
      ],
      "timeline_fr": {
        "j14": "Meilleur apport protéique sans surcharger la digestion.",
        "j30": "Premiers signes de regain d'énergie physique.",
        "j90": "Amélioration de la mobilité et de la stabilité."
      },
      "headline_ar": "تعزيز الحيوية والاستقلالية",
      "realities_ar": [
        "الضمور العضلي ليس حتميا مع تقدم العمر، بل غالبا ما يكون نقصا في امتصاص البروتين.",
        "كلما كان النظام الغذائي فقيرا بالمواد المغذية، زاد خطر السقوط والكسور.",
        "من الممكن إعادة تكثيف العضلات والعظام في أي عمر بالجرعة المناسبة."
      ],
      "timeline_ar": {
        "j14": "زيادة تناول البروتين دون إرهاق الهضم.",
        "j30": "العلامات الأولى لاستعادة الطاقة البدنية.",
        "j90": "تحسن الحركة والاستقرار."
      },
      "headline_en": "Strengthening Vitality and Autonomy",
      "realities_en": [
        "Sarcopenia (muscle loss) is not an inevitable part of aging; it's often a protein assimilation deficit.",
        "The poorer the diet in nutrients, the higher the risk of falls and fractures.",
        "It is possible to redensify muscle and bone at any age with the right protein and anti-inflammatory dosage."
      ],
      "timeline_en": {
        "j14": "Better protein intake without overloading digestion.",
        "j30": "First signs of physical energy regain.",
        "j90": "Improved mobility and stability."
      },
      "headline_es": "Fortalecer la Vitalidad y Autonomía",
      "realities_es": [
        "La sarcopenia (pérdida muscular) no es inevitable con la edad; a menudo es un déficit de asimilación de proteínas.",
        "Cuanto más pobre en nutrientes sea la dieta, mayor el riesgo de caídas y fracturas.",
        "Es posible redensificar músculo y hueso a cualquier edad con la dosis adecuada."
      ],
      "timeline_es": {
        "j14": "Mejor aporte de proteínas sin sobrecargar la digestión.",
        "j30": "Primeros signos de recuperación de energía física.",
        "j90": "Mejora de la movilidad y estabilidad."
      }
    },
    "appetite": {
      "headline_fr": "Dénutrition : Ramener le Plaisir et l'Énergie",
      "realities_fr": [
        "L'anorexie liée à l'âge crée un cercle vicieux : moins on mange, plus l'estomac rétrécit et la fatigue s'installe.",
        "Fractionner l'alimentation et l'enrichir sans augmenter le volume est la clé.",
        "Le manque d'eau et de nutriments accélère le déclin des fonctions cérébrales."
      ],
      "timeline_fr": {
        "j14": "Enrichissement des petits volumes pour stopper les carences.",
        "j30": "Retour progressif de l'appétit grâce à l'apport en zinc.",
        "j90": "Poids stabilisé et fatigue estompée."
      },
      "headline_ar": "سوء التغذية: استعادة المتعة والطاقة",
      "realities_ar": [
        "فقدان الشهية المرتبط بالعمر يخلق حلقة مفرغة: كلما قل الأكل، تقلصت المعدة واستقر التعب.",
        "تقسيم الوجبات وإثرائها بدون زيادة الحجم هو المفتاح.",
        "نقص الماء والمغذيات يسرع تدهور وظائف الدماغ."
      ],
      "timeline_ar": {
        "j14": "إثراء الكميات الصغيرة لوقف النقص.",
        "j30": "عودة تدريجية للشهية.",
        "j90": "استقرار الوزن وتلاشي التعب."
      },
      "headline_en": "Malnutrition: Bringing Back Pleasure and Energy",
      "realities_en": [
        "Age-related anorexia creates a vicious circle: less eating leads to stomach shrinking and fatigue.",
        "Fractioning meals and enriching them without increasing volume is key.",
        "Lack of water and nutrients accelerates cognitive decline."
      ],
      "timeline_en": {
        "j14": "Enriching small volumes to stop deficiencies.",
        "j30": "Gradual return of appetite.",
        "j90": "Stabilized weight and diminished fatigue."
      },
      "headline_es": "Desnutrición: Devolver el Placer y la Energía",
      "realities_es": [
        "La anorexia relacionada con la edad crea un círculo vicioso: menos se come, más se encoge el estómago.",
        "Fraccionar y enriquecer la alimentación sin aumentar el volumen es clave.",
        "La falta de agua y nutrientes acelera el declive cerebral."
      ],
      "timeline_es": {
        "j14": "Enriquecimiento de pequeños volúmenes para frenar carencias.",
        "j30": "Retorno progresivo del apetito.",
        "j90": "Peso estabilizado y fatiga disminuida."
      }
    },
    "diabetes_s": {
      "headline_fr": "Diabète Senior : Équilibre Sans Privation",
      "realities_fr": [
        "Chez le senior, les objectifs stricts (HBA1C très basse) sont dangereux car l'hypoglycémie favorise les chutes.",
        "Limiter drastiquement les fruits ou féculents mène à la dénutrition.",
        "Gérer la glycémie passe par l'ordre des aliments (protéines puis fibres puis féculents) sans ôter le plaisir."
      ],
      "timeline_fr": {
        "j14": "Glycémies plus stables, moins de pics et de coups de fatigue.",
        "j30": "Meilleure cicatrisation et immunité renforcée.",
        "j90": "Analyses (HBA1C) apaisées, qualité de vie préservée."
      },
      "headline_ar": "سكري كبار السن: توازن بلا حرمان",
      "realities_ar": [
        "لدى كبار السن، الأهداف الصارمة خطيرة لأن نقص السكر يعزز السقوط.",
        "تقييد الفواكه والنشويات بشدة يؤدي لسوء التغذية.",
        "إدارة السكر تتم بترتيب الأكل دون حرمان من المتعة."
      ],
      "timeline_ar": {
        "j14": "استقرار مستوى السكر، وتعب أقل.",
        "j30": "التئام أفضل ومناعة أقوى.",
        "j90": "تحاليل مستقرة وجودة حياة محفوظة."
      },
      "headline_en": "Senior Diabetes: Balance Without Deprivation",
      "realities_en": [
        "In seniors, strict targets are dangerous as hypoglycemia promotes falls.",
        "Drastically limiting fruits or starches leads to malnutrition.",
        "Managing blood sugar is about food order, not removing pleasure."
      ],
      "timeline_en": {
        "j14": "More stable blood sugar, fewer fatigue crashes.",
        "j30": "Better healing and strengthened immunity.",
        "j90": "Soothed blood tests (HBA1C), preserved quality of life."
      },
      "headline_es": "Diabetes Senior: Equilibrio sin Privación",
      "realities_es": [
        "En personas mayores, los objetivos estrictos son peligrosos porque la hipoglucemia favorece las caídas.",
        "Limitar drásticamente frutas o carbohidratos lleva a la desnutrición.",
        "Manejar la glucosa se logra con el orden de los alimentos, sin quitar el placer."
      ],
      "timeline_es": {
        "j14": "Glucemias más estables, menos fatiga.",
        "j30": "Mejor cicatrización e inmunidad.",
        "j90": "Análisis estables, calidad de vida preservada."
      }
    },
    "memory": {
      "headline_fr": "Bouclier Neuro-protecteur par l'Assiette",
      "realities_fr": [
        "L'inflammation globale et l'oxydation sont les ennemis des neurones : l'alimentation est notre premier antioxydant.",
        "La résistance à l'insuline (diabète de type 3) est fortement corrélée à l'Alzheimer.",
        "Les oméga-3, les vitamines B et l'hydratation sont le carburant essentiel pour ralentir le déclin cognitif."
      ],
      "timeline_fr": {
        "j14": "Apport des nutriments clés pour freiner l'oxydation cellulaire.",
        "j30": "Meilleure énergie générale et clarté mentale.",
        "j90": "Ralentissement potentiel de la neurodégénérescence et protection globale."
      },
      "headline_ar": "الدرع العصبي الواقي عبر الطبق",
      "realities_ar": [
        "الالتهاب والأكسدة هما أعداء الخلايا العصبية: الغذاء هو مضاد الأكسدة الأول.",
        "مقاومة الأنسولين ترتبط بقوة بمرض الزهايمر.",
        "أوميغا 3 وفيتامينات ب والترطيب ضرورية لإبطاء التدهور المعرفي."
      ],
      "timeline_ar": {
        "j14": "توفير العناصر الغذائية الرئيسية لإبطاء أكسدة الخلايا.",
        "j30": "طاقة عامة ووضوح ذهني أفضل.",
        "j90": "تباطؤ محتمل للتنكس العصبي وحماية شاملة."
      },
      "headline_en": "Neuro-protective Shield Through the Plate",
      "realities_en": [
        "Global inflammation and oxidation are enemies of neurons: diet is our first antioxidant.",
        "Insulin resistance (type 3 diabetes) is strongly correlated with Alzheimer's.",
        "Omega-3s, B vitamins, and hydration are essential fuel to slow cognitive decline."
      ],
      "timeline_en": {
        "j14": "Input of key nutrients to slow cellular oxidation.",
        "j30": "Better general energy and mental clarity.",
        "j90": "Potential slowdown of neurodegeneration and global protection."
      },
      "headline_es": "Escudo Neuroprotector a través del Plato",
      "realities_es": [
        "La inflamación global y la oxidación son enemigos de las neuronas: la dieta es nuestro primer antioxidante.",
        "La resistencia a la insulina está fuertemente correlacionada con el Alzheimer.",
        "Omega-3, vitaminas B y la hidratación son combustibles esenciales para frenar el declive cognitivo."
      ],
      "timeline_es": {
        "j14": "Aporte de nutrientes clave para frenar la oxidación celular.",
        "j30": "Mejor energía general y claridad mental.",
        "j90": "Posible ralentización de la neurodegeneración y protección global."
      }
    },
    "tca": {
      "headline_fr": "Apaiser le mental et retrouver un rapport sain à l'alimentation",
      "realities_fr": [
        "Les compulsions alimentaires ne sont pas un manque de volonté, mais une réponse biologique à la restriction.",
        "Votre corps réclame ce dont vous le privez.",
        "La guérison passe par la déconstruction des interdits alimentaires."
      ],
      "timeline_fr": {
        "j14": "Diminution de la charge mentale autour des repas.",
        "j30": "Réduction de la fréquence des compulsions.",
        "j90": "Paix retrouvée avec l'alimentation, écoute des signaux de faim et de satiété."
      },
      "headline_ar": "تهدئة العقل واستعادة علاقة صحية مع الطعام",
      "realities_ar": [
        "الرغبة الشديدة في الأكل ليست نقصاً في الإرادة، بل استجابة بيولوجية للحرمان.",
        "جسمك يطلب ما تحرمه منه.",
        "الشفاء يمر عبر تفكيك الممنوعات الغذائية."
      ],
      "timeline_ar": {
        "j14": "انخفاض العبء العقلي حول الوجبات.",
        "j30": "تقليل تكرار نوبات الشراهة.",
        "j90": "استعادة السلام مع الطعام، الاستماع لإشارات الجوع والشبع."
      },
      "headline_en": "Soothe the mind and regain a healthy relationship with food",
      "realities_en": [
        "Binge eating is not a lack of willpower, but a biological response to restriction.",
        "Your body craves what you deprive it of.",
        "Healing involves deconstructing food restrictions."
      ],
      "timeline_en": {
        "j14": "Decrease in mental load around meals.",
        "j30": "Reduction in the frequency of binge eating.",
        "j90": "Regained peace with food, listening to hunger and satiety signals."
      },
      "headline_es": "Apaciguar la mente y recuperar una relación sana con la comida",
      "realities_es": [
        "Los atracones no son falta de voluntad, sino una respuesta biológica a la restricción.",
        "Su cuerpo reclama aquello de lo que le priva.",
        "La curación pasa por deconstruir las prohibiciones alimentarias."
      ],
      "timeline_es": {
        "j14": "Disminución de la carga mental en torno a las comidas.",
        "j30": "Reducción de la frecuencia de atracones.",
        "j90": "Paz recuperada con la alimentación, escucha de las señales de hambre y saciedad."
      }
    },
    "diabetes": {
      "headline_fr": "Reprendre le contrôle de votre glycémie naturellement",
      "realities_fr": [
        "Le diabète de type 2 et l'insulino-résistance peuvent être grandement améliorés, voire inversés.",
        "L'ordre de prise des aliments compte autant que l'aliment lui-même.",
        "Les muscles sont vos meilleurs alliés pour consommer le sucre dans le sang."
      ],
      "timeline_fr": {
        "j14": "Plus d'énergie après les repas, moins de coups de pompe.",
        "j30": "Glycémie à jeun en baisse, perte de la graisse abdominale.",
        "j90": "HbA1c améliorée, métabolisme réactivé."
      },
      "headline_ar": "استعادة السيطرة على نسبة السكر في الدم بشكل طبيعي",
      "realities_ar": [
        "يمكن تحسين أو عكس مرض السكري من النوع 2 ومقاومة الأنسولين بشكل كبير.",
        "ترتيب تناول الطعام مهم بقدر أهمية الطعام نفسه.",
        "عضلاتك هي أفضل حليف لك لاستهلاك السكر في الدم."
      ],
      "timeline_ar": {
        "j14": "طاقة أكبر بعد الوجبات، تعب أقل.",
        "j30": "انخفاض السكر الصائم، فقدان دهون البطن.",
        "j90": "تحسن مستوى السكر التراكمي، إعادة تنشيط التمثيل الغذائي."
      },
      "headline_en": "Naturally regain control of your blood sugar",
      "realities_en": [
        "Type 2 diabetes and insulin resistance can be vastly improved, sometimes reversed.",
        "The order of food intake matters as much as the food itself.",
        "Muscles are your best allies in consuming blood sugar."
      ],
      "timeline_en": {
        "j14": "More energy after meals, fewer crashes.",
        "j30": "Lower fasting blood sugar, loss of abdominal fat.",
        "j90": "Improved HbA1c, reactivated metabolism."
      },
      "headline_es": "Recuperar el control de su nivel de azúcar en la sangre naturalmente",
      "realities_es": [
        "La diabetes tipo 2 y la resistencia a la insulina pueden mejorar mucho, o incluso revertirse.",
        "El orden de ingesta de alimentos importa tanto como el alimento en sí.",
        "Los músculos son sus mejores aliados para consumir el azúcar en la sangre."
      ],
      "timeline_es": {
        "j14": "Más energía después de las comidas, menos bajones.",
        "j30": "Baja en la glucemia en ayunas, pérdida de grasa abdominal.",
        "j90": "HbA1c mejorada, metabolismo reactivado."
      }
    },
    "digestive": {
      "headline_fr": "Apaiser votre microbiote pour un confort digestif durable",
      "realities_fr": [
        "Les ballonnements ne sont pas une fatalité, c'est le signe d'une dysbiose.",
        "Le régime sans FODMAP est une solution temporaire, pas un mode de vie.",
        "Un intestin poreux affecte aussi votre peau et votre niveau d'énergie."
      ],
      "timeline_fr": {
        "j14": "Réduction significative des gaz et des douleurs abdominales.",
        "j30": "Transit régularisé, meilleure tolérance à certains aliments.",
        "j90": "Microbiote réparé, immunité renforcée, ventre plat."
      },
      "headline_ar": "تهدئة الميكروبيوم لراحة هضمية مستدامة",
      "realities_ar": [
        "الانتفاخ ليس حتمياً، إنه علامة على اختلال الميكروبيوم.",
        "نظام قليل الفودماب حل مؤقت، وليس أسلوب حياة.",
        "الأمعاء المتسربة تؤثر أيضاً على بشرتك ومستوى طاقتك."
      ],
      "timeline_ar": {
        "j14": "تقليل ملحوظ للغازات وآلام البطن.",
        "j30": "تنظيم العبور المعوي، تحمل أفضل لبعض الأطعمة.",
        "j90": "إصلاح الميكروبيوم، مناعة أقوى، بطن مسطح."
      },
      "headline_en": "Soothe your microbiome for lasting digestive comfort",
      "realities_en": [
        "Bloating is not inevitable; it's a sign of dysbiosis.",
        "A low-FODMAP diet is a temporary solution, not a lifestyle.",
        "A leaky gut also affects your skin and energy levels."
      ],
      "timeline_en": {
        "j14": "Significant reduction in gas and abdominal pain.",
        "j30": "Regular transit, better tolerance to certain foods.",
        "j90": "Repaired microbiome, strengthened immunity, flat stomach."
      },
      "headline_es": "Aliviar su microbioma para un confort digestivo duradero",
      "realities_es": [
        "La hinchazón no es inevitable, es un signo de disbiosis.",
        "La dieta baja en FODMAP es una solución temporal, no un estilo de vida.",
        "Un intestino permeable también afecta su piel y niveles de energía."
      ],
      "timeline_es": {
        "j14": "Reducción significativa de gases y dolor abdominal.",
        "j30": "Tránsito regularizado, mejor tolerancia a ciertos alimentos.",
        "j90": "Microbioma reparado, inmunidad fortalecida, vientre plano."
      }
    },
    "hormonal": {
      "headline_fr": "Rétablir l'équilibre hormonal naturel de votre corps",
      "realities_fr": [
        "L'alimentation influence directement la production et l'élimination de vos hormones.",
        "L'insuline joue un rôle clé dans les symptômes du SOPK.",
        "Un foie surchargé a du mal à filtrer les excès d'œstrogènes."
      ],
      "timeline_fr": {
        "j14": "Réduction des envies de sucre, meilleure énergie.",
        "j30": "Cycles plus réguliers, diminution du syndrome prémenstruel (SPM).",
        "j90": "Symptômes hormonaux apaisés, perte de poids facilitée."
      },
      "headline_ar": "استعادة التوازن الهرموني الطبيعي لجسمك",
      "realities_ar": [
        "يؤثر النظام الغذائي بشكل مباشر على إنتاج الهرمونات والتخلص منها.",
        "يلعب الأنسولين دوراً رئيسياً في أعراض تكيس المبايض.",
        "يجد الكبد المثقل صعوبة في تصفية الإستروجين الزائد."
      ],
      "timeline_ar": {
        "j14": "تقليل الرغبة في تناول السكر، طاقة أفضل.",
        "j30": "دورات أكثر انتظاماً، تقليل متلازمة ما قبل الحيض.",
        "j90": "تهدئة الأعراض الهرمونية، تسهيل فقدان الوزن."
      },
      "headline_en": "Restore your body's natural hormonal balance",
      "realities_en": [
        "Diet directly influences the production and elimination of your hormones.",
        "Insulin plays a key role in PCOS symptoms.",
        "An overloaded liver struggles to filter excess estrogen."
      ],
      "timeline_en": {
        "j14": "Reduced sugar cravings, better energy.",
        "j30": "More regular cycles, decrease in PMS.",
        "j90": "Soothed hormonal symptoms, easier weight loss."
      },
      "headline_es": "Restaurar el equilibrio hormonal natural de su cuerpo",
      "realities_es": [
        "La dieta influye directamente en la producción y eliminación de sus hormonas.",
        "La insulina juega un papel clave en los síntomas del SOP.",
        "Un hígado sobrecargado tiene problemas para filtrar el exceso de estrógeno."
      ],
      "timeline_es": {
        "j14": "Reducción de los antojos de azúcar, mejor energía.",
        "j30": "Ciclos más regulares, disminución del SPM.",
        "j90": "Síntomas hormonales aliviados, pérdida de peso facilitada."
      }
    },
    "metabolic": {
      "headline_fr": "Inverser la dysfonction métabolique",
      "realities_fr": [
        "Le foie gras non alcoolique, le cholestérol et l'hypertension sont des maladies de civilisation liées au sucre et à l'inflammation.",
        "Les graisses saines ne sont pas l'ennemi, le sucre raffiné si.",
        "Un métabolisme sain utilise les graisses comme carburant."
      ],
      "timeline_fr": {
        "j14": "Déflation générale, moins de rétention d'eau.",
        "j30": "Amélioration des marqueurs lipidiques et hépatiques.",
        "j90": "Risque cardiovasculaire réduit, foie désengorgé."
      },
      "headline_ar": "عكس الخلل الأيضي",
      "realities_ar": [
        "الكبد الدهني والكوليسترول وارتفاع ضغط الدم هي أمراض حضارية مرتبطة بالسكر والالتهاب.",
        "الدهون الصحية ليست العدو، السكر المكرر هو العدو.",
        "الأيض الصحي يستخدم الدهون كوقود."
      ],
      "timeline_ar": {
        "j14": "انكماش عام، احتباس أقل للماء.",
        "j30": "تحسن علامات الدهون والكبد.",
        "j90": "انخفاض مخاطر القلب والأوعية الدموية، كبد غير محتقن."
      },
      "headline_en": "Reversing metabolic dysfunction",
      "realities_en": [
        "Fatty liver, cholesterol, and hypertension are lifestyle diseases linked to sugar and inflammation.",
        "Healthy fats are not the enemy; refined sugar is.",
        "A healthy metabolism uses fat for fuel."
      ],
      "timeline_en": {
        "j14": "General deflation, less water retention.",
        "j30": "Improvement of lipid and hepatic markers.",
        "j90": "Reduced cardiovascular risk, decongested liver."
      },
      "headline_es": "Revertir la disfunción metabólica",
      "realities_es": [
        "El hígado graso, el colesterol y la hipertensión son enfermedades del estilo de vida vinculadas al azúcar y la inflamación.",
        "Las grasas saludables no son el enemigo; el azúcar refinado sí.",
        "Un metabolismo sano utiliza la grasa como combustible."
      ],
      "timeline_es": {
        "j14": "Deflación general, menos retención de líquidos.",
        "j30": "Mejora de los marcadores lipídicos y hepáticos.",
        "j90": "Reducción del riesgo cardiovascular, hígado descongestionado."
      }
    },
    "pregnancy": {
      "headline_fr": "Nourrir la vie, de la conception à l'allaitement",
      "realities_fr": [
        "L'alimentation pendant la grossesse programme la santé future de votre bébé (épigénétique).",
        "Vos besoins en micronutriments (fer, iode, folates) explosent, mais les besoins en calories augmentent peu.",
        "La prévention du diabète gestationnel passe par un contrôle de la charge glycémique des repas."
      ],
      "timeline_fr": {
        "j14": "Digestion apaisée, moins de nausées, énergie retrouvée.",
        "j30": "Glycémie lissée, prise de poids sous contrôle.",
        "j90": "Développement fœtal optimal, réserves reconstituées pour le post-partum."
      },
      "headline_ar": "تغذية الحياة، من الحمل إلى الرضاعة",
      "realities_ar": [
        "النظام الغذائي أثناء الحمل يبرمج صحة طفلك المستقبلية (علم التخلق).",
        "احتياجاتك من المغذيات الدقيقة تزيد بشكل كبير، بينما تزيد السعرات الحرارية قليلاً.",
        "الوقاية من سكري الحمل تتطلب التحكم في الحمل الجلايسيمي للوجبات."
      ],
      "timeline_ar": {
        "j14": "هضم مريح، غثيان أقل، استعادة الطاقة.",
        "j30": "استقرار السكر، زيادة وزن مسيطر عليها.",
        "j90": "نمو مثالي للجنين، تجديد المخزون لفترة ما بعد الولادة."
      },
      "headline_en": "Nourishing life, from conception to breastfeeding",
      "realities_en": [
        "Diet during pregnancy programs your baby's future health (epigenetics).",
        "Micronutrient needs (iron, iodine, folate) explode, but calorie needs increase only slightly.",
        "Preventing gestational diabetes requires controlling the glycemic load of meals."
      ],
      "timeline_en": {
        "j14": "Soothed digestion, less nausea, regained energy.",
        "j30": "Smoothed blood sugar, weight gain under control.",
        "j90": "Optimal fetal development, reserves replenished for postpartum."
      },
      "headline_es": "Nutrir la vida, desde la concepción hasta la lactancia",
      "realities_es": [
        "La dieta durante el embarazo programa la salud futura de su bebé (epigenética).",
        "Las necesidades de micronutrientes se disparan, pero las calorías aumentan poco.",
        "Prevenir la diabetes gestacional requiere controlar la carga glucémica."
      ],
      "timeline_es": {
        "j14": "Digestión aliviada, menos náuseas, energía recuperada.",
        "j30": "Glucemia estabilizada, aumento de peso controlado.",
        "j90": "Desarrollo fetal óptimo, reservas repuestas para el posparto."
      }
    },
    "weight": {
      "headline_fr": "Pourquoi votre corps stocke au lieu de brûler — et comment débloquer votre métabolisme",
      "realities_fr": [
        "Vos régimes passés ont ralenti votre métabolisme de base. Votre corps est en mode 'survie' et stocke chaque calorie excédentaire.",
        "Vos fringales ne sont pas un manque de volonté. C'est un signal biologique de votre cerveau réclamant des nutriments denses.",
        "L'inflammation de bas grade empêche vos cellules de libérer le gras, même avec du sport."
      ],
      "timeline_fr": {
        "j14": "Disparition des fringales, énergie matinale retrouvée.",
        "j30": "Déblocage métabolique, les premiers kilos de graisse s'envolent.",
        "j90": "Métabolisme relancé, autonomie alimentaire sans effet yo-yo."
      },
      "headline_ar": "لماذا يخزن جسمك بدلاً من الحرق — وكيف تحرر أيضك",
      "realities_ar": [
        "أنظمتك السابقة أبطأت أيضك الأساسي. جسمك في وضع 'بقاء'.",
        "الجوع العاطفي ليس ضعف إرادة، بل إشارة بيولوجية.",
        "الالتهاب يمنع خلاياك من حرق الدهون."
      ],
      "timeline_ar": {
        "j14": "اختفاء الرغبة الشديدة في الأكل، طاقة متجددة.",
        "j30": "تحرر الأيض، فقدان الدهون.",
        "j90": "أيض نشط، استقلالية بلا يويو."
      },
      "headline_en": "Why your body stores instead of burning — and how to unlock your metabolism",
      "realities_en": [
        "Past diets slowed your basal metabolism. Your body is in 'survival' mode.",
        "Cravings aren't a lack of willpower, but a biological signal.",
        "Low-grade inflammation prevents fat burning."
      ],
      "timeline_en": {
        "j14": "Cravings disappear, morning energy returns.",
        "j30": "Metabolic unlock, initial fat loss.",
        "j90": "Metabolism restored, sustainable autonomy."
      },
      "headline_es": "Por qué su cuerpo almacena en lugar de quemar — y cómo desbloquear su metabolismo",
      "realities_es": [
        "Dietas pasadas ralentizaron su metabolismo basal.",
        "Los antojos son una señal biológica, no falta de voluntad.",
        "La inflamación impide la quema de grasa."
      ],
      "timeline_es": {
        "j14": "Desaparecen los antojos, vuelve la energía.",
        "j30": "Desbloqueo metabólico, pérdida de grasa.",
        "j90": "Metabolismo restaurado, autonomía sin yo-yo."
      }
    },
    "pediatric": {
      "headline_fr": "Croissance optimale et sérénité familiale : le plan nutritionnel pour votre enfant",
      "realities_fr": [
        "Les aversions alimentaires (néophobie) sont normales mais réversibles sans conflit avec les bonnes stratégies.",
        "Un excès de sucres cachés perturbe la concentration, le sommeil et l'humeur de l'enfant bien plus qu'on ne le pense.",
        "L'immunité et la croissance se construisent aujourd'hui dans l'assiette, sans restriction mais avec intelligence."
      ],
      "timeline_fr": {
        "j14": "Repas plus calmes, rééquilibrage des petits déjeuners et goûters.",
        "j30": "Introduction réussie de nouveaux aliments, énergie stabilisée (moins de pics de colère).",
        "j90": "Autonomie de l'enfant, immunité renforcée, courbe de croissance harmonieuse."
      },
      "headline_ar": "نمو مثالي وسلام عائلي: الخطة الغذائية لطفلك",
      "realities_ar": [
        "النفور من الطعام طبيعي ويمكن عكسه بدون صراع.",
        "السكر الخفي يزعج تركيز الطفل ونومه ومزاجه.",
        "المناعة والنمو يبنيان اليوم من خلال الطبق بدون حرمان."
      ],
      "timeline_ar": {
        "j14": "وجبات أهدأ، تعديل الإفطار.",
        "j30": "إدخال أطعمة جديدة بنجاح، طاقة مستقرة.",
        "j90": "استقلالية الطفل، مناعة أقوى، منحنى نمو متناغم."
      },
      "headline_en": "Optimal growth and family serenity: your child's nutrition plan",
      "realities_en": [
        "Food aversions (neophobia) are normal and reversible without conflict.",
        "Hidden sugars disrupt concentration, sleep, and mood significantly.",
        "Immunity and growth are built in the plate today, without restriction."
      ],
      "timeline_en": {
        "j14": "Calmer meals, balanced breakfast.",
        "j30": "Successful introduction of new foods, stable energy.",
        "j90": "Child's autonomy, stronger immunity, harmonious growth."
      },
      "headline_es": "Crecimiento óptimo y serenidad familiar: el plan nutricional para su hijo",
      "realities_es": [
        "Las aversiones alimentarias son normales y reversibles sin conflicto.",
        "Los azúcares ocultos alteran la concentración, el sueño y el humor.",
        "La inmunidad y el crecimiento se construyen hoy en el plato, sin restricciones."
      ],
      "timeline_es": {
        "j14": "Comidas más tranquilas, desayunos equilibrados.",
        "j30": "Introducción exitosa de nuevos alimentos, energía estable.",
        "j90": "Autonomía del niño, inmunidad fortalecida, crecimiento armonioso."
      }
    },
    "senior": {
      "headline_fr": "Préserver l'autonomie, la vitalité et la force : le protocole longévité",
      "realities_fr": [
        "Après 65 ans, les besoins en protéines augmentent de 50% alors que l'appétit diminue, causant une fonte musculaire silencieuse.",
        "La dénutrition, même chez une personne en surpoids, épuise l'énergie et fragilise les os.",
        "L'hydratation et les micronutriments clés peuvent freiner le vieillissement cellulaire et améliorer les fonctions cognitives."
      ],
      "timeline_fr": {
        "j14": "Carences freinées, l'appétit revient progressivement avec des repas adaptés.",
        "j30": "Stabilisation de la masse musculaire, regain de force et de tonus.",
        "j90": "Autonomie prolongée, analyses sanguines améliorées, vitalité au quotidien."
      },
      "headline_ar": "الحفاظ على الاستقلالية والحيوية والقوة: بروتوكول طول العمر",
      "realities_ar": [
        "بعد 65، تزداد الحاجة للبروتين بنسبة 50% رغم ضعف الشهية.",
        "سوء التغذية يرهق الطاقة ويضعف العظام.",
        "الترطيب والمغذيات الدقيقة تبطئ الشيخوخة الخلوية."
      ],
      "timeline_ar": {
        "j14": "توقف النقص، عودة الشهية تدريجياً.",
        "j30": "استقرار العضلات، استعادة القوة.",
        "j90": "استقلالية طويلة الأمد، حيوية يومية."
      },
      "headline_en": "Preserving autonomy, vitality and strength: the longevity protocol",
      "realities_en": [
        "After 65, protein needs increase by 50% while appetite decreases, causing muscle loss.",
        "Malnutrition exhausts energy and weakens bones.",
        "Hydration and key micronutrients can slow cellular aging."
      ],
      "timeline_en": {
        "j14": "Deficiencies halted, appetite slowly returns.",
        "j30": "Muscle mass stabilized, regained strength.",
        "j90": "Prolonged autonomy, improved blood tests, daily vitality."
      },
      "headline_es": "Preservar autonomía, vitalidad y fuerza: el protocolo de longevidad",
      "realities_es": [
        "Después de 65 años, la necesidad de proteínas sube un 50% mientras baja el apetito.",
        "La desnutrición agota la energía y debilita los huesos.",
        "La hidratación y los micronutrientes ralentizan el envejecimiento."
      ],
      "timeline_es": {
        "j14": "Freno de deficiencias, el apetito vuelve gradualmente.",
        "j30": "Masa muscular estabilizada, recuperación de fuerza.",
        "j90": "Autonomía prolongada, análisis mejorados, vitalidad diaria."
      }
    },
    "general": {
      "headline_fr": "Le protocole nutritionnel ciblé sur votre métabolisme unique",
      "realities_fr": [
        "La plupart des maladies chroniques ont pour origine une inflammation de bas grade que l'alimentation moderne entretient.",
        "Corriger la cause racine (l'assiette) est souvent plus efficace que de masquer les symptômes avec des remèdes temporaires.",
        "En restaurant votre équilibre (insuline, microbiote, micronutriments), votre corps a une capacité de guérison immense."
      ],
      "timeline_fr": {
        "j14": "Réduction de l'inflammation, sommeil plus profond, digestion apaisée.",
        "j30": "Les marqueurs sanguins (glycémie, cholestérol) commencent à s'améliorer.",
        "j90": "Nouvelle hygiène de vie acquise, résultats consolidés et durables."
      },
      "headline_ar": "البروتوكول الغذائي الموجه لأيضك الفريد",
      "realities_ar": [
        "معظم الأمراض المزمنة أصلها التهاب منخفض الدرجة يغذيه الطعام الحديث.",
        "تصحيح السبب الجذري أكثر فعالية من إخفاء الأعراض.",
        "بإعادة التوازن، يمتلك جسمك قدرة هائلة على الشفاء."
      ],
      "timeline_ar": {
        "j14": "تقليل الالتهاب، نوم أعمق، هضم مريح.",
        "j30": "بدء تحسن المؤشرات الحيوية.",
        "j90": "أسلوب حياة جديد، نتائج مستدامة."
      },
      "headline_en": "The targeted nutrition protocol for your unique metabolism",
      "realities_en": [
        "Most chronic diseases originate from low-grade inflammation sustained by modern diets.",
        "Correcting the root cause is often more effective than masking symptoms.",
        "By restoring balance, your body has immense healing capacity."
      ],
      "timeline_en": {
        "j14": "Reduced inflammation, deeper sleep, calmer digestion.",
        "j30": "Blood markers begin to improve.",
        "j90": "New lifestyle acquired, consolidated and lasting results."
      },
      "headline_es": "El protocolo nutricional dirigido a su metabolismo único",
      "realities_es": [
        "La mayoría de las enfermedades crónicas provienen de una inflamación de bajo grado.",
        "Corregir la causa raíz es más eficaz que enmascarar los síntomas.",
        "Al restaurar el equilibrio, su cuerpo tiene una inmensa capacidad de curación."
      ],
      "timeline_es": {
        "j14": "Reducción de la inflamación, sueño más profundo.",
        "j30": "Los marcadores sanguíneos empiezan a mejorar.",
        "j90": "Nuevo estilo de vida, resultados duraderos."
      }
    }
  },
  "multiSelectLabels": {
    "validate_fr": "Valider ma sélection",
    "hint_fr": "Sélectionnez tout ce qui s'applique",
    "selected_fr": "sélectionné(s)",
    "validate_ar": "تأكيد اختياري",
    "hint_ar": "حدد كل ما ينطبق",
    "selected_ar": "محدد",
    "validate_en": "Confirm my selection",
    "hint_en": "Select all that apply",
    "selected_en": "selected",
    "validate_es": "Confirmar mi selección",
    "hint_es": "Seleccione todo lo que corresponda",
    "selected_es": "seleccionado(s)"
  }
};
