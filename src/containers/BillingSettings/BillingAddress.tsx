import React from 'react'
import { useForm } from 'react-hook-form'

import FormInput from '@/components/FormInput'
import FormSelect from '@/components/FormSelect'

const countryOptions = [
  { value: '', label: 'Select Country' },
  { value: 'US', label: 'United States' },
  { value: 'UK', label: 'United Kingdom' },
  { value: 'CA', label: 'Canada' }
]

const stateOptions = [
  { value: '', label: 'Select State' },
  { value: 'US', label: 'United States' },
  { value: 'UK', label: 'United Kingdom' },
  { value: 'CA', label: 'Canada' }
]

const BillingAddress = () => {
  const [selectedCountry, setSelectedCountry] = React.useState(
    countryOptions[0]
  )
  const [selectedState, setSelectedState] = React.useState(stateOptions[0])
  const { register } = useForm()
  return (
    <div className='mt-8 rounded-2xl bg-white p-8 shadow-md'>
      <h1 className='text-2xl font-bold'>Your Billing Address</h1>
      <form className='flex flex-col items-start px-24'>
        <div className='my-8 flex w-full gap-32'>
          <div className='flex w-full flex-col gap-4'>
            <FormInput
              register={register}
              fieldName='firstName'
              label='First Name'
              placeholder='Enter your first name...'
            />
            <FormInput
              register={register}
              fieldName='companyName'
              label='Company Name'
              placeholder='Enter your company name...'
            />
            <FormInput
              register={register}
              fieldName='firstAddress'
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
              fieldName='zipCode'
              label='Zip Code'
              placeholder='Enter zip code...'
            />
          </div>
          <div className='flex w-full flex-col gap-4'>
            <FormInput
              register={register}
              fieldName='lastName'
              label='Last Name'
              placeholder='Enter your last name...'
            />
            <FormSelect
              options={countryOptions}
              value={selectedCountry}
              onChange={setSelectedCountry}
              label='Country'
            />
            <FormInput
              register={register}
              fieldName='secondAddress'
              label='2nd Line of Address'
              placeholder='Enter address...'
            />
            <FormSelect
              options={stateOptions}
              value={selectedState}
              onChange={setSelectedState}
              label='County/State'
            />
          </div>
        </div>
        <button className='self-end rounded-full bg-primary py-1 px-12 font-bold text-white'>
          Save
        </button>
      </form>
    </div>
  )
}

export default BillingAddress
