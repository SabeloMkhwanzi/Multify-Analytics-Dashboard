import React, { Component } from "react";
import { Box, Text } from "@chakra-ui/react";

import DexSelectBtn from "../DexSelectBtn";

//API Key
const apikey = "ckey_4e73d56514984838ab3206fbaf4";

class Pools extends Component {
  state = {
    items: [],
  };

  //Pools endpoint xy=k
  //https://api.covalenthq.com/v1/${chainId}/xy=k/${dexName}/pools/?quote-currency=USD&format=JSON&key=${apikey}

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
export default Pools;

//Pools
//https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/pools/?quote-currency=USD&format=JSON&key=ckey_4e73d56514984838ab3206fbaf4

// supported DEXes
//https://api.covalenthq.com/v1/xy=k/supported_dexes/?quote-currency=USD&format=JSON&key=ckey_4e73d56514984838ab3206fbaf4

//pools by address
//https://api.covalenthq.com/v1/1/xy=k/sushiswap/pools/address/0xdAC17F958D2ee523a2206206994597C13D831ec7/?quote-currency=USD&format=JSON&tickers=usdt&page-number=10&key=ckey_4e73d56514984838ab3206fbaf4

//Summary overview

// health data
//https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/health/?quote-currency=USD&format=JSON&key=ckey_4e73d56514984838ab3206fbaf4

//ecosystem chart data
//https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/ecosystem/?quote-currency=USD&format=JSON&key=ckey_4e73d56514984838ab3206fbaf4

// supported DEXes
//https://api.covalenthq.com/v1/xy=k/supported_dexes/?quote-currency=USD&format=JSON&key=ckey_4e73d56514984838ab3206fbaf4

//xy=k is a generalized Uniswap-like endpoints for exchanges on various chains.
