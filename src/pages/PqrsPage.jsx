import { useState } from 'react';
import Button from '../components/ui/Button';
import PageHero from '../components/layout/PageHero';
import LegalMenu from '../components/legal/LegalMenu';
import DocumentSection from '../components/legal/DocumentSection';
import { PQRS_TYPES, POLICY_DOCS } from '../data/legalData';
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
      `Nombre: ${formData.name}\nCorreo: ${formData.email}\nTelefono: ${formData.phone}\nTipo: ${formData.type}\n\nMensaje:\n${formData.message}`
    );
    window.location.href = `mailto:lis.sopetran2018@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <PageHero
        eyebrow="PQRSF"
        title="Peticiones, quejas, reclamos, sugerencias y felicitaciones"
        description="Radica tu solicitud por correo o utiliza nuestros canales de atencion para seguimiento y respuesta."
      />

      <section className="page-section">
        <div className="container">
          <div className="page-shell">
            <LegalMenu />

            <div className="page-content">
              <div className="page-summary">
                <article className="page-summary__card">
                  <strong>Canales de atencion</strong>
                  <p>WhatsApp, telefono, correo electronico y formulario digital.</p>
                </article>
                <article className="page-summary__card">
                  <strong>Soporte documental</strong>
                  <p>Consulta el procedimiento de PQRSF y el contrato vigente.</p>
                </article>
                <article className="page-summary__card">
                  <strong>Respuesta y seguimiento</strong>
                  <p>Incluye tus datos de contacto para facilitar la gestion de tu caso.</p>
                </article>
              </div>

              <form className="page-form" onSubmit={handleSubmit}>
                <div className="page-form__field">
                  <label htmlFor="pqrs-name">Nombre completo</label>
                  <input id="pqrs-name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="page-form__field">
                  <label htmlFor="pqrs-email">Correo electronico</label>
                  <input id="pqrs-email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="page-form__field">
                  <label htmlFor="pqrs-phone">Telefono</label>
                  <input id="pqrs-phone" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="page-form__field">
                  <label htmlFor="pqrs-type">Tipo de solicitud</label>
                  <select id="pqrs-type" name="type" value={formData.type} onChange={handleChange} required>
                    <option value="">Selecciona una opcion</option>
                    {PQRS_TYPES.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="page-form__field page-form__field--full">
                  <label htmlFor="pqrs-message">Detalle de la solicitud</label>
                  <textarea id="pqrs-message" name="message" value={formData.message} onChange={handleChange} required />
                </div>
                <Button type="submit" className="page-form__submit">
                  Radicar por correo
                </Button>
              </form>

              <DocumentSection
                title="Politica y procedimiento aplicable"
                description="Documentos de consulta para la gestion y seguimiento de solicitudes."
                items={POLICY_DOCS.filter((item) => item.title.includes('PQRSF') || item.title.includes('Contrato'))}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
