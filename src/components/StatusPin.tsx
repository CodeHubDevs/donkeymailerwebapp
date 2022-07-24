import React from 'react'

interface StatusPinProps {
  className?: string
  children?: React.ReactNode
}

const StatusPin: React.FC<StatusPinProps> = ({ children, className = '' }) => {
  return (
    <span
      className={`rounded-full bg-secondary py-1 px-4 font-bold text-white ${className}`}>
      {children}
    </span>
  )
}

export default StatusPin
