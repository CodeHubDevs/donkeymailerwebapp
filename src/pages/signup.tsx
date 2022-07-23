import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import Link from 'next/link'
import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import * as yup from 'yup'

import { useRegistration } from '@/api'
import Key from '@/assets/images/key.png'
import FormCheckbox from '@/components/FormCheckbox'
import FormInput from '@/components/FormInput'
import PublicLayout from '@/components/layout/PublicLayout'
import Spinner from '@/components/Spinner'
import { capFirstWord } from '@/helpers'

const schema = yup.object({
  email: yup.string().email().required('Required field'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Required field'),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Required field'),
  terms: yup
    .bool()
    .oneOf([true], 'You must agree to the terms and conditions')
    .required('Required field')
})

const SignUp = () => {
  const { execute, isLoading } = useRegistration()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = useCallback(
    async (data: any) => {
      try {
        await execute(data)
        toast.success('Confirmation email has been sent')
      } catch (e: any) {
        const errorMessage = e.response.data.errors.message
        toast.error(capFirstWord(Object.values(errorMessage)[0] as any))
      }
    },
    [execute]
  )

  return (
    <PublicLayout title='Sign Up'>
      <div className='flex items-center gap-16 py-16 pr-32'>
        <div className='flex flex-grow flex-col items-center justify-center rounded-r-2xl bg-white py-32'>
          <div className='mb-10 text-center'>
            <h2 className='text-4xl font-bold'>Get Started!</h2>
            <p className='text-black25'>
              Already have an account?{' '}
              <Link href='/signin'>
                <span className='cursor-pointer font-bold text-primary'>
                  Sign in
                </span>
              </Link>
            </p>
          </div>
          <form
            className='flex w-2/6 flex-col gap-4'
            onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              register={register}
              fieldName='email'
              label='Email Address'
              placeholder='Enter your email address...'
            />
            {Boolean(errors.email) && (
              <span className='text-sm text-red-400'>
                {errors.email?.message}
              </span>
            )}
            <FormInput
              register={register}
              fieldName='password'
              label='Password'
              placeholder='Enter your password...'
              type='password'
            />
            {Boolean(errors.password) && (
              <span className='text-sm text-red-400'>
                {errors.password?.message}
              </span>
            )}
            <FormInput
              register={register}
              fieldName='confirm_password'
              label='Confirm Password'
              placeholder='Confirm your password...'
              type='password'
            />
            {Boolean(errors.confirm_password) && (
              <span className='text-sm text-red-400'>
                {errors.confirm_password?.message}
              </span>
            )}
            <FormCheckbox register={register} fieldName='terms'>
              <span className='text-sm text-black25'>
                I accept the{' '}
                <span className='font-bold text-primary'>
                  Terms & Conditions
                </span>
              </span>
            </FormCheckbox>
            {Boolean(errors.terms) && (
              <span className='text-sm text-red-400'>
                {errors.terms?.message}
              </span>
            )}
            <div className='mt-8 flex items-center justify-center'>
              <button
                className={`rounded-full bg-gradient-to-r from-secondary to-primary py-2 px-6 ${
                  isLoading ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                }`}
                disabled={isLoading}>
                <h5 className='flex gap-2 text-xl font-bold text-white'>
                  {isLoading && <Spinner />}Create Account
                </h5>
              </button>
            </div>
          </form>
        </div>
        <Image src={Key} alt='key' />
      </div>
    </PublicLayout>
  )
}

export default SignUp
