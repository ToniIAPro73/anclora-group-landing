import { SECTION_IDS, type SectionId } from './sections'

const HEADER_OFFSET_FALLBACK = 88
const HEADER_OFFSET_BREATHING_ROOM = 16

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function getHeaderOffset(): number {
  const header = document.querySelector<HTMLElement>('.site-header')
  if (!header) return HEADER_OFFSET_FALLBACK

  return Math.ceil(header.getBoundingClientRect().height + HEADER_OFFSET_BREATHING_ROOM)
}

export function syncHeaderOffset(): number {
  const offset = getHeaderOffset()
  document.documentElement.style.setProperty('--section-scroll-offset', `${offset}px`)
  return offset
}

export function scrollToSection(id: SectionId, options: { updateHash?: boolean } = {}): void {
  const target = document.getElementById(id)
  if (!target) return

  syncHeaderOffset()
  target.scrollIntoView({
    block: 'start',
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

