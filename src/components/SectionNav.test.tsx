import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LocaleProvider } from '../i18n/LocaleContext'
import SectionNav from './SectionNav'

let activeSectionIndex = 0

vi.mock('../hooks/useActiveSectionIndex', () => ({
  useActiveSectionIndex: () => activeSectionIndex,
}))

function renderSectionNav(index: number) {
  activeSectionIndex = index
  return render(
    <LocaleProvider>
      <SectionNav />
    </LocaleProvider>,
  )
}

describe('SectionNav', () => {
  it('shows only DOWN on hero and sends it to ecosystem', async () => {
    const user = userEvent.setup()
    document.body.innerHTML = '<section id="ecosystem"></section>'
    const scrollIntoView = vi.fn()
    ;(document.getElementById('ecosystem') as HTMLElement).scrollIntoView = scrollIntoView
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: vi.fn().mockReturnValue({ matches: false }),
    })
    vi.spyOn(window.history, 'pushState').mockImplementation(() => undefined)

    renderSectionNav(0)

    expect(screen.queryByRole('button', { name: /subir/i })).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /bajar/i }))
    expect(scrollIntoView).toHaveBeenCalledWith({ block: 'start', behavior: 'smooth' })
    expect(window.history.pushState).toHaveBeenCalledWith({}, '', '#ecosystem')
  })

  it('shows UP and DOWN on ecosystem, with UP returning to hero', async () => {
    const user = userEvent.setup()
    document.body.innerHTML = '<section id="top"></section><section id="products"></section>'
    const scrollIntoView = vi.fn()
    ;(document.getElementById('top') as HTMLElement).scrollIntoView = scrollIntoView
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: vi.fn().mockReturnValue({ matches: false }),
    })
    vi.spyOn(window.history, 'pushState').mockImplementation(() => undefined)

    renderSectionNav(1)

    expect(screen.getByRole('button', { name: /bajar/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /subir/i }))
    expect(scrollIntoView).toHaveBeenCalledWith({ block: 'start', behavior: 'smooth' })
    expect(window.history.pushState).toHaveBeenCalledWith({}, '', '#top')
  })

  it('shows only UP on contact and sends it to founder', async () => {
    const user = userEvent.setup()
    document.body.innerHTML = '<section id="founder"></section>'
    const scrollIntoView = vi.fn()
    ;(document.getElementById('founder') as HTMLElement).scrollIntoView = scrollIntoView
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: vi.fn().mockReturnValue({ matches: false }),
    })
    vi.spyOn(window.history, 'pushState').mockImplementation(() => undefined)

    renderSectionNav(5)

    expect(screen.queryByRole('button', { name: /bajar/i })).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /subir/i }))
    expect(scrollIntoView).toHaveBeenCalledWith({ block: 'start', behavior: 'smooth' })
    expect(window.history.pushState).toHaveBeenCalledWith({}, '', '#founder')
  })
})

