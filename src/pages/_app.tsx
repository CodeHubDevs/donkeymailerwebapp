import { NextUIProvider, globalCss } from '@nextui-org/react'

import NavBar from '@/components/NavBar'
import theme from '@/styles/theme'

import type { AppProps } from 'next/app'

const globalStyles = globalCss({
  html: {
    fontFamily: 'ManropeVariable, sans-serif'
  },
  body: {
    backgroundColor: '$secondary10 !important'
  }
})

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalStyles()
  return (
    <NextUIProvider theme={theme}>
      <NavBar />
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
