import React, {ChangeEvent} from 'react'
import {Label} from './Label'

export interface IInputCheckboxProps {
  name: string
  label: string
  autocomplete?: string
  ariaDescription?: string
  placeholder?: string
  defaultIsChecked?: boolean
  disabled?: boolean
  onChange: (value: string) => void
}


export const InputCheckbox = (
  {
    name,
    label,
    ariaDescription,
    onChange,
    autocomplete,
    placeholder,
    disabled,
    defaultIsChecked
  }: IInputCheckboxProps) => {

  const change = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }
  return (
    <Label>
      <input type={'checkbox'} name={name} autoComplete={autocomplete} aria-describedby={ariaDescription}
             disabled={disabled} placeholder={placeholder} checked={defaultIsChecked} onChange={change} className={
        `h-6 w-6 border-gray-300 rounded text-cPrimary-default hover:text-cPrimary-dark 
        focus:ring-cFocus cursor-pointer transition-colors ease-in-out duration-200`} />


      <span className="ml-2">{label}</span>
    </Label>
  )
}
