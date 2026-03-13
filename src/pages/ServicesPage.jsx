import PageHero from '../components/layout/PageHero';
import DocumentSection from '../components/legal/DocumentSection';
import { SERVICE_SUPPORT_DOCS } from '../data/legalData';
import InternetTips from '../sections/InternetTips';
import Services from '../sections/Services';
import FAQ from '../sections/FAQ';
import './Pages.scss';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Soluciones de conectividad y recursos útiles para el usuario"
        description="Fibra óptica, internet empresarial, radioenlace, documentos de soporte y videoguías útiles para hogares y negocios."
        actions={[
          { label: 'Ver planes', to: '/planes' },
          { label: 'Solicitar soporte', to: '/contacto', variant: 'outline' },
        ]}
      />

      <Services />

      <InternetTips />

      <section id="documentos-soporte" className="page-section">
        <div className="container">
          <DocumentSection
            title="Formatos y documentos de soporte"
            description="Documentos operativos y administrativos para consulta, soporte y gestión del servicio."
            items={SERVICE_SUPPORT_DOCS}
          />
        </div>
      </section>

      <FAQ />
    </>
  );
}
