import Head from 'next/head'
import React from 'react'

import SideBar from '../SideBar'

interface PrivateLayoutProps {
  children: React.ReactNode
  title: string
}

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{`DonkeyMailer | ${title}`}</title>
      </Head>
      <div className='flex bg-zinc-50'>
        <SideBar />
        <div className='w-full p-8 pl-32'>{children}</div>
      </div>
    </>
  )
}

export default PrivateLayout
