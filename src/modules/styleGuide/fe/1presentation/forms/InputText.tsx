import {RequireOnlyOne} from '@utils'
import React from 'react'
import {Input} from './Input'

interface IInputTextPropsGeneral {
  registerFieldId?: string
  onChange?: (value: string) => void
  name?: string
  label: string
  autoComplete?: string
  required?: boolean
  placeholder?: string
}


export type IInputTextProps = RequireOnlyOne<IInputTextPropsGeneral, 'registerFieldId' | 'onChange'>

export const InputText = (props: IInputTextProps) => (
  <Input type={'text'} {...props} />
)
