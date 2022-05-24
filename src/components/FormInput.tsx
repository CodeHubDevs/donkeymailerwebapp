import React from 'react'

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  className?: string
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  className = '',
  ...props
}) => {
  return (
    <div className='flex w-full flex-col gap-2'>
      <label className='font-bold text-primary'>{label}</label>
      <input
        className={`rounded-2xl border border-primary py-2 px-4 text-black50 shadow outline-primary placeholder:font-semibold placeholder:text-black10 ${className}`}
        {...props}
      />
    </div>
  )
}

export default FormInput
