import PageHero from '../components/layout/PageHero';
import Contact from '../sections/Contact';

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Atencion comercial y soporte con canales visibles"
        description="Confirma cobertura, recibe asesoria comercial o solicita soporte por nuestros canales de atencion."
      />
      <Contact />
    </>
  );
}
