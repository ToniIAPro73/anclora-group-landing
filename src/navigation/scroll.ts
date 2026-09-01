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

export function navigateToSection(id: SectionId, options: { updateHash?: boolean; instant?: boolean } = {}): void {
  const target = document.getElementById(id)
  if (!target) return

  const headerHeight = syncHeaderHeight()
  const targetY = id === 'top' ? 0 : window.scrollY + target.getBoundingClientRect().top - headerHeight

  window.scrollTo({
    top: Math.max(0, Math.round(targetY)),
    behavior: options.instant || prefersReducedMotion() ? 'auto' : 'smooth',
  })

  if (options.updateHash) {
    window.history.pushState({}, '', `#${id}`)
  }
}

export function sectionIdFromHash(hash: string): SectionId | null {
  const id = hash.replace(/^#/, '')
  return SECTION_IDS.includes(id as SectionId) ? (id as SectionId) : null
}

/**
 * Section currently aligned under the sticky header, using the same probe
 * line as useActiveSectionIndex. Used to re-anchor scroll position by logical
 * section (not raw scrollY) after content height changes, e.g. a locale swap.
 */
export function getActiveSectionId(): SectionId | null {
  const headerHeight = getHeaderHeight()
  const probeY = headerHeight + (window.innerHeight - headerHeight) * 0.4
  let activeId: SectionId | null = null

  for (const id of SECTION_IDS) {
    const element = document.getElementById(id)
    if (!element) continue
    if (element.getBoundingClientRect().top <= probeY) activeId = id
  }

  return activeId
}
