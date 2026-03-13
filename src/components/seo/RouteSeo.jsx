import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getRouteSeo } from '../../seo/routeMeta';

function upsertMeta({ name, property, content }) {
  const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    if (name) {
      element.setAttribute('name', name);
    }
    if (property) {
      element.setAttribute('property', property);
    }
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

function replaceStructuredData(jsonLdItems) {
  document.head
    .querySelectorAll('script[data-route-seo="true"]')
    .forEach((script) => script.remove());

  jsonLdItems.forEach((item, index) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.routeSeo = 'true';
    script.id = `route-seo-jsonld-${index}`;
    script.textContent = JSON.stringify(item);
    document.head.appendChild(script);
  });
}

export default function RouteSeo() {
  const location = useLocation();

  useEffect(() => {
    const seo = getRouteSeo(location.pathname);

    document.title = seo.title;

    upsertMeta({ name: 'description', content: seo.description });
    upsertMeta({ name: 'robots', content: seo.robots });
    upsertMeta({ name: 'keywords', content: seo.keywords });
    upsertMeta({ property: 'og:title', content: seo.title });
    upsertMeta({ property: 'og:description', content: seo.description });
    upsertMeta({ property: 'og:type', content: seo.ogType });
    upsertMeta({ property: 'og:url', content: seo.canonical });
    upsertMeta({ property: 'og:locale', content: seo.ogLocale });
    upsertMeta({ property: 'og:site_name', content: seo.siteName });
    upsertMeta({ name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta({ name: 'twitter:title', content: seo.title });
    upsertMeta({ name: 'twitter:description', content: seo.description });

    upsertLink('canonical', seo.canonical);
    replaceStructuredData(seo.jsonLd);
  }, [location.pathname]);

  return null;
}
