import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import MainLayout from '../layouts/MainLayout'
import '../styles/globals.css'
import { AuthProvider } from '../lib/auth/AuthProvider'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Provider store={store}>
        <ChakraProvider>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ChakraProvider>
      </Provider>
    </AuthProvider>
  )
}
