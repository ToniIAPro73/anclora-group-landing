import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { DEFAULT_LOCALE, dictionaries, type Locale } from './index'
import { LocaleContext, type LocaleContextValue } from './context'

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE)

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, t: dictionaries[locale] }),
    [locale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
