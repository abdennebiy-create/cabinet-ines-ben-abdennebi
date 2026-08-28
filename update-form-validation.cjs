const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const regexPhoneGroup = /<div class="form-group">\s*<label for="bookingPhone" data-i18n="lbl_phone">Numéro de Téléphone<\/label>\s*<input type="tel" id="bookingPhone" name="telephone" class="form-control" required placeholder="Ex : 55 211 116 ou \+216 22\.\.\." data-i18n-placeholder="ph_phone" autocomplete="tel" \/>\s*<\/div>/;

const newFields = `<div class="form-group">
          <label for="bookingPhone" data-i18n="lbl_phone">Numéro de Téléphone</label>
          <input type="tel" id="bookingPhone" name="telephone" class="form-control" required placeholder="Ex : 55 211 116 ou +216 22..." data-i18n-placeholder="ph_phone" autocomplete="tel" />
          <span class="validation-msg" id="phone-msg" style="font-size: 0.75rem; display: block; margin-top: 0.35rem; font-weight: 500;"></span>
        </div>
        <div class="form-group">
          <label for="bookingEmail" data-i18n="lbl_email">Adresse E-mail</label>
          <input type="email" id="bookingEmail" name="email" class="form-control" required placeholder="Ex : contact@exemple.com" data-i18n-placeholder="ph_email" autocomplete="email" />
          <span class="validation-msg" id="email-msg" style="font-size: 0.75rem; display: block; margin-top: 0.35rem; font-weight: 500;"></span>
        </div>`;

if (regexPhoneGroup.test(html)) {
    html = html.replace(regexPhoneGroup, newFields);
} else {
    console.error("Phone group not found!");
}

const cssToInsert = `
.form-control.invalid-input {
    border-color: #e74c3c !important;
    box-shadow: 0 0 0 2px rgba(231, 76, 60, 0.2) !important;
}
.form-control.valid-input {
    border-color: #2ecc71 !important;
    box-shadow: 0 0 0 2px rgba(46, 204, 113, 0.2) !important;
}
.validation-msg.error {
    color: #e74c3c;
}
.validation-msg.success {
    color: #2ecc71;
}
`;

html = html.replace('</style>', cssToInsert + '</style>');

const jsToInsert = `
// --- Real-time Validation Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.getElementById('bookingPhone');
    const emailInput = document.getElementById('bookingEmail');
    const phoneMsg = document.getElementById('phone-msg');
    const emailMsg = document.getElementById('email-msg');
    const bookingForm = document.querySelector('form[name="rendez-vous"]');

    // Phone validation regex (accepts digits, spaces, dots, dashes, plus sign, 8 to 15 digits roughly)
    // Allows Tunisia formats (e.g., 55 211 116, +216 55 211 116, 00216...) and French/international formats
    const phoneRegex = /^\\+?[0-9][0-9\\s.-]{7,16}$/;
    
    // Standard Email regex
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

    function validateField(input, regex, msgElement, errorText) {
        const value = input.value.trim();
        if (value === '') {
            input.classList.remove('valid-input', 'invalid-input');
            msgElement.textContent = '';
            msgElement.className = 'validation-msg';
            return false;
        }

        if (regex.test(value)) {
            input.classList.remove('invalid-input');
            input.classList.add('valid-input');
            msgElement.textContent = 'Format valide.';
            msgElement.className = 'validation-msg success';
            return true;
        } else {
            input.classList.remove('valid-input');
            input.classList.add('invalid-input');
            msgElement.textContent = errorText;
            msgElement.className = 'validation-msg error';
            return false;
        }
    }

    if (phoneInput && phoneMsg) {
        phoneInput.addEventListener('input', () => {
            validateField(phoneInput, phoneRegex, phoneMsg, 'Numéro de téléphone invalide.');
        });
    }

    if (emailInput && emailMsg) {
        emailInput.addEventListener('input', () => {
            validateField(emailInput, emailRegex, emailMsg, 'Adresse e-mail invalide.');
        });
    }

    // Override form submit to prevent submission if invalid
    if (bookingForm) {
        const originalOnSubmit = bookingForm.onsubmit;
        bookingForm.onsubmit = function(event) {
            let isValid = true;
            if (phoneInput) {
                const isPhoneValid = validateField(phoneInput, phoneRegex, phoneMsg, 'Numéro de téléphone invalide.');
                if (!isPhoneValid) isValid = false;
            }
            if (emailInput) {
                const isEmailValid = validateField(emailInput, emailRegex, emailMsg, 'Adresse e-mail invalide.');
                if (!isEmailValid) isValid = false;
            }
            
            if (!isValid) {
                event.preventDefault();
                return false;
            }
            
            if (typeof originalOnSubmit === 'function') {
                return originalOnSubmit.apply(this, arguments);
            }
        };
    }
});
`;

html = html.replace('<!-- Script Logic -->', '<!-- Script Logic -->\n<script>\n' + jsToInsert + '</script>');

fs.writeFileSync('index.html', html);
console.log("Validation added.");
