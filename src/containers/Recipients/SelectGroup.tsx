import { useRouter } from 'next/router'
import React, { useCallback, useMemo } from 'react'

import { useCreateStannpCampaign, useRecipients } from '@/api'
import GoBackToSelectButton from '@/components/GoBackToSelectButton'
import Spinner from '@/components/Spinner'
import StepForm from '@/components/StepForm'
import useProcessStore from '@/stores/useProcessStore'

const SelectGroup = () => {
  const { data: groups, isValidating } = useRecipients()
  const router = useRouter()
  const { setRecipientId }: any = useProcessStore()

  const isLoading = useMemo(() => {
    return isValidating || !groups
  }, [isValidating, groups])

  const { execute } = useCreateStannpCampaign()
  const { campaign, templateId }: any = useProcessStore()

  console.log({ groups })

  const handleClick = useCallback(
    async (id: any) => {
      setRecipientId(id)
      console.log('campaign', campaign)
      console.log('templateId', templateId)
      console.log('recipientId', id)
      const { data } = await execute({
        campaign_id: campaign?.id,
        template_id: templateId,
        group_id: id,
        what_recipients: 'all'
      })
      await router.push(`/app/approve/${data.id}`)
    },
    [router, setRecipientId, execute, campaign, templateId]
  )

  return (
    <>
      <StepForm currStep={3} />
      <div className='mt-10'>
        <div className='flex items-center justify-between'>
          <h3 className='text-xl font-bold'>Select From Recipient Group</h3>
          <GoBackToSelectButton />
        </div>
        <div className='mt-4 rounded-lg bg-white p-4 shadow-xl'>
          <div className='text-bold grid grid-cols-3 border-b border-t py-4 text-center text-sm font-bold text-gray-700'>
            <h4>ID</h4>
            <h4>Group Name</h4>
            <h4>Action</h4>
          </div>
          {isLoading ? (
            <div className='flex h-full items-center justify-center py-4'>
              <Spinner />
            </div>
          ) : (
            <>
              {groups?.map((group: any) => (
                <div
                  className='grid grid-cols-3 py-3 text-center text-sm text-gray-700'
                  key={group?.stannp_group_id}>
                  <div>{group?.stannp_group_id}</div>
                  <div>{group?.group_name}</div>
                  <div>
                    <button
                      onClick={async () =>
                        await handleClick(group?.stannp_group_id)
                      }
                      className='cursor-pointer rounded-full bg-secondary py-1 px-2 text-sm text-white'>
                      Select
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default SelectGroup
