import React from 'react'

import AppNavBar from '@/components/AppNavBar'
import GuideInfoFooter from '@/components/GuideInfoFooter'
import PrivateLayout from '@/components/layout/PrivateLayout'
import CreateRecipient from '@/containers/Recipients/CreateRecipient'
import useWizard from '@/hoc/useWizard'

const RecipientCreate = () => {
  return (
    <PrivateLayout title='Recipient Create'>
      <AppNavBar pageName='Recipient' />
      {useWizard(<CreateRecipient />)}
      <GuideInfoFooter />
    </PrivateLayout>
  )
}

export default RecipientCreate
