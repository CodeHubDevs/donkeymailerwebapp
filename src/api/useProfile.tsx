import useSWR from 'swr'

import { useAuth } from '@/context/AuthContext'

export const useProfile = () => {
  const auth = useAuth()
  const response = useSWR(`/api/user/${auth.decoded?.user_id}`)
  return response
}
