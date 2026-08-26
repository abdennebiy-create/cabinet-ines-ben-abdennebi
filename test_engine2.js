var window = {QUIZ_DATA: {}};
const AIEngine = {
      state: {
        turn: 1,
        history: [],
        previousSelection: '',
        target: null, // 'moi', 'enfant', 'parent'
        track: 'weight',
        sex: null,
        age: null,
        profileAnswer: null,
        biometrics: {
          metabolic_score: 42,
          digestive_load: 38,
          endocrine_strain: 45
        },
        isComplete: false,
        finalDossier: null,
        isLoading: false
      },

      init() {
        this.renderInitialTurn();
      },

      async handleOptionClick(optionText, cardEl) {
        if (this.state.isLoading) return;
        this.state.isLoading = true;

        const QD = window.QUIZ_DATA;

        // TURN 1: Detect TARGET (Moi, Enfant, Parent)
        if (this.state.turn === 1 && QD) {
          const lang = this.state.lang || 'fr';
          const opts = QD.targets[lang].options;
          const idx = opts.indexOf(optionText);
          if (idx === 1) this.state.target = 'enfant';
          else if (idx === 2) this.state.target = 'parent';
          else this.state.target = 'moi';
        }

        // TURN 2: Extract sex + age from combined profile option
        if (this.state.turn === 2) {
          let selLower = (optionText || '').toLowerCase();
          if (selLower.includes('femme') || selLower.includes('fille') || selLower.includes('أنثى') || selLower.includes('بنت') || selLower.includes('female') || selLower.includes('girl') || selLower.includes('mujer') || selLower.includes('niña')) {
            this.state.sex = 'female';
          } else if (selLower.includes('homme') || selLower.includes('garçon') || selLower.includes('ذكر') || selLower.includes('ولد') || selLower.includes('male') || selLower.includes('boy') || selLower.includes('hombre') || selLower.includes('niño') || selLower.includes('رجل')) {
            this.state.sex = 'male';
          }
          this.state.profileAnswer = optionText;
          
          if (this.state.target === 'enfant') this.state.track = 'pediatric';
          if (this.state.target === 'parent') this.state.track = 'senior';
        }

        // TURN 3: Detect track from 8 adult archetypes (only if target == 'moi')
        if (this.state.turn === 3 && this.state.target === 'moi' && QD) {
          const lang = this.state.lang || 'fr';
          const archetypes = QD.archetypes[lang] || QD.archetypes.fr;
          const idx = archetypes.indexOf(optionText);
          if (idx >= 0 && QD.trackIds[idx]) {
            this.state.track = QD.trackIds[idx];
          } else {
            // Default fallback
            this.state.track = 'weight';
          }
        }


        // Interactive visual tap feedback
        if (cardEl) {
          cardEl.classList.add('selected-tap');
          const arrow = cardEl.querySelector('.ai-option-arrow');
          if (arrow) arrow.innerHTML = '<i class="fa-solid fa-check"></i>';

          const siblings = cardEl.parentElement ? cardEl.parentElement.querySelectorAll('.ai-option-card') : [];
          siblings.forEach(sib => {
            if (sib !== cardEl) sib.classList.add('faded-out');
          });
        }

        this.state.previousSelection = optionText;
        this.state.history.push({
          turn: this.state.turn,
          selection: optionText
        });

        // 300ms tactile delay before smooth transition
        await new Promise(r => setTimeout(r, 300));

        const stage = document.getElementById('aiStage');
        if (stage) stage.classList.add('stage-fade-out');

        await new Promise(r => setTimeout(r, 250));
        this.renderLoadingState();

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);

        try {
          const response = await fetch('/api/ai-diagnostic-engine', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            signal: controller.signal,
            body: JSON.stringify({
              turn: this.state.turn,
              previous_selection: optionText,
              history: this.state.history,
              track: this.state.track,
              lang: this.state.lang || (typeof currentLang !== 'undefined' ? currentLang : 'fr')
            })
          });

          clearTimeout(timeoutId);

          if (!response.ok) {
            throw new Error('API Response Error ' + response.status);
          }

          const data = await response.json();
          this.state.turn = data.current_turn;
          this.state.biometrics = data.biometric_updates || this.state.biometrics;
          this.state.isComplete = data.is_complete;
          this.state.finalDossier = data.final_results || data.final_dossier;

          await new Promise(r => setTimeout(r, 150));
          
          this.state.isLoading = false;
          if (this.state.turn === 3 && this.state.target === 'moi') {
            this.renderChipsTurn('archetypes', 3);
          } else {
            this.renderTurnData(data);
          }

        } catch (err) {
          clearTimeout(timeoutId);
          console.warn('Backend API fallback triggered (network/timeout):', err);
          const nextTurn = this.state.turn + 1;
          const fallbackData = this.getFallbackTurnData(optionText, nextTurn, this.state.track);
          
          this.state.turn = fallbackData.current_turn;
          this.state.biometrics = fallbackData.biometric_updates || this.state.biometrics;
          this.state.isComplete = fallbackData.is_complete;
          this.state.finalDossier = fallbackData.final_results || fallbackData.final_dossier;
          this.state.isLoading = false;
          
          if (fallbackData.current_turn === 3 && this.state.target === 'moi') {
            this.renderChipsTurn('archetypes', 3);
          } else {
            this.renderTurnData(fallbackData);
          }
        }
      },

      // ================================================================
      // NEW DATA-DRIVEN FALLBACK ENGINE — 5 Steps, 10 Archetypes
      // Step 1: Archetype → Step 2: Profile → Step 3: Clinical → Step 4: Adaptive → Step 5: Dossier
      // ================================================================
      getFallbackTurnData(optionText, turn, currentTrack) {
        const QD = window.QUIZ_DATA;
        const lang = this.state.lang || (typeof currentLang !== 'undefined' ? currentLang : 'fr');
        const track = currentTrack || this.state.track || 'weight';
        this.state.track = track;

        // Helper: lookup data from QUIZ_DATA with fallback chain
        const lookup = (section, trk, lng) => {
          if (!QD || !QD[section]) return null;
          const trackData = QD[section][trk || track];
          if (!trackData) return null;
          return trackData[lng || lang] || trackData['fr'] || null;
        };

        // ============================================
        // STEP 2: PROFILE (Sex + Age combined)
        // ============================================
        if (turn === 2) {
          let profileTrack = 'weight';
          if (this.state.target === 'enfant') profileTrack = 'pediatric';
          if (this.state.target === 'parent') profileTrack = 'senior';
          
          const data = lookup('profiles', profileTrack, lang);
          if (data) {
            return {
              empathy_insight: data.empathy,
              dynamic_question: data.question,
              tap_options: data.options,
              generated_tap_options: data.options,
              biometric_updates: { metabolic_score: 48, digestive_load: 42, endocrine_strain: 50 },
              current_turn: 2,
              is_complete: false
            };
          }
        }

        // ============================================
        // STEP 3: ARCHETYPE (Adults only)
        // ============================================
        if (turn === 3) {
          if (this.state.target !== 'moi') {
            // Skip Archetype turn for kids/seniors -> go to turn 4 immediately
            return this.getFallbackTurnData(optionText, 4, track);
          }
          
          return {
            empathy_insight: "", // Handled by renderChipsTurn
            dynamic_question: "",
            tap_options: [],
            generated_tap_options: [],
            biometric_updates: { metabolic_score: 55, digestive_load: 48, endocrine_strain: 52 },
            current_turn: 3,
            is_complete: false
          };
        }

        // ============================================
        // STEP 4: CLINICAL QUESTION (main probe)
        // ============================================
        if (turn === 4) {
          const data = lookup('clinical', track, lang);
          if (data) {
            return {
              empathy_insight: data.empathy,
              dynamic_question: data.question,
              tap_options: data.options,
              generated_tap_options: data.options,
              biometric_updates: { metabolic_score: 62, digestive_load: 56, endocrine_strain: 64 },
              current_turn: 4,
              is_complete: false
            };
          }
        }

        // ============================================
        // STEP 5: SMART ADAPTIVE FOLLOW-UP (keyword-branched)
        // ============================================
        if (turn === 5) {
          const adaptiveSection = QD && QD.adaptive && QD.adaptive[track];
          const langData = adaptiveSection && (adaptiveSection[lang] || adaptiveSection['fr']);
          
          if (langData) {
            const selLower = (optionText || '').toLowerCase();
            let matched = null;

            // Try to match keywords from the previous answer
            for (const keyword of Object.keys(langData)) {
              if (keyword !== 'default' && selLower.includes(keyword)) {
                matched = langData[keyword];
                break;
              }
            }

            // Fallback to default
            if (!matched) matched = langData['default'];

            if (matched) {
              return {
                empathy_insight: matched.empathy,
                dynamic_question: matched.question,
                tap_options: matched.options,
                generated_tap_options: matched.options,
                biometric_updates: { metabolic_score: 78, digestive_load: 72, endocrine_strain: 80 },
                current_turn: 5,
                is_complete: false
              };
            }
          }
        }

        // ============================================
        // STEP 6: FINAL CLINICAL DOSSIER
        // ============================================
        if (turn >= 6) {
          const dossierData = lookup('dossier', track, lang);
          
          let headline, realities, timeline;
          if (dossierData) {
            headline = dossierData.headline;
            realities = dossierData.realities;
            timeline = { days_14: dossierData.timeline.j14, day_30: dossierData.timeline.j30, day_90: dossierData.timeline.j90 };
          } else {
            // Ultimate fallback
            headline = "Votre bilan clinique personnalisé est prêt";
            realities = [
              "Votre métabolisme s'est adapté aux restrictions passées — il est temps de le relancer.",
              "Vos symptômes reflètent des déséquilibres précis identifiables et corrigibles.",
              "La nutrition clinique ciblée est votre levier le plus puissant pour transformer votre santé."
            ];
            timeline = { days_14: "Premiers signes d'amélioration.", day_30: "Stabilisation biologique.", day_90: "Transformation durable." };
          }

          // Build smart WhatsApp message with FULL patient dossier
          const trackLabels = {
            weight: 'Perte de Poids', tca: 'TCA & Compulsions', digestive: 'Confort Digestif',
            hormonal: 'Équilibre Hormonal', diabetes: 'Diabète & Insuline', fatigue: 'Fatigue & Stress',
            pregnancy: 'Grossesse', pediatric: 'Nutrition Pédiatrique', senior: 'Senior & Longévité',
            metabolic: 'Maladies Métaboliques'
          };
          const trackLabel = trackLabels[track] || track;
          
          let waHeader = lang === 'ar' ? 'مرحباً أستاذة إيناس' : lang === 'en' ? 'Hello Inès' : lang === 'es' ? 'Hola Inès' : 'Bonjour Inès';
          let waIntro = lang === 'ar' ? `أتممت التقييم السريري (${trackLabel}) على موقعك.` : lang === 'en' ? `I completed the clinical assessment (${trackLabel}) on your website.` : lang === 'es' ? `He completado la evaluación clínica (${trackLabel}) en su sitio web.` : `J'ai complété le bilan clinique (${trackLabel}) sur votre site.`;

          let waResponses = '';
          this.state.history.forEach((item, i) => {
            waResponses += `\n• Étape ${item.turn}: ${item.selection}`;
          });

          let waFooter = lang === 'ar' ? 'أود حجز استشارة في عيادة رادس.' : lang === 'en' ? 'I would like to book a consultation at the Radès clinic.' : lang === 'es' ? 'Deseo reservar una consulta en la clínica de Radès.' : 'Je souhaite prendre rendez-vous au cabinet de Radès.';

          const waMsg = `${waHeader},\n\n${waIntro}\n\n📋 DOSSIER PATIENT:${waResponses}\n\n🏥 ${waFooter}`;

          let insightMsg = "Bilan complété avec succès. Votre profil clinique est intégralement modélisé.";
          if (lang === 'ar') insightMsg = "تم إتمام التقييم السريري بنجاح. ملفك الأيضي جاهز بالكامل.";
          else if (lang === 'en') insightMsg = "Assessment completed successfully. Your clinical profile is fully modeled.";
          else if (lang === 'es') insightMsg = "Evaluación completada con éxito. Su perfil clínico está completamente modelado.";

          return {
            empathy_insight: insightMsg,
            dynamic_question: "",
            tap_options: [],
            generated_tap_options: [],
            biometric_updates: { metabolic_score: 92, digestive_load: 88, endocrine_strain: 94 },
            current_turn: 6,
            is_complete: true,
            final_results: {
              headline,
              the_3_realities: realities,
              transformation_timeline: timeline,
              whatsapp_message: waMsg,
              whatsapp_message_encoded: waMsg
            }
          };
        }

        // Fallback for unexpected turns
        return {
          empathy_insight: "Analyse en cours...",
          dynamic_question: "Comment souhaitez-vous être accompagné(e) ?",
          tap_options: ["🌿 Consultation personnalisée", "📊 Bilan approfondi", "⚡ Plan d'action immédiat", "💬 En savoir plus"],
          generated_tap_options: ["🌿 Consultation personnalisée", "📊 Bilan approfondi", "⚡ Plan d'action immédiat", "💬 En savoir plus"],
          biometric_updates: { metabolic_score: 60, digestive_load: 55, endocrine_strain: 58 },
          current_turn: turn,
          is_complete: false
        };
      },

      updateHUD(biometrics, turn) {
        const turnText = document.getElementById('aiTurnText') || document.getElementById('aiTurnBadge');
        const progressFill = document.getElementById('aiProgressFill');
        const lang = this.state.lang || (typeof currentLang !== 'undefined' ? currentLang : 'fr');
        const totalSteps = this.state.target === 'moi' ? 6 : (this.state.target ? 5 : 6);
        const currentTurn = turn || 1;
        const percent = Math.min(100, Math.round((currentTurn / totalSteps) * 100));

        if (turnText) {
          if (lang === 'ar') {
            turnText.textContent = currentTurn >= totalSteps 
              ? `المرحلة ${totalSteps} من ${totalSteps} • تقييمك المخصص جاهز!` 
              : `المرحلة ${currentTurn} من ${totalSteps} • يتم إعداد تقييمك المخصص`;
          } else if (lang === 'en') {
            turnText.textContent = currentTurn >= totalSteps 
              ? `Step ${totalSteps} of ${totalSteps} • Your personalized assessment is ready!` 
              : `Step ${currentTurn} of ${totalSteps} • Preparing your personalized assessment`;
          } else if (lang === 'es') {
            turnText.textContent = currentTurn >= totalSteps 
              ? `Paso ${totalSteps} de ${totalSteps} • ¡Su evaluación personalizada está lista!` 
              : `Paso ${currentTurn} de ${totalSteps} • Preparando su evaluación personalizada`;
          } else {
            turnText.textContent = currentTurn >= totalSteps 
              ? `Étape ${totalSteps} sur ${totalSteps} • Votre bilan personnalisé est prêt !` 
              : `Étape ${currentTurn} sur ${totalSteps} • Votre bilan personnalisé se prépare`;
          }
        }
        if (progressFill) {
          progressFill.style.width = `${percent}%`;
        }
      },

      setLanguage(lang) {
        this.state.lang = lang || 'fr';
        if (this.state.turn <= 1 && this.state.history.length === 0) {
          this.renderInitialTurn();
        } else if (!this.state.isComplete) {
          const data = this.getFallbackTurnData(this.state.previousSelection, this.state.turn, this.state.track);
          if (this.state.turn === 3 && this.state.target === 'moi') {
            this.renderChipsTurn('archetypes', 3);
          } else {
            this.renderTurnData(data);
          }
        } else if (this.state.isComplete) {
          const data = this.getFallbackTurnData(this.state.previousSelection, 6, this.state.track);
          this.renderDossier(data.final_results || this.state.finalDossier || this.state.finalResults);
        }
      },

      renderChipsTurn(type, turnIndex) {
        const QD = window.QUIZ_DATA;
        const lang = this.state.lang || (typeof currentLang !== 'undefined' ? currentLang : 'fr');
        const stage = document.getElementById('aiStage');
        if (!stage) return;

        let insight, q, allOpts;
        if (type === 'targets') {
          const tData = (QD && QD.targets) ? (QD.targets[lang] || QD.targets.fr) : null;
          if (tData) {
            insight = tData.insight;
            q = tData.question;
            allOpts = tData.options;
          } else {
            insight = "Bienvenue au Cabinet de Nutrition Inès Ben Abdennebi.";
            q = "Pour qui souhaitez-vous réaliser ce bilan ?";
            allOpts = ["👤 Pour moi-même", "🧒 Pour mon enfant", "👵 Pour un parent"];
          }
        } else if (type === 'archetypes') {
          const welcomeData = (QD && QD.welcome) ? (QD.welcome[lang] || QD.welcome.fr) : null;
          insight = welcomeData ? welcomeData.insight : "Sélectionnez votre axe de santé principal.";
          q = welcomeData ? welcomeData.question : "Quel axe de santé souhaitez-vous explorer ?";
          allOpts = (QD && QD.archetypes) ? (QD.archetypes[lang] || QD.archetypes.fr) : [];
        }

        const makeChip = (opt) => {
          const escapedOpt = opt.replace(/'/g, "\\'");
          return `<div class="ai-option-chip" role="button" tabindex="0" onclick="AIEngine.handleOptionClick('${escapedOpt}', this)" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();AIEngine.handleOptionClick('${escapedOpt}', this);}">
            <span class="ai-option-text">${opt}</span>
          </div>`;
        };

        let chipsHtml = '';
        allOpts.forEach(opt => {
          if (opt) chipsHtml += makeChip(opt);
        });

        this.updateHUD(this.state.biometrics, turnIndex);

        stage.className = 'ai-stage stage-slide-in';
        stage.innerHTML = `
          <div class="ai-empathy-box">
            <div class="ai-empathy-icon"><i class="fa-solid fa-heart-pulse"></i></div>
            <div class="ai-empathy-text">${insight}</div>
          </div>
          <h2 class="ai-question-title">${q}</h2>
          <div class="ai-archetype-chips">${chipsHtml}</div>
        `;
      },

      renderInitialTurn() {
        this.renderChipsTurn('targets', 1);
      },
      renderLoadingState() {
        const stage = document.getElementById('aiStage');
        if (!stage) return;
        const lang = this.state.lang || (typeof currentLang !== 'undefined' ? currentLang : 'fr');
        let loadingText = "Préparation de votre bilan personnalisé...";
        if (lang === 'ar') loadingText = "جاري إعداد تقييمك المخصص...";
        else if (lang === 'en') loadingText = "Preparing your personalized assessment...";
        else if (lang === 'es') loadingText = "Preparando su evaluación personalizada...";

        stage.className = 'ai-stage stage-slide-in';
        stage.innerHTML = `
          <div class="ai-loading-box">
            <div class="ai-spinner" style="border-top-color: #10b981;"></div>
            <div class="ai-loading-text" style="color: var(--text-dark-rose); font-weight: 600;">
              ${loadingText}
            </div>
          </div>
        `;
      },

      goBack() {
        if (this.state.history.length > 0) {
          this.state.history.pop();
          this.state.turn = Math.max(1, this.state.turn - 1);
          this.state.isComplete = false;
          this.state.finalDossier = null;
          
          if (this.state.turn === 1 || this.state.history.length === 0) {
            this.state.history = [];
            this.state.turn = 1;
            this.state.previousSelection = '';
            this.renderInitialTurn();
          } else {
            const lastEntry = this.state.history[this.state.history.length - 1];
            this.state.previousSelection = lastEntry ? lastEntry.selection : '';
            const data = this.getFallbackTurnData(this.state.previousSelection, this.state.turn, this.state.track);
            this.renderTurnData(data);
          }
        }
      },

      renderTurnData(data) {
        this.updateHUD(data.biometric_updates || this.state.biometrics, data.current_turn);

        const finalDossier = data.final_results || data.final_dossier;
        if (data.is_complete && finalDossier) {
          this.renderDossier(finalDossier);
          return;
        }

        const stage = document.getElementById('aiStage');
        if (!stage) return;
        const lang = this.state.lang || (typeof currentLang !== 'undefined' ? currentLang : 'fr');

        let restartText = "Recommencer le diagnostic";
        let backText = "Question précédente";
        if (lang === 'ar') {
          restartText = "إعادة التقييم من البداية";
          backText = "السؤال السابق";
        } else if (lang === 'en') {
          restartText = "Restart assessment";
          backText = "Previous question";
        } else if (lang === 'es') {
          restartText = "Reiniciar diagnóstico";
          backText = "Pregunta anterior";
        }

        const isRtl = lang === 'ar';
        const backIcon = isRtl ? 'fa-arrow-right' : 'fa-arrow-left';

        let backButtonHtml = '';
        if (data.current_turn > 1) {
          backButtonHtml = `
            <div style="display: flex; justify-content: flex-start; margin-bottom: 1.25rem;">
              <button class="ai-back-btn" onclick="AIEngine.goBack()" style="background: rgba(244, 227, 229, 0.6); border: 1.5px solid var(--accent-mauve); border-radius: var(--radius-pill); padding: 0.45rem 1.1rem; font-size: 0.84rem; font-weight: 600; color: var(--text-dark-rose); cursor: pointer; display: inline-flex; align-items: center; gap: 0.45rem; transition: all 0.3s ease; box-shadow: 0 4px 12px rgba(92, 60, 67, 0.05);">
                <i class="fa-solid ${backIcon}"></i> ${backText}
              </button>
            </div>
          `;
        }

        const options = data.tap_options || data.generated_tap_options || [];
        let optionsHtml = '';
        options.forEach(opt => {
          const escapedOpt = opt.replace(/'/g, "\\'");
          optionsHtml += `
            <div class="ai-option-card" role="button" tabindex="0" onclick="AIEngine.handleOptionClick('${escapedOpt}', this)" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();AIEngine.handleOptionClick('${escapedOpt}', this);}">
              <span class="ai-option-text">${opt}</span>
              <div class="ai-option-arrow"><i class="fa-solid fa-chevron-right"></i></div>
            </div>
          `;
        });

        stage.className = 'ai-stage stage-slide-in';
        stage.innerHTML = `
          ${backButtonHtml}
          <div class="ai-empathy-box">
            <div class="ai-empathy-icon"><i class="fa-solid fa-heart-pulse"></i></div>
            <div class="ai-empathy-text">${data.empathy_insight || "Votre biologie métabolique réagit précisément."}</div>
          </div>

          <h2 class="ai-question-title">${data.dynamic_question}</h2>

          <div class="ai-options-grid">
            ${optionsHtml}
          </div>

          <div style="text-align: center;">
            <button class="ai-restart-btn" onclick="AIEngine.reset()">
              <i class="fa-solid fa-rotate-left"></i> ${restartText}
            </button>
          </div>
        `;

        // Smooth mobile auto-centering on active question
        if (window.innerWidth < 768) {
          setTimeout(() => {
            const stageEl = document.getElementById('aiStage');
            if (stageEl) {
              stageEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }, 100);
        }
      },

      renderDossier(dossier) {
        const stage = document.getElementById('aiStage');
        if (!stage) return;
        const lang = this.state.lang || (typeof currentLang !== 'undefined' ? currentLang : 'fr');

        const headline = dossier.headline || dossier.user_headline || "Pourquoi votre corps stocke les graisses au lieu de les brûler";
        const realities = dossier.the_3_realities || [
          "Votre déjeuner manque de carburant dense, ce qui force votre cerveau à réclamer du sucre à 20h00.",
          "Vos régimes passés ont forcé votre métabolisme à tourner au ralenti pour économiser l'énergie.",
          "Votre gonflement du soir est une digestion lente facilement réversible, pas de la graisse."
        ];
        const timeline = dossier.transformation_timeline || {
          days_14: "Baisse de l'inflammation et regain d'énergie.",
          day_30: "Amélioration corporelle et légèreté.",
          day_90: "Normalisation métabolique durable."
        };

        const defaultWaMessages = {
          fr: "Bonjour Inès, je viens de terminer mon bilan sur votre site et je souhaite réserver ma consultation personnalisée à Radès.",
          ar: "مرحباً إيناس، لقد أتممت للتو التقييم الأيضي عبر موقعك وأود حجز استشارتي الفردية في عيادة رادس.",
          en: "Hello Inès, I have just completed my assessment on your website and would like to book my personalized consultation in Radès.",
          es: "Hola Inès, acabo de completar mi evaluación en su sitio web y deseo reservar mi consulta personalizada en Radès."
        };
        const defaultWaMsg = defaultWaMessages[lang] || defaultWaMessages.fr;
        const waMsg = dossier.whatsapp_message_encoded || dossier.whatsapp_message || defaultWaMsg;

        // Internationalized labels
        let badgeLabel = "VOTRE BILAN NUTRITIONNEL & SYNTHÈSE";
        let realitiesTitle = "Les 3 Clés Identifiées pour Votre Corps";
        let realityPrefix = "Réalité Biologique 0";
        let timelineTitle = "Votre Évolution Attendue";
        let day14Label = "🌱 14 Premiers Jours";
        let day30Label = "🚀 30 Jours";
        let day90Label = "✨ 90 Jours";
        let bookingTitle = "Prêt(e) à démarrer votre suivi ?";
        let bookingSub = "Votre bilan personnalisé est prêt. Transmettez-le au cabinet pour finaliser votre rendez-vous.";
        let bookingBtn = "ENVOYER MON BILAN & PRENDRE RENDEZ-VOUS";
        let restartBtn = "Recommencer le test";

        if (lang === 'ar') {
          badgeLabel = "تقرير التقييم الغذائي والخطة السريرية";
          realitiesTitle = "المؤشرات الثلاثة الأساسية لجسمك";
          realityPrefix = "التحليل الحيوي 0";
          timelineTitle = "مسار التحول الصحي المتوقع";
          day14Label = "🌱 أول 14 يوماً";
          day30Label = "🚀 30 يوماً";
          day90Label = "✨ 90 يوماً";
          bookingTitle = "هل أنت مستعد لبدء خطتك العلاجية؟";
          bookingSub = "تم إعداد تقييمك المخصص. أرسله إلى العيادة لتأكيد موعد استشارتك.";
          bookingBtn = "إرسال التقرير وتأكيد الموعد بالعيادة";
          restartBtn = "إعادة التقييم";
        } else if (lang === 'en') {
          badgeLabel = "YOUR CLINICAL NUTRITION ASSESSMENT";
          realitiesTitle = "The 3 Key Insights Identified for Your Body";
          realityPrefix = "Biological Insight 0";
          timelineTitle = "Your Expected Transformation Timeline";
          day14Label = "🌱 First 14 Days";
          day30Label = "🚀 30 Days";
          day90Label = "✨ 90 Days";
          bookingTitle = "Ready to begin your personalized care?";
          bookingSub = "Your personalized assessment is ready. Submit it to the clinic to finalize your consultation.";
          bookingBtn = "SUBMIT MY ASSESSMENT & BOOK CONSULTATION";
          restartBtn = "Restart assessment";
        } else if (lang === 'es') {
          badgeLabel = "SU EVALUACIÓN NUTRICIONAL Y SÍNTESIS";
          realitiesTitle = "Las 3 Claves Identificadas para su Cuerpo";
          realityPrefix = "Realidad Biológica 0";
          timelineTitle = "Su Evolución Esperada";
          day14Label = "🌱 Primeros 14 Días";
          day30Label = "🚀 30 Días";
          day90Label = "✨ 90 Días";
          bookingTitle = "¿Listo/a para comenzar su seguimiento?";
          bookingSub = "Su evaluación personalizada está lista. Envíela a la clínica para finalizar su cita.";
          bookingBtn = "ENVIAR MI EVALUACIÓN Y RESERVAR CITA";
          restartBtn = "Reiniciar evaluación";
        }

        let realitiesHtml = '';
        realities.forEach((real, idx) => {
          realitiesHtml += `
            <div style="background: #ffffff; border: 1.5px solid rgba(232, 198, 200, 0.85); border-radius: 1.25rem; padding: 1.5rem; box-shadow: 0 8px 25px rgba(92, 60, 67, 0.05); display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="font-family: 'Inter', sans-serif; font-size: 0.82rem; font-weight: 700; color: var(--text-dark-rose); text-transform: uppercase; margin-bottom: 0.6rem;">
                  <i class="fa-solid fa-circle-dot" style="color: var(--accent-mauve); margin-right: 0.4rem;"></i> ${realityPrefix}${idx + 1}
                </div>
                <p style="font-size: 0.95rem; color: var(--text-main); line-height: 1.55; font-weight: 500;">
                  "${real}"
                </p>
              </div>
            </div>
          `;
        });

        stage.className = 'ai-stage stage-slide-in';
        stage.innerHTML = `
          <div class="ai-dossier-card">
            <div class="ai-dossier-header" style="background: linear-gradient(135deg, #fbf5f6 0%, #f4e3e5 100%); border: 1.5px solid #c49da5; border-radius: 1.5rem; padding: 2.25rem 1.75rem; text-align: center; margin-bottom: 2rem;">
              <span class="ai-dossier-badge" style="background: rgba(196, 157, 165, 0.25); border: 1px solid #c49da5; color: var(--text-dark-rose);"><i class="fa-solid fa-clipboard-check"></i> ${badgeLabel}</span>
              <h2 class="ai-dossier-archetype" style="font-family: 'Playfair Display', serif; font-size: 1.9rem; color: var(--text-dark-rose); font-weight: 600; margin-top: 0.75rem; line-height: 1.3;">${headline}</h2>
            </div>

            <!-- Les 3 Réalités Biologiques -->
            <div style="margin-bottom: 2.5rem;">
              <h3 style="font-family: 'Playfair Display', serif; font-size: 1.35rem; color: var(--text-dark-rose); margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.6rem;">
                <i class="fa-solid fa-dna" style="color: var(--accent-mauve);"></i>
                ${realitiesTitle}
              </h3>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem;">
                ${realitiesHtml}
              </div>
            </div>

            <!-- Chronologie de Transformation -->
            <div style="background: #ffffff; border: 1.5px solid rgba(232, 198, 200, 0.85); border-radius: 1.5rem; padding: 2rem; margin-bottom: 2.5rem; box-shadow: 0 10px 30px rgba(92, 60, 67, 0.05);">
              <h3 style="font-family: 'Playfair Display', serif; font-size: 1.35rem; color: var(--text-dark-rose); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.6rem;">
                <i class="fa-solid fa-arrow-trend-up" style="color: var(--accent-mauve);"></i>
                ${timelineTitle}
              </h3>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.25rem;">
                <div style="background: #fbf5f6; border-inline-start: 4px solid #c49da5; border-radius: 1rem; padding: 1.25rem;">
                  <div style="font-family: 'Inter', sans-serif; font-size: 0.8rem; font-weight: 700; color: var(--text-dark-rose); text-transform: uppercase;">${day14Label}</div>
                  <p style="font-size: 0.93rem; color: var(--text-main); margin-top: 0.5rem; line-height: 1.5;">${timeline.days_14}</p>
                </div>
                <div style="background: #fbf5f6; border-inline-start: 4px solid #e8c6c8; border-radius: 1rem; padding: 1.25rem;">
                  <div style="font-family: 'Inter', sans-serif; font-size: 0.8rem; font-weight: 700; color: var(--text-dark-rose); text-transform: uppercase;">${day30Label}</div>
                  <p style="font-size: 0.93rem; color: var(--text-main); margin-top: 0.5rem; line-height: 1.5;">${timeline.day_30}</p>
                </div>
                <div style="background: #fbf5f6; border-inline-start: 4px solid #5c3c43; border-radius: 1rem; padding: 1.25rem;">
                  <div style="font-family: 'Inter', sans-serif; font-size: 0.8rem; font-weight: 700; color: var(--text-dark-rose); text-transform: uppercase;">${day90Label}</div>
                  <p style="font-size: 0.93rem; color: var(--text-main); margin-top: 0.5rem; line-height: 1.5;">${timeline.day_90}</p>
                </div>
              </div>
            </div>

            <!-- Emotional VIP Conclusion -->
            <div style="background: linear-gradient(135deg, rgba(196, 157, 165, 0.15) 0%, rgba(244, 227, 229, 0.4) 100%); border-radius: 1.25rem; padding: 1.75rem; margin-bottom: 2.5rem; text-align: center; border: 1.5px dashed var(--accent-mauve);">
              <i class="fa-solid fa-stethoscope" style="font-size: 2rem; color: var(--accent-mauve); margin-bottom: 1rem;"></i>
              <h4 style="font-family: 'Playfair Display', serif; font-size: 1.35rem; color: var(--text-dark-rose); margin-bottom: 0.75rem;">Avis Clinique Préliminaire</h4>
              <p style="font-size: 0.95rem; color: var(--text-main); line-height: 1.6; font-weight: 500; margin-bottom: 0;">
                <strong style="color: var(--text-dark-rose);">Bonne nouvelle :</strong> Votre profil biologique indique que votre métabolisme est extrêmement réceptif à un rééquilibrage ciblé. Vous n'avez pas besoin d'un énième régime restrictif, mais d'une stratégie clinique sur-mesure pour relancer votre machine corporelle.
              </p>
            </div>

            <!-- The Patient File CTA -->
            <div class="ai-booking-box" style="background: var(--text-dark-rose); color: white; border-radius: 1.5rem; padding: 2.5rem 2rem; text-align: center; box-shadow: 0 15px 35px rgba(92, 60, 67, 0.2);">
              <h3 class="ai-booking-headline" style="color: white; font-size: 1.6rem; margin-bottom: 1rem;">${bookingTitle}</h3>
              <p class="ai-booking-sub" style="color: rgba(255,255,255,0.85); font-size: 1rem; margin-bottom: 2rem;">${bookingSub}</p>
              
              <button onclick="AIEngine.transferDossierToForm()" class="btn-pill" style="width: 100%; font-size: 1.1rem; padding: 1.2rem; cursor: pointer; background: white; color: var(--text-dark-rose); transition: transform 0.3s ease;">
                <i class="fa-solid fa-clipboard-check"></i> ${bookingBtn}
              </button>
            </div>

            <div style="text-align: center; margin-top: 1.5rem;">
              <button class="ai-restart-btn" onclick="AIEngine.reset()">
                <i class="fa-solid fa-rotate-left"></i> ${restartBtn}
              </button>
            </div>
          </div>
        `;

        // Smooth mobile auto-centering on final dossier
        if (window.innerWidth < 768) {
          setTimeout(() => {
            const stageEl = document.getElementById('aiStage');
            if (stageEl) {
              stageEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 100);
        }

        // Update WhatsApp message with clinical synthesis
        if (typeof updateWhatsAppLinks === 'function') {
          updateWhatsAppLinks();
        }
      },

      transferDossierToForm() {
        const lang = this.state.lang || (typeof currentLang !== 'undefined' ? currentLang : 'fr');
        let dossierHeader = "--- BILAN NUTRITIONNEL & OBJECTIFS ---\n\n";
        let responsesHeader = "VOS RÉPONSES AU TEST :\n";
        let stepLabel = "Étape";
        let langLabel = "Langue";
        let profileLabel = "Profil identifié";
        let scoreLabel = "Score de Vitalité";

        if (lang === 'ar') {
          dossierHeader = "--- تقرير التقييم الغذائي والأهداف ---\n\n";
          responsesHeader = "إجاباتك على التقييم:\n";
          stepLabel = "المرحلة";
          langLabel = "اللغة";
          profileLabel = "الملف المحدد";
          scoreLabel = "نقاط الحيوية";
        } else if (lang === 'en') {
          dossierHeader = "--- NUTRITIONAL ASSESSMENT & GOALS ---\n\n";
          responsesHeader = "YOUR ASSESSMENT RESPONSES:\n";
          stepLabel = "Step";
          langLabel = "Language";
          profileLabel = "Identified Profile";
          scoreLabel = "Vitality Score";
        } else if (lang === 'es') {
          dossierHeader = "--- EVALUACIÓN NUTRICIONAL Y OBJETIVOS ---\n\n";
          responsesHeader = "SUS RESPUESTAS A LA EVALUACIÓN:\n";
          stepLabel = "Paso";
          langLabel = "Idioma";
          profileLabel = "Perfil Identificado";
          scoreLabel = "Puntuación de Vitalidad";
        }

        const metabolicScore = (this.state.biometrics && this.state.biometrics.metabolic_score) ? this.state.biometrics.metabolic_score : 85;

        let dossierText = dossierHeader;
        dossierText += `${langLabel} : ${lang.toUpperCase()}\n`;
        dossierText += `${profileLabel} : ${this.state.track.toUpperCase()}\n`;
        dossierText += `${scoreLabel} : ${metabolicScore}/100\n\n`;
        
        dossierText += responsesHeader;
        this.state.history.forEach(item => {
          dossierText += `${stepLabel} ${item.turn}: ${item.selection}\n`;
        });

        const dossierInput = document.getElementById('bookingDossier');
        const dossierContainer = document.getElementById('dossierContainer');
        const serviceSelect = document.getElementById('serviceSelect');
        
        if (dossierInput && dossierContainer) {
          dossierInput.value = dossierText;
          dossierContainer.style.display = 'block'; 
        }

        if (serviceSelect) {
          const trackToService = {
            'weight': 'Perte de Poids',
            'tca': 'Troubles du Comportement Alimentaire',
            'digestive': 'Confort Digestif',
            'hormonal': 'Équilibre Hormonal',
            'diabetes': 'Diabète & Suivi Métabolique',
            'fatigue': 'Fatigue & Stress',
            'pregnancy': 'Grossesse & Maternité',
            'pediatric': 'Nutrition Pédiatrique',
            'senior': 'Senior & Longévité',
            'metabolic': 'Maladies Métaboliques'
          };
          const preferredService = trackToService[this.state.track] || 'Première Consultation';
          // Try to match the preferred service, fallback to first option or generic
          const foundOption = Array.from(serviceSelect.options).find(o => o.value === preferredService || o.text.includes(preferredService));
          if (foundOption) serviceSelect.value = foundOption.value;
          else serviceSelect.value = serviceSelect.options[1] ? serviceSelect.options[1].value : serviceSelect.options[0].value;
        }

        openModal('bookingModal');
      },

      transferToForm() {
        this.transferDossierToForm();
      },

      async handleLeadSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const btn = document.getElementById('aiLeadSubmitBtn');
        const successMsg = document.getElementById('aiLeadSuccessMsg');
        if (btn) {
          btn.disabled = true;
          btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Envoi en cours...';
        }
        try {
          const formData = new FormData(form);
          await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
          });
        } catch (err) {
          console.warn("Async lead submission fallback:", err);
        } finally {
          if (btn) btn.style.display = 'none';
          if (successMsg) successMsg.style.display = 'block';
        }
      },

      reset() {
        this.state = {
          turn: 1,
          history: [],
          previousSelection: '',
          track: 'weight',
          sex: null,
          age: null,
          profileAnswer: null,
          biometrics: { metabolic_score: 42, digestive_load: 38, endocrine_strain: 45 },
          isComplete: false,
          finalDossier: null,
          isLoading: false
        };
        this.renderInitialTurn();
        if (typeof updateWhatsAppLinks === 'function') {
          updateWhatsAppLinks();
        }
      }
    };

console.log('Valid syntax');
