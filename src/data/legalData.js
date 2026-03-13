import {
  Scale,
  ScrollText,
  BarChart3,
  MessagesSquare,
  ClipboardList,
  Shield,
  Wifi,
  Lightbulb,
} from 'lucide-react';

// ============================================
// NAVIGATION
// ============================================

export const LEGAL_NAV = [
  { title: 'Centro legal', description: 'Vista general y documentos clave.', to: '/legal', icon: Scale },
  { title: 'Normatividad', description: 'Leyes, decretos y resoluciones del sector.', to: '/legal/normatividad', icon: ScrollText },
  { title: 'Calidad del servicio', description: 'Reportes trimestrales de calidad.', to: '/legal/calidad-servicio', icon: BarChart3 },
  { title: 'Indicadores', description: 'Protección al usuario por periodo.', to: '/legal/indicadores-usuario', icon: Shield },
  { title: 'PQRSF', description: 'Peticiones, quejas y sugerencias.', to: '/legal/pqrsf', icon: MessagesSquare },
  { title: 'Encuesta', description: 'Mide tu satisfacción con el servicio.', to: '/legal/encuesta', icon: ClipboardList },
];

// ============================================
// HUB PAGE SECTIONS
// ============================================

export const LEGAL_SECTIONS = [
  {
    id: 'normatividad',
    icon: ScrollText,
    title: 'Normatividad',
    description: 'Leyes, decretos, resoluciones y circulares que regulan las telecomunicaciones en Colombia.',
    to: '/legal/normatividad',
    count: 57,
    color: 'blue',
  },
  {
    id: 'calidad',
    icon: BarChart3,
    title: 'Calidad del servicio',
    description: 'Reportes trimestrales con indicadores de calidad del servicio de internet fijo (2021–2025).',
    to: '/legal/calidad-servicio',
    count: 18,
    color: 'orange',
  },
  {
    id: 'indicadores',
    icon: Shield,
    title: 'Indicadores del usuario',
    description: 'Informes y certificaciones trimestrales de protección al usuario.',
    to: '/legal/indicadores-usuario',
    count: 32,
    color: 'blue',
  },
  {
    id: 'pqrsf',
    icon: MessagesSquare,
    title: 'PQRSF',
    description: 'Radica peticiones, quejas, reclamos, sugerencias o felicitaciones.',
    to: '/legal/pqrsf',
    color: 'orange',
  },
  {
    id: 'encuesta',
    icon: ClipboardList,
    title: 'Encuesta de satisfacción',
    description: 'Comparte tu experiencia y ayúdanos a mejorar el servicio.',
    to: '/legal/encuesta',
    color: 'blue',
  },
];

// ============================================
// ESSENTIAL / POLICY DOCUMENTS
// ============================================

export const POLICY_DOCS = [
  {
    title: 'Contrato de prestación del servicio',
    summary: 'Condiciones, derechos y obligaciones entre LIS y el usuario del servicio de internet.',
    href: '/uploads/2026/02/contrato-logistica-actualizado-2025.pdf',
    fileType: 'pdf',
    featured: true,
  },
  {
    title: 'Política de protección de datos',
    summary: 'Cómo LIS recopila, almacena y protege la información personal de sus usuarios.',
    href: '/uploads/2021/04/POLITICAS-PROTECCION-DATOS-LOGISTICA.pdf',
    fileType: 'pdf',
    featured: true,
  },
  {
    title: 'Tratamiento de la información',
    summary: 'Procedimientos internos para el manejo responsable de datos e información de usuarios.',
    href: '/uploads/2021/04/políticas-del-tratamiento-de-la-información.docx.pdf',
    fileType: 'pdf',
  },
  {
    title: 'Términos y condiciones del sitio',
    summary: 'Reglas de uso del sitio web, propiedad intelectual y limitaciones de responsabilidad.',
    href: '/uploads/2021/04/TERMINOS-Y-CONDICIONES-USO-DE-LA-WEB.docx.pdf',
    fileType: 'pdf',
  },
  {
    title: 'Procedimiento y trámite de PQRSF',
    summary: 'Procedimiento oficial para radicar y gestionar peticiones, quejas, reclamos, sugerencias y felicitaciones.',
    href: '/uploads/2021/04/Procedimiento-y-Tramite-de-Peticiones-Quejas-y-Recursos.docx.pdf',
    fileType: 'pdf',
    featured: true,
  },
  {
    title: 'Programa RAEE',
    summary: 'Plan de gestión de residuos de aparatos eléctricos y electrónicos según normatividad ambiental.',
    href: '/uploads/2021/04/PLAN-RAEE-LOGISTICA.pdf',
    fileType: 'pdf',
  },
];

// ============================================
// NORMATIVITY CATEGORIES
// ============================================

export const NORMATIVITY_CATEGORIES = [
  { id: 'all', label: 'Todas' },
  { id: 'ley', label: 'Leyes' },
  { id: 'decreto', label: 'Decretos' },
  { id: 'resolucion', label: 'Resoluciones' },
  { id: 'circular', label: 'Circulares' },
];

// ============================================
// NORMATIVITY DOCUMENTS (external regulations)
// ============================================

