import React from "react";
import { Card } from "semantic-ui-react";
import StudentListItem from "./StudentListItem";

class StudentList extends React.Component {
  state = {
    students: []
  };

  componentWillReceiveProps(nextProps) {
    const url = `/api/students?cohort=${nextProps.selectedCohort}`;
    fetch(url)
      .then(res => res.json())
      .then(students => this.setState({ students: students }));
  }

  render() {
    const items = this.state.students.map(student => (
      <StudentListItem {...student} key={student._id} />
    ));
    return <Card.Content content={items} />;
  }
}

export default StudentList;
