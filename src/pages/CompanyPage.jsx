import PageHero from '../components/layout/PageHero';
import About from '../sections/About';
import Testimonials from '../sections/Testimonials';

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Empresa"
        title="Trayectoria, sedes, mision y valores de la empresa"
        description="Conoce el origen de LIS, su presencia regional, su estructura institucional y los principios que respaldan la operacion."
        actions={[
          { label: 'Ver cobertura', to: '/cobertura' },
          { label: 'Contactar', to: '/contacto', variant: 'outline' },
        ]}
      />
      <About />
      <Testimonials />
    </>
  );
}
