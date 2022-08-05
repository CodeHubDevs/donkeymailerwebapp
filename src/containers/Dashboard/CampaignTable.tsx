import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

// import ArrowFilled from '@/assets/images/arrow-filled-down.png'
import StatusPin from '@/components/StatusPin'

import { useCampaign } from '@/api'

const dummyData = [
  {
    id: '321432',
    status: 'Draft',
    campaign_name: 'Some Campaign Name',
    type: '6x9 Postcard',
    template: 'template',
    recipients: 32,
    cost: '$24.99'
  },
  {
    id: '321433',
    status: 'Draft',
    campaign_name: 'Some Campaign Name',
    type: '6x9 Postcard',
    template: 'template',
    recipients: 32,
    cost: '$24.99'
  },
  {
    id: '321434',
    status: 'Draft',
    campaign_name: 'Some Campaign Name',
    type: '6x9 Postcard',
    template: 'template',
    recipients: 32,
    cost: '$24.99'
  },
  {
    id: '321435',
    status: 'Draft',
    campaign_name: 'Some Campaign Name',
    type: '6x9 Postcard',
    template: 'template',
    recipients: 32,
    cost: '$24.99'
  },
  {
    id: '321436',
    status: 'Draft',
    campaign_name: 'Some Campaign Name',
    type: '6x9 Postcard',
    template: 'template',
    recipients: 32,
    cost: '$24.99'
  }
]

const CampaignTable = () => {
  const [data, setData] = useState(dummyData)
  const campaigns = useCampaign()

  return (
    <div>
      <div className='mt-10 mb-2 grid grid-cols-2 gap-2'>
        <div>
          <p className='text-2xl font-bold text-black '>My Campaigns</p>
        </div>
        {/* <div className='grid justify-items-end'>
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
        </div> */}
      </div>

      <div className='relative overflow-x-auto rounded-xl bg-white p-4 shadow-md'>
        <div className='flex items-center justify-end'>
          {/* <div>
            <p className='text-2xl font-bold text-primary '>
              Latest Campaigns &nbsp;
              <Image src={ArrowFilled} alt='Arrow' />
            </p>
          </div> */}
          <div className='grid justify-items-end'>
            <div>
              <Link href='campaign/select'>
                <a className='ml-3 rounded-lg bg-primary from-secondary to-primary py-2 px-8 text-white '>
                  <span className='absolute inset-y-0 left-0 flex items-center pl-3'></span>
                  <FontAwesomeIcon
                    icon={faCirclePlus}
                    className='mt-1 cursor-pointer rounded-full bg-primary text-white'
                  />
                  <span className='ml-2 text-center text-sm font-bold text-white'>
                    Create New Campaign
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <table className='mt-5 w-full text-left text-sm text-gray-500'>
          <thead className=' className border-b border-t text-sm text-gray-700'>
            <tr>
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
            {campaigns.data?.map((item: any) => (
              <tr key={item.id} className=' bg-white'>
                <th
                  scope='row'
                  className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'>
                  {item.id}
                </th>
                <th
                  scope='row'
                  className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'>
                  <StatusPin>{item.status}</StatusPin>
                </th>
                <th
                  scope='row'
                  className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'>
                  {item.campaign_name}
                </th>
                <th
                  scope='row'
                  className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'>
                  {item.type}
                </th>
                <th
                  scope='row'
                  className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'>
                  {item.template}
                </th>
                <th
                  scope='row'
                  className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'>
                  {item.recipients}
                </th>
                <th
                  scope='row'
                  className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'>
                  {item.rates}
                </th>
                <th
                  scope='row'
                  className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'>
                  {item.rates}
                </th>
                <th
                  scope='row'
                  className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'>
                  <button className='font-bold text-primary hover:text-secondary'>
                    Track
                  </button>
                </th>
                <th
                  scope='row'
                  className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'>
                  <button className='font-bold text-red-500 hover:text-red-600'>
                    Delete
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

export default CampaignTable
