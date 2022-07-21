import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { useProfile } from '@/api'
import FormInput from '@/components/FormInput'

const schema = yup.object({
  email: yup.string().email().required('Required field'),
  first_name: yup.string().required('Required field'),
  last_name: yup.string().required('Required field'),
  company: yup.string().required('Required field')
})

const UserDetails = () => {
  const { register, setValue, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  })
  const { data: profile } = useProfile()

  console.log(profile)

  useEffect(() => {
    // eslint-disable-next-line
    if (profile) {
      setValue('first_name', profile.first_name)
      setValue('last_name', profile.last_name)
      setValue('email', profile.email)
      setValue('company', profile.company)
    }
  }, [profile, setValue])

  const onSubmit = useCallback(async (data: any, id: any) => {
    console.log({ data, id })
  }, [])

  return (
    <div className='mt-8 rounded-2xl bg-white p-8 shadow-md'>
      <h1 className='text-2xl font-bold'>User Details</h1>
      <div className='flex flex-col items-center'>
        <FontAwesomeIcon
          icon={faUser}
          className='h-12 w-12 rounded-full bg-gradient-to-r from-secondary to-primary p-4 text-white'
        />
        <div className='mt-4 flex items-center gap-1'>
          {
            // eslint-disable-next-line
            profile?.firstName && profile?.lastName ? (
              <>
                <span className='text-lg font-bold text-primary'>
                  {profile.first_name}
                </span>
                <span className='text-lg font-bold text-primary'>
                  {profile.last_name}
                </span>
              </>
            ) : (
              <span className='text-lg font-bold text-primary'>User</span>
            )
          }
        </div>
        <span className='font-bold'>Tier I</span>
      </div>
      <form
        className='flex flex-col items-start px-24'
        onSubmit={() =>
          handleSubmit(async (data) => await onSubmit(data, profile.public_id))
        }>
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
              fieldName='email'
              label='Email'
              placeholder='test@mail.com'
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
              fieldName='last_name'
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
        <button
          type='button'
          className='self-end rounded-full bg-primary py-1 px-12 font-bold text-white'>
          Save
        </button>
      </form>
    </div>
  )
}

export default UserDetails
