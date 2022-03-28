import React, { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

import SelectButton from "./SelectButton";
import Balances from "./Balances";
import Transaction from "./Transaction";

//const balancesEndpoint = "balances_v2";
const apikey = "ckey_4e73d56514984838ab3206fbaf4";
//const apikey = process.env.PUBLIC_COVALENT_API_KEY;

function WalletInterface() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    items;
  }, []);

  //https: //api.covalenthq.com/v1/1/address/0xF975206a46b4eD9f5F008AF9813B19bf083d94eE/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=false&key=ckey_4e73d56514984838ab3206fbaf4
  // https://api.covalenthq.com/v1/1/address/0xF975206a46b4eD9f5F008AF9813B19bf083d94eE/portfolio_v2/?quote-currency=USD&format=JSON&key=ckey_4e73d56514984838ab3206fbaf4
  // https://api.covalenthq.com/v1/1/address/0xF975206a46b4eD9f5F008AF9813B19bf083d94eE/transactions_v2/?quote-currency=USD&format=JSON&block-signed-at-asc=false&no-logs=false&key=ckey_4e73d56514984838ab3206fbaf4

  const getWallet = async (e) => {
    const chainId = e.target.elements.chainId.value;
    e.preventDefault();
    const userAddress = e.target.elements.userAddress.value;
    e.preventDefault();
    const walletsStatus = e.target.elements.walletsStatus.value;
    e.preventDefault();

    const response = await fetch(
      `https://api.covalenthq.com/v1/${chainId}/address/${userAddress}/${walletsStatus}/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=${apikey}`
    );
    const data = await response.json();
    setItems(data.data.items);
    console.log(items);
  };

  return (
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
          Wallet Analytics
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
      <Box mx="25%" mt={10}>
        <SelectButton getWallet={getWallet} />
      </Box>

      <Box mx="10%" mt={10}>
        <Text
          ml={10}
          right={2}
          color="gray.400"
          letterSpacing={1}
          fontSize="md"
          fontWeight="semibold"
          decoration="lightblue"
          textTransform="uppercase"
        >
          Wallet Balance Overview
        </Text>
        <Balances getBalance={items} />
      </Box>

      <Box mx="10%" mt={10}>
        <Text
          ml={10}
          right={2}
          color="gray.400"
          letterSpacing={1}
          fontSize="md"
          fontWeight="semibold"
          decoration="lightblue"
          textTransform="uppercase"
        >
          Transaction History
        </Text>
        <Transaction getTransaction={items} />
      </Box>
      {console.log(items)}
    </Box>
  );
}
export default WalletInterface;
