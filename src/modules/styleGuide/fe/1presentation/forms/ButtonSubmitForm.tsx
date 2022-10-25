import React, {ReactNode} from 'react'
import {useFormContext} from 'react-hook-form'
import {Button} from './Button'

interface IFormSubmit {
  children: ReactNode
  isSubmitting?: boolean
  disabled?: boolean
}

export const ButtonSubmitForm = ({isSubmitting = false, disabled = false, children}: IFormSubmit) => {

  const {formState} = useFormContext()
  const submitting = isSubmitting || formState.isSubmitting
  // formState.isSubmitSuccessful

  return (
    <>
      <Button isLoading={submitting} type={'submit'} disabled={disabled || submitting}>
        {children}
      </Button>
    </>
  )
}

