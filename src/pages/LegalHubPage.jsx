import { Link } from 'react-router-dom';
import PageHero from '../components/layout/PageHero';
import DocumentSection from '../components/legal/DocumentSection';
import { LEGAL_HIGHLIGHTS, POLICY_DOCS } from '../data/legalData';
import './Pages.scss';

export default function LegalHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Centro legal"
        title="Normatividad, calidad, politicas y proteccion al usuario"
        description="Consulta documentos institucionales, reportes de calidad, proteccion al usuario, PQRSF y canales de atencion."
        actions={[
          { label: 'Abrir PQRSF', to: '/legal/pqrsf' },
          { label: 'Ver normatividad', to: '/legal/normatividad', variant: 'outline' },
        ]}
      />

      <section className="page-section">
        <div className="container">
          <div className="page-summary">
            {LEGAL_HIGHLIGHTS.map((item) => (
              <article key={item.to} className="page-summary__card">
                <strong>{item.title}</strong>
                <p>{item.text}</p>
                <Link to={item.to}>Abrir seccion</Link>
              </article>
            ))}
          </div>

          <DocumentSection
            title="Documentos institucionales clave"
            description="Contrato, politicas, tratamiento de datos y documentos de consulta permanente."
            items={POLICY_DOCS}
          />
        </div>
      </section>
    </>
  );
}
