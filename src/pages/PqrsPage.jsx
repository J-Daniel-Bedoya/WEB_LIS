import { useState } from 'react';
import { Clock3, Mail, MessagesSquare, Phone, Send } from 'lucide-react';
import Button from '../components/ui/Button';
import PageHero from '../components/layout/PageHero';
import LegalMenu from '../components/legal/LegalMenu';
import DocumentSection from '../components/legal/DocumentSection';
import { PQRS_TYPES, PQRS_STEPS, POLICY_DOCS } from '../data/legalData';
import { CONTACT_INFO } from '../data/siteData';
import './Pages.scss';

export default function PqrsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`PQRSF ${formData.type || ''} - ${formData.name}`);
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nCorreo: ${formData.email}\nTeléfono: ${formData.phone}\nTipo: ${formData.type}\n\nMensaje:\n${formData.message}`
    );
    window.location.href = `mailto:lis.sopetran2018@gmail.com?subject=${subject}&body=${body}`;
  };

  const relatedDocs = POLICY_DOCS.filter(
    (d) => d.title.includes('PQRSF') || d.title.includes('Contrato')
  );

  return (
    <>
      <PageHero
        eyebrow="PQRSF"
        title="Peticiones, quejas, reclamos, sugerencias y felicitaciones"
        description="Radica tu solicitud por correo o utiliza nuestros canales de atención para seguimiento y respuesta."
      />

      <section className="page-section">
        <div className="container">
          <div className="page-shell">
            <LegalMenu />

            <div className="page-content">
              <div className="page-summary">
                <article className="page-summary__card">
                  <strong>Canales de radicación</strong>
                  <p>
                    Correo, teléfono y WhatsApp visibles para recibir solicitudes y dar
                    seguimiento al caso.
                  </p>
                  <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
                  <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer">
                    {CONTACT_INFO.phone}
                  </a>
                </article>

                <article className="page-summary__card">
                  <strong>Antes de enviar</strong>
                  <p>
                    Usa PQRSF de forma responsable y constructiva. Incluye nombre, teléfono,
                    correo y el detalle completo para facilitar la respuesta.
                  </p>
                </article>

                <article className="page-summary__card">
                  <strong>Consulta de respuestas</strong>
                  <p>
                    Si necesitas validar una respuesta emitida, comunicate con tu nombre e
                    identificación para revisar el caso.
                  </p>
                  <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer">
                    Solicitar seguimiento
                  </a>
                </article>
              </div>

              <div className="pqrs-info-grid">
                <article className="pqrs-info-card">
                  <div className="pqrs-info-card__icon">
                    <Mail size={18} />
                  </div>
                  <div className="pqrs-info-card__body">
                    <strong>Correo de radicación</strong>
                    <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
                    <span>Ideal para dejar registro formal de la solicitud.</span>
                  </div>
                </article>

                <article className="pqrs-info-card">
                  <div className="pqrs-info-card__icon">
                    <Phone size={18} />
                  </div>
                  <div className="pqrs-info-card__body">
                    <strong>Teléfono y WhatsApp</strong>
                    <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer">
                      {CONTACT_INFO.phone}
                    </a>
                    <span>Usalo para soporte, validación de datos y seguimiento.</span>
                  </div>
                </article>

                <article className="pqrs-info-card">
                  <div className="pqrs-info-card__icon">
                    <MessagesSquare size={18} />
                  </div>
                  <div className="pqrs-info-card__body">
                    <strong>Consulta de respuestas</strong>
                    <span>
                      Para consultar una respuesta emitida, comparte nombre, identificación y
                      datos de contacto del titular.
                    </span>
                  </div>
                </article>

                <article className="pqrs-info-card">
                  <div className="pqrs-info-card__icon">
                    <Clock3 size={18} />
                  </div>
                  <div className="pqrs-info-card__body">
                    <strong>Horario de oficinas</strong>
                    <span>{CONTACT_INFO.schedule}</span>
                    <span>{CONTACT_INFO.supportSchedule}</span>
                  </div>
                </article>
              </div>

              {/* Process Steps */}
              <div className="pqrs-steps">
                {PQRS_STEPS.map((step) => (
                  <div key={step.step} className="pqrs-step">
                    <div className="pqrs-step__number">{step.step}</div>
                    <div className="pqrs-step__body">
                      <strong>{step.title}</strong>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Form */}
              <form className="page-form" onSubmit={handleSubmit}>
                <div className="page-form__field">
                  <label htmlFor="pqrs-name">Nombre completo</label>
                  <input id="pqrs-name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="page-form__field">
                  <label htmlFor="pqrs-email">Correo electrónico</label>
                  <input id="pqrs-email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="page-form__field">
                  <label htmlFor="pqrs-phone">Teléfono</label>
                  <input id="pqrs-phone" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="page-form__field">
                  <label htmlFor="pqrs-type">Tipo de solicitud</label>
                  <select id="pqrs-type" name="type" value={formData.type} onChange={handleChange} required>
                    <option value="">Selecciona una opción</option>
                    {PQRS_TYPES.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                </div>
                <div className="page-form__field page-form__field--full">
                  <label htmlFor="pqrs-message">Detalle de la solicitud</label>
                  <textarea id="pqrs-message" name="message" value={formData.message} onChange={handleChange} required />
                </div>
                <Button type="submit" className="page-form__submit">
                  <Send size={16} />
                  Radicar por correo
                </Button>
              </form>

              <div className="pqrs-inline-actions">
                <Button
                  variant="outline"
                  size="md"
                  href={CONTACT_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Seguimiento por WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  href={`mailto:${CONTACT_INFO.email}`}
                >
                  Solicitar respuesta por correo
                </Button>
              </div>

              <DocumentSection
                title="Documentos relacionados"
                description="Consulta el procedimiento de PQRSF y el contrato vigente."
                items={relatedDocs}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
