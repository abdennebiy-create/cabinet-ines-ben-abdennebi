import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace from `const phone = "21655211116";` up to `      }` (end of finally)
match = re.search(r'      const phone = "21655211116";.*?      \} finally \{.*?      \}\n    \}', content, re.DOTALL)
if match:
    old_code = match.group(0)
    new_code = r'''      try {
        const response = await fetch('/api/send-telegram', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: fallbackMsg })
        });
        const data = await response.json();
        
        if (!response.ok || (!data.success && !data.warning)) {
          throw new Error(data.error || "Erreur Telegram");
        }

        alert(alertMsg);
        form.reset();
        closeModal('bookingModal');
        if (typeof checkUnlockStatus === 'function') checkUnlockStatus();
      } catch (err) {
        console.error("Form submission error:", err);
        const errorAlerts = {
          fr: "Erreur lors de la transmission. Veuillez réessayer plus tard.",
          ar: "حدث خطأ أثناء الإرسال. يرجى المحاولة لاحقاً.",
          en: "Error during submission. Please try again later.",
          es: "Error durante el envío. Por favor, inténtelo de nuevo más tarde."
        };
        alert(errorAlerts[typeof currentLang !== 'undefined' ? currentLang : 'fr']);
      } finally {
        isFormSubmitting = false;
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText || '<i class="fa-solid fa-paper-plane"></i> <span data-i18n="btn_send">CONFIRMER LA DEMANDE</span>';
        }
      }
    }'''
    content = content.replace(old_code, new_code)
else:
    print("Could not find the block via regex!")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
