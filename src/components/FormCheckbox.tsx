import React from 'react'

interface FormCheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  className?: string
}

const FormCheckbox: React.FC<FormCheckboxProps> = ({
  label = '',
  className = '',
  ...props
}) => {
  return (
    <div className='flex items-center'>
      <input
        {...props}
        type='checkbox'
        className={`border border-primary text-primary outline-primary checked:bg-primary hover:bg-primary focus:ring-primary ${className}`}
      />
      <p className='pl-2 text-sm leading-none text-black25'>{label}</p>
    </div>
  )
}

export default FormCheckbox
