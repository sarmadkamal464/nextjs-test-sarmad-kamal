import React, {ReactNode} from 'react'

export interface IIntro {
  children: ReactNode
}

export const Intro = ({children}: IIntro) => {
  return (
    <p className={'pb-12 text-xl font-medium'}>
      {children}
    </p>
  )
}
