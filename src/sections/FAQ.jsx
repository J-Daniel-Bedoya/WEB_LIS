import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import { FAQS } from '../data/siteData';
import './FAQ.scss';

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
      <button className="faq__question" onClick={onToggle} aria-expanded={isOpen}>
        <span>{faq.question}</span>
        <ChevronDown size={20} className="faq__chevron" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="faq__answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p>{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="soporte" className="faq section">
      <div className="container container--narrow">
        <SectionHeader
          label="Preguntas frecuentes"
          title="¿Tienes dudas?"
          subtitle="Encuentra respuestas a las preguntas más comunes sobre nuestros servicios."
        />

        <div className="faq__list">
          {FAQS.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
