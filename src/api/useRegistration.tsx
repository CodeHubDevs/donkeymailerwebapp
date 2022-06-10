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
  const [data, setData] = useState(null)

  const execute = useCallback(
    async (payload: RegisterPayloadProps) => {
      try {
        const response = await register(payload)
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
