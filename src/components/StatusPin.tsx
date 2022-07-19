import React from 'react'

interface StatusPinProps {
  className?: string
  status: string
}

const StatusPin: React.FC<StatusPinProps> = ({
  status = 'Draft',
  className = ''
}) => {
  return (
    <span
      className={`rounded-full bg-secondary py-1 px-4 font-bold text-white ${className}`}>
      {status}
    </span>
  )
}

export default StatusPin
