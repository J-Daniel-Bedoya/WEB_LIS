import { motion } from 'framer-motion';
import { ChevronRight, MessageCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import { CONTACT_INFO } from '../data/siteData';
import './CTA.scss';

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta__bg" />
      <div className="container">
        <motion.div
          className="cta__content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="cta__title">
            Contrata con una empresa cercana, consolidada y preparada para responder
          </h2>
          <p className="cta__subtitle">
            Planes claros, cobertura validada y atención comercial por WhatsApp, teléfono y correo.
          </p>
          <div className="cta__actions">
            <Button variant="primary" size="lg" to="/planes" icon={ChevronRight} iconRight>
              Ver planes
            </Button>
            <Button
              variant="whatsapp"
              size="lg"
              href={CONTACT_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              icon={MessageCircle}
            >
              Hablar con un asesor
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
