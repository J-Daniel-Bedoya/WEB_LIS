import PageHero from '../components/layout/PageHero';
import DocumentSection from '../components/legal/DocumentSection';
import Services from '../sections/Services';
import FAQ from '../sections/FAQ';
import { TIPS_DOCUMENTS } from '../data/legalData';
import './Pages.scss';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Soluciones de conectividad y recursos utiles para el usuario"
        description="Fibra optica, internet empresarial, radioenlace y herramientas de soporte para hogares y negocios."
        actions={[
          { label: 'Ver planes', to: '/planes' },
          { label: 'Solicitar soporte', to: '/contacto', variant: 'outline' },
        ]}
      />

      <Services />

      <section className="page-section">
        <div className="container">
          <DocumentSection
            title="Guias y documentos de soporte"
            description="Guias y formatos para consulta, soporte y gestion del servicio."
            items={TIPS_DOCUMENTS}
          />
        </div>
      </section>

      <FAQ />
    </>
  );
}
