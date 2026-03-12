import { Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from './components/layout/SiteLayout';
import {
  NORMATIVITY_DOCS,
  POLICY_DOCS,
  SERVICE_QUALITY_DOCS,
  USER_INDICATOR_DOCS,
} from './data/legalData';
import CompanyPage from './pages/CompanyPage';
import ContactPage from './pages/ContactPage';
import CoveragePage from './pages/CoveragePage';
import HomePage from './pages/HomePage';
import LegalHubPage from './pages/LegalHubPage';
import LegalSectionPage from './pages/LegalSectionPage';
import PlansPage from './pages/PlansPage';
import PqrsPage from './pages/PqrsPage';
import ServicesPage from './pages/ServicesPage';
import SurveyPage from './pages/SurveyPage';

const normativitySections = [
  {
    title: 'Politicas institucionales y documentos clave',
    description: 'Contrato, politicas de datos, terminos, PQRSF y documentos institucionales de consulta.',
    items: POLICY_DOCS,
  },
  {
    title: 'Normatividad y regulacion del sector',
    description: 'Normatividad, resoluciones, decretos y documentos sectoriales publicados por la empresa.',
    items: NORMATIVITY_DOCS,
  },
];

const serviceQualitySections = [
  {
    title: 'Historico de calidad del servicio',
    description: 'Archivos XLS y XLSX con reportes historicos de calidad del servicio de internet fijo.',
    items: SERVICE_QUALITY_DOCS,
  },
];

const userIndicatorSections = [
  {
    title: 'Informes y certificaciones del usuario',
    description: 'Reportes trimestrales y certificaciones de proteccion al usuario.',
    items: USER_INDICATOR_DOCS,
  },
];

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/planes" element={<PlansPage />} />
        <Route path="/cobertura" element={<CoveragePage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/empresa" element={<CompanyPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/legal" element={<LegalHubPage />} />
        <Route
          path="/legal/normatividad"
          element={
            <LegalSectionPage
              eyebrow="Normatividad"
              title="Normatividad, politicas y documentos obligatorios"
              description="Consulta normatividad sectorial, politicas institucionales y documentos obligatorios de la empresa."
              summaryCards={[
                { title: 'Documentacion vigente', text: 'Acceso directo a contratos, politicas y normatividad sectorial.' },
                { title: 'Consulta rapida', text: 'Busqueda mas clara por grupos documentales y enlaces directos.' },
                { title: 'Soporte institucional', text: 'Base documental para usuarios, soporte y procesos administrativos.' },
              ]}
              sections={normativitySections}
            />
          }
        />
        <Route
          path="/legal/calidad-servicio"
          element={
            <LegalSectionPage
              eyebrow="Calidad del servicio"
              title="Historico de calidad del servicio de internet"
              description="Consulta los reportes tecnicos e historicos de calidad del servicio de internet."
              summaryCards={[
                { title: 'Cobertura temporal', text: 'Reportes historicos 2021-2025 disponibles para consulta.' },
                { title: 'Formato', text: 'Archivos XLS y XLSX listos para descarga.' },
                { title: 'Consulta', text: 'Acceso separado dentro del centro legal.' },
              ]}
              sections={serviceQualitySections}
            />
          }
        />
        <Route
          path="/legal/indicadores-usuario"
          element={
            <LegalSectionPage
              eyebrow="Indicadores del usuario"
              title="Indicadores de calidad del usuario y certificaciones"
              description="Reportes e indicadores de proteccion al usuario organizados por periodo."
              summaryCards={[
                { title: 'Archivos PDF', text: 'Informes y certificaciones trimestrales disponibles para descarga.' },
                { title: 'Consulta rapida', text: 'Ubicacion por trimestre y tipo de documento.' },
                { title: 'Proteccion al usuario', text: 'Documentacion visible dentro del centro legal.' },
              ]}
              sections={userIndicatorSections}
            />
          }
        />
        <Route path="/legal/pqrsf" element={<PqrsPage />} />
        <Route path="/legal/encuesta" element={<SurveyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
