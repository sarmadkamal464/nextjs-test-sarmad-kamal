import Link from 'next/link'
import {useRouter} from 'next/router'
import React from 'react'
// @ts-ignore
import ReactCountryFlag from 'react-country-flag'
import {MarginBox} from '../layout/MarginBox'

export const LocaleSwitcher = () => {
  const {locales, pathname} = useRouter()


  return (
    <MarginBox tailwindMarginClass={'m-1'}>
      {locales?.map((locale, key) => (
        <Link href={pathname} locale={locale} key={key}>
          <a>
            <ReactCountryFlag countryCode={mapFlagLocales(locale)} svg style={{
              fontSize: '1.6em',
              lineHeight: '1.6em'
            }} />
          </a>
        </Link>
      ))}
    </MarginBox>
  )
}

const mapFlagLocales = (locale: string) => {
  if (locale === 'en') {
    return 'US'
  }
  return locale.toUpperCase()
}
