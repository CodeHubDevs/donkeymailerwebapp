import React from 'react'
import { useForm } from 'react-hook-form'

import FormInput from '@/components/FormInput'

const ChangePassword = () => {
  const { register } = useForm()
  return (
    <div className='mt-8 rounded-2xl bg-white p-8 shadow-md'>
      <h1 className='text-2xl font-bold'>Change Password</h1>
      <form className='flex flex-col items-start px-24'>
        <div className='my-8 flex w-2/5 flex-col gap-4'>
          <FormInput
            register={register}
            fieldName='currentPassword'
            label='Current Password'
            placeholder='Enter your current password...'
          />
          <FormInput
            register={register}
            fieldName='newPassword'
            label='New Password'
            placeholder='Enter your new password...'
          />
          <FormInput
            register={register}
            fieldName='verifyNewPassword'
            label='Verify New Password'
            placeholder='Verify your new password...'
          />
        </div>
        <button className='self-end rounded-full bg-primary py-1 px-12 font-bold text-white'>
          Save
        </button>
      </form>
    </div>
  )
}

export default ChangePassword
