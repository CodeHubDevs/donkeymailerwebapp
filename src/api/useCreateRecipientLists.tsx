import { useState, useCallback } from 'react'

import client from '@/lib/client'

export interface CreateRecipientListsPayloadProps {
  modified_by: string
  recipients_grp: string
  first_name: string
  last_name: string
  company_name: string
  address_1: string
  address_2: string
  city: string
  country_or_state: string
  postal_or_zipcode: string
  country: string
  phone_number: string
  group_id: string
}

const createRecipientLists = async (
  payload: CreateRecipientListsPayloadProps
) => {
  const response = await client.post('/api/recipients-list/', payload)
  return response
}

export const useCreateRecipientLists = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)

  const execute = useCallback(
    async (payload: CreateRecipientListsPayloadProps) => {
      try {
        setIsLoading(true)
        const response = await createRecipientLists(payload)
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
