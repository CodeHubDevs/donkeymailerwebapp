import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { useAddBillingSettings, useBillingSettings } from '@/api'
import FormInput from '@/components/FormInput'
import FormSelect from '@/components/FormSelect'
import { useAuth } from '@/context/AuthContext'

const countryOptions = [
  { value: '', label: 'Select Country' },
  { value: 'US', label: 'United States' },
  { value: 'UK', label: 'United Kingdom' },
  { value: 'CA', label: 'Canada' }
]

const BillingAddress = () => {
  const [selectedCountry, setSelectedCountry] = React.useState(
    countryOptions[0]
  )
  const { register, handleSubmit, setValue } = useForm()

  const auth = useAuth()

  const { execute } = useAddBillingSettings()
  const { data: billingSetting } = useBillingSettings()

  useEffect(() => {
    if (billingSetting) {
      console.log(billingSetting.results[0])
    }
  }, [billingSetting, setSelectedCountry, setValue])

  const onSubmit = useCallback(
    async (data: any, e: React.FormEvent<HTMLInputElement>) => {
      e.preventDefault()
      console.log(data)
      try {
        await execute({
          ...data,
          country: selectedCountry.value,
          modified_by: 'admin',
          user_id: auth.decoded?.user_id
        })
      } catch (e) {
        console.log(e)
      }
    },
    [execute, selectedCountry, auth.decoded]
  )

  return (
    <div className='mt-8 rounded-2xl bg-white p-8 shadow-md'>
      <h1 className='text-2xl font-bold'>Your Billing Address</h1>
      <form
        onSubmit={handleSubmit(async (data, e: any) => await onSubmit(data, e))}
        className='flex flex-col items-start px-24'>
        <div className='my-8 flex w-full gap-32'>
          <div className='flex w-full flex-col gap-4'>
            <FormInput
              register={register}
              fieldName='first_name'
              label='First Name'
              placeholder='Enter your first name...'
            />
            <FormInput
              register={register}
              fieldName='company_name'
              label='Company Name'
              placeholder='Enter your company name...'
            />
            <FormInput
              register={register}
              fieldName='first_lane_address'
              label='1st Line of Address'
              placeholder='Enter address...'
            />
            <FormInput
              register={register}
              fieldName='city'
              label='Town/City'
              placeholder='Enter town/city...'
            />
            <FormInput
              register={register}
              fieldName='postal_code'
              label='Zip Code'
              placeholder='Enter zip code...'
            />
          </div>
          <div className='flex w-full flex-col gap-4'>
            <FormInput
              register={register}
              fieldName='last_name'
              label='Last Name'
              placeholder='Enter your last name...'
            />
            <FormSelect
              register={register}
              fieldName='country'
              options={countryOptions}
              value={selectedCountry}
              onChange={setSelectedCountry}
              label='Country'
            />
            <FormInput
              register={register}
              fieldName='second_lane_address'
              label='2nd Line of Address'
              placeholder='Enter address...'
            />
          </div>
        </div>
        <button
          type='submit'
          className='self-end rounded-full bg-primary py-1 px-12 font-bold text-white'>
          Save
        </button>
      </form>
    </div>
  )
}

export default BillingAddress
