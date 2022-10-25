import {RequireOnlyOne} from '@utils'
import React, {ChangeEvent} from 'react'
import {useFormContext} from 'react-hook-form'
import {IBaseInputProps} from './Input'
import {Label} from './Label'

interface IInputTextAreaGeneral extends Omit<IBaseInputProps, 'type'> {
  rows?: number
}

export type IInputTextArea = RequireOnlyOne<IInputTextAreaGeneral, 'registerFieldId' | 'onChange'>

export const InputTextArea = ({registerFieldId, label, rows = 4, onChange, ...restProps}: IInputTextArea) => {
  const {register} = useFormContext()
  const registerField = registerFieldId ? {...register(registerFieldId)} : undefined

  const change = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(event.target.value)
    }
  }

  return (
    <Label>
      {label}
      <textarea  {...registerField} rows={rows} {...restProps} onChange={change}
                 className="mt-1 py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" />
    </Label>
  )
}
