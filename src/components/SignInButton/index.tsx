import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'

export function SignInButton() {

	const isUserLoggedIn = true;
	
	// Caso o usuário esteja ou não logado, será exibido um botão distinto
	return isUserLoggedIn ? (

		<button type="button" className={styles.SignInButton}>
			<FaGithub color="#04d361" />
			Nome do usuário
			<FiX color="#737380" className={styles.closeIcon} />
		</button>


	) : (

		<button type="button" className={styles.SignInButton}>
			<FaGithub color="#eba417" />
			Sign in with Github
		</button>

	)
}