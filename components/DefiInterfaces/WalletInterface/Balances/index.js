import React from "react";
import {
  chakra,
  Flex,
  useColorModeValue,
  Button,
  useBreakpointValue,
  Stack,
  SimpleGrid,
  Box,
  Text,
  Avatar,
} from "@chakra-ui/react";
import millify from "millify";

export default function Balances({ getBalance }) {
  const dataColor = useColorModeValue("white", "gray.800");
  const bg = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("gray.100", "gray.700");

  return (
    <>
      <Flex
        w="full"
        bg="gray.800"
        alignItems="center"
        justifyContent="center"
        borderRadius={20}
        // bg="#243036"
      >
        <Stack
          direction={{ base: "column" }}
          w="full"
          bg={{ md: "#243036" }}
          shadow="lg"
          borderRadius={20}
        >
          return (
          <Flex direction={{ base: "row", md: "column" }} borderRadius={20}>
            <SimpleGrid
              borderTopRadius={20}
              textAlign="center"
              spacingY={4}
              columns={[1, null, 4]}
              w={{ base: 120, md: "full" }}
              textTransform="uppercase"
              bg="#303E46"
              color={"gray.100"}
              py={{ base: 1, md: 4 }}
              px={{ base: 2, md: 10 }}
              fontSize="md"
              fontWeight="semibold"
            >
              <span>Token</span>
              <span>Symbol</span>
              <span>Crypto Balance</span>
              <span>Fiat Balance</span>
            </SimpleGrid>

            {getBalance.map((item) => (
              <SimpleGrid
                spacingY={4}
                borderRadius={20}
                columns={[1, null, 4]}
                w="full"
                py={10}
                px={10}
                as="samp"
                fontSize="lg"
                textAlign="center"
                key={item.logo_url}
              >
                <Stack direction="row" borderRadius={20}>
                  <Avatar
                    size="sm"
                    name={item.contract_name}
                    src={item.logo_url}
                  />
                  <Text>{item.contract_address}</Text>
                </Stack>
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {item.contract_ticker_symbol}
                </chakra.span>
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {item.balance}
                </chakra.span>
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {/* ${item.quote_rate} */}
                </chakra.span>
              </SimpleGrid>
            ))}
          </Flex>
          );
        </Stack>
      </Flex>
    </>
  );
}
