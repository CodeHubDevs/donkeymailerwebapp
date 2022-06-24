import Image from 'next/image'
import React from 'react'

interface SelectCardProps {
  image: any
  title: string
  description: string
  detailOne: string
  detailTwo: string
}

const SelectCard: React.FC<SelectCardProps> = ({
  image,
  title,
  description,
  detailOne,
  detailTwo
}) => {
  return (
    <div className='ml-12 mr-12 flex flex-col items-center rounded-2xl bg-black5 p-8'>
      <Image src={image} alt='' />
      <h5 className='mt-5 text-2xl font-bold text-black'>{title}</h5>
      <p className='mb-8 text-center text-base text-black50'>{description}</p>
      <div className='mr-24 ml-24 flex flex-col items-start bg-black5'>
        <p className='text-base text-black50'>{detailOne}</p>
        <p className='text-base text-black50'>{detailTwo}</p>
      </div>
      <button className='mt-10 rounded-2xl bg-primary from-secondary to-primary py-2 px-12'>
        <div className='flex items-center justify-center text-black50'>
          <span className='text-center text-lg font-bold text-white'>
            Select
          </span>
        </div>
      </button>
    </div>
  )
}

export default SelectCard
