import { useLocale } from '../i18n/useLocale'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

export default function Method() {
  const { t } = useLocale()
  const revealRef = useRevealOnScroll<HTMLOListElement>()

  return (
    <section id="method" className="method-canvas" aria-labelledby="method-title">
      <div className="method-canvas__backdrop" aria-hidden="true" />
      <ol ref={revealRef} className="method-phases is-reveal-group" aria-label="Las cuatro fases del Método Anclora">
        {t.method.steps.map((step, index) => (
          <li key={step.title} className="method-phase">
            <span className="visually-hidden">{String(index + 1).padStart(2, '0')}. {step.title}: </span>
            <p className="method-phase__caption" aria-hidden="true">{step.description}</p>
          </li>
        ))}
      </ol>
      <div className="container method-canvas__inner">
        <div className="method-canvas__intro">
          <span className="method-canvas__eyebrow mono">FRAMEWORK OPERATIVO</span>
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
