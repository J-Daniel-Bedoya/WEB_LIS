import { useState, useEffect, useMemo } from 'react';
import { useLocation as useRouterLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock, MessageCircle, ShieldCheck, RadioTower, Wrench } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import { CONTACT_INFO } from '../data/siteData';
import { getAllLocationOptions, getAvailablePlansForLocation, formatPrice } from '../utils/planUtils';
import './Contact.scss';

const TRUST_POINTS = [
  {
    icon: RadioTower,
    title: 'Cobertura validada',
    text: 'Confirmamos si tu sector aplica para fibra o radioenlace antes de ofrecerte un plan.',
  },
  {
    icon: Wrench,
    title: 'Soporte real',
    text: 'Canales visibles para atencion comercial, orientacion remota y seguimiento tecnico.',
  },
  {
    icon: ShieldCheck,
    title: 'Empresa formal',
    text: 'Informacion institucional, ubicacion y documentos regulatorios integrados al sitio.',
  },
];

const locationGroups = getAllLocationOptions();
const flatLocations = locationGroups.flatMap((group) => group.options);

export default function Contact() {
  const routerLocation = useRouterLocation();
  const incomingState = routerLocation.state || {};

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    locationId: incomingState.locationId || '',
    plan: incomingState.planLabel || '',
    message: '',
  });

  const planOptions = useMemo(() => {
    if (!formData.locationId) return [];
    return getAvailablePlansForLocation(formData.locationId);
  }, [formData.locationId]);

  useEffect(() => {
    if (formData.locationId && planOptions.length > 0) {
      const planExists = planOptions.some((plan) => plan.label === formData.plan);
      if (!planExists && !incomingState.planLabel) {
        setFormData((prev) => ({ ...prev, plan: '' }));
      }
    }
  }, [formData.locationId, planOptions, formData.plan, incomingState.planLabel]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const locationName =
      flatLocations.find((location) => location.id === formData.locationId)?.label || formData.locationId;

    const text = [
      'Hola, me interesa contratar internet.',
      '',
      `Nombre: ${formData.name}`,
      `Telefono: ${formData.phone}`,
      `Ubicacion: ${locationName}`,
      formData.plan ? `Plan: ${formData.plan}` : '',
      formData.message ? `Mensaje: ${formData.message}` : '',
    ]
      .filter(Boolean)
      .join('%0A');

    window.open(`https://api.whatsapp.com/send?phone=${CONTACT_INFO.whatsappPhone}&text=${text}`, '_blank');
  };

  return (
    <section id="contacto" className="contact section section--dark">
      <div className="container">
        <SectionHeader
          label="Contacto"
          title="Habla con un asesor y valida la mejor solucion para tu sector"
          subtitle="Ubicacion visible, canales reales y una solicitud simple. Te contactamos por WhatsApp para validar cobertura y plan."
          light
        />

        <div className="contact__trust">
          {TRUST_POINTS.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="contact__trust-item">
                <div className="contact__trust-icon">
                  <Icon size={18} />
                </div>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="contact__grid">
          <motion.form
            className="contact__form-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
          >
            <div className="contact__form-header">
              <h3>Solicita cobertura o cotizacion</h3>
              <p>
                Diligencia tus datos y te contactamos por WhatsApp para validar cobertura,
                tecnologia disponible y plan recomendado.
              </p>
            </div>

            <div className="contact__form">
              <div className="contact__field">
                <label htmlFor="contact-name">Nombre completo</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-phone">Telefono</label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="300 123 4567"
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-location">Ubicacion</label>
                <select
                  id="contact-location"
                  name="locationId"
                  value={formData.locationId}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona tu ubicacion</option>
                  {locationGroups.map((group) => (
                    <optgroup key={group.label} label={group.label}>
                      {group.options.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.label}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>

              <div className="contact__field">
                <label htmlFor="contact-plan">Servicio de interes</label>
                <select
                  id="contact-plan"
                  name="plan"
                  value={formData.plan}
                  onChange={handleChange}
                >
                  <option value="">
                    {formData.locationId ? 'Selecciona un plan' : 'Primero selecciona tu ubicacion'}
                  </option>
                  {planOptions.map((option) => (
                    <option key={option.id} value={option.label}>
                      {option.label} - ${formatPrice(option.price)}/mes
                    </option>
                  ))}
                </select>
              </div>

              <div className="contact__field contact__field--full">
                <label htmlFor="contact-message">Mensaje</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuentanos si necesitas servicio para hogar, negocio o zona rural."
                  rows={4}
                />
              </div>

              <Button type="submit" variant="primary" size="lg" icon={Send} className="contact__submit">
                Enviar por WhatsApp
              </Button>
            </div>
          </motion.form>

          <motion.aside
            className="contact__info"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}
          >
            <div className="contact__info-card">
              <div className="contact__info-head">
                <h3>Canales de atencion</h3>
                <p>Presencia local, soporte visible y contacto directo para procesos comerciales y tecnicos.</p>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <strong>WhatsApp principal</strong>
                  <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <strong>Telefonos por municipio</strong>
                  <div className="contact__meta-list">
                    {CONTACT_INFO.municipalityPhones.map((line) => (
                      <div key={line.label} className="contact__meta-entry">
                        <a href={`tel:${line.dial}`}>
                          {line.label}: {line.phone}
                        </a>
                        {line.note ? <span>{line.note}</span> : null}
                      </div>
                    ))}
                    <div className="contact__meta-entry">
                      <a href={`tel:${CONTACT_INFO.landlineDial}`}>Oficina: {CONTACT_INFO.landline}</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <strong>Correo</strong>
                  <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <strong>Ubicacion</strong>
                  <span>{CONTACT_INFO.address}</span>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <Clock size={20} />
                </div>
                <div>
                  <strong>Horario y soporte</strong>
                  <div className="contact__meta-list">
                    {CONTACT_INFO.officeHours.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                    {CONTACT_INFO.supportHours.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
