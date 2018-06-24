import React, { Component } from "react";
import StudentList from "./containers/StudentList";

class App extends Component {
  render = () => {
    return (
      <div className="App">
        <StudentList cohort="g4" />
      </div>
    );
  };
}

export default App;
