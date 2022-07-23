import { useState, useCallback } from 'react'

import { useAuth } from '@/context/AuthContext'
import client from '@/lib/client'

interface BillingSettingsPayloadProps {
  modified_by: string
  first_name: string
  last_name: string
  company_name: string
  first_lane_address: string
  second_lane_address: string
  city: string
  country: string
  postal_code: string
}

const billingSettings = async (
  payload: BillingSettingsPayloadProps,
  id: any
) => {
  const response = await client.put(`/api/billing-address-list/${id}/`, payload)
  return response
}

export const useUpdateBillingSettings = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)

  const auth = useAuth()

  const execute = useCallback(
    async (payload: BillingSettingsPayloadProps) => {
      try {
        const response = await billingSettings(payload, auth.decoded?.user_id)
        setData(response as any)
        return response
      } catch (e: any) {
        console.log()
        throw e
      } finally {
        setIsLoading(false)
      }
    },
    [setIsLoading, setData, auth.decoded]
  )

  return { isLoading, data, execute }
}
