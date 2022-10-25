import React, {ReactNode} from 'react'
import {Container} from './container'


export interface ILayout {
  children: ReactNode
  left?: ReactNode
}

export const LayoutMain = ({children, left}: ILayout) => {
  return (
    <Container>
      {
        left
          ? (
            <Main2Cols left={left}>
              {children}
            </Main2Cols>
          )
          : (<Main1Cols>{children}</Main1Cols>)
      }
    </Container>
  )
}


const Main1Cols = ({children}: { children: ReactNode }) => (
  <main className={`pt-12 pb-6`}>
    {children}
  </main>
)

const Main2Cols = ({children, left}: ILayout) => (
  <div className={`lg:grid lg:grid-cols-4 lg:gap-8`}>
    <div className="pt-12 pb-6 hidden lg:block lg:col-span-1 border-r border-gray-200 overflow-y-auto ">
      {left}
    </div>
    <main className={`pt-12 pb-6 lg:col-span-3`}>
      {children}
    </main>
  </div>
)



