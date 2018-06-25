import React from "react";
import StyledDropdown from "./StyledDropdown";
import { concat } from "lodash";

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
