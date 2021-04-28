import { useState } from 'react';
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import { signIn, useSession, signOut } from 'next-auth/client';

import styles from './styles.module.scss';
export function SignInButton() {
    const [session] = useSession();
    return (
        <button type="button" className={styles.signInButton} onClick={() => {
            if (!session) {
                signIn()
            }
        }}>
            <FaGithub color={!session ? '#eba417' : '#04d361'} />
            {!session ? 'Sign in with Github' : `${session.user.name}`}
            {session && (<FiX className={styles.closeIcon} color="#737380" onClick={() => {
                signOut()
            }} />)}

        </button>
    )
}