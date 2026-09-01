import { useEffect, useId, useRef, type ChangeEvent } from 'react'
import { useLocale } from '../i18n/useLocale'
import { LOCALES, LOCALE_LABELS, type Locale } from '../i18n'
import { getActiveSectionId, navigateToSection } from '../navigation/scroll'

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale()
  const selectId = useId()
  const lastGoodScrollY = useRef(0)
  const suppressTracking = useRef(false)

  // The header's select sits inside a `position: sticky` bar that is always
  // in the viewport, yet focusing it (mouse click or Tab) still triggers a
  // browser-native focus-scroll — a jump the user should never see, since the
  // control never left view. Track the last real user scroll position and
  // snap straight back if a focus event moved the page out from under it.
  useEffect(() => {
    lastGoodScrollY.current = window.scrollY
    const onScroll = () => {
      if (!suppressTracking.current) lastGoodScrollY.current = window.scrollY
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleFocus = () => {
    const before = lastGoodScrollY.current
    if (Math.abs(window.scrollY - before) > 1) {
      suppressTracking.current = true
      window.scrollTo({ top: before, behavior: 'auto' })
      requestAnimationFrame(() => {
        suppressTracking.current = false
      })
    }
  }

  // A locale swap can change text height above the fold (German especially),
  // which silently drifts window.scrollY. Re-anchor by logical section id —
  // not the stale raw scrollY — once the translated layout has committed.
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value as Locale
    const sectionId = getActiveSectionId()
    setLocale(nextLocale)

    if (sectionId && sectionId !== 'top') {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          navigateToSection(sectionId, { instant: true })
        })
      })
    }
  }

  return (
    <div className="language-switcher">
      <label htmlFor={selectId} className="visually-hidden">
        Idioma
      </label>
      <select id={selectId} value={locale} onChange={handleChange} onFocus={handleFocus}>
        {LOCALES.map((code) => (
          <option key={code} value={code}>
            {LOCALE_LABELS[code]}
          </option>
        ))}
      </select>
    </div>
  )
}
