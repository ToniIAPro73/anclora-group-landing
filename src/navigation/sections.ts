export const SECTION_REGISTRY = [
  { id: 'top', navKey: null },
  { id: 'ecosystem', navKey: 'ecosystem' },
  { id: 'products', navKey: 'products' },
  { id: 'method', navKey: 'method' },
  { id: 'founder', navKey: 'founder' },
  { id: 'principles', navKey: null },
  { id: 'contact', navKey: 'contact' },
] as const

export type SectionId = (typeof SECTION_REGISTRY)[number]['id']
export type HeaderSection = Extract<(typeof SECTION_REGISTRY)[number], { navKey: string }>
export type HeaderNavKey = HeaderSection['navKey']

export const SECTION_IDS = SECTION_REGISTRY.map((section) => section.id)
export const HEADER_SECTIONS = SECTION_REGISTRY.filter((section): section is HeaderSection => section.navKey !== null)

export function getSectionHref(id: SectionId): `#${SectionId}` {
  return `#${id}`
}

export function getAdjacentSectionIds(activeId: SectionId): { previous: SectionId | null; next: SectionId | null } {
  const index = SECTION_IDS.indexOf(activeId)
  if (index === -1) return { previous: null, next: null }

  return {
    previous: index > 0 ? SECTION_IDS[index - 1] : null,
    next: index < SECTION_IDS.length - 1 ? SECTION_IDS[index + 1] : null,
  }
}

