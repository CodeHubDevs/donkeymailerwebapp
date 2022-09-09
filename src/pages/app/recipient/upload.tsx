import React from 'react'

import AppNavBar from '@/components/AppNavBar'
import GuideInfoFooter from '@/components/GuideInfoFooter'
import PrivateLayout from '@/components/layout/PrivateLayout'
import UploadRecipient from '@/containers/Recipients/UploadRecipient'
import useWizard from '@/hoc/useWizard'

const RecipientUpload = () => {
  return (
    <PrivateLayout title='Recipient Upload'>
      <AppNavBar pageName='Recipient' />
      {useWizard(<UploadRecipient />)}
      <GuideInfoFooter />
    </PrivateLayout>
  )
}

export default RecipientUpload
