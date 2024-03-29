import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  register: UseFormRegister<FieldValues>
  fieldName: string
  className?: string
  errors?: any
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  className = '',
  register,
  fieldName,
  errors,
  ...props
}) => {
  return (
    <div className='flex w-full flex-col gap-2'>
      {label && <label className='font-bold text-primary'>{label}</label>}
      <input
        {...register(fieldName)}
        className={`rounded-2xl border border-primary py-2 px-4 text-black50 shadow outline-primary placeholder:font-semibold placeholder:text-black10 disabled:cursor-not-allowed disabled:bg-black10 disabled:opacity-75 disabled:placeholder:text-black25 ${
          errors && 'border-red-300 outline-red-500'
        } ${className}`}
        {...props}
      />
    </div>
  )
}

export default FormInput
