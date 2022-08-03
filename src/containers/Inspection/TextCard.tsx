import React from 'react'

const TextCard: React.FC<{ label: string }> = ({ label }) => {
  return (
    <div className='flex items-center justify-center rounded-2xl border border-primary bg-white p-16'>
      <h4 className='text-center text-xl text-black25'>{label}</h4>
    </div>
  )
}

export default TextCard
