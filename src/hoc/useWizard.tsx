import { useRouter } from 'next/router'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

import useProcessStore from '@/stores/useProcessStore'

const useWizard = (Component: any) => {
  const router = useRouter()
  const { campaign }: any = useProcessStore()
  useEffect(() => {
    const check = async () => {
      if (router.query.new) {
        if (!campaign.id) {
          toast.error('Process Cancelled')
          await router.push('/app/campaign')
        }
      }
    }
    void check()
  })
  return Component
}

export default useWizard
