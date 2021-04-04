// Head é um componente que quando usado em qlq página será anexado ao Head de _document.tsx
import Head from 'next/head'
import styles from './home.module.scss'

import { SubscribeButton } from '../components/SubscribeButton'

export default function Home() {
  return (
  	<>
  		<Head>
  			<title>Home | Ig news</title>
  		</Head>
    	
    	<main className={styles.contentContainer}>
    		<section className={styles.hero}>
    			<span>👏 Hey, welcome</span>
    			<h1>News about the <span>React</span> world.</h1>
    			<p>
    				Get access to all the publications<br />
    				<span>For $9,90 month</span>
    			</p>

          <SubscribeButton />
    		</section>

    		<img src="/images/avatar.svg" alt="Garota codando" />
    	</main>
    </>
  )
}
