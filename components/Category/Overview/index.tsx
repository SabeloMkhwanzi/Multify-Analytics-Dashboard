import React, { useEffect, useState } from "react";
import {
  Box,
  SimpleGrid,
  Text,
  useColorModeValue,
  HStack,
  Badge,
} from "@chakra-ui/react";
import millify from "millify";
import moment from "moment";

import DexSelectBtn from "../DexSelectBtn";
import { LiquidityChart, VolumeChart } from "../..";

// COVALENT API Key
const API_KEY = process.env.NEXT_PUBLIC_COVALENTKEY;

function Overview() {
  const [items, setItems] = useState([]);
  const [liquidData, setLiquidGraph] = useState([]);
  const [VolumeData, setVolumeGraph] = useState([]);
  const BoxBgColor = useColorModeValue("gray.200", "#243036");
  const TextColorMode = useColorModeValue("gray.500", "gray.400");
  const TextColorMode1 = useColorModeValue("gray.600", "white");
  const BoxBorderColor = useColorModeValue("gray.200", "gray.500");

  const formatCash = (n: number) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1);
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1);
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1);
    if (n >= 1e12) return +(n / 1e12).toFixed(1);
  };

  useEffect(() => {
    items;
    liquidData;
    VolumeData;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //handle Ecosystem data
  const getApi = async (e: {
    target: { elements: { chainId: { value: any }; dexName: { value: any } } };
    preventDefault: () => void;
  }) => {
    const chainId = e.target.elements.chainId.value;
    e.preventDefault();
    const dexName = e.target.elements.dexName.value;
    e.preventDefault();

    const response = await fetch(
      `https://api.covalenthq.com/v1/${chainId}/xy=k/${dexName}/ecosystem/?quote-currency=USD&format=JSON&key=${API_KEY}`
    );
    const data = await response.json();
    setItems(data.data.items);
    setLiquidGraph(
      data.data.items[0].liquidity_chart_7d
        .map((item: { dt: string; liquidity_quote: any }) => ({
          x: moment().format(item.dt),
          y: formatCash(item.liquidity_quote),
        }))
        .reverse()
    );
    setVolumeGraph(
      data.data.items[0].volume_chart_7d
        .map((item: { dt: string; volume_quote: any }) => ({
          x: moment().format(item.dt),
          y: formatCash(item.volume_quote),
        }))
        .reverse()
    );
  };

  return (
    <>
      <Box justifyContent="center">
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
            Summary Analytics
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

        {items.map((item) => (
          <SimpleGrid
            columns={[1, null, 4]}
            spacing={5}
            key={item.chain_id}
            mt={7}
          >
            <Box
              w="full"
              maxW="xs"
              mx={10}
              px={5}
              ps={5}
              py={3}
              bg={BoxBgColor}
              shadow="xl"
              rounded="md "
              borderRadius="lg"
              borderWidth={1}
              borderColor={BoxBorderColor}
            >
              <Box>
                <Text
                  color={TextColorMode}
                  fontSize="sm"
                  fontWeight="thin"
                  mt={2}
                >
                  Total Fees(24h)
                </Text>
                <Text
                  fontSize="lg"
                  mt={2}
                  textAlign="center"
                  color={TextColorMode1}
                  as="samp"
                  fontWeight="bold"
                >
                  ${formatCash(item.total_fees_24h)}
                </Text>
              </Box>
            </Box>
            <Box
              w="full"
              maxW="xs"
              mx={10}
              px={4}
              py={3}
              bg={BoxBgColor}
              shadow="xl"
              rounded="md "
              borderRadius="lg"
              borderWidth={1}
              borderColor={BoxBorderColor}
            >
              <Box>
                <Text
                  color={TextColorMode}
                  fontSize="sm"
                  fontWeight="thin"
                  mt={2}
                >
                  Total Pair (7d)
                </Text>
                <Text
                  fontWeight="bold"
                  fontSize="lg"
                  mt={2}
                  color={TextColorMode1}
                  as="samp"
                >
                  {item.total_active_pairs_7d}
                </Text>
              </Box>
            </Box>
            <Box
              w="full"
              maxW="xs"
              mx={10}
              px={4}
              py={3}
              bg={BoxBgColor}
              shadow="xl"
              rounded="md "
              borderRadius="lg"
              borderWidth={1}
              borderColor={BoxBorderColor}
            >
              <Box>
                <Text
                  fontSize="sm"
                  fontWeight="thin"
                  mt={2}
                  color={TextColorMode}
                >
                  Total Swaps(24h)
                </Text>
                <Text
                  fontWeight="bold"
                  fontSize="lg"
                  mt={2}
                  color={TextColorMode1}
                  as="samp"
                >
                  {item.total_swaps_24h}
                </Text>
              </Box>
            </Box>
          </SimpleGrid>
        ))}
        {items.map((item) => (
          <HStack direction={["column", "row"]} key={item.chain_id} mx={5}>
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Badge color="Blue.900" rounded="full" px="2" bg="#319795">
                  <Text color="white"> Dex Name</Text>
                </Badge>
                <Box
                  color="white"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="md"
                  textTransform="uppercase"
                  ml="2"
                >
                  <Text color={TextColorMode1}>{item.dex_name}</Text>
                </Box>
              </Box>
            </Box>

            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Badge color="Blue.900" rounded="full" px="2" bg="#319795">
                  <Text color="white">Price Quote</Text>
                </Badge>
                <Box
                  color="white"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="md"
                  textTransform="uppercase"
                  ml="2"
                >
                  <Text color={TextColorMode1}>
                    ${millify(item.gas_token_price_quote)}
                  </Text>
                </Box>
              </Box>
            </Box>
          </HStack>
        ))}

        <Box
          my={5}
          w={[300, 400, 1100]}
          mx={10}
          px={5}
          ps={5}
          py={3}
          bg={BoxBgColor}
          shadow="xl"
          rounded="md "
          borderRadius="lg"
          borderWidth={1}
          borderColor={BoxBorderColor}
          h="50em"
          as="iframe"
          src="https://tokenterminal.com/terminal/projects/pangolin/embed/key_metrics"
        />
      </Box>
    </>
  );
}
export default Overview;
