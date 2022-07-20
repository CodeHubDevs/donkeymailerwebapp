import React from 'react'

import AppNavBar from '@/components/AppNavBar'
import GuideInfoFooter from '@/components/GuideInfoFooter'
import PrivateLayout from '@/components/layout/PrivateLayout'
import RecipientGroups from '@/containers/Recipients/RecipientGroups'

const Recipient = () => {
  return (
    <PrivateLayout title='Recipient'>
      <AppNavBar pageName='Recipient' />
      <RecipientGroups />
      <GuideInfoFooter />
    </PrivateLayout>
  )
}

export default Recipient
