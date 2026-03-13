import { motion } from 'framer-motion';
import { Building2, Eye, MapPin, Phone, Target } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import {
  ABOUT_PILLARS,
  ABOUT_TIMELINE,
  COMPANY_GALLERY,
  COMPANY_MISSION,
  COMPANY_OFFICES,
  COMPANY_STORY,
  COMPANY_VALUES,
  COMPANY_VISION,
} from '../data/siteData';
import './About.scss';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

export default function About() {
  const leadMedia = COMPANY_GALLERY[0];
  const gridMedia = COMPANY_GALLERY.slice(1, 5);
  const filmMedia = COMPANY_GALLERY.slice(5);

  return (
    <section id="nosotros" className="about section">
      {/* ── STORY + STATS ── */}
      <div className="container">
        <SectionHeader
          label="Empresa"
          title="Historia, presencia y propósito de LIS"
          subtitle="Lo que nos hace diferentes en el territorio y en la forma de operar"
          align="left"
        />

        <div className="about__intro">
          <motion.div className="about__story" {...fadeUp()}>
            <span className="about__eyebrow">Nuestra historia</span>
            {COMPANY_STORY.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.div className="about__stats-card" {...fadeUp(0.1)}>
            <div className="about__stat">
              <strong>2012</strong>
              <span>Operación formal</span>
            </div>
            <div className="about__stat">
              <strong>10+</strong>
              <span>Municipios conectados</span>
            </div>
            <div className="about__stat">
              <strong>5</strong>
              <span>Sedes de atención</span>
            </div>
            <div className="about__stat">
              <strong>100%</strong>
              <span>Compromiso regulatorio</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── MISSION / VISION ── */}
      <div className="about__band">
        <div className="container">
          <div className="about__principles">
            <motion.article className="about__principle" {...fadeUp()}>
              <div className="about__principle-icon">
                <Target size={22} />
              </div>
              <span className="about__principle-label">Mision</span>
              <h3>Compromiso con servicio, acceso y crecimiento sostenible</h3>
              <p>{COMPANY_MISSION}</p>
            </motion.article>

            <motion.article className="about__principle" {...fadeUp(0.1)}>
              <div className="about__principle-icon">
                <Eye size={22} />
              </div>
              <span className="about__principle-label">Vision</span>
              <h3>Ser una alternativa confiable y reconocida en telecomunicaciones</h3>
              <p>{COMPANY_VISION}</p>
            </motion.article>
          </div>
        </div>
      </div>

      {/* ── GALLERY BENTO ── */}
      <div className="container">
        <div className="about__gallery-head">
          <motion.span className="about__eyebrow" {...fadeUp()}>
            Operación en imágenes
          </motion.span>
          <motion.h3 {...fadeUp(0.05)}>
            Equipo, infraestructura y presencia local
          </motion.h3>
        </div>

        <div className="about__bento">
          <motion.figure className="about__bento-hero" {...fadeUp()}>
            <img src={leadMedia.src} alt={leadMedia.alt} loading="lazy" />
            <figcaption>
              <strong>{leadMedia.title}</strong>
              <span>{leadMedia.description}</span>
            </figcaption>
          </motion.figure>

          {gridMedia.map((item, i) => (
            <motion.figure
              key={item.src}
              className="about__bento-item"
              {...fadeUp(0.06 * (i + 1))}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <figcaption>
                <strong>{item.title}</strong>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {filmMedia.length > 0 && (
          <div className="about__film">
            {filmMedia.map((item, i) => (
              <motion.figure
                key={item.src}
                className="about__film-item"
                {...fadeUp(0.06 * i)}
              >
                <img src={item.src} alt={item.alt} loading="lazy" />
                <figcaption>
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        )}
      </div>

      {/* ── VALUES ── */}
      <div className="container">
        <div className="about__values-section">
          <div className="about__block-head">
            <motion.span className="about__eyebrow" {...fadeUp()}>
              Valores
            </motion.span>
            <motion.h3 {...fadeUp(0.05)}>
              Principios que sostienen la operación
            </motion.h3>
          </div>

          <div className="about__values-grid">
            {COMPANY_VALUES.map((value, index) => (
              <motion.article
                key={value.title}
                className="about__value"
                {...fadeUp(index * 0.06)}
              >
                <div className="about__value-accent" />
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* ── PILLARS ── */}
      <div className="about__pillars-band">
        <div className="container">
          <div className="about__pillars">
            {ABOUT_PILLARS.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  className="about__pillar"
                  {...fadeUp(index * 0.08)}
                >
                  <div className="about__pillar-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── OFFICES ── */}
      <div className="container">
        <div className="about__offices">
          <div className="about__block-head">
            <motion.span className="about__eyebrow" {...fadeUp()}>
              Nuestras sedes
            </motion.span>
            <motion.h3 {...fadeUp(0.05)}>
              Presencia física y soporte en la región
            </motion.h3>
          </div>

          <div className="about__offices-grid">
            {COMPANY_OFFICES.map((office, index) => (
              <motion.article
                key={office.name}
                className="about__office"
                {...fadeUp(index * 0.08)}
              >
                <div className="about__office-icon">
                  <Building2 size={20} />
                </div>
                <h4>{office.name}</h4>
                <div className="about__office-meta">
                  <span>
                    <Phone size={14} />
                    {office.phone}
                  </span>
                  <span>
                    <MapPin size={14} />
                    {office.address}
                  </span>
                </div>
                <p>{office.note}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* ── TIMELINE ── */}
      <div className="container">
        <div className="about__timeline-section">
          <div className="about__block-head">
            <motion.span className="about__eyebrow" {...fadeUp()}>
              Trayectoria
            </motion.span>
            <motion.h3 {...fadeUp(0.05)}>
              Hitos de crecimiento y consolidación
            </motion.h3>
          </div>

          <div className="about__timeline">
            {ABOUT_TIMELINE.map((item, index) => (
              <motion.div
                key={item.year}
                className="about__timeline-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="about__timeline-dot" />
                <span className="about__timeline-year">{item.year}</span>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
