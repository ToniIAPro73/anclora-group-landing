import { createContext } from 'react'
import type { Dictionary, Locale } from './index'

export interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dictionary
}

export const LocaleContext = createContext<LocaleContextValue | undefined>(undefined)
