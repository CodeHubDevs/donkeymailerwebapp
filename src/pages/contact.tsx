import React from 'react'

import PublicLayout from '@/components/layout/PublicLayout'
import ContactCard from '@/containers/Contact/ContactCard'
import ContactForm from '@/containers/Contact/ContactForm'

const Contact = () => {
  return (
    <PublicLayout title='Contact'>
      <div className=' my-32 flex w-full items-center justify-center gap-8 px-32'>
        <ContactCard />
        <ContactForm />
      </div>
    </PublicLayout>
  )
}

export default Contact
