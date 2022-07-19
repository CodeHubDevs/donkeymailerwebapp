import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import StatusPin from '@/components/StatusPin'

import GroupModal from './GroupModal'

const dummyData = [
  {
    id: '32143',
    status: 'Draft',
    group_name: 'Some Group Name',
    date_modified: '2020-01-01',
    total_recipients: 423,
    countries: 3
  }
]

const RecipientGroups = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  return (
    <div className='mt-10'>
      <h3 className='text-xl font-bold'>Reciepient Groups</h3>
      <div className='mt-4 rounded-lg bg-white p-4'>
        <div className='mb-2 flex items-center justify-end'>
          <button
            type='button'
            className='rounded-lg bg-primary from-secondary to-primary py-2 px-8 text-white '>
            <span className='absolute inset-y-0 left-0 flex items-center pl-3'></span>
            <FontAwesomeIcon
              icon={faCirclePlus}
              className='mt-1 cursor-pointer rounded-full bg-primary text-white'
            />
            <span className='ml-2 text-center text-sm font-bold text-white'>
              Create New Group
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
                ID
              </th>
              <th scope='col' className='px-6 py-3'>
                Status
              </th>
              <th scope='col' className='px-6 py-3'>
                Group Name
              </th>
              <th scope='col' className='px-6 py-3'>
                Date Modified
              </th>
              <th scope='col' className='px-6 py-3'>
                Total Recipients
              </th>
              <th scope='col' className='px-6 py-3'>
                Countries
              </th>
              <th scope='col' className='px-6 py-3'>
                <span className='className-only'></span>
              </th>
            </tr>
          </thead>
          <tbody>
            <GroupModal
              onClick={() => {}}
              setShowModal={setIsModalOpen}
              showModal={isModalOpen}
            />
            {dummyData.map((item) => (
              <tr key={item.id}>
                <td scope='col' className='p-4 text-center'>
                  <div className='flex items-center'>
                    <input
                      id='checkbox-all'
                      type='checkbox'
                      className='mr-2 border border-primary text-primary outline-primary checked:bg-primary hover:bg-primary focus:ring-primary'
                    />
                  </div>
                </td>
                <td
                  scope='row'
                  className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'>
                  {item.id}
                </td>
                <td
                  scope='row'
                  className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'>
                  <StatusPin status={item.status} />
                </td>
                <td
                  scope='row'
                  className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'>
                  {item.group_name}
                </td>
                <td
                  scope='row'
                  className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'>
                  {item.date_modified}
                </td>
                <td
                  scope='row'
                  className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'>
                  {item.total_recipients}
                </td>
                <td
                  scope='row'
                  className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'>
                  {item.countries}
                </td>
                <th
                  scope='row'
                  className='whitespace-nowrap px-6 py-4 font-bold text-primary'>
                  <span
                    className='cursor-pointer'
                    onClick={() => setIsModalOpen(true)}>
                    View
                  </span>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecipientGroups
