import { useState, useCallback } from 'react'

import client from '@/lib/client'

interface TemplateBoardPayloadProps {
  country: string
  specifications: string
  template_name: string
  file: File
}

const templateBoard = async (payload: TemplateBoardPayloadProps) => {
  const response = await client.post('/api/template-board/', payload, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  return response
}

export const useAddTemplateBoard = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)

  const execute = useCallback(
    async (payload: TemplateBoardPayloadProps) => {
      try {
        const response = await templateBoard(payload)
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
