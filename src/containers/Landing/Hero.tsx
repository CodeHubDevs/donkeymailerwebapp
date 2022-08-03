import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import MailBox from '@/assets/images/mailbox.png'
import OpenMail from '@/assets/images/openmail.png'
import Tickets from '@/assets/images/tickets.png'

interface HeroCardProps {
  title: string
  image: any
  description: string
  className?: string
}

const Hero = () => {
  return (
    <section className='mt-10 flex w-full items-center justify-between gap-16 px-32'>
      <div className='flex flex-col items-start gap-8'>
        <h1 className='w-[600px] text-3xl font-bold'>
          Online Order, Efficient Printing, and Fast Delivery
        </h1>
        <Link href='/signin'>
          <a className='flex items-center justify-center rounded-full bg-primary py-2 px-2'>
            <h5 className='mr-8 ml-2 text-lg font-bold text-white'>
              Start Now
            </h5>
            <div className='rounded-full bg-white px-8 text-2xl text-primary'>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </a>
        </Link>
      </div>
      <div className='grid grid-cols-2 justify-center gap-4'>
        <HeroCard
          title='Affordable'
          image={Tickets}
          description='US postcards as low as $5/piece'
        />
        <HeroCard
          title='Efficient Postage'
          image={MailBox}
          description='Average US delivery time of 3-5 business days from order creation'
        />
        <HeroCard
          title='One Start, Flexible and Convenient'
          image={OpenMail}
          description='Directly connected to the production end equipment of the
local printing factory in the United States, and the whole process is automated.
Whether it is sending one sheet or 100,000 sheets, automatic production
and efficient mailing can be realized.'
          className='col-span-2'
        />
      </div>
    </section>
  )
}

const HeroCard: React.FC<HeroCardProps> = ({
  title,
  image,
  description,
  className = ''
}) => {
  return (
    <div
      className={`flex flex-col items-center gap-8 rounded-3xl bg-white p-8 shadow-lg ${className}`}>
      <h5 className='h-10 text-center text-xl font-bold text-primary'>
        {title}
      </h5>
      <div className='relative h-32 w-32'>
        <Image src={image} alt='Image' layout='fill' objectFit='cover' />
      </div>
      <p className='text-center text-black50'>{description}</p>
    </div>
  )
}

export default Hero
