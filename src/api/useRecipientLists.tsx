import useSWR from 'swr'

export const useRecipientLists = (groupId: any) => {
  const response = useSWR(`/api/recipients-list/${groupId}`)

  return response
}
