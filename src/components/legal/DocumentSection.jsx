import { ExternalLink, FileText } from 'lucide-react';
import './DocumentSection.scss';

export default function DocumentSection({ title, description, items }) {
  return (
    <section className="document-section">
      <div className="document-section__header">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>

      <div className="document-section__grid">
        {items.map((item) => (
          <article key={`${item.title}-${item.href}`} className="document-section__card">
            <div className="document-section__card-icon">
              <FileText size={18} />
            </div>
            <div className="document-section__card-copy">
              <h3>{item.title}</h3>
              <p>{item.meta ?? 'Documento oficial disponible para consulta y descarga.'}</p>
            </div>
            <a href={item.href} target="_blank" rel="noopener noreferrer" className="document-section__link">
              <span>Abrir documento</span>
              <ExternalLink size={16} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
