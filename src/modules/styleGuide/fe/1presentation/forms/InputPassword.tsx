import {EyeIcon, EyeOffIcon} from '@heroicons/react/solid'
import {RequireOnlyOne} from '@utils'
import React, {useState} from 'react'
import {RegisterOptions} from 'react-hook-form/dist/types/validator'
import {ButtonIcon} from './ButtonIcon'
import {Input} from './Input'

interface IInputPasswordPropsGeneral {
  registerFieldId?: string
  onChange?: (value: string) => void
  name: string
  label: string
  // passwordType?: 'currentPassword' | 'newPassword'
}

export type IInputPasswordProps = RequireOnlyOne<IInputPasswordPropsGeneral, 'registerFieldId' | 'onChange'>


export const InputPassword = ({name, ...props}: IInputPasswordProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }
  // const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault()
  // }

  const ToggleButton = (
    <ButtonIcon icon={showPassword ? <EyeIcon/> : <EyeOffIcon/>} aria-label="toggle password visibility"
                onClick={handleClickShowPassword} /*onMouseDown={handleMouseDownPassword}*/ variant={'transparent'}/>
  )

  const validationOptions: RegisterOptions = {
    required: 'This field is required',
    minLength: {value: 8, message: 'The password must be at least 8 characters long'}
  }

  return (
    <Input type={showPassword ? 'text' : 'password'} endAdornment={ToggleButton} name={name} {...props}
           validationOptions={validationOptions}/>
  )
}

