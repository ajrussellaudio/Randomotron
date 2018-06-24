import React from "react";
import styled from "styled-components";
import Sidebar from "./containers/Sidebar";
import Randomiser from "./containers/Randomiser";

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
`;

class App extends React.Component {
  state = { cohort: null };

  handleCohortChange = cohort => {
    this.setState({ cohort: cohort });
  };

  render = () => (
    <GridLayout>
      <Sidebar {...this.state} onCohortChange={this.handleCohortChange} />
      <Randomiser {...this.state} />
    </GridLayout>
  );
}

export default App;
