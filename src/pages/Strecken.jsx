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

export default function Strecken() {
  useFadeIn('.dist-card');
  useFadeIn('.rst');

  return (
    <>
      {/* Distanzkarten */}
      <section id="strecken-page">
        <p className="section-eyebrow">Wähle deine Herausforderung</p>
        <h2 className="section-title">Unsere Distanzen</h2>
        <p className="section-lead">Drei Distanzen für alle – vom Nachwuchslauf bis zum 10-km-Hauptlauf durch das malerische Tal von Langenordnach im Schwarzwald.</p>
        <div className="dist-grid">
          <div className="dist-card zehn">
            <div className="dist-km">10<span>km</span></div>
            <div className="dist-name">Hauptlauf</div>
            <div className="dist-stats">
              <div className="dst"><strong>17:30</strong>Startzeit</div>
              <div className="dst"><strong>Berg- &amp;</strong>Sprintwertung</div>
              <div className="dst"><strong>Pasta</strong>nach Ziel</div>
            </div>
            <div className="dist-price"><span className="pn">15</span>€ · Nachmeldung 18 €</div>
          </div>
          <div className="dist-card halb">
            <div className="dist-km">1,5<span>km</span></div>
            <div className="dist-name">Schülerlauf</div>
            <div className="dist-stats">
              <div className="dst"><strong>17:00</strong>Startzeit</div>
              <div className="dst"><strong>Kein</strong>Zeitlimit</div>
              <div className="dst"><strong>Pasta</strong>nach Ziel</div>
            </div>
            <div className="dist-price"><span className="pn">6</span>€ · Nachmeldung 8 €</div>
          </div>
          <div className="dist-card kids">
            <div className="dist-km">350<span>m</span></div>
            <div className="dist-name">Bambinilauf</div>
            <div className="dist-stats">
              <div className="dst"><strong>16:30</strong>Startzeit</div>
              <div className="dst"><strong>Kein</strong>Zeitlimit</div>
              <div className="dst"><strong>Nur</strong>Vor-Ort</div>
            </div>
            <div className="dist-price"><span className="pn">3</span>€ · nur Vor-Ort-Anmeldung</div>
          </div>
        </div>
      </section>

      {/* Streckenbeschreibung */}
      <div className="route-section">
        <div className="route-inner">
          <div>
            <p className="section-eyebrow">Die Strecke</p>
            <h2 className="section-title">Entlang der Orne</h2>
            <p className="section-lead">Die Strecke führt durch das malerische Tal von Langenordnach im Hochschwarzwald – Start und Ziel am Festzelt in Langenordnach. Wasser, Iso und Bananen an den Verpflegungsstationen.</p>
            <div className="route-stats">
              <div className="rst"><div className="rst-label">Hauptlauf</div><div className="rst-val">10<span className="rst-unit">km</span></div></div>
              <div className="rst"><div className="rst-label">Start / Ziel</div><div className="rst-val">Festzelt<span className="rst-unit">Langenordnach</span></div></div>
              <div className="rst"><div className="rst-label">Verpflegung</div><div className="rst-val">Wasser<span className="rst-unit">Iso · Bananen</span></div></div>
              <div className="rst"><div className="rst-label">Sachpreise</div><div className="rst-val">Top 3<span className="rst-unit">je AK</span></div></div>
            </div>
          </div>
          <div className="route-map">
            <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 110 C40 80 50 50 80 40 C110 30 140 60 160 50 C175 42 185 55 180 80 C175 105 150 120 120 115 C90 110 60 125 40 115 C28 108 18 118 20 110" fill="none" stroke="#e05c2a" strokeWidth="3" strokeDasharray="6,3" strokeLinecap="round" />
              <path d="M25 100 C50 105 70 120 100 118 C130 116 155 100 170 85" fill="none" stroke="rgba(106,179,216,0.6)" strokeWidth="8" strokeLinecap="round" />
              <circle cx="20" cy="110" r="6" fill="var(--accent)" stroke="white" strokeWidth="2" />
              <text x="6" y="102" fill="white" fontSize="8" fontFamily="sans-serif" fontWeight="bold">START</text>
              <text x="6" y="123" fill="white" fontSize="7" fontFamily="sans-serif">/ ZIEL</text>
            </svg>
          </div>
        </div>
      </div>

      {/* Zeitplan */}
      <div className="sched-section">
        <p className="section-eyebrow">Ablauf</p>
        <h2 className="section-title">Zeitplan 04. Juli 2026</h2>
        <table className="sched-table">
          <thead>
            <tr>
              <th>Uhrzeit</th>
              <th>Programm</th>
              <th>Distanz</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span className="sched-time">15:00</span></td>
              <td><div className="sched-event">Startnummernausgabe</div><div className="sched-note">Festzelt Langenordnach</div></td>
              <td>Alle Distanzen</td>
            </tr>
            <tr>
              <td><span className="sched-time">16:30</span></td>
              <td><div className="sched-event">Start Bambinilauf</div><div className="sched-note">Nur Vor-Ort-Anmeldung · 3 €</div></td>
              <td><span className="sched-dist tag-k">350 m</span></td>
            </tr>
            <tr>
              <td><span className="sched-time">17:00</span></td>
              <td><div className="sched-event">Start Schülerlauf</div><div className="sched-note">Chip-Zeitmessung · Pasta nach Ziel</div></td>
              <td><span className="sched-dist tag-h">1,5 km</span></td>
            </tr>
            <tr>
              <td><span className="sched-time">17:30</span></td>
              <td><div className="sched-event">Start Hauptlauf</div><div className="sched-note">Berg- &amp; Sprintwertung · Pasta nach Ziel</div></td>
              <td><span className="sched-dist tag-z">10 km</span></td>
            </tr>
            <tr>
              <td><span className="sched-time">nach dem Lauf</span></td>
              <td><div className="sched-event">Siegerehrung</div><div className="sched-note">Sachpreise für die ersten 3 jeder Altersklasse</div></td>
              <td>Alle Kategorien</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
