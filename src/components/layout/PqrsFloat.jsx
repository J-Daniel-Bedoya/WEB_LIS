import { Link } from 'react-router-dom';
import { MessagesSquare } from 'lucide-react';
import './PqrsFloat.scss';

export default function PqrsFloat() {
  return (
    <Link
      to="/legal/pqrsf"
      className="pqrs-float"
      aria-label="Ir a PQRSF"
    >
      <MessagesSquare size={24} />
      <span className="pqrs-float__label">PQRSF</span>
      <span className="pqrs-float__tooltip">Radica o consulta tu PQRSF</span>
    </Link>
  );
}
