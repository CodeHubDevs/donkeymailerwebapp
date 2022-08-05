import React from 'react'
import * as yup from 'yup'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import FormInput from '@/components/FormInput'
import AppNavBar from '@/components/AppNavBar'
import { yupResolver } from '@hookform/resolvers/yup'
import PrivateLayout from '@/components/layout/PrivateLayout'
import CampaignImage from '@/assets/images/campaign.png'

const CreateCampaign = () => {
  const schema = yup.object({
    email: yup.string().email().required('Required field')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  return (
    <PrivateLayout>
      <AppNavBar pageName='Campaign' />
      <div className='lg:text-center'>
        <Image src={CampaignImage} alt='image' />
        <h3 className='mt-5 text-3xl font-bold text-secondary'>
          Start and Create your Own Campaign
        </h3>
      </div>

      <div className='relative  rounded-xl bg-black5 p-4 shadow-md'>
        <div className='container mx-auto flex'>
          <div className='h-14 grow'>
            <FormInput
              fieldName='campaign_name'
              label='Campaign Name'
              placeholder='Enter the name of your campaign'
              register={register}
              className='campaign-name-input'
            />
          </div>
          <div className='h-14 grow'>03</div>
        </div>
      </div>
    </PrivateLayout>
  )
}

export default CreateCampaign
