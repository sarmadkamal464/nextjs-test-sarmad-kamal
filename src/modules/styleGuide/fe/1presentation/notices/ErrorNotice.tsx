import React from 'react'


export interface IErrorNotice {
  error: string | Error
}

export const ErrorNotice = ({error}: IErrorNotice) => {
  if (!error) {
    return null
  }
  const err = typeof error === 'string' ? error : error?.message

  return (
    <div className={'error'}>
      {err}

      <style jsx>{`
        .error {
          border-radius: 4px;
          padding: 1rem;
          background: #d94848;
          color: #fff;
        }
      `}</style>
    </div>
  )
}