export const NORMATIVITY_DOCS = [
  // --- Leyes ---
  { title: 'Ley 679 de 2001', category: 'ley', summary: 'Prevención de la explotación y pornografía infantil en redes de internet.', href: '/uploads/2021/03/Ley-679-de-2001.pdf' },
  { title: 'Ley 1341 de 2009', category: 'ley', summary: 'Marco legal del sector de telecomunicaciones en Colombia (Ley TIC).', href: '/uploads/2021/03/Ley-1341-de-2009.pdf' },
  { title: 'Ley 1581 de 2012', category: 'ley', summary: 'Régimen general de protección de datos personales (Habeas Data).', href: '/uploads/2021/03/LEY_1581_2012-1.pdf' },
  { title: 'Ley 1672 de 2013', category: 'ley', summary: 'Gestión integral de residuos de aparatos eléctricos y electrónicos (RAEE).', href: '/uploads/2021/03/LEY-1672-DEL-2013-RAEE.pdf' },
  { title: 'Ley 1978 de 2019', category: 'ley', summary: 'Modernización del sector TIC y fortalecimiento de funciones de vigilancia.', href: '/uploads/2021/03/ley-1978-del-25-de-julio-de-2019.pdf' },
  { title: 'Ley 2300 de 2023', category: 'ley', summary: 'Derecho de los usuarios a no recibir comunicaciones comerciales no deseadas.', href: '/uploads/2024/02/Ley-2300-de-2023.pdf' },

  // --- Decretos ---
  { title: 'Decreto 1704 de 2012', category: 'decreto', summary: 'Reglamentación de la interceptación legal de comunicaciones.', href: '/uploads/2021/04/DECRETO-1704-DE-2012-INTERCEPTACION-LEGAL-DE-COMUNICACIONES.pdf' },
  { title: 'Decreto 1377 de 2013', category: 'decreto', summary: 'Reglamentación parcial de la Ley 1581 sobre protección de datos personales.', href: '/uploads/2021/03/Decreto-1377-2013.pdf' },
  { title: 'Decreto 1078 de 2015', category: 'decreto', summary: 'Interceptación legal de comunicaciones (Arts. 2.2.2.6.1 y 2.2.2.6.2).', href: '/uploads/2021/04/DECRETO-1078-DE-2015-ARTICULOS-22261-22262.pdf' },
  { title: 'Decreto 2157 de 2017', category: 'decreto', summary: 'Directrices de gestión del riesgo de desastres para entidades públicas y privadas.', href: '/uploads/2021/03/decreto_2157_2017.pdf' },
  { title: 'Decreto 90 de 2018', category: 'decreto', summary: 'Régimen de registro TIC simplificado para prestadores de redes y servicios.', href: '/uploads/2021/03/decreto_90_del_18_enero_de_2018.pdf' },
  { title: 'Decreto 1008 de 2018', category: 'decreto', summary: 'Lineamientos de la política de gobierno digital en Colombia.', href: '/uploads/2021/03/Decreto-1008-de-2018.pdf' },

  // --- Circulares ---
  { title: 'Circular 009 de 2007', category: 'circular', summary: 'Disposiciones regulatorias del sector de telecomunicaciones.', href: '/uploads/2021/03/CIRCULAR-009-DE-2007.pdf' },
  { title: 'Circular 05 de 2021', category: 'circular', summary: 'Lineamientos para servicios de valor agregado en proveedores ISP.', href: '/uploads/2021/06/Circular_05_Valor_Agreado_ISP_Rad_212028225_Mario_Alcides_Lozano.pdf' },
  { title: 'Circular 09 de 2021', category: 'circular', summary: 'Regulación del servicio de televisión cerrada por suscripción.', href: '/uploads/2021/06/Circular_09_TV_Cerrada_Rad_212028233_Firmado_Mario_Alcides_Lozano.pdf' },

  // --- Resoluciones ---
  { title: 'Acuerdo 10 de 2006', category: 'resolucion', summary: 'Regulación de telecomunicaciones (derogado por Resolución 0026/2018).', href: '/uploads/2021/03/ACUERDO-10-DE-2006-DEROGADO-POR-RESOLUCION-026.pdf' },
  { title: 'Resolución 3401 de 2011', category: 'resolucion', summary: 'Disposiciones sobre prestación de servicios de telecomunicaciones.', href: '/uploads/2022/06/RESOLUCION-3401-de-2011.pdf' },
  { title: 'Resolución 3484 de 2012', category: 'resolucion', summary: 'Regulación de condiciones de prestación de servicios de comunicaciones.', href: '/uploads/2021/03/RESOLUCION-3484-2012.pdf' },
  { title: 'Resolución 90708 de 2013', category: 'resolucion', summary: 'Reglamento técnico de instalaciones eléctricas aplicable a telecomunicaciones.', href: '/uploads/2023/02/Resolucion-90708-de-2013.pdf' },
  { title: 'Resolución 917 de 2015', category: 'resolucion', summary: 'Condiciones de protección al usuario de servicios de telecomunicaciones.', href: '/uploads/2021/03/Resolucion-917-2015.pdf' },
  { title: 'Resolución 4735 de 2015', category: 'resolucion', summary: 'Disposiciones regulatorias del sector TIC.', href: '/uploads/2021/03/RESO-4735-de-2015.pdf' },
  { title: 'Resolución 1090 de 2016', category: 'resolucion', summary: 'Modificación de la Resolución 917 sobre protección al usuario.', href: '/uploads/2021/06/RESOLUCION-1090-DE-2016-MODIFICA-R.917-DE-2016.pdf' },
  { title: 'Resolución 4875 de 2016', category: 'resolucion', summary: 'Regulación de servicios y redes de telecomunicaciones.', href: '/uploads/2021/03/RES-4875-DE-2016.pdf' },
  { title: 'Resolución 5076 de 2016', category: 'resolucion', summary: 'Disposiciones regulatorias del sector TIC.', href: '/uploads/2021/03/00005076.pdf' },
  { title: 'Resolución CRC 5050 de 2016', category: 'resolucion', summary: 'Régimen de reportes de información periódica a la CRC.', href: '/uploads/2021/03/resolucion_crc_5050_de_2016.pdf' },
  { title: 'Resolución CRC 5111 de 2017', category: 'resolucion', summary: 'Disposiciones de la CRC sobre condiciones de calidad del servicio.', href: '/uploads/2021/03/resolucion_crc_5111_de_2017_3.pdf' },
  { title: 'Resolución CRC 5134 de 2017', category: 'resolucion', summary: 'Regulación de la CRC sobre servicios de telecomunicaciones.', href: '/uploads/2021/03/resolucion_crc_5134_de_2017.pdf' },
  { title: 'Resolución CRC 5161 de 2017', category: 'resolucion', summary: 'Disposiciones de la CRC sobre prestación de servicios.', href: '/uploads/2021/03/resolucion_crc_5161_de_2017_0.pdf' },
  { title: 'Resolución CRC 5165 de 2017', category: 'resolucion', summary: 'Regulación de la CRC sobre condiciones del servicio de internet.', href: '/uploads/2021/03/resolucion_crc_5165_de_2017.pdf' },
  { title: 'Resolución CRC 5197 de 2017', category: 'resolucion', summary: 'Disposiciones de la CRC sobre indicadores del sector.', href: '/uploads/2021/03/resolucion_crc_5197_de_2017.pdf' },
  { title: 'Resolución CRC 5198 de 2017', category: 'resolucion', summary: 'Regulación de la CRC sobre servicios de datos fijos.', href: '/uploads/2021/03/resolucion_crc_5198_de_2017.pdf' },
  { title: 'Resolución CRC 5210 de 2017', category: 'resolucion', summary: 'Disposiciones de la CRC sobre banda ancha y velocidades mínimas.', href: '/uploads/2021/03/resolucion_crc_5210_de_2017.pdf' },
  { title: 'Resolución CRC 5226 de 2017', category: 'resolucion', summary: 'Regulación de la CRC sobre condiciones comerciales del servicio.', href: '/uploads/2021/03/resolucion_crc_5226_de_2017.pdf' },
  { title: 'Resolución CRC 5282 de 2017', category: 'resolucion', summary: 'Disposiciones de la CRC sobre calidad y reporte de indicadores.', href: '/uploads/2021/03/resolucion_crc_5282_de_2017.pdf' },
  { title: 'Resolución CRC 5283 de 2017', category: 'resolucion', summary: 'Regulación de la CRC sobre derechos de los usuarios.', href: '/uploads/2021/03/resolucion_crc_5283_de_2017.pdf' },
  { title: 'Resolución 1022 de 2017', category: 'resolucion', summary: 'Regulación del sector de telecomunicaciones.', href: '/uploads/2021/03/resolucion_1022_2017.pdf' },
  { title: 'Resolución 1813 de 2017', category: 'resolucion', summary: 'Disposiciones del MinTIC sobre servicios de telecomunicaciones.', href: '/uploads/2021/03/resolucion_1813_2017.pdf' },
  { title: 'Resolución 5079 de 2017', category: 'resolucion', summary: 'Indicadores de calidad para el servicio de datos fijos.', href: '/uploads/2021/03/resolucion_5079_2017.pdf' },
  { title: 'Resolución 5151 de 2017', category: 'resolucion', summary: 'Regulación sobre condiciones del servicio de telecomunicaciones.', href: '/uploads/2021/03/RESOLUCION-5151-DE-2017.pdf' },
  { title: 'Resolución 5277 de 2017', category: 'resolucion', summary: 'Disposiciones regulatorias sobre prestación de servicios.', href: '/uploads/2021/03/resolucion_5277_2017.pdf' },
  { title: 'Resolución 0026 de 2018', category: 'resolucion', summary: 'Deroga el Acuerdo 10 de 2006. Nueva regulación del sector.', href: '/uploads/2021/03/RESOLUCION-0026-DEL-2018.pdf' },
  { title: 'Resolución CRC 5300 de 2018', category: 'resolucion', summary: 'Disposiciones de la CRC sobre condiciones del servicio de internet.', href: '/uploads/2021/03/resolucion_crc_5300_de_2018.pdf' },
  { title: 'Resolución CRC 5321 de 2018', category: 'resolucion', summary: 'Regulación de la CRC sobre calidad y continuidad del servicio.', href: '/uploads/2021/03/resolucion_crc_5321_de_2018.pdf' },
  { title: 'Resolución CRC 5337 de 2018', category: 'resolucion', summary: 'Disposiciones de la CRC sobre reporte y gestión de indicadores.', href: '/uploads/2021/03/resolucion_crc_5337_de_2018.pdf' },
  { title: 'Resolución CRC 5397 de 2018', category: 'resolucion', summary: 'Regulación de la CRC sobre servicios y redes de telecomunicaciones.', href: '/uploads/2021/03/resolucion_crc_5397_de_2018.pdf' },
  { title: 'Resolución 5405 de 2018', category: 'resolucion', summary: 'Manual de diseño e instalación de redes internas de telecomunicaciones (RITEL).', href: '/uploads/2021/03/RESOLUCION-5405-DE-2018-MANUAL-RITEL.pdf' },
  { title: 'Resolución 5586 de 2019', category: 'resolucion', summary: 'Reglas de acceso e instalación de infraestructura de telecomunicaciones.', href: '/uploads/2021/03/RES-5586-DE-2019.pdf' },
  { title: 'Resolución 0042 de 2020', category: 'resolucion', summary: 'Disposiciones regulatorias del sector TIC.', href: '/uploads/2021/03/resolucion_0042_2020.pdf' },
  { title: 'Resolución 19012 de 2020', category: 'resolucion', summary: 'Regulación sobre condiciones de prestación de servicios.', href: '/uploads/2021/03/resolucion-19012-1.pdf' },
  { title: 'Resolución 5890 de 2020', category: 'resolucion', summary: 'Condiciones de acceso a infraestructura de redes de energía eléctrica.', href: '/uploads/2021/03/RES-5890-DE-2020.pdf' },
  { title: 'Resolución 0175 de 2021', category: 'resolucion', summary: 'Disposiciones del MinTIC sobre servicios de telecomunicaciones.', href: '/uploads/2021/03/RESOLUCION-0175-DE-1-2021.pdf' },
  { title: 'Resolución 03401 de 2021', category: 'resolucion', summary: 'Regulación actualizada de servicios de telecomunicaciones.', href: '/uploads/2023/08/Resolucion-03401-de-2021-.pdf' },
  { title: 'Resolución 6242 de 2021', category: 'resolucion', summary: 'Disposiciones de la CRC sobre condiciones del servicio.', href: '/uploads/2022/06/RESOLUCION-6242-de-2021.pdf' },
  { title: 'Resolución 6383 de 2021', category: 'resolucion', summary: 'Actualización de indicadores de calidad para servicios de datos fijos.', href: '/uploads/2022/05/RESOLUCION-6383-2021.pdf' },
  { title: 'Resolución 6467 de 2021', category: 'resolucion', summary: 'Regulación sobre condiciones técnicas y de calidad.', href: '/uploads/2022/06/RESOLUCION-6467-DE-2021.pdf' },
  { title: 'Resolución 7120 de 2023', category: 'resolucion', summary: 'Regulación sobre uso compartido de postería para telecomunicaciones.', href: '/uploads/2023/08/RESOLUCIO-7120-POSTERIA-2023.pdf' },
  { title: 'Protección al usuario (Res. 3066)', category: 'resolucion', summary: 'Régimen integral de protección de derechos de usuarios de telecomunicaciones.', href: '/uploads/2021/04/Res-3066-11-Act-4625.pdf' },
];

