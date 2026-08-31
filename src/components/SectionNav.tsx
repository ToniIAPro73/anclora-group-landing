import { useCallback } from 'react'
import { useLocale } from '../i18n/useLocale'
import { useActiveSectionIndex } from '../hooks/useActiveSectionIndex'

// Orden real de las secciones tal como se montan en App.tsx.
const SECTION_IDS = [
  'top',
  'evidence',
  'ecosystem',
  'products',
  'method',
  'founder',
  'principles',
  'contact',
]

export default function SectionNav() {
  const { t } = useLocale()
  const activeIndex = useActiveSectionIndex(SECTION_IDS)

  const isFirst = activeIndex === 0
  const isLast = activeIndex === SECTION_IDS.length - 1

  const goToIndex = useCallback((index: number) => {
    const target = document.getElementById(SECTION_IDS[index])
    if (!target) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' })
  }, [])

  return (
    <div className="section-nav">
      {!isFirst && (
        <button
          type="button"
          className="section-nav__btn"
          onClick={() => goToIndex(activeIndex - 1)}
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
      {!isLast && (
        <button
          type="button"
          className="section-nav__btn"
          onClick={() => goToIndex(activeIndex + 1)}
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
