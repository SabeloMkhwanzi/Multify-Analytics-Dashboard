/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/link-passhref */
import {
  Box,
  Divider,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import { GiWallet, GiSuspensionBridge } from "react-icons/gi";
import { FiMenu } from "react-icons/fi";
import { GiTwoCoins } from "react-icons/gi";
import { RiHandCoinFill, RiExchangeDollarFill } from "react-icons/ri";
import { BiAnalyse } from "react-icons/bi";
import Link from "next/link";

import { DarkModeButton, SocialMediaButton } from "../../..";
import Overview from "../../../Category/Overview";

//import { Logo } from "@choc-ui/logo";

export default function VerticalNarbar() {
  const sidebar = useDisclosure();
  const integrations = useDisclosure();
  const color = useColorModeValue("gray.600", "gray.300");

  const NavItem = (props) => {
    const { icon, children, ...rest } = props;

    return (
      <Flex
        align="center"
        px="4"
        pl="4"
        py="3"
        cursor="pointer"
        color={useColorModeValue("inherit", "gray.400")}
        _hover={{
          bg: useColorModeValue("gray.100", "gray.900"),
          color: useColorModeValue("gray.900", "gray.200"),
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        {...rest}
      >
        {icon && (
          <Icon
            mx="2"
            boxSize="4"
            _groupHover={{
              color: color,
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  };

  const SidebarContent = (props) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue("white", "gray.800")}
      borderColor={useColorModeValue("inherit", "gray.700")}
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        {/* <Logo /> */}
        <Text
          fontSize="2xl"
          ml="2"
          color={useColorModeValue("brand.500", "white")}
          fontWeight="semibold"
        >
          MULTIFY Analytics
        </Text>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <NavItem icon={BiAnalyse}>
          <Link href="/summary">
            <Text textTransform="uppercase">Summary</Text>
          </Link>
        </NavItem>
        <NavItem icon={RiHandCoinFill}>
          <Link href="/token">
            <Text textTransform="uppercase">Tokens</Text>
          </Link>
        </NavItem>
        <NavItem icon={GiTwoCoins}>
          <Link href="/pools">
            <Text textTransform="uppercase">Pools</Text>
          </Link>
        </NavItem>
        <Divider />
        <NavItem icon={GiWallet}>
          <Link href="/walletanalyse">
            <Text textTransform="uppercase">Wallet Analytics</Text>
          </Link>
        </NavItem>
        <NavItem icon={RiExchangeDollarFill}>
          <Link href="/swapinterface">
            <Text textTransform="uppercase">Swap</Text>
          </Link>
        </NavItem>
        <NavItem icon={GiSuspensionBridge}>
          <Link href="/bridgeinterface">
            <Text textTransform="uppercase">Bridge</Text>
          </Link>
        </NavItem>
      </Flex>
      <DarkModeButton />
      <SocialMediaButton />
    </Box>
  );

  return (
    <Box
      as="section"
      bg={useColorModeValue("gray.50", "gray.700")}
      minH="100vh"
    >
      <SidebarContent display={{ base: "none", md: "unset" }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex align="center" justify="space-between" px="4" h="14">
          <IconButton
            aria-label="Menu"
            display={{ base: "inline-flex", md: "none" }}
            onClick={sidebar.onOpen}
            icon={<FiMenu />}
            size="sm"
          />
        </Flex>

        <Box as="main">
          <Overview />
        </Box>
      </Box>
    </Box>
  );
}
