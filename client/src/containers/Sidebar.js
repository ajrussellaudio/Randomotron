import React from "react";
import styled from "styled-components";
import ApiRequest from "../services/ApiRequest";
import CohortSelect from "../components/CohortSelect";
import StudentListContainer from "./StudentListContainer";

const Container = styled.div``;

class Sidebar extends React.Component {
  state = { cohorts: [] };

  componentDidMount = () => {
    const url = "/api/cohorts";
    ApiRequest.get(url, cohorts => {
      this.setState({ cohorts: cohorts });
    });
  };

  render() {
    return (
      <Container>
        <CohortSelect {...this.state} {...this.props} />
        <StudentListContainer cohort={this.props.cohort} />
      </Container>
    );
  }
}

export default Sidebar;
