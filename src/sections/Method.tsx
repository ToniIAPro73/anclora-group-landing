import { useLocale } from '../i18n/useLocale'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

export default function Method() {
  const { t } = useLocale()
  const revealRef = useRevealOnScroll<HTMLDivElement>()

  return (
    <section id="method" className="method-canvas" aria-labelledby="method-title">
      <div className="method-canvas__backdrop" aria-hidden="true" />
      <ol className="visually-hidden" aria-label="Las cuatro fases del Método Anclora">
        {t.method.steps.map((step, index) => (
          <li key={step.title}>
            {String(index + 1).padStart(2, '0')}. {step.title}: {step.description}
          </li>
        ))}
      </ol>
      <div className="method-canvas__inner">
        <div ref={revealRef} className="method-canvas__intro is-reveal-group">
          <h2 id="method-title">{t.method.title}</h2>
          <p className="method-canvas__lead">
            Un sistema de trabajo en cuatro fases para convertir fricción real en productos claros, estructurados y escalables.
          </p>
          <p className="method-canvas__meta mono">4 fases <span aria-hidden="true">·</span> claridad <span aria-hidden="true">·</span> control <span aria-hidden="true">·</span> escalabilidad</p>
        </div>
      </div>
    </section>
  )
}
