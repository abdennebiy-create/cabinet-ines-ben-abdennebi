import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_block = r'''      const phone = "21655211116";
      const waUrl = `${buildWhatsAppUrl(phone, fallbackMsg)}`;
      try {
        const formData = new FormData(form);
        const response = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString()
        });
        
        if (!response.ok) throw new Error("Network response was not ok.");

        alert(alertMsg);
        form.reset();
        closeModal('bookingModal');
      } catch (err) {
        console.warn("Form submission error, opening WhatsApp directly:", err);
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
      }'''

new_block = r'''      try {
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
      } catch (err) {
        console.error("Form submission error:", err);
        const errorAlerts = {
          fr: "Erreur lors de la transmission. Veuillez réessayer plus tard.",
          ar: "حدث خطأ أثناء الإرسال. يرجى المحاولة لاحقاً.",
          en: "Error during submission. Please try again later.",
          es: "Error durante el envío. Por favor, inténtelo de nuevo más tarde."
        };
        alert(errorAlerts[currentLang] || errorAlerts.fr);
      } finally {
        isFormSubmitting = false;
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      }'''

if old_block in content:
    content = content.replace(old_block, new_block)
else:
    print("Could not find the try-catch block to replace!")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
