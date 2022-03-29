import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

import DexSelectBtn from "../DexSelectBtn";
import TokenTable from "./TokenTable";
import DexTicker from "../DexTicker";

//API Key
const apikey = "ckey_4e73d56514984838ab3206fbaf4";
//const API_KEY = process.env['REACT_APP_COVALENT_API']

function Tokens() {
  const [items, setItems] = useState([]);

  //xy=k is a generalized Uniswap-like endpoints for exchanges on various chains.

  //Pools endpoint xy=k
  //https://api.covalenthq.com/v1/${chainId}/xy=k/${dexName}/tokens/?quote-currency=USD&format=JSON&key=${apikey}

  useEffect(() => {
    items;
  }, []);

  const getApi = async (e) => {
    const chainId = e.target.elements.chainId.value;
    e.preventDefault();
    const dexName = e.target.elements.dexName.value;
    e.preventDefault();

    const response = await fetch(
      `https://api.covalenthq.com/v1/${chainId}/xy=k/${dexName}/tokens/?quote-currency=USD&format=JSON&key=${apikey}`
    );

    const data = await response.json();
    setItems(data.data.items);
    console.log(items);
  };

  return (
    <>
      <DexTicker />
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
