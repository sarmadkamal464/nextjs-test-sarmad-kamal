import {SearchIcon} from '@heroicons/react/solid'
import React from 'react'

export interface ISearchInputProps {
  label: string
  onUpdate: (term: string) => void
}


export const SearchInput = ({onUpdate, label}: ISearchInputProps) => {
  const update = (e: React.FormEvent<HTMLInputElement>) => onUpdate(e.currentTarget.value)


  return (
    <>
      <label htmlFor="search" className="sr-only">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input id="search" name="search" onChange={update} spellCheck={false} placeholder={label} type="search"
               className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500  sm:text-sm
               focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-cFocus focus:border-cFocus" />
      </div>
    </>
  )
}
