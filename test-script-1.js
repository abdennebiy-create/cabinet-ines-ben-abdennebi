
    function toggleAIDrawer() {
      const drawer = document.getElementById('aiSuggestionsDrawer');
      if (drawer) drawer.classList.toggle('active');
    }

    // Auto close AI drawer when tapping outside on desktop or mobile
    document.addEventListener('click', function(event) {
      const drawer = document.getElementById('aiSuggestionsDrawer');
      const trigger = document.getElementById('aiFloatingTrigger');
      if (drawer && drawer.classList.contains('active')) {
        if (!drawer.contains(event.target) && (!trigger || !trigger.contains(event.target))) {
          drawer.classList.remove('active');
        }
      }
    });

    function handleChipClick(type) {
      toggleAIDrawer();
      if (type === 'whatsapp') {
        const infoMessages = {
          fr: "Bonjour, je souhaite des informations sur les consultations au cabinet de nutrition.",
          ar: "مرحباً، أود الحصول على معلومات حول الاستشارات في عيادة التغذية.",
          en: "Hello, I would like more information regarding consultations at the nutrition clinic.",
          es: "Hola, deseo más información sobre las consultas en la clínica de nutrición."
        };
        const msg = encodeURIComponent(infoMessages[currentLang] || infoMessages.fr);
        const phone = typeof WHATSAPP_NUMBER !== 'undefined' ? WHATSAPP_NUMBER : "21622841841";
        window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
      }
    }
  