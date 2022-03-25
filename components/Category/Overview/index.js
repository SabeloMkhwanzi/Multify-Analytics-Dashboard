import React, { Component } from "react";
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

import DexSelectBtn from "../DexSelectBtn";

//API Key
const apikey = "ckey_4e73d56514984838ab3206fbaf4";

class Overview extends Component {
  state = {
    items: [],
  };

  //xy=k is a generalized Uniswap-like endpoints for exchanges on various chains.

  //Summary overview
  //ecosystem chart data
  //https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/ecosystem/?quote-currency=USD&format=JSON&key=ckey_4e73d56514984838ab3206fbaf4
  // health data
  //https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/health/?quote-currency=USD&format=JSON&key=ckey_4e73d56514984838ab3206fbaf4

  getApi = async (e) => {
    const chainId = e.target.elements.chainId.value;
    e.preventDefault();
    const dexName = e.target.elements.dexName.value;
    e.preventDefault();

    const api_call = await fetch(
      `https://api.covalenthq.com/v1/${chainId}/xy=k/${dexName}/ecosystem/?quote-currency=USD&format=JSON&key=${apikey}`
    );
    const data = await api_call.json();
    this.setState({ items: data.data.items });

    console.log(this.state.items);
  };

  render() {
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

        <DexSelectBtn getApi={this.getApi} />

        {this.state.items.map((item) => (
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

        {this.state.items.map((item) => (
          <HStack key={item.chain_id} mx={5}>
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Badge color="Blue.900" rounded="full" px="2" bg="#243036">
                  <Text color="white"> Dex Name</Text>
                </Badge>
                <Box
                  color="white"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="lg"
                  textTransform="uppercase"
                  ml="2"
                >
                  <Text color="white">{item.dex_name}</Text>
                </Box>
              </Box>
            </Box>

            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Badge color="Blue.900" rounded="full" px="2" bg="#243036">
                  <Text color="white">Price Quote</Text>
                </Badge>
                <Box
                  color="white"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="lg"
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
      </>
    );
  }
}
export default Overview;
