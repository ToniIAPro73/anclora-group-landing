import { describe, expect, it } from 'vitest'
import { products } from './products'
import { ecosystemLines } from './ecosystem'

// Regression guard for the editorial-branch integration: keeps the three
// products, the paused state, and the ecosystem-line membership from
// silently drifting apart across future edits.
describe('editorial branch (Content & AI)', () => {
  const line = ecosystemLines.find((item) => item.id === 'publishing-digital-knowledge')

  it('registers the three editorial products under the same line', () => {
    const editorial = products.filter((p) => p.lineId === 'publishing-digital-knowledge')
    const ids = editorial.map((p) => p.id).sort()
    expect(ids).toEqual(['anclora-content-generator-ai', 'anclora-insights', 'anclora-talent'])
  })

  it('lists the three fixed brand names on the ecosystem line (never translated)', () => {
    expect(line?.products).toEqual(['Anclora Insights ADN', 'Anclora Content Generator AI', 'Anclora Talent'])
  })

  it('shows Anclora Talent as paused, with its URL resolved but not exposed as active', () => {
    const talent = products.find((p) => p.id === 'anclora-talent')
    expect(talent?.status).toBe('en pausa')
    expect(talent?.name).toBe('Anclora Talent')
    expect(typeof talent?.productUrl).toBe('string')
    expect(talent?.productUrl?.startsWith('http')).toBe(true)
  })

  it('keeps Content Generator AI and Insights ADN active (not paused)', () => {
    const contentGen = products.find((p) => p.id === 'anclora-content-generator-ai')
    const insights = products.find((p) => p.id === 'anclora-insights')
    expect(contentGen?.status).toBe('ecosistema interno')
    expect(insights?.status).toBe('ecosistema interno')
  })

  it('never mislabels Insights ADN as software-only (imprint framing, not just a tool)', () => {
    const insights = products.find((p) => p.id === 'anclora-insights')
    expect(insights?.name).toBe('Anclora Insights ADN')
    expect(insights?.description.toLowerCase()).toContain('sello editorial')
  })

  it('keeps FileStudio out of the editorial branch (canonical classification preserved)', () => {
    const filestudio = products.find((p) => p.id === 'anclora-filestudio')
    expect(filestudio).toBeUndefined() // not present in the landing catalog at all today
  })
})
