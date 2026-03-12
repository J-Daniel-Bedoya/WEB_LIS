import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { FOOTER_LINKS, CONTACT_INFO } from '../../data/siteData';
import logoLis from '../../assets/images/logo-lis.png';
import './Footer.scss';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src={logoLis} alt="Logistica Integral Satelital" className="footer__logo-image" />
              <div>
                <strong>LIS</strong>
                <span>Logistica Integral Satelital</span>
              </div>
            </div>

            <p className="footer__description">
              Empresa regional de conectividad con servicios de fibra optica,
              radioenlace, soporte remoto y documentacion regulatoria visible para sus usuarios.
            </p>

            <div className="footer__contact-list">
              <a href={`tel:${CONTACT_INFO.phoneDial}`}>
                <Phone size={16} />
                <span>{CONTACT_INFO.phone}</span>
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`}>
                <Mail size={16} />
                <span>{CONTACT_INFO.email}</span>
              </a>
              <div>
                <MapPin size={16} />
                <span>{CONTACT_INFO.address}</span>
              </div>
            </div>
          </div>

          <div className="footer__links-group">
            <h4>Empresa</h4>
            <ul>
              {FOOTER_LINKS.empresa.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>
                    <ChevronRight size={14} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__links-group">
            <h4>Servicios</h4>
            <ul>
              {FOOTER_LINKS.servicios.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>
                    <ChevronRight size={14} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__links-group">
            <h4>Legal y regulatorio</h4>
            <ul>
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>
                    <ChevronRight size={14} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {year} Logistica Integral Satelital S.A.S. Todos los derechos reservados.</p>
          <p className="footer__regulatory">
            Operador regional con enfoque en transparencia, soporte al usuario y cumplimiento sectorial.
          </p>
        </div>
      </div>
    </footer>
  );
}
