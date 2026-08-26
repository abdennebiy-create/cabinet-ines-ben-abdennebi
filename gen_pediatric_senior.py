import json

deepDive = {}
dossier = {}

# PEDIATRIC - Picky
deepDive['picky_step1'] = {
  'fr': { 'empathy': "Les repas peuvent devenir une vraie source de stress.", 'question': "Depuis quand votre enfant refuse-t-il certains aliments ?", 'options': ["🛑 Depuis la diversification", "🛑 Récemment", "🛑 Ça dépend des jours", "🛑 Surtout les légumes"] },
  'ar': { 'empathy': "قد تصبح الوجبات مصدر توتر.", 'question': "منذ متى يرفض طفلك بعض الأطعمة؟", 'options': ["🛑 منذ بدء التنوع", "🛑 مؤخرًا", "🛑 يعتمد على اليوم", "🛑 خاصة الخضار"] },
  'en': { 'empathy': "Meals can become a source of stress.", 'question': "Since when does your child refuse certain foods?", 'options': ["🛑 Since starting solids", "🛑 Recently", "🛑 Depends on the day", "🛑 Especially vegetables"] },
  'es': { 'empathy': "Las comidas pueden volverse estresantes.", 'question': "¿Desde cuándo su hijo rechaza ciertos alimentos?", 'options': ["🛑 Desde el inicio", "🛑 Recientemente", "🛑 Depende del día", "🛑 Especialmente verduras"] }
}
deepDive['picky_step2'] = {
  'fr': { 'empathy': "L'aversion aux textures est très fréquente.", 'question': "Accepte-t-il au moins un groupe d'aliments de façon systématique ?", 'options': ["📉 Oui, les féculents (pâtes, pain)", "📉 Oui, les produits laitiers", "📉 Seulement les aliments sucrés", "📉 Non, c'est très aléatoire"] },
  'ar': { 'empathy': "النفور من بعض القوام شائع جدا.", 'question': "هل يقبل على الأقل مجموعة واحدة من الأطعمة باستمرار؟", 'options': ["📉 نعم، النشويات", "📉 نعم، منتجات الألبان", "📉 الأطعمة الحلوة فقط", "📉 لا، الأمر عشوائي جدا"] },
  'en': { 'empathy': "Aversion to textures is very common.", 'question': "Does he systematically accept at least one food group?", 'options': ["📉 Yes, starches", "📉 Yes, dairy", "📉 Only sweet foods", "📉 No, very random"] },
  'es': { 'empathy': "La aversión a las texturas es muy común.", 'question': "¿Acepta sistemáticamente al menos un grupo de alimentos?", 'options': ["📉 Sí, carbohidratos", "📉 Sí, lácteos", "📉 Solo dulces", "📉 No, es muy aleatorio"] }
}
deepDive['picky_step3'] = {
  'fr': { 'empathy': "Le contexte familial joue beaucoup.", 'question': "Comment se déroulent les repas à la maison ?", 'options': ["🍽️ Il mange devant un écran", "🍽️ Il mange souvent seul", "🍽️ Nous mangeons tous ensemble", "🍽️ C'est souvent un rapport de force"] },
  'ar': { 'empathy': "السياق العائلي يلعب دورا كبيرا.", 'question': "كيف تجري الوجبات في المنزل؟", 'options': ["🍽️ يأكل أمام الشاشة", "🍽️ يأكل غالبا بمفرده", "🍽️ نأكل جميعا معا", "🍽️ غالبا ما يكون هناك صراع"] },
  'en': { 'empathy': "Family context plays a big role.", 'question': "How do meals go at home?", 'options': ["🍽️ Eats in front of a screen", "🍽️ Often eats alone", "🍽️ We eat together", "🍽️ It's often a power struggle"] },
  'es': { 'empathy': "El contexto familiar juega un gran papel.", 'question': "¿Cómo transcurren las comidas en casa?", 'options': ["🍽️ Come frente a una pantalla", "🍽️ A menudo come solo", "🍽️ Comemos todos juntos", "🍽️ A menudo hay conflictos"] }
}
dossier['picky'] = {
  'fr': { 'headline': "Sélectivité Alimentaire : Retrouver la Sérénité", 'realities': ["Les aversions (néophobie) sont normales, forcer crée des blocages durables.", "C'est souvent une question sensorielle (texture, vue) plus que de goût.", "Le mimétisme familial est le levier le plus puissant pour l'enfant."], 'timeline': { 'j14': "Dédramatisation des repas.", 'j30': "Premiers essais de nouveaux aliments.", 'j90': "Assiette diversifiée sans conflit." } },
  'ar': { 'headline': "الانتقائية الغذائية: استعادة الهدوء", 'realities': ["النفور طبيعي، والإجبار يخلق عقبات دائمة.", "غالبًا ما تكون مسألة حسية (ملمس، منظر) وليس طعم.", "التقليد العائلي هو أقوى دافع للطفل."], 'timeline': { 'j14': "تقليل التوتر في الوجبات.", 'j30': "محاولات أولى لأطعمة جديدة.", 'j90': "طبق متنوع بدون صراع." } },
  'en': { 'headline': "Picky Eating: Finding Serenity", 'realities': ["Aversions are normal, forcing creates lasting blocks.", "It's often a sensory issue rather than just taste.", "Family mimicking is the most powerful tool."], 'timeline': { 'j14': "Reduced mealtime stress.", 'j30': "First attempts at new foods.", 'j90': "Diversified plate without conflict." } },
  'es': { 'headline': "Selectividad Alimentaria: Encontrar la Serenidad", 'realities': ["Las aversiones son normales, forzar crea bloqueos duraderos.", "A menudo es una cuestión sensorial más que de sabor.", "El mimetismo familiar es la herramienta más poderosa."], 'timeline': { 'j14': "Reducción de la tensión.", 'j30': "Primeros intentos de nuevos alimentos.", 'j90': "Plato diversificado sin conflictos." } }
}

