import { SWRConfig } from 'swr'

import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import swrConfig from '@/lib/swrConfig'

import type { AppProps } from 'next/app'

import '@/styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SWRConfig value={swrConfig}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </SWRConfig>
  )
}

export default MyApp
