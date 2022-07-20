import React from 'react'

import GoBackToSelectButton from '@/components/GoBackToSelectButton'

const dummyData = [
  {
    id: '32143',
    status: 'Draft',
    group_name: 'Some Group Name',
    date_modified: '2020-01-01',
    total_recipients: 423,
    countries: 3
  },
  {
    id: '32143',
    status: 'Draft',
    group_name: 'Some Group Name',
    date_modified: '2020-01-01',
    total_recipients: 423,
    countries: 3
  },
  {
    id: '32143',
    status: 'Draft',
    group_name: 'Some Group Name',
    date_modified: '2020-01-01',
    total_recipients: 423,
    countries: 3
  },
  {
    id: '32143',
    status: 'Draft',
    group_name: 'Some Group Name',
    date_modified: '2020-01-01',
    total_recipients: 423,
    countries: 3
  },
  {
    id: '32143',
    status: 'Draft',
    group_name: 'Some Group Name',
    date_modified: '2020-01-01',
    total_recipients: 423,
    countries: 3
  }
]
const SelectGroup = () => {
  return (
    <div className='mt-10'>
      <div className='flex items-center justify-between'>
        <h3 className='text-xl font-bold'>Select From Recipient Group</h3>
        <GoBackToSelectButton />
      </div>
      <div className='mt-4 rounded-lg bg-white p-4 shadow-xl'>
        <table className='min-h-[300px] w-full text-left text-sm text-gray-500'>
          <thead className='border-b border-t text-sm text-gray-700'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Group ID
              </th>
              <th scope='col' className='px-6 py-3'>
                Group Name
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
            {dummyData.map((item) => (
              <tr key={item.id}>
                <td
                  scope='row'
                  className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'>
                  {item.id}
                </td>
                <td
                  scope='row'
                  className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'>
                  {item.group_name}
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
                <th scope='row' className='whitespace-nowrap px-6 py-4'>
                  <button
                    className='rounded-lg bg-primary py-1 px-3 text-xs font-bold text-white'
                    onClick={() => {}}>
                    Select
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SelectGroup
