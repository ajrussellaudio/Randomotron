import React from "react";
import ApiRequest from "../services/ApiRequest";
import StudentList from "../components/StudentList";

class StudentListContainer extends React.Component {
  state = {
    students: []
  };

  componentDidUpdate() {
    const url = `/api/students?cohort=${this.props.cohort}`;
    ApiRequest.get(url, students => this.setState({ students: students }));
  }

  render() {
    return <StudentList {...this.state} />;
  }
}

export default StudentListContainer;
