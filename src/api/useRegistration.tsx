import { useState, useCallback } from 'react'

import client from '@/lib/client'

export interface RegisterPayloadProps {
  email: string
  password: string
  confirm_password: string
}

const register = async (payload: RegisterPayloadProps) => {
  const response = await client.post('authentication/register', payload)
  return response.data
}

export const useRegistration = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  const execute = useCallback(async (payload: RegisterPayloadProps) => {
    try {
      setIsLoading(true)
      const response = await register(payload)
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
