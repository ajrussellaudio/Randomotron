import React, { Component } from "react";
import SelectBox from "./components/SelectBox";

class App extends Component {
  render = () => {
    return (
      <div className="App">
        <h1>Random-O-Tron</h1>
        <SelectBox />
      </div>
    );
  };
}

export default App;
