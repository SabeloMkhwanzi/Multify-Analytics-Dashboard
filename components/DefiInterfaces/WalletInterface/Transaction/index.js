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
  VStack,
} from "@chakra-ui/react";
import millify from "millify";
//import Moment from "react-moment";

export default function Transaction({ getTransaction }) {
  console.log(getTransaction);
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
              color={"gray.500"}
              py={{ base: 1, md: 4 }}
              px={{ base: 2, md: 10 }}
              fontSize="md"
              fontWeight="semibold"
            >
              <span>Tx Hash</span>
              <span>Last Signed Blocks</span>
              <span>From address - To address</span>
              <span>Value</span>
            </SimpleGrid>

            {getTransaction.map((item) => (
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
                key={item.block_height}
              >
                <Stack direction="row" borderRadius={20}>
                  <Avatar size="sm" name="T X" src="" />
                  <Text isTruncated fontSize="sm">
                    {item.tx_hash}
                  </Text>
                </Stack>
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {/* <Moment parse="YYYY-MM-DD HH:mm"> */}
                  {item.block_signed_at}
                  {/* </Moment> */}
                  {item.block_height}
                </chakra.span>
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  <VStack>
                    <Text fontSize="xs" isTruncated>
                      From:{item.from_address}
                    </Text>
                    <Text fontSize="xs" isTruncated>
                      To:{item.to_address}
                    </Text>
                  </VStack>
                </chakra.span>
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  ${item.value}
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

{
  /* <Box
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
          <Stack direction="column">
            <Text
              fontSize="lg"
              mt={2}
              textAlign="center"
              color="white"
              as="samp"
              fontWeight="bold"
            >
              {}
            </Text>
            <Text
              fontSize="lg"
              mt={2}
              textAlign="center"
              color="white"
              as="samp"
              fontWeight="bold"
            >
              {}
            </Text>
            <Text
              fontSize="lg"
              mt={2}
              textAlign="center"
              color="white"
              as="samp"
              fontWeight="bold"
            >
              {}
            </Text>
          </Stack>
        </Box>
      </Box> */
}
