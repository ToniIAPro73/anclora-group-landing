import { getTalentUrl } from '../lib/urls'
import filestudioLogo from '../assets/logo/anclora-filestudio.png'
import purgedocLogo from '../assets/logo/anclora-purgedoc.png'
import tableextractLogo from '../assets/logo/anclora-tableextractor.png'
import cleansheetLogo from '../assets/logo/anclora-clearsheet.png'

export type ProductTier = 1 | 2

export type ProductStatus = 'en desarrollo' | 'en validación' | 'en piloto' | 'ecosistema interno' | 'en pausa'

export interface Product {
  id: string
  name: string
  lineId: string
  description: string
  tier: ProductTier
  status?: ProductStatus
  logoSrc?: string
  /** Landing propia del producto, cuando existe destino confirmado. Sin URL confirmada
      en el repo, el CTA cae a #contact (ver Known gaps del informe de rediseño). */
  productUrl?: string
}

// Productos — sección 10 del brand book. `name` (marca) y jerarquía (`tier`) son fijos en todos
// los idiomas. `description`/`status` son el fallback ES; la traducción real vive en
// src/i18n/*.ts (products.items).
// Nivel 3 deliberadamente ausente: no debe mostrarse bajo ninguna circunstancia (sección 10).
export const products: Product[] = [
  {
    id: 'filestudio',
    name: 'Anclora FileStudio',
    lineId: 'secureflow',
    description: 'Conversión, tratamiento y preparación privada de archivos.',
    tier: 1,
    status: 'ecosistema interno',
    logoSrc: filestudioLogo,
  },
  {
    id: 'purgedoc',
    name: 'Anclora PurgeDoc',
    lineId: 'secureflow',
    description: 'Detección y eliminación verificable de información sensible.',
    tier: 1,
    status: 'ecosistema interno',
    logoSrc: purgedocLogo,
  },
  {
    id: 'tableextract',
    name: 'Anclora TableExtract',
    lineId: 'secureflow',
    description: 'Extracción de tablas y datos estructurados desde documentos complejos.',
    tier: 1,
    status: 'ecosistema interno',
    logoSrc: tableextractLogo,
  },
  {
    id: 'cleansheet',
    name: 'Anclora CleanSheet',
    lineId: 'secureflow',
    description: 'Limpieza, transformación e integración de datos en sistemas de negocio.',
    tier: 1,
    status: 'ecosistema interno',
    logoSrc: cleansheetLogo,
  },
  {
    id: 'anclora-fiscal',
    name: 'Anclora Fiscal',
    lineId: 'fiscal-compliance',
    description: 'Fiscalidad, facturación y cumplimiento para operaciones digitales.',
    tier: 1,
    status: 'ecosistema interno',
  },
  {
    id: 'anclora-guesthub',
    name: 'Anclora GuestHub',
    lineId: 'real-estate-intelligence',
    description: 'Gestión de huéspedes, check-in y operación de alquiler vacacional.',
    tier: 1,
    status: 'ecosistema interno',
  },
  {
    id: 'anclora-energyscan',
    name: 'Anclora EnergyScan',
    lineId: 'energy-efficiency',
    description: 'Informes digitales para analizar ahorro y eficiencia energética.',
    tier: 1,
    status: 'ecosistema interno',
  },
  {
    id: 'anclora-private-estates',
    name: 'Anclora Private Estates',
    lineId: 'real-estate-intelligence',
    description: 'Línea inmobiliaria premium centrada en Mallorca y activos selectos.',
    tier: 1,
    status: 'ecosistema interno',
  },
  {
    id: 'anclora-insights',
    name: 'Anclora Insights ADN',
    lineId: 'publishing-digital-knowledge',
    description: 'Sello editorial de Anclora Group dedicado a la investigación, el análisis y la creación de conocimiento aplicado.',
    tier: 1,
    status: 'ecosistema interno',
  },
  {
    id: 'anclora-content-generator-ai',
    name: 'Anclora Content Generator AI',
    lineId: 'publishing-digital-knowledge',
    description: 'Herramienta para crear, transformar y adaptar contenidos mediante inteligencia artificial.',
    tier: 1,
    status: 'ecosistema interno',
  },
  {
    id: 'anclora-talent',
    name: 'Anclora Talent',
    lineId: 'publishing-digital-knowledge',
    description: 'Plataforma editorial para crear, editar, maquetar y publicar proyectos digitales.',
    tier: 1,
    status: 'en pausa',
    productUrl: getTalentUrl(),
  },
  {
    id: 'anclora-nexus',
    name: 'Anclora Nexus',
    lineId: 'operational-automation',
    description: 'Capa de intake, señales y orquestación del ecosistema.',
    tier: 2,
  },
  {
    id: 'anclora-command-center',
    name: 'Anclora Command Center',
    lineId: 'operational-automation',
    description: 'Cabina central para visualizar operaciones, productos y prioridades.',
    tier: 2,
  },
  {
    id: 'anclora-synergi',
    name: 'Anclora Synergi',
    lineId: 'real-estate-intelligence',
    description: 'Inteligencia comercial y automatización aplicada al entorno inmobiliario.',
    tier: 2,
  },
  {
    id: 'anclora-data-lab',
    name: 'Anclora Data LAB',
    lineId: 'real-estate-intelligence',
    description: 'Análisis de datos e inteligencia aplicada para decisiones estratégicas.',
    tier: 2,
  },
]

export const tier1Products = products.filter((p) => p.tier === 1)
export const tier2Products = products.filter((p) => p.tier === 2)
