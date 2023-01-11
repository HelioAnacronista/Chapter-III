import Document, { Html, Head, Main, NextScript } from "next/document";

//Carrega so uma vez
export default class MyDocuments extends Document {
  render() {
    //meu jsx
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
            rel="stylesheet"
          />

          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}