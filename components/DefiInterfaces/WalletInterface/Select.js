import React from "react";
import { Button } from "@chakra-ui/react";

const Select = (props) => (
  <form onSubmit={props.getWallet}>
    <input type="number" name="chainId" />
    <button>Search</button>
  </form>

  // <Select
  //   maxWidth={500}
  //   placeholder="Select Network"
  //   onChange={props.getData}
  // >
  //   <option value="1">Ethereum</option>
  //   <option value="137">Polygon</option>
  //   <option value="43114">Avalanche</option>
  // </Select>
);

export default Select;
