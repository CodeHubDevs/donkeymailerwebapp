import { useState, useCallback } from 'react'

import { useAuth } from '@/context/AuthContext'
import client from '@/lib/client'

export interface UserSettingsPayloadProps {
  email: string
  last_name: string
  first_name: string
  company: string
  job_title: string
  contact: string
}

const userSettings = async (payload: UserSettingsPayloadProps, id: number) => {
  const response = await client.put(`/api/user/${id}/`, payload)
  return response
}

export const useUserSettings = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)

  const auth = useAuth()

  const execute = useCallback(
    async (payload: UserSettingsPayloadProps) => {
      try {
        const response = await userSettings(payload, auth.decoded?.user_id)
        setData(response as any)
        return response
      } catch (e: any) {
        console.log()
        throw e
      } finally {
        setIsLoading(false)
      }
    },
    [setIsLoading, setData, auth.decoded]
  )

  return { isLoading, data, execute }
}
