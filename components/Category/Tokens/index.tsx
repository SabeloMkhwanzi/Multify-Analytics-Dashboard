import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

import DexSelectBtn from "../DexSelectBtn";
import TokenTable from "./TokenTable";

// COVALENT API Key
const API_KEY = process.env.NEXT_PUBLIC_COVALENTKEY;

function Tokens() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    items;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getApi = async (e: {
    target: { elements: { chainId: { value: any }; dexName: { value: any } } };
    preventDefault: () => void;
  }) => {
    const chainId = e.target.elements.chainId.value;
    e.preventDefault();
    const dexName = e.target.elements.dexName.value;
    e.preventDefault();

    const response = await fetch(
      `https://api.covalenthq.com/v1/${chainId}/xy=k/${dexName}/tokens/?quote-currency=USD&format=JSON&key=${API_KEY}`
    );

    const data = await response.json();
    setItems(data.data.items);
    //console.log(items);
  };

  return (
    <>
      <Box>
        <Text
          ml={10}
          right={2}
          letterSpacing={1}
          fontSize="xl"
          fontWeight="semibold"
          decoration="lightblue"
          textTransform="uppercase"
        >
          Tokens Analytics
        </Text>
        <Text
          ml={10}
          right={2}
          color="gray.400"
          letterSpacing={1}
          fontSize="md"
          fontWeight="thin"
          decoration="lightblue"
          textTransform="uppercase"
        >
          Overview
        </Text>
      </Box>
      <DexSelectBtn getApi={getApi} />
      <TokenTable data={items} />
    </>
  );
}
export default Tokens;
