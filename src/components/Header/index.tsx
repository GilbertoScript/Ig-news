// Importações
import styles from './styles.module.scss'
import { SignInButton } from '../SignInButton'

// Como o header irá ficar em todas as páginas, colocamos ele no _app.tsx
export function Header() {
	
	return (
		<header className={styles.headerContainer}>
			<div className={styles.headerContent}>
				<h1>Ig.news</h1>
				<nav>
					<a className={styles.active} href="#">Home</a>
					<a href="#">Post</a>
				</nav>

				<SignInButton />
			</div>
		</header>
	)
}