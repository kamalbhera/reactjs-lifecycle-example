//! setState when we call AJAX, Fetching APi
//! Batching will not performed, setState becomes synchronous at that time
import React, { Component } from "react";

export default class SetStateDepth2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
  }
  testing() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("done");
      }, 5000);
    });
    promise.then(() => {
      //promise made the setState into a synchronous and
      this.setState({
        count: this.state.count + 10,
      });
      this.setState({
        count: this.state.count + 10,
      });
      this.setState({
        count: this.state.count + 10,
      });
    });
  }

  handleIncrease = () => {
    this.testing();
  };
  render() {
    console.log("render");
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrease}>Like</button>
        <button>Dislike</button>
      </div>
    );
  }
}
