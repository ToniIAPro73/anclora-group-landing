import { useLocale } from '../i18n/useLocale'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

export default function Method() {
  const { t } = useLocale()
  const revealRef = useRevealOnScroll<HTMLDivElement>()

  return (
    <section id="method" className="method-canvas" aria-labelledby="method-title">
      <div className="method-canvas__backdrop" aria-hidden="true" />
      <div className="container method-canvas__inner">
        <div className="method-canvas__intro">
          <span className="method-canvas__eyebrow mono">FRAMEWORK OPERATIVO</span>
          <h2 id="method-title">{t.method.title}</h2>
          <p className="method-canvas__lead">
            Un sistema de trabajo en cuatro fases para convertir fricción real en productos claros, estructurados y escalables.
          </p>
          <p className="method-canvas__meta mono">4 fases <span aria-hidden="true">·</span> claridad <span aria-hidden="true">·</span> control <span aria-hidden="true">·</span> escalabilidad</p>
        </div>
        <div ref={revealRef} className="method-sequence is-reveal-group" aria-label="Las cuatro fases del Método Anclora">
          {t.method.steps.map((step, index) => (
            <div key={step.title} className="method-step">
              <span className="method-step__index mono">{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
