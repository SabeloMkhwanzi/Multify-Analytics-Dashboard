import React, { Component } from "react";
import { Box, Text } from "@chakra-ui/react";

import SelectButton from "./SelectButton";

//const balancesEndpoint = "balances_v2";
const apikey = "ckey_4e73d56514984838ab3206fbaf4";
//const apikey = process.env.PUBLIC_COVALENT_API_KEY;

class WalletInterface extends Component {
  state = {
    items: [],
  };

  //https: //api.covalenthq.com/v1/1/address/0xF975206a46b4eD9f5F008AF9813B19bf083d94eE/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=false&key=ckey_4e73d56514984838ab3206fbaf4
  // https://api.covalenthq.com/v1/1/address/0xF975206a46b4eD9f5F008AF9813B19bf083d94eE/portfolio_v2/?quote-currency=USD&format=JSON&key=ckey_4e73d56514984838ab3206fbaf4
  // https://api.covalenthq.com/v1/1/address/0xF975206a46b4eD9f5F008AF9813B19bf083d94eE/transactions_v2/?quote-currency=USD&format=JSON&block-signed-at-asc=false&no-logs=false&key=ckey_4e73d56514984838ab3206fbaf4

  getWallet = async (e) => {
    const chainId = e.target.elements.chainId.value;
    e.preventDefault();
    const userAddress = e.target.elements.userAddress.value;
    e.preventDefault();
    const walletsStatus = e.target.elements.walletsStatus.value;
    e.preventDefault();

    const api_call = await fetch(
      `https://api.covalenthq.com/v1/${chainId}/address/${userAddress}/${walletsStatus}/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=${apikey}`
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
        <SelectButton getWallet={this.getWallet} />
        <Box>
          <ul>
            {this.state.items.map((item) => (
              <li key={item.logo_url}>{item.contract_name}</li>
            ))}
          </ul>
        </Box>
      </div>
    );
  }
}
export default WalletInterface;
