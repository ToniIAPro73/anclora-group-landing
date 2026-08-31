export interface EcosystemLine {
  id: string
  name: string
  description: string
  products: string[]
}

// Líneas estratégicas — sección 10 del brand book. `id` y `products` (nombres de marca) son
// fijos en todos los idiomas. `name`/`description` son el fallback ES y la fuente de referencia
// para las traducciones reales, que viven en src/i18n/*.ts (ecosystem.lines).
export const ecosystemLines: EcosystemLine[] = [
  {
    id: 'fiscal-compliance',
    name: 'Fiscal & Compliance',
    description: 'Fiscalidad, facturación, cumplimiento',
    products: ['Anclora Fiscal'],
  },
  {
    id: 'operational-automation',
    name: 'Operational Automation',
    description: 'Automatización documental y operativa',
    products: ['Anclora Nexus', 'Anclora Command Center'],
  },
  {
    id: 'energy-efficiency',
    name: 'Energy & Efficiency',
    description: 'Eficiencia energética y análisis',
    products: ['Anclora EnergyScan'],
  },
  {
    id: 'real-estate-intelligence',
    name: 'Real Estate Intelligence',
    description: 'Inteligencia inmobiliaria y activos premium',
    products: ['Anclora Private Estates', 'Anclora Synergi', 'Anclora Data LAB', 'Anclora GuestHub'],
  },
  {
    id: 'publishing-digital-knowledge',
    name: 'Publishing & Digital Knowledge',
    description: 'Contenido, conocimiento, editorial',
    products: ['Anclora Insights'],
  },
]
