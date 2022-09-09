import useSWR from 'swr'

import { useAuth } from '@/context/AuthContext'

export const useTemplateBoard = (page = 1) => {
  const auth = useAuth()

  const response = useSWR(
    `/api/stannp/templates-board/${auth.decoded?.user_id}/?page=${page}`
  )
  return response
}
