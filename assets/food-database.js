// food-database.js — Searchable Nutrient Database & Interactive Daily Log Engine
// Cabinet de Nutrition & Diététique Clinique Inès Ben Abdennebi — Radès

window.FOOD_DATABASE = [
  // ==========================================
  // FRUITS & LÉGUMES
  // ==========================================
  {
    id: 'pomme',
    category: 'fruits_legumes',
    name_fr: 'Pomme fraîche',
    name_ar: 'تفاح طازج',
    name_en: 'Fresh Apple',
    name_es: 'Manzana fresca',
    unit_fr: '1 pièce moyenne (150g)',
    unit_ar: 'حبة متوسطة (150غ)',
    unit_en: '1 medium apple (150g)',
    unit_es: '1 pieza mediana (150g)',
    default_g: 150,
    cal_100: 52,
    prot_100: 0.3,
    carb_100: 13.8,
    fat_100: 0.2,
    fiber_100: 2.4,
    gi: 'Bas (36)',
    micro_fr: 'Pectine prébiotique, Vitamine C, Antioxydants',
    micro_ar: 'بكتين حيوي، فيتامين C، مضادات أكسدة',
    micro_en: 'Prebiotic pectin, Vitamin C, Antioxidants',
    micro_es: 'Pectina prebiótica, Vitamina C, Antioxidantes',
    tip_fr: 'Effet satiétogène élevé grâce aux fibres solubles. Idéal en collation coupe-faim.',
    tip_ar: 'شعور بالشبع بفضل الألياف القابلة للذوبان. مثالي كوجبة خفيفة.',
    tip_en: 'High satiety effect thanks to soluble fiber. Perfect healthy snack.',
    tip_es: 'Alto efecto saciante gracias a la fibra soluble. Ideal entre comidas.'
  },
  {
    id: 'banane',
    category: 'fruits_legumes',
    name_fr: 'Banane mûre',
    name_ar: 'موز',
    name_en: 'Banana',
    name_es: 'Plátano',
    unit_fr: '1 pièce moyenne (120g)',
    unit_ar: 'حبة متوسطة (120غ)',
    unit_en: '1 medium banana (120g)',
    unit_es: '1 pieza mediana (120g)',
    default_g: 120,
    cal_100: 89,
    prot_100: 1.1,
    carb_100: 22.8,
    fat_100: 0.3,
    fiber_100: 2.6,
    gi: 'Moyen (51)',
    micro_fr: 'Potassium (358mg), Vitamine B6, Magnésium',
    micro_ar: 'بوتاسيوم (358 مغ)، فيتامين B6، مغنيسيوم',
    micro_en: 'Potassium (358mg), Vitamin B6, Magnesium',
    micro_es: 'Potasio (358mg), Vitamina B6, Magnesio',
    tip_fr: 'Recharge rapide en glycogène et soutien musculaire anti-crampes avant l\'effort.',
    tip_ar: 'تجديد سريع للطاقة ودعم عضلي ضد التشنجات قبل النشاط.',
    tip_en: 'Quick glycogen replenishment and muscle support before workout.',
    tip_es: 'Recarga rápida de energía y apoyo muscular antes del esfuerzo.'
  },
  {
    id: 'avocat',
    category: 'fruits_legumes',
    name_fr: 'Avocat frais',
    name_ar: 'أفوكادو طازج',
    name_en: 'Fresh Avocado',
    name_es: 'Aguacate fresco',
    unit_fr: '1 demi-avocat (100g)',
    unit_ar: 'نصف حبة (100غ)',
    unit_en: 'Half avocado (100g)',
    unit_es: 'Medio aguacate (100g)',
    default_g: 100,
    cal_100: 160,
    prot_100: 2.0,
    carb_100: 8.5,
    fat_100: 14.7,
    fiber_100: 6.7,
    gi: 'Très Bas (10)',
    micro_fr: 'Acides gras mono-insaturés (Oméga-9), Vitamine E, Potassium',
    micro_ar: 'أحماض دهنية أحادية (أوميغا 9)، فيتامين E، بوتاسيوم',
    micro_en: 'Monounsaturated fatty acids (Omega-9), Vitamin E, Potassium',
    micro_es: 'Ácidos grasos monoinsaturados (Omega-9), Vitamina E, Potasio',
    tip_fr: 'Favorise la baisse du cholestérol LDL et la sensibilité à l\'insuline.',
    tip_ar: 'يساعد على خفض الكوليسترول الضار وتحسين حساسية الأنسولين.',
    tip_en: 'Promotes lower LDL cholesterol and optimal insulin sensitivity.',
    tip_es: 'Favorece la reducción del colesterol LDL y la sensibilidad insulínica.'
  },
  {
    id: 'dattes_deglet',
    category: 'fruits_legumes',
    name_fr: 'Dattes Deglet Nour (Tunisie)',
    name_ar: 'تمر دقلة النور التونسي',
    name_en: 'Deglet Nour Dates',
    name_es: 'Dátiles Deglet Nour',
    unit_fr: '3 dattes (30g)',
    unit_ar: '3 حبات تمر (30غ)',
    unit_en: '3 dates (30g)',
    unit_es: '3 dátiles (30g)',
    default_g: 30,
    cal_100: 282,
    prot_100: 2.5,
    carb_100: 75.0,
    fat_100: 0.4,
    fiber_100: 8.0,
    gi: 'Moyen (55)',
    micro_fr: 'Fibres insolubles, Potassium (650mg), Polyphénols',
    micro_ar: 'ألياف غير قابلة للذوبان، بوتاسيوم، بوليفينول',
    micro_en: 'Insoluble fiber, Potassium, Polyphenols',
    micro_es: 'Fibra insoluble, Potasio, Polifenoles',
    tip_fr: 'Excellente source d\'énergie naturelle et de fibres. Consommer avec des amandes pour lisser la glycémie.',
    tip_ar: 'مصدر طاقة طبيعي غني بالألياف. يُفضل تناوله مع اللوز لتعديل السكر.',
    tip_en: 'Excellent natural energy and fiber source. Pair with raw almonds.',
    tip_es: 'Excelente energía natural y fibra. Combinar con almendras.'
  },
  {
    id: 'epinards',
    category: 'fruits_legumes',
    name_fr: 'Épinards frais / vapeur',
    name_ar: 'سبانخ طازجة / مطبوخة',
    name_en: 'Fresh / Steamed Spinach',
    name_es: 'Espinacas frescas / al vapor',
    unit_fr: '1 portion cuite (150g)',
    unit_ar: 'حصة مطبوخة (150غ)',
    unit_en: '1 cooked portion (150g)',
    unit_es: '1 porción cocida (150g)',
    default_g: 150,
    cal_100: 23,
    prot_100: 2.9,
    carb_100: 3.6,
    fat_100: 0.4,
    fiber_100: 2.2,
    gi: 'Très Bas (15)',
    micro_fr: 'Fer non-héminique, Folates (B9), Lutéine, Vitamine K',
    micro_ar: 'حديد، حمض الفوليك (B9)، لوتين، فيتامين K',
    micro_en: 'Iron, Folate (B9), Lutein, Vitamin K',
    micro_es: 'Hierro, Folatos (B9), Luteína, Vitamina K',
    tip_fr: 'Ajouter un filet de citron pour multiplier par 3 l\'absorption du fer grâce à la vitamine C.',
    tip_ar: 'أضف عصائر الليمون لمضاعفة امتصاص الحديد 3 مرات بفضل فيتامين C.',
    tip_en: 'Add a splash of lemon juice to triple non-heme iron absorption with Vitamin C.',
    tip_es: 'Añadir zumo de limón para triplicar la absorción de hierro.'
  },
  {
    id: 'brocoli',
    category: 'fruits_legumes',
    name_fr: 'Brocoli vapeur',
    name_ar: 'بروكلي مطبوخ على البخار',
    name_en: 'Steamed Broccoli',
    name_es: 'Brócoli al vapor',
    unit_fr: '1 assiette moyenne (180g)',
    unit_ar: 'صحن متوسط (180غ)',
    unit_en: '1 medium plate (180g)',
    unit_es: '1 plato mediano (180g)',
    default_g: 180,
    cal_100: 34,
    prot_100: 2.8,
    carb_100: 6.6,
    fat_100: 0.4,
    fiber_100: 2.6,
    gi: 'Très Bas (15)',
    micro_fr: 'Sulforaphane détoxifiant, Vitamine C (89mg), Calcium',
    micro_ar: 'سولفورافان مضاد للأكسدة، فيتامين C، كالسيوم',
    micro_en: 'Sulforaphane, Vitamin C (89mg), Calcium',
    micro_es: 'Sulforafano antioxidante, Vitamina C, Calcio',
    tip_fr: 'Puissant allié anti-inflammatoire et hépatique. Cuisson vapeur douce 5-7 min recommandée.',
    tip_ar: 'مضاد قوي للالتهابات ومحفز للكبد. يُفضل طهيه على البخار 5-7 دقائق.',
    tip_en: 'Powerful anti-inflammatory and liver detox food. Gentle steam 5-7 min.',
    tip_es: 'Potente antiinflamatorio y protector hepático. Cocción suave al vapor.'
  },
  {
    id: 'grenade',
    category: 'fruits_legumes',
    name_fr: 'Grains de Grenade',
    name_ar: 'حبوب الرمان',
    name_en: 'Pomegranate Seeds',
    name_es: 'Granos de Granada',
    unit_fr: '1 demi-bol (100g)',
    unit_ar: 'نصف زبدية (100غ)',
    unit_en: 'Half bowl (100g)',
    unit_es: 'Medio bol (100g)',
    default_g: 100,
    cal_100: 83,
    prot_100: 1.7,
    carb_100: 18.7,
    fat_100: 1.2,
    fiber_100: 4.0,
    gi: 'Bas (35)',
    micro_fr: 'Punicalagine, Polyphénols, Vitamine C & K',
    micro_ar: 'بونيكالاجين، بوليفينول، فيتامين C و K',
    micro_en: 'Punicalagin, Polyphenols, Vitamins C & K',
    micro_es: 'Punicalagina, Polifenoles, Vitaminas C y K',
    tip_fr: 'Protecteur cardiovasculaire majeur et régulateur de la pression artérielle.',
    tip_ar: 'حماية ممتازة للأوعية الدموية وضبط ضغط الدم.',
    tip_en: 'Major cardiovascular protector and blood pressure regulator.',
    tip_es: 'Protector cardiovascular y regulador de la presión arterial.'
  },
  {
    id: 'fraises',
    category: 'fruits_legumes',
    name_fr: 'Fraises fraîches',
    name_ar: 'فراولة طازجة',
    name_en: 'Fresh Strawberries',
    name_es: 'Fresas frescas',
    unit_fr: '1 barquette (150g)',
    unit_ar: 'حصة (150غ)',
    unit_en: '1 portion (150g)',
    unit_es: '1 ración (150g)',
    default_g: 150,
    cal_100: 32,
    prot_100: 0.7,
    carb_100: 7.7,
    fat_100: 0.3,
    fiber_100: 2.0,
    gi: 'Très Bas (25)',
    micro_fr: 'Vitamine C (58mg), Anthocyanines, Manganèse',
    micro_ar: 'فيتامين C، أنثوسيانين، منغنيز',
    micro_en: 'Vitamin C (58mg), Anthocyanins, Manganese',
    micro_es: 'Vitamina C, Antocianinas, Manganeso',
    tip_fr: 'Très faible en calories et riche en eau. Idéal pour les protocoles perte de poids et diabète.',
    tip_ar: 'سعرات منخفضة جداً ومثالية لمرضى السكري وإنقاص الوزن.',
    tip_en: 'Very low calorie and water-rich. Ideal for weight loss and diabetes.',
    tip_es: 'Bajo en calorías y rico en agua. Ideal para pérdida de peso y diabetes.'
  },

  // ==========================================
  // PROTÉINES & POISSONS
  // ==========================================
  {
    id: 'poulet_blanc',
    category: 'proteines',
    name_fr: 'Blanc de poulet grillé',
    name_ar: 'صدر دجاج مشوي',
    name_en: 'Grilled Chicken Breast',
    name_es: 'Pechuga de pollo a la plancha',
    unit_fr: '1 filet moyen (150g)',
    unit_ar: 'شريحة متوسطة (150غ)',
    unit_en: '1 medium fillet (150g)',
    unit_es: '1 filete mediano (150g)',
    default_g: 150,
    cal_100: 165,
    prot_100: 31.0,
    carb_100: 0.0,
    fat_100: 3.6,
    fiber_100: 0.0,
    gi: 'Zéro (0)',
    micro_fr: 'Protéines complètes (BCAA), Niacine (B3), Sélénium, Phosphore',
    micro_ar: 'بروتينات كاملة، نياسين (B3)، سيلينيوم، فسفور',
    micro_en: 'Complete protein (BCAAs), Niacin (B3), Selenium, Phosphorus',
    micro_es: 'Proteína completa (BCAA), Niacina (B3), Selenio, Fósforo',
    tip_fr: 'Protéine maigre de référence pour préserver la masse musculaire et stimuler le métabolisme.',
    tip_ar: 'بروتين نقي ممتاز للحفاظ على الكتلة العضلية وتنشيط الحرق.',
    tip_en: 'Gold standard lean protein for muscle preservation and metabolic rate.',
    tip_es: 'Proteína magra de referencia para conservar masa muscular y metabolismo.'
  },
  {
    id: 'oeuf_entier',
    category: 'proteines',
    name_fr: 'Oeuf fermier / bio (dur ou poché)',
    name_ar: 'بيض بلدي مسلوق',
    name_en: 'Whole Egg (Boiled/Poached)',
    name_es: 'Huevo entero cocido',
    unit_fr: '2 gros oeufs (110g)',
    unit_ar: 'بيضتان كبيرتان (110غ)',
    unit_en: '2 large eggs (110g)',
    unit_es: '2 huevos grandes (110g)',
    default_g: 110,
    cal_100: 155,
    prot_100: 12.6,
    carb_100: 1.1,
    fat_100: 10.6,
    fiber_100: 0.0,
    gi: 'Zéro (0)',
    micro_fr: 'Choline cérébrale, Lutéine, Vitamine D, B12, Zinc',
    micro_ar: 'كولين للدماغ، لوتين، فيتامين D، B12، زنك',
    micro_en: 'Brain choline, Lutein, Vitamin D, B12, Zinc',
    micro_es: 'Colina cerebral, Luteína, Vitamina D, B12, Zinc',
    tip_fr: 'Valeur biologique 100/100. Le jaune contient tous les micronutriments protecteurs.',
    tip_ar: 'قيمة حيوية كاملة 100%. صفار البيض غني بالمغذيات العصبية الحيوية.',
    tip_en: 'Biological value 100/100. The yolk carries essential neurological nutrients.',
    tip_es: 'Valor biológico 100/100. La yema concentra los micronutrientes clave.'
  },
  {
    id: 'saumon_frais',
    category: 'proteines',
    name_fr: 'Pavé de Saumon frais',
    name_ar: 'شريحة سلمون طازج',
    name_en: 'Fresh Salmon Fillet',
    name_es: 'Filete de Salmón fresco',
    unit_fr: '1 pavé (140g)',
    unit_ar: 'شريحة سلمون (140غ)',
    unit_en: '1 salmon fillet (140g)',
    unit_es: '1 filete (140g)',
    default_g: 140,
    cal_100: 208,
    prot_100: 20.4,
    carb_100: 0.0,
    fat_100: 13.4,
    fiber_100: 0.0,
    gi: 'Zéro (0)',
    micro_fr: 'Oméga-3 EPA/DHA (2.2g), Vitamine D (520 UI), Sélénium',
    micro_ar: 'أوميغا 3 (EPA/DHA)، فيتامين D، سيلينيوم',
    micro_en: 'Omega-3 EPA/DHA (2.2g), Vitamin D, Selenium',
    micro_es: 'Omega-3 EPA/DHA, Vitamina D, Selenio',
    tip_fr: 'Anti-inflammatoire cérébral et cardiovasculaire. Recommandé 2 fois par semaine.',
    tip_ar: 'مضاد التهابات قوي للقلب والدماغ. يُنصح به مرتين أسبوعياً.',
    tip_en: 'Potent cardiovascular and brain anti-inflammatory. Enjoy 2x weekly.',
    tip_es: 'Potente antiinflamatorio cardiovascular y cerebral. 2 veces por semana.'
  },
  {
    id: 'thon_naturel',
    category: 'proteines',
    name_fr: 'Thon au naturel égoutté',
    name_ar: 'تونة معلبة طبيعية بالماء',
    name_en: 'Canned Tuna in Water',
    name_es: 'Atún al natural escurrido',
    unit_fr: '1 boîte moyenne (130g)',
    unit_ar: 'علبة متوسطة (130غ)',
    unit_en: '1 can (130g)',
    unit_es: '1 lata (130g)',
    default_g: 130,
    cal_100: 116,
    prot_100: 25.5,
    carb_100: 0.0,
    fat_100: 1.0,
    fiber_100: 0.0,
    gi: 'Zéro (0)',
    micro_fr: 'Protéines pures, Vitamine B12, Niacine, Sélénium',
    micro_ar: 'بروتين نقي، فيتامين B12، نياسين، سيلينيوم',
    micro_en: 'Pure protein, Vitamin B12, Niacin, Selenium',
    micro_es: 'Proteína pura, Vitamina B12, Niacina, Selenio',
    tip_fr: 'Ultra-pratique pour rehausser les salades en protéines sans graisses ajoutées.',
    tip_ar: 'سهل وعملي لإضافة البروتين للسلطات دون دهون مضافة.',
    tip_en: 'Ultra convenient to boost salads with pure protein and zero added fat.',
    tip_es: 'Muy práctico para enriquecer ensaladas con proteína sin grasas.'
  },
  {
    id: 'tofu_nature',
    category: 'proteines',
    name_fr: 'Tofu ferme bio',
    name_ar: 'توفو نباتي طبيعي',
    name_en: 'Organic Firm Tofu',
    name_es: 'Tofu firme ecológico',
    unit_fr: '1 portion (125g)',
    unit_ar: 'حصة (125غ)',
    unit_en: '1 portion (125g)',
    unit_es: '1 porción (125g)',
    default_g: 125,
    cal_100: 121,
    prot_100: 12.0,
    carb_100: 2.3,
    fat_100: 6.9,
    fiber_100: 1.5,
    gi: 'Très Bas (15)',
    micro_fr: 'Isoflavones végétales, Calcium (350mg), Fer végétal',
    micro_ar: 'إيسوفلافون نباتي، كالسيوم (350 مغ)، حديد',
    micro_en: 'Soy isoflavones, Plant Calcium (350mg), Iron',
    micro_es: 'Isoflavonas vegetales, Calcio (350mg), Hierro vegetal',
    tip_fr: 'Excellente alternative végétale pour l\'équilibre hormonal et osseux de la femme.',
    tip_ar: 'بديل نباتي رائع للتوازن الهرموني وصحة العظام.',
    tip_en: 'Excellent plant-based choice for female hormonal balance and bone density.',
    tip_es: 'Excelente opción vegetal para el equilibrio hormonal y óseo.'
  },

  // ==========================================
  // CÉRÉALES, FÉCULENTS & LÉGUMINEUSES
  // ==========================================
  {
    id: 'flocons_avoine',
    category: 'feculents',
    name_fr: 'Flocons d\'avoine complets',
    name_ar: 'رقائق الشوفان الكاملة',
    name_en: 'Rolled Oats',
    name_es: 'Copos de avena integral',
    unit_fr: '1 portion petit-déjeuner (50g)',
    unit_ar: 'حصة إفطار (50غ)',
    unit_en: '1 breakfast bowl (50g)',
    unit_es: '1 ración desayuno (50g)',
    default_g: 50,
    cal_100: 375,
    prot_100: 13.5,
    carb_100: 62.0,
    fat_100: 7.0,
    fiber_100: 10.0,
    gi: 'Bas (40)',
    micro_fr: 'Bêta-glucanes (anti-cholestérol), Manganèse, Magnésium',
    micro_ar: 'بيتا غلوكان (مخفض للكوليسترول)، منغنيز، مغنيسيوم',
    micro_en: 'Beta-glucans (cholesterol lowering), Manganese, Magnesium',
    micro_es: 'Beta-glucanos (reduce colesterol), Manganeso, Magnesio',
    tip_fr: 'Les bêta-glucanes piègent le cholestérol et diffusent une énergie stable sans pic d\'insuline.',
    tip_ar: 'يساعد البيتا غلوكان على خفض الكوليسترول وتنظيم السكر بدون ارتفاع مفاجئ.',
    tip_en: 'Beta-glucans trap cholesterol and release stable energy without glucose spikes.',
    tip_es: 'Los beta-glucanos reducen el colesterol y liberan energía progresiva.'
  },
  {
    id: 'riz_complet',
    category: 'feculents',
    name_fr: 'Riz basmati complet cuit',
    name_ar: 'أرز بسمتي كامل مطبوخ',
    name_en: 'Cooked Brown Basmati Rice',
    name_es: 'Arroz basmati integral cocido',
    unit_fr: '1 bol moyen (150g)',
    unit_ar: 'صحن أرز (150غ)',
    unit_en: '1 medium bowl (150g)',
    unit_es: '1 bol mediano (150g)',
    default_g: 150,
    cal_100: 123,
    prot_100: 2.7,
    carb_100: 25.6,
    fat_100: 1.0,
    fiber_100: 1.8,
    gi: 'Bas-Moyen (50)',
    micro_fr: 'Vitamines groupe B, Sélénium, Phosphore',
    micro_ar: 'فيتامينات B، سيلينيوم، فسفور',
    micro_en: 'B-Complex Vitamins, Selenium, Phosphorus',
    micro_es: 'Vitaminas del grupo B, Selenio, Fósforo',
    tip_fr: 'Céréale digeste sans gluten. Le riz basmati possède l\'indice glycémique le plus doux des riz.',
    tip_ar: 'أرز سهل الهضم خالي من الغلوتين بمؤشر سكري لطيف ومستقر.',
    tip_en: 'Easily digestible gluten-free grain. Basmati has the gentlest glycemic index.',
    tip_es: 'Cereal fácil de digerir y sin gluten con bajo índice glucémico.'
  },
  {
    id: 'lentilles_cuites',
    category: 'feculents',
    name_fr: 'Lentilles vertes / corail cuites',
    name_ar: 'عدس مطبوخ',
    name_en: 'Cooked Lentils',
    name_es: 'Lentejas cocidas',
    unit_fr: '1 portion (160g)',
    unit_ar: 'صحن عدس (160غ)',
    unit_en: '1 portion (160g)',
    unit_es: '1 ración (160g)',
    default_g: 160,
    cal_100: 116,
    prot_100: 9.0,
    carb_100: 20.0,
    fat_100: 0.4,
    fiber_100: 7.9,
    gi: 'Bas (30)',
    micro_fr: 'Fer, Zinc, Folates (B9), Amidon résistant',
    micro_ar: 'حديد، زنك، حمض الفوليك، نشاء مقاوم',
    micro_en: 'Iron, Zinc, Folate, Resistant starch',
    micro_es: 'Hierro, Zinc, Folatos, Almidón resistente',
    tip_fr: 'Légumineuse championne pour nourrir la flore intestinale et stabiliser la glycémie.',
    tip_ar: 'غذاء مثالي لتغذية بكتيريا الأمعاء النافعة وتنظيم السكر.',
    tip_en: 'Champion pulse to nourish gut flora and flatten post-meal blood sugar.',
    tip_es: 'Legumbre estrella para nutrir la microbiota y estabilizar la glucosa.'
  },
  {
    id: 'patate_douce',
    category: 'feculents',
    name_fr: 'Patate douce rôtie au four',
    name_ar: 'بطاطا حلوة مشوية',
    name_en: 'Roasted Sweet Potato',
    name_es: 'Batata / Boniato asado',
    unit_fr: '1 pièce moyenne (150g)',
    unit_ar: 'حبة متوسطة (150غ)',
    unit_en: '1 medium potato (150g)',
    unit_es: '1 pieza mediana (150g)',
    default_g: 150,
    cal_100: 86,
    prot_100: 1.6,
    carb_100: 20.1,
    fat_100: 0.1,
    fiber_100: 3.0,
    gi: 'Moyen (54)',
    micro_fr: 'Bêta-carotène (Pro-vitamine A), Vitamine C, Potassium',
    micro_ar: 'بيتا كاروتين (فيتامين A)، فيتامين C، بوتاسيوم',
    micro_en: 'Beta-carotene (Pro-Vitamin A), Vitamin C, Potassium',
    micro_es: 'Betacaroteno (Pro-Vitamina A), Vitamina C, Potasio',
    tip_fr: 'Riche en antioxydants protecteurs de la peau et de la vue. Bien plus stable que la pomme de terre blanche.',
    tip_ar: 'غنية بمضادات الأكسدة لصحة البشرة والعيون وتدرج سكري معتدل.',
    tip_en: 'Rich in protective skin & eye antioxidants. Much gentler on blood sugar than white potatoes.',
    tip_es: 'Rico en antioxidantes para piel y vista. Mucho más estable que la patata clásica.'
  },
  {
    id: 'pain_complet',
    category: 'feculents',
    name_fr: 'Pain complet au levain',
    name_ar: 'خبز كامل بالخميرة الطبيعية',
    name_en: 'Whole Sourdough Bread',
    name_es: 'Pan integral de masa madre',
    unit_fr: '2 belles tranches (60g)',
    unit_ar: 'شريحتان (60غ)',
    unit_en: '2 slices (60g)',
    unit_es: '2 rebanadas (60g)',
    default_g: 60,
    cal_100: 247,
    prot_100: 9.0,
    carb_100: 47.5,
    fat_100: 1.8,
    fiber_100: 7.0,
    gi: 'Bas-Moyen (45)',
    micro_fr: 'Minéraux biodisponibles grâce à la fermentation lente au levain',
    micro_ar: 'معادن سهلة الامتصاص بفضل التخمير الطبيعي البطيء',
    micro_en: 'Bioavailable minerals through natural sourdough slow fermentation',
    micro_es: 'Minerales biodisponibles gracias a la fermentación lenta',
    tip_fr: 'Le levain naturel prédigère le gluten et dégrade les phytates pour une absorption minérale optimale.',
    tip_ar: 'الخميرة الطبيعية تسهل هضم الغلوتين وتحسن امتصاص المعادن.',
    tip_en: 'Natural sourdough breaks down phytates to maximize mineral bioavailability.',
    tip_es: 'La masa madre degrada los fitatos mejorando la digestión y asimilación.'
  },

  // ==========================================
  // PRODUITS LAITIERS & ALTERNATIVES
  // ==========================================
  {
    id: 'yaourt_grec',
    category: 'laitiers',
    name_fr: 'Yaourt grec nature 0% ou 2%',
    name_ar: 'زبادي يوناني طبيعي',
    name_en: 'Plain Greek Yogurt (0-2%)',
    name_es: 'Yogur griego natural (0-2%)',
    unit_fr: '1 pot individuel (150g)',
    unit_ar: 'علبة (150غ)',
    unit_en: '1 cup (150g)',
    unit_es: '1 vaso (150g)',
    default_g: 150,
    cal_100: 73,
    prot_100: 10.0,
    carb_100: 3.6,
    fat_100: 2.0,
    fiber_100: 0.0,
    gi: 'Très Bas (15)',
    micro_fr: 'Probiotiques vivants (Lactobacillus), Calcium (120mg), B12',
    micro_ar: 'بكتيريا نافعة حية، كالسيوم (120 مغ)، فيتامين B12',
    micro_en: 'Live probiotics, Calcium (120mg), Vitamin B12',
    micro_es: 'Probióticos vivos, Calcio (120mg), Vitamina B12',
    tip_fr: 'Double dose de protéines par rapport à un yaourt classique. Apaise le transit et cale durablement.',
    tip_ar: 'ضعف كمية البروتين مقارنة بالزبادي العادي. يعزز الشبع وصحة الجهاز الهضمي.',
    tip_en: 'Double the protein of regular yogurt. Calms digestion and provides long-lasting satiety.',
    tip_es: 'Doble de proteína que el yogur estándar. Sacia y cuida la flora intestinal.'
  },
  {
    id: 'fromage_blanc',
    category: 'laitiers',
    name_fr: 'Fromage blanc 20% / Ricotta',
    name_ar: 'جبن أبيض طازج / ريكوتا',
    name_en: 'Cottage Cheese / Ricotta',
    name_es: 'Queso fresco batido / Ricotta',
    unit_fr: '1 portion (120g)',
    unit_ar: 'حصة (120غ)',
    unit_en: '1 serving (120g)',
    unit_es: '1 ración (120g)',
    default_g: 120,
    cal_100: 78,
    prot_100: 8.5,
    carb_100: 4.0,
    fat_100: 3.2,
    fiber_100: 0.0,
    gi: 'Très Bas (20)',
    micro_fr: 'Caséine micellaire à digestion lente, Calcium, Phosphore',
    micro_ar: 'كازين بطيء الامتصاص، كالسيوم، فسفور',
    micro_en: 'Slow-digesting micellar casein, Calcium, Phosphorus',
    micro_es: 'Caseína micelar de digestión lenta, Calcio, Fósforo',
    tip_fr: 'La caséine diffuse des acides aminés pendant 5 heures. Idéal en collation du soir.',
    tip_ar: 'يمد الجسم بالأحماض الأمينية ببطء لمدة 5 ساعات. رائع كوجبة مسائية خفيفة.',
    tip_en: 'Micellar casein releases amino acids over 5 hours. Ideal evening protein source.',
    tip_es: 'Libera aminoácidos durante 5 horas. Excelente opción proteica nocturna.'
  },
  {
    id: 'lait_amande',
    category: 'laitiers',
    name_fr: 'Lait d\'amande sans sucre ajouté',
    name_ar: 'حليب اللوز بدون سكر',
    name_en: 'Unsweetened Almond Milk',
    name_es: 'Bebida de almendras sin azúcar',
    unit_fr: '1 verre (200ml / 200g)',
    unit_ar: 'كوب (200 مل)',
    unit_en: '1 glass (200ml)',
    unit_es: '1 vaso (200ml)',
    default_g: 200,
    cal_100: 15,
    prot_100: 0.6,
    carb_100: 0.3,
    fat_100: 1.2,
    fiber_100: 0.3,
    gi: 'Très Bas (10)',
    micro_fr: 'Vitamine E antioxydante, Calcium enrichi',
    micro_ar: 'فيتامين E مضاد للأكسدة، كالسيوم مدعم',
    micro_en: 'Vitamin E, Fortified Calcium',
    micro_es: 'Vitamina E, Calcio enriquecido',
    tip_fr: 'Ultra-léger en calories et sans lactose. Parfait pour les smoothies et le porridge.',
    tip_ar: 'خفيف جداً في السعرات وخالي من اللاكتوز. ممتاز للعصائر والشوفان.',
    tip_en: 'Ultra-light calories and lactose-free. Perfect for smoothies and oatmeal.',
    tip_es: 'Muy bajo en calorías y sin lactosa. Ideal para batidos y gachas.'
  },

  // ==========================================
  // OLÉAGINEUX & MATIÈRES GRASSES
  // ==========================================
  {
    id: 'huile_olive',
    category: 'oleagineux',
    name_fr: 'Huile d\'olive extra vierge (Tunisie)',
    name_ar: 'زيت زيتون بكر ممتاز تونسي',
    name_en: 'Extra Virgin Olive Oil',
    name_es: 'Aceite de oliva virgen extra',
    unit_fr: '1 cuillère à soupe (14g)',
    unit_ar: 'ملعقة طعام (14غ)',
    unit_en: '1 tablespoon (14g)',
    unit_es: '1 cucharada sopera (14g)',
    default_g: 14,
    cal_100: 884,
    prot_100: 0.0,
    carb_100: 0.0,
    fat_100: 100.0,
    fiber_100: 0.0,
    gi: 'Zéro (0)',
    micro_fr: 'Polyphénols (Olécathal), Oméga-9 (Acide Oléique 75%), Vitamine E',
    micro_ar: 'بوليفينول، أوميغا 9 (حمض الأوليك)، فيتامين E',
    micro_en: 'Polyphenols (Oleocanthal), Omega-9 (Oleic acid 75%), Vitamin E',
    micro_es: 'Polifenoles (Oleocantal), Omega-9 (Ácido oleico 75%), Vitamina E',
    tip_fr: 'Pilier du régime méditerranéen. Anti-inflammatoire naturel puissant pour le système cardiovasculaire.',
    tip_ar: 'عماد الحمية المتوسطية. مضاد التهابات طبيعي قوي لصحة الشرايين.',
    tip_en: 'Core pillar of the Mediterranean diet. Powerful natural anti-inflammatory for arteries.',
    tip_es: 'Pilar de la dieta mediterránea. Potente antiinflamatorio cardiovascular.'
  },
  {
    id: 'amandes_brutes',
    category: 'oleagineux',
    name_fr: 'Amandes douces brutes',
    name_ar: 'لوز نيء طبيعي',
    name_en: 'Raw Almonds',
    name_es: 'Almendras crudas',
    unit_fr: '1 poignée (30g, ~23 amandes)',
    unit_ar: 'قبضة يد (30غ)',
    unit_en: '1 handful (30g, ~23 almonds)',
    unit_es: '1 puñado (30g)',
    default_g: 30,
    cal_100: 579,
    prot_100: 21.2,
    carb_100: 21.6,
    fat_100: 49.9,
    fiber_100: 12.5,
    gi: 'Très Bas (15)',
    micro_fr: 'Magnésium (270mg), Vitamine E (26mg), Calcium (264mg)',
    micro_ar: 'مغنيسيوم (270 مغ)، فيتامين E، كالسيوم (264 مغ)',
    micro_en: 'Magnesium (270mg), Vitamin E (26mg), Calcium (264mg)',
    micro_es: 'Magnesio (270mg), Vitamina E, Calcio (264mg)',
    tip_fr: 'Le trio fibres-protéines-graisses saines stabilise la glycémie et combat la fatigue nerveuse.',
    tip_ar: 'مزيج الألياف والبروتين والدهون الصحية ينظم سكر الدم ويهدئ الجهاز العصبي.',
    tip_en: 'The fiber-protein-healthy fat trio flattens glycemic spikes and combats nervous fatigue.',
    tip_es: 'La tríada fibra-proteína-grasa saludable estabiliza la glucosa y calma la ansiedad.'
  },
  {
    id: 'noix_grenoble',
    category: 'oleagineux',
    name_fr: 'Noix de Grenoble',
    name_ar: 'عين الجمل / جوز',
    name_en: 'Walnuts',
    name_es: 'Nueces',
    unit_fr: '1 poignée (30g, ~7 cerneaux)',
    unit_ar: 'قبضة جوز (30غ)',
    unit_en: '1 handful (30g)',
    unit_es: '1 puñado (30g)',
    default_g: 30,
    cal_100: 654,
    prot_100: 15.2,
    carb_100: 13.7,
    fat_100: 65.2,
    fiber_100: 6.7,
    gi: 'Très Bas (15)',
    micro_fr: 'Acide Alpha-Linolénique (Oméga-3 végétal 9g), Cuivre, Manganèse',
    micro_ar: 'أوميغا 3 نباتي (9غ)، نحاس، منغنيز',
    micro_en: 'Plant-based Omega-3 ALA (9g), Copper, Manganese',
    micro_es: 'Omega-3 vegetal ALA (9g), Cobre, Manganeso',
    tip_fr: 'Le fruit à coque le plus riche en Oméga-3. Protège les neurones et la mémoire.',
    tip_ar: 'أغنى المكسرات بأوميغا 3. يحمي الذاكرة وخلايا الدماغ.',
    tip_en: 'Nut highest in plant Omega-3s. Protects brain neurons and cognitive memory.',
    tip_es: 'El fruto seco más rico en Omega-3. Protege las neuronas y la memoria.'
  },
  {
    id: 'graines_chia',
    category: 'oleagineux',
    name_fr: 'Graines de Chia',
    name_ar: 'بذور الشيا',
    name_en: 'Chia Seeds',
    name_es: 'Semillas de Chía',
    unit_fr: '1 cuillère à soupe (15g)',
    unit_ar: 'ملعقة طعام (15غ)',
    unit_en: '1 tablespoon (15g)',
    unit_es: '1 cucharada sopera (15g)',
    default_g: 15,
    cal_100: 486,
    prot_100: 16.5,
    carb_100: 42.1,
    fat_100: 30.7,
    fiber_100: 34.4,
    gi: 'Très Bas (10)',
    micro_fr: 'Mucilages solubles, Oméga-3, Calcium (631mg), Fer',
    micro_ar: 'ألياف هلامية، أوميغا 3، كالسيوم (631 مغ)، حديد',
    micro_en: 'Soluble mucilage, Omega-3s, Calcium (631mg), Iron',
    micro_es: 'Mucílagos solubles, Omega-3, Calcio (631mg), Hierro',
    tip_fr: 'Forment un gel lubrifiant intestinal au contact de l\'eau. Idéal contre la constipation et le cholestérol.',
    tip_ar: 'تكون هلاماً لطيفاً عند نقعها في الماء لتسهيل حركة الأمعاء وخفض الكوليسترول.',
    tip_en: 'Forms a soothing gel in liquid that promotes bowel regularity and cholesterol control.',
    tip_es: 'Forma un gel lubricante intestinal. Excelente para el tránsito y el colesterol.'
  },

  // ==========================================
  // SPÉCIALITÉS TUNISIENNES & MÉDITERRANÉENNES
  // ==========================================
  {
    id: 'couscous_complet',
    category: 'plats',
    name_fr: 'Couscous complet aux légumes & poulet',
    name_ar: 'كسكسي كامل بالخضار والدجاج',
    name_en: 'Whole Wheat Chicken & Veggie Couscous',
    name_es: 'Cuscús integral con pollo y verduras',
    unit_fr: '1 belle assiette clinique (350g)',
    unit_ar: 'صحن متوسط (350غ)',
    unit_en: '1 clinical plate (350g)',
    unit_es: '1 plato clínico (350g)',
    default_g: 350,
    cal_100: 135,
    prot_100: 7.8,
    carb_100: 18.5,
    fat_100: 3.5,
    fiber_100: 3.2,
    gi: 'Moyen (48)',
    micro_fr: 'Lycopène de tomate cuite, Fibres de courgette/carotte, Protéines de poulet',
    micro_ar: 'ليكوبين الطماطم، ألياف القرع والجزر، بروتين الدجاج',
    micro_en: 'Cooked tomato lycopene, Veggie fiber, Lean chicken protein',
    micro_es: 'Licopeno del tomate cocido, Fibra vegetal, Proteína de pollo',
    tip_fr: 'Plat complet équilibré : semoule complète + légumes variés + blanc de poulet + filet d\'huile d\'olive.',
    tip_ar: 'وجبة متكاملة متوازنة: سميد كامل + خضار موسمية + صدر دجاج + زيت زيتون.',
    tip_en: 'Complete balanced dish: whole grain semolina + rich vegetables + lean chicken + olive oil.',
    tip_es: 'Plato equilibrado completo: sémola integral + verduras + pollo + aceite de oliva.'
  },
  {
    id: 'ojja_tunisienne',
    category: 'plats',
    name_fr: 'Ojja tunisienne aux oeufs & tomates fraîches',
    name_ar: 'عجة تونسية بالبيض والطماطم الطازجة',
    name_en: 'Tunisian Ojja (Shakshuka) with Eggs',
    name_es: 'Ojja / Shakshuka tunecina con huevos',
    unit_fr: '1 portion avec 2 oeufs (250g)',
    unit_ar: 'صحن مع بيضتين (250غ)',
    unit_en: '1 portion with 2 eggs (250g)',
    unit_es: '1 ración con 2 huevos (250g)',
    default_g: 250,
    cal_100: 110,
    prot_100: 6.5,
    carb_100: 4.8,
    fat_100: 7.2,
    fiber_100: 1.8,
    gi: 'Bas (30)',
    micro_fr: 'Lycopène activé à l\'huile d\'olive, Capsaïcine, Choline des oeufs',
    micro_ar: 'ليكوبين معزز بزيت الزيتون، كابسيسين الفلفل، كولين البيض',
    micro_en: 'Olive oil-activated Lycopene, Pepper capsaicin, Egg choline',
    micro_es: 'Licopeno potenciado con aceite de oliva, Capsaicina, Colina del huevo',
    tip_fr: 'Plat réconfortant à index glycémique bas, riche en antioxydants et protéines complètes.',
    tip_ar: 'وجبة غنية بمضادات الأكسدة والبروتين الكامل مع مؤشر سكري منخفض.',
    tip_en: 'Comforting low-glycemic dish, rich in antioxidants and complete bioavailable proteins.',
    tip_es: 'Plato reconfortante de bajo índice glucémico con proteína completa.'
  },
  {
    id: 'salade_mechouia',
    category: 'plats',
    name_fr: 'Salade Méchouia à l\'huile d\'olive (sans excès d\'huile)',
    name_ar: 'سلاطة مشوية بزيت الزيتون',
    name_en: 'Grilled Pepper Salad (Salade Méchouia)',
    name_es: 'Ensalada Mechouia de pimientos asados',
    unit_fr: '1 assiette d\'entrée (120g)',
    unit_ar: 'صحن مقبلات (120غ)',
    unit_en: '1 starter plate (120g)',
    unit_es: '1 plato entrante (120g)',
    default_g: 120,
    cal_100: 78,
    prot_100: 1.8,
    carb_100: 5.5,
    fat_100: 5.2,
    fiber_100: 2.8,
    gi: 'Très Bas (20)',
    micro_fr: 'Vitamine C des piments doux, Ail prébiotique, Polyphénols',
    micro_ar: 'فيتامين C من الفلفل المشوي، ثوم حيوي، بوليفينول',
    micro_en: 'Sweet pepper Vitamin C, Prebiotic garlic, Polyphenols',
    micro_es: 'Vitamina C del pimiento asado, Ajo prebiótico, Polifenoles',
    tip_fr: 'Idéal en entrée pour ralentir la digestion des féculents et booster l\'apport en fibres savoureuses.',
    tip_ar: 'مقبلات ممتازة لتبطئ امتصاص النشويات وتزويد الجسم بالألياف اللذيذة.',
    tip_en: 'Ideal starter to slow carbohydrate absorption and boost delicious dietary fiber.',
    tip_es: 'Entrante ideal para ralentizar la absorción de hidratos y aportar fibra sabrosa.'
  },
  {
    id: 'lablabi_chiches',
    category: 'plats',
    name_fr: 'Lablabi traditionnel aux pois chiches & cumin',
    name_ar: 'لبلابي تونسي تقليدي بالكمون',
    name_en: 'Traditional Chickpea Lablabi Soup',
    name_es: 'Sopa Lablabi tradicional de garbanzos y comino',
    unit_fr: '1 bol moyen (300g)',
    unit_ar: 'زبدية لبلابي (300غ)',
    unit_en: '1 medium bowl (300g)',
    unit_es: '1 bol mediano (300g)',
    default_g: 300,
    cal_100: 105,
    prot_100: 5.8,
    carb_100: 14.5,
    fat_100: 2.8,
    fiber_100: 4.5,
    gi: 'Bas (35)',
    micro_fr: 'Cumin carminatif, Fibres prébiotiques, Fer & Magnésium',
    micro_ar: 'كمون طارد للغازات، ألياف بريبيوتيك، حديد ومغنيسيوم',
    micro_en: 'Digestive cumin, Prebiotic fibers, Iron & Magnesium',
    micro_es: 'Comino carminativo, Fibras prebióticas, Hierro y Magnesio',
    tip_fr: 'Le cumin apaise la fermentation des pois chiches. Plat d\'hiver par excellence, très satiétogène.',
    tip_ar: 'الكمون يسهل هضم الحمص. وجبة شتوية مغذية ومشبعة جداً.',
    tip_en: 'Cumin aids chickpea digestion. Superb nourishing and satiating winter dish.',
    tip_es: 'El comino facilita la digestión de los garbanzos. Plato saciante y nutritivo.'
  },
  {
    id: 'tajine_poulet',
    category: 'plats',
    name_fr: 'Tajine tunisien au poulet & persil (au four)',
    name_ar: 'طاجين تونسي بالدجاج والمعدنوس',
    name_en: 'Baked Tunisian Chicken & Parsley Tajine',
    name_es: 'Tajín tunecino de pollo y perejil al horno',
    unit_fr: '1 belle part carrée (150g)',
    unit_ar: 'قطعة طاجين (150غ)',
    unit_en: '1 portion (150g)',
    unit_es: '1 porción (150g)',
    default_g: 150,
    cal_100: 175,
    prot_100: 14.5,
    carb_100: 3.5,
    fat_100: 11.2,
    fiber_100: 1.2,
    gi: 'Très Bas (15)',
    micro_fr: 'Persil riche en Vitamine C et Fer, Protéines de volaille et d\'oeufs',
    micro_ar: 'معدنوس غني بفيتامين C والحديد، بروتينات البيض والدجاج',
    micro_en: 'Parsley Vitamin C and Iron, Egg and Poultry proteins',
    micro_es: 'Perejil rico en Vitamina C y Hierro, Proteínas de ave y huevo',
    tip_fr: 'Excellente source de protéines et d\'herbes fraîches. À accompagner d\'une grande salade verte.',
    tip_ar: 'مصدر بروتيني ممتاز بالأعشاب الطازجة. يُفضل تناوله مع سلطة خضراء غنية.',
    tip_en: 'Excellent source of proteins and fresh green herbs. Pair with a generous green salad.',
    tip_es: 'Excelente fuente de proteínas y hierbas frescas. Acompañar con ensalada verde.'
  },
  {
    id: 'salade_tunisienne',
    category: 'plats',
    name_fr: 'Salade tunisienne fraîche (Tomate, Concombre, Menthe sèche)',
    name_ar: 'سلاطة تونسية خضراء بالنعناع الشايح',
    name_en: 'Fresh Tunisian Salad (Tomato, Cucumber, Mint)',
    name_es: 'Ensalada tunecina fresca con menta',
    unit_fr: '1 bol (150g)',
    unit_ar: 'صحن سلطة (150غ)',
    unit_en: '1 bowl (150g)',
    unit_es: '1 bol (150g)',
    default_g: 150,
    cal_100: 45,
    prot_100: 1.2,
    carb_100: 4.2,
    fat_100: 2.6,
    fiber_100: 1.9,
    gi: 'Très Bas (15)',
    micro_fr: 'Menthe antispasmodique, Hydratation, Vitamine C, Potassium',
    micro_ar: 'نعناع مهدئ للقولون، ترطيب عالي، فيتامين C',
    micro_en: 'Soothing mint, High hydration, Vitamin C, Potassium',
    micro_es: 'Menta digestiva, Alta hidratación, Vitamina C',
    tip_fr: 'L\'entrée fraîcheur par excellence. La menthe séchée favorise la digestion des repas.',
    tip_ar: 'مقبلات منعشة ومثالية. النعناع المجفف يساعد على هضم الوجبات الرئيسية.',
    tip_en: 'Ultimate refreshing starter. Dried mint enhances smooth digestive comfort.',
    tip_es: 'Entrante refrescante. La menta seca favorece el confort digestivo.'
  },

  // ==========================================
  // COLLATIONS SAINES & DIVERS
  // ==========================================
  {
    id: 'chocolat_noir',
    category: 'collations',
    name_fr: 'Chocolat noir 85% cacao',
    name_ar: 'شوكولاتة سوداء 85% كاكاو',
    name_en: '85% Dark Chocolate',
    name_es: 'Chocolate negro 85% cacao',
    unit_fr: '2 carrés (20g)',
    unit_ar: 'مربعان (20غ)',
    unit_en: '2 squares (20g)',
    unit_es: '2 onzas (20g)',
    default_g: 20,
    cal_100: 580,
    prot_100: 11.0,
    carb_100: 19.0,
    fat_100: 51.0,
    fiber_100: 12.0,
    gi: 'Bas (25)',
    micro_fr: 'Flavanols de cacao, Magnésium (230mg), Théobromine',
    micro_ar: 'فلافانول الكاكاو، مغنيسيوم (230 مغ)، ثيوبرومين',
    micro_en: 'Cocoa flavanols, Magnesium (230mg), Theobromine',
    micro_es: 'Flavanoles de cacao, Magnesio (230mg), Teobromina',
    tip_fr: 'Plaisir antistress riche en magnésium. Deux carrés suffisent à apaiser les envies de sucre.',
    tip_ar: 'مهدئ للتوتر وغني بالمغنيسيوم. مربعان يكفيان لإشباع الرغبة في السكر.',
    tip_en: 'Anti-stress treat rich in magnesium. Two squares satisfy sugar cravings effectively.',
    tip_es: 'Placer antiestrés rico en magnesio. Dos onzas calman el deseo de dulce.'
  },
  {
    id: 'tisane_digestive',
    category: 'collations',
    name_fr: 'Infusion camomille / verveine / menthe sans sucre',
    name_ar: 'شاي أعشاب بالبابونج والنعناع (بدون سكر)',
    name_en: 'Herbal Infusion (Chamomile / Mint)',
    name_es: 'Infusión digestiva (Manzanilla / Menta)',
    unit_fr: '1 grande tasse (250ml)',
    unit_ar: 'كوب كبير (250 مل)',
    unit_en: '1 mug (250ml)',
    unit_es: '1 taza grande (250ml)',
    default_g: 250,
    cal_100: 2,
    prot_100: 0.1,
    carb_100: 0.3,
    fat_100: 0.0,
    fiber_100: 0.0,
    gi: 'Zéro (0)',
    micro_fr: 'Apigénine relaxante, Polyphénols apaisants, Hydratation pure',
    micro_ar: 'أبيجينين مهدئ، بوليفينول، ترطيب نقي',
    micro_en: 'Relaxing apigenin, Soothing polyphenols, Pure hydration',
    micro_es: 'Apigenina relajante, Polifenoles calmantes, Hidratación pura',
    tip_fr: 'À déguster après le repas pour relaxer le système digestif et préparer un sommeil réparateur.',
    tip_ar: 'يُشرب بعد الوجبات لتهدئة الجهاز الهضمي والتحضير لنوم عميق.',
    tip_en: 'Sip post-meal to relax digestive tract and prepare for restful restorative sleep.',
    tip_es: 'Tomar tras la comida para relajar la digestión y favorecer el descanso.'
  }
];

