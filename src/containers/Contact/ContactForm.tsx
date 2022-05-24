import React from 'react'

import FormInput from '@/components/FormInput'
import FormTextArea from '@/components/FormTextArea'

const ContactForm = () => {
  return (
    <form className='flex w-full flex-col items-center gap-4 px-32'>
      <div className='flex w-full gap-2'>
        <FormInput label='First Name' placeholder='Enter your First Name...' />
        <FormInput label='Last Name' placeholder='Enter your Last Name...' />
      </div>
      <FormInput
        label='Email Address'
        placeholder='Enter your Email Address...'
      />
      <FormInput
        label='Phone Number'
        placeholder='Enter your Phone Number...'
      />
      <FormTextArea label='Message' placeholder='Your Message...' />
      <button className='mt-4 rounded-full bg-gradient-to-r from-secondary to-primary px-8 py-2 font-bold text-white'>
        Submit
      </button>
    </form>
  )
}

export default ContactForm
