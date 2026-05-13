import { useEffect } from 'react';


function useFadeIn(selector) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      io.observe(el);
    });
    return () => io.disconnect();
  }, [selector]);
}

export default function Anmeldung() {
  useFadeIn('.ri');

  return (
    <section id="anmeldung-page">
      <div className="anm-grid">
        <div>
          <p className="section-eyebrow">Mitmachen</p>
          <h2 className="section-title">Jetzt anmelden</h2>
          <p className="section-lead">Sichere dir deinen Startplatz beim Sportivo Orne Lauf 2026. Online-Anmeldung bis 03. Juli 2026 über Race Result – Zeitmessung &amp; Anmeldung von Skiclub Langenordnach e.V.</p>
          <div className="reg-info">
            <div className="ri">
              <div className="ri-icon">
                <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
              </div>
              <div className="ri-text">
                <h4>Sofort-Bestätigung</h4>
                <p>Du erhältst nach deiner Anmeldung sofort eine Bestätigungs-E-Mail mit allen Infos.</p>
              </div>
            </div>
            <div className="ri">
              <div className="ri-icon">
                <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" /></svg>
              </div>
              <div className="ri-text">
                <h4>Sichere Zahlung</h4>
                <p>Bezahlung per Kreditkarte, PayPal oder Überweisung. SSL-verschlüsselt.</p>
              </div>
            </div>
            <div className="ri">
              <div className="ri-icon">
                <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" /></svg>
              </div>
              <div className="ri-text">
                <h4>Startnummer-Abholung</h4>
                <p>Am Veranstaltungstag ab 15:00 Uhr am Festzelt in Langenordnach.</p>
              </div>
            </div>
            <div className="ri">
              <div className="ri-icon">
                <svg viewBox="0 0 24 24"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" /></svg>
              </div>
              <div className="ri-text">
                <h4>Nachmeldung vor Ort möglich</h4>
                <p>Nachmeldungen sind bis 30 Minuten vor dem jeweiligen Start am Veranstaltungsort möglich. Bambinilauf ausschließlich vor Ort.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="reg-form">
          <p className="section-eyebrow">Anmeldung via Race Result</p>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--dark)' }}>Startgebühren</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.9rem 1.1rem', background: 'var(--light)', borderRadius: '10px' }}>
              <div>
                <strong>Hauptlauf</strong>
                <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)' }}>10 km · Start 17:30 Uhr</span>
              </div>
              <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>15 € <span style={{ fontWeight: 400, fontSize: '0.85rem', color: 'var(--text-muted)' }}>(Nachmeldung 18 €)</span></span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.9rem 1.1rem', background: 'var(--light)', borderRadius: '10px' }}>
              <div>
                <strong>Schülerlauf</strong>
                <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)' }}>1,5 km · Start 17:00 Uhr</span>
              </div>
              <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>6 € <span style={{ fontWeight: 400, fontSize: '0.85rem', color: 'var(--text-muted)' }}>(Nachmeldung 8 €)</span></span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.9rem 1.1rem', background: 'var(--light)', borderRadius: '10px' }}>
              <div>
                <strong>Bambinilauf</strong>
                <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)' }}>350 m · Start 16:30 Uhr · nur vor Ort</span>
              </div>
              <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>3 €</span>
            </div>
          </div>
          <a
            href="https://my.raceresult.com/398027/"
            target="_blank"
            rel="noopener noreferrer"
            className="form-submit"
            style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}
          >
            Jetzt bei Race Result anmelden →
          </a>
          <p style={{ marginTop: '1rem', fontSize: '0.82rem', color: 'var(--text-muted)', textAlign: 'center' }}>
            Online-Anmeldung bis 03. Juli 2026 · Zeitmessung &amp; Anmeldung: Race Result · Veranstalter: Skiclub Langenordnach e.V.
          </p>
        </div>
      </div>
    </section>
  );
}
