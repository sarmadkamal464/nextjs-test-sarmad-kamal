import React, {ReactNode} from 'react'

interface ICardBodyProps {
  children: ReactNode
}

export const CardBody = ({children}: ICardBodyProps) => {
  return (
    <div className="flex-grow px-4 py-5 sm:p-6">
      {children}
    </div>
  )
}
