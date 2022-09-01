import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback, useMemo } from 'react'

// import FormSelect from '@/components/FormSelect'
import { useCampaign } from '@/api'
import Spinner from '@/components/Spinner'
import StatusPin from '@/components/StatusPin'
import useProcessStore from '@/stores/useProcessStore'

// const campaignOptions = [
//   {
//     value: 'all',
//     label: 'All Campaigns'
//   },
//   {
//     value: 'draft',
//     label: 'Draft Campaigns'
//   },
//   {
//     value: 'sent',
//     label: 'Sent Campaigns'
//   }
// ]

const MyCampaigns = () => {
  // const [selectedOptions, setSelectedOptions] = React.useState(
  //   campaignOptions[0]
  // )
  const { data: campaigns, isValidating } = useCampaign()
  const { setCampaign }: any = useProcessStore()

  console.log('campaigns', campaigns)

  const router = useRouter()

  const isLoading = useMemo(() => {
    return isValidating || !campaigns
  }, [isValidating, campaigns])

  const handleClick = useCallback(
    async (campaign: any) => {
      if (campaign.action_status === 'Select Templates') {
        setCampaign({
          id: campaign.stannp_campaign_id,
          name: campaign.campaign_name,
          type: campaign.type
        })
        return await router.push({
          pathname: '/app/template',
          query: { select: true }
        })
      }
      return await router.push(`/app/approve/${campaign.stannp_campaign_id}`)
    },
    [router, setCampaign]
  )

  return (
    <>
      <div className='mt-10 mb-2 flex justify-between gap-2'>
        <h3 className='text-2xl font-bold text-black '>My Campaigns</h3>
        {/* <div className='flex items-center gap-1'>
          <input
            type='search'
            className={
              'w-80  rounded-2xl border border-primary py-2 px-4 text-black50 placeholder-primary placeholder-opacity-50 shadow outline-primary placeholder:font-semibold'
            }
            placeholder='Search for campaign...'
          />
          <button
            type='submit'
            className='ml-3 rounded-2xl bg-primary from-secondary to-primary py-2 px-8 text-white'>
            <span className='absolute inset-y-0 left-0 flex items-center pl-3'></span>
            Search
          </button>
        </div> */}
      </div>
      <div className='relative overflow-x-auto rounded-xl bg-white p-4 shadow-md'>
        <div className='flex items-center justify-end'>
          {/* <FormSelect
            className='w-64'
            options={campaignOptions}
            value={selectedOptions}
            onChange={setSelectedOptions}
          /> */}
          <Link href='campaign/select'>
            <a className='ml-3 rounded-lg bg-primary from-secondary to-primary py-2 px-8 text-white '>
              <FontAwesomeIcon
                icon={faCirclePlus}
                className='mt-1 cursor-pointer rounded-full bg-primary text-white'
              />
              <span className='ml-2 text-center text-sm font-bold text-white'>
                Create New Campaign
              </span>
            </a>
          </Link>
        </div>
        <div className='mt-4 grid grid-cols-7 border-t border-b py-4 text-center text-sm font-bold text-gray-700'>
          <h4>ID</h4>
          <h4>Status</h4>
          <h4>Campaign Name</h4>
          <h4>Type</h4>
          <h4>Template</h4>
          <h4>Recipient Group</h4>
          <h4>Action</h4>
        </div>
        {isLoading ? (
          <div className='my-4 flex h-full items-center justify-center'>
            <Spinner />
          </div>
        ) : (
          <>
            {campaigns?.map((campaign: any) => (
              <div
                key={campaign.id}
                className='grid grid-cols-7 items-center py-3 text-center text-sm text-gray-700'>
                <p>{campaign.id}</p>
                <div>
                  <StatusPin className='font-normal'>
                    {campaign.status}
                  </StatusPin>
                </div>
                <p>{campaign.campaign_name}</p>
                <p>{campaign.type}</p>
                <div className='h-8 w-16 justify-self-center bg-primary' />
                <p>No Group</p>
                <div>
                  <button
                    onClick={async () => await handleClick(campaign)}
                    className='cursor-pointer rounded-full bg-secondary p-2 text-sm text-white'>
                    {campaign.action_status}
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  )
}

export default MyCampaigns
