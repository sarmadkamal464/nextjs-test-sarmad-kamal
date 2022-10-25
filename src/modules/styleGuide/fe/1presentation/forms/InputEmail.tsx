import {RequireOnlyOne} from '@utils'
import React from 'react'
import {Input} from './Input'

interface IInputEmailPropsGeneral {
  registerFieldId?: string
  onChange?: (value: string) => void
  name: string
  label: string
  autocomplete?: string
  placeholder?: string
  required?: boolean
}

export type IInputEmailProps = RequireOnlyOne<IInputEmailPropsGeneral, 'registerFieldId' | 'onChange'>

export const InputEmail = (props: IInputEmailProps) => (
  <Input type={'email'} autocomplete={'email'} {...props} />
)
