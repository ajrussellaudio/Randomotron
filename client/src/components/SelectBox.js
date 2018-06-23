import React from "react";
import { Card } from "semantic-ui-react";
import CohortDropdown from "./CohortDropdown";
import StudentList from "./StudentList";

class SelectBox extends React.Component {
  state = {
    selectedCohort: "G4"
  };

  handleCohortSelect = cohort => {
    this.setState({ selectedCohort: cohort });
  };

  render() {
    return (
      <Card className="select-box">
        <Card.Content>
          <CohortDropdown onChange={this.handleCohortSelect} />
        </Card.Content>
        <Card.Content>
          <StudentList {...this.state} />
        </Card.Content>
        <Card.Content>
          <div>Add More</div>
        </Card.Content>
      </Card>
    );
  }
}

export default SelectBox;
