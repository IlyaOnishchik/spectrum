import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import MainLayout from '../layouts/MainLayout'
import '../styles/globals.css'
import { AuthProvider } from '../lib/auth/AuthProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ChakraProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ChakraProvider>
    </AuthProvider>
  )
}
