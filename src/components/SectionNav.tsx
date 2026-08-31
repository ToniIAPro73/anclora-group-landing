import { useLocale } from '../i18n/useLocale'
import { useActiveSectionIndex } from '../hooks/useActiveSectionIndex'
import { SECTION_IDS, getAdjacentSectionIds } from '../navigation/sections'
import { scrollToSection } from '../navigation/scroll'

export default function SectionNav() {
  const { t } = useLocale()
  const activeIndex = useActiveSectionIndex(SECTION_IDS)
  const activeId = SECTION_IDS[activeIndex]
  const adjacentSections = getAdjacentSectionIds(activeId)
  const previousSection = adjacentSections.previous
  const nextSection = adjacentSections.next

  return (
    <div className="section-nav">
      {previousSection && (
        <button
          type="button"
          className="section-nav__btn"
          onClick={() => scrollToSection(previousSection, { updateHash: true })}
          aria-label={t.sectionNav.up}
        >
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
            <path
              d="M4 15l8-8 8 8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
      {nextSection && (
        <button
          type="button"
          className="section-nav__btn"
          onClick={() => scrollToSection(nextSection, { updateHash: true })}
          aria-label={t.sectionNav.down}
        >
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
            <path
              d="M4 9l8 8 8-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  )
}
