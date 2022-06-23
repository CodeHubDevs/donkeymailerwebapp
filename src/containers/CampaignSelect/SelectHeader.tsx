import Image from 'next/image'
import React from 'react'

interface SelectHeaderProps {
  image: any
}

const SelectHeader: React.FC<SelectHeaderProps> = ({ image }) => {
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

export default SelectHeader
