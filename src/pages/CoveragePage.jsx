import PageHero from '../components/layout/PageHero';
import Coverage from '../sections/Coverage';
import HowItWorks from '../sections/HowItWorks';

export default function CoveragePage() {
  return (
    <>
      <PageHero
        eyebrow="Cobertura"
        title="Verifica si hay cobertura en tu zona"
        description="Explora el mapa interactivo, detecta tu ubicación o ingresa coordenadas para saber si podemos conectarte con fibra óptica o radioenlace."
        actions={[
          { label: 'Solicitar validación', to: '/contacto' },
          { label: 'Ver servicios', to: '/servicios', variant: 'outline' },
        ]}
      />
      <Coverage />
      <HowItWorks />
    </>
  );
}
