import { SWRConfig } from 'swr'

import swrConfig from '@/lib/swrConfig'

import type { AppProps } from 'next/app'

import '@/styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SWRConfig value={swrConfig}>
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default MyApp
