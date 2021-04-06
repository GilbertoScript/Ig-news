import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/client'

import styles from './styles.module.scss'

export function SignInButton() {

	const [sesssion] = useSession()
	
	// Caso o usuário esteja ou não logado, será exibido um botão distinto
	return sesssion ? (

		<button type="button" className={styles.SignInButton} onClick={() => signOut()}>
			<FaGithub color="#04d361" />
			
				{sesssion.user.name}

			<FiX color="#737380" className={styles.closeIcon} />
		</button>


	) : (

		<button type="button" className={styles.SignInButton} onClick={() => signIn('github')}>
			<FaGithub color="#eba417" />
			Sign in with Github
		</button>

	)
}