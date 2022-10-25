import {ReactNode} from 'react'

interface IProps {
  children: ReactNode
}

export const Container = ({children}: IProps) => (
  <div className="max-w-4xl mx-auto px-6 lg:max-w-5xl lg:px-8 w-full">
    {children}
  </div>
)
