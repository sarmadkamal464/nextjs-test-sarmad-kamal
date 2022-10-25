import {Switch} from '@headlessui/react'
import React, {ReactNode, useState} from 'react'
import {Label} from './Label'

export interface IToggleProps {
  showIcons?: boolean
    labelLeft?: ReactNode
  label?: ReactNode
  screenReaderName?: string
  onChange?: (value: boolean) => void
  defaultValue?: boolean
}

export const Toggle = ({showIcons = true, onChange, label,labelLeft, screenReaderName, defaultValue}: IToggleProps) => {
  const [enabled, setEnabled] = useState<boolean>(defaultValue || false)

  const change = (value: boolean) => {
    setEnabled(value)
    if (onChange) onChange(value)
  }

  return (
    <Switch.Group as="div" className="flex items-center">
      {labelLeft && <Label><Switch.Label as={'div'} className="mr-2 ">{labelLeft}</Switch.Label></Label>}
      <Switch checked={enabled} onChange={change} className={`
        ${enabled ? 'bg-cPrimary-default' : 'bg-gray-200'}
        relative inline-flex items-center h-6 w-11 transition-colors ease-in-out duration-200 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cFocus mx-1
        rounded-full border-2 border-transparent cursor-pointer      
      `}>
        {screenReaderName && <span className="sr-only">{screenReaderName}</span>}
        <span className={`${
          enabled ? 'translate-x-5' : 'translate-x-0'}
          pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 
          transition ease-in-out duration-200
        `}>

        {showIcons && (
          <>
            <span aria-hidden="true" className={`${
              enabled ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200'}
              absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}>
              <XIcon />
            </span>

            <span aria-hidden="true" className={`${
              enabled ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100'}
              absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}>
             <CheckIcon />
            </span>
          </>
        )}

      </span>
      </Switch>
      {label && <Label><Switch.Label as={'div'} className="ml-2 ">{label}</Switch.Label></Label>}
    </Switch.Group>
  )
}

const XIcon = () => (
  <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
    <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" strokeWidth={2} strokeLinecap="round"
          strokeLinejoin="round" />
  </svg>
)
const CheckIcon = () => (
  <svg className="h-3 w-3 text-cPrimary-default" fill="currentColor" viewBox="0 0 12 12">
    <path
      d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
  </svg>
)
