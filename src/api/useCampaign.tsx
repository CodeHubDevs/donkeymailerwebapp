import { useState, useCallback } from 'react'
import useSWR from 'swr'

import { useAuth } from '@/context/AuthContext'
import client from '@/lib/client'

export interface CampaignPayloadProps {
  campaign_name: string
  postage_class: string
  postage_destination: string
  type: string
  status: string
  action_status: string
}

export const useCampaign = (page = 1) => {
  const auth = useAuth()

  const response = useSWR(
    `/api/v2/campaign/${auth.decoded?.user_id}?page=${page}`
  )

  return response
}

const createCampaign = async (payload: CampaignPayloadProps) => {
  const response = await client.post('/api/v2/campaign', payload)
  return response
}

export const useCreateCampaign = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)

  const execute = useCallback(
    async (payload: CampaignPayloadProps) => {
      try {
        setIsLoading(true)
        const response = await createCampaign(payload)
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
