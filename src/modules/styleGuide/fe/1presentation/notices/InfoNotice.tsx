import React, {ReactNode} from 'react'
import {BsFillInfoCircleFill} from 'react-icons/bs'

export interface IInfoNoticeProps {
  children: ReactNode
}

export const InfoNotice = ({children}: IInfoNoticeProps) => {
  return (
    <div className={'info bg-blue-100'}>
      <span className={'icon'}>
        <BsFillInfoCircleFill size={15} />
      </span>
      {children}

      <style jsx>{`
        .info {
          border-radius: 4px;
          padding: 1rem;
          display: flex;
          align-items: center;
        }

        .icon {
          margin: 0 1rem -5px 0;
        }

        .info :global(a) {
          font-weight: bold;
        }
      `}</style>
    </div>
  )
}
