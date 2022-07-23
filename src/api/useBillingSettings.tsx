import useSWR from 'swr'

import { useAuth } from '@/context/AuthContext'

export const useBillingSettings = () => {
  const auth = useAuth()

  const response = useSWR(`/api/billing-address-list/${auth.decoded?.user_id}/`)
  return response
}
