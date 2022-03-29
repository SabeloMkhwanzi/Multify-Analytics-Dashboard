import React from "react";
import { HorizontalNarbar } from "../components";
import DexSwapLayout from "../components/DefiInterfaces/DexSwapLayout";
import styles from "../styles/Home.module.css";
import { Box, useColorModeValue } from "@chakra-ui/react";

export default function Swapinterface() {
  const BoxBgColor = useColorModeValue("#E4EFE7", "gray.800");

  return (
    <Box className={styles.container} bgColor={BoxBgColor} minHeight="100vh">
      <HorizontalNarbar />
      <DexSwapLayout />
    </Box>
  );
}