# PEDIATRIC - Weight Child
deepDive['weight_child_step1'] = {
  'fr': { 'empathy': "La croissance d'un enfant n'est pas linéaire.", 'question': "Avez-vous remarqué une prise de poids rapide ?", 'options': ["🛑 Récemment", "🛑 Depuis la petite enfance", "🛑 Surtout au niveau du ventre", "🛑 Je ne sais pas"] },
  'ar': { 'empathy': "نمو الطفل ليس خطياً.", 'question': "هل لاحظت زيادة سريعة في الوزن؟", 'options': ["🛑 مؤخراً", "🛑 منذ الطفولة المبكرة", "🛑 خاصة في البطن", "🛑 لا أعلم"] },
  'en': { 'empathy': "A child's growth is not linear.", 'question': "Have you noticed rapid weight gain?", 'options': ["🛑 Recently", "🛑 Since early childhood", "🛑 Mostly around the belly", "🛑 I don't know"] },
  'es': { 'empathy': "El crecimiento infantil no es lineal.", 'question': "¿Ha notado un aumento rápido de peso?", 'options': ["🛑 Recientemente", "🛑 Desde la primera infancia", "🛑 Principalmente en el vientre", "🛑 No sé"] }
}
deepDive['weight_child_step2'] = {
  'fr': { 'empathy': "L'environnement alimentaire est clé.", 'question': "Consomme-t-il souvent des produits sucrés industriels (jus, biscuits) ?", 'options': ["📉 Oui, tous les jours", "📉 Seulement le week-end", "📉 Rarement", "📉 Surtout en cachette"] },
  'ar': { 'empathy': "البيئة الغذائية أساسية.", 'question': "هل يستهلك غالبا منتجات حلوة صناعية؟", 'options': ["📉 نعم، كل يوم", "📉 في عطلة نهاية الأسبوع فقط", "📉 نادرا", "📉 في السر غالبا"] },
  'en': { 'empathy': "Food environment is key.", 'question': "Does he often consume processed sugary products?", 'options': ["📉 Yes, every day", "📉 Only on weekends", "📉 Rarely", "📉 Mostly secretly"] },
  'es': { 'empathy': "El entorno alimentario es clave.", 'question': "¿Consume a menudo productos azucarados industriales?", 'options': ["📉 Sí, todos los días", "📉 Solo los fines de semana", "📉 Raramente", "📉 Mayormente a escondidas"] }
}
deepDive['weight_child_step3'] = {
  'fr': { 'empathy': "L'activité physique compte autant que l'assiette.", 'question': "Quel est son niveau d'activité physique ?", 'options': ["🍽️ Très sédentaire (écrans fréquents)", "🍽️ Fait du sport 1 à 2 fois par semaine", "🍽️ Très actif tout le temps", "🍽️ Réticent à bouger"] },
  'ar': { 'empathy': "النشاط البدني لا يقل أهمية عن الأكل.", 'question': "ما هو مستوى نشاطه البدني؟", 'options': ["🍽️ خامل جدا (شاشات)", "🍽️ رياضة 1-2 مرة أسبوعيا", "🍽️ نشيط جدا", "🍽️ يرفض الحركة"] },
  'en': { 'empathy': "Physical activity matters as much as food.", 'question': "What is his physical activity level?", 'options': ["🍽️ Very sedentary", "🍽️ Sports 1-2 times/week", "🍽️ Very active", "🍽️ Reluctant to move"] },
  'es': { 'empathy': "La actividad física importa tanto como la comida.", 'question': "¿Cuál es su nivel de actividad física?", 'options': ["🍽️ Muy sedentario", "🍽️ Deporte 1-2 veces/semana", "🍽️ Muy activo", "🍽️ Reacio a moverse"] }
}
dossier['weight_child'] = {
  'fr': { 'headline': "Gestion du Poids : Accompagner sans Restreindre", 'realities': ["Mettre un enfant au régime strict est contre-productif, il faut ralentir la prise de poids pendant qu'il grandit en taille.", "Le sommeil et la sédentarité (écrans) impactent directement le stockage des graisses.", "Les calories liquides (jus, sodas) trompent la satiété de l'enfant."], 'timeline': { 'j14': "Réduction des grignotages sans frustration.", 'j30': "Énergie stabilisée tout au long de la journée.", 'j90': "Courbe d'IMC normalisée." } },
  'ar': { 'headline': "إدارة الوزن: مرافقة بدون حرمان", 'realities': ["النظام الغذائي الصارم للطفل يأتي بنتائج عكسية، يجب إبطاء زيادة الوزن أثناء النمو.", "النوم وقلة الحركة يؤثران على تخزين الدهون.", "السعرات السائلة تخدع الشبع."], 'timeline': { 'j14': "تقليل الوجبات الخفيفة بدون حرمان.", 'j30': "طاقة مستقرة طوال اليوم.", 'j90': "تطبيع منحنى كتلة الجسم." } },
  'en': { 'headline': "Weight Management: Support without Restriction", 'realities': ["Strict diets are counterproductive; we aim to slow weight gain while they grow taller.", "Sleep and screen time directly impact fat storage.", "Liquid calories deceive satiety."], 'timeline': { 'j14': "Reduced snacking without frustration.", 'j30': "Stabilized energy.", 'j90': "Normalized BMI curve." } },
  'es': { 'headline': "Manejo del Peso: Apoyo sin Restricciones", 'realities': ["Las dietas estrictas son contraproducentes; buscamos frenar el aumento mientras crece.", "El sueño y las pantallas impactan el almacenamiento de grasa.", "Las calorías líquidas engañan la saciedad."], 'timeline': { 'j14': "Reducción de picoteos sin frustración.", 'j30': "Energía estabilizada.", 'j90': "Curva de IMC normalizada." } }
}

with open('output_ped_senior.json', 'w') as f:
    json.dump({'deepDive': deepDive, 'dossier': dossier}, f, indent=2, ensure_ascii=False)

print("Generated step 1 of conditions")
