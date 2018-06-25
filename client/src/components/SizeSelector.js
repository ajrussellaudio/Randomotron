import React from "react";
import Dropdown from "react-dropdown";
import styled from "styled-components";
import { find } from "lodash";

const options = [
  { value: 1, label: "Solo effort" },
  { value: 2, label: "Pair programming" },
  { value: 3, label: "Triple Threat" },
  { value: 4, label: "Fatal Four-way" }
];

const StyledDropdown = styled(Dropdown)`
  margin: 6px;
  border-radius: 8px;
`;

const SizeSelector = ({ size, onChange }) => (
  <StyledDropdown
    options={options}
    value={size && find(options, { value: size })}
    placeholder="Choose size..."
    onChange={onChange}
  />
);

export default SizeSelector;
