import React, {ReactNode} from 'react'

export interface IButtonIcon {
  icon: ReactNode
  variant?: 'solid' | 'outline' | 'transparent'
  type?: 'submit' | 'button' | 'reset' | undefined
  disabled?: boolean
  onClick?: () => void
}


export const ButtonIcon = ({icon, onClick, type = 'button', variant = 'outline', disabled = false}: IButtonIcon) => {
  const click = () => {
    if (onClick) {
      onClick()
    }
  }
  let variantClass = `
    text-cPrimary-default border-none
    hover:text-cPrimary-dark 
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cFocus
  `
  if (variant === 'outline') {
    variantClass = `
    text-cPrimary-default border-cPrimary-default 
    hover:text-cPrimary-dark hover:border-cPrimary-dark 
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cFocus
  `
  } else if (variant === 'solid') {
    variantClass = `
    text-white bg-cPrimary-default 
    hover:bg-cPrimary-dark 
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cFocus
  `
  }


  return (
    <span className={'p-1 block'}>
      <button type={type} onClick={click} disabled={disabled} className={`
      p-1 w-full h-full max-w-12 max-h-12 text-9xl border-2 rounded-full shadow-sm transition-colors duration-300
      ${variantClass}
   `}>
      {icon}
    </button>
    </span>
  )
}

