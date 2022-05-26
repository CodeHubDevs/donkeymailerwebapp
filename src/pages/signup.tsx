import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Key from '@/assets/images/key.png'
import FormCheckbox from '@/components/FormCheckbox'
import FormInput from '@/components/FormInput'

const SignUp = () => {
  return (
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
        <form className='flex w-2/6 flex-col gap-4'>
          <FormInput label='Email Address' />
          <FormInput label='Password' type='password' />
          <FormInput label='Confirm Password' type='password' />
          <FormCheckbox>
            <span className='text-sm text-black25'>
              I accept the{' '}
              <span className='font-bold text-primary'>Terms & Conditions</span>
            </span>
          </FormCheckbox>
          <div className='mt-8 flex items-center justify-center'>
            <button className='rounded-full bg-gradient-to-r from-secondary to-primary py-2 px-6'>
              <h5 className='text-xl font-bold text-white'>Create Account</h5>
            </button>
          </div>
        </form>
      </div>
      <Image src={Key} alt='key' />
    </div>
  )
}

export default SignUp
