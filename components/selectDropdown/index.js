import { Select } from "@chakra-ui/react";
import React from "react";

const SelectDropdown = ({ options, onChange, id }) => {
  return (
    <Select
      bg="#ffffff"
      color="black"
      border="0px"
      p="8px"
      border-radius="5px"
      font-size="16px"
      cursor="pointer"
      margin="10px"
      onChange={onChange}
    >
      {options.map((o, i) => {
        return (
          <option
            key={i}
            selected={id == o.value ? "selected" : ""}
            value={o.value}
          >
            {o.name}
          </option>
        );
      })}
    </Select>
  );
};

export default SelectDropdown;
