// /* eslint-disable react/display-name */
// import React, { forwardRef } from "react";
// import {
//   Table,
//   Thead,
//   Tbody,
//   Button,
//   Heading,
//   Tr,
//   Th,
//   Td,
//   Flex,
//   Box,
//   Text,
//   TableCaption,
//   Spinner,
//   useToast,
// } from "@chakra-ui/react";
// import Pagination from "@choc-ui/paginator";

// const TokenCards = ({ getdata }) => {
//   //const toast = useToast();
//   //const [data, setData] = React.useState([]);
//   const [loading, setLoading] = React.useState(true);
//   const [current, setCurrent] = React.useState(1);
//   const pageSize = 10;
//   const offset = (current - 1) * pageSize;
//   const getdata = getdata.slice(offset, offset + pageSize);

//   const Prev = forwardRef((props, ref) => (
//     <Button ref={ref} {...props}>
//       Prev
//     </Button>
//   ));
//   const Next = forwardRef((props, ref) => (
//     <Button ref={ref} {...props}>
//       Next
//     </Button>
//   ));

//   const itemRender = (_, type) => {
//     if (type === "prev") {
//       return Prev;
//     }
//     if (type === "next") {
//       return Next;
//     }
//   };
//   return loading ? (
//     <Spinner />
//   ) : (
//     <>
//       <TableCaption>
//         <Pagination
//           current={current}
//           onChange={(page) => {
//             setCurrent(page);
//             toast({
//               title: "Pagination.",
//               description: `You changed to page ${page}`,
//               variant: "solid",
//               duration: 9000,
//               isClosable: true,
//               position: "top-right",
//             });
//           }}
//           pageSize={pageSize}
//           total={getdata.length}
//           itemRender={itemRender}
//           paginationProps={{
//             display: "flex",
//             pos: "absolute",
//             left: "50%",
//             transform: "translateX(-50%)",
//           }}
//           colorScheme="red"
//           focusRing="green"
//         />
//       </TableCaption>
//       <Flex
//         bg="#243036"
//         p={0.1}
//         w="full"
//         alignItems="center"
//         justifyContent="center"
//         borderColor="gray.600"
//         borderWidth={1}
//         mb={8}
//       >
//         {getdata.map((item) => (
//           <Box
//             w="200"
//             maxW="xs"
//             mx="auto"
//             px={4}
//             py={3}
//             bg="#243036"
//             shadow="md"
//             key={item.factory_contract_address}
//           >
//             <Flex justifyContent="space-between" alignItems="center">
//               <Text fontSize="md" color={color1}>
//                 {item.chain_name}
//               </Text>

//               <Text
//                 bg={bg2}
//                 color="green.500"
//                 px={3}
//                 py={1}
//                 rounded="full"
//                 fontSize="xs"
//               >
//                 {item.chain_id}
//               </Text>
//             </Flex>

//             <Box>
//               <Text fontSize="lg" fontWeight="bold" mt={2} color={color3}>
//                 {item.dex_name}
//               </Text>
//             </Box>
//           </Box>
//         ))}
//       </Flex>
//     </>
//   );
// };

// export default TokenCards;
