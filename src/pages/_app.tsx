import {NextIntlProvider} from 'next-intl'
import React from 'react'
import '../tailwindBaseStyle.css'
import {FilterContextProvider} from 'src/context/FilterContext'


const MyApp = ({Component, pageProps: {session, messages, now, ...pageProps}}) => {
  return (
    <NextIntlProvider messages={messages} now={new Date(now)} formats={{
      dateTime: {
        short: {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        }
      }
    }}>
      <FilterContextProvider>
        <Component {...pageProps} />
        {/*<ShowSelectedFilter />*/}
      </FilterContextProvider>
    </NextIntlProvider>
  )
}

// const ShowSelectedFilter = () => {
//   const filters = useFilterContext()
//   return <CardJson header={'selectedFilters'} obj={filters} />
// }

export default MyApp
