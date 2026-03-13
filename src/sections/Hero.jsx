import { motion } from 'framer-motion';
import { ChevronRight, MapPin, ShieldCheck, Zap } from 'lucide-react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { STATS, HERO_HIGHLIGHTS } from '../data/siteData';
import './Hero.scss';

const HERO_IMAGE = '/uploads/2024/03/Banner-1.jpeg';

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__backdrop">
        <div className="hero__backdrop-grid" />
        <div className="hero__backdrop-glow hero__backdrop-glow--left" />
        <div className="hero__backdrop-glow hero__backdrop-glow--right" />
      </div>

      <div className="container hero__container">
        <div className="hero__surface">
          <div className="hero__grid">
            <div className="hero__content">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge variant="highlight" className="hero__badge">
                  Occidente Antioqueño conectado con soporte local
                </Badge>
              </motion.div>

              <motion.h1
                className="hero__title"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
              >
                <span className="hero__title-prefix">LIS.</span> Tu puerta de entrada a la Web
              </motion.h1>

              <motion.p
                className="hero__subtitle"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.16 }}
              >
                Fibra óptica y radioenlace para hogares, negocios y zonas especiales, con
                cobertura regional y acompañamiento técnico desde la instalación hasta
                el soporte.
              </motion.p>

              <motion.ul
                className="hero__list"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.24 }}
              >
                {HERO_HIGHLIGHTS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </motion.ul>

              <motion.div
                className="hero__actions"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.32 }}
              >
                <Button variant="primary" size="lg" to="/planes" icon={ChevronRight} iconRight>
                  Ver planes
                </Button>
                <Button variant="secondary" size="lg" to="/cobertura" icon={MapPin}>
                  Verificar cobertura
                </Button>
              </motion.div>

              <motion.div
                className="hero__trust"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.55, delay: 0.4 }}
              >
                <div className="hero__trust-item">
                  <Zap size={16} />
                  <span>Planes claros por tecnología y segmento</span>
                </div>
                <div className="hero__trust-item">
                  <ShieldCheck size={16} />
                  <span>Trayectoria desde 2012 con respaldo regulatorio</span>
                </div>
              </motion.div>
            </div>

            <motion.aside
              className="hero__visual"
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.18 }}
            >
              <div className="hero__media">
                <img
                  src={HERO_IMAGE}
                  alt="Vista regional del Occidente Antioqueño"
                  className="hero__image"
                />
                <div className="hero__media-overlay" />
              </div>

              <div className="hero__floating hero__floating--primary">
                <strong>Cobertura regional</strong>
                <span>Sedes y municipios conectados en Occidente Antioqueño.</span>
              </div>

              <div className="hero__floating hero__floating--secondary">
                <span className="hero__floating-label">Atención comercial</span>
                <strong>WhatsApp, oficinas y soporte</strong>
              </div>
            </motion.aside>
          </div>
        </div>
      </div>

      <div className="hero__stats">
        <div className="container">
          <div className="hero__stats-grid">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="hero__stat"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.52 + index * 0.08 }}
              >
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
