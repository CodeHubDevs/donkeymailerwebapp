import React from 'react'

import Spinner from './Spinner'

const Loading = () => {
  return (
    <div className='mt-10 flex h-screen items-center justify-center'>
      <Spinner className='text-primary' />
    </div>
  )
}

export default Loading
