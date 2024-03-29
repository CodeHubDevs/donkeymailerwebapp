import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useMemo, useState } from 'react'

import { useTemplateBoard } from '@/api/useTemplateBoard'
import CampaignPostCard from '@/assets/images/campaign-card.png'
import CampaignImage from '@/assets/images/campaign.png'
import CampaignEnvelope from '@/assets/images/envelope-card.png'
import Pagination from '@/components/Pagination'
import SelectMenu from '@/components/SelectMenu'
import Spinner from '@/components/Spinner'
import StepForm from '@/components/StepForm'
import useProcessStore from '@/stores/useProcessStore'

import TemplateCard from './TemplateCard'

const typeOptions = [
  { value: 'all', label: 'All' },
  { value: 'A5', label: 'A5' },
  { value: 'A6', label: 'A6' }
  // { value: 'A5-ENV', label: 'A5-ENV' }
]

const SelectTemplate = () => {
  const router = useRouter()
  const [page, setPage] = useState(1)
  const { data: templatesBoard, isValidating } = useTemplateBoard(page)
  const { campaign }: any = useProcessStore()
  const [selectedType, setSelectedType] = useState<any>(typeOptions[0])

  useEffect(() => {
    if (campaign.type && router.query.new) {
      setSelectedType(
        typeOptions.filter((to: any) => to.value === campaign.type)[0]
      )
    }
  }, [campaign, router])

  const isLoading = useMemo(() => {
    return isValidating || !templatesBoard
  }, [isValidating, templatesBoard])

  const filteredTemplates = useMemo(() => {
    if (!templatesBoard) return []
    if (selectedType.value === 'all') return templatesBoard
    return templatesBoard.filter(
      (t: any) => t.specifications === selectedType.value
    )
  }, [selectedType, templatesBoard])

  return (
    <>
      {router.query.step && <StepForm currStep={2} />}
      <div className='mt-10'>
        <div className='flex items-center justify-between'>
          <h3 className='text-2xl font-bold'>My Templates</h3>
          <Pagination page={page} setPage={setPage} />
        </div>
        {isLoading ? (
          <div className='flex h-[30vh] w-full items-center justify-center'>
            <Spinner />
          </div>
        ) : (
          <div className='mt-4 rounded-lg bg-white p-8 shadow-lg'>
            {templatesBoard.length > 0 ? (
              <>
                <div className='flex items-center justify-between'>
                  <SelectMenu
                    disabled={campaign.type && router.query.new}
                    isLeft
                    options={typeOptions}
                    value={selectedType}
                    onChange={setSelectedType}
                  />
                  <Link
                    href={{
                      pathname: 'template/create',
                      ...(router.query.new && { query: { new: true } })
                    }}>
                    <a
                      type='button'
                      className='rounded-lg bg-primary py-2 px-8 text-white '>
                      <FontAwesomeIcon
                        icon={faCirclePlus}
                        className='mt-1 cursor-pointer rounded-full bg-primary text-white'
                      />
                      <span className='ml-2 text-center text-sm font-bold text-white'>
                        Create New Template
                      </span>
                    </a>
                  </Link>
                </div>
                <div className='mt-4 grid grid-cols-3 gap-10'>
                  {filteredTemplates.map((item: any) => (
                    <TemplateCard
                      key={item.id}
                      id={item.id}
                      name={item.template_name}
                      type={item.specifications}
                      file={item.file}
                      stannpId={item.stannp_template_id}
                      image={
                        item.specifications?.includes('Postcard')
                          ? CampaignPostCard
                          : CampaignEnvelope
                      }
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className='flex min-h-[35vh] flex-col items-center justify-center gap-4'>
                <div className='relative h-40 w-40'>
                  <Image
                    src={CampaignImage}
                    alt='Image'
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
                <h3 className='text-lg font-bold text-primary'>
                  Sorry you don&apos;t have any saved templates.
                </h3>
                <Link href='/app/template/create'>
                  <a
                    type='button'
                    className='rounded-lg bg-primary py-2 px-8 text-white '>
                    <FontAwesomeIcon
                      icon={faCirclePlus}
                      className='mt-1 cursor-pointer rounded-full bg-primary text-white'
                    />
                    <span className='ml-2 text-center text-sm font-bold text-white'>
                      Create New Template
                    </span>
                  </a>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default SelectTemplate
