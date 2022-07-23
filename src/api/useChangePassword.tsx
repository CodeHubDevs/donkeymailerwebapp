import { useState, useCallback } from 'react'

import client from '@/lib/client'

export interface ChangePasswordPayloadProps {
  old_password: string
  new_password: string
}

const changePassword = async (payload: ChangePasswordPayloadProps) => {
  const response = await client.put('authentication/change-password', payload)
  return response
}

export const useChangePassword = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)

  const execute = useCallback(
    async (payload: ChangePasswordPayloadProps) => {
      try {
        setIsLoading(true)
        const response = await changePassword(payload)
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
