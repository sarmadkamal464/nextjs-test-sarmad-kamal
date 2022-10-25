import Link from 'next/link'
import {useRouter} from 'next/router'
import React from 'react'


export interface IHeaderLink {
  name: string | JSX.Element
  icon?: JSX.Element
  href: string
  onClick?: () => void
  current?: boolean
}

export const HeaderLink = ({name, icon, href, onClick, current = false}: IHeaderLink) => {
  const {pathname} = useRouter()
  const isActive = pathname === href || current

  return (
    <Link href={href}>
      <a onClick={onClick} className={`group border-b-2 text-sm font-medium px-1 pt-1 inline-flex items-center
       transition-colors duration-300 ${
        isActive
          ? ' border-cPrimary-default text-gray-900 '
          : ' border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 '
      }`}>

        {icon && (
          <span aria-hidden="true" className={`mr-3 flex-shrink-0 h-6 w-6 transition-colors duration-300 ${isActive
            ? 'text-cPrimary-default'
            : 'text-gray-400 group-hover:text-gray-600'
          }`}>
            {icon}
          </span>
        )}

        {name}
      </a>
    </Link>
  )
}
