import { useState, useCallback } from 'react'

import client from '@/lib/client'

export interface UserSettingsPayloadProps {
  email: string
  last_name: string
  first_name: string
  company: string
}

const userSettings = async (payload: UserSettingsPayloadProps, id: number) => {
  const response = await client.put(`/api/user/${id}/`, payload)
  return response
}

export const useUserSettings = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)

  const execute = useCallback(
    async (payload: UserSettingsPayloadProps, id: number) => {
      try {
        const response = await userSettings(payload, id)
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
