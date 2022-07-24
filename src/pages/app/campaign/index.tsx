import React from 'react'

import AppNavBar from '@/components/AppNavBar'
import GuideInfoFooter from '@/components/GuideInfoFooter'
import PrivateLayout from '@/components/layout/PrivateLayout'
import MyCampaigns from '@/containers/Campaigns/MyCampaigns'

const Campaign = () => {
  return (
    <PrivateLayout title='Campaign'>
      <AppNavBar pageName='Campaign' />
      <MyCampaigns />
      <GuideInfoFooter />
    </PrivateLayout>
  )
}

export default Campaign
