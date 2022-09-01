import { useState, useCallback } from 'react'

import client from '@/lib/client'

export interface CreateGroupPayloadProps {
  modified_by: string
  group_name: string
  user_id: string
  country: string
}

const createGroup = async (payload: CreateGroupPayloadProps) => {
  const response = await client.post('/api/recipients-group/', payload)
  return response
}

export const useCreateGroup = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)

  const execute = useCallback(
    async (payload: CreateGroupPayloadProps) => {
      try {
        setIsLoading(true)
        const response = await createGroup(payload)
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
