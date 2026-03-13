import PageHero from '../components/layout/PageHero';
import Contact from '../sections/Contact';

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Atención comercial y soporte"
        description="Confirma cobertura, recibe asesoría comercial o solicita soporte por nuestros canales de atención."
      />
      <Contact />
    </>
  );
}
