import { motion } from 'framer-motion';
import './SectionHeader.scss';

export default function SectionHeader({ label, title, subtitle, align = 'center', light = false }) {
  return (
    <motion.div
      className={`section-header section-header--${align} ${light ? 'section-header--light' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      {label && <span className="section-header__label">{label}</span>}
      <h2 className="section-header__title">{title}</h2>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </motion.div>
  );
}
