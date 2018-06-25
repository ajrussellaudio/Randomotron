import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import ApiRequest from "../services/ApiRequest";

const StyledInput = styled.input`
  margin: 0;
  padding: 5px;
  display: inline;
  border: 0;
  width: 80%;
  min-width: 40px;
  max-width: 20rem;
  font-size: 1em;
  font-family: inherit;
  color: inherit;
`;

const Form = styled.form`
  display: inline;
`;

class NameInput extends React.Component {
  state = { ...this.props };

  handleTyping = event => {
    this.setState({ name: event.target.value });
  };

  handleNameChange = event => {
    event.preventDefault();
    if (this.nameHasChanged(event.target)) {
      this.save();
    }
  };

  nameHasChanged = input => {
    return (
      input.name &&
      input.value !== this.props.name &&
      input.name.value !== this.props.name
    );
  };

  save = () => {
    const url = `/api/students/${this.props._id}`;
    ApiRequest.post(url, this.state);
  };

  render() {
    return (
      <Form onSubmit={this.handleNameChange}>
        <Icon icon={faUserCircle} />{" "}
        <StyledInput
          name="name"
          value={this.state.name || ""}
          onChange={this.handleTyping}
          onBlur={this.handleNameChange}
        />
      </Form>
    );
  }
}

export default NameInput;
