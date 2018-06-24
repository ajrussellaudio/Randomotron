import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import ListItemBox from "./ListItemBox";
import NameInput from "./NameInput";

const Name = styled.div`
  padding: 5px;
`;

const Controls = styled.div`
  color: #555555;
  opacity: 0;
  padding: 5px;
  transition: opacity 0.2s;
  transition-timing-function: ease-out;
  &:hover {
    opacity: 1;
  }
`;

const StudentListItem = props => (
  <ListItemBox>
    <Name>
      <Icon icon={faUserCircle} /> <NameInput {...props} />
    </Name>
    <Controls>
      <Icon icon={faTimesCircle} onClick={() => console.log("deleting...")} />
    </Controls>
  </ListItemBox>
);

export default StudentListItem;
