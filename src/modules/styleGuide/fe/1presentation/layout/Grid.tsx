import React, {ReactNode} from 'react'

export interface IGrid {
  children: ReactNode
}

export const Grid = ({children}: IGrid) => {
  return (
    <div className={'grid'}>
      {children}


      <style jsx>{`
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin: 3rem auto 0 auto;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

    </div>
  )
}
