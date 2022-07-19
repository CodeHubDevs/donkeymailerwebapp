import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

import ArrowFilled from '@/assets/images/arrow-filled-down.png'

const dummyData = [
  {
    id: '32143',
    status: 'Draft',
    campaign_name: 'Some Campaign Name',
    type: '6x9 Postcard',
    template: 'template',
    recipients: 32,
    cost: '$24.99'
  },
  {
    id: '32143',
    status: 'Draft',
    campaign_name: 'Some Campaign Name',
    type: '6x9 Postcard',
    template: 'template',
    recipients: 32,
    cost: '$24.99'
  },
  {
    id: '32143',
    status: 'Draft',
    campaign_name: 'Some Campaign Name',
    type: '6x9 Postcard',
    template: 'template',
    recipients: 32,
    cost: '$24.99'
  },
  {
    id: '32143',
    status: 'Draft',
    campaign_name: 'Some Campaign Name',
    type: '6x9 Postcard',
    template: 'template',
    recipients: 32,
    cost: '$24.99'
  },
  {
    id: '32143',
    status: 'Draft',
    campaign_name: 'Some Campaign Name',
    type: '6x9 Postcard',
    template: 'template',
    recipients: 32,
    cost: '$24.99'
  }
]

const CampaignTable = () => {
  return (
    <div>
      <div className='mt-10 mb-2 grid grid-cols-2 gap-2'>
        <div>
          <p className='text-2xl font-bold text-black '>My Campaigns</p>
        </div>
        <div className='grid justify-items-end'>
          <div>
            <input
              type='search'
              className={
                'w-80  rounded-2xl border border-primary py-2 px-4 text-black50 placeholder-primary placeholder-opacity-50 shadow outline-primary placeholder:font-semibold'
              }
              placeholder='Search for campaign...'
            />
            <button
              type='submit'
              className='ml-3 rounded-2xl bg-primary from-secondary to-primary py-2 px-8 text-white'>
              <span className='absolute inset-y-0 left-0 flex items-center pl-3'></span>
              Search
            </button>
          </div>
        </div>
      </div>

      <div className='relative overflow-x-auto rounded-xl bg-white p-4 shadow-md'>
        <div className=' grid grid-cols-2 gap-2'>
          <div>
            <p className='text-2xl font-bold text-primary '>
              Latest Campaigns &nbsp;
              <Image src={ArrowFilled} alt='Arrow' />
            </p>
          </div>
          <div className='grid justify-items-end'>
            <div>
              <button
                type='submit'
                className='ml-3 rounded-lg bg-primary from-secondary to-primary py-2 px-8 text-white '>
                <span className='absolute inset-y-0 left-0 flex items-center pl-3'></span>
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  className='mt-1 cursor-pointer rounded-full bg-primary text-white'
                />
                <span className='ml-2 text-center text-sm font-bold text-white'>
                  Create New Campaign
                </span>
              </button>
            </div>
          </div>
        </div>
        <table className='mt-5 w-full text-left text-sm text-gray-500'>
          <thead className=' className border-b border-t text-sm text-gray-700'>
            <tr>
              <th scope='col' className='p-4'>
                <div className='flex items-center'>
                  <input
                    id='checkbox-all'
                    type='checkbox'
                    className='mr-2 h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500'
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
                Campaign Name
              </th>
              <th scope='col' className='px-6 py-3'>
                Type
              </th>
              <th scope='col' className='px-6 py-3'>
                Template
              </th>
              <th scope='col' className='px-6 py-3'>
                Recipients
              </th>
              <th scope='col' className='px-6 py-3'>
                Cost
              </th>
              <th scope='col' className='px-6 py-3'>
                <span className='className-only'></span>
              </th>
              <th scope='col' className='px-6 py-3'>
                <span className='className-only'></span>
              </th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((res) => (
              <tr key={res.id} className=' bg-white'>
                <th scope='col' className='p-4 text-center'>
                  <div className='flex items-center'>
                    <input
                      id='checkbox-all-search'
                      type='checkbox'
                      className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500'
                    />
                  </div>
                </th>
                <th
                  scope='row'
                  className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'>
                  {res.id}
                </th>
                <th
                  scope='row'
                  className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'>
                  {res.status}
                </th>
                <th
                  scope='row'
                  className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'>
                  {res.campaign_name}
                </th>
                <th
                  scope='row'
                  className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'>
                  {res.type}
                </th>
                <th
                  scope='row'
                  className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'>
                  {res.template}
                </th>
                <th
                  scope='row'
                  className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'>
                  {res.recipients}
                </th>
                <th
                  scope='row'
                  className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'>
                  {res.cost}
                </th>
                <th
                  scope='row'
                  className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'>
                  Edit
                </th>
                <th
                  scope='row'
                  className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'>
                  Track
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CampaignTable
