import React, { Component } from "react";

export default class UpdatingEx2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
    console.log("constructor");
  }
  componentDidMount() {
    console.log("Mounted");
    this.setState({ value: 2 });
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
  }
  componentDidUpdate() {
    console.log("Updated");
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <p>{this.state.value}</p>
      </div>
    );
  }
}
