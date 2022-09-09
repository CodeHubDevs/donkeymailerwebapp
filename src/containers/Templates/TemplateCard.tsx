import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
import toast from 'react-hot-toast'

import { useSelectTemplate } from '@/api/useSelectTemplate'
import useProcessStore from '@/stores/useProcessStore'

interface TemplateCardProps {
  name: string
  type: string
  id: string
  image: any
  file: Location
  stannpId: string
}

const TemplateCard: React.FC<TemplateCardProps> = ({
  name,
  type,
  id,
  image,
  file,
  stannpId
}) => {
  const { setTemplateId, campaign }: any = useProcessStore()
  const router = useRouter()

  const routeChange = () => {
    window.location = file
  }

  const { execute } = useSelectTemplate()

  const selectTemplate = useCallback(async () => {
    setTemplateId(stannpId)
    try {
      await execute({
        campaign_id: campaign.dbId,
        templates_id: id.toString(),
        country: 'Not'
      })
      await router.push('/app/recipient/select?new=true')
    } catch (error) {
      toast.error('Something went Wrong')
    }
  }, [setTemplateId, stannpId, router, execute, campaign, id])

  return (
    <div className='flex flex-col items-center justify-center gap-4 rounded-lg bg-black5 p-8 shadow-lg'>
      <div className='relative h-48 w-80 p-6'>
        {!file ? (
          <Image src={image} alt='Image' objectFit='cover' />
        ) : (
          // <h1>Comment out iframe once pagination is implemented</h1>
          <iframe src={file as any} />
        )}
      </div>
      <div className='text-center'>
        <h3 className='text-lg font-bold'>{name}</h3>
        <p>{type} Postcard</p>
      </div>
      <button
        onClick={() => (router.query.new ? selectTemplate() : routeChange())}
        className='rounded-full bg-primary py-1 px-4 font-bold text-white hover:bg-secondary'>
        {router.query.new ? 'Select Template' : 'View Template'}
      </button>
    </div>
  )
}

export default TemplateCard
