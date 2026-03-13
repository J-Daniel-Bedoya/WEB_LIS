import { Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from './components/layout/SiteLayout';
import {
  NORMATIVITY_DOCS,
  NORMATIVITY_CATEGORIES,
  SERVICE_QUALITY_DOCS,
  USER_INDICATOR_DOCS,
  groupByYear,
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

const qualityYearGroups = groupByYear(SERVICE_QUALITY_DOCS);
const indicatorYearGroups = groupByYear(USER_INDICATOR_DOCS);

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
              title="Normatividad, políticas y documentos obligatorios"
              description="Consulta la regulación sectorial colombiana aplicable a servicios de telecomunicaciones e internet."
              sectionTitle="Regulación del sector"
              sectionDescription="Leyes, decretos, resoluciones y circulares organizadas por categoría. Usa el buscador o los filtros para encontrar un documento específico."
              items={NORMATIVITY_DOCS}
              searchable
              categories={NORMATIVITY_CATEGORIES}
            />
          }
        />
        <Route
          path="/legal/calidad-servicio"
          element={
            <LegalSectionPage
              eyebrow="Calidad del servicio"
              title="Histórico de calidad del servicio de internet"
              description="Reportes trimestrales con indicadores de calidad del servicio de datos fijos según Resolución 6333 de la CRC."
              sectionTitle="Reportes por año"
              sectionDescription="Archivos XLS y XLSX con indicadores de calidad organizados por año y trimestre."
              yearGroups={qualityYearGroups}
            />
          }
        />
        <Route
          path="/legal/indicadores-usuario"
          element={
            <LegalSectionPage
              eyebrow="Indicadores del usuario"
              title="Indicadores de protección al usuario"
              description="Informes y certificaciones trimestrales de protección al usuario organizados por periodo."
              sectionTitle="Informes por año"
              sectionDescription="Reportes PDF e informes de certificación organizados por año y trimestre."
              yearGroups={indicatorYearGroups}
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
