import React from 'react'

import PublicLayout from '@/components/layout/PublicLayout'
import ContactCard from '@/containers/Contact/ContactCard'
import ContactForm from '@/containers/Contact/ContactForm'

const Contact = () => {
  return (
    <PublicLayout title='Contact'>
      <div className='mx-64 my-32 flex items-center justify-between'>
        <ContactCard />
        <ContactForm />
      </div>
    </PublicLayout>
  )
}

export default Contact
