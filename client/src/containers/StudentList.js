import React from "react";
import StudentListItem from "../components/StudentListItem";
import ApiRequest from "../services/ApiRequest";

class StudentList extends React.Component {
  state = {
    students: []
  };

  componentDidMount() {
    const url = `/api/students?cohort=${this.props.cohort}`;
    ApiRequest.get(url, students => this.setState({ students: students }));
  }

  render() {
    return this.state.students.map(student => (
      <StudentListItem key={student._id} {...student} />
    ));
  }
}

export default StudentList;
