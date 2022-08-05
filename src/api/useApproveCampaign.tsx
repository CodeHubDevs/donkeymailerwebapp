import { useState, useCallback } from 'react'

import client from '@/lib/client'

export interface ApproveCampaignPayloadProps {
  campaign_id: string
  stannp_campaign_id: string
}

const approveCampaign = async (payload: ApproveCampaignPayloadProps) => {
  const response = await client.post('/api/stannp-approve-campaign/', payload)
  return response
}

export const useApproveCampaign = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)

  const execute = useCallback(
    async (payload: ApproveCampaignPayloadProps) => {
      try {
        setIsLoading(true)
        const response = await approveCampaign(payload)
        setData(response as any)
        return response
      } catch (e: any) {
        console.log()
        throw e
      } finally {
        setIsLoading(false)
      }
    },
    [setIsLoading, setData]
  )

  return { isLoading, data, execute }
}
