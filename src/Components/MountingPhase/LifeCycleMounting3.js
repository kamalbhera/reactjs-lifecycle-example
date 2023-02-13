import React, { Component } from "react";

export default class LifeCycleMounting3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log("constructor");
  }
  componentDidMount() {
    console.log("COMPONENT_DID_MOUNT");
    this.setState({ count: 5 });
    this.setState({ count: 12 });
  }

  render() {
    console.log("Render");
    return (
      <div>
        <h1>Hi!</h1>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

//output -  Rendered Mounted Rendered - Due to batching
//render method runs once
