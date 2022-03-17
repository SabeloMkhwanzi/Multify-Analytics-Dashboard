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
            borderColor="blue.500"
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
            borderRadius="2xl"
            right="4.5rem"
            colorScheme="blue"
            leftIcon={<GiWallet />}
            onClick={disconnect}
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
        borderRadius="2xl"
        right="4.5rem"
        colorScheme="blue"
        leftIcon={<GiWallet />}
        onClick={onOpen}
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
                  bgColor={bgColor}
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
              borderRadius="full"
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

// import { useEffect, useState } from "react";
// import {
//   VStack,
//   useDisclosure,
//   Button,
//   Text,
//   HStack,
//   Select,
//   Input,
//   Box,
// } from "@chakra-ui/react";
// import SelectWalletModal from "./Modal";
// import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
// import { Tooltip } from "@chakra-ui/react";
// import { networkParams } from "./networks";
// import { toHex, truncateAddress } from "./utils";
// import { useConnect, useAccount, useNetwork, useSignMessage } from "wagmi";

// export default function Home() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [{ data: connectData }] = useConnect();
//   const [{ data: accountData }, disconnect] = useAccount();
//   const [{ data: networkData }, switchNetwork] = useNetwork();
//   const [message, setMessage] = useState("");
//   const [{ data: signData }, signMessage] = useSignMessage({
//     message,
//   });

//   const [error, setError] = useState("");
//   const [network, setNetwork] = useState(undefined);

//   const handleNetwork = (e) => {
//     const id = e.target.value;
//     setNetwork(Number(id));
//   };

//   const handleInput = (e) => {
//     const msg = e.target.value;
//     setMessage(msg);
//   };

//   return (
//     <>
//       <Text position="absolute" top={0} right="15px">
//         If you're in the sandbox, first "Open in New Window" ⬆️
//       </Text>
//       <VStack justifyContent="center" alignItems="center" h="100vh">
//         <HStack marginBottom="10px">
//           <Text
//             margin="0"
//             lineHeight="1.15"
//             fontSize={["1.5em", "2em", "3em", "4em"]}
//             fontWeight="600"
//           >
//             Let's connect with
//           </Text>
//           <Text
//             margin="0"
//             lineHeight="1.15"
//             fontSize={["1.5em", "2em", "3em", "4em"]}
//             fontWeight="600"
//             sx={{
//               background: "linear-gradient(90deg, #1652f0 0%, #b9cbfb 70.35%)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             Wagmi
//           </Text>
//         </HStack>
//         <HStack>
//           {!connectData.connected ? (
//             <Button onClick={onOpen}>Connect Wallet</Button>
//           ) : (
//             <Button onClick={disconnect}>Disconnect</Button>
//           )}
//         </HStack>
//         <VStack justifyContent="center" alignItems="center" padding="10px 0">
//           <HStack>
//             <Text>{`Connection Status: `}</Text>
//             {connectData.connected ? (
//               <CheckCircleIcon color="green" />
//             ) : (
//               <WarningIcon color="#cd5700" />
//             )}
//           </HStack>

//           {!accountData ? (
//             <Text>Account: No Account</Text>
//           ) : (
//             <Tooltip label={accountData.address} placement="right">
//               <Text>{`Account: ${truncateAddress(accountData.address)}`}</Text>
//             </Tooltip>
//           )}
//           <Text>{`Network ID: ${
//             networkData.chain ? networkData.chain.id : "No Network"
//           }`}</Text>
//         </VStack>
//         {connectData.connected && (
//           <HStack justifyContent="flex-start" alignItems="flex-start">
//             <Box
//               maxW="sm"
//               borderWidth="1px"
//               borderRadius="lg"
//               overflow="hidden"
//               padding="10px"
//             >
//               <VStack>
//                 <Button
//                   onClick={() => switchNetwork(network)}
//                   isDisabled={!network}
//                 >
//                   Switch Network
//                 </Button>
//                 <Select placeholder="Select network" onChange={handleNetwork}>
//                   <option value="3">Ropsten</option>
//                   <option value="4">Rinkeby</option>
//                   <option value="42">Kovan</option>
//                   {/* <option value="1666600000">Harmony</option> */}
//                   {/* <option value="42220">Celo</option> */}
//                 </Select>
//               </VStack>
//             </Box>
//             <Box
//               maxW="sm"
//               borderWidth="1px"
//               borderRadius="lg"
//               overflow="hidden"
//               padding="10px"
//             >
//               <VStack>
//                 <Button
//                   onClick={async () => await signMessage()}
//                   isDisabled={!message}
//                 >
//                   Sign Message
//                 </Button>
//                 <Input
//                   placeholder="Set Message"
//                   maxLength={20}
//                   onChange={handleInput}
//                   w="140px"
//                 />
//                 {signData ? (
//                   <Tooltip label={signData} placement="bottom">
//                     <Text>{`Signature: ${truncateAddress(signData)}`}</Text>
//                   </Tooltip>
//                 ) : null}
//               </VStack>
//             </Box>
//           </HStack>
//         )}
//         <Text>{error ? error.message : null}</Text>
//       </VStack>
//       <SelectWalletModal isOpen={isOpen} closeModal={onClose} />
//     </>
//   );
// }
