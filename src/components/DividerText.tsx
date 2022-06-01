import React from 'react'

const DividerText: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='flex items-center gap-2'>
      <div className='h-px w-full bg-black10' />
      {children}
      <div className='h-px w-full bg-black10' />
    </div>
  )
}

export default DividerText
