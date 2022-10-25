import React, {ReactNode} from 'react'

interface ICardFooterProps {
  children: ReactNode
  border?: boolean
}

export const CardFooter = ({children, border = false}: ICardFooterProps) => {
  return (
    <div className={`px-4 py-4 sm:px-6 ${border ? ' border-t' : ''}`}>
      {children}
    </div>
  )
}
