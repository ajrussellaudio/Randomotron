import React from "react";
import styled from "styled-components";
import StudentList from "./components/StudentList";
import Sidebar from "./containers/Sidebar";

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
`;

class App extends React.Component {
  state = { cohort: null };

  handleCohortChange = cohort => {
    this.setState({ cohort: cohort });
  };

  render = () => (
    <GridLayout>
      <Sidebar {...this.state} onCohortChange={this.handleCohortChange} />
      <StudentList students={[]} />
    </GridLayout>
  );
}

export default App;
