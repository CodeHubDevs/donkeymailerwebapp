import Image from 'next/image'
import React from 'react'

interface SelectHeaderProps {
  image: any
}

const SelectHeader: React.FC<SelectHeaderProps> = ({ image }) => {
  return (
    <div className='mt-10 flex flex-col items-center justify-center gap-2'>
      <div className='relative h-40 w-40'>
        <Image src={image} alt='Image' layout='fill' objectFit='cover' />
      </div>
      <h3 className='text-2xl font-bold text-secondary'>
        Choose a Template size to start
      </h3>
      <p className='max-w-xl text-black lg:mx-auto'>
        One from the scratch to have everything customized.
      </p>
    </div>
  )
}

export default SelectHeader
