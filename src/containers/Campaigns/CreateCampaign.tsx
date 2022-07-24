import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import CampaignImage from '@/assets/images/campaign.png'
import FormInput from '@/components/FormInput'
import FormSelect from '@/components/FormSelect'
import { RATES } from '@/data/rates'

interface RateItemProps {
  tier: string
  rate: string
}

const postageOptions = [
  {
    value: 'first_class',
    label: 'First Class'
  },
  {
    value: 'standard',
    label: 'Standard'
  }
]

const RateItem: React.FC<RateItemProps> = ({ tier, rate }) => {
  return (
    <div className='flex items-center justify-end gap-8'>
      <p>{tier}</p>
      <p className='font-bold'>&#xA5;{rate}</p>
    </div>
  )
}

const CreateCampaign = () => {
  const [selectedPostage, setSelectedPostage] = useState(postageOptions[0])
  const router = useRouter()
  const { register } = useForm()

  useEffect(() => {
    if (!router.query.destination || !router.query.type) {
      // eslint-disable-next-line
      router.push('/app/campaign/select')
    }
  }, [router])

  const filteredRates = RATES.filter(
    ({ destination }) => destination === router.query.destination
  )
    .map(({ postageType }) =>
      postageType?.filter(({ type }) => type === router.query.type)
    )[0]
    ?.map(({ rates }) => rates)[0]

  return (
    <div className='mt-10'>
      <div className='flex flex-col items-center'>
        <div className='relative h-40 w-40'>
          <Image
            src={CampaignImage}
            alt='Image'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <h3 className='text-2xl font-bold text-secondary'>
          Start and Create your New Campaign
        </h3>
      </div>
      <form className='mt-12 rounded-lg bg-white p-16 shadow-lg'>
        <div className='grid grid-cols-2 gap-x-8'>
          <div className='flex flex-col gap-4'>
            <h3 className='text-lg font-bold'>Campaign Name</h3>
            <FormInput
              fieldName='campaign-name'
              register={register}
              placeholder='Enter the name of your campaign...'
            />
            <div className='flex items-center justify-between'>
              <p>Choose a postage class</p>
              <FormSelect
                className='w-72'
                options={postageOptions}
                value={selectedPostage}
                onChange={setSelectedPostage}
              />
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-lg font-bold'>Rates</h3>
            <div className='flex items-center justify-between'>
              <p>Postage Destination</p>
              <p className='font-bold text-black50'>
                {router.query.destination?.toString().toUpperCase()}
              </p>
            </div>
            <div className='flex items-center justify-between'>
              <p>Postage Type</p>
              <p className='font-bold text-black50'>{router.query.type}</p>
            </div>
            <div className='flex flex-col gap-2 border-b border-t border-black5 py-4'>
              {filteredRates?.map(({ tier, rate }) => (
                <RateItem key={tier} tier={tier} rate={rate} />
              ))}
            </div>
          </div>
        </div>
        <button
          type='button'
          className='ml-auto mt-8 block rounded-full bg-primary py-1 px-8 font-bold text-white'>
          Create
        </button>
      </form>
    </div>
  )
}

export default CreateCampaign
