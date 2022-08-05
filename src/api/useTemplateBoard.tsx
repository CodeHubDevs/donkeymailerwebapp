import useSWR from 'swr'

import { useAuth } from '@/context/AuthContext'

export const useTemplateBoard = () => {
  const auth = useAuth()

  const response = useSWR(`/api/templates-board/${auth.decoded?.user_id}/`)
  return response
}
