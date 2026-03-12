import { Link } from 'react-router-dom';
import Hero from '../sections/Hero';
import Benefits from '../sections/Benefits';
import Plans from '../sections/Plans';
import Coverage from '../sections/Coverage';
import Services from '../sections/Services';
import Testimonials from '../sections/Testimonials';
import FAQ from '../sections/FAQ';
import CTA from '../sections/CTA';
import './Pages.scss';

const PATHWAYS = [
  {
    title: 'Empresa',
    text: 'Historia, presencia regional, trayectoria y respaldo institucional en una pagina dedicada.',
    to: '/empresa',
  },
  {
    title: 'Servicios',
    text: 'Fibra, radioenlace, soporte SGM-R y documentos utiles para el usuario final.',
    to: '/servicios',
  },
  {
    title: 'Centro legal',
    text: 'Normatividad, indicadores, calidad del servicio, politicas y contrato actual.',
    to: '/legal',
  },
  {
    title: 'Contacto',
    text: 'Canales de atencion, WhatsApp, telefono, ubicacion y solicitud comercial.',
    to: '/contacto',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <Benefits />
      <Plans />
      <Coverage />
      <Services />
      <Testimonials />
      <FAQ />

      <section className="home-pathways section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Accesos principales</h2>
            <p className="section-subtitle">
              Empresa, servicios, centro legal y contacto en paginas independientes.
            </p>
          </div>

          <div className="home-pathways__grid">
            {PATHWAYS.map((item) => (
              <article key={item.to} className="home-pathways__card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link to={item.to}>Abrir seccion</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
