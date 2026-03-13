import { motion } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader';
import { BILLING_TIMELINE } from '../data/siteData';
import './BillingTimeline.scss';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.35, delay },
});

export default function BillingTimeline() {
  return (
    <section className="billing-timeline section" aria-label="Línea del tiempo de facturación">
      <div className="container">
        <SectionHeader
          label="Facturación"
          title="Línea del tiempo de facturación"
          subtitle="Fechas clave para saber cuando se genera la factura, cuando vence y que ocurre si el pago se retrasa."
        />

        <motion.div className="billing-timeline__summary" {...fadeUp()}>
          <p>
            Este calendario resume el ciclo mensual de facturación publicado por LIS y
            ayuda a que cada usuario tenga una referencia clara del proceso.
          </p>
        </motion.div>

        <div className="billing-timeline__grid">
          {BILLING_TIMELINE.map((item, index) => (
            <motion.article
              key={item.title}
              className="billing-timeline__item"
              {...fadeUp(index * 0.05)}
            >
              <div className="billing-timeline__marker" aria-hidden="true">
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>

              <div className="billing-timeline__content">
                <p className="billing-timeline__title">{item.title}</p>
                <strong>{item.schedule}</strong>
                <span>{item.detail}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
