import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import { SERVICES } from '../data/siteData';
import './Services.scss';

export default function Services() {
  return (
    <section id="servicios" className="services section">
      <div className="container">
        <SectionHeader
          label="Servicios"
          title="Soluciones de conectividad"
          subtitle="Desde internet residencial hasta enlaces empresariales dedicados. Tenemos la solución para cada necesidad."
        />

        <div className="services__grid">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="services__card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="services__card-icon">
                  <Icon size={28} />
                </div>
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-description">{service.description}</p>
                <ul className="services__card-features">
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <ChevronRight size={14} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
