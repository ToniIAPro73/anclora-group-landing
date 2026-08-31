import { useLocale } from '../i18n/useLocale'
import SectionHeader from '../components/SectionHeader'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

export default function Principles() {
  const { t } = useLocale()
  const revealRef = useRevealOnScroll<HTMLDivElement>()

  return (
    <section id="principles" className="section section--surface">
      <div className="container">
        <SectionHeader title={t.principles.title} />
        <div ref={revealRef} className="principles-list is-reveal-group is-reveal-group--stagger">
          {t.principles.items.map((item, index) => (
            <div key={item.title} className="principle">
              <span className="principle__index mono">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
