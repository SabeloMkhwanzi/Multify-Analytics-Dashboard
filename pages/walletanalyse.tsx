import React from "react";
import styles from "../styles/Home.module.css";
import { HorizontalNarbar, WalletInterface } from "../components";

export default function walletanalyse() {
  return (
    <div className={styles.container}>
      <HorizontalNarbar />
      <WalletInterface />
    </div>
  );
}
