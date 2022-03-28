import React from "react";
import { HorizontalNarbar } from "../components";
import DexSwapLayout from "../components/DefiInterfaces/DexSwapLayout";
import styles from "../styles/Home.module.css";
import { Box } from "@chakra-ui/react";

export default function swapinterface() {
  return (
    <Box className={styles.container} bgColor="gray.800" minHeight="100vh">
      <HorizontalNarbar />
      <DexSwapLayout />
    </Box>
  );
}
