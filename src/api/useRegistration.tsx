import { useState, useCallback } from 'react'

import client from '@/lib/client'

export interface RegisterPayloadProps {
  email: string
  password: string
  confirm_password: string
}

const register = async (payload: RegisterPayloadProps) => {
  const response = await client.post('authentication/register', payload)
  return response
}

export const useRegistration = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null as any)
  const [data, setData] = useState(null)

  // ! Bug: error is not being set when the user clicks the submit button on first try of form
  const execute = useCallback(
    async (payload: RegisterPayloadProps) => {
      try {
        setIsLoading(true)
        const response = await register(payload)
        setData(response as any)
        return response
      } catch (e: any) {
        const errors = e.response.data.errors.message
        setError(Object.values(errors)[0])
        throw e
      } finally {
        setIsLoading(false)
      }
    },
    [setIsLoading, setError, setData]
  )

  return { isLoading, error, data, execute }
}
