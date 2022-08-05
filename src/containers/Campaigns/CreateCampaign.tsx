import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import * as yup from 'yup'

import { useCreateCampaign } from '@/api'
import CampaignImage from '@/assets/images/campaign.png'
import FormInput from '@/components/FormInput'
import FormSelect from '@/components/FormSelect'
import { useAuth } from '@/context/AuthContext'
import { RATES } from '@/data/rates'
import useProcessStore from '@/stores/useProcessStore'

const schema = yup.object({
  campaign_name: yup.string().required('Campaign name is required')
})

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
  const { execute } = useCreateCampaign()
  const { setCampaign }: any = useProcessStore()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const auth = useAuth()

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

  const onSubmit = useCallback(
    async (data: any) => {
      const payload = {
        ...data,
        postage_class: selectedPostage.value,
        postage_destination: router.query.destination,
        type: router.query.type,
        modified_by: 'admin',
        status: 'Draft',
        action_status: 'Select Templates',
        user_id: auth.decoded?.user_id
      }
      try {
        const {
          data: { id }
        } = await execute(payload)
        toast.success('Campaign created successfully')
        setCampaign(id)
        await router.push('/app/recipient/select')
      } catch (e: any) {
        toast.error(e.response.data.detail)
      }
    },
    [execute, selectedPostage, router, auth.decoded?.user_id, setCampaign]
  )

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
      <form
        className='mt-12 rounded-lg bg-white p-16 shadow-lg'
        onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-2 gap-x-8'>
          <div className='flex flex-col gap-4'>
            <h3 className='text-lg font-bold'>Campaign Name</h3>
            <FormInput
              fieldName='campaign_name'
              register={register}
              placeholder='Enter the name of your campaign...'
              errors={errors.campaign_name}
            />
            <div className='flex items-center justify-between'>
              <p>Choose a postage class</p>
              <FormSelect
                className='w-72'
                options={postageOptions}
                value={selectedPostage}
                onChange={setSelectedPostage}
                fieldName='postage_class'
                register={register}
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
          type='submit'
          className='ml-auto mt-8 block rounded-full bg-primary py-1 px-8 font-bold text-white'>
          Create
        </button>
      </form>
    </div>
  )
}

export default CreateCampaign
