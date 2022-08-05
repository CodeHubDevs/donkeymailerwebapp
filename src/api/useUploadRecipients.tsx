import axios from 'axios'
import { useState, useCallback } from 'react'

interface UploadRecipientsPayloadProps {
  group_id: string
  file: File
}

const uploadRecipients = async (payload: UploadRecipientsPayloadProps) => {
  const response = await axios.post(
    'https://dash.stannp.com/api/v1/recipients/import?api_key=b2140c909752aad4aa5defd6',
    payload,
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
  )
  return response
}

export const useUploadRecipients = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)

  const execute = useCallback(
    async (payload: UploadRecipientsPayloadProps) => {
      try {
        setIsLoading(true)
        const response = await uploadRecipients(payload)
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
