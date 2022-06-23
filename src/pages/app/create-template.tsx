import React from 'react'

import AppNavBar from '@/components/AppNavBar'
import PrivateLayout from '@/components/layout/PrivateLayout'
import TemplateForm from '@/containers/CreateTemplate/TemplateForm'

const CreateTemplate = () => {
  return (
    <PrivateLayout>
      <AppNavBar pageName='Template' />
      <TemplateForm />
    </PrivateLayout>
  )
}

export default CreateTemplate
