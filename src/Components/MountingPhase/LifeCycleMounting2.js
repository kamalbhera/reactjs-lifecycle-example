import React, { Component } from "react";

export default class LifeCycleMounting2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log("constructor called");
  }
  componentDidMount() {
    console.log("COMPONENT_DID_MOUNT");
    this.setState({ count: 2 });
  }

  render() {
    console.log("Render");
    return (
      <div>
        <h1>Hello</h1>
        <p>{this.state.count}</p>
      </div>
    );
  }
}
