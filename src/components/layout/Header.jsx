import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO } from '../../data/siteData';
import Button from '../ui/Button';
import logoLis from '../../assets/images/logo-lis.png';
import './Header.scss';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const handleNavClick = () => setIsMobileOpen(false);

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__topbar">
        <div className="container">
          <div className="header__topbar-content">
            <a href={`tel:${CONTACT_INFO.phoneDial}`} className="header__topbar-phone">
              <Phone size={14} />
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <span className="header__topbar-schedule">{CONTACT_INFO.schedule}</span>
          </div>
        </div>
      </div>

      <div className="header__main">
        <div className="container">
          <div className="header__inner">
            <Link to="/" className="header__logo" aria-label="Logística Integral Satelital - Inicio" onClick={handleNavClick}>
              <img src={logoLis} alt="Logística Integral Satelital" className="header__logo-image" />
              <div className="header__logo-text">
                <strong>LIS</strong>
                <span>Logística Integral Satelital</span>
              </div>
            </Link>

            <nav className={`header__nav ${isMobileOpen ? 'header__nav--open' : ''}`}>
              <div className="header__nav-header">
                <div className="header__nav-brand">
                  <img src={logoLis} alt="Logística Integral Satelital" className="header__nav-brand-image" />
                  <div className="header__nav-brand-copy">
                    <strong>Logística Integral Satelital</strong>
                    <span>Occidente Antioqueño</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="header__nav-close"
                  onClick={() => setIsMobileOpen(false)}
                  aria-label="Cerrar menu"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="header__nav-scroll">
                <ul className="header__nav-list">
                  {NAV_LINKS.map((link) => (
                    <li key={link.to}>
                      <NavLink to={link.to} className="header__nav-link" onClick={handleNavClick}>
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>

                <div className="header__nav-meta">
                  <span className="header__nav-meta-label">Atención comercial</span>
                  <a href={`tel:${CONTACT_INFO.phoneDial}`} className="header__nav-meta-phone">
                    {CONTACT_INFO.phone}
                  </a>
                </div>

                <div className="header__nav-cta">
                  <Button
                    variant="primary"
                    size="md"
                    to="/contacto"
                    icon={ChevronRight}
                    iconRight
                    onClick={handleNavClick}
                  >
                    Solicitar asesoría
                  </Button>
                </div>
              </div>
            </nav>

            <div className="header__actions">
              <Button
                variant="primary"
                size="sm"
                to="/contacto"
                icon={ChevronRight}
                iconRight
                className="header__cta-desktop"
              >
                Solicitar asesoría
              </Button>
              {!isMobileOpen ? (
                <button
                  type="button"
                  className="header__hamburger"
                  onClick={() => setIsMobileOpen(true)}
                  aria-label="Abrir menu"
                  aria-expanded={isMobileOpen}
                >
                  <Menu size={24} />
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
