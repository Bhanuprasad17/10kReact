import React, { Component } from "react";

class CycleExample extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      updated: false,
    };
    console.log("1️⃣ Constructor");
  }

  componentDidMount() {
    console.log("2️⃣ componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("5️⃣ componentDidUpdate");

    // Trigger another state change, but only once
    if (!this.state.updated) {
      this.setState({ updated: true });
      console.log("👉 setState inside componentDidUpdate");
    }
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
    console.log("🔘 setState from button click");
  };

  render() {
    console.log("3️⃣/6️⃣ render");
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <h2>Updated: {this.state.updated ? "true" : "false"}</h2>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default CycleExample;
