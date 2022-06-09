import { useState, useCallback } from 'react'

import client from '@/lib/client'

export interface LoginPayloadProps {
  email: string
  password: string
}

const login = async (payload: LoginPayloadProps) => {
  const response = await client.post('authentication/login', payload)
  return response.data
}

export const useSignin = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  const execute = useCallback(async (payload: LoginPayloadProps) => {
    try {
      setIsLoading(true)
      const response = await login(payload)
      setData(response)
      alert('working!')
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
