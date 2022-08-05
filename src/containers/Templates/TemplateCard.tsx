import Image from 'next/image'
import React from 'react'

interface TemplateCardProps {
  name: string
  type: string
  image: any
}

const TemplateCard: React.FC<TemplateCardProps> = ({ name, type, image }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 rounded-lg bg-black5 p-8 shadow-lg'>
      <div className='relative h-48 w-80 p-6'>
        <Image src={image} alt='Image' objectFit='cover' />
      </div>
      <div className='text-center'>
        <h3 className='text-lg font-bold'>{name}</h3>
        <p>{type} Postcard</p>
      </div>
      <button className='rounded-full bg-primary py-1 px-4 font-bold text-white hover:bg-secondary'>
        View Template
      </button>
    </div>
  )
}

export default TemplateCard
