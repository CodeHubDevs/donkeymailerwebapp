import { useState, useCallback } from 'react'

import client from '@/lib/client'

export interface ResetPasswordPayloadProps {
  email: string
}

const resetPassword = async (payload: ResetPasswordPayloadProps) => {
  const response = await client.post(
    'authentication/request-reset-email',
    payload
  )
  return response.data
}

export const useResetPassword = () => {
  /* A React hook that is used to reset a password. */
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  const execute = useCallback(async (payload: ResetPasswordPayloadProps) => {
    try {
      setIsLoading(true)
      const response = await resetPassword(payload)
      setData(response)
      alert(response.results)
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
