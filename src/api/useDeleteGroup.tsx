import { useState, useCallback } from 'react'

import client from '@/lib/client'

export interface DeleteGroupPayloadProps {
  group_id: string
}

const deleteGroup = async (payload: DeleteGroupPayloadProps) => {
  const response = await client.post('/api/recipients-group/', payload)
  return response
}

export const useDeleteGroup = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)

  const execute = useCallback(
    async (payload: DeleteGroupPayloadProps) => {
      try {
        setIsLoading(true)
        const response = await deleteGroup(payload)
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
