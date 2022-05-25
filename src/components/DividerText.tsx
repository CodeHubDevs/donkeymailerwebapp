import React from 'react'

const DividerText: React.FC<{ label: string }> = ({ label }) => {
  return (
    <div className='flex items-center gap-2'>
      <div className='h-px w-full bg-black10' />
      <p className='text-black25'>{label}</p>
      <div className='h-px w-full bg-black10' />
    </div>
  )
}

export default DividerText
