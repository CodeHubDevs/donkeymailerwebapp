import React from 'react'

import GoBackToSelectButton from '@/components/GoBackToSelectButton'

const CreateRecipient = () => {
  return (
    <div className='mt-10'>
      <div className='flex items-center justify-between'>
        <h3 className='text-xl font-bold'>Type Recipients Manually</h3>
        <GoBackToSelectButton />
      </div>
      <div className='mt-4 rounded-xl bg-white p-4 shadow-lg'>
        <form className='flex flex-col items-start gap-2'>
          <div className='flex items-center gap-2'>
            <h4>Name of Group</h4>
            <p>(First, create your recipient group name)</p>
          </div>
          <input
            type='text'
            className='w-64 rounded-lg border-2 border-gray-300 p-2'
            placeholder='Enter Group Name'
          />
          <button className='block rounded-full bg-primary py-1 px-4 text-sm font-bold text-white'>
            Save
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateRecipient
