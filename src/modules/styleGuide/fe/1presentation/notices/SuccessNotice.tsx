import React, {ReactNode} from 'react'
import {HiCheckCircle} from 'react-icons/hi'

export interface ISuccessNotice {
  children: ReactNode
}

export const SuccessNotice = ({children}: ISuccessNotice) => {
  return (
    <div className={'success'}>
      <span className={'icon'}>
        <HiCheckCircle size={15} />
      </span>
      {children}

      <style jsx>{`
        .success {
          border-radius: 4px;
          padding: 1rem;
          display: flex;
          align-items: center;
        }
        .icon {
          margin: 0 1rem -5px 0;
        }
      `}</style>
    </div>
  )
}
