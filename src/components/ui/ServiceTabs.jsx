import { Wifi, Radio } from 'lucide-react';
import './ServiceTabs.scss';

const SERVICE_CONFIG = {
  fiber: { label: 'Internet Fibra', icon: Wifi, color: 'fiber' },
  radio: { label: 'Internet Radio', icon: Radio, color: 'radio' },
};

export default function ServiceTabs({ services, activeService, onSelect }) {
  if (services.length <= 1) return null;

  return (
    <div className="service-tabs" role="tablist" aria-label="Tipo de servicio">
      {services.map((serviceKey) => {
        const config = SERVICE_CONFIG[serviceKey];
        if (!config) return null;
        const Icon = config.icon;
        const isActive = activeService === serviceKey;

        return (
          <button
            key={serviceKey}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={`service-tabs__tab service-tabs__tab--${config.color} ${isActive ? 'service-tabs__tab--active' : ''}`}
            onClick={() => onSelect(serviceKey)}
          >
            <Icon size={16} />
            <span>{config.label}</span>
          </button>
        );
      })}
    </div>
  );
}
