import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import * as yup from 'yup'

import { useSignin } from '@/api'
import Key from '@/assets/images/key.png'
import DividerText from '@/components/DividerText'
import FormCheckbox from '@/components/FormCheckbox'
import FormInput from '@/components/FormInput'
import PublicLayout from '@/components/layout/PublicLayout'
import Spinner from '@/components/Spinner'
import { useAuth } from '@/context/AuthContext'

const schema = yup.object({
  email: yup.string().email().required('Required field'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Required field')
})

const SignIn = () => {
  const router = useRouter()
  const auth = useAuth()

  useEffect(() => {
    // eslint-disable-next-line
    if (auth.token) {
      // eslint-disable-next-line
      router.replace('/app/dashboard')
    }
  }, [auth.token, router])

  const { execute, isLoading } = useSignin()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = useCallback(
    async (data: any) => {
      try {
        const payload = await execute(data)
        const token = payload.data.results.tokens.access
        const refresh = payload.data.results.tokens.refresh
        localStorage.setItem('token', token)
        localStorage.setItem('refresh', refresh)
        auth.signIn()
        toast.success('Welcome back!')
      } catch (e: any) {
        toast.error(e.response.data.detail)
      }
    },
    [execute, auth]
  )
  return (
    <PublicLayout title='Sign In'>
      <div className='flex items-center gap-16 py-16 pr-32'>
        <div className='flex flex-grow flex-col items-center justify-center rounded-r-2xl bg-white py-32'>
          <div className='mb-10 text-center'>
            <h2 className='text-4xl font-bold'>Welcome back!</h2>
            <p className='text-black25'>
              Don&apos;t have an account?{' '}
              <Link href='/signup'>
                <span className='cursor-pointer font-bold text-primary'>
                  Create an Account
                </span>
              </Link>
            </p>
          </div>
          <button className='mb-8 rounded-3xl bg-green-500 px-8 py-4'>
            <h5 className='text-xl font-bold text-white'>
              Sign in with WeChat
            </h5>
          </button>
          <div className='w-2/5 px-8 py-4'>
            <DividerText>
              <p className='text-black25'>or</p>
            </DividerText>
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
            <FormCheckbox register={register} fieldName='terms'>
              <span className='text-sm text-black25'>
                Remember me (Please use this feature on a private device)
              </span>
            </FormCheckbox>
            {Boolean(errors.terms) && (
              <span className='text-sm text-red-400'>
                {errors.terms?.message}
              </span>
            )}
            <div className='mt-8 flex flex-col items-center justify-center gap-2'>
              <button
                className={`rounded-full bg-gradient-to-r from-secondary to-primary py-2 px-6 ${
                  isLoading ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                }`}
                disabled={isLoading}>
                <h5 className='flex gap-2 text-xl font-bold text-white'>
                  {isLoading && <Spinner />}Sign in
                </h5>
              </button>
              <p className='text-sm text-black25'>
                Forgot password? Click{' '}
                <Link href='/forgot-password'>
                  <span className='cursor-pointer font-bold text-primary'>
                    here
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </div>
        <Image src={Key} alt='key' />
      </div>
    </PublicLayout>
  )
}

export default SignIn
