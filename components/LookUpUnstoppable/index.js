import React, { useState } from "react";
import axios from "axios";
import {
  Input,
  Button,
  Center,
  Text,
  Badge,
  Box,
  Spinner,
} from "@chakra-ui/react";

const API_URL = "https://resolve.unstoppabledomains.com/domains/";
const API_KEY = process.env.NEXT_PUBLIC_UNSTOPPABLERESOLUTIONAPIKEY;

export default function LookUpUnstoppable() {
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState(null);

  function processLookup(e) {
    e.preventDefault();

    let domain = document.getElementById("domain").value;
    if (!domain) return;

    setLoading(true);

    axios
      .get(API_URL + domain, {
        headers: {
          Authorization: `bearer ${API_KEY}`,
        },
      })
      .then((res) => {
        setStats(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setStats();
      });
  }

  if (loading) {
    return (
      <Center>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="#6A39C0"
          color="#00AF91"
          size="xl"
        />
      </Center>
    );
  }

  return (
    <>
      {" "}
      <Center>
        <form onSubmit={processLookup}>
          <Box>
            <center>
              <Input
                borderColor="gray.500"
                placeholder="Enter Address or Web3 domain"
                id="domain"
                type="text"
                autoComplete="off"
              />
              <Button
                color="#00AF91"
                bgColor="gray.800"
                variant="outline"
                borderRadius="xl"
                shadow="lg"
                size="md"
                my={5}
                type="submit"
                id="btn"
              >
                Click to Search
              </Button>
            </center>
          </Box>
        </form>
      </Center>
      <Center>
        {stats ? (
          <Box className="domain-card">
            <Center my={3}>
              <Text
                as="h1"
                bgGradient="linear(to-l, #7928CA, #01AF7D)"
                bgClip="text"
                fontSize={["sm", "md", "lg", "4xl"]}
                fontWeight="extrabold"
              >
                {stats.meta.domain}
              </Text>
            </Center>

            <Text fontWeight="bold">
              Owner:{" "}
              <Text fontWeight="normal" fontSize={["sm", "md", "lg"]} as="samp">
                {stats.meta.owner}
              </Text>{" "}
            </Text>

            <Text fontWeight="bold">
              Blockchain:{" "}
              <Text fontWeight="normal" fontSize={["sm", "md", "lg"]} as="samp">
                {stats.meta.blockchain}
              </Text>{" "}
            </Text>

            {stats.records["whois.for_sale.value"] ? (
              <Badge
                colorScheme="green"
                borderRadius="full"
                fontSize="0.8em"
                ml="2"
                className="onsale"
              >
                On Sale
              </Badge>
            ) : (
              <Badge
                colorScheme="red"
                borderRadius="full"
                fontSize="0.8em"
                ml="2"
                className="onsale"
              >
                Not on Sale
              </Badge>
            )}

            <Box>
              <Text fontWeight="normal" fontSize={["sm", "md", "lg"]} as="samp">
                {stats.records["whois.email.value"]}
              </Text>
            </Box>

            <Box>
              {stats.records["ipfs.redirect_domain.value"] ? (
                <span>
                  Website : {stats.records["ipfs.redirect_domain.value"]}
                </span>
              ) : (
                <Box>
                  <b>No Website found</b>
                </Box>
              )}
            </Box>

            <div>
              <Box mt={5}>
                <Text
                  fontWeight="semibold"
                  fontSize={["sm", "md", "lg"]}
                  as="u"
                >
                  The various blockchain addresses in the domain profile are
                  listed below.
                </Text>
              </Box>

              <Box>
                {stats.records["crypto.MATIC.version.MATIC.address"] ? (
                  <Text
                    fontWeight="normal"
                    fontSize={["sm", "md", "lg"]}
                    as="samp"
                  >
                    Matic address :{" "}
                    {stats.records["crypto.MATIC.version.MATIC.address"]}
                  </Text>
                ) : (
                  <Box>
                    <b>No Matic address</b>
                  </Box>
                )}
              </Box>

              <Box>
                {stats.records["crypto.ETH.address"] ? (
                  <Text
                    fontWeight="normal"
                    fontSize={["sm", "md", "lg"]}
                    as="samp"
                  >
                    ETH address : {stats.records["crypto.ETH.address"]}
                  </Text>
                ) : (
                  <Box>
                    <b>No ETH address</b>
                  </Box>
                )}
              </Box>

              <Box>
                {stats.records["crypto.USDT.version.ERC20.address"] ? (
                  <Text
                    fontWeight="normal"
                    fontSize={["sm", "md", "lg"]}
                    as="samp"
                  >
                    USDT address :{" "}
                    {stats.records["crypto.USDT.version.ERC20.address"]}
                  </Text>
                ) : (
                  <Box>
                    <b>No USDT address</b>
                  </Box>
                )}
              </Box>

              <Box>
                {stats.records["crypto.BTC.address"] ? (
                  <Text
                    fontWeight="normal"
                    fontSize={["sm", "md", "lg"]}
                    as="samp"
                  >
                    BTC address : {stats.records["crypto.BTC.address"]}
                  </Text>
                ) : (
                  <Box>
                    <b>No BTC address</b>
                  </Box>
                )}
              </Box>

              <Box>
                {stats.records["crypto.SOL.address"] ? (
                  <Text
                    fontWeight="normal"
                    fontSize={["sm", "md", "lg"]}
                    as="samp"
                  >
                    SOL address : {stats.records["crypto.SOL.address"]}
                  </Text>
                ) : (
                  <Box>
                    <b>No SOL address</b>
                  </Box>
                )}
              </Box>

              <Box>
                {stats.records["crypto.ADA.address"] ? (
                  <Text
                    fontWeight="normal"
                    fontSize={["sm", "md", "lg"]}
                    as="samp"
                  >
                    ADA address : {stats.records["crypto.ADA.address"]}
                  </Text>
                ) : (
                  <Box>
                    <b>No ADA address</b>
                  </Box>
                )}
              </Box>
              <Center mt={5}>
                <Button
                  color="#00AF91"
                  bgColor="gray.800"
                  variant="outline"
                  borderRadius="xl"
                  shadow="lg"
                  size="md"
                  className="contact"
                >
                  <a
                    className="contactlink"
                    target="_blank"
                    href={`${stats.records["ipfs.redirect_domain.value"]}`}
                    rel="noreferrer"
                  >
                    Visit Website
                  </a>
                </Button>
              </Center>
            </div>
          </Box>
        ) : (
          <Center>
            <Text>UNS Resolution</Text>
          </Center>
        )}
      </Center>
    </>
  );
}
