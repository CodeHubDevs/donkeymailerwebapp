import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface SelectCardProps {
  image: any
  title: string
  query?: any
}

const SelectCard: React.FC<SelectCardProps> = ({ image, title, query }) => {
  return (
    <div className='flex flex-col items-center gap-4 rounded-2xl bg-black5 p-8'>
      <div className='relative h-48 w-80'>
        <Image src={image} alt='Image' layout='fill' objectFit='cover' />
      </div>
      <h5 className='mt-5 text-xl font-bold text-black'>{title}</h5>
      <Link href={{ pathname: 'create', query }}>
        <a className='rounded-full bg-primary from-secondary to-primary py-1 px-8'>
          <div className='flex items-center justify-center text-black50'>
            <span className='text-center text-lg font-bold text-white'>
              Select
            </span>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default SelectCard
