import { url } from 'inspector'
import Image from 'next/image'
import React from 'react'
import { string } from 'yup'

interface TemplateCardProps {
  name: string
  type: string
  image: any
  file: Location
}

const TemplateCard: React.FC<TemplateCardProps> = ({
  name,
  type,
  image,
  file
}) => {
  const routeChange = () => {
    file = file
    window.location = file
  }

  return (
    <div className='flex flex-col items-center justify-center gap-4 rounded-lg bg-black5 p-8 shadow-lg'>
      <div className='relative h-48 w-80 p-6'>
        <Image src={image} alt='Image' objectFit='cover' />
      </div>
      <div className='text-center'>
        <h3 className='text-lg font-bold'>{name}</h3>
        <p>{type} Postcard</p>
      </div>
      <button
        onClick={routeChange}
        className='rounded-full bg-primary py-1 px-4 font-bold text-white hover:bg-secondary'>
        View Template
      </button>
    </div>
  )
}

export default TemplateCard
