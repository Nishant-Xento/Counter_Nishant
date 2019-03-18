import React from "react";
import { render } from "react-dom";
import Button from "./Button";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  handleIncreament = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecreament = () => {
    this.setState({ count: this.state.count === 0 ? 0 : this.state.count - 1 });
  };
  handleReset = () => {
    this.setState({ count: 0 });
  };
  render() {
    return (
      <div className="text-center">
        <Button val="+" onClick={this.handleIncreament} />
        <span>{this.state.count}</span>
        <Button val="-" onClick={this.handleDecreament} />
        <div className="text-center" style={{ marginTop: "10px" }}>
          <Button val="Reset" onClick={this.handleReset} />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
