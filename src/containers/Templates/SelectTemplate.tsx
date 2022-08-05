import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import CampaignPostCard from '@/assets/images/campaign-card.png'
import CampaignImage from '@/assets/images/campaign.png'
import CampaignEnvelope from '@/assets/images/envelope-card.png'
import SelectMenu from '@/components/SelectMenu'

import TemplateCard from './TemplateCard'

const dummyTemplates: any = [
  {
    id: '1',
    name: 'Name Template',
    type: 'A5'
  },
  {
    id: '2',
    name: 'Name Template',
    type: 'A5'
  },
  {
    id: '3',
    name: 'Name Template',
    type: 'A6'
  },
  {
    id: '4',
    name: 'Name Template',
    type: 'A5-ENV'
  }
]

const typeOptions = [
  { value: 'all', label: 'All' },
  { value: 'A5', label: 'A5' },
  { value: 'A6', label: 'A6' },
  { value: 'A5-ENV', label: 'A5-ENV' }
]

const SelectTemplate = () => {
  const [data] = useState(dummyTemplates)
  const [selectedType, setSelectedType] = useState(typeOptions[0])

  const filteredData = data.filter(
    (item: any) => item.type === selectedType.value
  )

  return (
    <div className='mt-10'>
      <div className='flex items-center justify-between'>
        <h3 className='text-2xl font-bold'>My Templates</h3>
      </div>
      <div className='mt-4 rounded-lg bg-white p-8 shadow-lg'>
        {data.length > 0 ? (
          <>
            <div className='flex items-center justify-between'>
              <SelectMenu
                isLeft
                options={typeOptions}
                value={selectedType}
                onChange={setSelectedType}
              />
              <Link href='template/create'>
                <a
                  type='button'
                  className='rounded-lg bg-primary py-2 px-8 text-white '>
                  <FontAwesomeIcon
                    icon={faCirclePlus}
                    className='mt-1 cursor-pointer rounded-full bg-primary text-white'
                  />
                  <span className='ml-2 text-center text-sm font-bold text-white'>
                    Create New Template
                  </span>
                </a>
              </Link>
            </div>
            <div className='mt-4 grid grid-cols-3 gap-4'>
              {selectedType.value === 'all'
                ? data.map((item: any) => (
                    <TemplateCard
                      key={item.id}
                      name={item.name}
                      type={item.type}
                      image={
                        item.type.includes('Postcard')
                          ? CampaignPostCard
                          : CampaignEnvelope
                      }
                    />
                  ))
                : filteredData.map((item: any) => (
                    <TemplateCard
                      key={item.id}
                      name={item.name}
                      type={item.type}
                      image={
                        item.type.includes('Postcard')
                          ? CampaignPostCard
                          : CampaignEnvelope
                      }
                    />
                  ))}
            </div>
          </>
        ) : (
          <div className='flex min-h-[35vh] flex-col items-center justify-center gap-4'>
            <div className='relative h-40 w-40'>
              <Image
                src={CampaignImage}
                alt='Image'
                layout='fill'
                objectFit='cover'
              />
            </div>
            <h3 className='text-lg font-bold text-primary'>
              Sorry you don&apos;t have any saved templates.
            </h3>
            <button
              type='button'
              className='rounded-lg bg-primary py-2 px-8 text-white '>
              <FontAwesomeIcon
                icon={faCirclePlus}
                className='mt-1 cursor-pointer rounded-full bg-primary text-white'
              />
              <span className='ml-2 text-center text-sm font-bold text-white'>
                Create New Template
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default SelectTemplate
