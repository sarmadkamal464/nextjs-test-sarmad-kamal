import {config} from '@config'
import {Headline} from '@styleGuide'
import Head from 'next/head'
import React, {FC, ReactElement, ReactNode, ReactNodeArray} from 'react'
import {DevelopmentWarning} from './developmentWarning'
import {FooterNavigation} from './footerNavigation/footerNavigation'
import {HeaderNavigation} from './headerNavigation/HeaderNavigation'
import {LayoutMain} from './LayoutMain'


export interface ILayout {
  children: ReactNode
  title: string | ReactNodeArray | ReactElement
  heading?: string | null
}

export const Layout: FC<ILayout> = ({children, title, heading}) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Head>
        <title>{title}</title>

        {config.env.isDev && (
          <link rel="icon" href="/favicon-dev.png" />
        )}
      </Head>

      <HeaderNavigation  />

      <LayoutMain>
        {heading !== null && (
          <Headline level={1}>
            {heading !== undefined ? heading : title}
          </Headline>
        )}
        {children}
      </LayoutMain>

      <FooterNavigation />
      <DevelopmentWarning />
      {/*<CookieNotification />*/}
    </div>
  )
}


