import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

import { useAuth } from '@/context/AuthContext'

import SideBar from '../SideBar'

interface PrivateLayoutProps {
  children: React.ReactNode
  title: string
}

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children, title }) => {
  const router = useRouter()
  const auth = useAuth()

  if (typeof window !== 'undefined') {
    // eslint-disable-next-line
    if (!auth.token) {
      // eslint-disable-next-line
      router.push('/signin')
    }
  }

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
