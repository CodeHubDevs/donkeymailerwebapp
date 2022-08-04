import { useRouter } from 'next/router'
import React from 'react'

import AppNavBar from '@/components/AppNavBar'
import GuideInfoFooter from '@/components/GuideInfoFooter'
import PrivateLayout from '@/components/layout/PrivateLayout'
import ApproveContent from '@/containers/Approve/ApproveContent'

const Approval = () => {
  const router = useRouter()

  const { id } = router.query

  return (
    <PrivateLayout title='Approve'>
      <AppNavBar pageName='Approve' />
      <ApproveContent groupId={id} />
      <GuideInfoFooter />
    </PrivateLayout>
  )
}

export default Approval