// ============================================
// GUIDE DOCUMENTS
// ============================================

export const GUIDE_DOCS = [
  { title: 'Seguridad al navegar en la web', summary: 'Recomendaciones para proteger tu información mientras navegas en internet.', href: '/uploads/2021/04/Seguridad-en-la-web.pdf', fileType: 'pdf' },
  { title: 'Seguridad para la niñez', summary: 'Medidas de protección para menores de edad en entornos digitales.', href: '/uploads/2021/04/Dignidad-Infantil.docx.pdf', fileType: 'pdf' },
  { title: 'Facturación electrónica', summary: 'Información sobre el proceso de facturación electrónica de LIS.', href: '/uploads/2021/04/P.F.E.-LOGISTICA.pdf', fileType: 'pdf' },
  { title: 'Guía de control parental', summary: 'Cómo configurar herramientas de control parental en tu conexión de internet.', href: '/uploads/2021/05/Guía-control-parental.pdf', fileType: 'pdf' },
  { title: 'Reporte de dispositivos conectados', summary: 'Cómo identificar los dispositivos que están conectados a tu red.', href: '/uploads/2021/06/REPORTE-DE-DISPOSITIVOS-logistica.pdf', fileType: 'pdf' },
  { title: 'Aprovecha al máximo tu internet', summary: 'Consejos prácticos para optimizar tu conexión y mejorar la experiencia.', href: '/uploads/2021/06/APROVECHA-AL-MAXIMO-TU-INTERNET.pdf', fileType: 'pdf' },
  { title: 'Formato de recolección de equipo', summary: 'Formulario para la devolución o recolección de equipos de LIS.', href: '/uploads/2022/06/RECOLECCION-EQUIPO.pdf', fileType: 'pdf' },
];

