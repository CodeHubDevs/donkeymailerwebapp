import React from 'react'
import Image from 'next/image'

interface CampaignHeaderProps {
  image: any
}

const CampaignHeader: React.FC<CampaignHeaderProps> = ({ image }) => {
  return (
    <div className='lg:text-center'>
      <Image src={image} alt='image' />
      <h3 className='mt-5 text-5xl font-bold text-secondary'>
        Choose a Template size to start
      </h3>
      <p className='mt-8 max-w-2xl text-lg text-black lg:mx-auto'>
        One from the scratch to have everything customized.
      </p>
    </div>
  )
}

export default CampaignHeader
