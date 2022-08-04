import { useState, useCallback } from 'react'

import client from '@/lib/client'

const deleteGroup = async (id: string) => {
  const response = await client.delete(`/api/recipients-group/${id}/`)
  return response
}

export const useDeleteGroup = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)

  const execute = useCallback(
    async (id: string) => {
      try {
        setIsLoading(true)
        const response = await deleteGroup(id)
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
