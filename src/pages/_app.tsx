import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return <div><Script src="https://api.toolbird.io/js/script.js" strategy="lazyOnload" data-domain="usegazella.com"/> <Component {...pageProps} /></div>
}
