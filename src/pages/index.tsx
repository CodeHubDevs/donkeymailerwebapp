import PublicLayout from '@/components/layout/PublicLayout'
import Hero from '@/containers/Landing/Hero'
import Main from '@/containers/Landing/Main'

import type { NextPage } from 'next'

const Landing: NextPage = () => (
  <PublicLayout>
    <Hero />
    <Main />
  </PublicLayout>
)

export default Landing
