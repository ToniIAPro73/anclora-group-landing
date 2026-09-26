import { useLocale } from '../i18n/useLocale'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import { products } from '../data/products'

export default function Evidence() {
  const { t } = useLocale()
  const revealRef = useRevealOnScroll<HTMLDivElement>()

  return (
    <section id="ecosystem" className="evidence" aria-labelledby="evidence-title">
      <div ref={revealRef} className="container evidence__inner is-reveal-group is-reveal-group--stagger">
        <h2 id="evidence-title" className="visually-hidden">
          {t.evidence.title}
        </h2>
        {t.evidence.metrics.map((metric, index) => (
          <article key={metric.label} className="evidence-metric">
            <p className="evidence-metric__value mono">{index === 1 ? String(products.length).padStart(2, '0') : metric.value}</p>
            <h3>{metric.label}</h3>
            <p>{metric.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
