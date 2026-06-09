const ROUTES = {
  '10k': {
    eyebrow: 'Streckenprofil · Hauptlauf',
    title: '10 km Hauptlauf',
    description: 'Die Strecke führt durch das malerische Tal von Langenordnach im Hochschwarzwald. Start und Ziel am Festzelt – mit Berg- & Sprintwertung und Verpflegung unterwegs.',
    stats: [
      { label: 'Distanz', val: '10', unit: 'km' },
      { label: 'Startzeit', val: '17:30', unit: 'Uhr' },
      { label: 'Wertung', val: 'Berg &', unit: 'Sprint' },
      { label: 'Start / Ziel', val: 'Festzelt', unit: 'Langenordnach' },
    ],
    komootEmbedUrl: 'https://www.komoot.com/tour/2647109972/embed?share_token=aMacGBnYSf3MJHVzURWvLect9tPh7VIdq18VtavLgXXPbAHqb7&profile=1',
    komootUrl: 'https://www.komoot.com/de-DE/tour/2647109972?share_token=aMacGBnYSf3MJHVzURWvLect9tPh7VIdq18VtavLgXXPbAHqb7',
  },
  '1k': {
    eyebrow: 'Streckenprofil · Schülerlauf',
    title: '1,5 km Schülerlauf',
    description: 'Die Schülerlaufstrecke führt durch das Tal von Langenordnach – der perfekte Einstieg für junge Läuferinnen und Läufer. Chip-Zeitmessung, kein Zeitlimit.',
    stats: [
      { label: 'Distanz', val: '1,5', unit: 'km' },
      { label: 'Startzeit', val: '17:00', unit: 'Uhr' },
      { label: 'Zeitmessung', val: 'Chip', unit: 'Timing' },
      { label: 'Start / Ziel', val: 'Festzelt', unit: 'Langenordnach' },
    ],
    komootEmbedUrl: 'https://www.komoot.com/tour/2797905460/embed?share_token=arZBuN1TfVbplil8zUdo853wxaYYWwRVWRgEhYRzBxHMWPDTuf&profile=1',
    komootUrl: 'https://www.komoot.com/de-DE/tour/2797905460?share_token=arZBuN1TfVbplil8zUdo853wxaYYWwRVWRgEhYRzBxHMWPDTuf',
  },
};

export default function StreckenDetail({ route, setActiveTab }) {
  const data = ROUTES[route];
  if (!data) return null;

  return (
    <div id="strecken-detail-page">
      <div className="detail-topbar">
        <button className="detail-back-btn" onClick={() => setActiveTab('strecken')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Alle Strecken
        </button>
      </div>

      <div className="detail-header">
        <p className="section-eyebrow">{data.eyebrow}</p>
        <h1 className="section-title">{data.title}</h1>
        <p className="section-lead">{data.description}</p>
      </div>

      <div className="detail-stats-row">
        {data.stats.map((s) => (
          <div className="detail-stat" key={s.label}>
            <div className="detail-stat-label">{s.label}</div>
            <div className="detail-stat-val">
              {s.val}<span className="detail-stat-unit">{s.unit}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="komoot-section">
        <div className="komoot-embed-wrap">
          <iframe
            src={data.komootEmbedUrl}
            width="100%"
            height="580"
            frameBorder="0"
            allowFullScreen
            title={`Strecke: ${data.title}`}
          />
        </div>
        <div className="komoot-open-row">
          <span className="komoot-hint">Interaktive Karte mit Höhenprofil</span>
          <a
            href={data.komootUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-komoot"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Auf Komoot öffnen
          </a>
        </div>
      </div>
    </div>
  );
}
