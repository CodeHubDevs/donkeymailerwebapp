import React from 'react'

interface FormCheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode
  className?: string
}

const FormCheckbox: React.FC<FormCheckboxProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div className='flex items-center'>
      <input
        {...props}
        type='checkbox'
        className={`mr-2 border border-primary text-primary outline-primary checked:bg-primary hover:bg-primary focus:ring-primary ${className}`}
      />
      {children}
    </div>
  )
}

export default FormCheckbox
