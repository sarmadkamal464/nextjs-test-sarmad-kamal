import React, {ReactNode} from 'react'
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form'

//todo: remove ts-ignores

interface IForm<T> {
  children: ReactNode
  // @ts-ignore
  onSubmit: SubmitHandler<T>
  className?: string
}

export const Form = <T, >({onSubmit, className, children}: IForm<T>) => {
  // @ts-ignore
  const methods = useForm<T>({mode: 'onBlur'})


  return (
    // @ts-ignore
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={className}>
        {children}
      </form>
    </FormProvider>
  )
}

