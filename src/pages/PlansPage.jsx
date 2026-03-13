import { useSearchParams } from 'react-router-dom';
import PageHero from '../components/layout/PageHero';
import BillingTimeline from '../sections/BillingTimeline';
import Plans from '../sections/Plans';
import Coverage from '../sections/Coverage';

export default function PlansPage() {
  const [searchParams] = useSearchParams();
  const initialLocationId = searchParams.get('ubicación') || null;

  return (
    <>
      <PageHero
        eyebrow="Planes"
        title="Conoce los planes disponibles en tu zona"
        description="Selecciona tu ubicación para ver los planes disponibles con precios, tecnología y servicios según tu zona."
        actions={[
          { label: 'Hablar con un asesor', to: '/contacto' },
          { label: 'Ver cobertura', to: '/cobertura', variant: 'outline' },
        ]}
      />
      <Plans initialLocationId={initialLocationId} />
      <BillingTimeline />
      <Coverage />
    </>
  );
}
