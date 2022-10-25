import React, {ReactNode} from 'react'

export interface IHeadlineProps {
  children: ReactNode
  level: 1 | 2 | 3 | 4
  spacer?: 'none' | 'bottom'
  align?: 'center' | 'left' | 'right'
  variant?: 'h1' | 'h2' | 'h3' | 'h4'
  textColorClass?: string
}

export const Headline = ({children, level, spacer = 'bottom', align = 'left', variant, textColorClass}: IHeadlineProps) => {

  const h1 = `text-5xl font-light ${spacer === 'bottom' ? 'mb-8 pt-8' : ''}`
  const h2 = `text-4xl ${spacer === 'bottom' ? 'mb-6 pt-6' : ''}`
  const h3 = `text-2xl ${spacer === 'bottom' ? 'mb-3 pt-2' : ''}`
  const h4 = `text-lg font-medium'`

  let hClass = ''
  if (variant === 'h1' || !variant && level === 1) {
    hClass = h1
  }
  if (variant === 'h2' || !variant && level === 2) {
    hClass = h2
  }
  if (variant === 'h3' || !variant && level === 3) {
    hClass = h3
  }
  if (variant === 'h4' || !variant && level === 4) {
    hClass = h4
  }

  const classes = `${hClass} leading-tight ${align === 'center' ? 'text-center' : ''} ${align === 'right' ? 'text-right' : ''} 
  ${textColorClass ? textColorClass : ''}`


  switch (level) {
    case 1:
      return (<h1 className={classes}>{children}</h1>)
    case 2:
      return (<h2 className={classes}>{children}</h2>)
    case 3:
      return (<h3 className={classes}>{children}</h3>)
    case 4:
      return (<h4 className={classes}>{children}</h4>)
  }
}

