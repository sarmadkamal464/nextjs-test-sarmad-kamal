import React, {ReactNode} from 'react'

export interface IParagraph {
  children: ReactNode
  align?: 'left' | 'center' | 'right'
  className?: string
}

export const Paragraph = ({children, align, className}: IParagraph) => {
  return (
    <p className={align || '' + ' pb-4 ' + className}>
      {children}

      <style jsx>{`
        .left {
          text-align: left;
        }

        .center {
          text-align: center;
        }

        .right {
          text-align: right;
        }
      `}</style>
    </p>
  )
}
