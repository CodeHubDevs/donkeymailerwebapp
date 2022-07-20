import React from 'react'

import AppNavBar from '@/components/AppNavBar'
import GuideInfoFooter from '@/components/GuideInfoFooter'
import PrivateLayout from '@/components/layout/PrivateLayout'
import TemplateForm from '@/containers/Templates/TemplateForm'

const CreateTemplate = () => {
  return (
    <PrivateLayout title='Create Template'>
      <AppNavBar pageName='Template' />
      <TemplateForm />
      <GuideInfoFooter />
    </PrivateLayout>
  )
}

export default CreateTemplate
