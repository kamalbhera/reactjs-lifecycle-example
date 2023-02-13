import React, { Component } from "react";

export default class setStateDepth1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  //Due to batching - re-render once and called last object and value
  handleIncrease = () => {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleDecrease = () => {
    this.setState(
      (prevState) => {
        if (prevState.count === 0) {
          return;
        }
        return {
          count: prevState.count - 1,
        };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  //setState are asynchronous , we can make synchronous by added another arugment in the setState in both form

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrease}>Like</button>
        <button onClick={this.handleDecrease}>Dislike</button>
      </div>
    );
  }
}
