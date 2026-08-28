import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove required from the hidden creneau input to prevent invisible HTML5 validation errors
content = content.replace('<input type="hidden" id="bookingSlot" name="creneau" required />', '<input type="hidden" id="bookingSlot" name="creneau" />')

# Inject manual validation in handleFormSubmit
pattern = re.compile(r'(const phoneInput = form\.querySelector\(\'input\[name="telephone"\]\'\);)')
validation_logic = r'''\1
      const slotInput = form.querySelector('input[name="creneau"]');
      const dateInput = form.querySelector('input[name="date_souhaitee"]');
      if (dateInput && dateInput.value && slotInput && !slotInput.value) {
        const slotErrors = {
          fr: "Veuillez sélectionner un créneau horaire.",
          ar: "الرجاء اختيار وقت الموعد.",
          en: "Please select a time slot.",
          es: "Por favor seleccione un horario."
        };
        alert(slotErrors[typeof currentLang !== 'undefined' ? currentLang : 'fr']);
        return;
      }'''

if pattern.search(content):
    content = pattern.sub(validation_logic, content)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
