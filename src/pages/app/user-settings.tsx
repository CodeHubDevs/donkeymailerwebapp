import React from 'react'

import { useProfile } from '@/api'
import AppNavBar from '@/components/AppNavBar'
import PrivateLayout from '@/components/layout/PrivateLayout'
import Loading from '@/components/Loading'
import ChangePassword from '@/containers/UserSettings/ChangePassword'
import HowToContact from '@/containers/UserSettings/HowToContact'
import UserDetails from '@/containers/UserSettings/UserDetails'

const UserSettings = () => {
  const { isValidating } = useProfile()
  return (
    <PrivateLayout title='User Settings'>
      <AppNavBar pageName='Settings' />
      {isValidating ? (
        <Loading />
      ) : (
        <>
          <UserDetails />
          <ChangePassword />
          <HowToContact />
        </>
      )}
    </PrivateLayout>
  )
}

export default UserSettings
