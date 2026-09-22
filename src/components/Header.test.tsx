import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LocaleProvider } from '../i18n/LocaleContext'
import { NavigationProvider } from '../context/Navigation'
import Header from './Header'

function renderHeader() {
  return render(
    <LocaleProvider>
      <NavigationProvider>
        <Header />
      </NavigationProvider>
    </LocaleProvider>,
  )
}

describe('Header', () => {
  it('renders the mobile menu closed by default', () => {
    renderHeader()
    const toggle = screen.getByRole('button', { name: /abrir menú/i })

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: /navegación móvil/i })).not.toBeInTheDocument()
  })

  it('opens the mobile menu on click and updates aria-expanded', async () => {
    const user = userEvent.setup()
    renderHeader()
    const toggle = screen.getByRole('button', { name: /abrir menú/i })

    await user.click(toggle)

    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(toggle).toHaveAttribute('aria-controls', 'mobile-nav')
    expect(document.getElementById('mobile-nav')).toBeInTheDocument()
    expect(document.body).toHaveClass('is-mobile-nav-open')
    expect(screen.getByRole('navigation', { name: /navegación móvil/i })).toBeInTheDocument()
  })

  it('closes the mobile menu on toggle click and returns focus to the toggle button', async () => {
    const user = userEvent.setup()
    renderHeader()
    const toggle = screen.getByRole('button', { name: /abrir menú/i })

    await user.click(toggle)
    await user.click(toggle)

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: /navegación móvil/i })).not.toBeInTheDocument()
    expect(document.body).not.toHaveClass('is-mobile-nav-open')
    expect(toggle).toHaveFocus()
  })

  it('closes the mobile menu on Escape and returns focus to the toggle button', async () => {
    const user = userEvent.setup()
    renderHeader()
    const toggle = screen.getByRole('button', { name: /abrir menú/i })

    await user.click(toggle)
    await user.keyboard('{Escape}')

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveFocus()
  })

  it('closes the mobile menu when a nav link is selected and returns focus to the toggle button', async () => {
    const user = userEvent.setup()
    renderHeader()
    const toggle = screen.getByRole('button', { name: /abrir menú/i })

    await user.click(toggle)
    const mobileNav = screen.getByRole('navigation', { name: /navegación móvil/i })
    await user.click(within(mobileNav).getByRole('link', { name: /ecosistema/i }))

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: /navegación móvil/i })).not.toBeInTheDocument()
    expect(toggle).toHaveFocus()
  })
})
