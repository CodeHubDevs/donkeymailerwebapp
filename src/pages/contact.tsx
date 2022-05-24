import React from 'react'

import ContactCard from '@/containers/Contact/ContactCard'
import ContactForm from '@/containers/Contact/ContactForm'

const Contact = () => {
  return (
    <div className='mx-64 my-32 flex items-center justify-between'>
      <ContactCard />
      <ContactForm />
    </div>
  )
}

export default Contact
