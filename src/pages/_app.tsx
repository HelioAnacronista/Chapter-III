import "../styles/global.scss";

import { AppProps } from "next/app";


import { Header } from "../components/Header";

//app() carrega varias vezes com os clickes do usuario
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
    </>
  );
}
