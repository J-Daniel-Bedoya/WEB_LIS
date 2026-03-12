import { NavLink } from 'react-router-dom';
import { LEGAL_NAV } from '../../data/legalData';
import './LegalMenu.scss';

export default function LegalMenu() {
  return (
    <aside className="legal-menu">
      <h2>Centro legal</h2>
      <nav>
        <ul>
          {LEGAL_NAV.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} className="legal-menu__link">
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
