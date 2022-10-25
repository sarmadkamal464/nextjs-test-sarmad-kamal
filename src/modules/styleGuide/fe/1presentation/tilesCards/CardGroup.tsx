import React, {ReactNode} from 'react'

export interface ICardListGroupProps {
  children: ReactNode
  space?: 'collapse' | 'space'
}

export const CardListGroup = ({children, space = 'space'}: ICardListGroupProps) => {
  return (
    <div className={`mb-12 ${space === 'space' ? 'space-y-6' : ''}`}>
      {children}
    </div>
  )
}

export interface ICardGridGroupProps {
  children: ReactNode
}

export const CardGridGroup = ({children}: ICardGridGroupProps) => {
  return (
    <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 mb-12`}>
      {children}
    </div>
  )
}
