import { useLocale } from '../i18n/useLocale'
import { ecosystemLines } from '../data/ecosystem'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import { navigateToSection } from '../navigation/scroll'

export default function Hero() {
  const { t } = useLocale()
  const revealRef = useRevealOnScroll<HTMLDivElement>()

  return (
    <section id="top" className="hero">
      <div className="hero__bg" aria-hidden="true" />

      <div className="container hero__grid">
        <div ref={revealRef} className="hero__copy is-reveal-group">
          <p className="hero__eyebrow mono">{t.hero.eyebrow}</p>
          <h1>{t.hero.title}</h1>
          <p className="hero__tagline">{t.hero.tagline}</p>
          <p className="hero__subtitle">{t.hero.subtitle}</p>
          <div className="hero__actions">
            <a
              href="#ecosystem"
              className="btn btn-primary"
              onClick={(event) => {
                if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
                event.preventDefault()
                navigateToSection('ecosystem', { updateHash: true })
              }}
            >
              {t.hero.ctaPrimary}
            </a>
            <a href="#contact" className="btn btn-secondary">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      <div className="hero__status container">
        <p className="hero__status-caption">{t.hero.instrumentCaption}</p>
        <ul className="hero__status-list">
          {ecosystemLines.map((line, index) => (
            <li key={line.id}>
              <span className="mono">{String(index + 1).padStart(2, '0')}</span>
              {t.ecosystem.lines[line.id]?.name ?? line.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
