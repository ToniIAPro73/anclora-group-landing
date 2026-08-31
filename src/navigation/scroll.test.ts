import { beforeEach, describe, expect, it, vi } from 'vitest'
import { scrollToSection, sectionIdFromHash } from './scroll'

describe('scrollToSection', () => {
  beforeEach(() => {
    document.body.innerHTML = '<header class="site-header"></header><section id="ecosystem"></section>'
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: vi.fn().mockReturnValue({ matches: false }),
    })
    vi.spyOn(window.history, 'pushState').mockImplementation(() => undefined)
  })

  it('scrolls with the shared helper and updates hash', () => {
    const target = document.getElementById('ecosystem') as HTMLElement
    const scrollIntoView = vi.fn()
    target.scrollIntoView = scrollIntoView

    scrollToSection('ecosystem', { updateHash: true })

    expect(scrollIntoView).toHaveBeenCalledWith({ block: 'start', behavior: 'smooth' })
    expect(window.history.pushState).toHaveBeenCalledWith({}, '', '#ecosystem')
  })

  it('respects reduced motion', () => {
    vi.mocked(window.matchMedia).mockReturnValue({ matches: true } as MediaQueryList)
    const target = document.getElementById('ecosystem') as HTMLElement
    const scrollIntoView = vi.fn()
    target.scrollIntoView = scrollIntoView

    scrollToSection('ecosystem')

    expect(scrollIntoView).toHaveBeenCalledWith({ block: 'start', behavior: 'auto' })
  })
})

describe('sectionIdFromHash', () => {
  it('accepts registered hashes only', () => {
    expect(sectionIdFromHash('#products')).toBe('products')
    expect(sectionIdFromHash('#evidence')).toBeNull()
  })
})

