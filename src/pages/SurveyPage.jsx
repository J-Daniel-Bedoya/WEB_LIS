import { useState } from 'react';
import Button from '../components/ui/Button';
import PageHero from '../components/layout/PageHero';
import LegalMenu from '../components/legal/LegalMenu';
import { SURVEY_OPTIONS } from '../data/legalData';
import './Pages.scss';

export default function SurveyPage() {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    support: '',
    recommendation: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = encodeURIComponent(
      `Encuesta de satisfaccion LIS\n\nNombre: ${formData.name}\nCalidad del servicio: ${formData.service}\nAtencion y soporte: ${formData.support}\nNos recomendaria: ${formData.recommendation}\nComentario: ${formData.message}`
    );
    window.open(`https://api.whatsapp.com/send?phone=+573105930440&text=${text}`, '_blank');
  };

  return (
    <>
      <PageHero
        eyebrow="Encuesta"
        title="Encuesta de satisfaccion del usuario"
        description="Comparte tu experiencia sobre instalacion, calidad del servicio y atencion recibida."
      />

      <section className="page-section">
        <div className="container">
          <div className="page-shell">
            <LegalMenu />

            <div className="page-content">
              <div className="page-summary">
                <article className="page-summary__card">
                  <strong>Objetivo</strong>
                  <p>Conocer tu percepcion sobre instalacion, calidad del servicio y atencion.</p>
                </article>
                <article className="page-summary__card">
                  <strong>Seguimiento</strong>
                  <p>La informacion ayuda a mejorar la atencion y el servicio prestado.</p>
                </article>
                <article className="page-summary__card">
                  <strong>Envio</strong>
                  <p>La respuesta se envia por WhatsApp como canal directo de atencion.</p>
                </article>
              </div>

              <form className="page-form" onSubmit={handleSubmit}>
                <div className="page-form__field page-form__field--full">
                  <label htmlFor="survey-name">Nombre completo</label>
                  <input id="survey-name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="page-form__field">
                  <label htmlFor="survey-service">Calidad del servicio</label>
                  <select id="survey-service" name="service" value={formData.service} onChange={handleChange} required>
                    <option value="">Selecciona una opcion</option>
                    {SURVEY_OPTIONS.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="page-form__field">
                  <label htmlFor="survey-support">Atencion y soporte</label>
                  <select id="survey-support" name="support" value={formData.support} onChange={handleChange} required>
                    <option value="">Selecciona una opcion</option>
                    {SURVEY_OPTIONS.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="page-form__field page-form__field--full">
                  <label htmlFor="survey-recommendation">Nos recomendaria</label>
                  <select
                    id="survey-recommendation"
                    name="recommendation"
                    value={formData.recommendation}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecciona una opcion</option>
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="page-form__field page-form__field--full">
                  <label htmlFor="survey-message">Comentario</label>
                  <textarea id="survey-message" name="message" value={formData.message} onChange={handleChange} />
                </div>
                <Button type="submit" className="page-form__submit">
                  Enviar encuesta
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
