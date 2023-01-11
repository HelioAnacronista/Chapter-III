import styles from "../styles/home.module.scss";
import Heade from "next/head";

export default function Home() {
  return (
    <>
      <Heade>
        <title>ig.news</title>
      </Heade>
      <h1 className={styles.title}>Hello</h1>
    </>
  );
}
