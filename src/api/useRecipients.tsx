import useSWR from 'swr'

import { useAuth } from '@/context/AuthContext'

export const useRecipients = () => {
  const auth = useAuth()
  const response = useSWR(`/api/recipients-group/${auth.decoded?.user_id}`)
  return response
}
