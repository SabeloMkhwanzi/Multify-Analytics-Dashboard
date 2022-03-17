import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { HorizontalNarbar } from "../components";
//import { VerticalNarbar } from "../components";
import Summary from "./summary";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Multify Analytics</title>
        <meta name="description" content="Multi-Chain Analyses Defi Dashbord" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Summary />
      </div>
    </div>
  );
};

export default Home;
