import React, {ReactNode} from 'react'
import {Headline} from '../typography/Headline'
import {Card} from './Card'
import {CardBody} from './CardBody'
import {CardFooter} from './CardFooter'

export interface ICardProps {
  children: ReactNode
  footer: ReactNode
  title: ReactNode | string
  showHoverEffect?: boolean
  href?: string
  iconRight?: ReactNode
}


export const CardIconHeadlineText = (
  {
    children,
    title,
    footer,
    href,
    iconRight,
    showHoverEffect = false
  }: ICardProps) => {
  return (
    <Card href={href} showHoverEffect={showHoverEffect}>
      <div className="flex-grow">
        {iconRight && (
          <div className="w-6 absolute right-0 m-4 text-cPrimary-default">
            {iconRight}
          </div>
        )}
        <CardBody>
          <Headline level={2} variant={'h3'} textColorClass={'text-cPrimary-default'}>{title}</Headline>
          <div className={'text-sm'}>{children}</div>
        </CardBody>
      </div>

      {footer && <CardFooter border>{footer}</CardFooter>}

      <style jsx>{`
        .icon {
          margin: 1.5rem 0 0 -2rem;
          max-width: 7rem;
        }
      `}</style>
    </Card>
  )
}
