import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

import { signIn, signOut, useSession } from 'next-auth/react'

export function SignInButton() {
  const { data: session } = useSession()

  //se tiver logado (1) se não (2)
  return session ? (
    <button
    onClick={() => signOut()}
    type="button" className={styles.signInButton}
    >
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX color="737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button 
    onClick={ () => signIn('github')}
    type="button" className={styles.signInButton}
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}
