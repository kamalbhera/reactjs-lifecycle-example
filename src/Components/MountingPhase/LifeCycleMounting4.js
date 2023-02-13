import React, { Component } from "react";

export default class LifeCycleMounting4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log("constructor");
  }
  componentDidMount() {
    console.log("Mounted");
    this.setState({ count: 2 }, () => {
      this.setState({ count: 5 });
    });
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>Hi!</h1>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

//constructor render mounted render

//due to callback
