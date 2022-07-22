import { yupResolver } from '@hookform/resolvers/yup'
import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import * as yup from 'yup'

import { useChangePassword } from '@/api'
import FormInput from '@/components/FormInput'
import Spinner from '@/components/Spinner'

const schema = yup.object({
  old_password: yup.string().required('Required field'),
  new_password: yup
    .string()
    .required('Required field')
    .min(6, 'Password must be at least 6 characters'),
  confirm_password: yup
    .string()
    .required('Required field')
    .oneOf([yup.ref('new_password'), null], 'Passwords must match')
})

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ resolver: yupResolver(schema) })

  const { execute, isLoading } = useChangePassword()

  const onSubmit = useCallback(
    async (data: any) => {
      try {
        await execute(data)
        toast.success('Password has been changed')
        reset()
      } catch (e: any) {
        const errorMessage = e.response.data.old_password

        if (errorMessage) {
          toast.error("Old password doesn't match")
        }
      }
    },
    [execute, reset]
  )

  return (
    <div className='mt-8 rounded-2xl bg-white p-8 shadow-md'>
      <h1 className='text-2xl font-bold'>Change Password</h1>
      <form
        className='flex flex-col items-start px-24'
        onSubmit={handleSubmit(onSubmit)}>
        <div className='my-8 flex w-2/5 flex-col gap-4'>
          <FormInput
            register={register}
            fieldName='old_password'
            label='Current Password'
            type='password'
            placeholder='Enter your current password...'
          />
          {Boolean(errors.old_password) && (
            <p className='text-sm text-red-500'>
              {errors.old_password?.message}
            </p>
          )}
          <FormInput
            register={register}
            fieldName='new_password'
            label='New Password'
            type='password'
            placeholder='Enter your new password...'
          />
          {Boolean(errors.new_password) && (
            <p className='text-sm text-red-500'>
              {errors.new_password?.message}
            </p>
          )}
          <FormInput
            register={register}
            fieldName='confirm_password'
            label='Confirm New Password'
            type='password'
            placeholder='Confirm your new password...'
          />
          {Boolean(errors.confirm_password) && (
            <p className='text-sm text-red-500'>
              {errors.confirm_password?.message}
            </p>
          )}
        </div>
        <button
          type='submit'
          className={`flex items-center gap-2 self-end rounded-full bg-primary py-1 px-12 font-bold text-white ${
            isLoading ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
          }`}>
          {isLoading && <Spinner />} Save
        </button>
      </form>
    </div>
  )
}

export default ChangePassword
