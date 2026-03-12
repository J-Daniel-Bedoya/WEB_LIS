import { useSearchParams } from 'react-router-dom';
import PageHero from '../components/layout/PageHero';
import Plans from '../sections/Plans';
import Coverage from '../sections/Coverage';

export default function PlansPage() {
  const [searchParams] = useSearchParams();
  const initialLocationId = searchParams.get('ubicacion') || null;

  return (
    <>
      <PageHero
        eyebrow="Planes"
        title="Internet, TV y combos para tu municipio"
        description="Selecciona tu ubicación para ver los planes disponibles con precios reales, tecnología y servicios según tu zona."
        actions={[
          { label: 'Hablar con un asesor', to: '/contacto' },
          { label: 'Ver cobertura', to: '/cobertura', variant: 'outline' },
        ]}
      />
      <Plans initialLocationId={initialLocationId} />
      <Coverage />
    </>
  );
}
