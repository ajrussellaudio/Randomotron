import React from "react";
import styled from "styled-components";

const GroupList = styled.ul`
  border: 2px solid #ededed;
  border-radius: 8px;
  margin: 6px;
  padding: 10px;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
`;

const Member = styled.li`
  display: inline;
  font-size: 2.5em;
  padding: 16px;
`;

const Group = ({ members }) => (
  <GroupList>
    {members.map(member => (
      <Member key={`#member${member._id}`}>{member.name}</Member>
    ))}
  </GroupList>
);

export default Group;
