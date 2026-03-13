import { Link } from 'react-router-dom';
import Hero from '../sections/Hero';
import Benefits from '../sections/Benefits';
import Plans from '../sections/Plans';
import BillingTimeline from '../sections/BillingTimeline';
import Coverage from '../sections/Coverage';
import Services from '../sections/Services';
import Testimonials from '../sections/Testimonials';
import FAQ from '../sections/FAQ';
import InfoResources from '../sections/InfoResources';
import CTA from '../sections/CTA';
import './Pages.scss';

const PATHWAYS = [
  {
    title: 'Empresa',
    text: 'Historia, presencia regional, trayectoria y respaldo institucional en una página dedicada.',
    to: '/empresa',
  },
  {
    title: 'Servicios',
    text: 'Fibra, radioenlace, soporte SGM-R y documentos útiles para el usuario final.',
    to: '/servicios',
  },
  {
    title: 'Centro legal',
    text: 'Normatividad, indicadores, calidad del servicio, políticas y contrato actual.',
    to: '/legal',
  },
  {
    title: 'Contacto',
    text: 'Canales de atención, WhatsApp, teléfono, ubicación y solicitud comercial.',
    to: '/contacto',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <Benefits />
      <Plans />
      <BillingTimeline />
      <Coverage compact />
      <Services />
      <Testimonials />
      <FAQ />
      <InfoResources />

      <section className="home-pathways section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Accesos principales</h2>
            <p className="section-subtitle">
              Empresa, servicios, centro legal y contacto en páginas independientes.
            </p>
          </div>

          <div className="home-pathways__grid">
            {PATHWAYS.map((item) => (
              <article key={item.to} className="home-pathways__card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link to={item.to}>Abrir sección</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
