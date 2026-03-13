import PageHero from '../components/layout/PageHero';
import About from '../sections/About';
import Testimonials from '../sections/Testimonials';

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Empresa"
        title="Nuestra historia, presencia y propósito"
        description="Conoce la historia de LIS, su presencia operativa en la región y el propósito que orienta su forma de trabajar."
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
