import Head from "next/head";
import styles from "./styles.module.scss";

function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a>
            <time>{post.updatedAt}</time>
            <strong>{post.title}</strong>
            <p>{post.excerpt}</p>
          </a>
        </div>
      </main>
    </>
  );
}

export default Posts;
