import React from 'react'

import AppNavBar from '@/components/AppNavBar'
import PrivateLayout from '@/components/layout/PrivateLayout'
import UserDetails from '@/containers/UserSettings/UserDetails'

const UserSettings = () => {
  return (
    <PrivateLayout>
      <AppNavBar pageName='Settings' />
      <UserDetails />
    </PrivateLayout>
  )
}

export default UserSettings
