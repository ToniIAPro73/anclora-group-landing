import { beforeEach, describe, expect, it, vi } from 'vitest'
import { navigateToSection, sectionIdFromHash } from './scroll'

describe('navigateToSection', () => {
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
    vi.spyOn(target, 'getBoundingClientRect').mockReturnValue({ top: 420 } as DOMRect)
    const scrollTo = vi.spyOn(window, 'scrollTo').mockImplementation(() => undefined)

    navigateToSection('ecosystem', { updateHash: true })

    expect(scrollTo).toHaveBeenCalledWith({ top: 347, behavior: 'smooth' })
    expect(window.history.pushState).toHaveBeenCalledWith({}, '', '#ecosystem')
  })

  it('respects reduced motion', () => {
    vi.mocked(window.matchMedia).mockReturnValue({ matches: true } as MediaQueryList)
    const target = document.getElementById('ecosystem') as HTMLElement
    vi.spyOn(target, 'getBoundingClientRect').mockReturnValue({ top: 420 } as DOMRect)
    const scrollTo = vi.spyOn(window, 'scrollTo').mockImplementation(() => undefined)

    navigateToSection('ecosystem')

    expect(scrollTo).toHaveBeenCalledWith({ top: 347, behavior: 'auto' })
  })
})

describe('sectionIdFromHash', () => {
  it('accepts registered hashes only', () => {
    expect(sectionIdFromHash('#products')).toBe('products')
    expect(sectionIdFromHash('#evidence')).toBeNull()
  })
})
