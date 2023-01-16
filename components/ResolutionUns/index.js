import React, { useState } from "react";
import { Button, Center, Text, Input } from "@chakra-ui/react";
import Resolution from "@unstoppabledomains/resolution";
import { set, useForm } from "react-hook-form";
import { getEllipsisTxt } from "../../utils";

//const ethereumProviderUrl = process.env.NEXT_PUBLIC_REACT_APP_ALCHEMY_API;
//const polygonProviderUrl = process.env.NEXT_PUBLIC_REACT_APP_ALCHEMY_API;

// custom provider config using the `Resolution` constructor options
// const resolution = new Resolution({
//     sourceConfig: {
//       uns: {
//         locations: {
//           Layer1: {
//             url: ethereumProviderUrl,
//             network: 'mainnet'
//           },
//           Layer2: {
//             url: polygonProviderUrl,
//             network: 'polygon-mainnet',
//           },
//         },
//       },
//     },
//   });

export default function ResolutionUns() {
  const resolution = new Resolution();
  const handleChange = (event) => setValue(event.target.value);
  const [value, setValue] = useState("");
  const [stats, setStats] = useState();
  const [address, setAddress] = useState(null);
  const [domain, setDomain] = useState(null);
  const [hashIpfs, setHashIpfs] = useState(null);
  const [records, setRecords] = useState(null);

  function resolve(domain, currency) {
    resolution
      .addr(domain, currency)
      .then((address) => {
        setAddress(address);
        setDomain(domain);
        console.log(domain, "resolves to", address);
      })
      .catch(console.error);
  }

  function resolveCustomRecord(domain, record) {
    resolution
      .records(domain, [record])
      .then((value) => {
        setStats(value);
        setRecords(record);
        console.log(`Domain ${domain} ${record} is: ${value}`);
      })
      .catch(console.error);
  }

  function resolveIpfsHash(domain) {
    resolution
      .ipfsHash(domain)
      .then((hash) => {
        setHashIpfs(hash);
        console.log(
          `You can access this website via a public IPFS gateway: https://gateway.ipfs.io/ipfs/${hash}`
        );
      })
      .catch(console.error);
  }

  const handleClick = () => {
    resolve(value, "ETH");
    resolveIpfsHash(value);
    resolveCustomRecord(value, "value");
  };

  return (
    <>
      <Center mt={20}>
        <form>
          <Input
            value={value}
            placeholder="brad.crypto"
            size="md"
            w={300}
            type="text"
            onChange={handleChange}
          />

          <Button
            color="#00AF91"
            bgColor="gray.800"
            variant="outline"
            borderRadius="xl"
            shadow="lg"
            size="md"
            onClick={handleClick}
          >
            Search Resolve
          </Button>
        </form>
      </Center>
      <Center>
        <Text mx={5}>{getEllipsisTxt(address)} </Text> <Text>{domain}</Text>
      </Center>
      <br />
      <Center>
        <div>https://gateway.ipfs.io/ipfs/{hashIpfs}</div>
      </Center>
      <Center>
        <Text>{JSON.stringify(stats, null, 2)}</Text>
        <Text>{JSON.stringify(records, null, 1)}</Text>
      </Center>
    </>
  );
}
