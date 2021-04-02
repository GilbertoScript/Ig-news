// Importando AppProps de next/app para tipar a function MyApp
import { AppProps } from 'next/app'
import '../../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
