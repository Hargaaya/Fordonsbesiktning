import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fordonsbesiktning</title>
        <meta name="description" content="Web app that helps you with inspecting vehicles according to TSFS 2017:54" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
