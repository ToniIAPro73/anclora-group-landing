import type { Product } from '../data/products'
import { ecosystemLines } from '../data/ecosystem'
import { useLocale } from '../i18n/useLocale'

interface ProductCardProps {
  product: Product
  ctaLabel?: string
  /** 'card' (panel independiente) o 'cell' (celda plana dentro del chasis
      de productos, sin borde ni sombra propios). */
  variant?: 'card' | 'cell'
}

export default function ProductCard({ product, ctaLabel, variant = 'card' }: ProductCardProps) {
  const { t } = useLocale()
  const line = ecosystemLines.find((candidate) => candidate.id === product.lineId)
  const lineCopy = line ? t.ecosystem.lines[line.id] : undefined
  const productCopy = t.products.items[product.id]
  const description = productCopy?.description ?? product.description
  const status = productCopy?.status ?? product.status

  return (
    <article className={variant === 'cell' ? 'product-card product-card--cell' : 'product-card'}>
      <div className="product-card__head">
        {line && <p className="product-card__category mono">{lineCopy?.name ?? line.name}</p>}
        {status && (
          <p className="product-card__status mono">
            <span className="product-card__status-dot" aria-hidden="true" />
            {status}
          </p>
        )}
      </div>
      <div className="product-card__body">
        <h3>{product.name}</h3>
        <p>{description}</p>
      </div>
      {ctaLabel &&
        (product.productUrl ? (
          <a
            className="product-card__cta"
            href={product.productUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {ctaLabel}
          </a>
        ) : (
          <a className="product-card__cta" href="#contact">
            {ctaLabel}
          </a>
        ))}
    </article>
  )
}
