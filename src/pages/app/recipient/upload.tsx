import React from 'react'

import AppNavBar from '@/components/AppNavBar'
import GuideInfoFooter from '@/components/GuideInfoFooter'
import PrivateLayout from '@/components/layout/PrivateLayout'
import UploadRecipient from '@/containers/Recipients/UploadRecipient'

const RecipientUpload = () => {
  return (
    <PrivateLayout title='Recipient Upload'>
      <AppNavBar pageName='Recipient' />
      <UploadRecipient />
      <GuideInfoFooter />
    </PrivateLayout>
  )
}

export default RecipientUpload
