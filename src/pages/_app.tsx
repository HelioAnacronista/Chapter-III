import { AppProps } from 'next/app'
import { Header } from '../components/Header/index'

//Provides para testar se esta logado
import { SessionProvider as NextAuthProvider} from 'next-auth/react'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  )
}

export default MyApp