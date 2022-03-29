import React from "react";
import {
  Box,
  HStack,
  useDisclosure,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from "@chakra-ui/react";

import { GiWallet } from "react-icons/gi";

// Import Wagmi hooks
import { useConnect, useAccount, useBalance } from "wagmi";

export default function WalletModel() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // Wallet connect function
  const [{ data: connectData, error: connectError }, connect] = useConnect();
  // Connected account details
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  });

  // bgColor
  const bg = useColorModeValue("white", "gray.800");

  // Button bgColor
  const bgColor = useColorModeValue("blue.200", "blue.500");
  const ButtonColorMode = useColorModeValue("#319795", "#00AF91");
  // Fetching balance information
  const [{ data: getBalance }] = useBalance({
    addressOrName: accountData?.address,
  });

  if (accountData) {
    return (
      <Box>
        <HStack>
          <Box
            bg={bg}
            my={-5}
            px={2}
            py={1}
            maxH={20}
            borderWidth={1}
            borderRadius="xl"
            borderColor="gray.500"
            right="4.5rem"
          >
            <Text fontSize="xs" as="address" isTruncated maxWidth={150}>
              {accountData.ens?.name
                ? `${accountData.ens?.name} (${accountData.address})`
                : accountData.address}
            </Text>
            {/* <Text fontSize="xs" as="samp">
              Balance: {`${Number(getBalance?.formatted).toFixed(3)} ETH`}
            </Text> */}
          </Box>
          <Button
            borderRadius="lg"
            right="4.5rem"
            bgColor={ButtonColorMode}
            leftIcon={<GiWallet />}
            onClick={disconnect}
            shadow="lg"
          >
            Disconnect
          </Button>
        </HStack>
      </Box>
    );
  }
  return (
    <>
      <Button
        borderRadius="lg"
        borderColor="gray.500"
        right="4.5rem"
        bgColor={ButtonColorMode}
        leftIcon={<GiWallet />}
        onClick={onOpen}
        shadow="lg"
      >
        Connect
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="2xl" width="md">
          <ModalHeader>Select Wallet</ModalHeader>

          <ModalBody>
            {connectData.connectors.map((x) => (
              <HStack py={2} key={x.id}>
                <Button
                  w="full"
                  borderRadius="full"
                  bgColor={ButtonColorMode}
                  disabled={!x.ready}
                  onClick={() => connect(x)}
                >
                  {`${x.name}${!x.ready ? " (unsupported)" : ""}`}
                </Button>
              </HStack>
            ))}
          </ModalBody>

          <ModalFooter>
            {connectError && (
              <Box alignItems="start" pos="absolute" pl={4} left={1}>
                {connectError?.message ?? "Failed to connect"}
              </Box>
            )}
            <Button
              borderRadius="lg"
              color="white"
              bg="red.400"
              mr={3}
              onClick={onClose}
            >
              CANCEL
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