export const INTERNET_TIP_DOCS = [
  {
    title: 'Seguridad al navegar en la web',
    summary: 'Recomendaciones para proteger tu información mientras navegas en internet.',
    href: '/uploads/2021/04/Seguridad-en-la-web.pdf',
    fileType: 'pdf',
    tag: 'Seguridad',
    featured: true,
  },
  {
    title: 'Seguridad para la niñez',
    summary: 'Medidas de protección para menores de edad en entornos digitales.',
    href: '/uploads/2021/04/Dignidad-Infantil.docx.pdf',
    fileType: 'pdf',
    tag: 'Familias',
  },
  {
    title: 'Guía de control parental',
    summary: 'Cómo configurar herramientas de control parental en tu conexión de internet.',
    href: '/uploads/2021/05/Guía-control-parental.pdf',
    fileType: 'pdf',
    tag: 'Control parental',
    featured: true,
  },
  {
    title: 'Reporte de dispositivos conectados',
    summary: 'Cómo identificar los dispositivos que están conectados a tu red.',
    href: '/uploads/2021/06/REPORTE-DE-DISPOSITIVOS-logistica.pdf',
    fileType: 'pdf',
    tag: 'Red local',
  },
  {
    title: 'Aprovecha al máximo tu internet',
    summary: 'Consejos prácticos para optimizar tu conexión y mejorar la experiencia.',
    href: '/uploads/2021/06/APROVECHA-AL-MAXIMO-TU-INTERNET.pdf',
    fileType: 'pdf',
    tag: 'Rendimiento',
    featured: true,
  },
];

