import {
  COMPANY_OFFICES,
  CONTACT_INFO,
  FAQS,
  LOCATIONS,
  SERVICES,
} from '../data/siteData';

export const SITE_URL = 'https://logisticaintegralsatelital.com';
export const SITE_NAME = 'Logística Integral Satelital';
export const SITE_SHORT_NAME = 'LIS';

const SITE_DESCRIPTION =
  'Proveedor regional de internet por fibra óptica y radioenlace para hogares y empresas del Occidente Antioqueño, con soporte local y centro documental.';

const BASE_KEYWORDS = [
  'internet occidente antioqueno',
  'fibra óptica sopetran',
  'internet san jeronimo',
  'internet ebejico',
  'radioenlace antioquia',
  'internet empresarial antioquia',
];

const routeNames = {
  '/': 'Inicio',
  '/planes': 'Planes',
  '/cobertura': 'Cobertura',
  '/servicios': 'Servicios',
  '/empresa': 'Empresa',
  '/contacto': 'Contacto',
  '/legal': 'Centro legal',
  '/legal/normatividad': 'Normatividad',
  '/legal/calidad-servicio': 'Calidad del servicio',
  '/legal/indicadores-usuario': 'Indicadores del usuario',
  '/legal/pqrsf': 'PQRSF',
  '/legal/encuesta': 'Encuesta',
};

const organizationData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: SITE_SHORT_NAME,
  url: SITE_URL,
  email: CONTACT_INFO.email,
  telephone: CONTACT_INFO.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT_INFO.address,
    addressLocality: 'Sopetrán',
    addressRegion: 'Antioquia',
    addressCountry: 'CO',
  },
  areaServed: LOCATIONS.map((location) => ({
    '@type': 'City',
    name: location.name,
    addressRegion: 'Antioquia',
    addressCountry: 'CO',
  })),
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      telephone: CONTACT_INFO.phone,
      email: CONTACT_INFO.email,
      areaServed: 'CO',
      availableLanguage: ['es'],
    },
  ],
};

const websiteData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: SITE_SHORT_NAME,
  url: SITE_URL,
  inLanguage: 'es-CO',
  publisher: {
    '@id': `${SITE_URL}/#organization`,
  },
};

function buildBreadcrumbs(pathname) {
  const segments = pathname.split('/').filter(Boolean);
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Inicio',
      item: `${SITE_URL}/`,
    },
  ];

  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    items.push({
      '@type': 'ListItem',
      position: index + 2,
      name: routeNames[currentPath] || segment,
      item: `${SITE_URL}${currentPath}`,
    });
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}

function buildWebPage(pathname, title, description, type = 'WebPage') {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${SITE_URL}${pathname}#webpage`,
    name: title,
    description,
    url: `${SITE_URL}${pathname}`,
    inLanguage: 'es-CO',
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
    about: {
      '@id': `${SITE_URL}/#organization`,
    },
  };
}

function buildServicesList() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Servicios de conectividad',
    itemListElement: SERVICES.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
        provider: {
          '@id': `${SITE_URL}/#organization`,
        },
      },
    })),
  };
}

function buildOfferCatalog() {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Planes de internet y conectividad',
    itemListElement: LOCATIONS.slice(0, 8).map((location, index) => ({
      '@type': 'OfferCatalog',
      name: location.name,
      position: index + 1,
      itemListElement: [
        location.fiber && {
          '@type': 'Offer',
          name: `Planes de fibra en ${location.name}`,
          areaServed: location.name,
        },
        location.radio && {
          '@type': 'Offer',
          name: `Planes de radioenlace en ${location.name}`,
          areaServed: location.name,
        },
      ].filter(Boolean),
    })),
  };
}

function buildCoverageService() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Internet por fibra óptica y radioenlace',
    provider: {
      '@id': `${SITE_URL}/#organization`,
    },
    areaServed: LOCATIONS.map((location) => ({
      '@type': 'AdministrativeArea',
      name: location.name,
    })),
  };
}

function buildFaqData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

