import React from 'react'
import Image from 'next/image'

import EmailSentIcon from '@/assets/images/email-sent.svg'
import PublicLayout from '@/components/layout/PublicLayout'

export default function EmailSent() {
  return (
    <PublicLayout isFooter={false}>
      <div className='py-12'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='lg:text-center'>
            <p
              className='text-base text-5xl font-semibold'
              style={{
                color: '#45CEDE',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '50px'
              }}>
              Email has been sent!
            </p>
            <p className=' mt-2 leading-8 tracking-tight text-gray-600 sm:text-lg'>
              We sent a password reset link to
              <br /> ......@gmail.com
            </p>
            <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
              <Image src={EmailSentIcon} alt='email-sent' />
            </p>
            <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
              Didn&apos;t receive the link?
              <a href='#' style={{ color: '#45CEDE' }}>
                Resend
              </a>
            </p>
            <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
              Back to
              <a href='#' style={{ color: '#45CEDE' }}>
                Sign In
              </a>
            </p>
          </div>

          <div className='mt-10'></div>
        </div>

        <div className='mt-10'></div>
      </div>
    </div>
  )
}
