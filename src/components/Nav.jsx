import { useState, useEffect } from 'react';
import orneLogo from '../assets/orne_logo.png';

export default function Nav({ activeTab, setActiveTab }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setMobileOpen(false);
  };

  return (
    <>
      <nav id="main-nav" className={scrolled ? 'scrolled' : ''}>
        <a className="nav-logo" href="#" onClick={(e) => { e.preventDefault(); handleTabClick('home'); }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src={orneLogo} alt="Orne Lauf Logo" style={{ height: '38px', width: 'auto' }} />
          Sportivo <span>Orne Lauf</span>
        </a>
        <ul className="nav-tabs">
          <li><a onClick={() => handleTabClick('home')} className={activeTab === 'home' ? 'active' : ''} data-tab="home">Home</a></li>
          <li><a onClick={() => handleTabClick('anmeldung')} className={activeTab === 'anmeldung' ? 'active' : ''} data-tab="anmeldung">Anmeldung</a></li>
          <li><a onClick={() => handleTabClick('strecken')} className={activeTab === 'strecken' ? 'active' : ''} data-tab="strecken">Strecken</a></li>
        </ul>
        <a className="nav-cta" href="https://my.raceresult.com/398027/registration" target="_blank" rel="noopener noreferrer">Jetzt anmelden</a>
        <div
          className={`hamburger${mobileOpen ? ' open' : ''}`}
          id="hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span></span><span></span><span></span>
        </div>
      </nav>

      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`} id="mobile-menu">
        <a onClick={() => handleTabClick('home')}>Home</a>
        <a onClick={() => handleTabClick('anmeldung')}>Anmeldung</a>
        <a onClick={() => handleTabClick('strecken')}>Strecken</a>
      </div>
    </>
  );
}
