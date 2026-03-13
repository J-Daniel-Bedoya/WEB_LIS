import {
  Wifi,
  ShieldCheck,
  Clock3,
  Headphones,
  Zap,
  MapPin,
  Building2,
  Home,
  Radio,
  Wrench,
  FileCheck2,
  BadgeCheck,
  ChevronRight,
  Globe,
  Network,
  ScrollText,
  ClipboardList,
  MessagesSquare,
  BarChart3,
  FileSpreadsheet,
  Files,
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Inicio', to: '/' },
  { label: 'Planes', to: '/planes' },
  { label: 'Cobertura', to: '/cobertura' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Quienes somos', to: '/empresa' },
  { label: 'Centro legal', to: '/legal' },
  { label: 'Contacto', to: '/contacto' },
];

export const STATS = [
  { value: '2012', label: 'Operación formal desde' },
  { value: '10', label: 'Municipios conectados' },
  { value: 'Lun-Sab', label: 'Atención con horarios publicados' },
  { value: '100%', label: 'Compromiso regulatorio' },
];

export const HERO_HIGHLIGHTS = [
  'Fibra óptica y radioenlace para hogar y empresa',
  'Instalación y soporte con equipo local',
  'Canales de atención, PQRSF y documentos regulatorios disponibles',
];

export const PLANS = {
  hogar: {
    title: 'Planes para hogar',
    intro:
      'Pensados para estudio, trabajo, entretenimiento y varios equipos conectados con una contratación simple y soporte cercano.',
    bullets: ['Sin cláusulas confusas', 'Cobertura validada por sector', 'Instalación según viabilidad técnica'],
    items: [
      {
        name: 'Fibra Hogar 100',
        speed: '100',
        price: '60.000',
        features: [
          'Fibra óptica residencial',
          'Ideal para estudio, streaming y teletrabajo',
          'Instalación y router según cobertura',
          'Atención por WhatsApp y soporte remoto',
        ],
        ideal: 'Plan base para hogares con uso diario estable',
        usage: '1 a 2 personas, clases, trabajo remoto y streaming HD',
        highlighted: false,
      },
      {
        name: 'Fibra Hogar 200',
        speed: '200',
        price: '70.000',
        features: [
          'Mayor capacidad para varios dispositivos',
          'Videollamadas y streaming simultáneo',
          'Soporte remoto SGM-R',
          'Acompañamiento comercial para activación',
        ],
        ideal: 'La mejor relación entre precio y rendimiento',
        usage: 'Familias conectadas al mismo tiempo y uso intensivo diario',
        highlighted: true,
        badge: 'Plan recomendado',
      },
      {
        name: 'Fibra Hogar 300',
        speed: '300',
        price: '85.000',
        features: [
          'Pensado para familias conectadas todo el día',
          'Mayor estabilidad en usos intensivos',
          'Buena respuesta para gaming y contenido 4K',
          'Escalamiento rápido de soporte',
        ],
        ideal: 'Para hogares con alta demanda de red',
        usage: 'Gaming, contenido 4K y alto tráfico en múltiples equipos',
        highlighted: false,
      },
    ],
  },
  empresa: {
    title: 'Planes para empresas',
    intro:
      'Orientados a continuidad operativa, soporte más cercano y capacidad para procesos que dependen de internet estable.',
    bullets: ['Ideal para comercios y oficinas', 'Acompañamiento técnico de activación', 'Escalamiento prioritario de soporte'],
    items: [
      {
        name: 'Empresa Conectada',
        speed: '100',
        price: '149.900',
        features: [
          'Internet para puntos de venta y oficinas',
          'Acompañamiento técnico en activación',
          'Soporte prioritario y seguimiento',
          'Enfoque en continuidad operativa',
        ],
        ideal: 'Negocios que necesitan estabilidad diaria',
        usage: 'Caja, inventario, videovigilancia y operación comercial básica',
        highlighted: false,
      },
      {
        name: 'Empresa Pro',
        speed: '200',
        price: '249.900',
        features: [
          'Mayor capacidad para equipos y procesos críticos',
          'Atención más cercana para incidencias',
          'Orientado a camaras, facturación y operación continua',
          'Solución adaptable según sede y cobertura',
        ],
        ideal: 'Empresas con mayor dependencia de internet',
        usage: 'Oficinas, sedes comerciales y procesos con tráfico constante',
        highlighted: true,
        badge: 'Empresarial',
      },
    ],
  },
};

export const COVERAGE_ZONES = [
  { name: 'Sopetrán', status: 'active', type: 'fiber' },
  { name: 'Ebéjico', status: 'active', type: 'fiber' },
  { name: 'San Jerónimo', status: 'active', type: 'fiber' },
  { name: 'Betulia', status: 'active', type: 'radio' },
  { name: 'Titiribí', status: 'active', type: 'radio' },
  { name: 'Palmitas', status: 'active', type: 'radio' },
  { name: 'Sevilla', status: 'active', type: 'radio' },
  { name: 'Anzá', status: 'active', type: 'radio' },
  { name: 'Armenia Mantequilla', status: 'active', type: 'radio' },
  { name: 'Heliconia', status: 'active', type: 'radio' },
];

// ── LOCATIONS: tarifas reales 2026 por ubicación ──
export const LOCATIONS = [
  {
    id: 'sopetran',
    name: 'Sopetrán',
    type: 'municipio',
    coords: { lat: 6.5042, lng: -75.7436 },
    fiber: {
      installation: 90000,
      plans: [
        { speed: 100, price: 60000 },
        { speed: 200, price: 70000 },
        { speed: 300, price: 85000 },
      ],
    },
    radio: {
      installation: 160000,
      installationLarge: 300000,
      plans: [
        { speed: 3, price: 70000 },
        { speed: 4, price: 80000 },
        { speed: 5, price: 85000 },
        { speed: 6, price: 90000 },
        { speed: 8, price: 103000 },
        { speed: 10, price: 115000 },
      ],
    },
  },
  {
    id: 'san-jeronimo',
    name: 'San Jerónimo',
    type: 'municipio',
    coords: { lat: 6.4438, lng: -75.7264 },
    fiber: {
      installation: 90000,
      plans: [
        { speed: 100, price: 70000 },
        { speed: 200, price: 80000 },
        { speed: 300, price: 95000 },
      ],
    },
    radio: {
      installation: 160000,
      installationLarge: 300000,
      plans: [
        { speed: 3, price: 70000 },
        { speed: 4, price: 80000 },
        { speed: 5, price: 85000 },
        { speed: 6, price: 90000 },
        { speed: 8, price: 103000 },
        { speed: 10, price: 115000 },
      ],
    },
  },
  {
    id: 'ebejico',
    name: 'Ebéjico',
    type: 'municipio',
    coords: { lat: 6.3322, lng: -75.7614 },
    fiber: {
      installation: 65000,
      plans: [
        { speed: 10, price: 52500 },
        { speed: 15, price: 78000 },
        { speed: 20, price: 89000 },
      ],
      comercial: [
        { speed: 10, priceBeforeIva: 73000 },
        { speed: 15, priceBeforeIva: 95000 },
      ],
    },
    radio: {
      installation: 105000,
      installationFinca: 140000,
      installationLarge: 250000,
      plans: [
        { speed: 3, price: 64000 },
        { speed: 4, price: 74000 },
        { speed: 5, price: 79000 },
        { speed: 6, price: 84000 },
        { speed: 8, price: 94000 },
        { speed: 10, price: 104000 },
      ],
    },
  },
  {
    id: 'la-gramala',
    name: 'La Gramala',
    type: 'corregimiento',
    parentName: 'Ebéjico',
    coords: { lat: 6.3322, lng: -75.7614 },
    fiber: {
      installation: 73000,
      plans: [
        { speed: 10, price: 60000 },
      ],
    },
  },
  {
    id: 'sevilla',
    name: 'Sevilla',
    type: 'corregimiento',
    parentName: 'Ebéjico',
    coords: { lat: 6.3500, lng: -75.7700 },
    fiber: {
      installation: 65000,
      plans: [
        { speed: 10, price: 50000 },
        { speed: 20, price: 89000 },
      ],
      comercial: [
        { speed: 10, priceBeforeIva: 68000 },
      ],
    },
  },
  {
    id: 'heliconia',
    name: 'Heliconía',
    type: 'municipio',
    coords: { lat: 6.2272, lng: -75.7317 },
    fiber: {
      installation: 90000,
      plans: [
        { speed: 10, price: 49000, zone: 'urbano' },
        { speed: 15, price: 67000, zone: 'urbano' },
        { speed: 20, price: 82000, zone: 'urbano' },
        { speed: 10, price: 60000, zone: 'rural' },
      ],
    },
    radio: {
      installation: 100000,
      plans: [
        { speed: 3, price: 64000 },
        { speed: 4, price: 74000 },
        { speed: 5, price: 79000 },
        { speed: 6, price: 84000 },
        { speed: 8, price: 94000 },
        { speed: 10, price: 104000 },
      ],
    },
  },
  {
    id: 'armenia',
    name: 'Armenia',
    type: 'municipio',
    coords: { lat: 6.1700, lng: -75.7833 },
    fiber: {
      installation: 90000,
      plans: [
        { speed: 10, price: 60000 },
        { speed: 15, price: 67000 },
        { speed: 20, price: 80000 },
      ],
    },
  },
  {
    id: 'guintar',
    name: 'Guintar',
    type: 'corregimiento',
    parentName: 'Anzá',
    coords: { lat: 6.3211, lng: -75.8539 },
    fiber: {
      installation: 100000,
      plans: [
        { speed: 10, price: 55000 },
        { speed: 15, price: 73000 },
        { speed: 20, price: 120000 },
      ],
    },
  },
  {
    id: 'palmitas',
    name: 'Palmitas',
    type: 'municipio',
    coords: { lat: 6.3406, lng: -75.6667 },
    radio: {
      installation: 100000,
      installationFinca: 140000,
      plans: [
        { speed: 5, price: 64000 },
        { speed: 7, price: 70000 },
        { speed: 9, price: 77000 },
        { speed: 12, price: 85000 },
      ],
    },
  },
  {
    id: 'anza',
    name: 'Anzá',
    type: 'municipio',
    coords: { lat: 6.3211, lng: -75.8539 },
    radio: {
      installation: 200000,
      installationLarge: 300000,
      plans: [
        { speed: 3, price: 54000 },
        { speed: 4, price: 60000 },
        { speed: 5, price: 68000 },
        { speed: 6, price: 75000 },
        { speed: 8, price: 90000 },
        { speed: 10, price: 107000 },
      ],
    },
  },
  {
    id: 'betulia',
    name: 'Betulia',
    type: 'municipio',
    coords: { lat: 6.1117, lng: -75.9828 },
    radio: {
      installation: 200000,
      installationLarge: 300000,
      plans: [
        { speed: 3, price: 54000 },
        { speed: 4, price: 60000 },
        { speed: 5, price: 68000 },
        { speed: 6, price: 75000 },
        { speed: 8, price: 90000 },
        { speed: 10, price: 107000 },
      ],
    },
  },
  {
    id: 'altamira',
    name: 'Altamira',
    type: 'corregimiento',
    parentName: 'Betulia',
    coords: { lat: 6.1117, lng: -75.9828 },
    radio: {
      installation: 200000,
      installationLarge: 300000,
      plans: [
        { speed: 3, price: 54000 },
        { speed: 4, price: 60000 },
        { speed: 5, price: 68000 },
        { speed: 6, price: 75000 },
        { speed: 8, price: 90000 },
        { speed: 10, price: 107000 },
      ],
    },
  },
  {
    id: 'titiribi',
    name: 'Titiribí',
    type: 'municipio',
    coords: { lat: 6.0636, lng: -75.7953 },
    radio: {
      installation: 100000,
      installationLarge: 250000,
      plans: [
        { speed: 3, price: 46000 },
        { speed: 4, price: 52000 },
        { speed: 5, price: 60000 },
        { speed: 6, price: 68000 },
        { speed: 7, price: 74000 },
        { speed: 8, price: 81000 },
        { speed: 9, price: 88000 },
        { speed: 10, price: 96000 },
      ],
    },
  },
];

export const SERVICES = [
  {
    icon: Home,
    title: 'Fibra óptica para hogares',
    description:
      'Servicio residencial pensado para estabilidad diaria, teletrabajo, entretenimiento y múltiples equipos conectados.',
    features: ['Velocidades competitivas', 'Instalación guiada', 'Atención local'],
  },
  {
    icon: Building2,
    title: 'Internet para empresas',
    description:
      'Conectividad para comercios, oficinas y operaciones que dependen de cámaras, facturación, inventario y atención al cliente.',
    features: ['Continuidad operativa', 'Soporte prioritario', 'Escalabilidad'],
  },
  {
    icon: Radio,
    title: 'Radioenlace para zonas especiales',
    description:
      'Alternativa de conectividad para sectores donde la fibra todavía no llega, con despliegue rápido y cobertura rural.',
    features: ['Cobertura en veredas', 'Implementación ágil', 'Alta disponibilidad'],
  },
  {
    icon: Wrench,
    title: 'Soporte remoto SGM-R',
    description:
      'Herramienta de mantenimiento remoto para diagnóstico y atención más rápida cuando el usuario necesita solución inmediata.',
    features: ['Diagnóstico inicial', 'Menos espera', 'Canal directo de soporte'],
  },
];

export const BENEFITS = [
  {
    icon: Zap,
    title: 'Velocidad orientada al uso cotidiano',
    description: 'Planes pensados para navegación, estudio, trabajo, streaming y operación comercial.',
  },
  {
    icon: ShieldCheck,
    title: 'Trayectoria y respaldo',
    description: 'Años de operación, canales de atención directos y presencia institucional en la región.',
  },
  {
    icon: Clock3,
    title: 'Instalación y respuesta oportuna',
    description: 'Proceso comercial y técnico diseñado para activar el servicio y atender incidencias sin fricción.',
  },
  {
    icon: Headphones,
    title: 'Atención directa',
    description: 'Soporte por teléfono, WhatsApp y herramientas remotas con personas que conocen el servicio.',
  },
  {
    icon: MapPin,
    title: 'Presencia territorial',
    description: 'Cobertura en municipios del Occidente Antioqueño con conocimiento del territorio y sus necesidades.',
  },
  {
    icon: FileCheck2,
    title: 'Cumplimiento regulatorio',
    description: 'PQRSF, indicadores, normatividad y documentos disponibles para consulta de usuarios y autoridades.',
  },
];

export const STEPS = [
  {
    step: '01',
    title: 'Validamos tu cobertura',
    description: 'Confirmamos si tu sector aplica para fibra óptica o radioenlace según tu ubicación.',
  },
  {
    step: '02',
    title: 'Definimos el plan adecuado',
    description: 'Te orientamos según tu uso: hogar, negocio, operación rural o solución especial.',
  },
  {
    step: '03',
    title: 'Instalamos y acompañamos',
    description: 'El servicio queda activo con soporte posterior y canales claros de atención al usuario.',
  },
];

export const COMPANY_STORY = [
  'Logística Integral Satelital S.A.S. desarrolla soluciones de conectividad y mantenimiento de redes de internet para hogares, negocios y sectores especiales del Occidente Antioqueño, con sede principal en Sopetrán y presencia operativa en otros municipios de la subregión.',
  'El origen de la empresa está ligado a la experiencia previa de Ricardo Arturo Vásquez Ríos en asociaciones de televisión en Armenia Mantequilla, Heliconia y Sopetrán. Con los cambios regulatorios del sector y la entrada en vigor de la Ley 1507 de 2012, esa experiencia evolucionó hasta consolidarse como Logística Integral Satelital S.A.S.',
  'Desde 2015 la empresa fortaleció su línea de internet para zonas donde otros operadores no tenían cobertura, ampliando después su operación hacia San Jerónimo, Titiribí, Armenia, Heliconia, Ebéjico, Anzá, Betulia y Altamira con apoyo técnico y puntos de atención local.',
];

export const COMPANY_OFFICES = [
  {
    name: 'Sede principal Sopetrán',
    phone: '604 854 15 05 - 310 593 0440',
    address: 'Carrera 13 # 9-45, 2do piso',
    note: 'Sede administrativa y de atención al usuario.',
  },
  {
    name: 'San Jerónimo',
    phone: '604 858 35 85 - 322 770 8319',
    address: 'Carrera 21 # 11-53, 2do piso',
    note: 'Punto de apoyo para atención al cliente y asistencia técnica.',
  },
  {
    name: 'Heliconia',
    phone: '313 772 2338',
    address: 'Atención comercial y operativa en la subregión de Occidente',
    note: 'Cobertura y acompañamiento local para usuarios del municipio.',
  },
  {
    name: 'Ebéjico',
    phone: '315 292 2925',
    address: 'Atención comercial y operativa en el municipio',
    note: 'Punto de apoyo para atención al cliente y soporte en Ebéjico.',
  },
  {
    name: 'Altamira (Betulia)',
    phone: '300 593 3569',
    address: 'Atención comercial y operativa en el corregimiento',
    note: 'Cobertura y acompañamiento local para usuarios de Altamira y Betulia.',
  },
];

export const COMPANY_GALLERY = [
  {
    src: '/uploads/2024/06/Imagen-23-Enderezada.png',
    alt: 'Equipo técnico de LIS junto a la flota operativa',
    title: 'Equipo y flota local',
    description: 'Cuadrillas y vehículos propios para instalaciones, visitas y soporte en la región.',
    layout: 'wide',
  },
  {
    src: '/uploads/2024/06/Imagen-15.jpg',
    alt: 'Técnicos de LIS realizando trabajo en altura sobre torre',
    title: 'Trabajo en campo',
    description: 'Operación técnica en terreno para mantener cobertura y continuidad del servicio.',
    layout: 'tall',
  },
  {
    src: '/uploads/2024/06/Imagen-10.jpg',
    alt: 'Técnico de LIS junto a equipos de red instalados en rack',
    title: 'Infraestructura activa',
    description: 'Soporte sobre equipos, nodos y puntos técnicos que sostienen la red.',
    layout: 'tall',
  },
  {
    src: '/uploads/2024/06/Imagen-4.jpg',
    alt: 'Fachada del punto de atención de LIS en San Jerónimo',
    title: 'Punto de atención en San Jerónimo',
    description: 'Presencia física para atención administrativa, comercial y operativa en la subregión.',
  },
  {
    src: '/uploads/2024/06/Imagen-19.jpg',
    alt: 'Flota técnica de LIS desplegada para operaciones y soporte',
    title: 'Cobertura con cuadrillas',
    description: 'Vehiculos y personal listos para instalaciones, mantenimiento y desplazamientos técnicos.',
    layout: 'wide',
  },
  {
    src: '/uploads/2024/06/Imagen-12.jpg',
    alt: 'Técnicos de LIS trabajando en torre de comunicaciones en entorno rural',
    title: 'Cobertura rural',
    description: 'Despliegue técnico en zonas donde la continuidad del servicio depende del trabajo en altura.',
    layout: 'tall',
  },
  {
    src: '/uploads/2024/06/Imagen-5.jpg',
    alt: 'Técnicos de LIS junto a estructura de comunicaciones en campo abierto',
    title: 'Operaciones en terreno',
    description: 'Trabajo directo sobre infraestructura para sostener enlaces y puntos estrategicos de la red.',
    layout: 'tall',
  },
  {
    src: '/uploads/2024/06/Imagen-7.jpg',
    alt: 'Técnico de LIS con vehículo de servicio en una calle del municipio',
    title: 'Soporte con movilidad local',
    description: 'Atención cercana en municipios y corregimientos con desplazamiento operativo propio.',
  },
];

export const COMPANY_MISSION =
  'Ser líder en el mantenimiento y operación de redes de televisión e internet, satisfaciendo las necesidades de los clientes con un servicio de buena calidad, fácil acceso y enfoque de crecimiento para el bienestar de la empresa, sus usuarios y sus colaboradores.';

export const COMPANY_VISION =
  'Ser una alternativa confiable y ampliamente reconocida en el campo de las telecomunicaciones por sus diferentes unidades estrategicas de negocio, ventajas competitivas claras, gestión innovadora, mejoramiento continuo, calidad en el servicio y una atención esmerada al usuario.';

export const COMPANY_VALUES = [
  {
    title: 'Calidad en el servicio',
    description: 'La conectividad, el soporte y la atención deben responder con nivel técnico y trato profesional.',
  },
  {
    title: 'Puntualidad',
    description: 'Cada instalación, visita técnica y compromiso comercial debe cumplirse con oportunidad.',
  },
  {
    title: 'Integridad',
    description: 'La empresa actua con transparencia, respeto y coherencia en sus relaciones con usuarios y aliados.',
  },
  {
    title: 'Compañerismo',
    description: 'El trabajo interno se apoya en colaboración para sostener una operación estable y cercana.',
  },
  {
    title: 'Responsabilidad',
    description: 'Cada tarea se asume con compromiso, mejora continua y cumplimiento de los acuerdos adquiridos.',
  },
];

export const ABOUT_PILLARS = [
  {
    icon: BadgeCheck,
    title: 'Trayectoria local',
    description:
      'La empresa nace de la evolución de servicios de televisión y conectividad en la subregión y consolida su operación formal desde 2012.',
  },
  {
    icon: Network,
    title: 'Cobertura en expansión',
    description:
      'La red se ha extendido a municipios y sectores donde hogares y comercios necesitan conectividad estable.',
  },
  {
    icon: Globe,
    title: 'Tecnología con atención cercana',
    description:
      'La propuesta combina infraestructura, soporte técnico y servicio humano para mantener a los usuarios conectados con respaldo.',
  },
];

export const ABOUT_TIMELINE = [
  { year: '2012', text: 'Se consolida Logística Integral Satelital S.A.S. como operación formal de conectividad en la región.' },
  { year: '2015', text: 'Se fortalece la línea de internet alámbrico para zonas donde otros operadores no tenían cobertura.' },
  { year: '2016-2018', text: 'La empresa amplía cobertura y abre nuevos puntos de apoyo para atención al cliente y soporte.' },
  { year: 'Hoy', text: 'La marca opera como proveedor local con foco en hogares, empresas y sectores rurales del Occidente Antioqueño.' },
];

export const REGULATORY_ITEMS = [
  {
    id: 'normatividad',
    icon: ScrollText,
    title: 'Normatividad y obligaciones del sector',
    description:
      'Marco regulatorio aplicable a telecomunicaciones, protección de usuarios y cumplimiento institucional.',
    cta: 'Consultar normatividad',
    summary:
      'Normatividad sectorial, políticas institucionales y documentos de consulta para usuarios y autoridades.',
    bullets: [
      'Resoluciones y lineamientos aplicables al servicio de internet',
      'Información institucional organizada para consulta pública',
      'Base de cumplimiento para procesos comerciales y de soporte',
    ],
    support: 'Actualización periódica según cambios regulatorios.',
    to: '/legal/normatividad',
  },
  {
    id: 'calidad',
    icon: BarChart3,
    title: 'Calidad del servicio e indicadores',
    description:
      'Reportes de calidad, indicadores del usuario y documentos de seguimiento exigidos por la regulación.',
    cta: 'Ver indicadores',
    summary:
      'Indicadores técnicos, reportes históricos y seguimiento del servicio de internet fijo.',
    bullets: [
      'Indicadores de calidad del usuario',
      'Calidad del servicio de internet',
      'Material útil para auditoría, consulta y transparencia',
    ],
    support: 'Conviene publicarlo con fecha visible y trazabilidad documental.',
    to: '/legal/calidad-servicio',
  },
  {
    id: 'pqrsf',
    icon: MessagesSquare,
    title: 'PQRSF y atención al usuario',
    description:
      'Canales para peticiones, quejas, reclamos, sugerencias y felicitaciones con trazabilidad y consulta.',
    cta: 'Ir a PQRSF',
    summary:
      'Canales de radicación, seguimiento y respuesta para solicitudes de usuarios.',
    bullets: [
      'Canales habilitados para peticiones, quejas, reclamos, sugerencias y felicitaciones',
      'Proceso de atención con tiempos y trazabilidad',
      'Conexión directa con WhatsApp, teléfono y correo',
    ],
    support: 'Es uno de los puntos más sensibles para confianza y cumplimiento.',
    to: '/legal/pqrsf',
  },
  {
    id: 'encuesta',
    icon: ClipboardList,
    title: 'Encuesta y experiencia de servicio',
    description:
      'Mecanismos de escucha para medir atención, oportunidad y satisfacción de los usuarios.',
    cta: 'Ver encuesta',
    summary:
      'Ayuda a demostrar escucha activa, mejora continua y seguimiento de la experiencia después de la instalación o soporte.',
    bullets: [
      'Encuesta de satisfacción disponible',
      'Uso comercial y operativo para identificar mejoras',
      'Soporte a procesos de calidad y seguimiento interno',
    ],
    support: 'Puede conectarse luego con un formulario o herramienta externa.',
    to: '/legal/encuesta',
  },
  {
    id: 'políticas',
    icon: FileSpreadsheet,
    title: 'Políticas y documentos de soporte',
    description:
      'Protección de datos, condiciones del servicio, contratos y documentos institucionales de consulta.',
    cta: 'Ver políticas',
    summary:
      'Habeas data, tratamiento de datos, contrato y documentos institucionales de consulta permanente.',
    bullets: [
      'Politica de tratamiento de datos personales',
      'Contrato y condiciones del servicio',
      'Documentos de soporte para usuario, empresa y autoridades',
    ],
    support: 'Consulta permanente para usuarios, soporte y procesos administrativos.',
    to: '/legal/normatividad',
  },
  {
    id: 'centro-documental',
    icon: Files,
    title: 'Centro documental',
    description:
      'Un espacio organizado para que usuarios y autoridades encuentren información relevante sin buscar en páginas dispersas.',
    cta: 'Explorar centro legal',
    summary:
      'Acceso centralizado a la documentación institucional y regulatoria.',
    bullets: [
      'Acceso centralizado a documentos regulatorios',
      'Mejor experiencia para usuarios y procesos de validación',
      'Base para una futura navegación por páginas dedicadas',
    ],
    support: 'Base documental con acceso por secciones.',
    to: '/legal',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Carlos Restrepo',
    location: 'Sopetrán, Antioquia',
    text: 'La empresa responde rápido, el servicio es estable y cuando hemos tenido dudas el soporte remoto ha sido útil y claro.',
    rating: 5,
  },
  {
    name: 'María Fernanda López',
    location: 'San Jerónimo, Antioquia',
    text: 'Nos da tranquilidad contratar con una empresa de la región que conoce la zona y tiene canales de atención accesibles.',
    rating: 5,
  },
  {
    name: 'Ferretería El Constructor',
    location: 'Ebéjico, Antioquia',
    text: 'Para el negocio es clave tener internet estable para cámaras, caja y facturación. LIS nos ha dado continuidad.',
    rating: 5,
  },
];

export const FAQS = [
  {
    question: '¿Cómo sé si mi vivienda o negocio tiene cobertura?',
    answer:
      'La validación se hace con municipio, sector y referencia del punto. El equipo comercial confirma si aplica fibra óptica o radioenlace.',
  },
  {
    question: '¿Qué diferencia hay entre fibra óptica y radioenlace?',
    answer:
      'La fibra óptica ofrece mayor capacidad y menor latencia mediante infraestructura cableada. El radioenlace permite conectar zonas donde la fibra aún no llega.',
  },
  {
    question: '¿Qué pasa si se presenta una falla?',
    answer:
      'La empresa cuenta con atención por WhatsApp, teléfono y soporte remoto SGM-R para diagnosticar y orientar la solución según el caso.',
  },
  {
    question: '¿Dónde encuentro la información legal y regulatoria?',
    answer:
      'Se encuentra en el centro regulatorio del sitio: normatividad, PQRSF, indicadores, encuesta y políticas institucionales.',
  },
  {
    question: '¿Atienden hogares y empresas?',
    answer:
      'Sí. La propuesta debe diferenciar claramente servicios residenciales, empresariales y soluciones para zonas especiales.',
  },
];

export const BILLING_TIMELINE = [
  {
    title: 'Fecha de facturación',
    schedule: '28 de cada mes',
    detail: 'Se genera el ciclo mensual de cobro del servicio.',
  },
  {
    title: 'Entrega de factura',
    schedule: 'Del 29 al 4 de cada mes',
    detail: 'La factura se distribuye para que el usuario conozca el valor y el periodo a pagar.',
  },
  {
    title: 'Fecha de vencimiento',
    schedule: '17 de cada mes',
    detail: 'Hasta esta fecha se puede realizar el pago antes de una suspension por mora.',
  },
  {
    title: 'Fecha de corte',
    schedule: '18 de cada mes',
    detail: 'Si no se registra el pago, el servicio puede pasar a suspension.',
  },
  {
    title: 'Fecha de reconexión',
    schedule: 'Inmediatamente',
    detail: 'Una vez se confirma el pago, la reconexión se realiza sin esperar un nuevo ciclo.',
  },
  {
    title: 'Recolección de equipos',
    schedule: 'Despues del 20 de cada mes',
    detail: 'Aplica para procesos de retiro cuando corresponde devolver equipos instalados.',
  },
];

export const INTERNET_SAFETY_FEATURED = {
  title: 'Internet sano',
  description:
    'Recurso de orientación para promover una navegación segura, responsable y protectora para niñas, niños y adolescentes.',
  detail:
    'La iniciativa busca ayudar a las familias a identificar riesgos digitales y fortalecer prácticas de cuidado en internet.',
  href: 'https://mintic.gov.co/portal/inicio/Sala-de-prensa/Noticias/720:Internet-Sano-una-estrategia-para-proteger-la-identidad-de-niños-y-jovenes-en-la-red',
  image: '/uploads/2024/05/little-boy-showing-blank-screen-laptop-removebg-preview.gif',
};

export const INTEREST_RESOURCES = [
  {
    title: 'Gov.co',
    href: 'https://www.gov.co/',
    image: '/uploads/2024/05/1.png',
    description: 'Portal del Estado colombiano con trámites, servicios y orientación ciudadana.',
  },
  {
    title: 'Superintendencia de Industria y Comercio',
    href: 'https://www.sic.gov.co/',
    image: '/uploads/2024/05/7.png',
    description: 'Entidad para protección del consumidor y orientación sobre derechos del usuario.',
  },
  {
    title: 'Comisión de Regulación de Comunicaciones',
    href: 'https://www.crcom.gov.co/es',
    image: '/uploads/2024/05/2.png',
    description: 'Normatividad y recursos sobre servicios de comunicaciones y protección al usuario.',
  },
  {
    title: 'DIAN',
    href: 'https://www.dian.gov.co/',
    image: '/uploads/2024/05/3.png',
    description: 'Información tributaria y validación relacionada con facturación electrónica.',
  },
  {
    title: 'Gestión del Riesgo',
    href: 'https://portal.gestiondelriesgo.gov.co/',
    image: '/uploads/2024/05/4.png',
    description: 'Información institucional para prevención, alertas y atención del riesgo.',
  },
  {
    title: 'Ministerio TIC',
    href: 'https://www.mintic.gov.co/portal/inicio/',
    image: '/uploads/2024/05/5.png',
    description: 'Políticas, noticias y estrategias nacionales sobre conectividad y uso responsable.',
  },
  {
    title: 'Ministerio del Trabajo',
    href: 'https://www.mintrabajo.gov.co/web/guest/inicio',
    image: '/uploads/2024/05/6.png',
    description: 'Canales oficiales de consulta, orientación laboral y trámites institucionales.',
  },
  {
    title: 'ICBF',
    href: 'https://www.icbf.gov.co/',
    image: '/uploads/2025/08/8.png',
    description: 'Apoyo institucional para protección integral de niñas, niños y adolescentes.',
  },
];

export const REPORTING_RESOURCES = [
  {
    title: 'Te Protejo Colombia',
    href: 'https://teprotejocolombia.org/',
    image: '/uploads/2025/08/9.png',
    description: 'Canal para reportar situaciones que afecten a menores en entornos digitales.',
  },
  {
    title: 'ColCERT',
    href: 'https://www.colcert.gov.co/800/w3-channel.html',
    image: '/uploads/2025/08/10.png',
    description: 'Orientación y reporte de incidentes de seguridad digital y ciberseguridad.',
  },
  {
    title: 'Fiscalia General de la Nacion',
    href: 'https://www.fiscalia.gov.co/colombia/',
    image: '/uploads/2025/08/11.png',
    description: 'Denuncias formales e información sobre investigación de delitos.',
  },
  {
    title: 'Policia Nacional',
    href: 'https://www.policia.gov.co/',
    image: '/uploads/2025/08/12.png',
    description: 'Canales institucionales para denuncias, atención y seguridad ciudadana.',
  },
];

export const CONTACT_INFO = {
  phone: '+57 310 593 0440',
  phoneDial: '+573105930440',
  landline: '604 854 15 05',
  landlineDial: '6048541505',
  whatsappPhone: '+573105930440',
  whatsapp:
    'https://api.whatsapp.com/send?phone=573105930440&text=Hola,%20me%20gustaria%20tener%20mas%20informacion%20sobre%20los%20planes%20de%20internet.',
  email: 'lis.sopetran2018@gmail.com',
  address: 'Carrera 13 # 9-45, Sopetrán, Antioquia',
  municipalityPhones: [
    { label: 'Sopetrán', phone: '310 593 0440', dial: '3105930440', whatsappDial: '573105930440' },
    { label: 'Ebéjico', phone: '315 292 2925', dial: '3152922925', whatsappDial: '573152922925' },
    { label: 'Heliconia', phone: '313 772 2338', dial: '3137722338', whatsappDial: '573137722338' },
    { label: 'San Jerónimo', phone: '322 770 8319', dial: '3227708319', whatsappDial: '573227708319' },
    { label: 'Altamira - Betulia', phone: '300 593 3569', dial: '3005933569', whatsappDial: '573005933569' },
  ],
  officeHours: [
    'Lunes a viernes en oficinas: 7:00 AM a 12:00 PM y 2:00 PM a 5:00 PM.',
    'Sábados en oficinas: 8:00 AM a 12:00 PM.',
    'Sopetrán también atiende los sabados de 2:00 PM a 5:00 PM.',
  ],
  supportHours: [
    'Personal técnico disponible fines de semana y festivos en Sopetrán.',
    'Personal técnico disponible fines de semana y festivos en San Jerónimo.',
  ],
  schedule: 'Oficinas: lunes a viernes 7:00 AM a 12:00 PM y 2:00 PM a 5:00 PM.',
  supportSchedule: 'Sábados: 8:00 AM a 12:00 PM. Sopetrán también atiende de 2:00 PM a 5:00 PM.',
};

export function buildWhatsAppUrl(phone, message) {
  const cleanPhone = String(phone).replace(/[^\d]/g, '');
  const text = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${text}`;
}

export const FOOTER_LINKS = {
  empresa: [
    { label: 'Historia y trayectoria', to: '/empresa' },
    { label: 'Cobertura', to: '/cobertura' },
    { label: 'Canales de contacto', to: '/contacto' },
  ],
  servicios: [
    { label: 'Fibra óptica', to: '/servicios' },
    { label: 'Radioenlace', to: '/servicios' },
    { label: 'Internet empresarial', to: '/servicios' },
    { label: 'Soporte SGM-R', to: '/servicios' },
  ],
  legal: [
    { label: 'Centro regulatorio', to: '/legal' },
    { label: 'PQRSF', to: '/legal/pqrsf' },
    { label: 'Indicadores de calidad', to: '/legal/indicadores-usuario' },
    { label: 'Políticas y documentos', to: '/legal/normatividad' },
  ],
};

export const COMPANY_COPY = {
  heroBadge: 'ISP regional del Occidente Antioqueño',
  topbarNote: 'Fibra óptica, radioenlace y soporte local para Occidente Antioqueño',
};
