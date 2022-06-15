import React from 'react'

import AppNavBar from '@/components/AppNavBar'
import PrivateLayout from '@/components/layout/PrivateLayout'
import DashboardCards from '@/containers/Dashboard/DashboardCards'

const Dashboard = () => {
  return (
    <PrivateLayout>
      <AppNavBar pageName='Main Dashboard' />
      <DashboardCards />
    </PrivateLayout>
  )
}

export default Dashboard
