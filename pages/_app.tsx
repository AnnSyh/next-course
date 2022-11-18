import '../styles/globals.scss'
import variables from '../styles/variables.module.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <div color={variables.primaryColor}>
    <div style={{ color: variables.primaryColor }}>
      <Component {...pageProps} />
    </div>
  )
}