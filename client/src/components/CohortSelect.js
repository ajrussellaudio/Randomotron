import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import styled from "styled-components";
import { concat } from "lodash";

const StyledDropdown = styled(Dropdown)`
  margin: 6px;
`;

const newCohort = { label: "New Cohort...", value: null };

const CohortSelect = ({ cohorts, cohort, onCohortChange }) => (
  <StyledDropdown
    options={concat(cohorts, newCohort)}
    placeholder="Select a cohort..."
    value={cohort}
    onChange={({ value }) => onCohortChange(value)}
  />
);

export default CohortSelect;
