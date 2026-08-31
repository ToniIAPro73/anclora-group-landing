import type { EcosystemLine } from '../data/ecosystem'
import { useLocale } from '../i18n/useLocale'

interface EcosystemCardProps {
  line: EcosystemLine
  index?: number
}

export default function EcosystemCard({ line, index = 0 }: EcosystemCardProps) {
  const { t } = useLocale()
  const copy = t.ecosystem.lines[line.id]

  return (
    <article className="ecosystem-rail">
      <span className="ecosystem-rail__node" aria-hidden="true">
        <span className="ecosystem-rail__index mono">{String(index + 1).padStart(2, '0')}</span>
      </span>
      <div className="ecosystem-rail__body">
        <h3>{copy?.name ?? line.name}</h3>
        <p>{copy?.description ?? line.description}</p>
      </div>
      <div className="ecosystem-rail__products">
        {line.products.map((product) => (
          <span key={product} className="ecosystem-rail__module">
            {product}
          </span>
        ))}
      </div>
    </article>
  )
}
