import { useState, useCallback } from 'react'

import client from '@/lib/client'

const selectGroup = async (payload: any) => {
  const response = await client.post('/api/v2/select-recipients', payload)
  return response.data
}

export const useSelectGroup = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  const execute = useCallback(async (payload: any) => {
    try {
      setIsLoading(true)
      const response = await selectGroup(payload)
      setData(response)
      return response
    } catch (e: any) {
      setError(e)
      throw e
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { isLoading, error, data, execute }
}
