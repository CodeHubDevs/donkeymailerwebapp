import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import React from 'react'

import GoBackToSelectButton from '@/components/GoBackToSelectButton'

const CreateRecipient = () => {
  const router = useRouter()

  return (
    <div className='mt-10'>
      <div className='flex items-center justify-between'>
        <h3 className='text-2xl font-bold'>Create Recipient Group</h3>
        {!router.query.new && <GoBackToSelectButton />}
      </div>
      <div className='mt-4 rounded-xl bg-white p-4 shadow-lg'>
        <form className='flex flex-col items-start gap-2'>
          <div className='flex items-center gap-2'>
            <h4 className='text-xl font-bold'>Name of Group</h4>
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
        <div>
          <div className='mt-4 flex items-center justify-between border-t py-2'>
            <h3 className='text-xl font-bold'>Recipients</h3>
            <button
              type='button'
              className='rounded-lg bg-primary from-secondary to-primary py-2 px-8 text-white '>
              <span className='absolute inset-y-0 left-0 flex items-center pl-3'></span>
              <FontAwesomeIcon
                icon={faCirclePlus}
                className='mt-1 cursor-pointer rounded-full bg-primary text-white'
              />
              <span className='ml-2 text-center text-sm font-bold text-white'>
                Add Recipient
              </span>
            </button>
          </div>
          <table className='w-full text-left text-sm text-gray-500'>
            <thead className=' className border-b border-t text-sm text-gray-700'>
              <tr>
                <th scope='col' className='p-4'>
                  <div className='flex items-center'>
                    <input
                      id='checkbox-all'
                      type='checkbox'
                      className='mr-2 border border-primary text-primary outline-primary checked:bg-primary hover:bg-primary focus:ring-primary'
                    />
                    All
                  </div>
                </th>
                <th scope='col' className='px-6 py-3'>
                  First Name
                </th>
                <th scope='col' className='px-6 py-3'>
                  Last Name
                </th>
                <th scope='col' className='px-6 py-3'>
                  Company Name
                </th>
                <th scope='col' className='px-6 py-3'>
                  Address 1
                </th>
                <th scope='col' className='px-6 py-3'>
                  Address 2
                </th>
                <th scope='col' className='px-6 py-3'>
                  City
                </th>
                <th scope='col' className='px-6 py-3'>
                  County/State
                </th>
                <th scope='col' className='px-6 py-3'>
                  Postal/Zip Code
                </th>
                <th scope='col' className='px-6 py-3'>
                  Country
                </th>
                <th scope='col' className='px-6 py-3'>
                  Phone Number
                </th>
                <th scope='col' className='px-6 py-3'>
                  Joined Date
                </th>
                <th scope='col' className='px-6 py-3'>
                  <span className='className-only'></span>
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CreateRecipient
