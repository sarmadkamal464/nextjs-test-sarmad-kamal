import {useRouter} from 'next/router'
import React from 'react'


export const LocaleSelector = () => {
  const {push, pathname, locale, locales} = useRouter()

  const handleLocaleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      push(pathname, pathname, {locale: e.target.value})
    },
    [pathname, push]
  )

  return (
    <select value={locale} onChange={handleLocaleChange}>
      {locales?.map(locale => (
        <option key={locale} value={locale}>
          {locale}
        </option>
      ))}
    </select>
  )
}
