import Button from '../ui/Button';
import './PageHero.scss';

export default function PageHero({ eyebrow, title, description, actions = [] }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero__inner">
          {eyebrow && <p className="page-hero__eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
          {description && <p className="page-hero__description">{description}</p>}
          {actions.length > 0 && (
            <div className="page-hero__actions">
              {actions.map((action) => (
                <Button
                  key={action.label}
                  variant={action.variant ?? 'primary'}
                  to={action.to}
                  href={action.href}
                >
                  {action.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
