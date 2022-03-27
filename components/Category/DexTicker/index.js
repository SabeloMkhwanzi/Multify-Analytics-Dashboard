import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Flex, useColorModeValue, Text } from "@chakra-ui/react";
import Ticker from "react-ticker";

//API Key
const apikey = "ckey_4e73d56514984838ab3206fbaf4";

function DexTicker() {
  const [items, setItems] = useState([]);
  const bg1 = useColorModeValue("white", "gray.800");
  const color1 = useColorModeValue("gray.800", "gray.400");
  const bg2 = useColorModeValue("brand.200", "brand.300");
  const color2 = useColorModeValue("brand.800", "brand.900");
  const color3 = useColorModeValue("gray.800", "white");
  const color4 = useColorModeValue("gray.600", "gray.300");
  const bg3 = useColorModeValue("#F9FAFB", "gray.600");

  useEffect(() => {
    getData();
  }, []);

  //xy=k is a generalized Uniswap-like endpoints for exchanges on various chains.
  // supported DEXes
  //https://api.covalenthq.com/v1/xy=k/supported_dexes/?quote-currency=USD&format=JSON&key=ckey_4e73d56514984838ab3206fbaf4

  const getData = async () => {
    //Using fetch
    const response = await axios.get(
      `https://api.covalenthq.com/v1/xy=k/supported_dexes/?quote-currency=USD&format=JSON&key=${apikey}`
    );
    console.log(response.data.data);
    setItems(response.data.data.items);
    {
      console.log(items);
    }
  };

  return (
    <Ticker offset="run-in" speed={10}>
      {({}) => (
        <Flex
          borderRadius="xl"
          bg="#243036"
          p={0.1}
          w="full"
          alignItems="center"
          justifyContent="center"
          borderColor="gray.600"
          borderWidth={1}
          mb={8}
        >
          {items.map((item) => (
            <Box
              w="200"
              maxW="xs"
              mx="auto"
              px={4}
              py={3}
              bg="#243036"
              shadow="md"
              key={item.factory_contract_address}
            >
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="md" color={color1}>
                  {item.chain_name}
                </Text>

                <Text
                  bg={bg2}
                  color="green.500"
                  px={3}
                  py={1}
                  rounded="full"
                  fontSize="xs"
                >
                  {item.chain_id}
                </Text>
              </Flex>

              <Box>
                <Text fontSize="lg" fontWeight="bold" mt={2} color={color3}>
                  {item.dex_name}
                </Text>
              </Box>
            </Box>
          ))}
        </Flex>
      )}
    </Ticker>
  );
}
export default DexTicker;