function buildContactPageData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contacto y soporte',
    url: `${SITE_URL}/contacto`,
    mainEntity: {
      '@type': 'Organization',
      name: SITE_NAME,
      email: CONTACT_INFO.email,
      telephone: CONTACT_INFO.phone,
      department: COMPANY_OFFICES.map((office) => ({
        '@type': 'Organization',
        name: office.name,
        telephone: office.phone,
        address: office.address,
      })),
    },
  };
}

const routeDefinitions = {
  '/': {
    title: 'Internet por fibra óptica y radioenlace en Occidente Antioqueño | LIS',
    description:
      'Planes de internet para hogar y empresa en Sopetrán, San Jerónimo, Ebéjico y otros municipios del Occidente Antioqueño.',
    keywords: [...BASE_KEYWORDS, 'planes de internet hogar', 'pqrsf lis'],
    jsonLd: [
      buildWebPage(
        '/',
        'Internet por fibra óptica y radioenlace en Occidente Antioqueño',
        'Proveedor regional de internet para hogares y empresas con cobertura, soporte y centro documental.'
      ),
      organizationData,
      websiteData,
      buildServicesList(),
      buildFaqData(),
    ],
  },
  '/planes': {
    title: 'Planes de internet por municipio | LIS',
    description:
      'Consulta planes de internet por ubicación, tecnología disponible y precios de referencia para hogares y empresas.',
    keywords: [...BASE_KEYWORDS, 'planes de internet antioquia', 'precios internet sopetran'],
    jsonLd: [
      buildWebPage(
        '/planes',
        'Planes de internet por municipio',
        'Catálogo de planes de internet y conectividad segmentado por ubicación y tecnología disponible.'
      ),
      buildOfferCatalog(),
    ],
  },
  '/cobertura': {
    title: 'Cobertura de internet en Occidente Antioqueño | LIS',
    description:
      'Revisa los municipios con cobertura de fibra óptica o radioenlace y valida si tu sector puede ser atendido.',
    keywords: [...BASE_KEYWORDS, 'cobertura fibra antioquia', 'internet rural antioquia'],
    jsonLd: [
      buildWebPage(
        '/cobertura',
        'Cobertura de internet en Occidente Antioqueño',
        'Mapa de municipios y sectores con presencia comercial y técnica de Logística Integral Satelital.'
      ),
      buildCoverageService(),
    ],
  },
  '/servicios': {
    title: 'Servicios de conectividad para hogar y empresa | LIS',
    description:
      'Fibra óptica, internet empresarial, radioenlace y soporte remoto para usuarios del Occidente Antioqueño.',
    keywords: [...BASE_KEYWORDS, 'internet empresarial', 'soporte internet'],
    jsonLd: [
      buildWebPage(
        '/servicios',
        'Servicios de conectividad para hogar y empresa',
        'Portafolio de servicios de conectividad y soporte ofrecidos por LIS.'
      ),
      buildServicesList(),
    ],
  },
  '/empresa': {
    title: 'Empresa, trayectoria y sedes | LIS',
    description:
      'Conoce la historia, sedes, misión, visión y presencia regional de Logística Integral Satelital.',
    keywords: [...BASE_KEYWORDS, 'empresa de internet antioquia', 'lis sopetran'],
    jsonLd: [
      buildWebPage(
        '/empresa',
        'Empresa, trayectoria y sedes',
        'Información institucional sobre la historia, presencia regional y principios de LIS.',
        'AboutPage'
      ),
    ],
  },
  '/contacto': {
    title: 'Contacto, soporte y atención comercial | LIS',
    description:
      'Encuentra teléfonos, WhatsApp, correo, sedes y horarios de atención para soporte o asesoría comercial.',
    keywords: [...BASE_KEYWORDS, 'contacto lis', 'whatsapp internet antioquia'],
    jsonLd: [
      buildWebPage(
        '/contacto',
        'Contacto, soporte y atención comercial',
        'Canales de contacto para ventas, soporte y validación de cobertura.',
        'ContactPage'
      ),
      buildContactPageData(),
    ],
  },
  '/legal': {
    title: 'Centro legal, normatividad y documentos | LIS',
    description:
      'Accede a contratos, normatividad, reportes de calidad, indicadores y documentos de protección al usuario.',
    keywords: [...BASE_KEYWORDS, 'normatividad telecomunicaciones', 'documentos usuario internet'],
    jsonLd: [
      buildWebPage(
        '/legal',
        'Centro legal, normatividad y documentos',
        'Centro documental para usuarios, autoridades y procesos de cumplimiento.',
        'CollectionPage'
      ),
    ],
  },
  '/legal/normatividad': {
    title: 'Normatividad y políticas del sector | LIS',
    description:
      'Consulta normatividad, políticas y documentos obligatorios relacionados con telecomunicaciones e internet.',
    keywords: [...BASE_KEYWORDS, 'crc internet', 'política tratamiento de datos'],
    jsonLd: [
      buildWebPage(
        '/legal/normatividad',
        'Normatividad y políticas del sector',
        'Documentos regulatorios y políticas institucionales disponibles para consulta pública.',
        'CollectionPage'
      ),
    ],
  },
  '/legal/calidad-servicio': {
    title: 'Calidad del servicio e indicadores | LIS',
    description:
      'Histórico de reportes de calidad del servicio de internet y documentos de seguimiento regulatorio.',
    keywords: [...BASE_KEYWORDS, 'calidad del servicio internet', 'indicadores crc'],
    jsonLd: [
      buildWebPage(
        '/legal/calidad-servicio',
        'Calidad del servicio e indicadores',
        'Reportes históricos y trazabilidad documental sobre calidad del servicio.',
        'CollectionPage'
      ),
    ],
  },
  '/legal/indicadores-usuario': {
    title: 'Indicadores de protección al usuario | LIS',
    description:
      'Informes y certificaciones trimestrales de protección al usuario organizados por periodo.',
    keywords: [...BASE_KEYWORDS, 'protección al usuario', 'informes trimestrales usuario'],
    jsonLd: [
      buildWebPage(
        '/legal/indicadores-usuario',
        'Indicadores de protección al usuario',
        'Informes públicos y certificaciones de seguimiento a la protección del usuario.',
        'CollectionPage'
      ),
    ],
  },
  '/legal/pqrsf': {
    title: 'PQRSF y radicación de solicitudes | LIS',
    description:
      'Canales para peticiones, quejas, reclamos, sugerencias y felicitaciones con seguimiento por correo y soporte.',
    keywords: [...BASE_KEYWORDS, 'pqrsf internet', 'reclamos operador internet'],
    jsonLd: [
      buildWebPage(
        '/legal/pqrsf',
        'PQRSF y radicación de solicitudes',
        'Formulario y pasos para radicar solicitudes, quejas o reclamos relacionados con el servicio.',
        'ContactPage'
      ),
    ],
  },
  '/legal/encuesta': {
    title: 'Encuesta de satisfacción del servicio | LIS',
    description:
      'Encuesta y mecanismos de escucha para evaluar atención, oportunidad y calidad del servicio.',
    keywords: [...BASE_KEYWORDS, 'encuesta satisfacción internet', 'calidad atención usuario'],
    jsonLd: [
      buildWebPage(
        '/legal/encuesta',
        'Encuesta de satisfacción del servicio',
        'Espacio para recopilar la experiencia del usuario y apoyar mejora continua.',
        'WebPage'
      ),
    ],
  },
};

export function getCanonicalUrl(pathname) {
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  return `${SITE_URL}${normalizedPath === '/' ? '/' : normalizedPath}`;
}

export function getRouteSeo(pathname) {
  const definition = routeDefinitions[pathname] || routeDefinitions['/'];
  const canonical = getCanonicalUrl(pathname);

  return {
    title: definition.title,
    description: definition.description,
    canonical,
    robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
    keywords: definition.keywords.join(', '),
    ogType: pathname === '/' ? 'website' : 'article',
    ogLocale: 'es_CO',
    siteName: SITE_NAME,
    jsonLd: [...definition.jsonLd, buildBreadcrumbs(pathname)],
  };
}

export function getDefaultSeo() {
  return {
    title: `${SITE_NAME} | Fibra óptica y radioenlace en Occidente Antioqueño`,
    description: SITE_DESCRIPTION,
    canonical: SITE_URL,
  };
}
