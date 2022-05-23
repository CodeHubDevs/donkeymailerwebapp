import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const DividerIcon = ({ icon }: any) => {
  return (
    <div className='relative flex h-28 items-center justify-center'>
      <div className='h-px w-full bg-black10' />
      <div className='absolute flex h-28 w-28 items-center justify-center rounded-full bg-secondary text-white'>
        <FontAwesomeIcon icon={icon} fontSize={40} />
      </div>
    </div>
  )
}

export default DividerIcon
