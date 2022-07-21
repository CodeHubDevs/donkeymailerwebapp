import React from 'react'
import { useForm } from 'react-hook-form'

import FormInput from '@/components/FormInput'
import FormTextArea from '@/components/FormTextArea'

const ContactForm = () => {
  const { register } = useForm()
  return (
    <form className='flex w-full flex-col items-center gap-4 px-32'>
      <div className='flex w-full gap-2'>
        <FormInput
          register={register}
          fieldName='firstName'
          label='First Name'
          placeholder='Enter your First Name...'
        />
        <FormInput
          register={register}
          fieldName='lastName'
          label='Last Name'
          placeholder='Enter your Last Name...'
        />
      </div>
      <FormInput
        register={register}
        fieldName='email'
        label='Email Address'
        placeholder='Enter your Email Address...'
      />
      <FormInput
        register={register}
        fieldName='phoneNumber'
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
