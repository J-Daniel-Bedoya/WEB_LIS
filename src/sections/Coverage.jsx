import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  MapPin, Search, LocateFixed, ArrowRight, Send, Wifi, Radio,
  CheckCircle2, XCircle, Navigation, MessageCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { LOCATIONS, CONTACT_INFO, buildWhatsAppUrl } from '../data/siteData';
import {
  RADIO_TOWERS,
  FIBER_ZONES,
  RADIO_COVERAGE_RADIUS,
  FIBER_COVERAGE_RADIUS,
} from '../data/coverageData';
import { findNearestLocation, haversineDistance } from '../utils/planUtils';
import './Coverage.scss';

/* ── constants ────────────────────────────────── */

const MAP_CENTER = [6.3, -75.77];
const MAP_ZOOM = 10;
const COVERAGE_SEARCH_KM = 15;
const RADIO_REFERENCE_IDS = ['betulia', 'titiribi'];
const Motion = motion;

/* ── label-style markers (show zone name on map) ── */

function buildPointIcon(tech) {
  const bg = tech === 'fiber' ? '#f36a21' : '#1f5fbf';
  return L.divIcon({
    className: 'coverage-map-point',
    html: `<span class="coverage-map-point__dot coverage-map-point__dot--${tech}" style="background:${bg}"></span>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });
}

const USER_ICON = L.divIcon({
  className: 'coverage-marker coverage-marker--pulse',
  html: '<span style="display:block;width:16px;height:16px;border-radius:50%;background:#d94841;border:2.5px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.35)"></span>',
  iconSize: [21, 21],
  iconAnchor: [10, 10],
});

/* ── helpers ──────────────────────────────────── */

function locationType(loc) {
  const f = loc.fiber?.plans?.length > 0;
  const r = loc.radio?.plans?.length > 0;
  if (f && r) return 'mixed';
  if (f) return 'fiber';
  return 'radio';
}

function maxSpeed(plans = []) {
  return plans.reduce((m, p) => (p.speed > m ? p.speed : m), 0);
}

function findLocationById(locationId) {
  return LOCATIONS.find((loc) => loc.id === locationId) ?? null;
}

function findServiceTowerByZone(zoneId, originLat = null, originLng = null) {
  const towers = RADIO_TOWERS.filter((tower) => tower.type === 'service' && tower.zone === zoneId);
  if (!towers.length) return null;
  if (originLat == null || originLng == null) return towers[0];

  return towers.reduce((closest, tower) => {
    if (!closest) return tower;
    const closestDistance = haversineDistance(originLat, originLng, closest.lat, closest.lng);
    const towerDistance = haversineDistance(originLat, originLng, tower.lat, tower.lng);
    return towerDistance < closestDistance ? tower : closest;
  }, null);
}

function checkCoverageByCoords(lat, lng) {
  for (const zone of FIBER_ZONES) {
    const dist = haversineDistance(lat, lng, zone.lat, zone.lng);
    if (dist <= (zone.radius || FIBER_COVERAGE_RADIUS) / 1000) {
      return { covered: true, technology: 'fiber', zone };
    }
  }
  for (const tower of RADIO_TOWERS) {
    if (tower.type !== 'service') continue;
    const dist = haversineDistance(lat, lng, tower.lat, tower.lng);
    if (dist <= RADIO_COVERAGE_RADIUS / 1000) {
      return { covered: true, technology: 'radio', zone: tower };
    }
  }
  return { covered: false };
}

function parseCoordinatePair(value) {
  if (typeof value !== 'string') return null;

  const normalized = value.trim().replace(/\s+/g, ' ');
  if (!normalized) return null;

  const match = normalized.match(/^(-?\d+(?:\.\d+)?)\s*[,;]\s*(-?\d+(?:\.\d+)?)$/)
    ?? normalized.match(/^(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)$/);

  if (!match) return null;

  const lat = Number.parseFloat(match[1]);
  const lng = Number.parseFloat(match[2]);

  if (Number.isNaN(lat) || Number.isNaN(lng)) return null;

  return {
    lat,
    lng,
    latText: match[1],
    lngText: match[2],
  };
}

/* ── map controller ───────────────────────────── */

function FlyTo({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    if (center) map.flyTo(center, zoom ?? 14, { duration: 1.2 });
  }, [center, zoom, map]);
  return null;
}

/* ── search index ─────────────────────────────── */

function buildSearchIndex() {
  const entries = [];
  const seen = new Set();

  for (const loc of LOCATIONS) {
    entries.push({ id: loc.id, name: loc.name, parent: loc.parentName || '', lat: loc.coords.lat, lng: loc.coords.lng, source: 'location', location: loc });
    seen.add(loc.id);
  }
  for (const zone of FIBER_ZONES) {
    if (seen.has(zone.id)) continue;
    entries.push({ id: zone.id, name: zone.name, parent: '', lat: zone.lat, lng: zone.lng, source: 'fiber', zone });
    seen.add(zone.id);
  }
  return entries;
}

/* ── main component ───────────────────────────── */

export default function Coverage({ compact = false }) {
  const [mode, setMode] = useState('search');
  const [query, setQuery] = useState('');
  const [coordLat, setCoordLat] = useState('');
  const [coordLng, setCoordLng] = useState('');
  const [locating, setLocating] = useState(false);
  const [flyTarget, setFlyTarget] = useState(null);
  const [flyZoom, setFlyZoom] = useState(null);
  const [userPin, setUserPin] = useState(null);
  const [highlightCircle, setHighlightCircle] = useState(null);
  const [result, setResult] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const searchRef = useRef(null);

  const searchIndex = useMemo(() => buildSearchIndex(), []);

  /* stats */
  const municipalityCount = useMemo(() => LOCATIONS.filter((l) => l.type === 'municipio').length, []);
  const fiberZoneCount = FIBER_ZONES.length;
  const radioCoverageCount = useMemo(() => LOCATIONS.filter((location) => location.radio?.plans?.length > 0).length, []);
  const mixedCount = useMemo(() => LOCATIONS.filter((l) => l.fiber?.plans?.length && l.radio?.plans?.length).length, []);

  /* filtered search */
  const filtered = useMemo(() => {
    const q = query.trim();
    if (!q) return [];
    const norm = q.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return searchIndex.filter((e) => {
      const n = e.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const p = e.parent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      return n.includes(norm) || p.includes(norm);
    });
  }, [query, searchIndex]);

  /* select from search */
  const selectEntry = useCallback((entry) => {
    setFlyTarget([entry.lat, entry.lng]);
    setFlyZoom(14);
    setUserPin(null);
    setQuery(entry.name);
    setDropdownOpen(false);

    if (entry.source === 'location') {
      const entryType = locationType(entry.location);
      if (entryType === 'radio') {
        const tower = findServiceTowerByZone(entry.location.id, entry.lat, entry.lng);
        setHighlightCircle(
          tower
            ? { center: [tower.lat, tower.lng], radius: RADIO_COVERAGE_RADIUS, tech: 'radio' }
            : null,
        );
      } else {
        const fiberZone = FIBER_ZONES.find((zone) => zone.id === entry.location.id);
        setHighlightCircle({
          center: fiberZone ? [fiberZone.lat, fiberZone.lng] : [entry.lat, entry.lng],
          radius: fiberZone?.radius || FIBER_COVERAGE_RADIUS,
          tech: 'fiber',
        });
      }
    } else {
      setHighlightCircle({
        center: [entry.lat, entry.lng],
        radius: entry.zone?.radius || FIBER_COVERAGE_RADIUS,
        tech: 'fiber',
      });
    }

    if (entry.source === 'location') {
      setResult({
        found: true, location: entry.location, userCoords: { lat: entry.lat, lng: entry.lng },
        distance: 0, technology: locationType(entry.location) === 'radio' ? 'radio' : 'fiber',
      });
    } else {
      const nearest = findNearestLocation(entry.lat, entry.lng, COVERAGE_SEARCH_KM);
      setResult({
        found: true, location: nearest, zoneName: entry.name,
        userCoords: { lat: entry.lat, lng: entry.lng }, distance: 0, technology: 'fiber',
      });
    }
  }, []);

  /* process coords (geo or manual) */
  const processCoords = useCallback((lat, lng) => {
    setUserPin([lat, lng]);
    setFlyTarget([lat, lng]);

    const areaCheck = checkCoverageByCoords(lat, lng);
    const nearest = findNearestLocation(lat, lng, COVERAGE_SEARCH_KM);

    if (areaCheck.covered) {
      const dist = nearest ? haversineDistance(lat, lng, nearest.coords.lat, nearest.coords.lng) : 0;
      const radius = areaCheck.technology === 'radio' ? RADIO_COVERAGE_RADIUS : (areaCheck.zone.radius || FIBER_COVERAGE_RADIUS);
      const fallbackLocation = areaCheck.technology === 'radio' ? findLocationById(areaCheck.zone.zone) : findLocationById(areaCheck.zone.id);
      const resolvedLocation = nearest || fallbackLocation;
      const zoneName = areaCheck.technology === 'radio'
        ? resolvedLocation?.name || fallbackLocation?.name || null
        : areaCheck.zone.name;
      setHighlightCircle({ center: [areaCheck.zone.lat, areaCheck.zone.lng], radius, tech: areaCheck.technology });
      setFlyZoom(13);
      setResult({
        found: true,
        location: resolvedLocation,
        zoneName,
        userCoords: { lat, lng },
        distance: dist,
        technology: areaCheck.technology,
      });
    } else if (nearest) {
      const dist = haversineDistance(lat, lng, nearest.coords.lat, nearest.coords.lng);
      setHighlightCircle(null);
      setFlyZoom(13);
      setResult({ found: true, location: nearest, userCoords: { lat, lng }, distance: dist, technology: locationType(nearest) === 'radio' ? 'radio' : 'fiber' });
    } else {
      setHighlightCircle(null);
      setFlyZoom(11);
      setResult({ found: false, userCoords: { lat, lng } });
    }
  }, []);

  const handleGeolocate = useCallback(() => {
    if (!navigator.geolocation) { setResult({ found: false, error: 'Tu navegador no soporta geolocalización.' }); return; }
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => { processCoords(coords.latitude, coords.longitude); setLocating(false); },
      () => { setResult({ found: false, error: 'No pudimos acceder a tu ubicación. Verifica los permisos del navegador.' }); setLocating(false); },
      { enableHighAccuracy: true, timeout: 10000 },
    );
  }, [processCoords]);

  const handleCoordSearch = useCallback((e) => {
    e.preventDefault();
    const parsedPair = parseCoordinatePair(coordLat) ?? parseCoordinatePair(coordLng);
    const lat = parsedPair?.lat ?? parseFloat(coordLat);
    const lng = parsedPair?.lng ?? parseFloat(coordLng);

    if (Number.isNaN(lat) || Number.isNaN(lng)) { setResult({ found: false, error: 'Ingresa coordenadas válidas (ejemplo: 6.5042, -75.7436).' }); return; }

    if (parsedPair) {
      setCoordLat(parsedPair.latText);
      setCoordLng(parsedPair.lngText);
    }

    processCoords(lat, lng);
  }, [coordLat, coordLng, processCoords]);

  const handleCoordLatChange = useCallback((e) => {
    const nextValue = e.target.value;
    const parsedPair = parseCoordinatePair(nextValue);

    if (parsedPair) {
      setCoordLat(parsedPair.latText);
      setCoordLng(parsedPair.lngText);
      return;
    }

    setCoordLat(nextValue);
  }, []);

  const handleCoordLngChange = useCallback((e) => {
    const nextValue = e.target.value;
    const parsedPair = parseCoordinatePair(nextValue);

    if (parsedPair) {
      setCoordLat(parsedPair.latText);
      setCoordLng(parsedPair.lngText);
      return;
    }

    setCoordLng(nextValue);
  }, []);

  const serviceRequestUrl = useCallback((coords) =>
    buildWhatsAppUrl(CONTACT_INFO.whatsappPhone, [
      'Hola, quiero solicitar servicio de internet para mi zona.',
      '', `Coordenadas: ${coords.lat.toFixed(6)}, ${coords.lng.toFixed(6)}`,
      `Google Maps: https://maps.google.com/?q=${coords.lat},${coords.lng}`,
      '', 'Pueden validar si hay posibilidad de conexión?',
    ].join('\n')),
  []);

  const reset = useCallback(() => {
    setResult(null); setUserPin(null); setHighlightCircle(null);
    setQuery(''); setCoordLat(''); setCoordLng('');
    setFlyTarget(MAP_CENTER); setFlyZoom(MAP_ZOOM);
  }, []);

  useEffect(() => {
    const handler = (e) => { if (searchRef.current && !searchRef.current.contains(e.target)) setDropdownOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const fallbackWhatsApp = buildWhatsAppUrl(CONTACT_INFO.whatsappPhone, 'Hola, quiero validar cobertura para mi municipio, vereda o sector.');
  const municipalities = useMemo(() => LOCATIONS.filter((l) => l.type === 'municipio'), []);

  /* pre-build label icons (memoized) */
  const fiberLabelIcons = useMemo(() => FIBER_ZONES.map((z) => ({ zone: z, icon: buildPointIcon('fiber') })), []);
  const radioReferenceMarkers = useMemo(
    () => LOCATIONS
      .filter((location) => RADIO_REFERENCE_IDS.includes(location.id))
      .map((location) => ({ location, icon: buildPointIcon('radio') })),
    [],
  );
  /* radio towers stay internal and are only used to resolve coverage logic */

  /* ─── render ─────────────────────────────────── */
  return (
    <section id="cobertura" className="coverage section section--dark">
      <div className="container">
        <SectionHeader
          label="Cobertura"
          title={compact ? 'Estamos presentes en el Occidente Antioqueño' : 'Verifica si hay cobertura en tu zona'}
          subtitle={compact
            ? 'Explora nuestras zonas de presencia o consulta la cobertura para tu sector.'
            : 'Explora el mapa interactivo, usa tu ubicación en tiempo real o ingresa coordenadas para saber si podemos conectarte.'}
          light
        />

        <div className={`coverage__layout${compact ? ' coverage__layout--compact' : ''}`}>
          {/* ── map ── */}
          <Motion.div
            className="coverage__map-wrap"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="coverage__map-container">
              <MapContainer
                center={MAP_CENTER}
                zoom={MAP_ZOOM}
                className={`coverage__map${compact ? ' coverage__map--compact' : ''}`}
                scrollWheelZoom
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
                  url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                />

                {flyTarget && <FlyTo center={flyTarget} zoom={flyZoom} />}

                {/* fiber zone labels on map */}
                {fiberLabelIcons.map(({ zone, icon }) => {
                  const loc = LOCATIONS.find((l) => l.id === zone.id);
                  return (
                    <Marker key={`fl-${zone.id}`} position={[zone.lat, zone.lng]} icon={icon}>
                      <Popup>
                        <div className="coverage__popup">
                          <strong>{zone.name}</strong>
                          <span className="coverage__popup-tech coverage__popup-tech--fiber">Fibra óptica</span>
                          {loc && (
                            <Link to={`/planes?ubicación=${zone.id}`} className="coverage__popup-link">
                              Ver planes <ArrowRight size={14} />
                            </Link>
                          )}
                        </div>
                      </Popup>
                    </Marker>
                  );
                })}
                {radioReferenceMarkers.map(({ location, icon }) => (
                  <Marker key={`rr-${location.id}`} position={[location.coords.lat, location.coords.lng]} icon={icon}>
                    <Popup>
                      <div className="coverage__popup">
                        <strong>{location.name}</strong>
                        <span className="coverage__popup-tech coverage__popup-tech--radio">Cobertura por radioenlace</span>
                        <span>En esta zona no contamos con fibra óptica.</span>
                        <Link to={`/planes?ubicación=${location.id}`} className="coverage__popup-link">
                          Ver planes <ArrowRight size={14} />
                        </Link>
                      </div>
                    </Popup>
                  </Marker>
                ))}
                {/* highlight circle when user searches */}
                {highlightCircle && (
                  <Circle
                    center={highlightCircle.center}
                    radius={highlightCircle.radius}
                    pathOptions={{
                      color: highlightCircle.tech === 'fiber' ? '#f36a21' : '#1f5fbf',
                      fillColor: highlightCircle.tech === 'fiber' ? '#f36a21' : '#1f5fbf',
                      fillOpacity: 0.15,
                      weight: 2,
                      opacity: 0.6,
                    }}
                  />
                )}

                {/* user pin */}
                {userPin && (
                  <Marker position={userPin} icon={USER_ICON}>
                    <Popup>Tu ubicación</Popup>
                  </Marker>
                )}
              </MapContainer>
            </div>

            <div className="coverage__legend">
              <div className="coverage__legend-item">
                <span className="coverage__legend-dot coverage__legend-dot--fiber" />
                <span>Fibra óptica</span>
              </div>
              <div className="coverage__legend-item">
                <span className="coverage__legend-dot coverage__legend-dot--radio" />
                <span>Radioenlace</span>
              </div>
            </div>
          </Motion.div>

          {/* ── checker panel ── */}
          {!compact && (
            <Motion.div
              className="coverage__checker"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="coverage__checker-header">
                <h3>Consulta tu cobertura</h3>
                <p>Busca por nombre, usa tu ubicación o ingresa coordenadas.</p>
              </div>

              <div className="coverage__tabs">
                <button className={`coverage__tab${mode === 'search' ? ' coverage__tab--active' : ''}`} onClick={() => setMode('search')} type="button">
                  <Search size={16} /><span>Buscar</span>
                </button>
                <button className={`coverage__tab${mode === 'locate' ? ' coverage__tab--active' : ''}`} onClick={() => setMode('locate')} type="button">
                  <LocateFixed size={16} /><span>Mi ubicación</span>
                </button>
                <button className={`coverage__tab${mode === 'coords' ? ' coverage__tab--active' : ''}`} onClick={() => setMode('coords')} type="button">
                  <Navigation size={16} /><span>Coordenadas</span>
                </button>
              </div>

              <div className="coverage__search-area">
                {mode === 'search' && (
                  <div className="coverage__search-input" ref={searchRef}>
                    <Search size={18} className="coverage__search-icon" />
                    <input type="text" placeholder="Ej: Sopetrán, Altamira, Palo Blanco..." value={query}
                      onChange={(e) => { setQuery(e.target.value); setDropdownOpen(true); }}
                      onFocus={() => setDropdownOpen(true)}
                    />
                    {dropdownOpen && query.trim() && (
                      <div className="coverage__dropdown">
                        {filtered.length > 0 ? filtered.slice(0, 10).map((entry) => (
                          <button key={entry.id} className="coverage__dropdown-item" onClick={() => selectEntry(entry)} type="button">
                            <MapPin size={14} />
                            <div>
                              <strong>{entry.name}</strong>
                              {entry.parent && <span> — {entry.parent}</span>}
                            </div>
                            <Badge variant={entry.source === 'radio' ? 'radio' : 'fiber'}>
                              {entry.source === 'radio' ? 'Radio' : entry.source === 'fiber' ? 'Fibra' : 'Planes'}
                            </Badge>
                          </button>
                        )) : (
                          <div className="coverage__dropdown-empty">No se encontraron coincidencias</div>
                        )}
                      </div>
                    )}
                  </div>
                )}
                {mode === 'locate' && (
                  <div className="coverage__locate">
                    <p>Detecta tu ubicación actual para verificar si hay cobertura cerca de ti.</p>
                    <Button variant="primary" size="lg" icon={LocateFixed} onClick={handleGeolocate} disabled={locating}>
                      {locating ? 'Detectando...' : 'Detectar mi ubicación'}
                    </Button>
                  </div>
                )}
                {mode === 'coords' && (
                  <form className="coverage__coords" onSubmit={handleCoordSearch}>
                    <p id="cov-coords-hint" className="coverage__coords-hint">
                      También puedes pegar ambas coordenadas en un solo campo: 6.252327, -75.829272
                    </p>
                    <div className="coverage__coords-fields">
                      <div className="coverage__field">
                        <label htmlFor="cov-lat">Latitud</label>
                        <input
                          id="cov-lat"
                          type="text"
                          inputMode="decimal"
                          placeholder="Ej: 6.5042"
                          value={coordLat}
                          onChange={handleCoordLatChange}
                          aria-describedby="cov-coords-hint"
                          required
                        />
                      </div>
                      <div className="coverage__field">
                        <label htmlFor="cov-lng">Longitud</label>
                        <input
                          id="cov-lng"
                          type="text"
                          inputMode="decimal"
                          placeholder="Ej: -75.7436"
                          value={coordLng}
                          onChange={handleCoordLngChange}
                          aria-describedby="cov-coords-hint"
                          required
                        />
                      </div>
                    </div>
                    <Button type="submit" variant="primary" icon={Search}>Verificar cobertura</Button>
                  </form>
                )}
              </div>

              {/* quick chips */}
              {!result && mode === 'search' && !query.trim() && (
                <div className="coverage__quick-list">
                  <span className="coverage__quick-label">Municipios con cobertura:</span>
                  <div className="coverage__quick-items">
                    {municipalities.map((loc) => (
                      <button key={loc.id} className="coverage__quick-item" onClick={() => selectEntry(searchIndex.find((e) => e.id === loc.id))} type="button">
                        <MapPin size={12} />{loc.name}
                      </button>
                    ))}
                  </div>
                  <span className="coverage__quick-label" style={{ marginTop: 8 }}>Zonas de fibra:</span>
                  <div className="coverage__quick-items">
                    {FIBER_ZONES.filter((z) => !municipalities.some((m) => m.id === z.id)).map((zone) => (
                      <button key={zone.id} className="coverage__quick-item coverage__quick-item--fiber"
                        onClick={() => { const entry = searchIndex.find((e) => e.id === zone.id); if (entry) selectEntry(entry); }}
                        type="button">
                        <Wifi size={12} />{zone.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* result */}
              {result && (
                <div className={`coverage__result${result.found ? ' coverage__result--found' : ' coverage__result--not-found'}`}>
                  {result.error ? (
                    <div className="coverage__result-error">
                      <XCircle size={20} />
                      <p>{result.error}</p>
                    </div>
                  ) : result.found ? (
                    <>
                      <div className="coverage__result-header">
                        <CheckCircle2 size={22} className="coverage__result-icon--success" />
                        <div>
                          <strong>Hay cobertura disponible</strong>
                          {result.distance > 0 && <span>Zona más cercana a {result.distance.toFixed(1)} km</span>}
                        </div>
                      </div>
                      <div className="coverage__result-details">
                        <h4>{result.zoneName || result.location?.name || 'Zona con cobertura'}</h4>
                        {result.location?.parentName && (
                          <span className="coverage__result-parent">
                            {result.location.type === 'corregimiento' ? 'Corregimiento' : 'Sector'} de {result.location.parentName}
                          </span>
                        )}
                        <div className="coverage__result-techs">
                          {(result.technology === 'fiber' || result.location?.fiber?.plans?.length > 0) && (
                            <div className="coverage__result-tech">
                              <Wifi size={16} />
                              <span>Fibra óptica{result.location?.fiber?.plans?.length > 0 ? ` — hasta ${maxSpeed(result.location.fiber.plans)} Mb` : ''}</span>
                            </div>
                          )}
                          {(result.technology === 'radio' || result.location?.radio?.plans?.length > 0) && (
                            <div className="coverage__result-tech">
                              <Radio size={16} />
                              <span>Radioenlace{result.location?.radio?.plans?.length > 0 ? ` — hasta ${maxSpeed(result.location.radio.plans)} Mb` : ''}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="coverage__result-actions">
                        {result.location ? (
                          <>
                            <Button variant="primary" size="lg" to={`/planes?ubicación=${result.location.id}`} icon={ArrowRight} iconRight>
                              Ver planes disponibles
                            </Button>
                            <Button variant="whatsapp" size="lg" to="/contacto" state={{ locationId: result.location.id }} icon={MessageCircle}>
                              Solicitar servicio
                            </Button>
                          </>
                        ) : (
                          <Button variant="whatsapp" size="lg"
                            href={result.userCoords ? serviceRequestUrl(result.userCoords) : fallbackWhatsApp}
                            target="_blank" rel="noopener noreferrer" icon={Send}>
                            Solicitar servicio para esta zona
                          </Button>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="coverage__result-header">
                        <XCircle size={22} className="coverage__result-icon--warning" />
                        <div>
                          <strong>Sin cobertura confirmada</strong>
                          <span>No encontramos cobertura activa en esta zona.</span>
                        </div>
                      </div>
                      <p className="coverage__result-note">
                        Puedes solicitar que nuestro equipo evalue la viabilidad de conexión para tu zona.
                        Enviaremos las coordenadas para revisión técnica.
                      </p>
                      {result.userCoords && (
                        <div className="coverage__result-coords">
                          <MapPin size={14} />
                          <span>{result.userCoords.lat.toFixed(6)}, {result.userCoords.lng.toFixed(6)}</span>
                        </div>
                      )}
                      <div className="coverage__result-actions coverage__result-actions--request">
                        <Button variant="whatsapp" size="lg"
                          href={result.userCoords ? serviceRequestUrl(result.userCoords) : fallbackWhatsApp}
                          target="_blank" rel="noopener noreferrer" icon={Send}>
                          Solicitar servicio para esta zona
                        </Button>
                        <Button variant="primary" size="lg" to="/contacto" icon={MapPin}>
                          Contactar un asesor
                        </Button>
                      </div>
                    </>
                  )}
                  <button className="coverage__result-reset" onClick={reset} type="button">Hacer otra consulta</button>
                </div>
              )}
            </Motion.div>
          )}
        </div>

        {/* metrics */}
        <Motion.div className="coverage__metrics" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.1 }}>
          <div className="coverage__metric">
            <span className="coverage__metric-value">{municipalityCount}</span>
            <span className="coverage__metric-label">municipios atendidos</span>
          </div>
          <div className="coverage__metric">
            <span className="coverage__metric-value">{fiberZoneCount}</span>
            <span className="coverage__metric-label">zonas con fibra óptica</span>
          </div>
          <div className="coverage__metric">
            <span className="coverage__metric-value">{radioCoverageCount}</span>
            <span className="coverage__metric-label">zonas con radioenlace</span>
          </div>
          <div className="coverage__metric">
            <span className="coverage__metric-value">{mixedCount}</span>
            <span className="coverage__metric-label">disponibilidad mixta</span>
          </div>
        </Motion.div>

        {/* footer CTA */}
        <Motion.div className="coverage__footer" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.15 }}>
          <div className="coverage__footer-copy">
            <span className="coverage__footer-eyebrow">Validación personalizada</span>
            <h3>{compact ? 'Consulta la cobertura completa' : 'Tu zona no aparece en el mapa?'}</h3>
            <p>{compact
              ? 'Usa el mapa interactivo, tu ubicación en tiempo real o coordenadas para saber si podemos conectarte.'
              : 'Podemos validar cobertura para tu municipio, vereda o referencia exacta. Contactanos y evaluamos la viabilidad de conexión.'}</p>
          </div>
          <div className="coverage__footer-actions">
            {compact ? (
              <Button variant="primary" size="lg" to="/cobertura" icon={MapPin}>Explorar mapa de cobertura</Button>
            ) : (
              <>
                <Button variant="primary" size="lg" to="/contacto" icon={MapPin}>Solicitar validación</Button>
                <Button variant="whatsapp" size="lg" href={fallbackWhatsApp} target="_blank" rel="noopener noreferrer" icon={Send} className="coverage__mobile-whatsapp">
                  Validar por WhatsApp
                </Button>
              </>
            )}
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
