import useSWR from 'swr'
import { useState, useCallback } from 'react'
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

export const useCampaign = () => {
  const auth = useAuth()

  const response = useSWR(`/api/campaign/${auth.decoded?.user_id}/`)

  return response
}

const createCampaign = async (payload: CampaignPayloadProps) => {
  const response = await client.post('/api/campaign/', payload)
  return response
}

export const useCreateCampaign = async () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)

  const execute = useCallback(async (payload: CampaignPayloadProps) => {
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
  }, [])

  return { isLoading, data, execute }
}
