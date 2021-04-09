import styles from './styles.module.scss'

import { useSession, signIn } from 'next-auth/client'

interface SubscribeButtonProps {
	priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {

	const [session] = useSession();

	function handleSubscribe() {
		if(!session) {

			signIn('github')
			return
		}

		// Criação da checkout session

	}
	
	return (
		<button type="button" className={styles.subscribeButton} onClick={handleSubscribe}>
			Subscribe now
		</button>
	)
}