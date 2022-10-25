import React, {ReactNode} from 'react'
import {A} from '../typography/Link'

export interface ICardProps {
  children: ReactNode
  showHoverEffect?: boolean
  showDivider?: boolean
  href?: string
}

export const Card = ({children, href, showDivider, showHoverEffect = false}: ICardProps) => {

  const divider = showDivider ? ' divide-y divide-gray-50' : ''
  const hover = showHoverEffect || href ? 'hover' : ''

  return (
    <div className={`card flex flex-col justify-between bg-white overflow-hidden rounded border border-gray-200 relative transition ${divider} ${hover}`}>
      {href
        ? <>
          <span className={'no-divider'}><A href={href} fullSize>{}</A></span>
          {children}
        </>
        : children}

      <style jsx>{`
        .card {
          box-shadow: 0 1px 5px rgb(50 50 93 / 16%);
        }

        .no-divider > :global(a), .no-divider > :global(a):hover {
          border-bottom: 0 transparent !important;
        }

        .hover:hover {
          box-shadow: 0 2px 10px rgb(50 50 93 / 25%);
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}
