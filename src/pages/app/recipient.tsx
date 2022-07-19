import React from 'react'

import AppNavBar from '@/components/AppNavBar'
import PrivateLayout from '@/components/layout/PrivateLayout'
import RecipientGroups from '@/containers/Recipients/RecipientGroups'

const Recipient = () => {
  return (
    <PrivateLayout>
      <AppNavBar pageName='Recipients' />
      <RecipientGroups />
    </PrivateLayout>
  )
}

export default Recipient
