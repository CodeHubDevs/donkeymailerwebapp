import React, { useCallback, useMemo, useState } from 'react'
import toast from 'react-hot-toast'

import { useCampaign, useRecipients } from '@/api'
import { useApproveCampaign } from '@/api/useApproveCampaign'
import { useStannpCampaign } from '@/api/useStannpCampaign'
import Spinner from '@/components/Spinner'
import StepForm from '@/components/StepForm'

const ApproveContent = ({ groupId }: any) => {
  const { data: campaigns, isValidating: campValidating } = useCampaign()

  const { data: stannpCampaign, isValidating: stannpValidating } =
    useStannpCampaign({
      id: groupId
    })

  const { data: recipientsGroup, isValidating: recipientsValidating } =
    useRecipients()

  const isLoading = useMemo(() => {
    return (
      campValidating ||
      stannpValidating ||
      !campaigns ||
      !stannpCampaign ||
      !recipientsGroup ||
      recipientsValidating
    )
  }, [
    campValidating,
    stannpValidating,
    campaigns,
    stannpCampaign,
    recipientsGroup,
    recipientsValidating
  ])

  const campaign = useMemo(
    () =>
      campaigns?.items?.find((campaign: any) => {
        return campaign.stannp_campaign_id === groupId
      }),
    [campaigns, groupId]
  )

  const group = useMemo(
    () =>
      recipientsGroup?.find((group: any) => {
        return group.stannp_group_id === stannpCampaign?.data.recipients_group
      }),
    [recipientsGroup, stannpCampaign]
  )

  const [approving, setApproving] = useState(false)

  const { execute } = useApproveCampaign()

  const handleClick = useCallback(async () => {
    try {
      setApproving(true)
      await execute({
        stannp_campaign_id: stannpCampaign?.data?.id
      })
      toast.success('Campaign approved!')
      setTimeout(() => {
        window.location.reload()
      }, 1000)
      setApproving(false)
    } catch (error: any) {
      console.log(error)
      toast.error('Error approving campaign!')
    }
  }, [execute, stannpCampaign])

  console.log({ stannpCampaign })

  return (
    <>
      <StepForm currStep={4} />
      <div className='mt-10'>
        <h3 className='text-2xl font-bold text-black'>
          Review and Approve your Campaign
        </h3>
        {isLoading ? (
          <div className='mt-10 flex h-full items-center justify-center'>
            <Spinner />
          </div>
        ) : (
          <>
            <div className='mt-4 grid grid-cols-2 items-center justify-between gap-8'>
              <div className='flex w-full flex-col gap-3 rounded-lg bg-white p-4 shadow-lg'>
                <h4 className='mb-2 border-b text-xl font-bold'>
                  {stannpCampaign?.data.name}
                </h4>
                <div className='flex items-center gap-2'>
                  <p className='text-lg font-bold'>{group?.group_name}</p>
                  <p className='text-sm'>
                    {campaign?.postage_destination.toUpperCase()}
                  </p>
                </div>
                <p>{stannpCampaign?.data.recipients} Recipients</p>
                <p>
                  {stannpCampaign?.data.type.toUpperCase()} (
                  {stannpCampaign?.data.size})
                </p>
              </div>
              <div className='flex h-full w-full items-center justify-center rounded-lg bg-white p-4 shadow-lg'>
                <div className='relative h-48 w-80 shadow-lg'>
                  {/* <Image
                    src={stannpCampaign?.data.image}
                    layout='fill'
                    objectFit='cover'
                    alt='template'
                  /> */}
                  <iframe
                    src={stannpCampaign?.data.template.pages[0].background}
                  />
                  {/* <Document
                    file={stannpCampaign?.data.template.pages[0].background}
                    onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={1} />
                  </Document> */}
                </div>
              </div>
            </div>
            <button
              onClick={handleClick}
              disabled={stannpCampaign?.data.status !== 'draft' || approving}
              className='mx-auto mt-8 flex items-center gap-x-2 rounded-full bg-primary px-4 py-1 font-bold text-white disabled:cursor-not-allowed disabled:opacity-50'>
              {approving && <Spinner className='h-4 w-4' />}
              {stannpCampaign?.data.status !== 'draft' ? 'Approved' : 'Approve'}
            </button>
          </>
        )}
      </div>
    </>
  )
}

export default ApproveContent
