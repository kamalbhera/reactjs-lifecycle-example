import React, { Component } from "react";

export default class LifecycleMounting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log("Constructor Called");
  }

  componentDidMount() {
    console.log("COMPONENT_DID_MOUNT");
  }
  render() {
    console.log("Render Called");
    return (
      <div>
        <h1>Hello</h1>
        <p>Hello</p>
      </div>
    );
  }
}
