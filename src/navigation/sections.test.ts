import { describe, expect, it } from 'vitest'
import { HEADER_SECTIONS, SECTION_IDS, getAdjacentSectionIds, getSectionHref } from './sections'

describe('section navigation registry', () => {
  it('keeps one ordered section registry for header and side navigation', () => {
    expect(SECTION_IDS).toEqual(['top', 'ecosystem', 'products', 'method', 'founder', 'principles', 'contact'])
    expect(HEADER_SECTIONS.map((section) => section.id)).toEqual([
      'ecosystem',
      'products',
      'method',
      'founder',
      'contact',
    ])
  })

  it('maps hero down to ecosystem and ecosystem up to hero', () => {
    expect(getAdjacentSectionIds('top')).toEqual({ previous: null, next: 'ecosystem' })
    expect(getAdjacentSectionIds('ecosystem')).toEqual({ previous: 'top', next: 'products' })
  })

  it('maps contact up to principles and exposes no contact down target', () => {
    expect(getAdjacentSectionIds('contact')).toEqual({ previous: 'principles', next: null })
  })

  it('maps founder up to method and down to principles', () => {
    expect(getAdjacentSectionIds('founder')).toEqual({ previous: 'method', next: 'principles' })
  })

  it('maps principles up to founder and down to contact', () => {
    expect(getAdjacentSectionIds('principles')).toEqual({ previous: 'founder', next: 'contact' })
  })

  it('uses stable hash targets for every header section', () => {
    expect(HEADER_SECTIONS.map((section) => getSectionHref(section.id))).toEqual([
      '#ecosystem',
      '#products',
      '#method',
      '#founder',
      '#contact',
    ])
  })
})

