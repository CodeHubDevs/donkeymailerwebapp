import { useState, useCallback } from 'react'

import client from '@/lib/client'
import useProgressUploadStore from '@/stores/useProgressUploadStore'

interface TemplateBoardPayloadProps {
  country: string
  specifications: string
  template_name: string
  file: File
}

const templateBoard = async (
  payload: TemplateBoardPayloadProps,
  setStateProgress: any
) => {
  const response = await client.post('/api/stannp/templates-board/', payload, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    onUploadProgress(progressEvent) {
      const { loaded, total } = progressEvent
      const percent = Math.floor((loaded * 100) / total)
      setStateProgress(percent)
    }
  })
  return response
}

export const useAddTemplateBoard = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)

  const { setProgress }: any = useProgressUploadStore()

  const execute = useCallback(
    async (payload: TemplateBoardPayloadProps) => {
      try {
        setIsLoading(true)
        const response = await templateBoard(payload, setProgress)
        setData(response as any)
        return response
      } catch (e: any) {
        console.log()
        throw e
      } finally {
        setIsLoading(false)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setIsLoading, setData]
  )

  return { isLoading, data, execute }
}
