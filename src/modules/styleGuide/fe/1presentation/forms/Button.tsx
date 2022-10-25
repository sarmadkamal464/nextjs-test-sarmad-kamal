import React, {ReactNode} from 'react'
import {Spinner} from '../icons/Spinner'

export interface IButton {
  children: ReactNode
  isLoading?: boolean
  iconStart?: ReactNode
  iconEnd?: ReactNode
  type?: 'submit' | 'button' | 'reset' | undefined
  disabled?: boolean
  onClick?: () => void
}


export const Button = (
  {
    children,
    onClick,
    iconStart,
    iconEnd,
    type = 'button',
    isLoading = false,
    disabled = false
  }: IButton) => {
  const click = () => {
    if (onClick) {
      onClick()
    }
  }


  return (
    <button type={type} onClick={click} disabled={disabled || isLoading} className={`
            inline-flex items-center justify-center px-7 py-2 mx-1 w-full md:w-auto 
            bg-cPrimary-default border border-transparent rounded-md shadow-sm
            text-base text-white font-medium text-center align-text-bottom
            disabled:bg-cDisabled-background disabled:cursor-not-allowed
            hover:bg-cPrimary-dark 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cFocus
            transition-colors duration-300
    `}>
      {
        (iconStart || isLoading) && (
          <span className="mr-3 h-5 w-5 align-text-bottom" aria-hidden="true">
            {iconStart || <Spinner />}
          </span>
        )
      }
      {children}
      {iconEnd && <span className="ml-3 h-5 w-5 align-text-bottom" aria-hidden="true">{iconEnd}</span>}
    </button>
  )
}

