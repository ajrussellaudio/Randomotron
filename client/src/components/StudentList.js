import React from "react";
import styled from "styled-components";
import StudentListItem from "./StudentListItem";

// componentDidMount() {
//   const url = `/api/students?cohort=${this.props.cohort}`;
//   ApiRequest.get(url, students => this.setState({ students: students }));
// }

const ListContainer = styled.div``;

const StudentList = ({ students }) => (
  <ListContainer>
    {students.map(student => (
      <StudentListItem key={student._id} {...student} />
    ))}
  </ListContainer>
);

export default StudentList;
