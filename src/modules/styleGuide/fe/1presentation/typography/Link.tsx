import {ExternalLinkIcon} from '@heroicons/react/solid'
import {config} from '@config'
import Link from 'next/link'
import React, {AnchorHTMLAttributes, ReactNode} from 'react'

export interface ILink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  locale?: string
  onClick?: (e: React.MouseEvent) => void
  children: ReactNode
  className?: string
  active?: boolean
  fullSize?: boolean
  detectExternalIcon?: boolean
}

export const A = (
  {
    children,
    href,
    locale,
    className,
    active,
    detectExternalIcon,
    fullSize = false,
    ...restProps
  }: ILink) => {

  const external = href.includes('http') || href.startsWith(config.hostRoute)

  return (
    <Link href={href} locale={locale}>
      <a target={external ? '_blank' : ''} className={`
            text-cText-link border-b border-transparent duration-300 
            hover:text-cText-linkActive hover:border-cText-linkActive
            focus:text-cText-linkActive focus:border-cText-linkActive
            ${active ? 'text-cText-linkActive border-cText-linkActive ' : ' '}
            ${fullSize ? 'fullSize ' : ' '}
            ${className ? className : ' '}
            `} {...restProps}>

        {children}
        {detectExternalIcon && external && (
          <span className={'iconFontSize ml-1 inline-block'}><ExternalLinkIcon /></span>
        )}

        <style jsx>{`
          .fullSize::after {
            position: absolute;
            content: '';
            padding: 5000px;
            left: 0;
            top: 0;
          }

          .iconFontSize {
            width: 1em;
          }
        `}</style>
      </a>
    </Link>
  )
}
