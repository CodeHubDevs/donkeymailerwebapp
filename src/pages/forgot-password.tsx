import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import Link from 'next/link'
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

const ForgotPassword = () => {
  const { execute, isLoading } = useResetPassword()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

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

  return (
    <PublicLayout isFooter={false}>
      <div className='mt-16 flex flex-col items-center justify-center gap-4 px-64'>
        <h2 className='text-6xl font-bold text-primary'>Forgot Password?</h2>
        <p className='text-lg text-black50'>
          No worries, we&apos;ll send you reset instructions.
        </p>
        <Image src={Lock} alt='lock' />
        <form
          className='flex w-2/5 flex-col items-center justify-center gap-4'
          onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            fieldName='email'
            label='Email Address'
            placeholder='Enter your email address...'
            register={register}
          />
          <button className='rounded-full bg-primary px-8 py-2 text-white'>
            Send
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

export default ForgotPassword
