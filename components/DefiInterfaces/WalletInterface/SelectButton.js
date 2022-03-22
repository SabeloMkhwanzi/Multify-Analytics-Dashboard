import React from "react";
import {
  Button,
  Select,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";

export default function SelectButton(props) {
  useForm();

  return (
    <form onSubmit={props.getWallet}>
      <FormControl>
        <FormLabel htmlFor="email">Account Address</FormLabel>
        <Input
          maxW={700}
          my={2}
          letterSpacing={4}
          type="text"
          name="userAddress"
          placeholder="ACCOUNT ADDRESS 0x00f7.... OR ENS DOMAIN"
        />
        <Button
          bottom="2.5"
          borderRadius="lg"
          right="0"
          mx={2}
          mt={4}
          colorScheme="teal"
          type="submit"
        >
          ANALYSE
        </Button>
        <Select
          my={2}
          textAlign="center"
          maxW={150}
          name="chainId"
          type="number"
        >
          <option name="chainId" value="1">
            Ethereum
          </option>
          <option name="chainId" value="137">
            Polygon
          </option>
          <option name="chainId" value="43114">
            Avalanche
          </option>
          <option name="chainId" value="56">
            Binance
          </option>
          <option name="chainId" value="1284">
            Moonbeam
          </option>
          <option name="chainId" value="42161">
            Arbitrum
          </option>
          <option name="chainId" value="250">
            Fantom
          </option>
        </Select>
      </FormControl>
    </form>
  );
}

// {
//   /* <form onSubmit={props.getWallet}>
//       <input type="number" name="chainId" />
//       <button>Search</button>
//     </form> */
// }

//     {/* <Select
//   maxWidth={500}
//   placeholder="Select Network"
//   onChange={props.getData}
// >
//   <option value="1">Ethereum</option>
//   <option value="137">Polygon</option>
//   <option value="43114">Avalanche</option>
// </Select>*}
