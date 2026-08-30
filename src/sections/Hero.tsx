import { useCallback, useRef } from 'react'
import { useLocale } from '../i18n/useLocale'
import { ecosystemLines } from '../data/ecosystem'
import SystemRing from '../components/SystemRing'
import SonarField from '../components/SonarField'
import AnchorMark from '../components/AnchorMark'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

/**
 * Hero "portal": el SystemRing deja de ser una ilustración lateral y pasa a ser
 * el campo gravitatorio de la sección — centrado, sobredimensionado, con el
 * titular flotando en el vacío interior del anillo. El puntero deriva el
 * conjunto unos píxeles (paralaje en capas, máx. ~10px) y el sonar pulsa desde
 * el centro. Impacto moderado: un solo momento de movimiento cuidado.
 */
export default function Hero() {
  const { t } = useLocale()
  const revealRef = useRevealOnScroll<HTMLDivElement>()
  const sectionRef = useRef<HTMLElement | null>(null)
  const pointerRef = useRef({ x: 0, y: 0 })
  const lineLabels = ecosystemLines.map((line) => t.ecosystem.lines[line.id]?.name ?? line.name)

  const handlePointerMove = useCallback((event: React.PointerEvent<HTMLElement>) => {
    const section = sectionRef.current
    if (!section || event.pointerType === 'touch') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const rect = section.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
    const y = ((event.clientY - rect.top) / rect.height) * 2 - 1
    pointerRef.current = { x, y }
    section.style.setProperty('--px', (x * 10).toFixed(2))
    section.style.setProperty('--py', (y * 10).toFixed(2))
  }, [])

  const handlePointerLeave = useCallback(() => {
    const section = sectionRef.current
    if (!section) return
    pointerRef.current = { x: 0, y: 0 }
    section.style.setProperty('--px', '0')
    section.style.setProperty('--py', '0')
  }, [])

  return (
    <section
      id="top"
      ref={sectionRef}
      className="hero"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="hero__field" aria-hidden="true" />
      <div className="hero__anchor-mark" aria-hidden="true">
        <AnchorMark variant="field" />
      </div>
      <SonarField pointerRef={pointerRef} className="hero__sonar" />
      <div className="hero__ring-layer" aria-hidden="true">
        <SystemRing size={1080} labels={lineLabels} activeIndex={0} ariaLabel={t.hero.instrumentCaption} />
      </div>

      <div className="container hero__grid">
        <div ref={revealRef} className="hero__copy is-reveal-group">
          <p className="hero__eyebrow mono">{t.hero.eyebrow}</p>
          <h1>{t.hero.title}</h1>
          <p className="hero__tagline">{t.hero.tagline}</p>
          <p className="hero__subtitle">{t.hero.subtitle}</p>
          <div className="hero__actions">
            <a href="#ecosystem" className="btn btn-primary">
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
