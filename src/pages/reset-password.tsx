import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { useResetPassword } from '@/api'
import Lock from '@/assets/images/Lock.svg'
import FormInput from '@/components/FormInput'
import PublicLayout from '@/components/layout/PublicLayout'

const schema = yup.object({
  email: yup.string().email().required('Required field')
})

const ResetPassword = () => {
  const router = useRouter()
  const query = router.query
  const { execute } = useResetPassword()

  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = useCallback(
    async (data: any) => {
      console.log(data)
      try {
        await execute(data)
      } catch (e) {
        console.error(e)
      }
    },
    [execute]
  )
  console.log(query.id)
  return (
    <PublicLayout isFooter={false}>
      <div className='mt-16 flex flex-col items-center justify-center gap-4 px-64'>
        <h2 className='text-4xl font-bold text-primary'>Set New Password</h2>
        <p className='text-md text-center text-black50'>
          Your new password must be different to <br />
          previously used password.
        </p>
        <Image src={Lock} alt='lock' />
        <form
          className='flex w-2/5 flex-col items-center justify-center gap-4'
          onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            fieldName='newPassword'
            label='New Password'
            type='password'
            register={register}
          />
          <FormInput
            fieldName='confirmPassword'
            label='Confirm Password'
            type='password'
            register={register}
          />
          <button className='rounded-full bg-primary px-8 py-2 text-white'>
            Reset Password
          </button>
        </form>
        <p className='mt-4'>
          Back to{' '}
          <Link href='/signin'>
            <a className='font-bold text-primary'>Sign in</a>
          </Link>
        </p>
      </div>
    </PublicLayout>
  )
}

export default ResetPassword
