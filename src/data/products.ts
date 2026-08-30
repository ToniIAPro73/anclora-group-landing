export type ProductTier = 1 | 2

export type ProductStatus = 'en desarrollo' | 'en validación' | 'en piloto' | 'ecosistema interno'

export interface Product {
  id: string
  name: string
  lineId: string
  description: string
  tier: ProductTier
  status?: ProductStatus
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
    id: 'anclora-fiscal',
    name: 'Anclora Fiscal',
    lineId: 'fiscal-compliance',
    description: 'Fiscalidad, facturación y cumplimiento para operaciones digitales.',
    tier: 1,
    status: 'ecosistema interno',
  },
  {
    id: 'anclora-syncxml',
    name: 'Anclora SyncXML',
    lineId: 'operational-automation',
    description: 'Automatización documental para hospedajes y generación XML oficial.',
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
    name: 'Anclora Insights',
    lineId: 'publishing-digital-knowledge',
    description: 'Sello editorial y productos digitales de conocimiento aplicado.',
    tier: 1,
    status: 'ecosistema interno',
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
