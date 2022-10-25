import React, {ReactNode} from 'react'

export interface IMarginBox {
  children: ReactNode
  tailwindMarginClass?: string
  className?: string
}

export const MarginBox = ({children, className, tailwindMarginClass = 'm-2'}: IMarginBox) => {
  const rem = +(tailwindMarginClass.replace('m-', '')) / 4

  return (
    <div className={`marginBox ${className ? className : ''}`}>
      {children}

      <style jsx>{`
        .marginBox {
          margin: -${rem}rem;
        }

        .marginBox > :global(*) {
          margin: ${rem}rem;
        }
      `}</style>
    </div>
  )
}
