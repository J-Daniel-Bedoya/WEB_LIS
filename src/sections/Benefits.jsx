import { motion } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader';
import { BENEFITS } from '../data/siteData';
import './Benefits.scss';

export default function Benefits() {
  return (
    <section className="benefits section">
      <div className="container">
        <SectionHeader
          label="Ventajas"
          title="Lo que respalda el servicio"
          subtitle="Cobertura local, soporte cercano y una operacion formal respaldada por atencion y cumplimiento."
        />

        <div className="benefits__grid">
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                className="benefits__item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="benefits__icon">
                  <Icon size={24} />
                </div>
                <h3 className="benefits__title">{benefit.title}</h3>
                <p className="benefits__description">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