export const INTERNET_TIP_VIDEOS = [
  {
    title: 'En TIC Confio + | Ciberdependencia y familia',
    summary: 'Video para reconocer señales de dependencia digital y mejorar habitos de uso en casa.',
    href: 'https://www.youtube.com/watch?v=oVcKGCd4eok',
    videoId: 'oVcKGCd4eok',
    tag: 'Familia',
  },
  {
    title: 'Riesgos de contenidos: un peligro en Internet | ETC+',
    summary: 'Orientación para identificar contenidos de riesgo y acompanar mejor a menores y usuarios vulnerables.',
    href: 'https://www.youtube.com/watch?v=11FR1UD4Vwg',
    videoId: '11FR1UD4Vwg',
    tag: 'Seguridad',
  },
  {
    title: 'En Internet NO todo es lo que parece | ETC+',
    summary: 'Buenas prácticas para navegar con criterio y reducir riesgos al interactuar en línea.',
    href: 'https://www.youtube.com/watch?v=aQ8VJoQ9OBI',
    videoId: 'aQ8VJoQ9OBI',
    tag: 'Prevencion',
  },
  {
    title: 'Control parental: que es y como proteger a los niños? | ETC+',
    summary: 'Explica como aplicar controles parentales y acompanar el uso de internet en el hogar.',
    href: 'https://www.youtube.com/watch?v=GYZ_QH0GQYo',
    videoId: 'GYZ_QH0GQYo',
    tag: 'Control parental',
  },
  {
    title: 'Aprende sobre el desarrollo digital de tus hijos en Internet | ETC+',
    summary: 'Consejos para acompanar la experiencia digital de niñas, niños y adolescentes.',
    href: 'https://www.youtube.com/watch?v=_tg_rt4WGyU',
    videoId: '_tg_rt4WGyU',
    tag: 'Familias',
  },
  {
    title: 'Material de abuso sexual infantil: una amenaza en Internet | ETC+',
    summary: 'Contenido para reconocer riesgos graves y reforzar medidas de protección digital.',
    href: 'https://www.youtube.com/watch?v=UqVvyTV1mG0',
    videoId: 'UqVvyTV1mG0',
    tag: 'Protección',
  },
  {
    title: 'Evita hacer Sexting',
    summary: 'Recomendaciones para prevenir exposición de contenido íntimo y riesgos asociados.',
    href: 'https://www.youtube.com/watch?v=E3HoKh0ORQg',
    videoId: 'E3HoKh0ORQg',
    tag: 'Prevencion',
  },
  {
    title: 'Que merece ser compartido en tus redes sociales?',
    summary: 'Recomendaciones para publicar con responsabilidad y proteger información personal.',
    href: 'https://www.youtube.com/watch?v=CTVNZGlShPY',
    videoId: 'CTVNZGlShPY',
    tag: 'Redes sociales',
  },
  {
    title: 'TDT, señal de televisión gratuita',
    summary: 'Explica alternativas de televisión abierta gratuita y su relación con el entorno digital del hogar.',
    href: 'https://www.youtube.com/watch?v=EEs7Na7JYFI',
    videoId: 'EEs7Na7JYFI',
    tag: 'TDT',
  },
  {
    title: 'TDT, señal gratuita de televisión',
    summary: 'Material complementario para entender el acceso a la televisión digital terrestre.',
    href: 'https://www.youtube.com/watch?v=Sk90YwYEE1Q',
    videoId: 'Sk90YwYEE1Q',
    tag: 'TDT',
  },
  {
    title: 'Que es y como funciona la TDT? - Version vertical',
    summary: 'Resumen práctico sobre el funcionamiento de la TDT y su instalación básica.',
    href: 'https://www.youtube.com/watch?v=KsJ4r3gsIVo',
    videoId: 'KsJ4r3gsIVo',
    tag: 'TDT',
  },
  {
    title: 'Paso a paso para conectarse a la señal TDT',
    summary: 'Guía visual para conectarse correctamente a la señal TDT en el hogar.',
    href: 'https://www.youtube.com/watch?v=my04fJe1T1o',
    videoId: 'my04fJe1T1o',
    tag: 'TDT',
  },
];

