import React from "react";
import styled from "styled-components";
import StudentListItem from "../components/StudentListItem";
import ApiRequest from "../services/ApiRequest";

const ListContainer = styled.div`
  width: 17%;
`;

class StudentList extends React.Component {
  state = {
    students: []
  };

  componentDidMount() {
    const url = `/api/students?cohort=${this.props.cohort}`;
    ApiRequest.get(url, students => this.setState({ students: students }));
  }

  render() {
    return (
      <ListContainer>
        {this.state.students.map(student => (
          <StudentListItem key={student._id} {...student} />
        ))}
      </ListContainer>
    );
  }
}

export default StudentList;
