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
      </div>
      <div className="footer-bottom">
        <span>© 2026 Sportivo Orne Lauf e.V. – Alle Rechte vorbehalten</span>
        <span>Langenordnach, Titisee-Neustadt</span>
      </div>
    </footer>
  );
}
