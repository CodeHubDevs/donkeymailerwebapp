import { faMessage } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import React from 'react'

import Browser from '@/assets/images/browser.png'
import Cycle from '@/assets/images/cycle.png'
import Files from '@/assets/images/files.png'
import Globe from '@/assets/images/globe.png'
import Monitor from '@/assets/images/monitor.png'
import Logo from '@/assets/logo/donkeylogo.png'
import Divider from '@/components/Divider'
import DividerIcon from '@/components/DividerIcon'

interface Card {
  title: string
  image: any
  description: string
}

const Main = () => {
  return (
    <section className='-mt-24 bg-white py-32 px-32'>
      <div className='mx-32 mt-16'>
        <DividerIcon icon={faMessage} />
      </div>
      <h3 className='mx-16 mt-8 text-center text-2xl text-secondary'>
        The preferred method of communication for overseas consumers Mailing
        Postcards and Letters that can help you get closer to U.S. consumers
        quickly
      </h3>
      <div className='relative mx-32 mt-32 rounded-3xl bg-secondary10 p-20'>
        <div className='absolute -top-9 -left-20 flex items-center'>
          <Image src={Logo} alt='logo' />
          <h3 className='text-2xl font-bold'>
            What is{' '}
            <span className='bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent'>
              DonkeyMailer
            </span>
            ?
          </h3>
        </div>
        <h4 className='text-center text-xl font-semibold text-black50'>
          Direct mail automation tool supporting US, multi-format letters and
          postcards
        </h4>
      </div>
      <div className='mx-32 mt-40 grid grid-cols-2 gap-6'>
        <MainCard
          title='US Direct Mail'
          image={Globe}
          description='Currently convering the entire US'
        />
        <MainCard
          title='Various Product Specifications'
          image={Files}
          description='There are 12 specifications for postcards and letters. Better adapt to marketing needs and bring higher conversion rate and ROI.'
        />
      </div>
      <div className='my-16'>
        <Divider />
      </div>
      <div className='mx-32 grid grid-cols-3 gap-4'>
        <SubCard
          title='Status Update'
          image={Monitor}
          description='The status from order placement, production to delivery can be updated in real time, and the progress of the order can be followed up.'
        />
        <SubCard
          title='Clear Management'
          image={Browser}
          description='According to the requirements of the enterprise, dozens of sub-accounts can be set up to facilitate management. The financial data is clear and the accounting is accurate.'
        />
        <SubCard
          title='Open API'
          image={Cycle}
          description='We support API docking at  the system level. Meet the use of internal management tools in large enterprises.'
        />
      </div>
    </section>
  )
}

const MainCard: React.FC<Card> = ({ title, image, description }) => {
  return (
    <div className='relative flex flex-col items-center rounded-3xl p-10 shadow-2xl'>
      <div className='absolute -top-16 h-32 w-40'>
        <Image src={image} alt='Image' layout='fill' objectFit='cover' />
      </div>
      <h5 className='mt-16 mb-8 text-xl font-bold text-primary'>{title}</h5>
      <p className='text-center text-lg text-black50'>{description}</p>
    </div>
  )
}

const SubCard: React.FC<Card> = ({ title, image, description }) => {
  return (
    <div className='rounded-3xl bg-secondary10 shadow-2xl'>
      <div className='rounded-t-2xl bg-white py-8'>
        <h5 className='text-center text-xl font-bold text-primary'>{title}</h5>
      </div>
      <div className='flex flex-col items-center p-8'>
        <p className='mb-8 h-48 text-center text-lg text-black50'>
          {description}
        </p>
        <div className='relative h-32 w-40'>
          <Image src={image} alt='Image' layout='fill' objectFit='cover' />
        </div>
      </div>
    </div>
  )
}

export default Main
