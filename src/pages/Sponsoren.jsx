import { useEffect } from 'react';
import orneLogo from '../assets/orne_logo.png';
import orneCover from '../assets/orne_cover.png';

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

export default function Sponsoren() {
  useFadeIn('.sponsor-card');

  return (
    <section id="sponsoren-page">
      <p className="section-eyebrow">Veranstalter &amp; Partner</p>
      <h2 className="section-title">Sponsoren &amp; Partner 2026</h2>
      <p className="section-lead">Der Sportivo Orne Lauf wird von Skiclub Langenordnach e.V. in Zusammenarbeit mit Sportivo und dem PHWE Cross Country Team organisiert.</p>

      {/* Alle Partner-Logos aus dem Cover */}
      <div style={{ maxWidth: '860px', margin: '0 auto 3rem', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(15,34,24,0.18)' }}>
        <img src={orneCover} alt="Orne Lauf 2026 – Veranstalter und Partner" style={{ width: '100%', display: 'block' }} />
      </div>

      <div className="sponsor-tier">
        <div className="tier-label">Veranstalter</div>
        <div className="sponsor-row">
          <div className="sponsor-card gold" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', padding: '1.5rem' }}>
            <img src={orneLogo} alt="Orne Lauf Logo" style={{ height: '90px', width: 'auto' }} />
            <span className="sn">ORNE LAUF</span>
          </div>
          <div className="sponsor-card gold">
            <span className="sn">SKICLUB LANGENORDNACH E.V.</span>
          </div>
        </div>
      </div>

      <div className="sponsor-tier">
        <div className="tier-label">Partner</div>
        <div className="sponsor-row">
          <div className="sponsor-card silver">
            <span className="sn">SPORTIVO</span>
            <span style={{ display: 'block', fontSize: '0.78rem', color: '#888', marginTop: '0.3rem' }}>Fitness · Gesundheit · Therapie</span>
          </div>
          <div className="sponsor-card silver">
            <span className="sn">PHWE SC TEAM</span>
            <span style={{ display: 'block', fontSize: '0.78rem', color: '#888', marginTop: '0.3rem' }}>Party Hard Win Easy · Cross Country Team</span>
          </div>
        </div>
      </div>

      <div className="sponsor-become">
        <div>
          <h3>Sponsor werden</h3>
          <p>Werden Sie Teil des Sportivo Orne Laufs und unterstützen Sie Sport und Gemeinschaft in Langenordnach. Wir freuen uns auf Ihre Anfrage.</p>
        </div>
        <a href="mailto:info@sportivo-ornelauf.de">Sponsorenpaket anfragen →</a>
      </div>
    </section>
  );
}
