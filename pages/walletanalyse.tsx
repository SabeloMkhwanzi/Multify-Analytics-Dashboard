import React from "react";
import styles from "../styles/Home.module.css";
import { Box } from "@chakra-ui/react";
import { HorizontalNarbar, WalletInterface } from "../components";

export default function walletanalyse() {
  return (
    <Box className={styles.container} bgColor="gray.900" minHeight="100vh">
      <HorizontalNarbar />
      <WalletInterface />
    </Box>
  );
}
