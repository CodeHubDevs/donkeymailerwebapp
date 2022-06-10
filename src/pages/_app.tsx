import { Toaster } from 'react-hot-toast'
import { SWRConfig } from 'swr'

import AuthProvider from '@/context/AuthContext'
import swrConfig from '@/lib/swrConfig'

import type { AppProps } from 'next/app'

import '@/styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SWRConfig value={swrConfig}>
      <AuthProvider>
        <Toaster />
        <Component {...pageProps} />
      </AuthProvider>
    </SWRConfig>
  )
}

export default MyApp
