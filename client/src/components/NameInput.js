import React from "react";
import styled from "styled-components";

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

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  save = event => {
    event.preventDefault();
    console.log(`saving ${this.state.name} as ${this.props._id}`);
  };

  render() {
    return (
      <Form onSubmit={this.save}>
        <StyledInput
          value={this.state.name || ""}
          onChange={this.handleChange}
          onBlur={this.save}
        />
      </Form>
    );
  }
}

export default NameInput;
