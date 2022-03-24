import React, { useEffect, useRef } from "react";
import {
  Button,
  Select,
  FormControl,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";

export default function SelectButton(props) {
  const ref = useRef(null);
  useForm();

  const myfunc = () => {
    console.log("I was activated 1 seconds later");
  };

  useEffect(() => {
    setTimeout(() => {
      ref.current.click();
    }, 1000);
  }, []);

  return (
    <form onSubmit={props.getApi}>
      <FormControl>
        <Stack spacing={1} direction="row">
          <Select textAlign="center" maxW={150} name="chainId" type="number">
            <option name="chainId" value="1">
              Ethereum
            </option>
            <option name="chainId" value="137">
              Polygon
            </option>
            <option name="chainId" value="43114">
              Avalanche
            </option>
            <option name="chainId" value="56">
              Binance
            </option>
            <option name="chainId" value="1284">
              Moonbeam
            </option>
            <option name="chainId" value="42161">
              Arbitrum
            </option>
            <option name="chainId" value="250">
              Fantom
            </option>
          </Select>
          <Button
            ref={ref}
            onClick={myfunc}
            borderRadius="lg"
            right="0"
            colorScheme="teal"
            type="submit"
          >
            Search
          </Button>
        </Stack>
      </FormControl>
      <RadioGroup
        my={5}
        textAlign="left"
        maxW={150}
        name="dexName"
        type="number"
        defaultValue="uniswap_v2"
      >
        <Stack
          spacing={1.5}
          direction="column"
          textTransform="uppercase"
          fontWeight="semibold"
        >
          <Radio size="sm" colorScheme="red" name="dexName" value="uniswap_v2">
            Uniswap
          </Radio>
          <Radio size="sm" name="dexName" colorScheme="green" value="sushiswap">
            Sushiswap
          </Radio>
          <Radio
            size="sm"
            colorScheme="orange"
            name="dexName"
            value="pancakeswap"
          >
            Pancakeswap
          </Radio>
          <Radio size="sm" colorScheme="red" name="dexName" value="quickswap">
            Quickswap
          </Radio>
          <Radio size="sm" name="dexName" colorScheme="green" value="pangolin">
            Pangolin
          </Radio>
          <Radio
            size="sm"
            colorScheme="orange"
            name="dexName"
            value="spiritswap"
          >
            Spiritswap
          </Radio>
          <Radio size="sm" colorScheme="red" name="dexName" value="spookyswap">
            Spookyswap
          </Radio>
          <Radio size="sm" name="dexName" colorScheme="green" value="traderjoe">
            Traderjoe
          </Radio>
          <Radio size="sm" colorScheme="orange" name="dexName" value="standard">
            Standard
          </Radio>
          <Radio size="sm" colorScheme="red" name="dexName" value="apeswap">
            Apeswap
          </Radio>
          <Radio
            size="sm"
            name="dexName"
            colorScheme="green"
            value="apeswap_v2"
          >
            Katana
          </Radio>
          <Radio size="sm" colorScheme="orange" name="dexName" value="katana">
            Stellaswaw
          </Radio>
          <Radio size="sm" colorScheme="red" name="dexName" value="beamswap">
            Beamswap
          </Radio>
        </Stack>
      </RadioGroup>
    </form>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       colors: ["red", "yellow", "blue", "green", "purple", "pink"]
//     };
//   }

//   changeBg() {
//     const { colors } = this.state;
//     const color = colors[Math.floor(Math.random() * colors.length)];
//     document.body.style.backgroundColor = color;
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={() => this.changeBg()}>Change Color</button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