export const SERVICE_SUPPORT_DOCS = [
  {
    title: 'Facturación electrónica',
    summary: 'Información sobre el proceso de facturación electrónica de LIS.',
    href: '/uploads/2021/04/P.F.E.-LOGISTICA.pdf',
    fileType: 'pdf',
  },
  {
    title: 'Formato de recolección de equipo',
    summary: 'Formulario para la devolución o recolección de equipos de LIS.',
    href: '/uploads/2022/06/RECOLECCION-EQUIPO.pdf',
    fileType: 'pdf',
  },
];

export const INTERNET_TIP_PILLARS = [
  {
    icon: Shield,
    title: 'Seguridad y uso responsable',
    description:
      'Buenas prácticas para cuidar datos personales, cuentas y habitos de navegación en el hogar o el negocio.',
    bullets: ['Protección de información personal', 'Prevencion de riesgos en sitios y enlaces', 'Recomendaciones para adultos y menores'],
  },
  {
    icon: Wifi,
    title: 'Rendimiento de la conexión',
    description:
      'Orientación simple para identificar saturación de red, ubicar mejor el router y entender el consumo de tus equipos.',
    bullets: ['Revisión de dispositivos conectados', 'Mejor uso del WiFi dentro del inmueble', 'Consejos para estudio, trabajo y streaming'],
  },
  {
    icon: Lightbulb,
    title: 'Guias listas para consulta',
    description:
      'Documentos prácticos para usuarios LIS que quieren resolver dudas frecuentes sin depender siempre de soporte.',
    bullets: ['PDF listos para abrir o descargar', 'Información útil para hogares y familias', 'Complemento al soporte comercial y técnico'],
  },
];

// ============================================
// SERVICE QUALITY REPORTS (by year/quarter)
// ============================================

export const SERVICE_QUALITY_DOCS = [
  { title: '1 Trimestre 2025', year: 2025, quarter: 1, fileType: 'xlsx', href: '/uploads/2025/08/1t-2025-Res._6333_-_T2.4_Indicadores_de_calidad_para_el_servicio_de_datos_fijos-.xlsx' },
  { title: '2 Trimestre 2025', year: 2025, quarter: 2, fileType: 'xlsx', href: '/uploads/2025/08/2t-2025-Res._6333_-_T2.4_Indicadores_de_calidad_para_el_servicio_de_datos_fijos.xlsx' },
  { title: '1 Trimestre 2024', year: 2024, quarter: 1, fileType: 'xlsx', href: '/uploads/2024/06/1t-2024-Res._6333_-_T2.4_Indicadores_de_calidad_para_el_servicio_de_datos_fijos-.xlsx' },
  { title: '2 Trimestre 2024', year: 2024, quarter: 2, fileType: 'xlsx', href: '/uploads/2025/08/2t-2024-Res._6333_-_T2.4_Indicadores_de_calidad_para_el_servicio_de_datos_fijos.xlsx' },
  { title: '3 Trimestre 2024', year: 2024, quarter: 3, fileType: 'xlsx', href: '/uploads/2025/08/3t-2024-Res._6333_-_T2.4_Indicadores_de_calidad_para_el_servicio_de_datos_fijos-.xlsx' },
  { title: '4 Trimestre 2024', year: 2024, quarter: 4, fileType: 'xlsx', href: '/uploads/2025/08/4t-2024-Res._6333_-_T2.4_Indicadores_de_calidad_para_el_servicio_de_datos_fijos-4t-2024.xlsx' },
  { title: '1 Trimestre 2023', year: 2023, quarter: 1, fileType: 'xlsx', href: '/uploads/2024/06/1t-2023-Res._6333_-_T2.4_Indicadores_de_calidad_para_el_servicio_de_datos_fijos-.xlsx' },
  { title: '2 Trimestre 2023', year: 2023, quarter: 2, fileType: 'xlsx', href: '/uploads/2024/06/2t-2023-Res._6333_-_T2.4_Indicadores_de_calidad_para_el_servicio_de_datos_fijos-.xlsx' },
  { title: '3 Trimestre 2023', year: 2023, quarter: 3, fileType: 'xlsx', href: '/uploads/2024/06/3t-2023-Res._6333_-_T2.4_Indicadores_de_calidad_para_el_servicio_de_datos_fijos-.xlsx' },
  { title: '4 Trimestre 2023', year: 2023, quarter: 4, fileType: 'xlsx', href: '/uploads/2024/06/4t-2023-Res._6333_-_T2.4_Indicadores_de_calidad_para_el_servicio_de_datos_fijos-.xlsx' },
  { title: '1 Trimestre 2022', year: 2022, quarter: 1, fileType: 'xlsx', href: '/uploads/2024/06/1t-2022-Res._6333_-_T2.4_Indicadores_de_calidad_para_el_servicio_de_datos_fijos-.xlsx' },
  { title: '2 Trimestre 2022', year: 2022, quarter: 2, fileType: 'xlsx', href: '/uploads/2024/06/2t-2022-Res._6333_-_T2.4_Indicadores_de_calidad_para_el_servicio_de_datos_fijos-.xlsx' },
  { title: '3 Trimestre 2022', year: 2022, quarter: 3, fileType: 'xlsx', href: '/uploads/2024/06/3t-2022-Res._6333_-_T2.4_Indicadores_de_calidad_para_el_servicio_de_datos_fijos-.xlsx' },
  { title: '4 Trimestre 2022', year: 2022, quarter: 4, fileType: 'xlsx', href: '/uploads/2024/06/4t-2022-Res._6333_-_T2.4_Indicadores_de_calidad_para_el_servicio_de_datos_fijos-.xlsx' },
  { title: '1 Trimestre 2021', year: 2021, quarter: 1, fileType: 'xls', href: '/uploads/2024/06/1t2021-Res.-5079-TIC-F2.6-Indicadores-de-calidad-para-el-servicio-de-datos-fijos-.xls' },
  { title: '2 Trimestre 2021', year: 2021, quarter: 2, fileType: 'xls', href: '/uploads/2021/08/Res.-5079-TIC-F2.6-Indicadores-de-calidad-2t2021.xls' },
  { title: '3 Trimestre 2021', year: 2021, quarter: 3, fileType: 'xlsx', href: '/uploads/2024/06/3t-2021-Res._6333_-_T2.4_Indicadores_de_calidad_para_el_servicio_de_datos_fijos-.xlsx' },
  { title: '4 Trimestre 2021', year: 2021, quarter: 4, fileType: 'xlsx', href: '/uploads/2024/06/4t-2021-Res._6333_-_T2.4_Indicadores_de_calidad_para_el_servicio_de_datos_fijos-.xlsx' },
];

