import { MapPin, ChevronDown, Loader2, X } from 'lucide-react';
import { getAllLocationOptions } from '../../utils/planUtils';
import './LocationSelector.scss';

const locationGroups = getAllLocationOptions();

export default function LocationSelector({
  selectedLocation,
  onSelect,
  onClear,
  onDetect,
  isDetecting,
  detectionError,
}) {
  if (selectedLocation) {
    return (
      <div className="loc-selector loc-selector--compact">
        <div className="loc-selector__selected">
          <MapPin size={18} className="loc-selector__pin" />
          <span className="loc-selector__label">
            Planes para <strong>{selectedLocation.name}</strong>
            {selectedLocation.parentName && (
              <span className="loc-selector__parent">, {selectedLocation.parentName}</span>
            )}
          </span>
          <button type="button" className="loc-selector__change" onClick={onClear}>
            <X size={14} />
            <span>Cambiar</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="loc-selector loc-selector--open">
      <div className="loc-selector__prompt">
        <MapPin size={22} className="loc-selector__pin" />
        <h3 className="loc-selector__title">¿Dónde necesitas internet?</h3>
        <p className="loc-selector__hint">
          Selecciona tu ubicación para ver precios exactos y servicios disponibles.
        </p>
      </div>

      <div className="loc-selector__controls">
        <div className="loc-selector__select-wrap">
          <select
            className="loc-selector__select"
            value=""
            onChange={(e) => onSelect(e.target.value)}
            aria-label="Selecciona tu municipio"
          >
            <option value="" disabled>
              Selecciona tu municipio
            </option>
            {locationGroups.map((group) => (
              <optgroup key={group.label} label={group.label}>
                {group.options.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          <ChevronDown size={16} className="loc-selector__chevron" />
        </div>

        <button
          type="button"
          className="loc-selector__detect"
          onClick={onDetect}
          disabled={isDetecting}
        >
          {isDetecting ? (
            <Loader2 size={16} className="loc-selector__spinner" />
          ) : (
            <MapPin size={16} />
          )}
          <span>{isDetecting ? 'Detectando...' : 'Detectar mi ubicación'}</span>
        </button>
      </div>

      {detectionError && <p className="loc-selector__error">{detectionError}</p>}
    </div>
  );
}
