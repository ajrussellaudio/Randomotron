import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import ListItemBox from "./ListItemBox";
import NameInput from "./NameInput";

const Controls = styled.div`
  color: #555555;
  opacity: 0;
  transition: opacity 0.2s;
  transition-timing-function: ease-out;
  &:hover {
    opacity: 1;
  }
`;

const deleteStudent = id => {
  console.log(`deleting id:`, id);
};

const StudentListItem = props => (
  <ListItemBox>
    <NameInput {...props} />
    <Controls>
      <Icon icon={faTimesCircle} onClick={() => deleteStudent(props._id)} />
    </Controls>
  </ListItemBox>
);

export default StudentListItem;
