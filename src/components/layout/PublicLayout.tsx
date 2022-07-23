import Head from 'next/head'
import React from 'react'

import Footer from '../Footer'
import NavBar from '../NavBar'

interface PublicLayoutProps {
  isTopNav?: boolean
  isFooter?: boolean
  title?: string
  children: React.ReactNode
}

const PublicLayout: React.FC<PublicLayoutProps> = ({
  isTopNav = true,
  isFooter = true,
  title = '',
  children
}) => {
  return (
    <>
      <Head>
        <title>
          {title !== '' ? `DonkeyMailer | ${title}` : 'DonkeyMailer'}
        </title>
      </Head>
      {isTopNav && <NavBar />}
      {children}
      {isFooter && <Footer />}
    </>
  )
}

export default PublicLayout
