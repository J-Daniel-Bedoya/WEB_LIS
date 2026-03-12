import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, Wifi, Radio } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import LocationSelector from '../components/ui/LocationSelector';
import ServiceTabs from '../components/ui/ServiceTabs';
import useLocationSelector from '../hooks/useLocation';
import { formatPrice, getSpeedContext } from '../utils/planUtils';
import './Plans.scss';

const TECH_ICON = { fiber: Wifi, radio: Radio };

function PlanCard({ plan, technology, locationId, locationName, index }) {
  const badgeVariant = technology === 'fiber' ? 'fiber' : 'radio';
  const badgeLabel = technology === 'fiber' ? 'Fibra' : 'Radio';

  return (
    <motion.article
      className={`plans__card ${plan.highlighted ? 'plans__card--highlighted' : ''}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
    >
      <div className="plans__card-top">
        <Badge variant={badgeVariant}>{badgeLabel}</Badge>
        {plan.zone && <Badge variant="default">{plan.zone}</Badge>}
        {plan.highlighted && <Badge variant="highlight">Recomendado</Badge>}
      </div>

      <div className="plans__card-speed">
        <span className="plans__card-speed-value">{plan.speed}</span>
        <div className="plans__card-speed-unit">
          <span>Mbps</span>
        </div>
      </div>

      <p className="plans__card-context">{getSpeedContext(plan.speed)}</p>

      <div className="plans__card-price">
        <span className="plans__card-currency">$</span>
        <span className="plans__card-amount">{formatPrice(plan.price)}</span>
        <span className="plans__card-period">/mes</span>
      </div>

      <Button
        variant={plan.highlighted ? 'primary' : 'outline'}
        size="lg"
        to="/contacto"
        state={{
          locationId,
          planId: `${technology}-${plan.speed}${plan.zone || ''}`,
          planLabel: `${badgeLabel} ${plan.speed} Megas`,
          locationName,
        }}
        icon={ChevronRight}
        iconRight
        className="plans__card-cta"
      >
        Contratar este plan
      </Button>
    </motion.article>
  );
}

function InstallationInfo({ location }) {
  const items = [];

  if (location.fiber) {
    items.push({ label: 'Instalación fibra óptica', price: location.fiber.installation });
  }
  if (location.radio) {
    items.push({ label: 'Instalación antena', price: location.radio.installation });
    if (location.radio.installationFinca) {
      items.push({ label: 'Instalación finca/negocio', price: location.radio.installationFinca });
    }
    if (location.radio.installationLarge) {
      items.push({ label: 'Instalación antena grande', price: location.radio.installationLarge });
    }
  }

  if (!items.length) return null;

  return (
    <div className="plans__installation">
      <h4>Costos de instalación en {location.name}</h4>
      <div className="plans__installation-list">
        {items.map((item) => (
          <div key={item.label} className="plans__installation-item">
            <span>{item.label}</span>
            <span className="plans__installation-price">${formatPrice(item.price)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ComercialInfo({ comercialPlans }) {
  if (!comercialPlans?.length) return null;

  return (
    <div className="plans__comercial">
      <h4>Planes comerciales</h4>
      <p className="plans__comercial-note">Precios antes de IVA, aplica para negocios y comercios.</p>
      <div className="plans__comercial-list">
        {comercialPlans.map((plan) => (
          <div key={plan.speed} className="plans__comercial-item">
            <span>Internet {plan.speed} Megas</span>
            <span className="plans__comercial-price">
              ${formatPrice(plan.priceBeforeIva)} + IVA
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function NoLocationView() {
  return (
    <div className="plans__no-location">
      <div className="plans__summary-card plans__summary-card--fiber">
        <Wifi size={28} />
        <h3>Internet Fibra</h3>
        <p>Desde <strong>$49.000</strong>/mes</p>
        <span>10 a 300 Mbps según tu ubicación</span>
      </div>
      <div className="plans__summary-card plans__summary-card--radio">
        <Radio size={28} />
        <h3>Internet Radio</h3>
        <p>Desde <strong>$46.000</strong>/mes</p>
        <span>3 a 12 Mbps donde la fibra no llega</span>
      </div>
    </div>
  );
}

export default function Plans({ initialLocationId = null }) {
  const {
    selectedLocation,
    setLocationById,
    clearLocation,
    availableServices,
    isDetecting,
    detectLocation,
    detectionError,
  } = useLocationSelector(initialLocationId);

  const [activeService, setActiveService] = useState(null);

  // Set default active service when location changes
  useEffect(() => {
    if (availableServices.length > 0) {
      setActiveService(availableServices[0]);
    } else {
      setActiveService(null);
    }
  }, [availableServices]);

  const loc = selectedLocation;
  const hasLocation = !!loc;

  // Get current plans for active service
  let currentPlans = [];
  if (loc && activeService === 'fiber') currentPlans = loc.fiber?.plans || [];
  if (loc && activeService === 'radio') currentPlans = loc.radio?.plans || [];

  return (
    <section id="planes" className="plans section">
      <div className="container">
        <SectionHeader
          label="Planes de internet"
          title={
            hasLocation
              ? `Planes disponibles en ${loc.name}`
              : 'Internet para el Occidente Antioqueño'
          }
          subtitle={
            hasLocation
              ? 'Velocidades, precios y servicios según la infraestructura de tu zona.'
              : 'Selecciona tu ubicación para ver precios exactos y servicios disponibles.'
          }
        />

        <LocationSelector
          selectedLocation={selectedLocation}
          onSelect={setLocationById}
          onClear={clearLocation}
          onDetect={detectLocation}
          isDetecting={isDetecting}
          detectionError={detectionError}
        />

        <AnimatePresence mode="wait">
          {hasLocation ? (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <ServiceTabs
                services={availableServices}
                activeService={activeService}
                onSelect={setActiveService}
              />

              {/* Fiber or Radio plans */}
              {(activeService === 'fiber' || activeService === 'radio') && (
                <div
                  className={`plans__grid plans__grid--${Math.min(currentPlans.length, 4)}`}
                >
                  {currentPlans.map((plan, index) => (
                    <PlanCard
                      key={`${activeService}-${plan.speed}-${plan.zone || ''}`}
                      plan={plan}
                      technology={activeService}
                      locationId={loc.id}
                      locationName={loc.name}
                      index={index}
                    />
                  ))}
                </div>
              )}

              <InstallationInfo location={loc} />

              {loc.fiber?.comercial && (
                <ComercialInfo comercialPlans={loc.fiber.comercial} />
              )}

              <p className="plans__disclaimer">
                * Precios con IVA incluido (excepto planes comerciales). La velocidad,
                instalación y disponibilidad están sujetas a cobertura y condiciones
                técnicas del sector.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="no-location"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <NoLocationView />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
