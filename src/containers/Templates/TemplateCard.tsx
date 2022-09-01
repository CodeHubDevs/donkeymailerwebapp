import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'

import useProcessStore from '@/stores/useProcessStore'

interface TemplateCardProps {
  name: string
  type: string
  image: any
  file: Location
  stannpId: string
}

const TemplateCard: React.FC<TemplateCardProps> = ({
  name,
  type,
  image,
  file,
  stannpId
}) => {
  const { setTemplateId }: any = useProcessStore()
  const router = useRouter()

  const routeChange = () => {
    window.location = file
  }

  const selectTemplate = useCallback(async () => {
    setTemplateId(stannpId)
    await router.push('/app/recipient/select')
  }, [setTemplateId, stannpId, router])

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
        onClick={() => (router.query.select ? selectTemplate() : routeChange())}
        className='rounded-full bg-primary py-1 px-4 font-bold text-white hover:bg-secondary'>
        {router.query.select ? 'Select Template' : 'View Template'}
      </button>
    </div>
  )
}

export default TemplateCard
