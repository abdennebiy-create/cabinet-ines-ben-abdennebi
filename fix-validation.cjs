const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Remove the text spans
html = html.replace(/<span class="validation-msg"[^>]*><\/span>/g, '');

// 2. Add shake CSS
const cssToAdd = `
@keyframes errorShake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-4px); }
    40% { transform: translateX(4px); }
    60% { transform: translateX(-4px); }
    80% { transform: translateX(4px); }
}
.shake-error {
    animation: errorShake 0.4s ease-in-out;
}
/* Tooltip on hover using title attribute is native, but we can also use a custom pseudo-element if we want. For now native title + red outline + shake is requested. */
`;
html = html.replace('</style>', cssToAdd + '\n</style>');

// 3. Replace the validation JS block
const oldJSStart = '// --- Real-time Validation Logic ---';
const jsRegex = /\/\/ --- Real-time Validation Logic ---[\s\S]*?(?=<\/script>)/;

const newJS = `// --- Real-time Validation Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.getElementById('bookingPhone');
    const emailInput = document.getElementById('bookingEmail');
    const bookingForm = document.querySelector('form[name="rendez-vous"]');

    const phoneRegex = /^\\+?[0-9][0-9\\s.-]{7,16}$/;
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

    function triggerShake(input) {
        input.classList.remove('shake-error');
        void input.offsetWidth; // trigger reflow
        input.classList.add('shake-error');
        setTimeout(() => input.classList.remove('shake-error'), 400);
    }

    function validateField(input, regex, errorText, shakeOnFail = false) {
        if (!input) return false;
        
        const value = input.value.trim();
        if (value === '') {
            input.classList.remove('valid-input', 'invalid-input');
            input.setCustomValidity('');
            input.title = '';
            return false;
        }

        if (regex.test(value)) {
            input.classList.remove('invalid-input');
            input.classList.add('valid-input');
            input.setCustomValidity('');
            input.title = '';
            return true;
        } else {
            input.classList.remove('valid-input');
            input.classList.add('invalid-input');
            input.setCustomValidity(errorText);
            input.title = errorText; // Native subtle tooltip on hover
            if (shakeOnFail) {
                triggerShake(input);
            }
            return false;
        }
    }

    if (phoneInput) {
        phoneInput.addEventListener('input', () => {
            validateField(phoneInput, phoneRegex, 'Numéro de téléphone invalide.', false);
        });
        phoneInput.addEventListener('blur', () => {
            validateField(phoneInput, phoneRegex, 'Numéro de téléphone invalide.', true);
        });
    }

    if (emailInput) {
        emailInput.addEventListener('input', () => {
            validateField(emailInput, emailRegex, 'Adresse e-mail invalide.', false);
        });
        emailInput.addEventListener('blur', () => {
            validateField(emailInput, emailRegex, 'Adresse e-mail invalide.', true);
        });
    }

    if (bookingForm) {
        const originalOnSubmit = bookingForm.onsubmit;
        bookingForm.onsubmit = function(event) {
            let isValid = true;
            if (phoneInput) {
                const isPhoneValid = validateField(phoneInput, phoneRegex, 'Numéro de téléphone invalide.', true);
                if (!isPhoneValid) isValid = false;
            }
            if (emailInput) {
                const isEmailValid = validateField(emailInput, emailRegex, 'Adresse e-mail invalide.', true);
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

html = html.replace(jsRegex, newJS);
fs.writeFileSync('index.html', html);
console.log('Fixed UI validation');
