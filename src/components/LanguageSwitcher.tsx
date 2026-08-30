import { useId } from 'react'
import { useLocale } from '../i18n/useLocale'
import { LOCALES, LOCALE_LABELS, type Locale } from '../i18n'

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale()
  const selectId = useId()

  return (
    <div className="language-switcher">
      <label htmlFor={selectId} className="visually-hidden">
        Idioma
      </label>
      <select
        id={selectId}
        value={locale}
        onChange={(event) => setLocale(event.target.value as Locale)}
      >
        {LOCALES.map((code) => (
          <option key={code} value={code}>
            {LOCALE_LABELS[code]}
          </option>
        ))}
      </select>
    </div>
  )
}
