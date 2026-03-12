import { LOCATIONS } from '../data/siteData';

/**
 * Get a location by ID.
 */
export function getLocation(id) {
  return LOCATIONS.find((loc) => loc.id === id) || null;
}

/**
 * Get available service types for a location.
 * Returns array like ['fiber', 'radio']
 */
export function getAvailableServices(locationId) {
  const loc = getLocation(locationId);
  if (!loc) return [];

  const services = [];
  if (loc.fiber?.plans?.length) services.push('fiber');
  if (loc.radio?.plans?.length) services.push('radio');
  return services;
}

/**
 * Get all locations formatted for dropdowns, grouped by parent municipality.
 */
export function getAllLocationOptions() {
  const municipios = LOCATIONS.filter((l) => l.type === 'municipio');
  const corregimientos = LOCATIONS.filter((l) => l.type === 'corregimiento');

  const groups = [];

  for (const mun of municipios) {
    const children = corregimientos.filter((c) => c.parentName === mun.name);
    groups.push({
      label: mun.name,
      options: [
        { id: mun.id, label: mun.name },
        ...children.map((c) => ({ id: c.id, label: `${c.name} (${c.parentName})` })),
      ],
    });
  }

  // Add corregimientos whose parent isn't a municipio in the list
  const orphans = corregimientos.filter(
    (c) => !municipios.some((m) => m.name === c.parentName),
  );
  for (const orphan of orphans) {
    groups.push({
      label: orphan.parentName || orphan.name,
      options: [{ id: orphan.id, label: `${orphan.name} (${orphan.parentName})` }],
    });
  }

  return groups;
}

/**
 * Get all plan options for a location, flat array for contact form dropdowns.
 */
export function getAvailablePlansForLocation(locationId) {
  const loc = getLocation(locationId);
  if (!loc) return [];

  const options = [];

  if (loc.fiber?.plans) {
    for (const plan of loc.fiber.plans) {
      const zone = plan.zone ? ` (${plan.zone})` : '';
      options.push({
        id: `fiber-${plan.speed}${plan.zone || ''}`,
        label: `Fibra ${plan.speed} Megas${zone}`,
        technology: 'fiber',
        speed: plan.speed,
        price: plan.price,
      });
    }
  }

  if (loc.radio?.plans) {
    for (const plan of loc.radio.plans) {
      options.push({
        id: `radio-${plan.speed}`,
        label: `Radio ${plan.speed} Megas`,
        technology: 'radio',
        speed: plan.speed,
        price: plan.price,
      });
    }
  }

  return options;
}

/**
 * Format a number as Colombian peso price string.
 */
export function formatPrice(num) {
  return num.toLocaleString('es-CO');
}

/**
 * Haversine distance between two lat/lng points in km.
 */
export function haversineDistance(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/**
 * Find the nearest location to given coordinates within maxKm.
 */
export function findNearestLocation(lat, lng, maxKm = 15) {
  let nearest = null;
  let minDist = Infinity;

  for (const loc of LOCATIONS) {
    const dist = haversineDistance(lat, lng, loc.coords.lat, loc.coords.lng);
    if (dist < minDist && dist <= maxKm) {
      minDist = dist;
      nearest = loc;
    }
  }

  return nearest;
}

/**
 * Get a human-readable context string for a speed value.
 */
export function getSpeedContext(speed) {
  if (speed >= 200) return 'Familias grandes, gaming, 4K y teletrabajo intensivo';
  if (speed >= 100) return 'Streaming, teletrabajo y varios dispositivos';
  if (speed >= 20) return 'Teletrabajo, streaming HD y uso familiar';
  if (speed >= 10) return 'Navegación, estudio y streaming estándar';
  if (speed >= 5) return 'Navegación, redes sociales y videollamadas';
  return 'Navegación básica, correo y mensajería';
}
