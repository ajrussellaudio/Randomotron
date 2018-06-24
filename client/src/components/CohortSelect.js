import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import styled from "styled-components";

const StyledDropdown = styled(Dropdown)`
  margin: 6px;
`;

const CohortSelect = ({ cohorts, cohort, onCohortChange }) => (
  // <select name="cohort" id="cohort-select">
  //   {cohorts.map(cohort => <option key={cohort}>{cohort}</option>)}
  // </select>
  <StyledDropdown
    options={cohorts}
    placeholder="Select a cohort..."
    value={cohort}
    onChange={({ value }) => onCohortChange(value)}
  />
);

export default CohortSelect;
