import { useEffect, useState } from 'react';

const photoModules = import.meta.glob('/resources/photos/*.{jpg,jpeg,JPG,JPEG,png,PNG}', {
  eager: true,
  import: 'default',
});

const photos = Object.values(photoModules);

export default function Fotos() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (selected === null) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setSelected(null);
      if (e.key === 'ArrowRight') setSelected((i) => (i + 1) % photos.length);
      if (e.key === 'ArrowLeft') setSelected((i) => (i - 1 + photos.length) % photos.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selected]);

  return (
    <section id="fotos-page">
      <h2 className="section-title">Fotos</h2>
      <p className="section-lead">Eindrücke vom Sportivo Orne Lauf 2026</p>

      <div className="foto-grid">
        {photos.map((src, i) => (
          <button
            key={src}
            className="foto-thumb"
            onClick={() => setSelected(i)}
            aria-label={`Foto ${i + 1} vergrößern`}
          >
            <img src={src} alt={`Orne Lauf Foto ${i + 1}`} loading="lazy" />
          </button>
        ))}
      </div>

      {selected !== null && (
        <div className="foto-lightbox" onClick={() => setSelected(null)}>
          <button className="foto-lightbox-close" onClick={() => setSelected(null)} aria-label="Schließen">×</button>
          <img src={photos[selected]} alt={`Orne Lauf Foto ${selected + 1}`} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}