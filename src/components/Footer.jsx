export default function Footer({ setActiveTab }) {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <a className="nav-logo" href="#" onClick={(e) => { e.preventDefault(); setActiveTab('home'); }}>
            Sportivo <span>Orne Lauf</span>
          </a>
          <p>Der Sportivo Orne Lauf verbindet Sport, Natur und Gemeinschaft im malerischen Langenordnach bei Titisee-Neustadt im Schwarzwald.</p>
        </div>
        <div className="footer-col">
          <h5>Navigation</h5>
          <ul>
            <li><a onClick={() => setActiveTab('home')}>Home</a></li>
            <li><a onClick={() => setActiveTab('anmeldung')}>Anmeldung</a></li>
            <li><a onClick={() => setActiveTab('strecken')}>Strecken</a></li>
            <li><a onClick={() => setActiveTab('sponsoren')}>Sponsoren</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Information</h5>
          <ul>
            <li><a href="#">Anreise &amp; Parken</a></li>
            <li><a href="#">Ergebnisse</a></li>
            <li><a href="#">Kontakt</a></li>
            <li><a href="#">Presse</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Rechtliches</h5>
          <ul>
            <li><a href="#">Impressum</a></li>
            <li><a href="#">Datenschutz</a></li>
            <li><a href="#">AGB</a></li>
            <li><a href="#">Teilnahmebedingungen</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Sportivo Orne Lauf e.V. – Alle Rechte vorbehalten</span>
        <span>Langenordnach, Titisee-Neustadt</span>
      </div>
    </footer>
  );
}
