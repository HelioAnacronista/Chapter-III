import { GetServerSideProps, GetStaticProps } from "next";

import styles from "./home.module.scss";

import Heade from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";

//tipos de chamadas no next
/*
Client-side comentaios de post (pode carregar, não ou depois)
Server-side dados dinamicos
Static site generation compatilha para todos
*/

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Heade>
        <title>Home | ig.news</title>
      </Heade>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="girl coding" />
      </main>
    </>
  );
}

//requisiçao lado servido 
//(GetStaticProps - SSG) salva html statico usado para paginas staticas que todos vao ve
export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1MPQQSFq3MJVu9cb828ccQIl')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100),
  }
  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, //revalida o conteudo 24 hours
  }
}