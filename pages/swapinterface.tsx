import React from "react";
import { HorizontalNarbar } from "../components";
import SwapInterface from "../components/DefiInterfaces/SwapInterface";
import styles from "../styles/Home.module.css";

export default function swapinterface() {
  return (
    <div className={styles.container}>
      <HorizontalNarbar />
      <SwapInterface />
    </div>
  );
}
