// Importando AppProps de next/app para tipar a function MyApp
import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import '../../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (

  	<>
  		<Header />
  		<Component {...pageProps} />
  	</>

  )
}

export default MyApp
