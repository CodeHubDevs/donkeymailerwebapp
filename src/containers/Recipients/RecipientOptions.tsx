import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import CampaignImage from '@/assets/images/campaign.png'

interface OptionCardProps {
  label: string
  href: string
}

const OptionsCard: React.FC<OptionCardProps> = ({ label, href }) => {
  return (
    <div className='flex flex-col items-center gap-4 rounded-2xl bg-white p-8 shadow-xl'>
      <div className='relative h-40 w-40'>
        <Image
          src={CampaignImage}
          alt='Image'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <h3 className='text-center text-xl font-bold text-primary'>{label}</h3>
      <Link href={href}>
        <a className='rounded-full bg-gradient-to-r from-secondary to-primary py-2 px-8 font-bold text-white'>
          Start Creating
        </a>
      </Link>
    </div>
  )
}

const RecipientOptions = () => {
  return (
    <div className='mt-8 grid grid-cols-3 gap-4'>
      <OptionsCard label='Select From Your Recipient Group' href='group' />
      <OptionsCard label='Upload Recipients' href='upload' />
      <OptionsCard label='Create New Recipient Group' href='create' />
    </div>
  )
}

export default RecipientOptions