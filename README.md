# Hackathon: Gitcoin Grants Round 13 Hackathon
## The Challenge Description: Build A Multi-Chain Web3 Projects using Covalent API's 
<!-- [HERE](https://gitcoin.co/issue/covalenthq/covalent-gitcoin-bounties/19/100028550) -->
 
## Multify Analytics DashDeX

### Project Description
* Multify is a multi-chain analytics dashboard, a tool for Investors, Cryptocurrence holders to visualize, analyse data on various blockchains and decentralization exchanges on one platform.

### Project Concept
* Building a platform that helps users to remain on one platform that providers all the tools for an Investors, Cryptocurrency holders.
* Providing a simple way to track and visualize all assets.
* With the usage of COVALENT API we are able to bringing visibility to billions of blockchain data points on this Dashboard- [Covalent API Reference](https://chakra-ui.com/) 

## Tools
* Building Framework: [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
* Frontend: [Chakra-ui](https://chakra-ui.com/) - Create accessible React apps with speed
* Backend: [Covalent Api](https://www.covalenthq.com/) - Covalent provides a unified API bringing visibility to billions of blockchain data points.
* Dex Interface: [Uniswap Labs Widgets](https://docs.uniswap.org/sdk/widgets/swap-widget) - Getting Started with the Swap Uniswap Widget.
* HTTPS and WebSocket Provider: [Infura](https://docs.infura.io/infura/networks/ethereum) - guide on how to use the most versatile blockchain developer platform.
* Wallet connection: [Wagmi](https://wagmi-xyz.vercel.app/) - is a React Hooks library for Ethereum, built on ethers.js.
* Hosting platform: [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## Project Feature 
* Overview Dashboard
* Pools
* Token
* Wallet
* DEX Swap 

### Project Preview - I used the xy=k  which is a generalized Uniswap-like endpoints for exchanges on various chains 

##### 1. Home Page DarkMode
![HomePage](https://github.com/SabeloMkhwanzi/Multify-Analytics-Dashboard/blob/main/public/Multify-homepage-GR13-Hackathon1.jpg)

##### 2. Home Page LightMode
![HomePage](https://github.com/SabeloMkhwanzi/Multify-Analytics-Dashboard/blob/main/public/Multify-homepage-GR13-Hackathon2.jpg)


#### 1. Ticker Component:  supported DEXes 
```https://api.covalenthq.com/v1/xy=k/supported_dexes/?quote-currency=USD&format=JSON&key=${API_KEY}```

#### 2. Summary overview: Ecosystem chart data
ecosystem chart data
```https://api.covalenthq.com/v1/${chainId}/xy=k/${dexName}/ecosystem/?&key=${API_KEY}```
health data
```https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/health/```

#### 3. Pools Component: Pools endpoint xy=k 

```//https://api.covalenthq.com/v1/${chainId}/xy=k/${dexName}/pools/?&key=${apikey}```

#### 4. Token Component: Tokens endpoint xy=k
```https://api.covalenthq.com/v1/${chainId}/xy=k/${dexName}/tokens/?quote-currency=USD&format=JSON&key=${apikey}```

#### 5. Get Balance, Transactions: Usage Endpoint
```https: //api.covalenthq.com/v1/chainId/address/address/balances_v2/ https://api.covalenthq.com/v1/chainId/address/address/transactions_v2/```

#### Live website: [Multify Analytics Dex Dashboard](https://multify.vercel.app/)

#### GitHub Repository: [github.com/SabeloMkhwanazi](https://github.com/SabeloMkhwanzi/Multify-Analytics-Dashboard)

#### Demo video: [video](https://youtu.be/FAbeKKlyvFY)

#### Project Start Date: 11 March, 2022

#### Wallet Address : 0xc7031F0779F16685055Bc6104894698877Eb3327

#### Running the app

## Getting Started

First, clone the repo with the following git command:

```bash
git clone https://github.com/SabeloMkhwanzi/Multify-Analytics-Dashboard/
```

Second, open a terminal in the root directory of the project and run:

```bash
npm install
```

to install all the package dependencies for the project


Create a .env file in the root folder and populate it with the following variables:

```

INFURA_ID=
REACT_APP_RPC_ENDPOINT=
API_KEY=

```
Finally, run the development server:

```bash
npm run dev
# or
yarn dev
```
Thank for drop by!!! 😊

