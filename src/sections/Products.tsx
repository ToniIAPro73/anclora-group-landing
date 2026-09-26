import { useLocale } from '../i18n/useLocale'
import SectionHeader from '../components/SectionHeader'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

/**
 * El catálogo completo se muestra en una única sección: 11 productos Tier 1 y
 * 4 módulos Tier 2. Los módulos SaaS conservan la misma ficha, pero sin icono.
 */
export default function Products() {
  const { t } = useLocale()
  const flagshipRevealRef = useRevealOnScroll<HTMLDivElement>()

  return (
    <section id="products" className="section section--surface">
      <div className="container">
        <SectionHeader title={t.products.title} text={t.infrastructure.text} />
        <div className="products-chassis">
          <div ref={flagshipRevealRef} className="products-chassis__flagship is-reveal-group is-reveal-group--stagger">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                ctaLabel={t.products.ctaView}
                variant="cell"
                showLogo={product.tier === 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
