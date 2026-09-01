import { useLocale } from '../i18n/useLocale'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

export default function Method() {
  const { t } = useLocale()
  const revealRef = useRevealOnScroll<HTMLDivElement>()
  const metaParts = t.method.metadata.split('·').map((part) => part.trim())

  return (
    <section id="method" className="method-canvas" aria-labelledby="method-title">
      <div className="method-canvas__backdrop" aria-hidden="true" />
      <ol className="method-phases" aria-label={t.method.title}>
        {t.method.steps.map((step, index) => (
          <li key={step.title} className="method-phase">
            <span className="visually-hidden">{String(index + 1).padStart(2, '0')}. </span>
            <span className="method-phase__dot" aria-hidden="true" />
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
          <p className="method-canvas__meta mono">
            {metaParts.map((part, index) => (
              <span key={part}>
                {index > 0 && <span className="method-canvas__meta-dot" aria-hidden="true">·</span>}
                {part}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}
