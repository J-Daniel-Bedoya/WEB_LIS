/**
 * Coverage visualization data.
 *
 * RADIO_TOWERS  – extracted from Torres.kml (tower GPS positions).
 * FIBER_ZONES   – urban/periurban areas with fiber optic deployment.
 *
 * type = 'service'  → antenna serving customers (draws coverage circle)
 * type = 'relay'    → PTP / OLT infrastructure (shown as small marker, no circle)
 */

/* ── radio coverage radius in meters ─────────── */
export const RADIO_COVERAGE_RADIUS = 3000;

/* ── fiber coverage radius in meters ─────────── */
export const FIBER_COVERAGE_RADIUS = 1500;

/* ── radio towers from KML ───────────────────── */
export const RADIO_TOWERS = [
  // ── Betulia / Altamira ──
  { name: 'Altamira', lat: 6.236667, lng: -75.9425, zone: 'betulia', type: 'service' },
  { name: 'Arboleda', lat: 6.117722, lng: -75.95425, zone: 'betulia', type: 'service' },
  { name: 'Morro Plancho', lat: 6.181336, lng: -75.970487, zone: 'betulia', type: 'service' },
  { name: 'El Filo', lat: 6.266273, lng: -75.934616, zone: 'betulia', type: 'service' },
  { name: 'Vendigujal', lat: 6.239444, lng: -75.916667, zone: 'betulia', type: 'service' },
  { name: 'Betulia', lat: 6.109600, lng: -75.983835, zone: 'betulia', type: 'service' },
  { name: 'El Seis', lat: 6.136389, lng: -75.999167, zone: 'betulia', type: 'service' },
  { name: 'Cienaga', lat: 6.233611, lng: -75.985833, zone: 'betulia', type: 'service' },
  { name: 'Aguacatera', lat: 6.222500, lng: -75.959444, zone: 'betulia', type: 'service' },
  { name: 'PTP Santa Rita', lat: 6.132861, lng: -75.936639, zone: 'betulia', type: 'relay' },
  { name: 'PTP Piñonal', lat: 6.192000, lng: -75.988222, zone: 'betulia', type: 'relay' },
  { name: 'PTP Guadual', lat: 6.178722, lng: -75.975639, zone: 'betulia', type: 'relay' },
  { name: 'PTP Guamalita', lat: 6.242139, lng: -75.981167, zone: 'betulia', type: 'relay' },
  { name: 'PTP Puerto Rico', lat: 6.194152, lng: -75.922107, zone: 'betulia', type: 'relay' },
  { name: 'PTP La Mina', lat: 6.231317, lng: -75.912340, zone: 'betulia', type: 'relay' },
  { name: 'PTP Quebrada Arriba', lat: 6.255825, lng: -75.918070, zone: 'betulia', type: 'relay' },
  { name: 'PTP Urraeña', lat: 6.216733, lng: -76.019447, zone: 'betulia', type: 'relay' },

  // ── Anzá ──
  { name: 'Cejita', lat: 6.324133, lng: -75.909528, zone: 'anza', type: 'service' },
  { name: 'El Pedrero', lat: 6.300371, lng: -75.910065, zone: 'anza', type: 'service' },

  // ── Armenia / Heliconia ──
  { name: 'Armenia', lat: 6.156737, lng: -75.786938, zone: 'armenia', type: 'service' },
  { name: 'Herradura', lat: 6.155792, lng: -75.788301, zone: 'armenia', type: 'service' },
  { name: 'Pueblito', lat: 6.167713, lng: -75.721751, zone: 'heliconia', type: 'service' },
  { name: 'PTP Morrito', lat: 6.204783, lng: -75.718558, zone: 'heliconia', type: 'relay' },
  { name: 'Heliconia', lat: 6.196841, lng: -75.744948, zone: 'heliconia', type: 'service' },
  { name: 'Palo Blanco', lat: 6.258130, lng: -75.785120, zone: 'ebejico', type: 'service' },

  // ── Titiribí ──
  { name: 'Titiribí', lat: 6.071601, lng: -75.779067, zone: 'titiribi', type: 'service' },

  // ── Ebéjico ──
  { name: 'Coles', lat: 6.358996, lng: -75.742175, zone: 'ebejico', type: 'service' },
  { name: 'Brasil', lat: 6.343188, lng: -75.728789, zone: 'ebejico', type: 'service' },
  { name: 'Campo Alegre', lat: 6.333175, lng: -75.760849, zone: 'ebejico', type: 'service' },
  { name: 'Sevilla', lat: 6.289333, lng: -75.782772, zone: 'ebejico', type: 'service' },
  { name: 'Ebéjico', lat: 6.325758, lng: -75.767903, zone: 'ebejico', type: 'service' },
  { name: 'OLT Fibra', lat: 6.302823, lng: -75.957912, zone: 'anza', type: 'relay' },
  { name: 'OLT Sevilla', lat: 6.292272, lng: -75.784661, zone: 'ebejico', type: 'relay' },

  // ── Sopetrán ──
  { name: 'Guayabal', lat: 6.503611, lng: -75.716111, zone: 'sopetran', type: 'service' },
  { name: 'Cordoba', lat: 6.520088, lng: -75.765036, zone: 'sopetran', type: 'service' },
  { name: 'Guasimo', lat: 6.503611, lng: -75.736389, zone: 'sopetran', type: 'service' },
  { name: 'Cruces', lat: 6.496389, lng: -75.734167, zone: 'sopetran', type: 'service' },
  { name: 'Gaitero', lat: 6.463056, lng: -75.778333, zone: 'sopetran', type: 'service' },
  { name: 'PTP Peña Alta', lat: 6.462948, lng: -75.754460, zone: 'sopetran', type: 'relay' },
  { name: 'OLT Sopetrán', lat: 6.501844, lng: -75.745582, zone: 'sopetran', type: 'relay' },
  { name: 'El Mestizo', lat: 6.487222, lng: -75.701944, zone: 'sopetran', type: 'service' },

  // ── San Jerónimo ──
  { name: 'Loma Hermosa', lat: 6.431389, lng: -75.741944, zone: 'san-jeronimo', type: 'service' },
  { name: 'El Tigre', lat: 6.432698, lng: -75.716376, zone: 'san-jeronimo', type: 'service' },
  { name: 'La Potrera', lat: 6.348333, lng: -75.694722, zone: 'san-jeronimo', type: 'service' },
  { name: 'Urquita', lat: 6.365278, lng: -75.698056, zone: 'san-jeronimo', type: 'service' },
  { name: 'San Juan', lat: 6.394167, lng: -75.733056, zone: 'san-jeronimo', type: 'service' },
  { name: 'Blanquizal', lat: 6.339444, lng: -75.742500, zone: 'san-jeronimo', type: 'service' },
  { name: 'Puerto Nuevo', lat: 6.394444, lng: -75.718611, zone: 'san-jeronimo', type: 'service' },
  { name: 'Piedra Negra', lat: 6.385675, lng: -75.734146, zone: 'san-jeronimo', type: 'service' },
  { name: 'OLT San Jerónimo', lat: 6.442632, lng: -75.728651, zone: 'san-jeronimo', type: 'relay' },
];

