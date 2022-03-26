/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import {
  Table,
  Tr,
  Th,
  Td,
  Text,
  useColorModeValue,
  Avatar,
  HStack,
  Progress,
} from "@chakra-ui/react";
import {
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TableFooter,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//import millify from "millify";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    margin: "10px 10px",
    maxWidth: 1000,
    marginLeft: "5rem",
    marginTop: "3rem",
  },
  status: {
    fontWeight: "bold",
    fontSize: "0.75rem",
    borderRadius: 8,
    padding: "3px 10px",
    display: "inline-block",
  },
}));

const PoolTable = ({ data }) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(12);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  <Progress size="xs" isIndeterminate />;
  return (
    <>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table
          shadow="xl"
          rounded="md "
          borderRadius="lg"
          borderWidth={1}
          borderColor="gray.600"
          className={classes.table}
          aria-label="simple table"
          bg={useColorModeValue("white", "#243036")}
        >
          <TableHead>
            <TableRow>
              <Th bg="#303E46">
                <Text
                  letterSpacing={1}
                  fontSize="xs"
                  fontWeight="semibold"
                  decoration="lightblue"
                  textTransform="uppercase"
                  color={useColorModeValue("white", "gray.400")}
                >
                  NAME
                </Text>
              </Th>
              <Th bg="#303E46">
                <Text
                  letterSpacing={1}
                  fontSize="xs"
                  fontWeight="semibold"
                  decoration="lightblue"
                  textTransform="uppercase"
                  color={useColorModeValue("white", "gray.400")}
                >
                  LIQUIDITY
                </Text>
              </Th>
              <Th bg="#303E46">
                <Text
                  letterSpacing={1}
                  fontSize="xs"
                  fontWeight="semibold"
                  decoration="lightblue"
                  textTransform="uppercase"
                  color={useColorModeValue("white", "gray.400")}
                >
                  VOLUME(24H)
                </Text>
              </Th>
              <Th bg="#303E46">
                <Text
                  letterSpacing={1}
                  fontSize="xs"
                  fontWeight="semibold"
                  decoration="lightblue"
                  textTransform="uppercase"
                  color={useColorModeValue("white", "gray.400")}
                >
                  VOLUME(7D)
                </Text>
              </Th>
              <Th bg="#303E46">
                <Text
                  letterSpacing={1}
                  fontSize="xs"
                  fontWeight="semibold"
                  decoration="lightblue"
                  textTransform="uppercase"
                  color={useColorModeValue("white", "gray.400")}
                >
                  SWAP(24H)
                </Text>
              </Th>
              <Th bg="#303E46">
                <Text
                  letterSpacing={1}
                  fontSize="xs"
                  fontWeight="semibold"
                  decoration="lightblue"
                  textTransform="uppercase"
                  color={useColorModeValue("white", "gray.400")}
                >
                  FEES(24H)
                </Text>
              </Th>
              <Th bg="#303E46">
                <Text
                  letterSpacing={1}
                  fontSize="xs"
                  fontWeight="semibold"
                  decoration="lightblue"
                  textTransform="uppercase"
                  color={useColorModeValue("white", "gray.400")}
                >
                  %FEES(YEARLY)
                </Text>
              </Th>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => (
                <Tr key={item.chain_id}>
                  <Td>
                    <HStack>
                      <Avatar
                        name={item.token_0.contract_name}
                        src={item.token_0.logo_url}
                      />
                      <Avatar
                        name={item.token_1.contract_name}
                        src={item.token_1.logo_url}
                      />
                      <Text color={useColorModeValue("white", "gray.200")}>
                        {item.token_0.contract_ticker_symbol} –
                      </Text>
                      <Text color={useColorModeValue("white", "gray.200")}>
                        {item.token_1.contract_ticker_symbol}
                      </Text>
                    </HStack>
                  </Td>
                  <Td color={useColorModeValue("white", "gray.200")}>
                    ${item.total_liquidity_quote}
                  </Td>
                  <Td color={useColorModeValue("white", "gray.200")}>
                    ${item.volume_24h_quote}
                  </Td>
                  <Td color={useColorModeValue("white", "gray.200")}>
                    ${item.volume_7d_quote}
                  </Td>
                  <Td color={useColorModeValue("white", "gray.200")}>
                    {item.swap_count_24h}
                  </Td>
                  <Td color={useColorModeValue("white", "gray.200")}>
                    ${item.fee_24h_quote}
                  </Td>
                  <Td color={useColorModeValue("green", "green")}>
                    {item.annualized_fee * 100}%
                  </Td>
                </Tr>
              ))}
          </TableBody>
          <TableFooter>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              bg={useColorModeValue("white", "gray.800")}
            />
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
};

export default PoolTable;
