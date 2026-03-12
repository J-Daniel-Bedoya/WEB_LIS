import { motion } from 'framer-motion';
import { Building2, Eye, MapPin, Phone, Target } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import {
  ABOUT_PILLARS,
  ABOUT_TIMELINE,
  COMPANY_MISSION,
  COMPANY_OFFICES,
  COMPANY_STORY,
  COMPANY_VALUES,
  COMPANY_VISION,
} from '../data/siteData';
import './About.scss';

export default function About() {
  return (
    <section id="nosotros" className="about section">
      <div className="container">
        <SectionHeader
          label="Empresa"
          title="Historia, proposito y estructura institucional de LIS"
          subtitle="Una operacion regional con origen local, sedes visibles y principios institucionales que respaldan el servicio."
          align="left"
        />

        <div className="about__intro">
          <motion.div
            className="about__story"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <span className="about__eyebrow">Conoce nuestra historia</span>
            {COMPANY_STORY.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.div
            className="about__panel"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <span className="about__panel-label">Presencia operativa</span>
            <strong>Occidente Antioqueño</strong>
            <p>Sede principal en Sopetran y puntos de apoyo para atencion al cliente y soporte en la subregion.</p>

            <div className="about__mini-stats">
              <div>
                <span>Operacion formal</span>
                <strong>Desde 2012</strong>
              </div>
              <div>
                <span>Municipios conectados</span>
                <strong>10+</strong>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="about__principles">
          <motion.article
            className="about__principle"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className="about__principle-icon">
              <Target size={20} />
            </div>
            <span className="about__principle-label">Mision</span>
            <h3>Compromiso con servicio, acceso y crecimiento sostenible</h3>
            <p>{COMPANY_MISSION}</p>
          </motion.article>

          <motion.article
            className="about__principle"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <div className="about__principle-icon">
              <Eye size={20} />
            </div>
            <span className="about__principle-label">Vision</span>
            <h3>Ser una alternativa confiable y reconocida en telecomunicaciones</h3>
            <p>{COMPANY_VISION}</p>
          </motion.article>
        </div>

        <div className="about__offices">
          <div className="about__block-head">
            <span className="about__eyebrow">Nuestras sedes</span>
            <h3>Atencion real con presencia fisica y soporte local</h3>
          </div>

          <div className="about__offices-grid">
            {COMPANY_OFFICES.map((office, index) => (
              <motion.article
                key={office.name}
                className="about__office"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
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

        <div className="about__values">
          <div className="about__block-head">
            <span className="about__eyebrow">Valores</span>
            <h3>Principios que sostienen la operacion y la relacion con el usuario</h3>
          </div>

          <div className="about__values-grid">
            {COMPANY_VALUES.map((value, index) => (
              <motion.article
                key={value.title}
                className="about__value"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="about__pillars">
          {ABOUT_PILLARS.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                className="about__pillar"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="about__pillar-icon">
                  <Icon size={20} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="about__timeline-wrap">
          <div className="about__block-head">
            <span className="about__eyebrow">Trayectoria</span>
            <h3>Hitos de crecimiento y consolidacion</h3>
          </div>

          <div className="about__timeline">
            {ABOUT_TIMELINE.map((item, index) => (
              <motion.div
                key={item.year}
                className="about__timeline-item"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
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
