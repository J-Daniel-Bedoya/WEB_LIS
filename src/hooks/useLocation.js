import { useState, useCallback, useMemo } from 'react';
import { getLocation, getAvailableServices, findNearestLocation } from '../utils/planUtils';

const STORAGE_KEY = 'lis-selected-location';

function getStoredLocationId() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function storeLocationId(id) {
  try {
    if (id) {
      localStorage.setItem(STORAGE_KEY, id);
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  } catch {
    // localStorage not available
  }
}

export default function useLocationSelector(initialId = null) {
  const [locationId, setLocationId] = useState(() => initialId || getStoredLocationId());
  const [isDetecting, setIsDetecting] = useState(false);
  const [detectionError, setDetectionError] = useState(null);

  const selectedLocation = useMemo(() => getLocation(locationId), [locationId]);

  const availableServices = useMemo(
    () => (locationId ? getAvailableServices(locationId) : []),
    [locationId],
  );

  const setLocationById = useCallback((id) => {
    setLocationId(id);
    storeLocationId(id);
    setDetectionError(null);
  }, []);

  const clearLocation = useCallback(() => {
    setLocationId(null);
    storeLocationId(null);
    setDetectionError(null);
  }, []);

  const detectLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setDetectionError('Tu navegador no soporta geolocalización.');
      return;
    }

    setIsDetecting(true);
    setDetectionError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const nearest = findNearestLocation(latitude, longitude);

        if (nearest) {
          setLocationId(nearest.id);
          storeLocationId(nearest.id);
        } else {
          setDetectionError(
            'No encontramos cobertura cerca de tu ubicación. Selecciona tu municipio manualmente.',
          );
        }
        setIsDetecting(false);
      },
      () => {
        setDetectionError(
          'No pudimos acceder a tu ubicación. Selecciona tu municipio manualmente.',
        );
        setIsDetecting(false);
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 },
    );
  }, []);

  return {
    selectedLocation,
    setLocationById,
    clearLocation,
    availableServices,
    isDetecting,
    detectLocation,
    detectionError,
  };
}
