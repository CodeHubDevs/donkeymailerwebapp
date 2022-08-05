import useSWR from 'swr'

export const useStannpCampaign = ({ id }: any) => {
  const response = useSWR(`/api/stannp-create-campaign/${id}`)
  return response
}
