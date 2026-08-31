import { useLocale } from '../i18n/useLocale'
import SectionHeader from '../components/SectionHeader'
import EcosystemCard from '../components/EcosystemCard'
import { ecosystemLines } from '../data/ecosystem'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

export default function Ecosystem() {
  const { t } = useLocale()
  const revealRef = useRevealOnScroll<HTMLDivElement>()

  return (
    <section className="section">
      <div className="container">
        <SectionHeader title={t.ecosystem.title} text={t.ecosystem.text} />
        <div ref={revealRef} className="ecosystem-rail-list is-reveal-group is-reveal-group--stagger">
          {ecosystemLines.map((line, index) => (
            <EcosystemCard key={line.id} line={line} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
