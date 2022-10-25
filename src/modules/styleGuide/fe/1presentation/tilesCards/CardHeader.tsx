import React, {ReactNode} from 'react'

interface ICardHeaderProps {
  children: ReactNode
  className?: string
}

export const CardHeader = ({children, className}: ICardHeaderProps) => {
  return (
    <div className={'px-4 py-5 sm:px-6 ' + className}>
      {children}
    </div>
  )
}
