import { useCallback, useEffect, useMemo, useRef, useState, type MouseEvent } from 'react'
import { useLocale } from '../i18n/useLocale'
import { useNavigation } from '../context/useNavigation'
import LanguageSwitcher from './LanguageSwitcher'
import lockupHorizontalDark from '../assets/logo/anclora-group-lockup-horizontal-sobre-oscuro-64.webp'
import { HEADER_SECTIONS, SECTION_IDS, getSectionHref, type HeaderNavKey } from '../navigation/sections'
import { navigateToSection, sectionIdFromHash, syncHeaderHeight } from '../navigation/scroll'
import { useActiveSectionIndex } from '../hooks/useActiveSectionIndex'

export default function Header() {
  const { t } = useLocale()
  const { path, navigate } = useNavigation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuToggleRef = useRef<HTMLButtonElement>(null)
  const activeSectionIndex = useActiveSectionIndex(SECTION_IDS)
  const activeSectionId = SECTION_IDS[activeSectionIndex]

  const navItems = useMemo(
    () => HEADER_SECTIONS.map((section) => ({ id: section.id, href: getSectionHref(section.id), key: section.navKey })),
    [],
  )

  const closeMenu = useCallback((restoreFocus = true) => {
    setIsMenuOpen(false)
    if (restoreFocus) {
      menuToggleRef.current?.focus()
    }
  }, [])

  // Controlamos todas las anclas: el menú móvil bloquea el scroll del body y la
  // navegación nativa puede dispararse antes de liberar ese bloqueo.
  const handleAnchorClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, hash: string) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const sectionId = sectionIdFromHash(hash)
      if (!sectionId) return
      event.preventDefault()
      closeMenu(false)

      if (path !== '/') {
        navigate('/')
      }

      requestAnimationFrame(() => navigateToSection(sectionId, { updateHash: true }))
    },
    [closeMenu, navigate, path],
  )

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu()
    } else {
      setIsMenuOpen(true)
    }
  }

  useEffect(() => {
    const sync = () => syncHeaderHeight()
    const header = document.querySelector<HTMLElement>('.site-header')
    const resizeObserver = header && 'ResizeObserver' in window ? new ResizeObserver(sync) : null

    sync()
    if (header) {
      resizeObserver?.observe(header)
    }
    window.addEventListener('resize', sync)

    return () => {
      resizeObserver?.disconnect()
      window.removeEventListener('resize', sync)
    }
  }, [])

  useEffect(() => {
    if (path !== '/') return

    const correctHashPosition = () => {
      const sectionId = sectionIdFromHash(window.location.hash)
      if (sectionId) {
        requestAnimationFrame(() => navigateToSection(sectionId))
      }
    }

    correctHashPosition()
    window.addEventListener('popstate', correctHashPosition)
    return () => window.removeEventListener('popstate', correctHashPosition)
  }, [path])

  useEffect(() => {
    if (!isMenuOpen) return
    document.body.classList.add('is-mobile-nav-open')
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('is-mobile-nav-open')
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isMenuOpen, closeMenu])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#top" className="site-header__logo" onClick={(event) => handleAnchorClick(event, '#top')}>
          <img src={lockupHorizontalDark} alt="Anclora Group" />
        </a>

        <nav className="site-header__nav" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className={activeSectionId === item.id ? 'is-active' : undefined}
              aria-current={activeSectionId === item.id ? 'page' : undefined}
              onClick={(event) => handleAnchorClick(event, item.href)}
            >
              {t.nav[item.key as HeaderNavKey]}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="btn btn-primary site-header__cta"
            onClick={(event) => handleAnchorClick(event, '#contact')}
          >
            {t.nav.contactCta}
          </a>
          <button
            ref={menuToggleRef}
            type="button"
            className="site-header__menu-toggle"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={toggleMenu}
          >
            <span aria-hidden="true">{isMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav id="mobile-nav" className="site-header__mobile-nav container" aria-label="Navegación móvil">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              aria-current={activeSectionId === item.id ? 'page' : undefined}
              onClick={(event) => {
                handleAnchorClick(event, item.href)
                closeMenu()
              }}
            >
              {t.nav[item.key as HeaderNavKey]}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
