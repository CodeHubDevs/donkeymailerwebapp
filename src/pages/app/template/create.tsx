import React from 'react'

import AppNavBar from '@/components/AppNavBar'
import GuideInfoFooter from '@/components/GuideInfoFooter'
import PrivateLayout from '@/components/layout/PrivateLayout'
import TemplateForm from '@/containers/Templates/TemplateForm'
import useWizard from '@/hoc/useWizard'

const CreateTemplate = () => {
  return (
    <PrivateLayout title='Create Template'>
      <AppNavBar pageName='Template' />
      {useWizard(<TemplateForm />)}
      <GuideInfoFooter />
    </PrivateLayout>
  )
}

export default CreateTemplate
