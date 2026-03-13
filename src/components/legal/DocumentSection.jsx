import { useState, useEffect } from 'react';
import { ExternalLink, FileText, FileSpreadsheet, ChevronDown, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import './DocumentSection.scss';

const PER_PAGE = 10;

function FileIcon({ type }) {
  if (type === 'xlsx' || type === 'xls') return <FileSpreadsheet size={18} />;
  return <FileText size={18} />;
}

function FileBadge({ type }) {
  if (!type) return null;
  const label = type.toUpperCase();
  const cls = type === 'xlsx' || type === 'xls' ? 'doc-badge--xls' : 'doc-badge--pdf';
  return <span className={`doc-badge ${cls}`}>{label}</span>;
}

function Pagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= page - 1 && i <= page + 1)) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== '...') {
      pages.push('...');
    }
  }

  return (
    <nav className="doc-pagination" aria-label="Paginación de documentos">
      <button
        type="button"
        className="doc-pagination__btn"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        aria-label="Página anterior"
      >
        <ChevronLeft size={16} />
      </button>

      {pages.map((p, i) =>
        p === '...' ? (
          <span key={`dots-${i}`} className="doc-pagination__dots">...</span>
        ) : (
          <button
            key={p}
            type="button"
            className={`doc-pagination__page ${p === page ? 'doc-pagination__page--active' : ''}`}
            onClick={() => onPageChange(p)}
            aria-current={p === page ? 'page' : undefined}
          >
            {p}
          </button>
        )
      )}

      <button
        type="button"
        className="doc-pagination__btn"
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        aria-label="Página siguiente"
      >
        <ChevronRight size={16} />
      </button>
    </nav>
  );
}

// ─── FLAT DOCUMENT LIST ──────────────────────
export default function DocumentSection({ title, description, items, searchable = false, categories = null }) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [page, setPage] = useState(1);

  // Reset page when filters change
  useEffect(() => { setPage(1); }, [search, activeCategory]);

  let filtered = items;

  if (search.trim()) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (d) => d.title.toLowerCase().includes(q) || (d.summary && d.summary.toLowerCase().includes(q))
    );
  }

  if (categories && activeCategory !== 'all') {
    filtered = filtered.filter((d) => d.category === activeCategory);
  }

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <section className="doc-section">
      <div className="doc-section__header">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>

      {(searchable || categories) && (
        <div className="doc-section__toolbar">
          {searchable && (
            <div className="doc-search">
              <Search size={16} />
              <input
                type="text"
                placeholder="Buscar documento..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Buscar documentos"
              />
            </div>
          )}
          {categories && (
            <div className="doc-filters" role="tablist">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  className={`doc-filter ${activeCategory === cat.id ? 'doc-filter--active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                  {cat.id !== 'all' && (
                    <span className="doc-filter__count">
                      {items.filter((d) => d.category === cat.id).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="doc-section__empty">No se encontraron documentos.</p>
      ) : (
        <>
          <p className="doc-section__count">
            {filtered.length} documento{filtered.length !== 1 ? 's' : ''}
            {totalPages > 1 && <> — página {page} de {totalPages}</>}
          </p>

          <div className="doc-section__grid">
            {paginated.map((item) => (
              <a
                key={`${item.title}-${item.href}`}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="doc-card"
              >
                <div className="doc-card__icon">
                  <FileIcon type={item.fileType} />
                </div>
                <div className="doc-card__body">
                  <div className="doc-card__top">
                    <h3>{item.title}</h3>
                    <FileBadge type={item.fileType} />
                  </div>
                  {item.summary && <p>{item.summary}</p>}
                </div>
                <div className="doc-card__action">
                  <ExternalLink size={15} />
                </div>
              </a>
            ))}
          </div>

          <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
        </>
      )}
    </section>
  );
}

// ─── YEAR-GROUPED DOCUMENT LIST ──────────────
export function YearGroupSection({ title, description, yearGroups }) {
  const [openYears, setOpenYears] = useState(() => {
    if (yearGroups.length > 0) return new Set([yearGroups[0].year]);
    return new Set();
  });

  const toggle = (year) => {
    setOpenYears((prev) => {
      const next = new Set(prev);
      if (next.has(year)) next.delete(year);
      else next.add(year);
      return next;
    });
  };

  return (
    <section className="doc-section">
      <div className="doc-section__header">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>

      <div className="year-groups">
        {yearGroups.map(({ year, docs }) => {
          const isOpen = openYears.has(year);
          return (
            <div key={year} className={`year-group ${isOpen ? 'year-group--open' : ''}`}>
              <button
                type="button"
                className="year-group__header"
                onClick={() => toggle(year)}
                aria-expanded={isOpen}
              >
                <span className="year-group__year">{year}</span>
                <span className="year-group__meta">{docs.length} documento{docs.length !== 1 ? 's' : ''}</span>
                <ChevronDown size={18} className="year-group__chevron" />
              </button>
              {isOpen && (
                <div className="year-group__body">
                  {docs.map((item) => (
                    <a
                      key={`${item.title}-${item.href}`}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="doc-card doc-card--compact"
                    >
                      <div className="doc-card__icon">
                        <FileIcon type={item.fileType} />
                      </div>
                      <div className="doc-card__body">
                        <h3>{item.title}</h3>
                        {item.summary && <p>{item.summary}</p>}
                      </div>
                      <FileBadge type={item.fileType || 'pdf'} />
                      <div className="doc-card__action">
                        <ExternalLink size={15} />
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
