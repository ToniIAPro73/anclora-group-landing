import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ProductCard from './ProductCard'
import type { Product } from '../data/products'
import { LocaleProvider } from '../i18n/LocaleContext'

const product: Product = {
  id: 'test-product',
  name: 'Anclora Test',
  lineId: 'fiscal-compliance',
  description: 'Descripción de prueba del producto.',
  tier: 1,
  status: 'en piloto',
}

describe('ProductCard', () => {
  it('renders the product name, description and status', () => {
    render(<LocaleProvider><ProductCard product={product} /></LocaleProvider>)

    expect(screen.getByRole('heading', { name: 'Anclora Test' })).toBeInTheDocument()
    expect(screen.getByText('Descripción de prueba del producto.')).toBeInTheDocument()
    expect(screen.getByText('en piloto')).toBeInTheDocument()
  })

  it('renders a CTA link when ctaLabel is provided', () => {
    render(<LocaleProvider><ProductCard product={product} ctaLabel="Ver producto" /></LocaleProvider>)

    expect(screen.getByRole('link', { name: 'Ver producto' })).toBeInTheDocument()
  })

  it('does not render a CTA link when ctaLabel is omitted', () => {
    render(<LocaleProvider><ProductCard product={product} /></LocaleProvider>)

    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  it('keeps product cards text-only even when catalogue data has a logo', () => {
    render(
      <LocaleProvider>
        <ProductCard product={{ ...product, logoSrc: '/catalogue-logo.png' }} />
      </LocaleProvider>,
    )

    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })

  it('does not render a status when the product has none', () => {
    render(<LocaleProvider><ProductCard product={{ ...product, status: undefined }} /></LocaleProvider>)

    expect(screen.queryByText('en piloto')).not.toBeInTheDocument()
  })
})
