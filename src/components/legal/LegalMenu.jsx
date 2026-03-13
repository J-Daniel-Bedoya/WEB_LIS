import { NavLink } from 'react-router-dom';
import { LEGAL_NAV } from '../../data/legalData';
import './LegalMenu.scss';

export default function LegalMenu() {
  return (
    <aside className="legal-menu">
      <h2>Centro legal</h2>
      <nav>
        <ul>
          {LEGAL_NAV.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/legal'} className="legal-menu__link">
                  <div className="legal-menu__icon">
                    <Icon size={16} />
                  </div>
                  <div className="legal-menu__copy">
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </div>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
