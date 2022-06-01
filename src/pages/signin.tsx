import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Key from '@/assets/images/key.png'
import DividerText from '@/components/DividerText'
import FormCheckbox from '@/components/FormCheckbox'
import FormInput from '@/components/FormInput'

const SignIn = () => {
  return (
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
          <h5 className='text-xl font-bold text-white'>Sign in with WeChat</h5>
        </button>
        <div className='w-2/5 px-8 py-4'>
          <DividerText>
            <p className='text-black25'>or</p>
          </DividerText>
        </div>
        <form className='flex w-2/6 flex-col gap-4'>
          <FormInput label='Email Address' />
          <FormInput label='Password' type='password' />
          <FormCheckbox>
            <span className='text-sm text-black25'>
              Remember me (Please use this feature on a private device)
            </span>
          </FormCheckbox>
          <div className='mt-8 flex flex-col items-center justify-center gap-2'>
            <button className='rounded-full bg-gradient-to-r from-secondary to-primary py-2 px-6'>
              <h5 className='text-xl font-bold text-white'>Sign In</h5>
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
  )
}

export default SignIn
