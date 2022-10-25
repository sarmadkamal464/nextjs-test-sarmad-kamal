import React, {ReactNode, useContext, useState} from 'react'
import {noop} from '@utils'


export interface IFilter {
  locale: IStringFilter
  search: IStringFilter
}

interface IStringFilter {
  set: (value?: string) => void
  value: string
}

interface IFilterContextProvider {
  children: ReactNode
}


export const useFilterContext = () => {
  const context = useContext<IFilter>(FilterContext)

  if (context === undefined) {
    throw new Error('useFilterContext must be used within an FilterContextProvider')
  }

  return context
}


export const FilterContextProvider = ({children}: IFilterContextProvider) => {
  const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined)

  const value: IFilter = {
    locale: {
      set: noop,
      value: 'en'
    },
    search: {
      set: setSearchTerm,
      value: searchTerm || ''
    }
  }


  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  )
}


export const FilterContext = (() => {
  const defaultValue: IFilter = {
    locale: {
      set: noop,
      value: 'en'
    },
    search: {
      set: noop,
      value: ''
    }
  }


  return React.createContext<IFilter>(defaultValue)
})()