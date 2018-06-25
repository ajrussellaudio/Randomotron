import React from "react";
import styled from "styled-components";
import ApiRequest from "../services/ApiRequest";
import Group from "./Group";

const GroupsContainer = styled.div``;

class RandomGroups extends React.Component {
  state = { groups: [] };

  componentWillReceiveProps(nextProps) {
    const { cohort, size } = nextProps;
    if (!(cohort && size)) return null;
    const url = `/api/groups/${cohort}?size=${size}`;
    ApiRequest.get(url, groups => this.setState({ groups: groups }));
  }

  render = () => {
    if (!this.state.groups.length) return null;
    return (
      <GroupsContainer>
        {this.state.groups.map((group, i) => (
          <Group key={`#group${i}`} members={group} />
        ))}
      </GroupsContainer>
    );
  };
}

export default RandomGroups;
