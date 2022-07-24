import React from 'react'

import AppNavBar from '@/components/AppNavBar'
import GuideInfoFooter from '@/components/GuideInfoFooter'
import PrivateLayout from '@/components/layout/PrivateLayout'
import CampaignTable from '@/containers/Dashboard/CampaignTable'
import DashboardCards from '@/containers/Dashboard/DashboardCards'
import DashboardCharts from '@/containers/Dashboard/DashboardCharts'

const Dashboard = () => {
  return (
    <PrivateLayout title='Dashboard'>
      <AppNavBar pageName='Dashboard' />
      <DashboardCards />
      <CampaignTable />
      <DashboardCharts />
      <GuideInfoFooter src='https://player.vimeo.com/video/146022717?color=0c88dd&title=0&byline=0&portrait=0&badge=0' />
    </PrivateLayout>
  )
}

export default Dashboard
