import Image from 'next/image'
import React, { useCallback, useMemo } from 'react'
import toast from 'react-hot-toast'

import { useCampaign, useRecipients } from '@/api'
import { useApproveCampaign } from '@/api/useApproveCampaign'
import { useStannpCampaign } from '@/api/useStannpCampaign'
import Spinner from '@/components/Spinner'

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
      campaigns?.find((campaign: any) => {
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

  const { execute } = useApproveCampaign()

  const handleClick = useCallback(async () => {
    try {
      await execute({
        campaign_id: campaign?.id,
        stannp_campaign_id: stannpCampaign?.data.id
      })
      toast.success('Campaign approved!')
    } catch (error: any) {
      console.log(error)
      toast.error('Error approving campaign!')
    }
  }, [campaign, execute, stannpCampaign])

  return (
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
                <Image
                  src={stannpCampaign?.data.image}
                  layout='fill'
                  objectFit='cover'
                  alt='template'
                />
              </div>
            </div>
          </div>
          <button
            onClick={handleClick}
            disabled={stannpCampaign?.data.status !== 'draft'}
            className='mx-auto mt-8 block rounded-full bg-primary px-4 py-1 font-bold text-white disabled:cursor-not-allowed disabled:opacity-50'>
            {stannpCampaign?.data.status !== 'draft' ? 'Approved' : 'Approve'}
          </button>
        </>
      )}
    </div>
  )
}

export default ApproveContent
