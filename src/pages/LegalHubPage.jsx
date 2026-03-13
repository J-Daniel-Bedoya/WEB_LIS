import { Link } from 'react-router-dom';
import {
  FileText,
  MessagesSquare,
  BarChart3,
  ClipboardList,
  ArrowRight,
  ExternalLink,
  Lightbulb,
} from 'lucide-react';
import PageHero from '../components/layout/PageHero';
import { LEGAL_SECTIONS, POLICY_DOCS, GUIDE_DOCS } from '../data/legalData';
import './LegalHubPage.scss';

const QUICK_ACTIONS = [
  { icon: FileText, label: 'Ver contrato', href: '/uploads/2026/02/contrato-logistica-actualizado-2025.pdf', external: true },
  { icon: MessagesSquare, label: 'Hacer un PQRSF', to: '/legal/pqrsf' },
  { icon: BarChart3, label: 'Reportes de calidad', to: '/legal/calidad-servicio' },
  { icon: ClipboardList, label: 'Encuesta', to: '/legal/encuesta' },
];

export default function LegalHubPage() {
  const featuredDocs = POLICY_DOCS.filter((d) => d.featured);

  return (
    <>
      <PageHero
        eyebrow="Centro legal"
        title="Tu información, tus derechos"
        description="Accede a contratos, normatividad, reportes de calidad, indicadores de protección al usuario y canales de atención. Todo organizado y disponible."
        actions={[
          { label: 'Abrir PQRSF', to: '/legal/pqrsf' },
          { label: 'Ver normatividad', to: '/legal/normatividad', variant: 'outline' },
        ]}
      />

      {/* Quick Actions */}
      <section className="legal-hub__quick">
        <div className="container">
          <div className="legal-hub__quick-grid">
            {QUICK_ACTIONS.map((action) => {
              const Icon = action.icon;
              if (action.external) {
                return (
                  <a
                    key={action.label}
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="quick-action"
                  >
                    <div className="quick-action__icon"><Icon size={20} /></div>
                    <span>{action.label}</span>
                    <ExternalLink size={14} />
                  </a>
                );
              }
              return (
                <Link key={action.label} to={action.to} className="quick-action">
                  <div className="quick-action__icon"><Icon size={20} /></div>
                  <span>{action.label}</span>
                  <ArrowRight size={14} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Documents */}
      <section className="legal-hub__featured">
        <div className="container">
          <h2 className="legal-hub__section-title">Documentos esenciales</h2>
          <p className="legal-hub__section-desc">Los documentos más consultados por nuestros usuarios.</p>

          <div className="legal-hub__featured-grid">
            {featuredDocs.map((doc) => (
              <a
                key={doc.href}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="featured-doc"
              >
                <div className="featured-doc__icon"><FileText size={22} /></div>
                <div className="featured-doc__body">
                  <h3>{doc.title}</h3>
                  <p>{doc.summary}</p>
                </div>
                <ExternalLink size={16} className="featured-doc__arrow" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section Cards */}
      <section className="legal-hub__sections">
        <div className="container">
          <h2 className="legal-hub__section-title">Explora por sección</h2>
          <p className="legal-hub__section-desc">Encuentra lo que necesitas en el área que te interese.</p>

          <div className="legal-hub__sections-grid">
            {LEGAL_SECTIONS.map((section) => {
              const Icon = section.icon;
              return (
                <Link key={section.id} to={section.to} className="section-card">
                  <div className={`section-card__icon section-card__icon--${section.color}`}>
                    <Icon size={22} />
                  </div>
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                  {section.count && (
                    <span className="section-card__count">{section.count} documentos</span>
                  )}
                  <span className="section-card__link">
                    Ir a la sección <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="legal-hub__guides">
        <div className="container">
          <div className="legal-hub__guides-header">
            <Lightbulb size={20} />
            <div>
              <h2>Guías y recursos útiles</h2>
              <p>Material de apoyo para aprovechar y proteger tu servicio de internet.</p>
            </div>
          </div>

          <div className="legal-hub__guides-grid">
            {GUIDE_DOCS.map((doc) => (
              <a
                key={doc.href}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="guide-card"
              >
                <h4>{doc.title}</h4>
                <p>{doc.summary}</p>
                <span className="guide-card__link">
                  Abrir <ExternalLink size={13} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
