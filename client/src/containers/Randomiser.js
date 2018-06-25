import React from "react";
import SizeSelector from "../components/SizeSelector";
import RandomGroups from "../components/RandomGroups";

class Randomiser extends React.Component {
  state = { size: null };

  handleSizeChange = data => {
    this.setState({ size: data.value });
  };

  render = () => (
    <div>
      <SizeSelector {...this.state} onChange={this.handleSizeChange} />
      <RandomGroups {...this.state} {...this.props} />
    </div>
  );
}

export default Randomiser;
