import React, { Component, useEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";

import Select from "./Select";

const balancesEndpoint = "balances_v2";

const address = "0xF975206a46b4eD9f5F008AF9813B19bf083d94eE";

const apikey = "ckey_4e73d56514984838ab3206fbaf4";

//const apikey = process.env.PUBLIC_COVALENT_API_KEY;

class WalletInterface extends Component {
  //let [chain, setChain] = useState(1);
  //const [items, setItems] = useState([]);

  // useEffect(() => {
  //   getData();
  // }, []);

  state = {
    items: [],
  };

  getWallet = async (e) => {
    const chainId = e.target.elements.chainId.value;
    e.preventDefault();
    const api_call = await fetch(
      `https://api.covalenthq.com/v1/${chainId}/address/${address}/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=${apikey}`
    );
    const data = await api_call.json();
    this.setState({ items: data.data.items });

    console.log(this.state.items);
  };

  render() {
    return (
      <div>
        Welcome
        <Select getWallet={this.getWallet} />
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

// const response = await fetch(
//   `https://api.covalenthq.com/v1/${chainId}/address/${address}/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=${apikey}`
// );
// const data = await response.json();
// setItems(data.data.items);
// console.log(items);
