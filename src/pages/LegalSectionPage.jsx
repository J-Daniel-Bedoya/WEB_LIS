import PageHero from '../components/layout/PageHero';
import LegalMenu from '../components/legal/LegalMenu';
import DocumentSection, { YearGroupSection } from '../components/legal/DocumentSection';
import './Pages.scss';

export default function LegalSectionPage({
  eyebrow,
  title,
  description,
  items = [],
  searchable = false,
  categories = null,
  yearGroups = null,
  sectionTitle = '',
  sectionDescription = '',
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />

      <section className="page-section">
        <div className="container">
          <div className="page-shell">
            <LegalMenu />

            <div className="page-content">
              {yearGroups ? (
                <YearGroupSection
                  title={sectionTitle}
                  description={sectionDescription}
                  yearGroups={yearGroups}
                />
              ) : (
                <DocumentSection
                  title={sectionTitle}
                  description={sectionDescription}
                  items={items}
                  searchable={searchable}
                  categories={categories}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
