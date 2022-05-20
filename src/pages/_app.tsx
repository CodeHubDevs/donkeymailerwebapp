import { NextUIProvider, globalCss } from '@nextui-org/react'

import theme from '@/styles/theme'

import type { AppProps } from 'next/app'

const globalStyles = globalCss({
  html: {
    backgroundColor: '$secondary10',
    fontFamily: 'ManropeVariable, sans-serif'
  }
})

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalStyles()
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