// ==========================================================================
// DAILY FOOD LOG CONTROLLER & PERSISTENCE
// ==========================================
window.DailyFoodLog = {
  STORAGE_KEY: 'cabinet_nutrition_daily_log_v1',
  GOAL_STORAGE_KEY: 'cabinet_nutrition_daily_goal_v1',

  state: {
    selectedDate: new Date().toISOString().split('T')[0],
    dailyCalorieGoal: 2000,
    waterGlasses: 0,
    entries: [], // [{ id, foodId, meal: 'breakfast'|'lunch'|'snack'|'dinner', grams: 150, timestamp }]
    searchQuery: '',
    selectedCategory: 'all',
    activeNutrientFilter: 'all',
    activeModalFood: null,
    activeModalGrams: 100,
    activeModalMeal: 'lunch'
  },

  showSoftLock(type) {
    let title = "Débloquez l'accès illimité";
    let message = "";

    if (type === 'limit') {
      title = "Dossier Incomplet";
      message = "Vous avez atteint la limite de la version découverte (6 aliments). Pour enregistrer la suite de vos repas et obtenir une analyse complète, veuillez réaliser votre bilan clinique gratuit.";
    } else if (type === 'share') {
      title = "Analyse Médicale Requise";
      message = "Pour que la nutritionniste puisse analyser votre journal alimentaire, elle a besoin de votre contexte métabolique. Veuillez remplir le Bilan Express (60s) pour joindre votre dossier clinique à cet envoi.";
    } else if (type === 'goal') {
      title = "Objectif Personnalisé";
      message = "L'objectif actuel est une moyenne générique. Pour calculer votre besoin métabolique exact, laissez notre IA analyser votre profil en 60 secondes.";
    }

    const titleEl = document.getElementById('softLockTitle');
    const msgEl = document.getElementById('softLockMessage');
    if (titleEl) titleEl.innerHTML = title;
    if (msgEl) msgEl.innerHTML = message;

    if (typeof openModal === 'function') {
      openModal('softLockModal');
    } else {
      const modal = document.getElementById('softLockModal');
      if (modal) {
        modal.style.display = 'flex';
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    }
  },

  init() {
    this.loadState();
    this.renderCategories();
    this.renderTags();
    this.renderHUDShell();
    this.renderFoodDatabase();
    this.renderDailyLogHUD();
    this.renderDailyLogEntries();
    this.setupEventListeners();
    this.bindModalEvents();
  },

  loadState() {
    try {
      const savedGoal = localStorage.getItem(this.GOAL_STORAGE_KEY);
      if (savedGoal) {
        this.state.dailyCalorieGoal = parseInt(savedGoal, 10) || 2000;
      }
      
      const today = new Date().toISOString().split('T')[0];
      const savedDate = localStorage.getItem(this.STORAGE_KEY + '_date');
      const savedEntries = localStorage.getItem(this.STORAGE_KEY);
      const savedWater = localStorage.getItem(this.STORAGE_KEY + '_water');

      if (savedDate === today) {
        if (savedEntries) {
          this.state.entries = JSON.parse(savedEntries);
        }
        if (savedWater) {
          this.state.waterGlasses = parseInt(savedWater, 10) || 0;
        }
      } else {
        if (!savedDate && !savedEntries) {
          // Premier lancement : afficher un exemple pour montrer la valeur
          this.state.entries = [
            { id: 'ex_1', foodId: 'flocons_avoine', meal: 'breakfast', grams: 50, timestamp: Date.now() - 3600000 * 5 },
            { id: 'ex_2', foodId: 'lait_amande', meal: 'breakfast', grams: 200, timestamp: Date.now() - 3600000 * 5 },
            { id: 'ex_3', foodId: 'poulet_blanc', meal: 'lunch', grams: 150, timestamp: Date.now() - 3600000 * 2 },
            { id: 'ex_4', foodId: 'riz_complet', meal: 'lunch', grams: 150, timestamp: Date.now() - 3600000 * 2 },
            { id: 'ex_5', foodId: 'salade_mechouia', meal: 'lunch', grams: 100, timestamp: Date.now() - 3600000 * 2 },
            { id: 'ex_6', foodId: 'pomme', meal: 'snack', grams: 150, timestamp: Date.now() - 3600000 },
            { id: 'ex_7', foodId: 'amandes_brutes', meal: 'snack', grams: 20, timestamp: Date.now() - 3600000 }
          ];
          this.state.waterGlasses = 4;
        } else {
          // Nouveau jour : réinitialiser
          this.state.entries = [];
          this.state.waterGlasses = 0;
        }
        this.saveState();
      }
    } catch (e) {
      console.warn('Error loading food log state:', e);
    }
  },

  saveState() {
    try {
      const today = new Date().toISOString().split('T')[0];
      localStorage.setItem(this.STORAGE_KEY + '_date', today);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state.entries));
      localStorage.setItem(this.STORAGE_KEY + '_water', this.state.waterGlasses.toString());
      localStorage.setItem(this.GOAL_STORAGE_KEY, this.state.dailyCalorieGoal.toString());
    } catch (e) {
      console.warn('Error saving food log state:', e);
    }
  },

  getLang() {
    if (typeof currentLang !== 'undefined' && currentLang) return currentLang;
    return 'fr';
  },

  getFoodById(foodId) {
    return window.FOOD_DATABASE.find(f => f.id === foodId);
  },

  calculateItemNutrients(food, grams) {
    const ratio = grams / 100;
    return {
      calories: Math.round(food.cal_100 * ratio),
      proteins: +(food.prot_100 * ratio).toFixed(1),
      carbs: +(food.carb_100 * ratio).toFixed(1),
      fats: +(food.fat_100 * ratio).toFixed(1),
      fibers: +(food.fiber_100 * ratio).toFixed(1)
    };
  },

  getDailyTotals() {
    let totalCalories = 0;
    let totalProteins = 0;
    let totalCarbs = 0;
    let totalFats = 0;
    let totalFibers = 0;

    this.state.entries.forEach(entry => {
      const food = this.getFoodById(entry.foodId);
      if (food) {
        const nut = this.calculateItemNutrients(food, entry.grams);
        totalCalories += nut.calories;
        totalProteins += nut.proteins;
        totalCarbs += nut.carbs;
        totalFats += nut.fats;
        totalFibers += nut.fibers;
      }
    });

    const protKcal = totalProteins * 4;
    const carbKcal = totalCarbs * 4;
    const fatKcal = totalFats * 9;
    const totalMacroKcal = protKcal + carbKcal + fatKcal || 1;

    return {
      calories: totalCalories,
      proteins: +totalProteins.toFixed(1),
      carbs: +totalCarbs.toFixed(1),
      fats: +totalFats.toFixed(1),
      fibers: +totalFibers.toFixed(1),
      protPercent: Math.round((protKcal / totalMacroKcal) * 100),
      carbPercent: Math.round((carbKcal / totalMacroKcal) * 100),
      fatPercent: Math.round((fatKcal / totalMacroKcal) * 100)
    };
  },

  // ==========================================
  // RENDER CATEGORIES & TAGS
  // ==========================================
  renderCategories() {
    const container = document.getElementById('foodCategoriesContainer');
    if (!container) return;

    const lang = this.getLang();
    const categories = [
      { id: 'all', label_fr: '🌟 Tous les aliments', label_ar: '🌟 جميع الأطعمة', label_en: '🌟 All Foods', label_es: '🌟 Todos' },
      { id: 'fruits_legumes', label_fr: '🍎 Fruits & Légumes', label_ar: '🍎 فواكه وخضار', label_en: '🍎 Fruits & Veggies', label_es: '🍎 Frutas y Verduras' },
      { id: 'proteines', label_fr: '🥩 Protéines', label_ar: '🥩 بروتينات', label_en: '🥩 Proteins', label_es: '🥩 Proteínas' },
      { id: 'feculents', label_fr: '🌾 Féculents & Céréales', label_ar: '🌾 نشويات وألياف', label_en: '🌾 Grains & Fiber', label_es: '🌾 Cereales y Granos' },
      { id: 'laitiers', label_fr: '🥛 Laitiers & Alternatifs', label_ar: '🥛 ألبان وبدائل', label_en: '🥛 Dairy & Altern.', label_es: '🥛 Lácteos' },
      { id: 'oleagineux', label_fr: '🫒 Huiles & Noix', label_ar: '🫒 زيوت ومكسرات', label_en: '🫒 Healthy Fats', label_es: '🫒 Grasas Saludables' },
      { id: 'plats', label_fr: '🍲 Spécialités Tunisiennes', label_ar: '🍲 أطباق تونسية', label_en: '🍲 Med Specialties', label_es: '🍲 Especialidades' },
      { id: 'collations', label_fr: '🍯 Collations', label_ar: '🍯 لمجات صحية', label_en: '🍯 Healthy Snacks', label_es: '🍯 Snacks' }
    ];

    container.innerHTML = categories.map(cat => {
      const activeClass = this.state.selectedCategory === cat.id ? 'active' : '';
      const label = cat[`label_${lang}`] || cat.label_fr;
      return `<button class="food-cat-btn ${activeClass}" data-category="${cat.id}">${label}</button>`;
    }).join('');

    container.querySelectorAll('.food-cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.food-cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.state.selectedCategory = btn.getAttribute('data-category') || 'all';
        this.renderFoodDatabase();
      });
    });
  },

  renderTags() {
    const container = document.getElementById('foodTagsContainer');
    if (!container) return;

    const lang = this.getLang();
    const tags = [
      { id: 'all', label_fr: 'Filtres rapides :', label_ar: 'تصفية سريعة:', label_en: 'Quick filters:', label_es: 'Filtros rápidos:' },
      { id: 'high_prot', label_fr: '⚡ Riche en Protéines (≥10g)', label_ar: '⚡ غني بالبروتين (≥10غ)', label_en: '⚡ High Protein (≥10g)', label_es: '⚡ Alto en Proteínas' },
      { id: 'high_fiber', label_fr: '🌿 Riche en Fibres (≥4g)', label_ar: '🌿 غني بالألياف (≥4غ)', label_en: '🌿 High Fiber (≥4g)', label_es: '🌿 Alto en Fibra' },
      { id: 'low_cal', label_fr: '💧 Faible en Calories (<100 kcal)', label_ar: '💧 منخفض السعرات (<100 سعرة)', label_en: '💧 Low Calorie (<100 kcal)', label_es: '💧 Bajo en Calorías' },
      { id: 'low_gi', label_fr: '🩺 Index Glycémique Bas', label_ar: '🩺 مؤشر سكري منخفض', label_en: '🩺 Low Glycemic Index', label_es: '🩺 Bajo Índice Glucémico' }
    ];

    container.innerHTML = tags.map((tag, idx) => {
      if (idx === 0) {
        const label = tag[`label_${lang}`] || tag.label_fr;
        return `<span style="font-size: 0.78rem; font-weight: 700; color: #7a5c64; align-self: center; margin-right: 0.25rem;">${label}</span>`;
      }
      const activeClass = this.state.activeNutrientFilter === tag.id ? 'active' : '';
      const label = tag[`label_${lang}`] || tag.label_fr;
      return `<button class="food-tag-btn ${activeClass}" data-filter="${tag.id}">${label}</button>`;
    }).join('');

    container.querySelectorAll('.food-tag-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const filterVal = btn.getAttribute('data-filter') || 'all';
        if (this.state.activeNutrientFilter === filterVal) {
          this.state.activeNutrientFilter = 'all';
          btn.classList.remove('active');
        } else {
          container.querySelectorAll('.food-tag-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.state.activeNutrientFilter = filterVal;
        }
        this.renderFoodDatabase();
      });
    });
  },

  // ==========================================
  // RENDER HUD SHELL INTO CONTAINER
  // ==========================================
  renderHUDShell() {
    const container = document.getElementById('dailyFoodLogContainer');
    if (!container) return;

    const lang = this.getLang();
    const isAr = lang === 'ar';

    const labels = {
      title: isAr ? 'يومياتك الغذائية لليوم' : lang === 'en' ? 'Today\'s Nutrition Log' : lang === 'es' ? 'Diario Nutricional de Hoy' : 'Journal Nutritionnel du Jour',
      goal: isAr ? 'الهدف اليومي:' : lang === 'en' ? 'Daily Target:' : lang === 'es' ? 'Meta diaria:' : 'Objectif journalier :',
      changeGoal: isAr ? 'تعديل الهدف' : lang === 'en' ? 'Edit Target' : lang === 'es' ? 'Editar' : 'Modifier',
      kcalUnit: isAr ? 'سعرة' : 'kcal',
      prot: isAr ? 'بروتينات' : lang === 'en' ? 'Proteins' : lang === 'es' ? 'Proteínas' : 'Protéines',
      carb: isAr ? 'نشويات / سكريات' : lang === 'en' ? 'Carbohydrates' : lang === 'es' ? 'Carbohidratos' : 'Glucides',
      fat: isAr ? 'دهون' : lang === 'en' ? 'Fats' : lang === 'es' ? 'Grasas' : 'Lipides',
      fiber: isAr ? 'ألياف غذائية' : lang === 'en' ? 'Fibers' : lang === 'es' ? 'Fibras' : 'Fibres',
      breakfast: isAr ? '🌅 الفطور الصباحي (Ftour)' : lang === 'en' ? '🌅 Breakfast' : lang === 'es' ? '🌅 Desayuno' : '🌅 Petit-déjeuner (Ftour)',
      lunch: isAr ? '☀️ الغداء (Ghada)' : lang === 'en' ? '☀️ Lunch' : lang === 'es' ? '☀️ Almuerzo' : '☀️ Déjeuner (Ghada)',
      snack: isAr ? '🍎 اللمجة / تصبيرة' : lang === 'en' ? '🍎 Healthy Snack' : lang === 'es' ? '🍎 Merienda' : '🍎 Collation / Goûter',
      dinner: isAr ? '🌙 العشاء (Acha)' : lang === 'en' ? '🌙 Dinner' : lang === 'es' ? '🌙 Cena' : '🌙 Dîner (Acha)',
      shareWa: isAr ? 'مشاركة يومياتي مع الأخصائية عبر واتساب' : lang === 'en' ? 'Share log with Nutritionist on WhatsApp' : lang === 'es' ? 'Compartir en WhatsApp' : 'Partager mon journal sur WhatsApp',
      copySummary: isAr ? 'نسخ الملخص' : lang === 'en' ? 'Copy Summary' : lang === 'es' ? 'Copiar' : 'Copier résumé'
    };

    container.innerHTML = `
      <div class="glass-card" style="padding: 1.5rem; border-radius: 24px; border: 1px solid rgba(232, 198, 200, 0.4); background: rgba(255, 255, 255, 0.85); box-shadow: 0 10px 30px rgba(92, 60, 67, 0.05);">
        <!-- Top Title & Target -->
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.25rem;">
          <div>
            <h3 style="font-family: var(--font-heading); font-size: 1.3rem; color: var(--text-dark-rose); margin: 0 0 0.25rem 0;">
              ${labels.title}
            </h3>
            <div style="font-size: 0.82rem; color: #7a5c64;">
              <span>${labels.goal} <strong id="dailyLogGoalKcal">${this.state.dailyCalorieGoal || 2000}</strong> ${labels.kcalUnit}</span>
              ${!(window.AIEngine && window.AIEngine.state && window.AIEngine.state.isComplete) ? `<span style="display: inline-block; background: #fef08a; color: #854d0e; font-size: 0.65rem; padding: 0.15rem 0.4rem; border-radius: 4px; margin-left: 0.5rem; font-weight: 600; vertical-align: middle;">GÉNÉRIQUE</span>` : ''}
              <button onclick="DailyFoodLog.changeCalorieGoal()" style="background: none; border: none; color: var(--accent-mauve); font-weight: 700; font-size: 0.8rem; cursor: pointer; text-decoration: underline; margin-left: 0.4rem;">
                (${labels.changeGoal})
              </button>
            </div>
          </div>
          <div style="text-align: right;">
            <div id="dailyLogTotalKcal" style="font-size: 1.8rem; font-weight: 800; color: var(--text-dark-rose); line-height: 1;">0</div>
            <div style="font-size: 0.75rem; color: #7a5c64; font-weight: 600;">${labels.kcalUnit}</div>
          </div>
        </div>

        <!-- Progress Bar -->
        <div style="background: rgba(232, 198, 200, 0.4); height: 10px; border-radius: 999px; overflow: hidden; margin-bottom: 1.25rem; position: relative;">
          <div id="dailyLogProgressBar" style="height: 100%; width: 0%; background: #10b981; border-radius: 999px; transition: width 0.4s ease, background-color 0.4s ease;"></div>
        </div>

        <!-- 4 Macros Distribution Badges -->
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem; margin-bottom: 1.25rem; text-align: center;">
          <div style="background: rgba(192, 57, 43, 0.08); border: 1px solid rgba(192, 57, 43, 0.2); border-radius: 12px; padding: 0.5rem 0.25rem;">
            <div style="font-size: 0.68rem; font-weight: 700; color: #c0392b;">${labels.prot}</div>
            <div id="dailyTotalProt" style="font-size: 0.95rem; font-weight: 800; color: var(--text-dark-rose);">0g</div>
          </div>
          <div style="background: rgba(211, 84, 0, 0.08); border: 1px solid rgba(211, 84, 0, 0.2); border-radius: 12px; padding: 0.5rem 0.25rem;">
            <div style="font-size: 0.68rem; font-weight: 700; color: #d35400;">${labels.carb}</div>
            <div id="dailyTotalCarb" style="font-size: 0.95rem; font-weight: 800; color: var(--text-dark-rose);">0g</div>
          </div>
          <div style="background: rgba(39, 174, 96, 0.08); border: 1px solid rgba(39, 174, 96, 0.2); border-radius: 12px; padding: 0.5rem 0.25rem;">
            <div style="font-size: 0.68rem; font-weight: 700; color: #27ae60;">${labels.fat}</div>
            <div id="dailyTotalFat" style="font-size: 0.95rem; font-weight: 800; color: var(--text-dark-rose);">0g</div>
          </div>
          <div style="background: rgba(142, 68, 173, 0.08); border: 1px solid rgba(142, 68, 173, 0.2); border-radius: 12px; padding: 0.5rem 0.25rem;">
            <div style="font-size: 0.68rem; font-weight: 700; color: #8e44ad;">${labels.fiber}</div>
            <div id="dailyTotalFiber" style="font-size: 0.95rem; font-weight: 800; color: var(--text-dark-rose);">0g</div>
          </div>
        </div>

        
        <!-- Water Hydration Tracker -->
        <div style="background: rgba(224, 242, 254, 0.5); border: 1px solid rgba(14, 165, 233, 0.15); box-shadow: inset 0 2px 8px rgba(14, 165, 233, 0.05); border-radius: 16px; padding: 1.25rem; margin-bottom: 1.25rem; display: flex; flex-direction: column; gap: 0.75rem;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <i class="fa-solid fa-droplet" style="color: #0284c7; font-size: 1.2rem;"></i>
              <span style="font-weight: 700; color: #0369a1; font-size: 0.95rem;">Hydratation (Verres d'eau)</span>
            </div>
            <span style="font-weight: 800; color: #0284c7; font-size: 1.1rem;"><span id="waterGlassCount">0</span> / 8</span>
          </div>
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem;">
            <button onclick="DailyFoodLog.removeWater()" style="background: white; border: 1px solid #bae6fd; border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #0369a1; font-weight: bold; box-shadow: 0 2px 5px rgba(0,0,0,0.05);"><i class="fa-solid fa-minus"></i></button>
            <div id="waterGlassesContainer" style="display: flex; gap: 0.35rem; flex-wrap: wrap; flex: 1; justify-content: center; min-height: 24px;"></div>
            <button onclick="DailyFoodLog.addWater()" style="background: #0ea5e9; border: none; border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; cursor: pointer; color: white; font-weight: bold; box-shadow: 0 4px 10px rgba(14, 165, 233, 0.3);"><i class="fa-solid fa-plus"></i></button>
          </div>
        </div>

        <!-- Meals Accordion Lists -->
        <div style="display: flex; flex-direction: column; gap: 0.85rem; margin-bottom: 1.5rem;">
          <!-- Breakfast -->
          <div style="background: rgba(255,255,255,0.7); border: 1px solid rgba(232,198,200,0.6); border-radius: 14px; padding: 0.75rem 1rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
              <span style="font-weight: 700; font-size: 0.88rem; color: var(--text-dark-rose);">${labels.breakfast}</span>
              <span id="meal_subtotal_breakfast" style="font-size: 0.8rem; font-weight: 700; color: #7a5c64;">0 kcal</span>
            </div>
            <div id="meal_list_breakfast"></div>
          </div>

          <!-- Lunch -->
          <div style="background: rgba(255,255,255,0.7); border: 1px solid rgba(232,198,200,0.6); border-radius: 14px; padding: 0.75rem 1rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
              <span style="font-weight: 700; font-size: 0.88rem; color: var(--text-dark-rose);">${labels.lunch}</span>
              <span id="meal_subtotal_lunch" style="font-size: 0.8rem; font-weight: 700; color: #7a5c64;">0 kcal</span>
            </div>
            <div id="meal_list_lunch"></div>
          </div>

          <!-- Snack -->
          <div style="background: rgba(255,255,255,0.7); border: 1px solid rgba(232,198,200,0.6); border-radius: 14px; padding: 0.75rem 1rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
              <span style="font-weight: 700; font-size: 0.88rem; color: var(--text-dark-rose);">${labels.snack}</span>
              <span id="meal_subtotal_snack" style="font-size: 0.8rem; font-weight: 700; color: #7a5c64;">0 kcal</span>
            </div>
            <div id="meal_list_snack"></div>
          </div>

          <!-- Dinner -->
          <div style="background: rgba(255,255,255,0.7); border: 1px solid rgba(232,198,200,0.6); border-radius: 14px; padding: 0.75rem 1rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
              <span style="font-weight: 700; font-size: 0.88rem; color: var(--text-dark-rose);">${labels.dinner}</span>
              <span id="meal_subtotal_dinner" style="font-size: 0.8rem; font-weight: 700; color: #7a5c64;">0 kcal</span>
            </div>
            <div id="meal_list_dinner"></div>
          </div>
        </div>

        <!-- Sharing & Export Actions -->
        <div style="display: flex; flex-direction: column; gap: 0.6rem;">
          <button onclick="DailyFoodLog.shareOnWhatsApp()" class="btn-pill" style="width: 100%; justify-content: center; background-color: #25D366; color: #ffffff; border: none; font-weight: 700; font-size: 0.88rem; padding: 0.75rem; box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3); cursor: pointer;">
            <i class="fa-brands fa-whatsapp" style="margin-right: 0.4rem;"></i> ${labels.shareWa}
          </button>
          <button onclick="DailyFoodLog.copySummary()" class="btn-pill" style="width: 100%; justify-content: center; background: rgba(255,255,255,0.9); border: 1px solid rgba(232,198,200,0.8); color: var(--text-dark-rose); font-weight: 600; font-size: 0.82rem; padding: 0.6rem; cursor: pointer;">
            <i class="fa-regular fa-copy" style="margin-right: 0.4rem;"></i> ${labels.copySummary}
          </button>
        </div>
      </div>
    `;
  },

  
  addWater() {
    if (this.state.waterGlasses < 15) {
      this.state.waterGlasses++;
      this.saveState();
      this.renderDailyLogHUD();
    }
  },
  
  removeWater() {
    if (this.state.waterGlasses > 0) {
      this.state.waterGlasses--;
      this.saveState();
      this.renderDailyLogHUD();
    }
  },

  // ==========================================
  // RENDER FOOD DATABASE CARDS
  // ==========================================
  renderFoodDatabase() {
    const container = document.getElementById('foodCardsContainer') || document.getElementById('foodCardsGrid');
    if (!container) return;

    const lang = this.getLang();
    const query = this.state.searchQuery.toLowerCase().trim();
    const cat = this.state.selectedCategory;
    const filter = this.state.activeNutrientFilter;

    const filtered = window.FOOD_DATABASE.filter(food => {
      // Category filter
      if (cat !== 'all' && food.category !== cat) return false;

      // Query filter
      if (query) {
        const nameFr = (food.name_fr || '').toLowerCase();
        const nameAr = (food.name_ar || '').toLowerCase();
        const nameEn = (food.name_en || '').toLowerCase();
        const nameEs = (food.name_es || '').toLowerCase();
        const micro = (food[`micro_${lang}`] || food.micro_fr || '').toLowerCase();
        if (!nameFr.includes(query) && !nameAr.includes(query) && !nameEn.includes(query) && !nameEs.includes(query) && !micro.includes(query)) {
          return false;
        }
      }

      // Nutrient tags filter
      if (filter === 'high_prot' && food.prot_100 < 10) return false;
      if (filter === 'high_fiber' && food.fiber_100 < 4) return false;
      if (filter === 'low_cal' && food.cal_100 > 100) return false;
      if (filter === 'low_gi' && !food.gi.toLowerCase().includes('bas') && !food.gi.toLowerCase().includes('zéro') && !food.gi.toLowerCase().includes('low') && !food.gi.toLowerCase().includes('منخفض')) return false;

      return true;
    });

    if (filtered.length === 0) {
      const emptyText = lang === 'ar' ? 'لم يتم العثور على أي عنصر غذائي مطابق للبحث.' : lang === 'en' ? 'No food item matched your search.' : lang === 'es' ? 'No se encontraron alimentos para esta búsqueda.' : 'Aucun aliment trouvé pour cette recherche.';
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1.5rem; background: rgba(255,255,255,0.4); border-radius: var(--radius-card); border: 1px dashed var(--accent-mauve);">
          <i class="fa-solid fa-magnifying-glass" style="font-size: 2rem; color: var(--accent-mauve); margin-bottom: 1rem;"></i>
          <p style="color: var(--text-dark-rose); font-weight: 600;">${emptyText}</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(food => {
      const name = food[`name_${lang}`] || food.name_fr;
      const unit = food[`unit_${lang}`] || food.unit_fr;
      const micro = food[`micro_${lang}`] || food.micro_fr;
      const tip = food[`tip_${lang}`] || food.tip_fr;
      const defaultG = food.default_g || 100;
      const nut = this.calculateItemNutrients(food, defaultG);

      const addBtnText = lang === 'ar' ? 'إضافة لليومية' : lang === 'en' ? 'Add to Log' : lang === 'es' ? 'Añadir al Diario' : 'Ajouter au Journal';
      const kcalText = lang === 'ar' ? 'سعرة' : 'kcal';

      let catBadge = '';
      if (food.category === 'fruits_legumes') catBadge = lang === 'ar' ? '🍎 فواكه وخضار' : '🍎 Fruits & Légumes';
      else if (food.category === 'proteines') catBadge = lang === 'ar' ? '🥩 بروتينات' : '🥩 Protéines';
      else if (food.category === 'feculents') catBadge = lang === 'ar' ? '🌾 نشويات وألياف' : '🌾 Féculents & Céréales';
      else if (food.category === 'laitiers') catBadge = lang === 'ar' ? '🥛 ألبان وبدائل' : '🥛 Laitiers & Alternatifs';
      else if (food.category === 'oleagineux') catBadge = lang === 'ar' ? '🫒 دهون صحية ومكسرات' : '🫒 Oléagineux & Huiles';
      else if (food.category === 'plats') catBadge = lang === 'ar' ? '🍲 أطباق متوسطية وتونسية' : '🍲 Spécialités Tunisiennes';
      else catBadge = lang === 'ar' ? '🍯 لمجة صحية' : '🍯 Collations Saines';

      return `
        <div class="glass-card food-card" id="food_card_${food.id}" style="padding: 1.3rem; display: flex; flex-direction: column; justify-content: space-between; border-radius: 20px; border: 1px solid rgba(232, 198, 200, 0.3); background: rgba(255, 255, 255, 0.95); box-shadow: 0 8px 24px rgba(92, 60, 67, 0.04); transition: transform 0.25s ease, box-shadow 0.25s ease;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.75rem;">
              <span style="font-size: 0.72rem; font-weight: 700; color: var(--text-dark-rose); background: rgba(244, 227, 229, 0.85); padding: 0.25rem 0.65rem; border-radius: var(--radius-pill); border: 1px solid rgba(196, 157, 165, 0.4);">
                ${catBadge}
              </span>
              <span style="font-size: 0.72rem; font-weight: 600; color: #10b981; background: rgba(16, 185, 129, 0.1); padding: 0.2rem 0.5rem; border-radius: var(--radius-pill);">
                IG: ${food.gi}
              </span>
            </div>

            <h4 style="font-size: 1.1rem; color: var(--text-dark-rose); font-weight: 700; margin-bottom: 0.35rem; line-height: 1.3;">
              ${name}
            </h4>

            <div style="font-size: 0.8rem; color: #7a5c64; margin-bottom: 0.85rem; display: flex; align-items: center; gap: 0.4rem;">
              <i class="fa-solid fa-scale-balanced" style="color: var(--accent-mauve);"></i>
              <span>${unit} (<strong>${defaultG}g</strong>)</span>
            </div>

            <!-- Nutrients Grid (Calculated per default serving) -->
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.35rem; background: rgba(251, 245, 246, 0.9); padding: 0.65rem 0.4rem; border-radius: 12px; margin-bottom: 0.85rem; text-align: center; border: 1px solid rgba(232, 198, 200, 0.5);">
              <div>
                <div style="font-size: 0.65rem; color: #7a5c64; font-weight: 600; text-transform: uppercase;">Cal</div>
                <div style="font-size: 0.95rem; font-weight: 800; color: var(--text-dark-rose);">${nut.calories} <small style="font-size: 0.6rem; font-weight: 600;">${kcalText}</small></div>
              </div>
              <div>
                <div style="font-size: 0.65rem; color: #c0392b; font-weight: 700; text-transform: uppercase;">Prot</div>
                <div style="font-size: 0.9rem; font-weight: 700; color: var(--text-dark-rose);">${nut.proteins}g</div>
              </div>
              <div>
                <div style="font-size: 0.65rem; color: #d35400; font-weight: 700; text-transform: uppercase;">Gluc</div>
                <div style="font-size: 0.9rem; font-weight: 700; color: var(--text-dark-rose);">${nut.carbs}g</div>
              </div>
              <div>
                <div style="font-size: 0.65rem; color: #27ae60; font-weight: 700; text-transform: uppercase;">Lip</div>
                <div style="font-size: 0.9rem; font-weight: 700; color: var(--text-dark-rose);">${nut.fats}g</div>
              </div>
            </div>

            <!-- Macro Pie Chart Container -->
            <div id="macro-chart-${food.id}" style="width: 100%; height: 140px; margin-bottom: 0.85rem;"></div>

            <!-- Clinical Micronutrient / Tip Pill -->
            <div style="font-size: 0.75rem; color: #7a5c64; line-height: 1.4; margin-bottom: 1rem; background: rgba(255,255,255,0.7); padding: 0.5rem 0.65rem; border-radius: 10px; border-left: 3px solid var(--accent-mauve);">
              <i class="fa-solid fa-leaf" style="color: var(--accent-mauve); margin-right: 0.3rem;"></i> <strong>${micro}</strong>. <span style="opacity: 0.9;">${tip}</span>
            </div>
          </div>

          <!-- Bottom Action Buttons -->
          <div>
            <button onclick="DailyFoodLog.openAddModal('${food.id}')" class="btn-pill btn-rose" style="width: 100%; padding: 0.65rem 0.9rem; font-size: 0.85rem; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 0.45rem; box-shadow: 0 4px 15px rgba(92, 60, 67, 0.1); cursor: pointer;">
              <i class="fa-solid fa-plus"></i> ${addBtnText}
            </button>
          </div>
        </div>
      `;
    }).join('');

    // Render the React macro charts for each item after they are in the DOM
    setTimeout(() => {
      filtered.forEach(food => {
        if (window.renderMacroChart) {
          const defaultG = food.default_g || 100;
          const nut = this.calculateItemNutrients(food, defaultG);
          window.renderMacroChart(`macro-chart-${food.id}`, nut.proteins, nut.carbs, nut.fats);
        }
      });
    }, 50);
  },

  // ==========================================
  // DAILY LOG HUD & SUMMARY METRICS
  // ==========================================
  syncMetabolicGoalsCard() {
    // 1. Retrieve the metabolic goal from localStorage or state
    let goal = this.state.dailyCalorieGoal || 2000;
    const savedGoal = localStorage.getItem(this.GOAL_STORAGE_KEY);
    if (savedGoal) {
      goal = parseInt(savedGoal, 10) || 2000;
    }
    
    // 2. Calculate the macronutrient targets
    const goals = {
        kcal: goal,
        prot: Math.round((goal * 0.25) / 4),
        carb: Math.round((goal * 0.45) / 4),
        fat: Math.round((goal * 0.30) / 9)
    };
    
    const totals = this.getDailyTotals();
    
    // 3. Automatically update the metabolicGoalsCard and progress bars
    if (typeof window.updateMetabolicGoalsCard === 'function') {
        window.updateMetabolicGoalsCard(goal);
    }
    if (typeof window.updateMetabolicChart === 'function') {
        window.updateMetabolicChart(totals, goals);
    }
  },

  renderDailyLogHUD() {
    
    this.syncMetabolicGoalsCard();
    

    
    // Update water tracker
    const waterCountEl = document.getElementById('waterGlassCount');
    const waterContainerEl = document.getElementById('waterGlassesContainer');
    if (waterCountEl && waterContainerEl) {
      const glasses = this.state.waterGlasses || 0;
      waterCountEl.textContent = glasses;
      
      let glassesHtml = '';
      for (let i = 0; i < 8; i++) {
        if (i < glasses) {
          glassesHtml += `<i class="fa-solid fa-glass-water" style="color: #0ea5e9; font-size: 1.1rem; filter: drop-shadow(0 2px 4px rgba(14,165,233,0.3));"></i>`;
        } else {
          glassesHtml += `<i class="fa-solid fa-glass-water" style="color: rgba(186, 230, 253, 0.4); font-size: 1.1rem;"></i>`;
        }
      }
      
      if (glasses > 8) {
        glassesHtml += `<span style="color: #0ea5e9; font-weight: bold; font-size: 0.85rem; margin-left: 0.25rem;">+${glasses - 8}</span>`;
      }
      
      waterContainerEl.innerHTML = glassesHtml;
    }

    const totals = this.getDailyTotals();
    const goal = this.state.dailyCalorieGoal || 2000;
    const progressPercent = Math.min(100, Math.round((totals.calories / goal) * 100));
    


    const hudKcalEl = document.getElementById('dailyLogTotalKcal');
    const hudGoalEl = document.getElementById('dailyLogGoalKcal');
    const hudProgressBar = document.getElementById('dailyLogProgressBar');

    if (hudKcalEl) hudKcalEl.textContent = totals.calories;
    if (hudGoalEl) hudGoalEl.textContent = goal;
    if (hudProgressBar) {
      hudProgressBar.style.width = `${progressPercent}%`;
      hudProgressBar.style.backgroundColor = totals.calories > goal * 1.1 ? '#e74c3c' : '#10b981';
    }

    // Macro numbers
    const protEl = document.getElementById('dailyTotalProt');
    const carbEl = document.getElementById('dailyTotalCarb');
    const fatEl = document.getElementById('dailyTotalFat');
    const fiberEl = document.getElementById('dailyTotalFiber');

    if (protEl) protEl.textContent = `${totals.proteins}g (${totals.protPercent}%)`;
    if (carbEl) carbEl.textContent = `${totals.carbs}g (${totals.carbPercent}%)`;
    if (fatEl) fatEl.textContent = `${totals.fats}g (${totals.fatPercent}%)`;
    if (fiberEl) fiberEl.textContent = `${totals.fibers}g`;
  },

  // ==========================================
  // RENDER MEAL-BY-MEAL LOG ENTRIES
  // ==========================================
  renderDailyLogEntries() {
    const meals = ['breakfast', 'lunch', 'snack', 'dinner'];
    const lang = this.getLang();

    meals.forEach(mealKey => {
      const listEl = document.getElementById(`meal_list_${mealKey}`);
      const subtotalEl = document.getElementById(`meal_subtotal_${mealKey}`);
      if (!listEl) return;

      const mealEntries = this.state.entries.filter(e => e.meal === mealKey);
      let mealKcal = 0;

      if (mealEntries.length === 0) {
        const emptyMsg = lang === 'ar' ? 'لا توجد أطعمة مسجلة في هذه الوجبة.' : lang === 'en' ? 'No food added yet.' : lang === 'es' ? 'Sin alimentos registrados.' : 'Aucun aliment enregistré.';
        listEl.innerHTML = `<div style="font-size: 0.8rem; color: #a18a90; font-style: italic; padding: 0.4rem 0;">${emptyMsg}</div>`;
      } else {
        listEl.innerHTML = mealEntries.map(entry => {
          const food = this.getFoodById(entry.foodId);
          if (!food) return '';
          const nut = this.calculateItemNutrients(food, entry.grams);
          mealKcal += nut.calories;
          const name = food[`name_${lang}`] || food.name_fr;

          return `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.55rem 0.65rem; background: rgba(255, 255, 255, 0.85); border-radius: 10px; margin-bottom: 0.4rem; border: 1px solid rgba(232, 198, 200, 0.5); font-size: 0.82rem;">
              <div style="flex: 1; padding-right: 0.5rem;">
                <div style="font-weight: 700; color: var(--text-dark-rose);">${name}</div>
                <div style="font-size: 0.72rem; color: #7a5c64; display: flex; gap: 0.5rem;">
                  <span><strong>${entry.grams}g</strong></span>
                  <span>•</span>
                  <span>P: ${nut.proteins}g</span>
                  <span>G: ${nut.carbs}g</span>
                  <span>L: ${nut.fats}g</span>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <span style="font-weight: 800; color: var(--text-dark-rose); font-size: 0.88rem;">${nut.calories} <small style="font-size: 0.65rem;">kcal</small></span>
                <button onclick="DailyFoodLog.removeEntry('${entry.id}')" title="Supprimer" style="background: none; border: none; color: #e74c3c; cursor: pointer; padding: 0.3rem; font-size: 0.85rem; border-radius: 6px;">
                  <i class="fa-regular fa-trash-can"></i>
                </button>
              </div>
            </div>
          `;
        }).join('');
      }

      if (subtotalEl) {
        subtotalEl.textContent = `${mealKcal} kcal`;
      }
    });
  },

  // ==========================================
  // USER ACTIONS & MODAL
  // ==========================================

  openAddModal(foodId) {
    const isQuizComplete = window.AIEngine && window.AIEngine.state && window.AIEngine.state.isComplete;
    if (!isQuizComplete && this.state.entries.length >= 6) {
      this.showSoftLock('limit');
      return;
    }

    const food = this.getFoodById(foodId);
    if (!food) return;

    this.state.activeModalFood = food;
    this.state.activeModalGrams = food.default_g || 100;
    this.state.activeModalMeal = 'lunch';

    const lang = this.getLang();
    const titleEl = document.getElementById('addFoodModalTitle');
    const iconEl = document.getElementById('modalFoodIcon');
    const servingEl = document.getElementById('modalFoodServing');
    const slider = document.getElementById('modalFoodQty');
    const display = document.getElementById('modalQtyDisplay');

    let icon = '🥗';
    if (food.category === 'fruits_legumes') icon = '🍎';
    else if (food.category === 'proteines') icon = '🥩';
    else if (food.category === 'feculents') icon = '🌾';
    else if (food.category === 'laitiers') icon = '🥛';
    else if (food.category === 'oleagineux') icon = '🫒';
    else if (food.category === 'plats') icon = '🍲';
    else if (food.category === 'collations') icon = '🍯';

    if (iconEl) iconEl.textContent = icon;
    if (titleEl) titleEl.textContent = food[`name_${lang}`] || food.name_fr;
    if (servingEl) servingEl.textContent = `${food[`unit_${lang}`] || food.unit_fr} (${food.default_g || 100}g)`;
    if (slider) slider.value = this.state.activeModalGrams;
    if (display) display.textContent = `${this.state.activeModalGrams}g`;

    this.updateModalNutrientPreview();

    if (typeof openModal === 'function') {
      openModal('addFoodModal');
    } else {
      const modal = document.getElementById('addFoodModal');
      if (modal) {
        modal.style.display = 'flex';
        modal.classList.add('active');
      }
    }
  },

  updateModalNutrientPreview() {
    const food = this.state.activeModalFood;
    if (!food) return;

    const nut = this.calculateItemNutrients(food, this.state.activeModalGrams);
    const calEl = document.getElementById('modalCaloriesPreview');
    const protEl = document.getElementById('modalProteinsPreview');
    const carbEl = document.getElementById('modalCarbsPreview');
    const fatEl = document.getElementById('modalFatsPreview');
    const fiberEl = document.getElementById('modalFibersPreview');

    if (calEl) calEl.textContent = `${nut.calories} kcal`;
    if (protEl) protEl.textContent = `${nut.proteins}g`;
    if (carbEl) carbEl.textContent = `${nut.carbs}g`;
    if (fatEl) fatEl.textContent = `${nut.fats}g`;
    if (fiberEl) fiberEl.textContent = `${nut.fibers}g`;
  },

  bindModalEvents() {
    const slider = document.getElementById('modalFoodQty');
    const display = document.getElementById('modalQtyDisplay');
    const confirmBtn = document.getElementById('modalConfirmAddBtn');

    if (slider) {
      slider.addEventListener('input', (e) => {
        const val = parseInt(e.target.value, 10) || 100;
        this.state.activeModalGrams = val;
        if (display) display.textContent = `${val}g`;
        this.updateModalNutrientPreview();
      });
    }

    if (confirmBtn) {
      confirmBtn.onclick = () => {
        this.confirmAddFromModal();
      };
    }
  },

  confirmAddFromModal() {
    const food = this.state.activeModalFood;
    if (!food) return;

    const mealSelect = document.getElementById('modalMealSelect');
    const meal = mealSelect ? mealSelect.value : 'lunch';
    const grams = this.state.activeModalGrams || 100;

    this.state.entries.push({
      id: 'entry_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
      foodId: food.id,
      meal: meal,
      grams: grams,
      timestamp: Date.now()
    });

    this.saveState();
    this.renderDailyLogHUD();
    this.renderDailyLogEntries();

    if (typeof closeModal === 'function') {
      closeModal('addFoodModal');
    } else {
      const modal = document.getElementById('addFoodModal');
      if (modal) {
        modal.style.display = 'none';
        modal.classList.remove('active');
      }
    }

    const lang = this.getLang();
    const foodName = food[`name_${lang}`] || food.name_fr;
    this.showToast(`✅ "${foodName}" (${grams}g) ajouté au journal !`);
  },

  removeEntry(entryId) {
    this.state.entries = this.state.entries.filter(e => e.id !== entryId);
    this.saveState();
    this.renderDailyLogHUD();
    this.renderDailyLogEntries();
    this.showToast('🗑️ Élément retiré du journal.');
  },

  resetDay() {
    const lang = this.getLang();
    const confirmMsg = lang === 'ar' ? 'هل ترغب في إعادة ضبط يومياتك الغذائية لهذا اليوم؟' : 'Voulez-vous réinitialiser votre journal alimentaire de la journée ?';
    if (confirm(confirmMsg)) {
      this.state.entries = [];
      this.saveState();
      this.renderDailyLogHUD();
      this.renderDailyLogEntries();
      this.showToast('Journal de la journée réinitialisé.');
    }
  },


  changeCalorieGoal() {
    const isQuizComplete = window.AIEngine && window.AIEngine.state && window.AIEngine.state.isComplete;
    if (!isQuizComplete) {
      this.showSoftLock('goal');
      return;
    }

    const current = this.state.dailyCalorieGoal || 2000;
    const promptMsg = this.getLang() === 'ar' ? 'أدخل هدف السعرات الحرارية اليومي الجديد (سعرة):' : 'Définir votre objectif calorique quotidien personnalisé (en kcal) :';
    const input = prompt(promptMsg, current.toString());
    if (input) {
      const parsed = parseInt(input, 10);
      if (parsed >= 800 && parsed <= 5000) {
        this.state.dailyCalorieGoal = parsed;
        this.saveState();
        this.renderDailyLogHUD();
        this.showToast(`🎯 Objectif mis à jour : ${parsed} kcal / jour`);
      }
    }
  },

  shareOnWhatsApp() {
    const isQuizComplete = window.AIEngine && window.AIEngine.state && window.AIEngine.state.isComplete;
    if (!isQuizComplete) {
      this.showSoftLock('share');
      return;
    }

    
    const totals = this.getDailyTotals();
    const phone = "21655211116";

    let msg = `Bonjour Inès,\n\nVoici le récapitulatif de mon journal alimentaire du jour :\n`;
    msg += `📊 TOTAL : ${totals.calories} kcal\n`;
    msg += `• Protéines : ${totals.proteins}g (${totals.protPercent}%)\n`;
    msg += `• Glucides : ${totals.carbs}g (${totals.carbPercent}%)\n`;
    msg += `• Lipides : ${totals.fats}g (${totals.fatPercent}%)\n`;
    msg += `• Fibres : ${totals.fibers}g\n\n`;

    const mealLabels = {
      breakfast: '🌅 Petit-déjeuner',
      lunch: '🥗 Déjeuner',
      snack: '🍎 Collation',
      dinner: '🌙 Dîner'
    };

    ['breakfast', 'lunch', 'snack', 'dinner'].forEach(mealKey => {
      const mealItems = this.state.entries.filter(e => e.meal === mealKey);
      if (mealItems.length > 0) {
        msg += `${mealLabels[mealKey]} :\n`;
        mealItems.forEach(item => {
          const food = this.getFoodById(item.foodId);
          if (food) {
            const nut = this.calculateItemNutrients(food, item.grams);
            msg += ` - ${food.name_fr} (${item.grams}g) -> ${nut.calories} kcal\n`;
          }
        });
        msg += `\n`;
      }
    });

    msg += `🏥 Bilan issu du portail nutritionnel Cabinet Inès Ben Abdennebi.`;

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const waUrl = isMobile 
      ? `whatsapp://send?phone=${phone}&text=${encodeURIComponent(msg)}`
      : `https://api.whatsapp.com/send/?phone=${phone}&text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
  },

  copySummary() {
    
    const totals = this.getDailyTotals();
    let text = `Journal Alimentaire • Cabinet Inès Ben Abdennebi\nTotal: ${totals.calories} kcal | Prot: ${totals.proteins}g | Gluc: ${totals.carbs}g | Lip: ${totals.fats}g | Fibres: ${totals.fibers}g\n`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        this.showToast('📋 Résumé copié dans le presse-papier !');
      });
    }
  },

  showToast(text) {
    let toast = document.getElementById('foodLogToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'foodLogToast';
      toast.style.position = 'fixed';
      toast.style.bottom = '2rem';
      toast.style.left = '50%';
      toast.style.transform = 'translateX(-50%) translateY(100px)';
      toast.style.background = 'linear-gradient(135deg, #422127 0%, #5c3c43 100%)';
      toast.style.color = '#ffffff';
      toast.style.padding = '0.75rem 1.5rem';
      toast.style.borderRadius = 'var(--radius-pill, 999px)';
      toast.style.boxShadow = '0 10px 30px rgba(0,0,0,0.25)';
      toast.style.zIndex = '100000';
      toast.style.fontWeight = '600';
      toast.style.fontSize = '0.9rem';
      toast.style.transition = 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease';
      toast.style.opacity = '0';
      document.body.appendChild(toast);
    }

    toast.textContent = text;
    toast.style.transform = 'translateX(-50%) translateY(0)';
    toast.style.opacity = '1';

    setTimeout(() => {
      toast.style.transform = 'translateX(-50%) translateY(100px)';
      toast.style.opacity = '0';
    }, 2800);
  },

  onLanguageChange() {
    this.renderCategories();
    this.renderTags();
    this.renderHUDShell();
    this.renderFoodDatabase();
    this.renderDailyLogHUD();
    this.renderDailyLogEntries();
  },

  setupEventListeners() {
    const searchInput = document.getElementById('foodSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.state.searchQuery = e.target.value;
        this.renderFoodDatabase();
      });
    }
  }
};

// Hook into global setLanguage function if defined
if (typeof window.setLanguage === 'function') {
  const originalSetLanguage = window.setLanguage;
  window.setLanguage = function(lang) {
    originalSetLanguage(lang);
    if (window.DailyFoodLog && typeof window.DailyFoodLog.onLanguageChange === 'function') {
      window.DailyFoodLog.onLanguageChange();
    }
  };
}

// Auto-init on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    DailyFoodLog.init();
  });
} else {
  DailyFoodLog.init();
}
