import React, { Component } from "react";

class App extends Component {
  state = {
    students: []
  };

  componentDidMount = () => {
    fetch("/api/students")
      .then(res => res.json())
      .then(students => this.setState({ students: students }));
  };

  render = () => {
    const students = this.state.students.map(student => (
      <li>
        <p>
          <strong>{student.name}</strong>, {student.cohort}
        </p>
      </li>
    ));
    return (
      <div className="App">
        <h1>Random-O-Tron</h1>
        <ul>{students}</ul>
      </div>
    );
  };
}

export default App;
