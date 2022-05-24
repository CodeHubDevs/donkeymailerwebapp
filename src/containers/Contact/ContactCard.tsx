import Image from 'next/image'
import React from 'react'

import ContactUser from '@/assets/images/contact-user.png'

interface ContactInfoProps {
  title: string
  description: string
}

const ContactCard = () => {
  return (
    <div className='relative rounded-3xl bg-white px-32 shadow-2xl'>
      <div className='absolute -top-24 -left-4'>
        <Image src={ContactUser} alt='user' />
      </div>
      <div className='my-32 flex flex-col gap-6'>
        <ContactInfo
          title='Address'
          description='2nd Floor, Huazhongfa
Building, No. 90, Fuqian Road, Guanlan, Longhua District, Shenzhen'
        />
        <ContactInfo title='Telephone number' description='0755-23894921' />
        <ContactInfo title='Mobile number' description='13428954268' />
        <ContactInfo title='Email address' description='13428954268@163.com' />
      </div>
    </div>
  )
}

const ContactInfo: React.FC<ContactInfoProps> = ({ title, description }) => {
  return (
    <div>
      <h5 className='mb-2 text-xl font-bold text-primary'>{title}:</h5>
      <p className='w-[400px] pl-16 text-lg text-black50'>{description}</p>
    </div>
  )
}

export default ContactCard
