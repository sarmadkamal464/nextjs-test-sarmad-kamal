import React, {ReactNode} from 'react'

interface IFormContainer {
  children: ReactNode
}

export const FormContainer = ({children}: IFormContainer) => (
  <div className={'form'}>

    {children}
    <style jsx>{`
      .form {
        display: flex;
        flex-flow: column;
      }
      .form > :global(*) {
          margin: 0 0 1rem 0;
      }
    `}</style>
  </div>
)
