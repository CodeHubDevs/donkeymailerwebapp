import React from 'react'

import AppNavBar from '@/components/AppNavBar'
import PrivateLayout from '@/components/layout/PrivateLayout'
import BillingAddress from '@/containers/BillingSettings/BillingAddress'

const BillingSettings = () => {
  return (
    <PrivateLayout>
      <AppNavBar pageName='Billing Settings' />
      <BillingAddress />
    </PrivateLayout>
  )
}

export default BillingSettings
