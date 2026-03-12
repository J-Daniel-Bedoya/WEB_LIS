import PageHero from '../components/layout/PageHero';
import LegalMenu from '../components/legal/LegalMenu';
import DocumentSection from '../components/legal/DocumentSection';
import './Pages.scss';

export default function LegalSectionPage({ eyebrow, title, description, summaryCards = [], sections = [] }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />

      <section className="page-section">
        <div className="container">
          <div className="page-shell">
            <LegalMenu />

            <div className="page-content">
              {summaryCards.length > 0 && (
                <div className="page-summary">
                  {summaryCards.map((card) => (
                    <article key={card.title} className="page-summary__card">
                      <strong>{card.title}</strong>
                      <p>{card.text}</p>
                    </article>
                  ))}
                </div>
              )}

              {sections.map((section) => (
                <DocumentSection
                  key={section.title}
                  title={section.title}
                  description={section.description}
                  items={section.items}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
