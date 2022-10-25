import React, {ReactNode} from 'react'

interface IProps {
  children: ReactNode
}


export const Label = ({children}: IProps) => (
  <label className="px-1 block text-sm font-medium text-gray-500 cursor-pointer">
    {children}
  </label>
)

