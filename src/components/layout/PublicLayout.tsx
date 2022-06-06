import React from 'react'

import Footer from '../Footer'
import NavBar from '../NavBar'

interface PublicLayoutProps {
  isTopNav?: boolean
  isFooter?: boolean
  children: React.ReactNode
}

const PublicLayout: React.FC<PublicLayoutProps> = ({
  isTopNav = true,
  isFooter = true,
  children
}) => {
  return (
    <>
      {isTopNav && <NavBar />}
      {children}
      {isFooter && <Footer />}
    </>
  )
}

export default PublicLayout
