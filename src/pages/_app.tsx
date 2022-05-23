import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'

import type { AppProps } from 'next/app'

import '@/styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
