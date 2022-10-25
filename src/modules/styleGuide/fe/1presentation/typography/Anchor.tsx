import React, {ReactNode} from 'react'

export interface IAnchorProps {
  children: ReactNode
  anchorId: string
}

export const Anchor = ({children, anchorId}: IAnchorProps) => (
  <a href={'#' + anchorId}>
    {children}
  </a>
)
