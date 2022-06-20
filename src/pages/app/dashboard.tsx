import React from 'react'

import AppNavBar from '@/components/AppNavBar'
import PrivateLayout from '@/components/layout/PrivateLayout'
import CampaignTable from '@/containers/Dashboard/CampaignTable'
import DashboardCards from '@/containers/Dashboard/DashboardCards'
import DashboardCharts from '@/containers/Dashboard/DashboardCharts'

const Dashboard = () => {
  return (
    <PrivateLayout>
      <AppNavBar pageName='Main Dashboard' />
      <DashboardCards />
      <CampaignTable />
      <DashboardCharts />
    </PrivateLayout>
  )
}

export default Dashboard
