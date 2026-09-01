import { useLocale } from '../i18n/useLocale'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

export default function Method() {
  const { t } = useLocale()
  const revealRef = useRevealOnScroll<HTMLDivElement>()

  return (
    <section id="method" className="method-canvas" aria-labelledby="method-title">
      <div className="method-canvas__backdrop" aria-hidden="true" />
      <ol className="method-phases" aria-label={t.method.title}>
        {t.method.steps.map((step, index) => (
          <li key={step.title} className="method-phase">
            <span className="visually-hidden">{String(index + 1).padStart(2, '0')}. </span>
            <div className="method-phase__body">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="method-canvas__inner">
        <div ref={revealRef} className="method-canvas__intro is-reveal-group">
          <h2 id="method-title">{t.method.title}</h2>
          <p className="method-canvas__lead">{t.method.intro}</p>
        </div>
      </div>
    </section>
  )
}
