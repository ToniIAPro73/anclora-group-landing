import { describe, expect, it } from 'vitest'
import { ecosystemLines } from './ecosystem'
import { products } from './products'

const secureFlowIds = ['filestudio', 'purgedoc', 'tableextract', 'cleansheet']

describe('SecureFlow ecosystem contract', () => {
  it('registers one line with exactly the four canonical products', () => {
    const lines = ecosystemLines.filter((line) => line.id === 'secureflow')
    expect(lines).toHaveLength(1)
    expect(lines[0].name).toBe('SecureFlow')
    expect(lines[0].products).toEqual([
      'Anclora FileStudio',
      'Anclora PurgeDoc',
      'Anclora TableExtract',
      'Anclora CleanSheet',
    ])
    expect(products.filter((product) => product.lineId === 'secureflow').map((product) => product.id).sort())
      .toEqual(secureFlowIds.sort())
  })

  it('keeps SecureFlow product IDs unique and uses canonical local logos', () => {
    const secureFlowProducts = products.filter((product) => product.lineId === 'secureflow')
    expect(new Set(products.map((product) => product.id)).size).toBe(products.length)
    expect(secureFlowProducts).toHaveLength(4)
    for (const product of secureFlowProducts) {
      expect(product.logoSrc).toMatch(/^\/assets\/logo\/anclora-/)
    }
  })

  it('uses the canonical essential descriptions', () => {
    const descriptions = Object.fromEntries(
      products.filter((product) => product.lineId === 'secureflow').map((product) => [product.id, product.description]),
    )
    expect(descriptions).toEqual({
      filestudio: 'Conversión, tratamiento y preparación privada de archivos.',
      purgedoc: 'Detección y eliminación verificable de información sensible.',
      tableextract: 'Extracción de tablas y datos estructurados desde documentos complejos.',
      cleansheet: 'Limpieza, transformación e integración de datos en sistemas de negocio.',
    })
  })
})
