import React from 'react'
import {FieldErrors, FieldValues} from 'react-hook-form'

interface IProps {
  registerFieldId?: string
  errors: FieldErrors<FieldValues>
}


export const InputErrors = ({registerFieldId, errors}: IProps) => {
  const errMessage: string | null = (
    (registerFieldId
      && (errors?.[registerFieldId]?.message || errors?.[registerFieldId]?.type)
    ) as string | undefined | null) || null

  if (!errMessage) {
    return null
  }

  return (
    <span className="py-1 block text-xs text-cError">
      {errMessage}
    </span>
  )
}

