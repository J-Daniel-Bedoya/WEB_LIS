import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../../data/siteData';
import './WhatsAppFloat.scss';

export default function WhatsAppFloat() {
  return (
    <a
      href={CONTACT_INFO.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="whatsapp-float__tooltip">¿Necesitas ayuda?</span>
    </a>
  );
}
