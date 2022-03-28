import React, { useEffect, useState } from "react";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import SwapInterface from "../DexSwapLayout/SwapInterface";
import DexSelectButton from "./DexSelectButton";

//const balancesEndpoint = "balances_v2";
const apikey = "ckey_4e73d56514984838ab3206fbaf4";
//const apikey = process.env.PUBLIC_COVALENT_API_KEY;

function DexSwapLayout() {
  const [items, setItems] = useState([]);
  const [tokenListData, setTokenlist] = useState([]);

  useEffect(() => {
    items;
    tokenListData;
  }, []);

  //https: //api.covalenthq.com/v1/1/address/0xF975206a46b4eD9f5F008AF9813B19bf083d94eE/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=false&key=ckey_4e73d56514984838ab3206fbaf4
  // https://api.covalenthq.com/v1/1/address/0xF975206a46b4eD9f5F008AF9813B19bf083d94eE/portfolio_v2/?quote-currency=USD&format=JSON&key=ckey_4e73d56514984838ab3206fbaf4
  // https://api.covalenthq.com/v1/1/address/0xF975206a46b4eD9f5F008AF9813B19bf083d94eE/transactions_v2/?quote-currency=USD&format=JSON&block-signed-at-asc=false&no-logs=false&key=ckey_4e73d56514984838ab3206fbaf4

  const getChain = async (e) => {
    const chainId = e.target.elements.chainId.value;
    e.preventDefault();
    const dexName = e.target.elements.dexName.value;
    e.preventDefault();

    const response = await fetch(
      `https://api.covalenthq.com/v1/${chainId}/xy=k/${dexName}/tokens/?quote-currency=USD&format=JSON&key=${apikey}`
    );
    const data = await response.json();
    setItems(data.data.items);
    setTokenlist(
      data.data.items
        .map((item) => ({
          name: item.chain_name,
          address: item.contract_address,
          symbol: item.contract_ticker_symbol,
          decimals: item.contract_decimals,
          chainId: item.chain_id,
          logoURI: item.logo_url,
        }))
        .reverse()
    );
    console.log(items);
  };

  return (
    <>
      <Box>
        <Box mt={7}>
          <Text
            ml={10}
            right={2}
            letterSpacing={1}
            fontSize="xl"
            fontWeight="semibold"
            decoration="lightblue"
            textTransform="uppercase"
          >
            Swap
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
            Interface
          </Text>
        </Box>
      </Box>
      {console.log(tokenListData)}
      <Stack direction="column">
        <Box justifyContent="center">
          <SwapInterface />
        </Box>

        <Box>
          <DexSelectButton getChain={getChain} />
        </Box>
      </Stack>
    </>
  );
}
export default DexSwapLayout;
