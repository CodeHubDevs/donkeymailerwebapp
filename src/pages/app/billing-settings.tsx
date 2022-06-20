import React from 'react'

import AppNavBar from '@/components/AppNavBar'
import PrivateLayout from '@/components/layout/PrivateLayout'
import BillingAddress from '@/containers/BillingSettings/BillingAddress'
import PaymentInformation from '@/containers/BillingSettings/PaymentInformation'

const BillingSettings = () => {
  return (
    <PrivateLayout>
      <AppNavBar pageName='Billing Settings' />
      <BillingAddress />
      <PaymentInformation />
    </PrivateLayout>
  )
}

export default BillingSettings
