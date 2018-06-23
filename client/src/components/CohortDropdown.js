import React from "react";
import { Dropdown } from "semantic-ui-react";

class CohortDropdown extends React.Component {
  state = {
    cohorts: []
  };

  componentDidMount() {
    fetch("/api/cohorts")
      .then(res => res.json())
      .then(data => this.setState({ cohorts: data.cohorts }));
  }

  handleChange = (_, data) => {
    this.props.onChange(data.value);
  };

  render() {
    const cohorts = this.state.cohorts.map(cohort => ({
      text: cohort,
      value: cohort
    }));
    return (
      <Dropdown
        placeholder="Select Cohort"
        fluid
        selection
        options={cohorts}
        onChange={this.handleChange}
      />
    );
  }
}

export default CohortDropdown;
