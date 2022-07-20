import React from 'react'

import AppNavBar from '@/components/AppNavBar'
import GuideInfoFooter from '@/components/GuideInfoFooter'
import PrivateLayout from '@/components/layout/PrivateLayout'

const Template = () => {
  return (
    <PrivateLayout title='Template'>
      <AppNavBar pageName='Template' />
      <GuideInfoFooter />
    </PrivateLayout>
  )
}

export default Template
