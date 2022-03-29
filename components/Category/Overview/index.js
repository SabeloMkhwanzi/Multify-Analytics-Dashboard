import React, { useEffect, useState } from "react";
import {
  Box,
  chakra,
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
import DexTicker from "../DexTicker";

//API Key
const apikey = "ckey_4e73d56514984838ab3206fbaf4";
//const API_KEY = process.env['REACT_APP_COVALENT_API']

function Overview() {
  const [items, setItems] = useState([]);
  const [liquidData, setLiquidGraph] = useState([]);
  const [VolumeData, setVolumeGraph] = useState([]);
  const [graphLoader, setGraphLoader] = useState(true);
  const [graphErr, setErr] = useState(false);
  // const currentDay = moment().format("YYYY-MM-DD");

  const formatCash = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1);
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1);
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1);
    if (n >= 1e12) return +(n / 1e12).toFixed(1);
  };

  //const m = moment(new Date("2019/06/01 14:04:03"));

  //let timestamp = Number(new Date());

  useEffect(() => {
    items;
    liquidData;
    VolumeData;
  }, []);

  //handle Ecosystem data
  const getApi = async (e) => {
    const chainId = e.target.elements.chainId.value;
    e.preventDefault();
    const dexName = e.target.elements.dexName.value;
    e.preventDefault();

    const response = await fetch(
      `https://api.covalenthq.com/v1/${chainId}/xy=k/${dexName}/ecosystem/?quote-currency=USD&format=JSON&key=${apikey}`
    );
    const data = await response.json();
    setItems(data.data.items);
    // setGraph(data.data.items);
    setLiquidGraph(
      data.data.items[0].liquidity_chart_7d
        .map((item) => ({
          x: moment().format(item.dt),
          y: formatCash(item.liquidity_quote),
        }))
        .reverse()
    );
    setVolumeGraph(
      data.data.items[0].volume_chart_7d
        .map((item) => ({
          x: moment().format(item.dt),
          y: formatCash(item.volume_quote),
        }))
        .reverse()
    );
  };

  return (
    <>
      <DexTicker />
      <Box justifyContent="center" mx="24">
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
        {console.log(items.dex_name)}
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
              bg="#243036"
              shadow="xl"
              rounded="md "
              borderRadius="lg"
              borderWidth={1}
              borderColor="gray.600"
            >
              <Box>
                <Text color="gray.400" fontSize="sm" fontWeight="thin" mt={2}>
                  Total Fees(24h)
                </Text>
                <Text
                  fontSize="lg"
                  mt={2}
                  textAlign="center"
                  color="white"
                  as="samp"
                  fontWeight="bold"
                >
                  ${item.total_fees_24h}
                </Text>
              </Box>
            </Box>
            <Box
              w="full"
              maxW="xs"
              mx={10}
              px={4}
              py={3}
              bg="#243036"
              shadow="xl"
              rounded="md "
              borderRadius="lg"
              borderWidth={1}
              borderColor="gray.600"
            >
              <Box>
                <Text color="gray.400" fontSize="sm" fontWeight="thin" mt={2}>
                  Total Pair (7d)
                </Text>
                <Text
                  fontWeight="bold"
                  fontSize="lg"
                  mt={2}
                  color="white"
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
              bg="#243036"
              shadow="xl"
              rounded="md "
              borderRadius="lg"
              borderWidth={1}
              borderColor="gray.600"
            >
              <Box>
                <Text fontSize="sm" fontWeight="thin" mt={2} color="gray.400">
                  Total Swaps(24h)
                </Text>
                <Text
                  fontWeight="bold"
                  fontSize="lg"
                  mt={2}
                  color="white"
                  as="samp"
                >
                  {item.total_swaps_24h}
                </Text>
              </Box>
            </Box>
          </SimpleGrid>
        ))}
        {items.map((item) => (
          <HStack key={item.chain_id} mx={5}>
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
                  <Text color="white">{item.dex_name}</Text>
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
                  <Text color="white">
                    ${millify(item.gas_token_price_quote)}
                  </Text>
                </Box>
              </Box>
            </Box>
          </HStack>
        ))}
        <SimpleGrid alignContent="center" columns={[2, null, 1]} mt={15}>
          <Box>
            <Text
              ml={10}
              right={2}
              letterSpacing={1}
              fontSize="lg"
              fontWeight="thin"
              decoration="lightblue"
              textTransform="uppercase"
            >
              Liquidity Chart
            </Text>
          </Box>
          <Box
            my={5}
            w="full"
            maxW="md"
            mx={10}
            px={5}
            ps={5}
            py={3}
            bg="#243036"
            shadow="xl"
            rounded="md "
            borderRadius="lg"
            borderWidth={1}
            borderColor="gray.600"
            h="400px"
            minW="72%"
          >
            <LiquidityChart liquid={liquidData} />
          </Box>
          <Text
            ml={10}
            right={2}
            letterSpacing={1}
            fontSize="lg"
            fontWeight="thin"
            decoration="lightblue"
            textTransform="uppercase"
          >
            Volume Chart
          </Text>
          <Box
            my={5}
            w="full"
            mx={10}
            maxW="md"
            px={5}
            ps={5}
            py={3}
            bg="#243036"
            shadow="xl"
            rounded="md "
            borderRadius="lg"
            borderWidth={1}
            borderColor="gray.600"
            h="400px"
            minW="72%"
          >
            <VolumeChart Volume={VolumeData} />
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}
export default Overview;

//xy=k is a generalized Uniswap-like endpoints for exchanges on various chains.

//Summary overview
//ecosystem chart data
//https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/ecosystem/?quote-currency=USD&format=JSON&key=ckey_4e73d56514984838ab3206fbaf4
// health data
//https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/health/?quote-currency=USD&format=JSON&key=ckey_4e73d56514984838ab3206fbaf4
