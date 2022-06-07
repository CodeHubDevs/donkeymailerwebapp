import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Lock from '@/assets/images/Lock.svg'
import FormInput from '@/components/FormInput'
import PublicLayout from '@/components/layout/PublicLayout'

const ForgotPassword = () => {
  return (
    <PublicLayout isFooter={false}>
      <div className='mt-16 flex flex-col items-center justify-center gap-4 px-64'>
        <h2 className='text-6xl font-bold text-primary'>Forgot Password?</h2>
        <p className='text-lg text-black50'>
          No worries, we&apos;ll send you reset instructions.
        </p>
        <Image src={Lock} alt='lock' />
        <form className='flex w-2/5 flex-col items-center justify-center gap-4'>
          <FormInput
            label='Email Address'
            placeholder='Enter your email address...'
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
