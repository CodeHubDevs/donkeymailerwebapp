import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useForm } from 'react-hook-form'

import FormInput from '@/components/FormInput'

const UserDetails = () => {
  const { register } = useForm()
  return (
    <div className='mt-8 rounded-2xl bg-white p-8 shadow-md'>
      <h1 className='text-2xl font-bold'>User Details</h1>
      <div className='flex flex-col items-center'>
        <FontAwesomeIcon
          icon={faUser}
          className='h-12 w-12 rounded-full bg-gradient-to-r from-secondary to-primary p-4 text-white'
        />
        <div className='mt-4 flex items-center gap-1'>
          <span className='text-lg font-bold text-primary'>Firstname</span>
          <span className='text-lg font-bold text-primary'>Lastname</span>
        </div>
        <span className='font-bold'>Tier I</span>
      </div>
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
              fieldName='email'
              label='Email'
              placeholder='test@email.com'
              disabled
            />
            <FormInput
              register={register}
              fieldName='title'
              label='Title'
              placeholder='Enter your title...'
            />
            <FormInput
              register={register}
              fieldName='jobTitle'
              label='Job Title'
              placeholder='Enter your job title...'
            />
          </div>
          <div className='flex w-full flex-col gap-4'>
            <FormInput
              register={register}
              fieldName='lastName'
              label='Last Name'
              placeholder='Enter your last name...'
            />
            <FormInput
              register={register}
              fieldName='phoneNumber'
              label='Phone Number'
              placeholder='Enter your phone number...'
            />
            <FormInput
              register={register}
              fieldName='company'
              label='Company Name'
              placeholder='Enter your company name...'
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

export default UserDetails
