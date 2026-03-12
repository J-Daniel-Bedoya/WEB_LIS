import { motion } from 'framer-motion';
import { ChevronRight, MapPin, ShieldCheck, Zap } from 'lucide-react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { STATS, HERO_HIGHLIGHTS, COMPANY_COPY } from '../data/siteData';
import './Hero.scss';

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__bg">
        <div className="hero__bg-grid" />
        <div className="hero__bg-glow" />
        <div className="hero__bg-wash" />
      </div>

      <div className="container hero__container">
        <div className="hero__content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="highlight">{COMPANY_COPY.heroBadge}</Badge>
          </motion.div>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            Conectividad con respaldo real para hogares, negocios y zonas especiales del{' '}
            <span className="hero__title-highlight">Occidente Antioqueño</span>
          </motion.h1>

          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            Fibra optica y radioenlace con cobertura regional, soporte local y una operacion
            formal pensada para hogares, negocios y zonas especiales.
          </motion.p>

          <motion.ul
            className="hero__list"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
          >
            {HERO_HIGHLIGHTS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </motion.ul>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
          >
            <Button variant="primary" size="lg" to="/planes" icon={ChevronRight} iconRight>
              Ver planes
            </Button>
            <Button variant="secondary" size="lg" to="/cobertura" icon={MapPin}>
              Verificar cobertura
            </Button>
          </motion.div>

          <motion.div
            className="hero__features"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <div className="hero__feature">
              <Zap size={16} />
              <span>Planes claros por segmento</span>
            </div>
            <div className="hero__feature">
              <ShieldCheck size={16} />
              <span>Empresa formal y documentada</span>
            </div>
            <div className="hero__feature">
              <MapPin size={16} />
              <span>Cobertura con presencia regional</span>
            </div>
          </motion.div>
        </div>

        <motion.aside
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.28 }}
        >
          <div className="hero__card">
            <div className="hero__card-header">
              <span className="hero__card-badge">Empresa conectada</span>
              <span className="hero__card-popular">Cobertura + soporte</span>
            </div>

            <div className="hero__card-speed">
              <span className="hero__card-number">Lun-Sab</span>
              <div className="hero__card-unit">
                <span>Horarios</span>
                <span>publicados</span>
              </div>
            </div>

            <div className="hero__card-price hero__card-price--meta">
              <span className="hero__card-amount">Fibra · Radio · Soporte</span>
            </div>

            <ul className="hero__card-features">
              <li>Planes para hogar y empresa</li>
              <li>Soporte remoto SGM-R</li>
              <li>Centro legal disponible</li>
              <li>Canales por municipio y horarios visibles</li>
            </ul>

            <Button variant="primary" size="md" to="/legal" style={{ width: '100%' }}>
              Ver respaldo institucional
            </Button>
          </div>
        </motion.aside>
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
                transition={{ duration: 0.4, delay: 0.55 + index * 0.08 }}
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
