import React from 'react'

import AppNavBar from '@/components/AppNavBar'
import GuideInfoFooter from '@/components/GuideInfoFooter'
import PrivateLayout from '@/components/layout/PrivateLayout'
import SelectGroup from '@/containers/Recipients/SelectGroup'
import useWizard from '@/hoc/useWizard'

const RecipientSelectGroup = () => {
  return (
    <PrivateLayout title='Recipient Select Group'>
      <AppNavBar pageName='Recipient' />
      {useWizard(<SelectGroup />)}
      <GuideInfoFooter />
    </PrivateLayout>
  )
}

export default RecipientSelectGroup
