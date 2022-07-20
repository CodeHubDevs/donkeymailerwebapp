import { faDownload, faFileArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import GoBackToSelectButton from '@/components/GoBackToSelectButton'

const UploadRecipient = () => {
  return (
    <div className='mt-10'>
      <div className='flex items-center justify-between'>
        <h3 className='text-xl font-bold'>Upload Recipients</h3>
        <GoBackToSelectButton />
      </div>
      <div className='mt-4 rounded-lg bg-white p-16 shadow-lg'>
        <div className='mb-4 flex gap-2'>
          <h4 className='text-lg font-bold'>Upload File</h4>
          <p>(Download our example guide for reference)</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-primary bg-secondary10 p-16'>
          <FontAwesomeIcon className='h-12 w-12' icon={faFileArrowUp} />
          <input
            type='file'
            className='text-grey-500 block text-sm file:mr-5 file:rounded-full file:border-0 file:bg-primary file:py-2 file:px-6 file:text-sm file:font-medium file:text-white hover:file:cursor-pointer focus:outline-none'
          />
          <button className='flex items-center text-sm text-primary'>
            <FontAwesomeIcon icon={faDownload} className='mr-2' />
            <span>Download CSV Guide</span>
          </button>
        </div>
        <button className='mx-auto mt-4 block rounded-xl bg-gradient-to-r from-secondary to-primary py-2 px-8 font-bold text-white'>
          Start Upload
        </button>
      </div>
    </div>
  )
}

export default UploadRecipient
