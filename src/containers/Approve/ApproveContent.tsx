import React from 'react'

const ApproveContent = ({ groupId }: any) => {
  return (
    <div className='mt-10'>
      <h3 className='text-2xl font-bold text-black'>
        Review and Approve your Campaign
      </h3>
      <div className='mt-4 grid grid-cols-2 items-center justify-between gap-8'>
        <div className='w-full rounded-lg bg-white p-4 shadow-lg'>
          <h4 className='mb-2 border-b text-xl font-bold'>Campaign Name</h4>
          <div className='flex items-center gap-2'>
            <p className='text-lg font-bold'>Recipient Group</p>
            <p className='text-sm'>UK</p>
          </div>
          <p>32 Recipients</p>
          <p>A5 Envelope</p>
        </div>
        <div className='h-full w-full rounded-lg bg-white p-4 shadow-lg'>
          <div className='min-h-[20vh] bg-primary10 text-center'>
            Template Image
          </div>
        </div>
      </div>
      <button className='mx-auto mt-4 block rounded-full bg-primary px-4 py-1 font-bold text-white'>
        Approve
      </button>
    </div>
  )
}

export default ApproveContent
