import { ExternalLink, ShieldAlert, Newspaper } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader';
import {
  INTEREST_RESOURCES,
  INTERNET_SAFETY_FEATURED,
  REPORTING_RESOURCES,
} from '../data/siteData';
import './InfoResources.scss';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.35, delay },
});

function ResourceGroup({ title, icon: Icon, items, delay = 0 }) {
  return (
    <motion.section className="info-resources__group" {...fadeUp(delay)}>
      <div className="info-resources__group-head">
        <div className="info-resources__group-icon">
          <Icon size={18} />
        </div>
        <div>
          <h3>{title}</h3>
          <p>Accesos directos a recursos externos oficiales.</p>
        </div>
      </div>

      <div className="info-resources__cards">
        {items.map((item) => (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="info-resources__card"
          >
            <div className="info-resources__logo-wrap">
              <img src={item.image} alt={item.title} loading="lazy" />
            </div>
            <div className="info-resources__card-body">
              <strong>{item.title}</strong>
              <span>{item.description}</span>
            </div>
            <ExternalLink size={16} className="info-resources__card-link" />
          </a>
        ))}
      </div>
    </motion.section>
  );
}

export default function InfoResources() {
  return (
    <section className="info-resources section">
      <div className="container">
        <SectionHeader
          label="Mantente informado"
          title="Paginas de interés y canales de denuncia"
          subtitle="Recursos oficiales para orientarte, protegerte y reportar situaciones que requieran atención institucional."
        />

        <div className="info-resources__layout">
          <motion.article className="info-resources__featured" {...fadeUp()}>
            <div className="info-resources__featured-copy">
              <span className="info-resources__featured-tag">Recurso destacado</span>
              <h3>{INTERNET_SAFETY_FEATURED.title}</h3>
              <p>{INTERNET_SAFETY_FEATURED.description}</p>
              <span>{INTERNET_SAFETY_FEATURED.detail}</span>
              <a
                href={INTERNET_SAFETY_FEATURED.href}
                target="_blank"
                rel="noopener noreferrer"
                className="info-resources__featured-link"
              >
                Leer más
                <ExternalLink size={16} />
              </a>
            </div>

            <div className="info-resources__featured-media">
              <img
                src={INTERNET_SAFETY_FEATURED.image}
                alt="Internet sano"
                loading="lazy"
              />
            </div>
          </motion.article>

          <div className="info-resources__groups">
            <ResourceGroup
              title="Paginas de interés"
              icon={Newspaper}
              items={INTEREST_RESOURCES}
              delay={0.05}
            />
            <ResourceGroup
              title="Denuncias y protección"
              icon={ShieldAlert}
              items={REPORTING_RESOURCES}
              delay={0.1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
