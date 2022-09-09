import React from 'react'

import AppNavBar from '@/components/AppNavBar'
import GuideInfoFooter from '@/components/GuideInfoFooter'
import PrivateLayout from '@/components/layout/PrivateLayout'
import RecipientOptions from '@/containers/Recipients/RecipientOptions'
import useWizard from '@/hoc/useWizard'

const RecipientSelect = () => {
  return (
    <PrivateLayout title='Recipient Select'>
      <AppNavBar pageName='Recipient' />
      {useWizard(
        <div className='mt-10'>
          <h3 className='text-xl font-bold'>Select What You Prefer</h3>
          <p className='text-sm'>
            (Please select one method you would like to use to create a new
            recipient group)
          </p>
          <RecipientOptions />
        </div>
      )}
      <GuideInfoFooter />
    </PrivateLayout>
  )
}

export default RecipientSelect
