// Head é um componente que quando usado em qlq página será anexado ao Head de _document.tsx
import Head from 'next/head'

export default function Home() {
  return (
  	<>
  		<Head>
  			<title>Início | Ig news</title>
  		</Head>
    	<h1>Hello World</h1>
    </>
  )
}
