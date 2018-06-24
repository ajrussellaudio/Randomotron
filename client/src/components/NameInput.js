import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import ApiRequest from "../services/ApiRequest";

const StyledInput = styled.input`
  margin: 0;
  padding: 0 5px;
  display: inline;
  border: 0;
  width: 100px;
  font-size: 1em;
  font-family: sans-serif;
  &:focus {
    outline: none;
  }
`;

const Form = styled.form`
  display: inline;
`;

class NameInput extends React.Component {
  state = { name: this.props.name };

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
    ApiRequest.post(url, response => {
      console.log(response);
    });
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
