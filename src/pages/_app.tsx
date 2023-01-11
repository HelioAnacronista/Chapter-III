import { AppProps } from 'next/app' 

//app() carrega varias vezes com os clickes do usuario
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
 