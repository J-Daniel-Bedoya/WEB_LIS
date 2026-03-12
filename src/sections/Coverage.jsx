import { motion } from 'framer-motion';
import { Wifi, Radio, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { LOCATIONS, CONTACT_INFO } from '../data/siteData';
import coverageMap from '../assets/images/coverage-map.gif';
import './Coverage.scss';

function getMaxSpeed(location) {
  let max = 0;
  if (location.fiber?.plans) {
    for (const p of location.fiber.plans) {
      if (p.speed > max) max = p.speed;
    }
  }
  if (location.radio?.plans) {
    for (const p of location.radio.plans) {
      if (p.speed > max) max = p.speed;
    }
  }
  return max;
}

function getServices(location) {
  const s = [];
  if (location.fiber) s.push('Fibra');
  if (location.radio) s.push('Radio');
  return s;
}

export default function Coverage() {
  // Only show municipios and named corregimientos (not tiny sub-locations like Pueblito/Guamal that only have TV)
  const fiberLocations = LOCATIONS.filter((l) => l.fiber?.plans?.length);
  const radioLocations = LOCATIONS.filter((l) => l.radio?.plans?.length);
  const municipioCount = LOCATIONS.filter((l) => l.type === 'municipio').length;

  return (
    <section id="cobertura" className="coverage section section--dark">
      <div className="container">
        <SectionHeader
          label="Cobertura"
          title="Cobertura por municipio, tecnología y servicio"
          subtitle="Hacemos click en cada ubicación para ver los planes disponibles con precios reales."
          light
        />

        <div className="coverage__content">
          <motion.div
            className="coverage__map"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="coverage__map-visual">
              <img src={coverageMap} alt="Mapa de cobertura de Logística Integral Satelital" className="coverage__map-image" />
              <div className="coverage__map-info">
                <span className="coverage__map-count">{municipioCount}</span>
                <span className="coverage__map-label">Municipios</span>
                <span className="coverage__map-sublabel">Cobertura regional visible</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="coverage__zones"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <div className="coverage__group">
              <div className="coverage__group-header">
                <Wifi size={18} />
                <h3>Fibra óptica</h3>
                <Badge variant="fiber">Mayor velocidad</Badge>
              </div>
              <div className="coverage__group-grid">
                {fiberLocations.map((loc) => (
                  <Link
                    key={loc.id}
                    to={`/planes?ubicacion=${loc.id}`}
                    className="coverage__zone coverage__zone--link"
                  >
                    <span className="coverage__zone-dot coverage__zone-dot--fiber" />
                    <span className="coverage__zone-name">
                      {loc.name}
                      {loc.parentName && <small> ({loc.parentName})</small>}
                    </span>
                    <span className="coverage__zone-speed">
                      hasta {getMaxSpeed(loc)} Mb
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="coverage__group">
              <div className="coverage__group-header">
                <Radio size={18} />
                <h3>Radioenlace</h3>
                <Badge variant="radio">Cobertura rural</Badge>
              </div>
              <div className="coverage__group-grid">
                {radioLocations.map((loc) => (
                  <Link
                    key={loc.id}
                    to={`/planes?ubicacion=${loc.id}`}
                    className="coverage__zone coverage__zone--link"
                  >
                    <span className="coverage__zone-dot coverage__zone-dot--radio" />
                    <span className="coverage__zone-name">
                      {loc.name}
                      {loc.parentName && <small> ({loc.parentName})</small>}
                    </span>
                    <span className="coverage__zone-speed">
                      hasta {getMaxSpeed(loc)} Mb
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="coverage__cta">
              <p>Si tu zona no aparece, validamos cobertura por municipio, vereda o referencia exacta.</p>
              <Button
                variant="whatsapp"
                size="md"
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                icon={MessageCircle}
              >
                Consultar cobertura
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
