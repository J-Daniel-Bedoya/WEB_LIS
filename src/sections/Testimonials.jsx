import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import { TESTIMONIALS } from '../data/siteData';
import './Testimonials.scss';

export default function Testimonials() {
  return (
    <section className="testimonials section section--gray">
      <div className="container">
        <SectionHeader
          label="Testimonios"
          title="Lo que dicen nuestros clientes"
          subtitle="La confianza de nuestros usuarios es nuestra mejor carta de presentación."
        />

        <div className="testimonials__grid">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="testimonials__card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Quote size={32} className="testimonials__quote-icon" />
              <div className="testimonials__stars">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testimonials__text">{testimonial.text}</p>
              <div className="testimonials__author">
                <div className="testimonials__avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <strong className="testimonials__name">{testimonial.name}</strong>
                  <span className="testimonials__location">{testimonial.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
