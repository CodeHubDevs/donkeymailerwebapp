import React from 'react'

import AppNavBar from '@/components/AppNavBar'
import PrivateLayout from '@/components/layout/PrivateLayout'

const Dashboard = () => {
  return (
    <PrivateLayout>
      <AppNavBar pageName='Main Dashboard' />
    </PrivateLayout>
  )
}

export default Dashboard
