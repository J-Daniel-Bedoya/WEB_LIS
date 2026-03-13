import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import { REGULATORY_ITEMS } from '../data/siteData';
import './RegulatoryHub.scss';

export default function RegulatoryHub() {
  const [activeId, setActiveId] = useState(REGULATORY_ITEMS[0].id);
  const activeItem = REGULATORY_ITEMS.find((item) => item.id === activeId) ?? REGULATORY_ITEMS[0];

  const ActiveIcon = activeItem.icon;

  return (
    <section id="regulatorio" className="regulatory section section--dark">
      <div className="container">
        <SectionHeader
          label="Centro regulatorio"
          title="Información obligatoria, políticas y protección al usuario"
          subtitle="Información regulatoria ordenada y accesible, conectada con la experiencia comercial para respaldar confianza y cumplimiento."
          light
        />

        <div className="regulatory__summary">
          <div className="regulatory__summary-card">
            <span>Compromiso institucional</span>
            <strong>Documentación disponible para usuarios, autoridades y procesos comerciales.</strong>
          </div>
          <p>
            Este bloque ya no funciona como una rejilla suelta. Ahora organiza el contenido
            obligatorio en una navegación interna que puede crecer luego a páginas dedicadas sin
            romper la experiencia principal.
          </p>
        </div>

        <div className="regulatory__layout">
          <div className="regulatory__nav" role="tablist" aria-label="Centro regulatorio">
            {REGULATORY_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = item.id === activeId;

              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`regulatory__nav-item ${isActive ? 'regulatory__nav-item--active' : ''}`}
                  onClick={() => setActiveId(item.id)}
                >
                  <div className="regulatory__nav-icon">
                    <Icon size={18} />
                  </div>
                  <div className="regulatory__nav-copy">
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <motion.article
            key={activeItem.id}
            className="regulatory__panel"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22 }}
          >
            <div className="regulatory__panel-head">
              <div className="regulatory__panel-icon">
                <ActiveIcon size={20} />
              </div>
              <div>
                <h3>{activeItem.title}</h3>
                <p>{activeItem.summary}</p>
              </div>
            </div>

            <div className="regulatory__panel-body">
              <ul className="regulatory__panel-list">
                {activeItem.bullets.map((bullet) => (
                  <li key={bullet}>
                    <CheckCircle2 size={16} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="regulatory__panel-note">
                <strong>Enfoque recomendado</strong>
                <p>{activeItem.support}</p>
              </div>
            </div>

            <button type="button" className="regulatory__panel-link">
              <span>{activeItem.cta}</span>
              <ChevronRight size={16} />
            </button>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
