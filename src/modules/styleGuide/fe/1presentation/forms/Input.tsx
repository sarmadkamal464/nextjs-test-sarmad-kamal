import React, {ChangeEvent, ReactNode} from 'react'
import {useFormContext} from 'react-hook-form'
import {RegisterOptions} from 'react-hook-form/dist/types/validator'
import {InputErrors} from './InputErrors'
import {Label} from './Label'
import {RequireOnlyOne} from "@utils";

interface IBaseInputPropsGeneral {
  registerFieldId?: string
  onChange?: (value: string) => void
  name?: string
  type?: 'text' | 'email' | 'number' | 'checkbox' | 'password'
  label?: string
  defaultValue?: string
  validationOptions?: RegisterOptions
  disabled?: boolean
  placeholder?: string
  autoComplete?: string
  ariaDescription?: string
  className?: string
  endAdornment?: ReactNode
  required?: boolean
}

export type IBaseInputProps = RequireOnlyOne<IBaseInputPropsGeneral, 'registerFieldId' | 'onChange'>


export const Input = (
  {
    registerFieldId,
    name,
    type,
    label,
    className,
    defaultValue,
    validationOptions,
    disabled,
    placeholder,
    autoComplete,
    onChange,
    ariaDescription,
    endAdornment,
    required
  }: IBaseInputProps
) => {
  const methods = useFormContext()
  const validationOpts = {
    ...validationOptions,
    required: required !== undefined ? 'This field is required' : validationOptions?.required
  }
  let registerField = methods && registerFieldId ? {...methods.register(registerFieldId, validationOpts)} : undefined

  const change = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value)
    }
  }

  return (
    <Label>
      {label}
      <span className={'relative block'}>
        <input {...registerField} type={type} name={name} autoComplete={autoComplete} aria-describedby={ariaDescription}
               disabled={disabled} placeholder={placeholder} defaultValue={defaultValue} onChange={change}
               className={'mt-1 py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md ' + className}/>

        {endAdornment && <span className={'absolute right-0 top-0 h-full w-12'}>{endAdornment}</span>}

        <InputErrors errors={methods?.formState?.errors} registerFieldId={registerFieldId}/>
      </span>
    </Label>
  )
}
