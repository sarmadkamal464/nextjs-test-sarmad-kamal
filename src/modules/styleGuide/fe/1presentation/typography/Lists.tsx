import React, {ReactNode} from 'react'


export const UL = ({children}: { children: ReactNode }) => {
  return (
    <ul className="overflow-hidden list-outside list-disc marker:text-gray-400 pl-6">
      {children}
    </ul>
  )
}
export const OL = ({children}: { children: ReactNode }) => {
  return (
    <ol
      className="border border-gray-300 overflow-hidden rounded-md divide-y divide-gray-300 my-8 list-inside list-decimal marker:text-gray-400">
      {children}
    </ol>
  )
}

export const LI = ({children}: { children: ReactNode }) => {
  return (
    <li className="pr-4 py-1">
      {children}
    </li>
  )
}