// ============================================
// USER INDICATOR REPORTS (by year/quarter)
// ============================================

export const USER_INDICATOR_DOCS = [
  { title: '1 Trimestre 2025', year: 2025, quarter: 1, docType: 'informe', href: '/uploads/2025/08/1-Trimestre-2025.pdf' },
  { title: 'Certificación 1 Trimestre 2025', year: 2025, quarter: 1, docType: 'certificacion', href: '/uploads/2025/08/1.-TRIMESTRE-CERTIFICACION-PROTECCION-USUARIOS-2025.pdf' },
  { title: '2 Trimestre 2025', year: 2025, quarter: 2, docType: 'informe', href: '/uploads/2025/08/2-Trimestre-2025.pdf' },
  { title: 'Certificación 2 Trimestre 2025', year: 2025, quarter: 2, docType: 'certificacion', href: '/uploads/2025/08/2.-TRIMESTRE-CERTIFICACION-PROTECCION-USUARIOS-2025.pdf' },
  { title: '1 Trimestre 2024', year: 2024, quarter: 1, docType: 'informe', href: '/uploads/2024/08/1-Trimestre-2024.pdf' },
  { title: 'Certificación 1 Trimestre 2024', year: 2024, quarter: 1, docType: 'certificacion', href: '/uploads/2024/08/1.-TRIMESTRE-CERTIFICACION-PROTECCION-USUARIOS-2024.pdf' },
  { title: '2 Trimestre 2024', year: 2024, quarter: 2, docType: 'informe', href: '/uploads/2024/08/2-Trimestre-2024.pdf' },
  { title: 'Certificación 2 Trimestre 2024', year: 2024, quarter: 2, docType: 'certificacion', href: '/uploads/2024/08/2.-TRIMESTRE-CERTIFICACION-PROTECCION-USUARIOS-2024.pdf' },
  { title: '3 Trimestre 2024', year: 2024, quarter: 3, docType: 'informe', href: '/uploads/2025/08/3-Trimestre-2024.pdf' },
  { title: 'Certificación 3 Trimestre 2024', year: 2024, quarter: 3, docType: 'certificacion', href: '/uploads/2025/08/3.-TRIMESTRE-CERTIFICACION-PROTECCION-USUARIOS-2024.pdf' },
  { title: '4 Trimestre 2024', year: 2024, quarter: 4, docType: 'informe', href: '/uploads/2025/08/4-Trimestre-2024.pdf' },
  { title: 'Certificación 4 Trimestre 2024', year: 2024, quarter: 4, docType: 'certificacion', href: '/uploads/2025/08/4.-TRIMESTRE-CERTIFICACION-PROTECCION-USUARIOS-2024.pdf' },
  { title: '1 Trimestre 2023', year: 2023, quarter: 1, docType: 'informe', href: '/uploads/2024/08/1-Trimestre-2023.pdf' },
  { title: 'Certificación 1 Trimestre 2023', year: 2023, quarter: 1, docType: 'certificacion', href: '/uploads/2024/08/1.-TRIMESTRE-CERTIFICACION-PROTECCION-USUARIOS-2023.pdf' },
  { title: '2 Trimestre 2023', year: 2023, quarter: 2, docType: 'informe', href: '/uploads/2024/08/2Trimestre-2023.pdf' },
  { title: 'Certificación 2 Trimestre 2023', year: 2023, quarter: 2, docType: 'certificacion', href: '/uploads/2024/08/2.-TRIMESTRE-CERTIFICACION-PROTECCION-USUARIOS-2023.pdf' },
  { title: '3 Trimestre 2023', year: 2023, quarter: 3, docType: 'informe', href: '/uploads/2024/08/3-Trimestre-2023.pdf' },
  { title: 'Certificación 3 Trimestre 2023', year: 2023, quarter: 3, docType: 'certificacion', href: '/uploads/2024/08/3.-TRIMESTRE-CERTIFICACION-PROTECCION-USUARIOS-2023.pdf' },
  { title: '4 Trimestre 2023', year: 2023, quarter: 4, docType: 'informe', href: '/uploads/2024/08/4-Trimestre-2023.pdf' },
  { title: 'Certificación 4 Trimestre 2023', year: 2023, quarter: 4, docType: 'certificacion', href: '/uploads/2024/08/4.-TRIMESTRE-CERTIFICACION-PROTECCION-USUARIOS-2023.pdf' },
  { title: '1 Trimestre 2022', year: 2022, quarter: 1, docType: 'informe', href: '/uploads/2024/08/1.-PRIMER-TRIMESTRE-2022.pdf' },
  { title: '2 Trimestre 2022', year: 2022, quarter: 2, docType: 'informe', href: '/uploads/2024/08/2.-SEGUNDO-TRIMESTRE-2022.pdf' },
  { title: 'Certificación 3 Trimestre 2022', year: 2022, quarter: 3, docType: 'certificacion', href: '/uploads/2024/08/3.-TRIMESTRE-CERTIFICACION-PROTECCION-USUARIOS-2022.pdf' },
  { title: 'Certificación 4 Trimestre 2022', year: 2022, quarter: 4, docType: 'certificacion', href: '/uploads/2024/08/4.-TRIMESTRE-CERTIFICACION-PROTECCION-USUARIOS-2022.pdf' },
  { title: '1 Trimestre 2021', year: 2021, quarter: 1, docType: 'informe', href: '/uploads/2021/08/1.-TRIMESTRE-2021.pdf' },
  { title: 'Certificación 1 Trimestre 2021', year: 2021, quarter: 1, docType: 'certificacion', href: '/uploads/2021/08/1.-TRIMESTRE-CERTIFICACION-PROTECCION-USUARIOS-2021.pdf' },
  { title: '2 Trimestre 2021', year: 2021, quarter: 2, docType: 'informe', href: '/uploads/2021/08/2.-TRIMESTRE-2021.pdf' },
  { title: 'Certificación 2 Trimestre 2021', year: 2021, quarter: 2, docType: 'certificacion', href: '/uploads/2021/08/2.-TRIMESTRE-CERTIFICACION-PROTECCION-USUARIOS-2021.pdf' },
  { title: '3 Trimestre 2021', year: 2021, quarter: 3, docType: 'informe', href: '/uploads/2024/08/3.-TRIMESTRE-2021.pdf' },
  { title: 'Certificación 3 Trimestre 2021', year: 2021, quarter: 3, docType: 'certificacion', href: '/uploads/2024/08/3.-TRIMESTRE-CERTIFICACION-PROTECCION-USUARIOS-2021.pdf' },
  { title: '4 Trimestre 2021', year: 2021, quarter: 4, docType: 'informe', href: '/uploads/2024/08/4.-TRIMESTRE-2021.pdf' },
  { title: 'Certificación 4 Trimestre 2021', year: 2021, quarter: 4, docType: 'certificacion', href: '/uploads/2024/08/4.-TRIMESTRE-CERTIFICACION-PROTECCION-USUARIOS-2021.pdf' },
];

// ============================================
// PQRSF & SURVEY
// ============================================

export const PQRS_TYPES = ['Petición', 'Queja', 'Reclamo', 'Sugerencia', 'Felicitación'];

export const PQRS_STEPS = [
  { step: 1, title: 'Elige el tipo', description: 'Selecciona si es una petición, queja, reclamo, sugerencia o felicitación.' },
  { step: 2, title: 'Describe tu caso', description: 'Incluye todos los detalles relevantes para que podamos ayudarte.' },
  { step: 3, title: 'Envía tu solicitud', description: 'Se enviará por correo electrónico para registro y seguimiento.' },
  { step: 4, title: 'Recibe respuesta', description: 'Te contactaremos en los tiempos establecidos por la regulación.' },
];

export const SURVEY_OPTIONS = ['Excelente', 'Bueno', 'Regular', 'Malo'];

// ============================================
// UTILITY: Group docs by year
// ============================================

export function groupByYear(docs) {
  const map = new Map();
  for (const doc of docs) {
    if (!map.has(doc.year)) map.set(doc.year, []);
    map.get(doc.year).push(doc);
  }
  return Array.from(map.entries())
    .sort(([a], [b]) => b - a)
    .map(([year, items]) => ({ year, docs: items }));
}
