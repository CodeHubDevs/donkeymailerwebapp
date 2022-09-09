import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const GoBackToSelectButton = () => {
  return (
    <Link href='select?new=true'>
      <a className='flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary to-primary py-1 px-4 font-bold text-white'>
        <FontAwesomeIcon icon={faArrowLeftLong} />
        <span>Return to Options</span>
      </a>
    </Link>
  )
}

export default GoBackToSelectButton
