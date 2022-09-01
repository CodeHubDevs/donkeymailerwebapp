import { useState, useCallback } from 'react'

import client from '@/lib/client'

export interface CreateStannpCampaignPayloadProps {
  campaign_id: string
  template_id: string
  group_id: string
  what_recipients: string
}

const createStannpCampaign = async (
  payload: CreateStannpCampaignPayloadProps
) => {
  const response = await client.post('/api/stannp-create-campaign/', payload)
  return response
}

export const useCreateStannpCampaign = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)

  const execute = useCallback(
    async (payload: CreateStannpCampaignPayloadProps) => {
      try {
        setIsLoading(true)
        const response = await createStannpCampaign(payload)
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
