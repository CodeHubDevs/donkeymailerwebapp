import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useCallback, useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'

import { useProfile, useUserSettings } from '@/api'
import FormInput from '@/components/FormInput'
import Spinner from '@/components/Spinner'
import { useAuth } from '@/context/AuthContext'

const UserDetails = () => {
  const { register, setValue, handleSubmit } = useForm()
  const { data: profile, isValidating, mutate } = useProfile()
  const { execute } = useUserSettings()

  const auth = useAuth()

  const isLoading = useMemo(() => {
    return isValidating
  }, [isValidating])

  useEffect(() => {
    if (profile) {
      console.log(profile)
      setValue('first_name', profile.first_name)
      setValue('last_name', profile.last_name)
      setValue('email', profile.email)
      setValue('company', profile.company)
      setValue('contact', profile.contact)
      setValue('job_title', profile.job_title)
    }
  }, [profile, setValue])

  const onSubmit = useCallback(
    async (data: any, e: React.FormEvent<HTMLInputElement>) => {
      console.log({ data })
      e.preventDefault()
      try {
        await execute(data)
        await mutate(`/api/users/${auth.decoded?.user_id}/`)
      } catch (e) {
        console.log(e)
      }
    },
    [execute, mutate, auth.decoded]
  )

  return (
    <div className='mt-8 rounded-2xl bg-white p-8 shadow-md'>
      <h1 className='text-2xl font-bold'>User Details</h1>
      {isLoading ? (
        <div className='flex h-[30vh] items-center justify-center'>
          <Spinner />
        </div>
      ) : (
        <>
          <div className='flex flex-col items-center'>
            <FontAwesomeIcon
              icon={faUser}
              className='h-12 w-12 rounded-full bg-gradient-to-r from-secondary to-primary p-4 text-white'
            />
            <div className='mt-4 flex items-center gap-1'>
              {profile?.first_name && profile?.last_name ? (
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
              )}
            </div>
            <span className='font-bold'>Tier I</span>
          </div>
          <form
            className='flex flex-col items-start px-24'
            onSubmit={handleSubmit(
              async (data, e: any) => await onSubmit(data, e)
            )}>
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
                  fieldName='job_title'
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
                  fieldName='contact'
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
              type='submit'
              className='self-end rounded-full bg-primary py-1 px-12 font-bold text-white'>
              Save
            </button>
          </form>
        </>
      )}
    </div>
  )
}

export default UserDetails
