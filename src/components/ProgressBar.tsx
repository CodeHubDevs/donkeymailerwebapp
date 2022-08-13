import React from 'react'

import useProgressUploadStore from '@/stores/useProgressUploadStore'

import Spinner from './Spinner'

const ProgressBar = () => {
  const { progress }: any = useProgressUploadStore()
  return (
    <div className='relative h-4 w-full overflow-hidden rounded-full'>
      <div className='absolute h-full w-full bg-gray-200'></div>
      <div
        className='absolute h-full bg-primary'
        style={{ width: `${progress}%` }}></div>
      <span className='absolute flex h-full w-full items-center justify-center text-xs text-white'>
        {progress === 100 ? <Spinner className='h-3 w-3' /> : `${progress}%`}
      </span>
    </div>
  )
}

export default ProgressBar
