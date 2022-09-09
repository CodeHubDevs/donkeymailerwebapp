import React from 'react'

import AppNavBar from '@/components/AppNavBar'
import GuideInfoFooter from '@/components/GuideInfoFooter'
import PrivateLayout from '@/components/layout/PrivateLayout'
import MyCampaigns from '@/containers/Campaigns/MyCampaigns'
import useWizard from '@/hoc/useWizard'

const Campaign = () => {
  return (
    <PrivateLayout title='Campaign'>
      <AppNavBar pageName='Campaign' />
      {useWizard(<MyCampaigns />)}
      <GuideInfoFooter />
    </PrivateLayout>
  )
}

export default Campaign
