import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LocaleProvider } from '../i18n/LocaleContext'
import Evidence from './Evidence'
import Ecosystem from './Ecosystem'

function renderEcosystemArea() {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    value: vi.fn().mockReturnValue({ matches: true }),
  })

  return render(
    <LocaleProvider>
      <Evidence />
      <Ecosystem />
    </LocaleProvider>,
  )
}

describe('Ecosystem canonical target', () => {
  it('places the ecosystem id on the 05/09/01 opening block', () => {
    renderEcosystemArea()

    const ecosystemTargets = document.querySelectorAll('#ecosystem')
    expect(ecosystemTargets).toHaveLength(1)
    expect(ecosystemTargets[0]).toContainElement(screen.getByText(/líneas activas/i))
    expect(ecosystemTargets[0]).not.toContainElement(screen.getByText(/cinco líneas de operación/i))
  })
})

