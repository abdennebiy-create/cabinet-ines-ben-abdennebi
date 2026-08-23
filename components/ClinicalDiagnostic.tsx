import React, { useState } from 'react';

interface FinalResults {
  headline: string;
  the_3_realities: string[];
  transformation_timeline: {
    days_14: string;
    day_30: string;
    day_90: string;
  };
  whatsapp_message: string;
}

interface QuizState {
  empathy_insight: string;
  dynamic_question: string;
  tap_options: string[];
  current_turn: number;
  is_complete: boolean;
  final_results: FinalResults | null;
}

export default function ClinicalDiagnostic() {
  const [history, setHistory] = useState<Array<{ turn: number; selection: string }>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [consultFormat, setConsultFormat] = useState<'cabinet' | 'teleconsultation'>('cabinet');

  const [quizData, setQuizData] = useState<QuizState>({
    empathy_insight: 'Bienvenue au Cabinet de Nutrition Inès Ben Abdennebi. Établissons ensemble votre profil clinique précis.',
    dynamic_question: "Quel est votre profil biologique et votre tranche d'âge ?",
    tap_options: [
      'Femme (18–35 ans)',
      'Femme (36–50 ans)',
      'Femme (50+ ans)',
      'Homme (18–40 ans)',
      'Homme (40+ ans)'
    ],
    current_turn: 1,
    is_complete: false,
    final_results: null
  });

  const fetchNextQuestion = async (newHistory: Array<{ turn: number; selection: string }>) => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/ai-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ history: newHistory })
      });
      if (res.ok) {
        const data = await res.json();
        setQuizData(data);
      } else {
        throw new Error('API request failed');
      }
    } catch (e) {
      console.warn('Backend fallback triggered:', e);
      const turnCount = newHistory.length + 1;
      const isComplete = turnCount >= 9;
      setQuizData({
        empathy_insight: isComplete
          ? 'Bilan complété.'
          : 'Votre métabolisme réagit précisément à chaque habitude quotidienne.',
        dynamic_question: isComplete ? '' : 'Quel est le facteur principal identifié ?',
        tap_options: isComplete ? [] : [
          'Option A',
          'Option B',
          'Option C',
          'Option D'
        ],
        current_turn: turnCount,
        is_complete: isComplete,
        final_results: isComplete ? {
          headline: 'Analyse Personnalisée : Pourquoi votre corps résiste à la perte de poids',
          the_3_realities: [
            'Analyse personnalisée basée sur vos réponses exactes...',
            'Analyse du rythme de vos repas et des pulsions du soir...',
            'Analyse de votre motilité et niveau d\'activité physique...'
          ],
          transformation_timeline: {
            days_14: 'Dégonflement abdominal et arrêt des pulsions du soir.',
            day_30: 'Perte de 3 à 5 kg ciblant les graisses profondes sans faim.',
            day_90: 'Métabolisme relancé et poids stabilisé durablement.'
          },
          whatsapp_message: 'Bonjour Ines, je viens de terminer mon bilan sur votre site. Je souhaite réserver ma première consultation personnalisée.'
        } : null
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleOptionTap = (option: string) => {
    const newHistory = [...history, { turn: quizData.current_turn, selection: option }];
    setHistory(newHistory);
    fetchNextQuestion(newHistory);
  };

  const handleRestart = () => {
    setHistory([]);
    setQuizData({
      empathy_insight: 'Bienvenue au Cabinet de Nutrition Inès Ben Abdennebi. Établissons ensemble votre profil clinique précis.',
      dynamic_question: "Quel est votre profil biologique et votre tranche d'âge ?",
      tap_options: [
        'Femme (18–35 ans)',
        'Femme (36–50 ans)',
        'Femme (50+ ans)',
        'Homme (18–40 ans)',
        'Homme (40+ ans)'
      ],
      current_turn: 1,
      is_complete: false,
      final_results: null
    });
  };

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', background: '#ffffff', borderRadius: '1.5rem', boxShadow: '0 20px 40px rgba(92, 60, 67, 0.08)', overflow: 'hidden', border: '1px solid rgba(232, 198, 200, 0.6)' }}>
      {/* Header & Progress Bar */}
      <div style={{ padding: '1.25rem 1.75rem', background: '#fbf5f6', borderBottom: '1px solid rgba(232, 198, 200, 0.6)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', fontWeight: 600, color: '#5c3c43' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }}></span>
          Étape {quizData.current_turn} sur 9 • Votre bilan personnalisé se prépare
        </div>
      </div>

      <div style={{ width: '100%', height: '6px', background: 'rgba(232, 198, 200, 0.35)', overflow: 'hidden' }}>
        <div style={{ width: `${Math.min(100, (quizData.current_turn / 9) * 100)}%`, height: '100%', background: '#10b981', boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)', transition: 'width 0.5s ease', borderRadius: '9999px' }} />
      </div>

      <div style={{ padding: '2rem' }}>
        {isLoading ? (
          <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
            <div style={{ width: '42px', height: '42px', border: '3px solid rgba(232, 198, 200, 0.4)', borderTopColor: '#10b981', borderRadius: '50%', margin: '0 auto 1rem', animation: 'spin 0.8s linear infinite' }} />
            <p style={{ fontFamily: 'monospace', fontSize: '0.9rem', color: '#5c3c43', fontWeight: 700, letterSpacing: '0.05em' }}>
              PRÉPARATION DE VOTRE BILAN PERSONNALISÉ...
            </p>
          </div>
        ) : quizData.is_complete && quizData.final_results ? (
          /* Results Screen */
          <div>
            <div style={{ background: '#fbf5f6', borderLeft: '4px solid #5c3c43', padding: '1.25rem', borderRadius: '0.75rem', marginBottom: '1.5rem' }}>
              <h2 style={{ fontFamily: 'serif', fontSize: '1.5rem', color: '#5c3c43', margin: '0 0 0.5rem' }}>
                {quizData.final_results.headline}
              </h2>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', color: '#5c3c43', marginBottom: '0.75rem' }}>Les 3 Réalités Biologiques Identifiées :</h3>
              <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                {quizData.final_results.the_3_realities.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '0.6rem', color: '#4a3b3e', lineHeight: 1.5 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid rgba(232, 198, 200, 0.8)', padding: '1.25rem', borderRadius: '1rem', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.05rem', color: '#5c3c43', marginTop: 0 }}>Chronologie de Transformation Attendue :</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', marginTop: '0.75rem' }}>
                <div style={{ background: '#fbf5f6', padding: '0.85rem', borderRadius: '0.5rem', borderLeft: '3px solid #c49da5' }}>
                  <strong>🌱 14 Jours</strong>
                  <p style={{ margin: '0.25rem 0 0', fontSize: '0.85rem', color: '#4a3b3e' }}>{quizData.final_results.transformation_timeline.days_14}</p>
                </div>
                <div style={{ background: '#fbf5f6', padding: '0.85rem', borderRadius: '0.5rem', borderLeft: '3px solid #e8c6c8' }}>
                  <strong>🚀 30 Jours</strong>
                  <p style={{ margin: '0.25rem 0 0', fontSize: '0.85rem', color: '#4a3b3e' }}>{quizData.final_results.transformation_timeline.day_30}</p>
                </div>
                <div style={{ background: '#fbf5f6', padding: '0.85rem', borderRadius: '0.5rem', borderLeft: '3px solid #5c3c43' }}>
                  <strong>✨ 90 Jours</strong>
                  <p style={{ margin: '0.25rem 0 0', fontSize: '0.85rem', color: '#4a3b3e' }}>{quizData.final_results.transformation_timeline.day_90}</p>
                </div>
              </div>
            </div>

            {/* Consultation Format Selector */}
            <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
              <span style={{ fontSize: '0.9rem', color: '#5c3c43', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
                Format de Consultation Souhaité :
              </span>
              <div style={{ display: 'inline-flex', gap: '0.5rem', background: '#fbf5f6', padding: '0.3rem', borderRadius: '9999px', border: '1px solid rgba(232, 198, 200, 0.6)' }}>
                <button
                  type="button"
                  onClick={() => setConsultFormat('cabinet')}
                  style={{
                    border: 'none',
                    padding: '0.5rem 1.25rem',
                    borderRadius: '9999px',
                    cursor: 'pointer',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    background: consultFormat === 'cabinet' ? '#5c3c43' : 'transparent',
                    color: consultFormat === 'cabinet' ? '#ffffff' : '#5c3c43',
                    transition: 'all 0.2s'
                  }}
                >
                  📍 En Cabinet (Radès)
                </button>
                <button
                  type="button"
                  onClick={() => setConsultFormat('teleconsultation')}
                  style={{
                    border: 'none',
                    padding: '0.5rem 1.25rem',
                    borderRadius: '9999px',
                    cursor: 'pointer',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    background: consultFormat === 'teleconsultation' ? '#5c3c43' : 'transparent',
                    color: consultFormat === 'teleconsultation' ? '#ffffff' : '#5c3c43',
                    transition: 'all 0.2s'
                  }}
                >
                  💻 Téléconsultation
                </button>
              </div>
            </div>

            {/* WhatsApp Booking Button */}
            <div style={{ textAlign: 'center' }}>
              <a
                href={`https://wa.me/21622000000?text=${encodeURIComponent(
                  `${quizData.final_results.whatsapp_message} [Format: ${consultFormat === 'cabinet' ? 'Cabinet Radès' : 'Téléconsultation'}]`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  width: '100%',
                  padding: '1rem 1.5rem',
                  background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  borderRadius: '1rem',
                  textDecoration: 'none',
                  boxShadow: '0 10px 20px rgba(37, 211, 102, 0.25)',
                  marginBottom: '1rem'
                }}
              >
                📲 Réserver Mon Bilan sur WhatsApp
              </a>

              <p style={{ fontSize: '0.85rem', color: '#7a6469' }}>
                Une question avant de réserver ?{' '}
                <a
                  href={`https://wa.me/21622000000?text=${encodeURIComponent('Bonjour Ines, j\'ai une question concernant le bilan.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#5c3c43', fontWeight: 700, textDecoration: 'underline' }}
                >
                  Écrivez-nous directement sur WhatsApp
                </a>
              </p>

              <button
                type="button"
                onClick={handleRestart}
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(232, 198, 200, 0.8)',
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  color: '#5c3c43',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  marginTop: '0.5rem'
                }}
              >
                🔄 Recommencer l'auto-diagnostic
              </button>
            </div>
          </div>
        ) : (
          /* Question View */
          <div>
            {quizData.empathy_insight && (
              <div style={{ background: '#fbf5f6', border: '1px solid rgba(232, 198, 200, 0.6)', padding: '0.9rem 1.25rem', borderRadius: '0.75rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: '#c49da5', fontSize: '1.2rem' }}>💡</span>
                <p style={{ margin: 0, fontSize: '0.92rem', color: '#5c3c43', lineHeight: 1.4, fontWeight: 500 }}>
                  {quizData.empathy_insight}
                </p>
              </div>
            )}

            <h2 style={{ fontFamily: 'serif', fontSize: '1.35rem', color: '#2d1f23', marginBottom: '1.5rem', lineHeight: 1.35 }}>
              {quizData.dynamic_question}
            </h2>

            <div style={{ display: 'grid', gap: '0.75rem' }}>
              {quizData.tap_options.map((opt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleOptionTap(opt)}
                  style={{
                    width: '100%',
                    padding: '1.1rem 1.25rem',
                    background: '#ffffff',
                    border: '1.5px solid rgba(232, 198, 200, 0.7)',
                    borderRadius: '1rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '0.98rem',
                    fontWeight: 600,
                    color: '#4a3b3e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 12px rgba(92, 60, 67, 0.03)',
                    transition: 'all 0.2s'
                  }}
                >
                  <span>{opt}</span>
                  <span style={{ color: '#c49da5' }}>➔</span>
                </button>
              ))}
            </div>

            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <button
                type="button"
                onClick={handleRestart}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#9c7b82',
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}
              >
                Recommencer le diagnostic
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
