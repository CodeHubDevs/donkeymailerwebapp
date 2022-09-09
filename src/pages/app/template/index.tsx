import React from 'react'

import AppNavBar from '@/components/AppNavBar'
import GuideInfoFooter from '@/components/GuideInfoFooter'
import PrivateLayout from '@/components/layout/PrivateLayout'
import SelectTemplate from '@/containers/Templates/SelectTemplate'
import useWizard from '@/hoc/useWizard'

const TemplateSelect = () => {
  return (
    <PrivateLayout title='Template Select'>
      <AppNavBar pageName='Template' />
      {useWizard(<SelectTemplate />)}
      <GuideInfoFooter />
    </PrivateLayout>
  )
}

export default TemplateSelect
