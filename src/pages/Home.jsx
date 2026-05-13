import { useState, useEffect, useRef } from 'react';
import logoSportivo from '../assets/logo_sportivo.png';
import logoSkiclub from '../assets/logo_skiclub.png';
import logoPhwe from '../assets/logo_phwe.png';

function Countdown() {
  const raceDate = new Date('2026-07-04T17:30:00');
  const fmt = (n) => String(n).padStart(2, '0');

  const getTime = () => {
    const diff = raceDate - new Date();
    if (diff <= 0) return { days: '00', hours: '00', mins: '00', secs: '00' };
    return {
      days:  fmt(Math.floor(diff / 864e5)),
      hours: fmt(Math.floor((diff % 864e5) / 36e5)),
      mins:  fmt(Math.floor((diff % 36e5) / 6e4)),
      secs:  fmt(Math.floor((diff % 6e4) / 1e3)),
    };
  };

  const [time, setTime] = useState(getTime);

  useEffect(() => {
    const id = setInterval(() => setTime(getTime()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div id="countdown">
      <span className="countdown-label">Noch bis zum Start</span>
      <div className="countdown-units">
        <div className="cu"><span className="cu-num">{time.days}</span><span className="cu-label">Tage</span></div>
        <span className="cu-sep">:</span>
        <div className="cu"><span className="cu-num">{time.hours}</span><span className="cu-label">Stunden</span></div>
        <span className="cu-sep">:</span>
        <div className="cu"><span className="cu-num">{time.mins}</span><span className="cu-label">Minuten</span></div>
        <span className="cu-sep">:</span>
        <div className="cu"><span className="cu-num">{time.secs}</span><span className="cu-label">Sekunden</span></div>
      </div>
      <span className="countdown-date">Sa., 04. Juli 2026 · Starts ab 16:30 Uhr</span>
    </div>
  );
}

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

export default function Home({ setActiveTab }) {
  useFadeIn('.hi-card');

  return (
    <>
      {/* HERO */}
      <section id="hero">
        <div className="hero-bg"></div>
        <div className="hero-wave">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" fill="var(--white)">
            <path d="M0,50 C400,90 1040,10 1440,50 L1440,80 L0,80 Z" />
          </svg>
        </div>
        <div className="hero-content">
          <p className="hero-eyebrow">1. Internationaler</p>
          <h1 className="hero-title">Sportivo<br /><span className="outline">Orne Lauf</span></h1>
          <p className="hero-sub">Erlebe einen unvergesslichen Lauf durch Langenordnach im Schwarzwald – Sport, Natur und Gemeinschaft auf einer einzigartigen Strecke.</p>
          <div className="hero-badges">
            <span className="badge">
              <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
              Langenordnach, Titisee-Neustadt
            </span>
            <span className="badge">
              <svg viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7 11h5v5H7z" /></svg>
              04. Juli 2026
            </span>
            <span className="badge">
              <svg viewBox="0 0 24 24"><path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z" /></svg>
              3 Distanzen
            </span>
          </div>
          <div className="hero-btns">
            <a className="btn-primary" href="https://my.raceresult.com/398027/registration" target="_blank" rel="noopener noreferrer">Jetzt anmelden</a>
            <a className="btn-secondary" onClick={() => setActiveTab('strecken')}>Strecken entdecken</a>
          </div>
        </div>
      </section>

      {/* COUNTDOWN */}
      <Countdown />

      {/* PARTNER LOGOS */}
c      <section id="partner-logos" style={{ background: '#0f2218', padding: '2.5rem 1rem', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Veranstalter &amp; Partner</p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '3rem', flexWrap: 'wrap' }}>
          <a href="https://www.sportivo-gleis1.de/" target="_blank" rel="noopener noreferrer">
            <img src={logoSportivo} alt="Sportivo" style={{ height: '80px', width: 'auto', objectFit: 'contain' }} />
          </a>
          <a href="http://sc-langenordnach.de/" target="_blank" rel="noopener noreferrer">
            <img src={logoSkiclub} alt="Skiclub Langenordnach" style={{ height: '80px', width: 'auto', objectFit: 'contain' }} />
          </a>
          <img src={logoPhwe} alt="PHWE Cross Country Team" style={{ height: '80px', width: 'auto', objectFit: 'contain' }} />
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section id="highlights">
        <p className="section-eyebrow">Warum mitmachen?</p>
        <h2 className="section-title">Was den Sportivo Orne Lauf besonders macht</h2>
        <div className="hi-grid">
          <div className="hi-card">
            <div className="hi-icon">
              <svg viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" /></svg>
            </div>
            <h3>Atemberaubende Natur</h3>
            <p>Die Strecke führt durch das malerische Tal von Langenordnach im Schwarzwald – mit Panoramaausblicken auf Wiesen, Wälder und die einzigartige Naturlandschaft des Hochschwarzwalds.</p>
          </div>
          <div className="hi-card">
            <div className="hi-icon">
              <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>
            </div>
            <h3>Starkes Gemeinschaftsgefühl</h3>
            <p>Von Hobbyläufern bis Wettkampfathleten – der Sportivo Orne Lauf bringt Menschen zusammen. Anfeuern, Mitlaufen und gemeinsam feiern sind hier Programm.</p>
          </div>
          <div className="hi-card">
            <div className="hi-icon">
              <svg viewBox="0 0 24 24"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2z" /></svg>
            </div>
            <h3>Für alle Leistungsniveaus</h3>
            <p>Egal ob Bambinilauf (350 m) oder Hauptlauf (10 km) – wir haben die passende Distanz für jedes Alter und Leistungsniveau.</p>
          </div>
        </div>
      </section>
    </>
  );
}
