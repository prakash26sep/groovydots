import Head from "next/head";
import Header from "../../components/header";
import styles from "../styles/Home.module.css";

export default function ContactUs() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Groovy Dots</title>
        <meta name="description" content="Groovy Dots" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <h1>Contact Us</h1>
      </main>
    </div>
  );
}
