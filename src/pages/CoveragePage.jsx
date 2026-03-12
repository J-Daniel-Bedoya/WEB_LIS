import PageHero from '../components/layout/PageHero';
import Coverage from '../sections/Coverage';
import HowItWorks from '../sections/HowItWorks';

export default function CoveragePage() {
  return (
    <>
      <PageHero
        eyebrow="Cobertura"
        title="Cobertura por municipio y tecnologia disponible"
        description="Consulta municipios atendidos, tecnologias disponibles y el proceso para validar tu sector."
        actions={[
          { label: 'Solicitar validacion', to: '/contacto' },
          { label: 'Ver servicios', to: '/servicios', variant: 'outline' },
        ]}
      />
      <Coverage />
      <HowItWorks />
    </>
  );
}
