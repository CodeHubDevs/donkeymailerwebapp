import Image from 'next/image'
import React from 'react'

interface InspectionCardProps {
  label: string
  image: any
  isReverse?: boolean
}

const InspectionCard: React.FC<InspectionCardProps> = ({
  label,
  image,
  isReverse = false
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-3xl bg-white py-16 text-center shadow-2xl ${
        isReverse ? 'flex-col-reverse' : ''
      }`}>
      <h5
        className={`px-4 text-xl font-bold text-primary ${
          isReverse ? 'pt-8' : 'pb-8'
        }`}>
        {label}
      </h5>
      <div className='relative h-40 w-40'>
        <Image src={image} alt='image' layout='fill' objectFit='contain' />
      </div>
    </div>
  )
}

export default InspectionCard
