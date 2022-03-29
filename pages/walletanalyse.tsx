import React from "react";
import styles from "../styles/Home.module.css";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { HorizontalNarbar, WalletInterface } from "../components";

export default function Walletanalyse() {
  const BoxBgColor = useColorModeValue("#E4EFE7", "gray.800");

  return (
    <Box className={styles.container} bgColor={BoxBgColor} minHeight="100vh">
      <HorizontalNarbar />
      <WalletInterface />
    </Box>
  );
}
