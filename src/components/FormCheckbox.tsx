import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

interface FormCheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode
  register: UseFormRegister<FieldValues>
  fieldName: string
  className?: string
}

const FormCheckbox: React.FC<FormCheckboxProps> = ({
  children,
  className = '',
  register,
  fieldName,
  ...props
}) => {
  return (
    <div className='flex items-center'>
      <input
        {...register(fieldName)}
        type='checkbox'
        className={`mr-2 border border-primary text-primary outline-primary checked:bg-primary hover:bg-primary focus:ring-primary ${className}`}
        {...props}
      />
      {children}
    </div>
  )
}

export default FormCheckbox
