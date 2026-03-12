import { motion } from 'framer-motion';
import { MapPin, ClipboardList, Wrench } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import { STEPS } from '../data/siteData';
import './HowItWorks.scss';

const ICONS = [MapPin, ClipboardList, Wrench];

export default function HowItWorks() {
  return (
    <section className="how-it-works section section--gray">
      <div className="container">
        <SectionHeader
          label="¿Cómo funciona?"
          title="Tu internet en 3 pasos"
          subtitle="Proceso simple, rápido y sin complicaciones. En menos de 48 horas estarás conectado."
        />

        <div className="how-it-works__grid">
          {STEPS.map((step, index) => {
            const Icon = ICONS[index];
            return (
              <motion.div
                key={step.step}
                className="how-it-works__step"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
              >
                <div className="how-it-works__step-number">{step.step}</div>
                <div className="how-it-works__step-icon">
                  <Icon size={28} />
                </div>
                <h3 className="how-it-works__step-title">{step.title}</h3>
                <p className="how-it-works__step-description">{step.description}</p>
                {index < STEPS.length - 1 && (
                  <div className="how-it-works__connector" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
