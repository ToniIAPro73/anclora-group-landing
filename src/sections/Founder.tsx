import { useLocale } from '../i18n/useLocale'
import SectionHeader from '../components/SectionHeader'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

export default function Founder() {
  const { t } = useLocale()
  const revealRef = useRevealOnScroll<HTMLDivElement>()
  const signals = t.hero.microcopy.split('·').map((line) => line.trim())

  return (
    <section id="founder" className="section">
      <div className="container">
        <SectionHeader title={t.founder.title} />
        <div ref={revealRef} className="founder-grid is-reveal-group">
          <div className="founder">
            <p className="founder__lead">{t.founder.body}</p>
            <ul className="founder-signals mono">
              {signals.map((line, index) => (
                <li key={line}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <figure className="founder-portrait">
            <img
              src="/professional_headshot_portrait.webp"
              alt={t.founder.portraitAlt}
              width={800}
              height={800}
              loading="lazy"
            />
            <figcaption className="mono">Antonio Ballesteros</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
