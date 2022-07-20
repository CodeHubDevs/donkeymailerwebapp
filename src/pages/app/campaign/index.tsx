import React from 'react'

import AppNavBar from '@/components/AppNavBar'
import GuideInfoFooter from '@/components/GuideInfoFooter'
import PrivateLayout from '@/components/layout/PrivateLayout'

const Campaign = () => {
  return (
    <PrivateLayout title='Campaign'>
      <AppNavBar pageName='Campaign' />
      <h1>Campaign</h1>
      <GuideInfoFooter />
    </PrivateLayout>
  )
}

export default Campaign
