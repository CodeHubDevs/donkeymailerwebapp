import { useState, useCallback } from 'react'

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

const billingSettings = async (payload: BillingSettingsPayloadProps) => {
  const response = await client.post('/api/billing-address-list/', payload)
  return response
}

export const useAddBillingSettings = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)

  const execute = useCallback(
    async (payload: BillingSettingsPayloadProps) => {
      try {
        const response = await billingSettings(payload)
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
