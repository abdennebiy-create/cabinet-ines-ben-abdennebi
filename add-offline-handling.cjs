const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const offlineBanner = `<body>
  <div id="offline-banner" style="display: none; position: fixed; top: 0; left: 0; width: 100%; background-color: #e74c3c; color: white; text-align: center; padding: 12px; font-weight: 600; font-size: 0.95rem; z-index: 10000; box-shadow: 0 4px 10px rgba(0,0,0,0.2); transition: transform 0.3s ease;">
    <i class="fa-solid fa-wifi-slash" style="margin-right: 8px;"></i> <span id="offline-text">Connexion interrompue. Vérifiez votre réseau pour continuer.</span>
  </div>
  <script>
    window.addEventListener('offline', () => {
      const banner = document.getElementById('offline-banner');
      if (banner) {
        banner.style.display = 'block';
        // Language adaptation
        const lang = (window.AIEngine && window.AIEngine.state && window.AIEngine.state.lang) || (typeof currentLang !== 'undefined' ? currentLang : 'fr');
        const textEl = document.getElementById('offline-text');
        if (textEl) {
          if (lang === 'ar') textEl.innerText = 'انقطع الاتصال. يرجى التحقق من الشبكة للمتابعة.';
          else if (lang === 'en') textEl.innerText = 'Connection lost. Please check your network to continue.';
          else if (lang === 'es') textEl.innerText = 'Conexión interrumpida. Comprueba tu red para continuar.';
          else textEl.innerText = 'Connexion interrompue. Vérifiez votre réseau pour continuer.';
        }
      }
    });
    window.addEventListener('online', () => {
      const banner = document.getElementById('offline-banner');
      if (banner) banner.style.display = 'none';
      
      // If AI was thinking, the fetch likely failed and triggered local fallback.
      // We don't need to do anything specific here, but the user is informed.
    });
  </script>`;

html = html.replace(/<body>/, offlineBanner);

fs.writeFileSync('index.html', html);
