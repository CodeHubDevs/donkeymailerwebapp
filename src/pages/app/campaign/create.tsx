import React from 'react'

import AppNavBar from '@/components/AppNavBar'
import GuideInfoFooter from '@/components/GuideInfoFooter'
import PrivateLayout from '@/components/layout/PrivateLayout'
import CreateCampaign from '@/containers/Campaigns/CreateCampaign'

const CampaignCreate = () => {
  return (
    <PrivateLayout title='Template Create'>
      <AppNavBar pageName='Campaign' />
      <CreateCampaign />
      <GuideInfoFooter />
    </PrivateLayout>
  )
}

export default CampaignCreate
