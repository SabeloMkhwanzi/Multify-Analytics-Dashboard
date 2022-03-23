import React, { Component } from "react";
import { Box, Text } from "@chakra-ui/react";

import DexSelectBtn from "../DexSelectBtn";

//API Key
const apikey = "ckey_4e73d56514984838ab3206fbaf4";

class Overview extends Component {
  state = {
    items: [],
  };

  //Summary overview
  //ecosystem chart data
  //https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/ecosystem/?quote-currency=USD&format=JSON&key=ckey_4e73d56514984838ab3206fbaf4
  // health data
  //https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/health/?quote-currency=USD&format=JSON&key=ckey_4e73d56514984838ab3206fbaf4

  getApi = async (e: {
    target: {
      elements: {
        chainId: { value: any };
        dexName: { value: any };
      };
    };
    preventDefault: () => void;
  }) => {
    const chainId = e.target.elements.chainId.value;
    e.preventDefault();
    const dexName = e.target.elements.dexName.value;
    e.preventDefault();

    const api_call = await fetch(
      `https://api.covalenthq.com/v1/${chainId}/xy=k/${dexName}/pools/?quote-currency=USD&format=JSON&key=${apikey}`
    );
    const data = await api_call.json();
    this.setState({ items: data.data.items });

    console.log(this.state.items);
  };

  componentDidMount = () => {
    const json = localStorage.getItem("items");
    const items = JSON.parse(json);
    this.setState({ items });
  };

  componentDidUpdate = () => {
    const items = JSON.stringify(this.state.items);
    localStorage.setItem("items", items);
  };

  render() {
    return (
      <div>
        <Text
          letterSpacing={2}
          fontSize="3xl"
          fontWeight="semibold"
          decoration="lightblue"
          textTransform="uppercase"
        >
          Wallet Analytics
        </Text>
        <DexSelectBtn getApi={this.getApi} />
        <Box>
          <ul>
            {this.state.items.map((item) => (
              <li key={item.exchange}>{item.dex_name}</li>
            ))}
          </ul>
        </Box>
      </div>
    );
  }
}
export default Overview;

//ecosystem chart data
//https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/ecosystem/?quote-currency=USD&format=JSON&key=ckey_4e73d56514984838ab3206fbaf4

// supported DEXes
//https://api.covalenthq.com/v1/xy=k/supported_dexes/?quote-currency=USD&format=JSON&key=ckey_4e73d56514984838ab3206fbaf4

//xy=k is a generalized Uniswap-like endpoints for exchanges on various chains.
