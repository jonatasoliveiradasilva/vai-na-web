import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link"

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1 className={styles.titulo}>Eu sou a Home</h1>
      <Link href="/">Home</Link>
      <Link href="/sobre">Sobre</Link>
    </>
  );
}

export default Home;
