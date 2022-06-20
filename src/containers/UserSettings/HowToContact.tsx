import { faWeixin } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface ContactDetailsProps {
  icon: any
  thru: string
}

const ContactDetails: React.FC<ContactDetailsProps> = ({ icon, thru }) => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-4'>
        <FontAwesomeIcon icon={icon} className='h-8 w-8' />
        <span className='font-bold'>Thru {thru}</span>
      </div>
      <input
        type='checkbox'
        className='checked:bg-primary hover:bg-secondary checked:hover:bg-secondary focus:checked:bg-primary'
      />
    </div>
  )
}

const HowToContact = () => {
  return (
    <div className='mt-8 rounded-2xl bg-white p-8 shadow-md'>
      <h1 className='text-2xl font-bold'>How can we contact you?</h1>
      <form className='flex flex-col items-start px-24'>
        <div className='my-8 flex w-2/5 flex-col gap-4'>
          <ContactDetails icon={faMailBulk} thru='Email' />
          <ContactDetails icon={faPhoneSquare} thru='Text/SMS' />
          <ContactDetails icon={faWeixin} thru='Text/SMS' />
        </div>
        <button className='self-end rounded-full bg-primary py-1 px-12 font-bold text-white'>
          Save
        </button>
      </form>
    </div>
  )
}

export default HowToContact
