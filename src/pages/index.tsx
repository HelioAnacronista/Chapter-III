import styles from './home.module.scss';

import Heade from "next/head";

export default function Home() {
  return (
    <>
      <Heade>
        <title>Home | ig.news</title>
      </Heade>
      
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
            <span>👏 Hey, welcome</span>
            <h1>News about the <span>React</span> world.</h1>
            <p>
              Get access to all the publications <br />
              <span>for $9.90 month</span>

            </p>
        </section>

        <img src="/images/avatar.svg" alt="girl coding" />
      </main>
    </>
  );
}
