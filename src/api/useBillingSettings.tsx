import useSWR from 'swr'

export const useBillingSettings = () => {
  const response = useSWR('/api/billing-address/')
  return response
}
