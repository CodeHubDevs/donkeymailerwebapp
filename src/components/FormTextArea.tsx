import React from 'react'

interface FormTextAreaProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string
  className?: string
}

const FormTextArea: React.FC<FormTextAreaProps> = ({
  label,
  className = '',
  ...props
}) => {
  return (
    <div className='flex w-full flex-col gap-2'>
      <label className='font-bold text-primary'>{label}</label>
      <textarea
        {...props}
        className={`resize-none rounded-2xl border-primary p-4 text-black50 shadow placeholder:font-bold placeholder:text-black10 focus:border-primary focus:ring-primary ${className}`}></textarea>
    </div>
  )
}

export default FormTextArea
