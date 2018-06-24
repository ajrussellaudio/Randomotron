import React, { Component } from "react";
import StudentList from "./components/StudentList";

class App extends Component {
  render = () => {
    return (
      <div className="App">
        <StudentList students={[]} />
      </div>
    );
  };
}

export default App;
