const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const jsToInsert = `
<script>
// --- Real-time Validation Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.getElementById('bookingPhone');
    const emailInput = document.getElementById('bookingEmail');
    const phoneMsg = document.getElementById('phone-msg');
    const emailMsg = document.getElementById('email-msg');
    const bookingForm = document.querySelector('form[name="rendez-vous"]');

    // Phone validation regex (accepts digits, spaces, dots, dashes, plus sign)
    const phoneRegex = /^\\+?[0-9][0-9\\s.-]{7,16}$/;
    
    // Standard Email regex
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

    function validateField(input, regex, msgElement, errorText) {
        if (!input || !msgElement) return false;
        
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
</script>
`;

html = html.replace('</body>', jsToInsert + '\\n</body>');

fs.writeFileSync('index.html', html);
console.log("Validation JS added.");
