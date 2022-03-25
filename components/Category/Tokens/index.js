/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component } from "react";
import millify from "millify";
import { Box, Text } from "@chakra-ui/react";

//import { makeStyles } from "@material-ui/core/styles";

import DexSelectBtn from "../DexSelectBtn";

//API Key
const apikey = "ckey_4e73d56514984838ab3206fbaf4";

class Pools extends Component {
  state = {
    items: [],
  };

  //xy=k is a generalized Uniswap-like endpoints for exchanges on various chains.

  //Pools endpoint xy=k
  //https://api.covalenthq.com/v1/${chainId}/xy=k/${dexName}/tokens/?quote-currency=USD&format=JSON&key=${apikey}

  getApi = async (e) => {
    const chainId = e.target.elements.chainId.value;
    e.preventDefault();
    const dexName = e.target.elements.dexName.value;
    e.preventDefault();

    const api_call = await fetch(
      `https://api.covalenthq.com/v1/${chainId}/xy=k/${dexName}/tokens/?quote-currency=USD&format=JSON&key=${apikey}`
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
            Tokens Analytics
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
      </>
    );
  }
}
export default Pools;

//  <Box>
//    <ul>
//      {this.state.items.map((item) => (
//        <li key={item.exchange}>{item.dex_name}</li>
//      ))}
//    </ul>
//  </Box>;

// componentDidMount = () => {
//   const json = localStorage.getItem("items");
//   const items = JSON.parse(json);
//   this.setState({ items });
// };

// componentDidUpdate = () => {
//   const items = JSON.stringify(this.state.items);
//   localStorage.setItem("items", items);
// };
