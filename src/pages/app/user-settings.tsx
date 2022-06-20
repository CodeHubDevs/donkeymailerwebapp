import React from 'react'

import AppNavBar from '@/components/AppNavBar'
import PrivateLayout from '@/components/layout/PrivateLayout'
import ChangePassword from '@/containers/UserSettings/ChangePassword'
import HowToContact from '@/containers/UserSettings/HowToContact'
import UserDetails from '@/containers/UserSettings/UserDetails'

const UserSettings = () => {
  return (
    <PrivateLayout>
      <AppNavBar pageName='Settings' />
      <UserDetails />
      <ChangePassword />
      <HowToContact />
    </PrivateLayout>
  )
}

export default UserSettings