/* ── fiber deployment zones ──────────────────── */
export const FIBER_ZONES = [
  { id: 'sopetran', name: 'Sopetrán', lat: 6.501844, lng: -75.745582, radius: 1800 },
  { id: 'san-jeronimo', name: 'San Jerónimo', lat: 6.442632, lng: -75.728651, radius: 1500 },
  { id: 'ebejico', name: 'Ebéjico', lat: 6.325758, lng: -75.767903, radius: 1200 },
  { id: 'sevilla', name: 'Sevilla', lat: 6.292272, lng: -75.784661, radius: 900 },
  { id: 'la-gramala', name: 'La Gramala', lat: 6.340111, lng: -75.732750, radius: 700 },
  { id: 'guintar', name: 'Guintar', lat: 6.302260, lng: -75.957157, radius: 800 },
  { id: 'heliconia', name: 'Heliconia', lat: 6.207035, lng: -75.733075, radius: 1400 },
  { id: 'armenia', name: 'Armenia', lat: 6.156737, lng: -75.786938, radius: 1200 },
  { id: 'pueblito', name: 'Pueblito', lat: 6.167713, lng: -75.721751, radius: 800 },
  { id: 'guamal', name: 'Guamal', lat: 6.160417, lng: -75.740417, radius: 700 },
  { id: 'palo-blanco', name: 'Palo Blanco', lat: 6.258130, lng: -75.785120, radius: 700 },
  { id: 'el-llano-san-jose', name: 'El Llano de San Jose', lat: 6.251314, lng: -75.749861, radius: 700 },
  { id: 'la-pradera', name: 'La Pradera', lat: 6.245468, lng: -75.774771, radius: 700 },
];
