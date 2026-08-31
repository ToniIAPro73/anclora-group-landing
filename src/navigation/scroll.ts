import { SECTION_IDS, type SectionId } from './sections'

const HEADER_HEIGHT_FALLBACK = 73

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function getHeaderHeight(): number {
  const header = document.querySelector<HTMLElement>('.site-header')
  if (!header) return HEADER_HEIGHT_FALLBACK

  const measuredHeight = Math.ceil(header.getBoundingClientRect().height)
  return measuredHeight > 0 ? measuredHeight : HEADER_HEIGHT_FALLBACK
}

export function syncHeaderHeight(): number {
  const height = getHeaderHeight()
  document.documentElement.style.setProperty('--sticky-header-height', `${height}px`)
  return height
}

export function navigateToSection(id: SectionId, options: { updateHash?: boolean } = {}): void {
  const target = document.getElementById(id)
  if (!target) return

  const headerHeight = syncHeaderHeight()
  const targetY = id === 'top' ? 0 : window.scrollY + target.getBoundingClientRect().top - headerHeight

  window.scrollTo({
    top: Math.max(0, Math.round(targetY)),
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
  })

  if (options.updateHash) {
    window.history.pushState({}, '', `#${id}`)
  }
}

export function sectionIdFromHash(hash: string): SectionId | null {
  const id = hash.replace(/^#/, '')
  return SECTION_IDS.includes(id as SectionId) ? (id as SectionId) : null
}
